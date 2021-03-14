const express = require('express')

const devolucaoRoutes = express.Router()

const DevolucaoController = require('../controllers/DevolucaoController')

devolucaoRoutes.get('', DevolucaoController.index)
devolucaoRoutes.get('/producao/:idProducao', DevolucaoController.indexByProducao)
devolucaoRoutes.post('', DevolucaoController.store)
devolucaoRoutes.delete('', DevolucaoController.delete)
devolucaoRoutes.put('/:id', DevolucaoController.update)

module.exports = devolucaoRoutes