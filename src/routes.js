const express = require('express')
const ClienteController = require('./controllers/ProviderController')
const routes = express.Router()

routes.get('/suppliers', ClienteController.index)
routes.post('/suppliers', ClienteController.store)
routes.delete('/cadastro/:id', ClienteController.delete)

module.exports = routes;