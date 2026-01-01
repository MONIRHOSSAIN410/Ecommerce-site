import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import {fetchProducts} from "./redux/productSlice"
import { addItem ,removeItem} from './redux/Slice'
const Product = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(fetchProducts())
  },[])

  const productSelector=useSelector((state)=>state.products.items)
  console.log(productSelector);

  const cartSelector = useSelector((state)=>state.cart.items)

  return (
    <div className='grid grid-cols-4 ml-8  '>
        {
productSelector.length && productSelector.map((item)=>(
<div key={item.id}className='bg-amber-300 w-72 mb-12 rounded-xl' >
 <img src={item.thumbnail} className=''/>
 <div>
  <div> {item.title}</div>
   <div> {item.brand}</div>
    <div> {item.price}</div>
     <div> {item.rating}</div>

{
  cartSelector.find(cartItem=> cartItem.id === item.id)?
   <button onClick={()=>dispatch(removeItem(item))}   className='bg-red-900 py-1.5 px-4 rounded text-white'>Remove from cart</button>
   :
    <button onClick={()=>dispatch(addItem(item))} className='bg-blue-950 py-1.5 px-4 rounded text-white'>Add To Cart</button>
}

     
 </div>
</div>
))
        }
    </div>
  )
}

export default Product;