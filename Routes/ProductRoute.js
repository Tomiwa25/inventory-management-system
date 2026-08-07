const express = require('express');
const router = express.Router();

// Import the product controller
const productController = require('../Controllers/ProductController');

//define routes for product operations
router.post('/createproduct', productController.createProduct);
router.put('/updateproduct/:id', productController.updateProduct);
router.get('/getallproducts', productController.getAllProducts);
router.get('/getproduct/:id', productController.getProductById);
router.delete('/deleteproduct/:id', productController.deleteProduct);

module.exports = router;