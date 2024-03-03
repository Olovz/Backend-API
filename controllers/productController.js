const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')
// Send Product

const createProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// Get all products

const getProducts = asyncHandler(async(req, res) => {
    try {
        const procducts = await Product.find()
        res.status(200).json(procducts)
    } catch (error) {
        
        res.status(500)
        throw new Error(error.message)
}
})

// Get single product

const getProduct = asyncHandler( async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// Update/edit a product

const putProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if(!product){
            res.status(404)
            throw new Error(`cannot find any product with Id: ${id}`)
            
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// Delete a product

const deleteProduct = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404)
            throw new Error(`cannot find any prodcut with ID: ${id}`)
            
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})


module.exports = {
    createProduct,
    getProducts,
    getProduct,
    putProduct,
    deleteProduct
}