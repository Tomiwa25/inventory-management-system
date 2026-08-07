const Product = require('../Models/Product');

//Create a new product
exports.createProduct = async (req, res) => {
    try {
        if (!req.body.name || !req.body.size || !req.body.description || !req.body.price || !req.body.quantity ) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const { name, size, description, price, quantity  } = req.body;
        const product = new Product({ name, size, description, price, quantity });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//update a product
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!req.body.name || !req.body.size || !req.body.description || !req.body.price || !req.body.quantity ) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const { name, size, description, price, quantity } = req.body;
        const product = await Product.findByIdAndUpdate(id, { name, size, description, price, quantity }, { new: true });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get all products
exports.getAllProducts = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: 'Request body is required' });
        }
        const products = await Product.find();
        res.status(200).json({ message: 'Products retrieved successfully', products });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'Product ID is required' });
        }   
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product retrieved successfully', product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Product ID is required' });
        }
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully', product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
