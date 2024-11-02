import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './store';

function NonVeg() {
    const NonVeg=useSelector(state=>state.products.NonVeg)
    const dispatch=useDispatch();
    const items=NonVeg.map((novej,index)=>
        <li key={index}>
          {novej.name}-${novej.price.toFixed(2)}
          <button onClick={()=>dispatch(addToCart(novej))}>Add cart</button>
        </li> 
        )

  return (
     <>
     <h2>Non-Veg items List</h2>
     <ul>
        {items}
     </ul>
    </>
  )
}

export default NonVeg