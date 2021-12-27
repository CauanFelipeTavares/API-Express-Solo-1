const mongoose = require('mongoose')
require('dotenv/config')

mongoose.connect("mongodb+srv://Calires:felipe23@cluster0.v9dm3.mongodb.net/express1")

mongoose.Promise = global.Promise

module.exports = mongoose