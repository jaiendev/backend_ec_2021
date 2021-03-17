const createProduct = require('../controllers/product')
const express = require('express')
const router = express.Router()
const ProductService = require('../controllers/product')
const product = require('../models/Product')
router.post('/add-product', ProductService.createProduct)
router.put('/inative', ProductService.Inactive)

module.exports=router
