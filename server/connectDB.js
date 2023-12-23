const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log("Connected to DB");
    } catch (err) {
        console.log("DB connection failed" + err);
    }
}

module.exports = connectDB
