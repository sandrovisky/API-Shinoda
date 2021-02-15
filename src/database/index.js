const Sequelize = require('sequelize')
const dbConfig = require ('../config/database')

const Supplier = require('../model/Supplier')
const Product = require('../model/Product')
const User = require('../model/User')
const Equipment = require('../model/Equipment')

const connection = new Sequelize(dbConfig)

Supplier.init(connection)
Product.init(connection)
User.init(connection)
Equipment.init(connection)

module.exports = connection