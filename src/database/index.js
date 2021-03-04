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
const LoteItens = require('../model/LoteItens')
const MoveItensVolume = require('../model/MoveItensVolume')
const MoveItensVolumeTable = require('../model/MoveItensVolumeTable')
const Analysis = require('../model/Analysis')
const AnalysisData = require('../model/AnalysisData')


const connection = new Sequelize('shinoda1', 'sandrovisky', 'shinoda!123', {
    host: 'sandrovisky.database.windows.net',
    dialect: 'mssql',
  
    // Use this if you're on Windows Azure
    dialectOptions: { 
      encrypt: true 
    },
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
  })


Supplier.init(connection)
Product.init(connection)
User.init(connection)
Equipment.init(connection) 
SupplierProduct.init(connection)
Move.init(connection)
MoveItens.init(connection)
LoteItens.init(connection)
MoveItensVolume.init(connection)
MoveItensVolumeTable.init(connection)
Analysis.init(connection)
AnalysisData.init(connection)

SupplierProduct.associate(connection.models)
LoteItens.associate(connection.models)
Move.associate(connection.models)
MoveItens.associate(connection.models)
MoveItensVolume.associate(connection.models)
MoveItensVolumeTable.associate(connection.models)
Analysis.associate(connection.models)
AnalysisData.associate(connection.models)

module.exports = connection