const createBook = require('../controllers/book')
const express = require('express')
const router = express.Router()
const BookService = require('../controllers/book')
const book = require('../models/Book')
router.post('/add-book', BookService.createBook)
router.put('/book-inactive', BookService.Inactive)

module.exports=router
