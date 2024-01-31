import React, { useState } from "react";
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom"
import "../style.css"


const Cart=()=>{
    const Navigate=useNavigate()
    const data= JSON.parse(localStorage.getItem('cart'));
    console.log(data)
    // const[price,setPrice]=useState()
    const [cartItems, setCartItems] = useState(data)
    // console.log(price)
    console.log(cartItems)
    
    
    const plus=(row)=>{ 
        console.log(row)
        
        
        const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === row.id ? { ...cartItem, quantity:cartItem.quantity+1} : cartItem
      );
      console.log(updatedCart)
      setCartItems(updatedCart)

    }
    const minus=(row)=>{
        // console.log(row.price)
        const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === row.id && cartItem.quantity > 0
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem)
          setCartItems(updatedCart)}
         const total= cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
         console.log(total)
         const deleteItm=(id)=>{
           const dlt= cartItems.filter((row)=>{
            return row.id!==id
           })
           setCartItems(dlt)

         }

         localStorage.setItem( "cart",JSON.stringify(cartItems))




    return(<>
    <NavBar/>
    {cartItems.map((Product)=>{
    return(<>
    <div className="container-sm" >
      <img className="cartImg" src={Product.image} alt={Product.productName} />
      <div className="card-body">
        <h5 className="cartName">{Product.productName}</h5>
        <div className="cal">
            <h1 onClick={()=>{
                plus(Product)
            }}>+</h1>
        <p className="cartPrice" >Rs. {Product.price*Product.quantity}/-</p>
        <h1 onClick={()=>{
                minus(Product)}}>-</h1></div>

      </div>
      <button className="cartBtn" onClick={()=>{deleteItm(Product.id)

      }}>
        delete
      </button>
    </div>
  
   
    
    </>)

})}
     <div className="total">
        <h1>Total Amount</h1>
        <h2>{total}</h2>
        <button onClick={()=>Navigate(`/contact`)}>Pay Now</button>

    </div>


    </>)
}
export default Cart;