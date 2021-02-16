const Sequelize = require('sequelize')
const dbConfig = require ('../config/database')

//importação dos models
const Supplier = require('../model/Supplier')
const Product = require('../model/Product')
const User = require('../model/User')
const Equipment = require('../model/Equipment')
const SupplierProduct = require('../model/SupplierProduct')

const connection = new Sequelize(dbConfig)

Supplier.init(connection)
Product.init(connection)
User.init(connection)
Equipment.init(connection) 
SupplierProduct.init(connection)

SupplierProduct.associate(connection.models)
//Supplier.associate(connection.models)

module.exports = connection