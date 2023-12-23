const express = require('express')
const prodRoute = require('./routes/productAPI')
const connectDB = require('./connectDB')
require("dotenv").config();
const app = express()


const PORT = 3000;

app.use(express.json())
connectDB();

app.use('/products', prodRoute)
app.listen(PORT, () => {
    console.log("Server running");
})