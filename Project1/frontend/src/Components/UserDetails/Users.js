import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../User/User';

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return { users: [] }; // Return an empty array to prevent crashes
  }
};

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      console.log('Fetched users:', data.users); // Debugging
      setUsers(data.users || []);
    });
  }, []);

  return (
    <div>
      <h1>User Details Display Page</h1>
      <div>
        {users.length > 0 ? (
          users.map((user, i) => (
            <User key={i} user={user} />
          ))
        ) : (
          <p>No users found!</p>
        )}
      </div>
    </div>
  );
}

export default Users;
