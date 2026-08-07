//Mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }, 
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
      
},
    {timestamps: true} //Date and time of creation and update
);

// Create Model
const User = mongoose.model('User', UserSchema);

// Export Model
module.exports = User;