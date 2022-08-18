import '../App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export const NewAccount = (props) => {
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    const API_URL = "http://localhost:8080/user/login";
    axios.post(API_URL, {"username": username, "password": password}, {headers: {"Content-Type": "application/json"}} ).then((res) => {
      const result = res.data;
      setUser(result);
    });

    if(localStorage.getItem("id") > 0)
  {
    let url = "/userHome";
    window.location.href = url;
  }
 
  };

  return (
    <div className="newAccount">
      <h1>Welcome</h1>
      <h4>Enter New Account Infromation Below</h4>

      <br></br>

      <form onSubmit={handleSubmit} action="/">
        <label>First Name:</label>
        <input type="text" id="firstName" name="firstName" onChange={(event) => setUsername(event.target.value)} value={firstName}></input>

        <br></br>

        <label>Username:</label>
        <input type="text" id="username" name="username" onChange={(event) => setUsername(event.target.value)} value={username}></input>

        <br></br>

        <label>Password:</label>
        <input type="text" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
        
        <br></br>
        <input type="submit" value="newAccount" />
      </form>

    </div>
    
  );
};

export default NewAccount;
