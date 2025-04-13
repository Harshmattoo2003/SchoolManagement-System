import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", age: "" });


  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(response => setUser(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);


  const handleChange = (e) => {
    e.preventDefault();

    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  
  const addUser = () => {
    axios.post("http://localhost:5000/api/users", newUser)
      .then(response => {
        setUser([...user, response.data]);
        setNewUser({ name: "", email: "", age: "" });
      })
      .catch(error => console.error("Error adding user:", error));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>User List</h2>
      <ul>
        {user.map(user => (
          <li key={user._id}>{user.name} - {user.email} - {user.age} years</li>
        ))}
      </ul>

      <h2>Add New User</h2>
      <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleChange} /><br/>
      <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleChange} /><br/>
      <input type="number" name="age" placeholder="Age" value={newUser.age} onChange={handleChange} /><br/>
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default Users;
