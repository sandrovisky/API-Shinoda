const express = require('express')

const supplierRoutes = express.Router()

const SupplierController = require('../controllers/SupplierController')

supplierRoutes.get('', SupplierController.index)
supplierRoutes.get('/:id', SupplierController.indexOne)
supplierRoutes.post('', SupplierController.store)
supplierRoutes.delete('/:id', SupplierController.delete)
supplierRoutes.put('/:id', SupplierController.update)

module.exports = supplierRoutes