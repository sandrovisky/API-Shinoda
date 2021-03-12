const express = require('express')

const producaoItensRoutes = express.Router()

const ProducaoItensController = require('../controllers/ProducaoItensController')

producaoItensRoutes.get('',  ProducaoItensController.index)
producaoItensRoutes.get('/producao/:idProducao',  ProducaoItensController.indexByProducao)
producaoItensRoutes.post('',  ProducaoItensController.store)
producaoItensRoutes.delete('',  ProducaoItensController.delete)
producaoItensRoutes.put('/:id',  ProducaoItensController.update)

module.exports = producaoItensRoutes