// app.js
// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const connectDB = require('./Config/DatabaseConfig');
const productRoutes = require('./Routes/ProductRoute');
const userRoutes = require('./Routes/UserRoutes');
const sendEmail = require('./Middleware/emailsender'); // Import the email sender middleware

const app = express();

// Middleware
app.use(express.json()); // Middleware to parse JSON request bodies

// Routes
app.use('/products', productRoutes); // Use the product routes
app.use('/users', userRoutes); // Use the user routes

// Connect to MongoDB and start server
connectDB(); // Connect to MongoDB

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

