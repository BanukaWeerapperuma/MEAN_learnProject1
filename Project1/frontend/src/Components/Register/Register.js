import React, { useState } from 'react'
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function Register() {
    const history = useNavigate();
    const [user , setUser] = useState({
        name:"",
        gmail:"",
        password:""
    });
    const handleInputChange = (e) =>{
        const {name , value} = e.target;
        setUser((prevUser) => ({...prevUser, [name]: value}));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();

        sendRequest().then(()=>{
            alert("User Register Successfully");
            history("/userdetails");
            
        }).catch((err)=>{
            alert(err.message);
        });
    };

    const sendRequest = async () =>{
        await axios.post("http://localhost:5000/register", {
            name :String(user.name),
            gmail :String(user.gmail),
            password :String(user.password),

        }).then((res)=>res.data);
    }


  return (
    <div>
        <h1>User Register</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleInputChange} value={user.name} placeholder="Enter your name"  required/>
            <label>Email</label>
            <input type="email" name="gmail" onChange={handleInputChange} value={user.gmail} placeholder="Enter your email" required/>
            <label>Password</label>
            <input type="password" name="password" onChange={handleInputChange} value={user.password} placeholder="Enter your password" required/>
            <button >Register</button>
        </form> 
    </div>
  )
}

export default Register
