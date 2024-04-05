const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    strok:String,
    numOfReviews:String,
    createdAt:Date
})
const productMOdel=mongoose.model('Product',productSchema);
module.exports=productMOdel