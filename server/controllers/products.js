const Product = require('../models/product')

const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find()
        res.status(201).json(products)
    } catch (err) {
        res.status(500).json({ error: 'An error has occured' });
    }
}

const getProductById = async(req, res) => {
    const id = req.params.id

    try {
        const product = await Product.findById(id)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({error: 'An error has occured'})
    }
}

const addProduct = async(req, res) => {
    const { name, brand, price, os, processor, memory } = req.body;

    if (!name || !brand || !price || !os || !processor || !memory) {
        return res.status(400).json({ error: 'All attributes are required' });
    }

    if (!req.file) {
        return res.status(400).json({ error: 'Image is required' });
    }

    try {
        const newProduct = new Product({
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            },
            name,
            brand,
            price,
            os,
            processor,
            memory           
        })
        await newProduct.save()
        res.status(201).json({message: "Item successfully saved", newProduct})
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'An error has occured.'})
    }

}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
}