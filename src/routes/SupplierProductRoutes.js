const express = require('express')

const supplierProductRoutes = express.Router()

const SupplierProductController = require('../controllers/SupplierProductController')

supplierProductRoutes.get('', SupplierProductController.index)
supplierProductRoutes.get('/products', SupplierProductController.indexProducts)
supplierProductRoutes.get('/products/:idProduct', SupplierProductController.indexOneProducts)
supplierProductRoutes.post('', SupplierProductController.store)
supplierProductRoutes.delete('', SupplierProductController.delete)

module.exports = supplierProductRoutes