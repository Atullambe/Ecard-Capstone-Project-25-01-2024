import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import "../style.css"

const NavBar=()=>{
    const Navigate=useNavigate()
    const data= JSON.parse(localStorage.getItem('cart'));
    console.log(data.length)
    const favLnt=JSON.parse(localStorage.getItem('fav'));
    
    return(<>
    <nav className="navbar navbar-expand "  style={{background:"#e3f2fd"}}>
  <div className="container-fluid"  >
    <a className="navbar-brand" href="#" >
      <h1>E<sub>CART</sub></h1>
    </a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2 ">
        <li className="nav-item">
         
           <NavLink exact to="/"> <a className="nav-link active" aria-current="page"  >Home
           </a>
           </NavLink>
          
        </li>
        <li className="nav-item">
        <NavLink exact to="/fav"> <a className="nav-link active" aria-current="page"  >My Favourite<sup>({favLnt.length})</sup>
           </a>
           </NavLink>
        </li>
        <li className="nav-item">
        <NavLink exact to="/cart"> <a className="nav-link active" aria-current="page"  >
            {data.length>0?<b>cart<sup>{data.length}</sup></b>:<b>no product</b>}
           </a>
           </NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </>)
}
export default NavBar;