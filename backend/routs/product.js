const express=require('express')
const {getProducts,getSingleProducts}=require("../controllers/productcontroller")
const router=express.Router();

router.get('/products',getProducts)
router.get('/products/:id',getSingleProducts)



module.exports=router;