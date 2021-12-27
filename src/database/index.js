const mongoose = require('mongoose')
require('dotenv/config').config()

mongoose.connect(process.env.DB_CLUSTER)

mongoose.Promise = global.Promise

module.exports = mongoose