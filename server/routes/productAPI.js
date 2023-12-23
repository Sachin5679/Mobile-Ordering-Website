const express = require('express')
const router = express.Router();
const multer = require('multer')
const { getAllProducts, getProductById, addProduct } = require('../controllers/products')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/add', upload.single('image'), addProduct);

module.exports = router