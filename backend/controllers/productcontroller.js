const productMOdel=require('../models/productModel')

exports.getProducts=async(req,res,next)=>{
    const query=req.query.keyword ? {name:{
        $regex:req.query.keyword,
        $option:'i'
    }}:{}
    const products=await productMOdel.find(query);

    res.json({
        success:true,
        products
    })
}
//GET Single product API - /api/v1/product/:id
exports.getSingleProducts=async(req,res,next)=>{
    try{
        const id=req.params.id
        const product=await productMOdel.findById(id);
        res.json({
            success:true,
            product
        })
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:"unable to get the product with the id"
        })
    }
    
}
