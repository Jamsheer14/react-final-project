import NonVeg from "./NonVeg";
import Veg from "./Veg";
import { configureStore,createSlice } from'@reduxjs/toolkit';

const productSlice=createSlice({
    name:'products',
    initialState:{
          Veg:[
            {name:'tomato',price:200.3},
            {name:'potato',price:100.8}
          ],
          NonVeg:[
            {name:'chicken',price:800.50},
            {name:'fish',price:575.05}
          ],
    },
    reducers:{}
});
const cartSlice=createSlice({
  name:'cart',
  initialState:[],
  reducers:{
      addToCart:(state,action)=>{
          const status=state.find((item)=>item.name===action.payload.name);
          if(status)
          {
              status.quantity+=1;
          }
          else{
              state.push({...action.payload,quantity:1})
          }
      },
      decrement: (state, action) => {
          const existingItem = state.find((item) => item.name === action.payload.name);
          if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
          } else{
            return state.filter((item) => item.name !== action.payload.name);
          }
      },
      remove:(state,action)=>
      {
          return state.filter((item) => item.name !== action.payload.name);
      }
  }
})

const store=configureStore({
  reducer:
  {
      products:productSlice.reducer,
      cart:cartSlice.reducer
  }
})

export const {addToCart,decrement,remove}=cartSlice.actions;




export default store