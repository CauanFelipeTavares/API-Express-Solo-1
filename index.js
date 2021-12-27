const express = require('express')
require('dotenv/config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.send('Ok.')
})

require('./src/controllers/index')(app)

app.listen(process.env.PORT || 8181, () => {
    console.log("Rodando em http://localhost:8181")
})