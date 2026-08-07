// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/DatabaseConfig');

// Load environment variables from .env file
dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const productRoutes = require('./Routes/ProductRoute');


app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/products', productRoutes); // Use the product routes

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

