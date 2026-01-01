import React from 'react'
import { useSelector } from 'react-redux';

const CartList = () => {
    const cartSelector=useSelector((state)=>state.cart.items)
    console.log(cartSelector)
  return (
    <div>
        <div>
            <h2>Your Cart items</h2>
            <span>{cartSelector.length} items</span>
        </div>
        {
            cartSelector.length>0 ? cartSelector.map((item)=>(
                <div key={item.id}>
<div>
    <img src={item.thumbnail}/>
    <div>
        <h4>{item.title}</h4>
         <h4>{item.brand}</h4>
    </div>
    <div>
        <span>{item.price}</span>
        <button className='bg-blue-900 py-1.5 px-3.5 rounded text-white'>Remove</button>
    </div>
</div>
                </div>
            )):null
        }
        <div>
            Total: {cartSelector.reduce((sum,item)=>sum+item.price,0)}
        </div>
    </div>
  )
}

export default CartList;
