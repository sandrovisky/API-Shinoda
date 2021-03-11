const express = require('express')

const analysisDataRoutes = express.Router()

const AnalysisDataController = require('../controllers/AnalysisDataController')

analysisDataRoutes.get('', AnalysisDataController.index)
analysisDataRoutes.get('/analysis-data/:idAnalysis', AnalysisDataController.indexOne)
analysisDataRoutes.post('/analysis-data', AnalysisDataController.store)
analysisDataRoutes.delete('/analysis-data/:id', AnalysisDataController.delete)
analysisDataRoutes.put('/analysis-data/:id', AnalysisDataController.update)

module.exports = analysisDataRoutes