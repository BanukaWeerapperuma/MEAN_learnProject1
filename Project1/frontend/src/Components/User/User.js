import React from 'react';
import './user.css';
import { Link } from 'react-router-dom';




function User({ user }) {
  if (!user) {
    return <h1>User data is missing!</h1>;
  }

  const { _id, name, gmail, age, address } = user;

  


  const handleDelete = () => {
    console.log(`Delete user with ID: ${_id}`);
  };

  return (
    <div className="user-card">
      <h1>User Display</h1>

      <p><span>ID:</span> {_id}</p>
      <p><span>Name:</span> {name}</p>
      <p><span>Gmail:</span> {gmail}</p>
      <p><span>Age:</span> {age}</p>
      <p><span>Address:</span> {address}</p>
      
      <Link to={`/userdetails/${_id}`}>update</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default User;
