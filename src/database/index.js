const mongoose = require('mongoose')
//require('dotenv/config')

mongoose.connect(`mongodb+srv://Calires:${process.env.DB_CLUSTER}@cluster0.v9dm3.mongodb.net/express1`)
//console.log(process.env.DB_CLUSTER)
//https://express-test-one-calires.herokuapp.com

mongoose.Promise = global.Promise

module.exports = mongoose