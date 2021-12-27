const mongoose = require('../database/index')

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    senha: {
        type: String,
        require: true,
        select: true,
    },
    DataDeCriacao: {
        type: Date,
        default: Date.now(),
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User