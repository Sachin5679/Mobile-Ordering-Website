const express = require('express')
const prodRoute = require('./routes/productAPI')
const connectDB = require('./connectDB')
const cors = require('cors')
require("dotenv").config();
const app = express()


const PORT = process.env.PORT;
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET"],
        credentials: true,
    }
))
app.use(express.json())
connectDB();

app.get('/', (req, res) => {
    res.json("Hello")
})

app.use('/products', prodRoute)
app.listen(PORT, () => {
    console.log("Server running");
})