const express = require('express')

const moveItensRoutes = express.Router()

const MoveItensController = require('../controllers/MoveItensController')

moveItensRoutes.get('', MoveItensController.index)
moveItensRoutes.get('/:idMove', MoveItensController.indexOne)
moveItensRoutes.get('/move/:id', MoveItensController.indexOneMove)
moveItensRoutes.post('', MoveItensController.store)
moveItensRoutes.delete('/:id', MoveItensController.delete)
moveItensRoutes.put('', MoveItensController.update)

module.exports = moveItensRoutes