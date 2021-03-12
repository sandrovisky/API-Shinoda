const express = require('express')

const configRoutes = express.Router()

const ConfigController = require('../controllers/ConfigController')

configRoutes.get('', ConfigController.index)
configRoutes.post('', ConfigController.store)
configRoutes.put('', ConfigController.update)

module.exports = configRoutes