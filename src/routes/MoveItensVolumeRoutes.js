const express = require('express')

const moveItensVolumeRoutes = express.Router()

const MoveItensVolumeController = require('../controllers/MoveItensVolumeController')

moveItensVolumeRoutes.get('', MoveItensVolumeController.index)
moveItensVolumeRoutes.get('/:idMove', MoveItensVolumeController.indexAll)
moveItensVolumeRoutes.get('/codigo/:codigo', MoveItensVolumeController.indexCodigo)
moveItensVolumeRoutes.get('/loteitens/:idLoteitens', MoveItensVolumeController.indexByLote)
moveItensVolumeRoutes.post('', MoveItensVolumeController.store)
moveItensVolumeRoutes.delete('', MoveItensVolumeController.delete)
moveItensVolumeRoutes.put('', MoveItensVolumeController.update)

module.exports = moveItensVolumeRoutes