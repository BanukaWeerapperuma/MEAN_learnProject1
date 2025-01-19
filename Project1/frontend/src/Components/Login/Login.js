import React from 'react'
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import "./Login.css";

function Login() {

    const history = useNavigate();
    const [user , setUser] = useState({
        name:"",
        gmail:"",
        
    });
    const handleInputChange = (e) =>{
        const {name , value} = e.target;
        setUser((prevUser) => ({...prevUser, [name]: value}));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();

        sendRequest().then(()=>{
            alert("User Login Successfully");
            history("/userdetails");
            
        }).catch((err)=>{
            alert(err.message);
        });
    };

    const sendRequest = async () =>{
        return await axios.post("http://localhost:5000/login", {
            gmail :user.gmail,
            password :user.password,

        }).then((res)=>res.data);
    }

  return (
    <div>
      <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Gmail</label>
            <input type="email" name="gmail" onChange={handleInputChange} value={user.gmail} placeholder="Enter your email" required/>
            <label>Password</label>
            <input type="password" name="password" onChange={handleInputChange} value={user.password} placeholder="Enter your password" required/>
            <button >Login</button>
        </form> 
    </div>
  )
}

export default Login
