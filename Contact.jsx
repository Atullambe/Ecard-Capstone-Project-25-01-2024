import React,{useState} from "react";

import {useNavigate,NavLink} from "react-router-dom";
import NavBar from "./NavBar";
import "../style.css"



const Contact=()=>{
    const navigate=useNavigate();
    const[fullname,setFullName]=useState();
    const [email,setEmail]=useState();
    // const [password,setPassword]=useState();
    const[number,setNumber]=useState();
    const[add,setAdd]=useState();
   
    const submitHandler=(e)=>{
        e.preventDefault();
        const dataObj={ fullName:fullname,
                        emailId:email,
                        // password,
                        mobile:number,
                        address:add,
           
            };
            console.log(dataObj)
            setFullName("");
            setEmail("");
            // setPassword("");
            setNumber("");
            setAdd("");
            alert("thanks for payment")
            navigate("/")
    }
    // const reload=()=>{
        
    //     navigate("/");
    //     window.location.reload();
    // }
    
    return(<>
    <NavBar/>
    
    
<div className="contact1">
    
<div className="contact">

<form onSubmit={submitHandler}>
<label htmlFor="name">Name</label><br/>
<input type="text" name="name" onChange={(e)=>{setFullName(e.target.value)}} value={fullname}/><br/>
<label htmlFor="email">email</label><br/>
<input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/><br/>
{/* <label htmlFor="password">Password</label><br/>
<input type="text" name="password" onChange={(e)=>{setPassword(e.target.value)}}value={password}/><br/> */}
<label htmlFor="number">Mobile</label><br/>
<input type="number" name="number" onChange={(e)=>{setNumber(e.target.value)}} value={number}/><br/>
<label htmlFor="add">Address</label><br/>
<textarea onChange={(e)=>{setAdd(e.target.value)}}value={add}></textarea><br/>
<button type="submit" className="btn btn-success">submit</button>

</form>

</div>
    


</div>







</>)}
export default Contact;