const express = require('express')

const moveRoutes = express.Router()

const MoveController = require('../controllers/MoveController')

moveRoutes.get('', MoveController.index)
moveRoutes.get('/product/:idProduct', MoveController.indexByProduct)
moveRoutes.get('/:id', MoveController.indexOne)
moveRoutes.post('', MoveController.store)
moveRoutes.delete('/:id', MoveController.delete)
moveRoutes.put('', MoveController.update)

module.exports = moveRoutes