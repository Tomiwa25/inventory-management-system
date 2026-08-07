const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true  
    },
    
}, 
{ timestamps: true } //Date and time of creation and update
);

// Create Model
const Product = mongoose.model('Product', ProductSchema);

// Export Model
module.exports = Product;