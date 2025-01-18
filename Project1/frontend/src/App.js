import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import Users from "./Components/UserDetails/Users";
import Nav from "./Components/Nav/Nav";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import Register from "./Components/Register/Register";




function App() {
  return (
    <div>
      <Nav />
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/userdetails" element={<Users />} />
          <Route path="/regi" element={<Register />} />
          <Route path="/userdetails/:id" element={<UpdateUser />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
