const express = require('express')

const equipmentRoutes = express.Router()

const EquipmentController = require('../controllers/EquipmentController')

equipmentRoutes.get('', EquipmentController.index)
equipmentRoutes.post('', EquipmentController.store)
equipmentRoutes.delete('/:id', EquipmentController.delete)
equipmentRoutes.put('/:id', EquipmentController.update)

module.exports = equipmentRoutes