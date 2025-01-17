import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import Users from "./Components/UserDetails/Users";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div >
      <Nav/>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>} />  
            <Route path="/mainhome" element={<Home/>} />
            <Route path="/addUser" element={<AddUser/>} />
            <Route path="/userdetails" element={<Users/>} />
            
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
