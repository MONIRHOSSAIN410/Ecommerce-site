import React from 'react'

import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-blue-800 flex justify-between py-3.5 text-white '>
        <div className='px-10'>My Shop</div>
        <nav  >
            <ul className='flex gap-8 px-12 font-semibold'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                
            </ul>
        </nav>
        <AddToCart/>
        
    </header>
  )
}

export default Header;

