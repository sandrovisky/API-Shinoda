const express = require('express')

const producaoEquipamentoRoutes = express.Router()

const ProducaoEquipamentoController = require('../controllers/ProducaoEquipamentoController')

producaoEquipamentoRoutes.get('',  ProducaoEquipamentoController.index)
producaoEquipamentoRoutes.get('/producao/:idProducao',  ProducaoEquipamentoController.indexByProducao)
producaoEquipamentoRoutes.post('',  ProducaoEquipamentoController.store)
producaoEquipamentoRoutes.delete('',  ProducaoEquipamentoController.delete)
producaoEquipamentoRoutes.put('/:id',  ProducaoEquipamentoController.update)

module.exports = producaoEquipamentoRoutes