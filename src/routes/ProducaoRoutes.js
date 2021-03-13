const express = require('express')

const producaoRoutes = express.Router()

const ProducaoController = require('../controllers/ProducaoController')

producaoRoutes.get('',  ProducaoController.index)
producaoRoutes.get('/:id',  ProducaoController.indexOne)
producaoRoutes.post('',  ProducaoController.store)
producaoRoutes.delete('',  ProducaoController.delete)
producaoRoutes.put('',  ProducaoController.update)

module.exports = producaoRoutes