const express = require('express')
const UserModel = require('../models/user')
const router = express.Router()


/*
router.get('/', (req,res) => {
    try{
        return
    }catch{
        return
    }
})
*/


router.get('/teste', (req,res) => {
    try {
        return res.status(200).send({teste: "rota funcional"})
    }catch(err) {
        console.log(err)
        return res.status(401).send({error: "rota de teste não funcionou"})
    }
})

router.get('/GetAll', async (req,res) => {
    try {
        const users = await UserModel.find()

        return res.send({ users })

    }catch(err) {
        console.log(err)
        return res.status(400).send({ error: 'Não foi possível listar os usuarios'})
    }
})

router.post('/Create', async (req,res) => {
    try {
        const { nome, email, senha } = req.body

        const user = await UserModel.create({ nome, email, senha})

        return res.send({ user })

    }catch(err) {
        console.log(err)
        return res.status(400).send({ error: 'Não foi possível criar um novo usuário'})
    }
})

router.put('/put/:userId', async (req,res) => {
    try {
        const { nome, senha } = req.body

        const user = await UserModel.findByIdAndUpdate(req.params.userId, {nome, senha}, { new: true })

        return res.send({ user })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Não foi possível atualizar seu usuário'})
    }
})

router.delete('/delete/:userId', async (req,res) => {
    //console.log(req.params.userId)
    try {
        await UserModel.findByIdAndRemove(req.params.userId)

        return res.send({ message: "Remoção de usuário feita com sucesso"})

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Não foi possível deletar seu projeto'})
    }
})


module.exports = app => app.use('/users', router)