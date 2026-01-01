import React from 'react'
import {ShoppingCart} from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const cartSelector = useSelector((state)=>state.cart.items)
  console.log(cartSelector);
  return (
    <div className='flex mr-10'>
      <Link to ="/cart">
       <ShoppingCart className=''/><span className='text-red-900 font-bold'>{cartSelector.length?cartSelector.length:0}</span>
    </Link>
    </div>
  )
}

export default AddToCart;