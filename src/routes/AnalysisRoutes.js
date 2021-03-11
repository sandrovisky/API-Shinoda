const express = require('express')

const analysisRoutes = express.Router()

const AnalysisController = require('../controllers/AnalysisController')

analysisRoutes.get('', AnalysisController.index)
analysisRoutes.get('/:id', AnalysisController.indexOne)
analysisRoutes.post('', AnalysisController.store)
analysisRoutes.delete('', AnalysisController.delete)
analysisRoutes.put('', AnalysisController.update)

module.exports = analysisRoutes