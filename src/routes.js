const express = require('express')

const SupplierController = require('./controllers/SupplierController')
const ProductController = require('./controllers/ProductController')
const UserController = require('./controllers/UserController')
const EquipmentController = require('./controllers/EquipmentController')

const routes = express.Router()

routes.get('/suppliers', SupplierController.index)
routes.post('/suppliers', SupplierController.store)
routes.delete('/suppliers/:id', SupplierController.delete)
routes.put('/suppliers/:id', SupplierController.update)

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.delete('/products/:id', ProductController.delete)
routes.put('/products/:id', ProductController.update)

routes.get('/users', UserController.index)
routes.get('/users/:', UserController.encontraUsuario)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)

routes.get('/equipment', EquipmentController.index)
routes.post('/equipment', EquipmentController.store)
routes.delete('/equipment/:id', EquipmentController.delete)
routes.put('/equipment/:id', EquipmentController.update)

module.exports = routes;