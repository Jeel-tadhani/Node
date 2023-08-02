const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, updateProductPut } = require('../controllers/productsController');

const router = express.Router();
router.use(express.json())


router.route('/')
.get(getAllProducts)
.post(createProduct)

router.route('/:id')
.patch(updateProduct)
.delete(deleteProduct)
.put(updateProductPut)

// router.get('/mobile',(req,res)=>{
//     res.send('All Mobile product list')
// })

// router.get('/clothes',(req,res)=>{
//     res.send('All clothes product list')
// })

// router.route('/bags')
// .get((req, res) => {
//     res.send("list of bags")
// })
// .post((req ,res) => {
//     res.send("list of bags created")
// })

module.exports = router;