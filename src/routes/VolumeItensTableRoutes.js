const express = require('express')

const volumeItensTableRoutes = express.Router()

const VolumeItensTableController = require('../controllers/VolumeItensTableController')

volumeItensTableRoutes.get('', VolumeItensTableController.index)
volumeItensTableRoutes.get('/moves/:idMove', VolumeItensTableController.indexByMoves)
volumeItensTableRoutes.post('', VolumeItensTableController.store)
volumeItensTableRoutes.delete('/:id', VolumeItensTableController.delete)

module.exports = volumeItensTableRoutes