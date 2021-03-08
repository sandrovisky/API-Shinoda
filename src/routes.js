const express = require('express')

//importação dos controladores
const SupplierController = require('./controllers/SupplierController')
const ProductController = require('./controllers/ProductController')
const UserController = require('./controllers/UserController')
const EquipmentController = require('./controllers/EquipmentController')
const SupplierProductController = require('./controllers/SupplierProductController')
const MoveController = require('./controllers/MoveController')
const MoveItensController = require('./controllers/MoveItensController')
const LoteItensController = require('./controllers/LoteItensController')
const MoveItensVolumeController = require('./controllers/MoveItensVolumeController')
const MoveItensVolumeTableController = require('./controllers/MoveItensVolumeTableController')
const AnalysisController = require('./controllers/AnalysisController')
const AnalysisDataController = require('./controllers/AnalysisDataController')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.json("foi")
    console.log("Database_URL", process.env.DATABASE_URL);
})

//rotas de fornecedores
routes.get('/suppliers', SupplierController.index)
routes.get('/suppliers/:id', SupplierController.indexOne)
routes.post('/suppliers', SupplierController.store)
routes.delete('/suppliers/:id', SupplierController.delete)
routes.put('/suppliers/:id', SupplierController.update)

//rotas de produtos
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.indexOne)
routes.post('/products', ProductController.store)
routes.delete('/products/:id', ProductController.delete)
routes.put('/products/:id', ProductController.update)

//rotas de usuarios
routes.get('/users', UserController.index)
routes.get('/users/login/:usuario/:senha', UserController.indexLogin)
routes.get('/users/:usuario', UserController.findUser)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)

//rotas de equipamentos
routes.get('/equipment', EquipmentController.index)
routes.post('/equipment', EquipmentController.store)
routes.delete('/equipment/:id', EquipmentController.delete)
routes.put('/equipment/:id', EquipmentController.update)

//rotas de fornecedores_produtos
routes.get('/suppliers-products', SupplierProductController.index)
routes.get('/suppliers-products/products', SupplierProductController.indexProducts)
routes.get('/suppliers-products/products/:idProduct', SupplierProductController.indexOneProducts)
routes.post('/suppliers-products', SupplierProductController.store)
routes.delete('/suppliers-products', SupplierProductController.delete)

//rotas de moves
routes.get('/moves', MoveController.index)
routes.get('/moves/:id', MoveController.indexOne)
routes.post('/moves', MoveController.store)
routes.delete('/moves/:id', MoveController.delete)
routes.put('/moves/:id', MoveController.update)

//rotas de move itens
routes.get('/move-itens', MoveItensController.index)
routes.get('/move-itens/:idMove', MoveItensController.indexOne)
routes.get('/move-itens/move/:id', MoveItensController.indexOneMove)
routes.post('/move-itens', MoveItensController.store)
routes.delete('/move-itens/:id', MoveItensController.delete)
routes.put('/move-itens/:id', MoveItensController.update)

//rotas de lotes
routes.get('/lotes', LoteItensController.index)
routes.get('/lotes/table/:codigo', LoteItensController.indexTables)
routes.post('/lotes', LoteItensController.store)
routes.delete('/lotes/:id', LoteItensController.delete)
routes.put('/lotes/:id', LoteItensController.update)

//rotas de MoveItensVolume
routes.get('/move-itens-volumes', MoveItensVolumeController.index)
routes.get('/move-itens-volumes/:idMove', MoveItensVolumeController.indexAll)
routes.get('/move-itens-volumess/:lastId/:quantidadePaletes', MoveItensVolumeController.indexMove)
routes.get('/move-itens-volumes/entrada/:lastId/:quantidadePaletes/:codigo', MoveItensVolumeController.indexEntrada)
routes.post('/move-itens-volumes', MoveItensVolumeController.store)
routes.delete('/move-itens-volumes/:id', MoveItensVolumeController.delete)
routes.put('/move-itens-volumes', MoveItensVolumeController.update)

//rotas de MoveItensVolumeTable
routes.get('/move-itens-volumes-tables', MoveItensVolumeTableController.index)
routes.get('/move-itens-volumes-tables/table/:id', MoveItensVolumeTableController.indexTable)
routes.get('/move-itens-volumes-tables/:idMove', MoveItensVolumeTableController.indexAll)
routes.post('/move-itens-volumes-tables', MoveItensVolumeTableController.store)
routes.delete('/move-itens-volumes-tables/:id', MoveItensVolumeTableController.delete)
routes.put('/move-itens-volumes-tables/:id', MoveItensVolumeTableController.update)

//rotas de analysis
routes.get('/analyses', AnalysisController.index)
routes.get('/analyses/:id', AnalysisController.indexOne)
routes.post('/analyses', AnalysisController.store)
routes.delete('/analyses/:id', AnalysisController.delete)
routes.put('/analyses/:id', AnalysisController.update)

//rotas de dados das analises
routes.get('/analysis-data', AnalysisDataController.index)
routes.get('/analysis-data/:idAnalysis', AnalysisDataController.indexOne)
routes.post('/analysis-data', AnalysisDataController.store)
routes.delete('/analysis-data/:id', AnalysisDataController.delete)
routes.put('/analysis-data/:id', AnalysisDataController.update)

module.exports = routes;