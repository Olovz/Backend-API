const express = require('express');
const Product = require('../models/productModel');
const {createProduct, getProducts, getProduct, putProduct, deleteProduct} = require('../controllers/productController')

const router = express.Router();

// send new data/product
router.post('/', createProduct)

// get all data/products
router.get('/', getProducts)

// get a single data/product
router.get('/:id', getProduct)

// update data/product
router.put('/:id', putProduct)

// Delete data/Product
router.delete('/:id', deleteProduct)

module.exports = router;
