const express = require('express')
const SupplierController = require('./controllers/SupplierController')
const routes = express.Router()

routes.get('/suppliers', SupplierController.index)
routes.post('/suppliers', SupplierController.store)
routes.delete('/cadastro/:id', SupplierController.delete)

module.exports = routes;