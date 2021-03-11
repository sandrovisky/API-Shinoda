const express = require('express')

const loteRoutes = express.Router()

const LoteItensController = require('../controllers/LoteItensController')

loteRoutes.get('', LoteItensController.index)
loteRoutes.get('/:id', LoteItensController.indexLote)
loteRoutes.get('/move/:idMove', LoteItensController.indexVolumeTable)
loteRoutes.get('/lote/:idMove/:lote/:idProduct', LoteItensController.indexOne)
loteRoutes.post('', LoteItensController.store)
loteRoutes.delete('/:id', LoteItensController.delete)
loteRoutes.put('', LoteItensController.update)

module.exports = loteRoutes