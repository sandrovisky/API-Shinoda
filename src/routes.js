const express = require('express')
const SupplierController = require('./controllers/SupplierController')
const routes = express.Router()

routes.get('/suppliers', SupplierController.index)
routes.post('/suppliers', SupplierController.store)
routes.delete('/suppliers/:id', SupplierController.delete)
routes.put('/suppliers/:id', SupplierController.update)

module.exports = routes;