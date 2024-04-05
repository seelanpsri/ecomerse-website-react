import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Productcard = ({product}) => {
  console.log(product)
  return (
    <div className="card">
      <img src={product.images[0].image} alt="cardimg" />
      <Link to={`/product/:`+product._id}><h2 className="producttitle">{product.name}</h2></Link>
      <p className="ratings-title">Ratings</p>
      <div className="ratings">
        
        <div className="ratingfiller" style={{width : `${product.ratings/5 * 100}px`}} ></div>
      </div>
      <Link to={`/product/:${product._id}`}><button className="viewdetails">View Details</button></Link>
    </div>
  )
}

export default Productcard