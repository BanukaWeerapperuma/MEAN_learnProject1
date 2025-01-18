import React from 'react';
import './user.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function User({ user }) {
  const history = useNavigate(); // Use the hook at the top level

  if (!user) {
    return <h1>User data is missing!</h1>;
  }

  const { _id, name, gmail, age, address } = user;

  const deleteHandler = async () => {
    try {
      // Delete user from the server
      await axios.delete(`http://localhost:5000/users/${_id}`);
      
      // Redirect after successful deletion
      history('/usersdetails');
    } catch (error) {
      console.error('There was an error deleting the user!', error);
      alert('Failed to delete user. Please try again later.');
    }
  };

  return (
    <div className="user-card">
      <h1>User Display</h1>

      <p><span>ID:</span> {_id}</p>
      <p><span>Name:</span> {name}</p>
      <p><span>Gmail:</span> {gmail}</p>
      <p><span>Age:</span> {age}</p>
      <p><span>Address:</span> {address}</p>

      <div className="user-actions">
        <Link to={`/userdetails/${_id}`}>Update</Link>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default User;
