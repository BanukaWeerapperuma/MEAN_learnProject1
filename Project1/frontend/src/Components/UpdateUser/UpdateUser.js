import React, { useEffect, useState } from "react";
import "./UpdateUser.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });

  const navigate = useNavigate();
  const id = useParams().id;

  // Fetch user details on component load
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  // Send PUT request to update user details
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/users/${id}`, {
        name: String(inputs.name),
        gmail: String(inputs.gmail),
        age: String(inputs.age),
        address: String(inputs.address),
      })
      .then((res) => res.data);
  };

  // Handle input changes
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => navigate("/userdetails"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="gmail"
          onChange={handleChange}
          value={inputs.gmail}
          required
        />
        <br />
        <label>Age</label>
        <br />
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={inputs.age}
          required
        />
        <br />
        <label>Address</label>
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address}
          required
        />
        <br />
        <div className="form-buttons">
          <button type="submit">Update User</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
