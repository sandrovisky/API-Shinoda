const Sequelize = require('sequelize')
const dbConfig = require ('../config/database')

const Supplier = require('../model/Supplier')

const connection = new Sequelize(dbConfig)

Supplier.init(connection)

module.exports = connection