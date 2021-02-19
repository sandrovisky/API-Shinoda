const express = require('express')

//importação dos controladores
const SupplierController = require('./controllers/SupplierController')
const ProductController = require('./controllers/ProductController')
const UserController = require('./controllers/UserController')
const EquipmentController = require('./controllers/EquipmentController')
const SupplierProductController = require('./controllers/SupplierProductController')
const MoveController = require('./controllers/MoveController')
const MoveItensController = require('./controllers/MoveItensController')


const routes = express.Router()

//rotas de fornecedores
routes.get('/suppliers', SupplierController.index)
routes.post('/suppliers', SupplierController.store)
routes.delete('/suppliers/:id', SupplierController.delete)
routes.put('/suppliers/:id', SupplierController.update)

//rotas de produtos
routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.delete('/products/:id', ProductController.delete)
routes.put('/products/:id', ProductController.update)

//rotas de usuarios
routes.get('/users', UserController.index)
routes.get('/users/:usuario', UserController.findUser)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)

//rotas de equipamentos
routes.get('/equipment', EquipmentController.index)
routes.post('/equipment', EquipmentController.store)
routes.delete('/equipment/:id', EquipmentController.delete)
routes.put('/equipment/:id', EquipmentController.update)

//rotas de fornecedores_produtos
routes.get('/suppliers-products/products', SupplierProductController.indexProducts)
routes.post('/suppliers-products', SupplierProductController.store)
routes.delete('/suppliers-products', SupplierProductController.delete)

//rotas de moves
routes.get('/moves', MoveController.index)
routes.post('/moves', MoveController.store)
routes.delete('/moves/:id', MoveController.delete)
routes.put('/moves/:id', MoveController.update)

//rotas de equipamentos
routes.get('/move-itens', MoveItensController.index)
routes.get('/move-itens/:idMove', MoveItensController.indexOne)
routes.post('/move-itens', MoveItensController.store)
routes.delete('/move-itens/:id', MoveItensController.delete)
routes.put('/move-itens/:id', MoveItensController.update)

module.exports = routes;