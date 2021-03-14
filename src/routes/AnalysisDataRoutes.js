const express = require('express')

const analysisDataRoutes = express.Router()

const AnalysisDataController = require('../controllers/AnalysisDataController')

analysisDataRoutes.get('', AnalysisDataController.index)
analysisDataRoutes.get('/:idAnalysis', AnalysisDataController.indexOne)
analysisDataRoutes.post('', AnalysisDataController.store)
analysisDataRoutes.delete('/:id', AnalysisDataController.delete)
analysisDataRoutes.put('/:id', AnalysisDataController.update)

module.exports = analysisDataRoutes