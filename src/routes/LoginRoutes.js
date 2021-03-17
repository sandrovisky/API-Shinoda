const express = require('express')

const auth = require('../middlewares/auth')

const loginRoutes = express.Router()

const UserController = require('../controllers/UserController')

loginRoutes.post('', UserController.loginPost)
loginRoutes.get('', auth, UserController.loginGet)

module.exports = loginRoutes