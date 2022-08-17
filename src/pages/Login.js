import '../App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  localStorage.setItem("id", -1);
  localStorage.setItem("name", -1);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    const API_URL = "http://localhost:8080/user/login";
    axios.post(API_URL, {"username": username, "password": password}, {headers: {"Content-Type": "application/json"}} ).then((res) => {
      const result = res.data;
      setUser(result);
    });

    console.log(user);
    localStorage.setItem("id", user.userId);
    localStorage.setItem("name", user.first_name);
    console.log(localStorage.getItem("id"));
    console.log(localStorage.getItem("name"));

    if(localStorage.getItem("id") > 0)
  {
    let url = "/userHome";
    window.location.href = url;
  }
 
  };

  return (
    <div className="Login">
      <h1>Welcome Back!</h1>
      <h4>Enter LogIn Credentials Below</h4>

      <br></br>

      <form onSubmit={handleSubmit} action="/">
        <label>Username:</label>
        <input type="text" id="username" name="username" onChange={(event) => setUsername(event.target.value)} value={username}></input>

        <br></br>

        <label>Password:</label>
        <input type="text" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
        
        <br></br>
        <input type="submit" value="Login" />
      </form>

    </div>
    
  );
};

export default Login;
