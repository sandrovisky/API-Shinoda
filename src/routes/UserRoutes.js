const express = require('express')

const userRoutes = express.Router()

const UserController = require('../controllers/UserController')

userRoutes.get('', UserController.index)
userRoutes.get('/login/:usuario/:senhaHash', UserController.indexLogin)
userRoutes.get('/:usuario', UserController.findUser)
userRoutes.post('', UserController.store)
userRoutes.delete('/:id', UserController.delete)
userRoutes.put('/:id', UserController.update)

module.exports = userRoutes