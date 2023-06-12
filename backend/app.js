require('dotenv').config();
const express = require('express');
const app = express();
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConnection');
const mongoose = require('mongoose');
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
// const PORT = process.env.PORT || 8000


 
app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(errorHandler)
app.use('/uploads', express.static('uploads'));

//Routes
app.use('/users', require('./routes/userRoutes'));
app.use('/customers', require('./routes/customerRoutes'));
app.use('/products', require('./routes/productRoutes'));
app.use('/orders', require('./routes/orderRoutes'));
app.use('/admin/auth', require('./routes/adminAuthRoutes.js'));
app.use('/customer/auth', require('./routes/customerAuthRoutes'));



 
connectDB()

app.listen(8000,() => {
    console.log(`Server Running On Port 8000 `);
});

