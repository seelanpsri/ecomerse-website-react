import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Header = ({setkeyword,cartitems}) => {
   

  return (
    <Fragment>
        <nav className="header-nav">
            <div className="logo-container">
                <Link to='/'><img src="/images/logo.png" alt="log" /></Link>
            </div>
            <div className='search-div'>
                <Search setkeyword={setkeyword}/>
            </div>
            <div className="cart-div">
                <Link to='/cart'>
                    <span className="cart">Cart</span>
                    <span className="count">{cartitems.length}</span>
                </Link>
                
            </div>
            
        </nav>
        
    </Fragment>
  )
}

export default Header