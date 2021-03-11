const express = require('express')

const productRoutes = express.Router()

const ProductController = require('../controllers/ProductController')

productRoutes.get('', ProductController.index)
productRoutes.get('/:id', ProductController.indexOne)
productRoutes.post('', ProductController.store)
productRoutes.delete('/:id', ProductController.delete)
productRoutes.put('/:id', ProductController.update)

module.exports = productRoutes