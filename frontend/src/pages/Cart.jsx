import React, { Fragment, useState } from 'react';
import {toast} from "react-toastify"

const Cart = ({cartitems,setcartitems}) => {
  const [complete,setComplete]=useState(false)
  console.log(cartitems)
  function removecartitems(item){
    const filltered=cartitems.filter((items)=>{
      if(item.product._id !==items.product._id){
        return true
      }
    })
    setcartitems(filltered)
  }
  function placeOrderHandler() {
    fetch(process.env.REACT_APP_API_URL+'/order', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cartitems)
    })
    .then(() => { 
        setcartitems([]); 
        setComplete(true);
        toast.success("Order Success!")
    })
}
  function increaseqty(item) {
    if (item.product.stock == item.qty) {
        return;
    }
    const updatedItems = cartitems.map((i) => {
        if(i.product._id == item.product._id) {
            i.qty++
        }
        return i;
    })
    setcartitems(updatedItems)
}

function decreaseqty(item) {
    if (item.qty > 1) {
        const updatedItems = cartitems.map((i) => {
            if(i.product._id == item.product._id) {
                i.qty--
            }
            return i;
        })
        setcartitems(updatedItems)
    }
}
  return cartitems.length>0 ? <Fragment>
     <h2 className='cartitemstitle'>Your CartItems {cartitems.length}</h2>
     <div className="cart-container">
       <div className="cart-labeling">
         {cartitems.map((items)=>
          (<div className="cartitemcard">
            <img src={items.product.images[0].image} alt="image" />
            <p className="productname">{items.product.name}</p>
            <h3 className='price'>{items.product.price}</h3>
            <div className="selecting-count">
              <span onClick={()=>{increaseqty(items)}}>+</span>
              <p className="count-details">{items.qty}</p>
              <span className='minus' onClick={()=>{decreaseqty(items)}}>-</span>
            </div>
            <span className='delete' onClick={()=>{removecartitems(items)}}><i class="fa fa-trash" aria-hidden="true"></i></span>
          </div>)
         )}
       </div>

       <div className="cart-details">
          <div className='inner-cart-details'>
            <h2 className='ordersummary'>Order Summary</h2>
            <p className="units">Subtotal:{cartitems.reduce((acc,item)=> (acc + item.qty), 0)} (Units)</p>
            <p className="amount-total">Est. total:${Number(cartitems.reduce((acc,item)=> (acc + item.product.price * item.qty), 0)).toFixed(2)}</p>
            <button className='placeorder' onClick={placeOrderHandler}>Place Order</button>
          </div>
          
       </div>
     </div>
  </Fragment>:(!complete? <p className='not'>no cart items</p>: <p className='yes'>order complete...!</p>)
}

export default Cart