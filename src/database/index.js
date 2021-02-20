const Sequelize = require('sequelize')
const dbConfig = require ('../config/database')

//importação dos models
const Supplier = require('../model/Supplier')
const Product = require('../model/Product')
const User = require('../model/User')
const Equipment = require('../model/Equipment')
const SupplierProduct = require('../model/SupplierProduct')
const Move = require('../model/Move')
const MoveItens = require('../model/MoveItens')
const LoteVolume = require('../model/LoteVolume')


const connection = new Sequelize(dbConfig)


Supplier.init(connection)
Product.init(connection)
User.init(connection)
Equipment.init(connection) 
SupplierProduct.init(connection)
Move.init(connection)
MoveItens.init(connection)
LoteVolume.init(connection)

SupplierProduct.associate(connection.models)
LoteVolume.associate(connection.models)
Move.associate(connection.models)
MoveItens.associate(connection.models)

module.exports = connection