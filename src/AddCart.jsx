import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrement, remove } from './store';

function AddCart() {
  const cart=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const [discount,setDiscount] = useState(0);
  const [coupencode,setCoupencode]=useState('');
  const [coupencodeDiscountPercentage,setCoupenDiscountPercentage]=useState(0);
const handleApplyCupon=()=>{
  switch(coupencode){
    case "RATAN10":
      setCoupenDiscountPercentage(10);
      break;
    case "RATAN20":
      setCoupenDiscountPercentage(20);
      break;
    case "RATAN30":
      setCoupenDiscountPercentage(30);
      break;
    case "RATAN40":
      setCoupenDiscountPercentage(40);
      break;
    default:alert("invalid coupen code");
       setCoupenDiscountPercentage(0);
      }
    }

  const handleDiscountPercentage = (disValue)=>{
      
      setDiscount(disValue)

    }

    const calculateDiscount = () =>{
        let total =cart.reduce((sum,item)=> sum + item.quantity * item.price,0 )
        total =parseFloat(total.toFixed(2))
        let dis = total * discount/100
        dis = parseFloat(dis)
        let copundiscount=total*coupencodeDiscountPercentage/100
        let netAmount = total - dis -copundiscount
        return { total, dis, netAmount }

    }

    let { total,dis,netAmount} = calculateDiscount()

  return (

    <>
     <h2>Shopping Cart</h2>
     {cart.length==0?
     (<p>cart is Empty</p>)
    :
      (
      <ul>
        {cart.map((item) => (
          <li key={item.name}>
            <p>{item.name} - ${item.price} - <button onClick={()=>dispatch(addToCart(item))}> + </button> {item.quantity} <button onClick={()=>dispatch(decrement(item))}>-</button> <button onClick={()=>dispatch(remove(item))}>Remove </button></p>
            </li>
        ))}
      </ul>)}
      <p>Total Amount Before Discount : ${total}</p>
        <button onClick={()=> handleDiscountPercentage(10)}>Apply10% Discount</button> 
         <button onClick={()=> handleDiscountPercentage(20)}>Apply20% Discount</button> 
         <button onClick={()=> handleDiscountPercentage(30)}>Apply30% Discount</button> 
        <p> Discount Percentage applied : {discount}%</p>
        <p>Discount Amount : ${dis}</p>
        <p>apply coupen:  <input type='text' value={coupencode} onChange={(e)=>setCoupencode(e.target.value)} placeholder='Enter the copun code'/></p>
       <button onClick={handleApplyCupon}>Apply cupon</button>
        <h5>Final Amount After Discount : ${netAmount}</h5>
       

      
    </>
)
}

export default AddCart