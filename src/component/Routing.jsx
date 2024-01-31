import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Contact from "./Contact";
import Fav from "./Fav";
const Routing=()=>{
    return(<>
    <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/cart" element={<Cart/>}/>
     <Route exact path="/contact" element={<Contact/>}/>
     <Route exact path="/fav" element={<Fav/>}/>
    </Routes>
    
    
    </>)
}
export default Routing;