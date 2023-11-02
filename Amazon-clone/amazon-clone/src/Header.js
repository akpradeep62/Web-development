import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src = "https://pngimg.com/uploads/amazon/amazon_PNG1.png"/>
    
    <div className='header_search'>
        <input className='header_searchinput'/>
        <SearchIcon />
    </div>

    <div className='Header_nav'>
        <div className='header_option'>
            <span className='header_option_lineone'>Hello Annnonymus</span>
            <span className='header_option_linetwo'>Sign in</span>
        </div>
        <div className='header_option'>
        <span className='header_option_lineone'>Rerurns</span>
        <span className='header_option_linetwo'>&Orders</span>

        </div>
        <div className='header_option'>
        <span className='header_option_lineone'>Your</span>
        <span className='header_option_linetwo'>Prime</span>
        </div>
    
    </div>

    </div>
  )
}

export default Header