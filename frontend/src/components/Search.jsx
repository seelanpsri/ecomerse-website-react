import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({setkeyword}) => {
  const navigate = useNavigate();

    const navigatto = () => {
        navigate('/')
    }
   
  return (
    <form  className="search">
                <input type="text" className="search-items" 
                placeholder="search the product.."
                onChange={(e)=>{setkeyword(e.target.value)}}
                onClick={navigatto}
                />
                <div className="submit-btn">
                    <button  id="searchbtn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
    </form>
  )
}

export default Search