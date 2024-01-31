import React,{useState,useEffect} from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Fav=()=>{
    const getdata=()=>{
        const Data= localStorage.getItem('cart');
       
        if(Data){
            return JSON.parse(Data);
        }
        else{ return[]}
        // Data ? return JSON.parse(Data):return[]
       
    }
    const data= JSON.parse(localStorage.getItem('fav'));
    console.log(data)
    const[cartItm,setCartItm]=useState(getdata())
    const[fav,setFav]=useState(data)

    

    const cart=async(row)=>{
        
       await setCartItm([...cartItm,row])
        

    }
    const deleteItm=(id)=>{
        const dlt= fav.filter((row)=>{
         return row.id!==id
        })
        setFav(dlt)

      }
      useEffect(()=>{
        localStorage.setItem( "cart",JSON.stringify(cartItm));
        
    },[cartItm])

    
    localStorage.setItem( "fav",JSON.stringify(fav))
    return(<>
    <NavBar/>
    {fav.map((Product)=>{
    return(<>
    <div className="container">
        <div className="card" >
      <img className="card-img-top" src={Product.image} alt={Product.productName} />
      <div className="card-body">
        <h5 class="card-title">{Product.productName}</h5>
        <p class="card-text">Rs. {Product.price}/-</p>
        <button onClick={()=>{
            cart(Product)
        }}
          
          className="btn btn-primary"
        >
          Add to cart
        </button> &nbsp;
        <button  className="btn btn-secondary"onClick={()=>{deleteItm(Product.id)

}}>
  delete
</button>

      </div>
    </div></div>
    
    
    </>)

})}

    
    
    <Footer/>
    </>)
}


export default Fav;