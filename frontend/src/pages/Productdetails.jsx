import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify'

const Productdetails = ({cartitems,setcartitems}) => {
  const {id}=useParams()
  const [qty,setqty]=useState(1)
  const [product,setproduct]=useState()

  const minus=()=>{
    if (qty>1){
        setqty((stock)=>stock-1)
    }
  }
  const plus=()=>{
    if(qty==product.stock){
        return 

    }
    setqty((state)=>state+1)
  }
  function addtocart(){
    const itemexits=cartitems.find((item)=>{
        return item.product._id==product._id
    })
    if(!itemexits){
        const newitem={product,qty}
        setcartitems([...cartitems,newitem])
        toast.success("Cart Item added succesfully!")
        
    }
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+'/products/'+id.slice(1))
    .then(res => res.json())
    .then( res => setproduct(res.product))
},[])

  return  product && <section className="productdeatails">
  <div className="left">
      <img src={product.images[0].image}
      alt="product_image" />
  </div>
  <div className="right">
      <h2 className="product-details-title">{product.name}</h2>
      <p className='product-id'>Product{id}</p>
      <hr />
      <div className="ratings-container">
          <p className='ratings-title-details'>Ratings</p>
          <div className="ratings">
              
              <div className="ratingfiller" style={{width : `${product.ratings/5 * 100}px`}} ></div>
          </div>
      </div>
      
      <hr />
      <h1 className='product-price-in-details'>{product.price}$</h1>
      <div className="addtocart-details">
          <div className="selecting-count">
              <span onClick={plus}>+</span>
              <p className="count-details">{qty}</p>
              <span onClick={minus} className='minus'>-</span>
          </div>
          <button className="addcartbtn-details" onClick={addtocart}>Add to Cart</button>
      </div>
      <hr />
      <div className="status-details">
          <p className="status-title-details">Status:</p>
          <h2 className="stock-status-details" style={product.stock >0?{color:"green"}:{color:"red"}}>{product.stock >0? "In Stock":"Not Available"}</h2>
      </div>
      <hr />
      <div className="description-details">
          <h2 className='description-details-title'>Description:</h2>
          <p className="description-content-details">
              {product.description}
          </p>
      </div>
      <hr />
      <p className="seller">Sold by:</p>
      <h4 className='seller-name'>{product.seller}</h4>
  </div>
</section>
   
  
}

export default Productdetails