import { Skeleton } from "@mui/material";
import React, { lazy, Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCart, changeTotal } from "../../data/cartSlice";
const Capitalize = lazy(() => import("../../Capitalize"));   //upgrade to later react
//lazy import should be the last import.

// import Capitalize from "../../Capitalize";



export default function Privacy() {
  const cartCount = useSelector(store => store.cart.cartCount);
  const productCount = useSelector(store=>store.cart.totalProducts);
  const dispatch = useDispatch();

  const [input, setInput] = useState(0);


  function increment(){
    //now we call the slice 
    dispatch(incrementCart());  //this calls the slice action and increments
  }

  function change(){
    dispatch(changeTotal(input))
  }

  return (
    <div>
      <Suspense fallback={<Skeleton height={50} />}>
        <Capitalize label={'sagar'} />
      </Suspense>

      <hr />
      <div>Privacy </div>
      <div>Cart Count: {cartCount} items; selected { productCount } products<br/> </div>
      <button onClick={increment}>Increment</button>
      <br/>
      <input value={input} onChange={e=>setInput(Number(e.target.value))} />
      <button onClick = {change}>Change Total Products</button>
    </div>
  );
}


//lazy loading
//function called lazy
//function called suspense as a react component
//fallback (any dummy component)
//try to use everywhere if necessary