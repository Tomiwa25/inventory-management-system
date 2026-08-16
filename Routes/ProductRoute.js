const express = require('express');

//import the authentication middleware
const { verifyToken } = require('../Middleware/auth');

//import authorization middleware
const { authorizeRoles } = require('../Middleware/role');

const upload = require('../Config/UploadConfig');
const router = express.Router();

// Import the product controller
const productController = require('../Controllers/ProductController');

//define routes for product operations
router.post('/createproduct', verifyToken, authorizeRoles('superadmin'), productController.createProduct);
router.post('/createproductwithimage', verifyToken, authorizeRoles('superadmin'), productController.createProductWithImage);
router.put('/updateproduct/:id', verifyToken, authorizeRoles('superadmin'), productController.updateProduct);
router.get('/getallproducts', verifyToken, productController.getAllProducts);
router.get('/getproductbyid/:id', verifyToken, productController.getProductById);
router.delete('/deleteproduct/:id', verifyToken, authorizeRoles('superadmin'), productController.deleteProduct);

module.exports = router;