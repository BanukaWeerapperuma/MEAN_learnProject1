import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddUser.css';

function AddUser() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users", input)
      .then((res) => {
        console.log(res.data);
        sendRequest().then(() => navigate('userdetails'));
      });
  };

  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/users");
    console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <br />
        <input type="text" name="name" onChange={handleChange} value={input.name} required/>
        <br />
        <label>gmail</label>
        <br />
        <input
          type="text" name="gmail" onChange={handleChange} value={input.gmail} required/>
        <br />
        <label>age</label>
        <br />
        <input
          type="text" name="age" onChange={handleChange} value={input.age} required/>
        <br></br>
        <label>address</label>
        <br />
        <input
          type="text" name="address" onChange={handleChange} value={input.address} required/>
        <br />
        <div className="form-buttons">
        <button >Add User</button>
        <button type="button" onClick={() => navigate('/')}>
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
