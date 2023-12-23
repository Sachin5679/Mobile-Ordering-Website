const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
        data: {
            type: Buffer,
            required: true  
        },
        contentType: {
            type: String,
            required: true
        },
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    os: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    memory: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;