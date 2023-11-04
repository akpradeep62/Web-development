import React from 'react'
import './Header.css'
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src = "https://pngimg.com/uploads/amazon/amazon_PNG1.png"/>
    <div className='header_search'>
        <input className='header_searchinput'/>
        <Search className='Header_searchIcon' />
    </div>

    <div className='Header_nav'>
        <div className='header_option'>
            <span className='header_option_lineone'>Hello Annnonymus</span>
            <span className='header_option_linetwo'>Sign in</span>
        </div>
        <div className='header_option'>
        <span className='header_option_lineone'>Returns</span>
        <span className='header_option_linetwo'>&Orders</span>

        </div>
        <div className='header_option'>
        <span className='header_option_lineone'>Your</span>
        <span className='header_option_linetwo'>Prime</span>
        </div>
        <div className='header_optionbasket'>
        <ShoppingCart />
        <span className='header_option_linetwo'>0</span>
        </div>
    
    </div>

    </div>
  )
}

export default Header