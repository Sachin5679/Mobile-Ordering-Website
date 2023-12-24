const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const filters = {
      price: req.query.price,
      os: req.query.os,
      processor: req.query.processor,
    };
    const searchTerm = req.query.searchTerm
  
    try {
      let query = {};
  
      if (filters.price) {
        query.price = { $lte: parseInt(filters.price) };
      }
      if (filters.os) {
        query.os = { $in: filters.os };
      }
      if (filters.processor) {
        query.processor = { $in: filters.processor };
      }
      if (searchTerm) {
        query.name = { $regex: new RegExp(searchTerm, 'i') };
      }
  
      const totalCount = await Product.countDocuments(query);
      const totalPages = Math.ceil(totalCount / limit);
      const products = await Product.find(query).skip((page - 1) * limit).limit(limit);
  
      const prodWithImg = products.map((product) => ({
        ...product._doc,
        image: `data:${product.image.contentType};base64,${product.image.data.toString('base64')}`,
      }));
  
      res.status(201).json({
        products: prodWithImg,
        totalPages: totalPages,
        currentPage: page,
      });
    } catch (err) {
      res.status(500).json({ error: 'An error has occurred' });
    }
  };
  

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
    const image = req.file;

    if (!name || !brand || !price || !os || !processor || !memory) {
        return res.status(400).json({ error: 'All attributes are required' });
    }

    if (!image) {
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