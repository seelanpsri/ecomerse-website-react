import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Productcard from "../components/Productcard";

export default function Home({keyword}){
    const [product,setproducts]=useState([])
    const [searchParams,setSearchParams]=useSearchParams("")
   
    useEffect(()=>{
        const getdata=async ()=>{
          try{
            const response=await fetch(process.env.REACT_APP_API_URL+'/products')
            const data=await response.json()    
            
            const final=data.products.filter((data)=>{console.log(data.name); return data.name.toLowerCase().includes(keyword) || data.description.toLowerCase().includes(keyword)})
            setproducts(final ? final:data)
           }
           catch(err){
             console.log(err)
           }
        }
        getdata()
         
    
        
    },[keyword])

    
    return <Fragment>
        <h1 className="products-handling">Latest Products</h1>
        <section className="products">
          {product.map(product=><Productcard product={product} key={product._id}/>)}
        </section>
    </Fragment>

}