import '../App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export const NewAccount = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [cash, setCash] = useState(0);
  const [available, setAvailable] = useState("");
  const [user, setUser] = useState([]);
  const [element, setElement] = useState("");
  
  const userNameCheck = (e) => {
 
    const API_URL = "http://localhost:8080/user/available/" + username;
    axios.get(API_URL).then((res) => {
      const result = res.data;
      setAvailable(result);
      console.log(available);
    });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(user);

    const API_URL = "http://localhost:8080/user/new";
    axios.post(API_URL, {"first_name": firstName, "last_name": lastName, "username": username, "pass": password, "pin": pin, "cash": cash}, {headers: {"Content-Type": "application/json"}} ).then((res) => {
      const result = res.data;
      setUser(result);
    });

    if(localStorage.getItem("id") > 0)
  {
    let url = "/userHome";
    window.location.href = url;
  }

  if(user == false)
  {
    setElement(
      <div>
        <h2>Error</h2>
      </div>
    );
  }
  else
  {
    setElement(
      <div>
        <h2></h2>
      </div>
    );
  }
 
  };

  return (
    <div className="newAccount">
      <h1>Welcome</h1>
      <h4>Enter New Account Infromation Below</h4>

      <br></br>

      <form onSubmit={handleSubmit} action="/">
        <label>First Name:</label>
        <input type="text" id="firstName" name="firstName" required onChange={(event) => setFirstName(event.target.value)} value={firstName}></input>

        <br></br>

        <label>Last Name:</label>
        <input type="text" id="lastName" name="lastName" required onChange={(event) => setLastName(event.target.value)} value={lastName}></input>

        <br></br>

        <label>Username:</label>
        <input type="text" id="username" name="username" required onChange={(event) => {setUsername(event.target.value); userNameCheck(event.target.value);} } value={username}></input>

        <br></br>

        <label>Password:</label>
        <input type="text" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password}></input>

        <br></br>

        <label>Pin:</label>
        <input type="text" id="pin" name="pin" pattern="^\d\d\d\d$" required onChange={(e) => setPin(e.target.value)} value={pin}></input>

        <br></br>

        <label>Initial Deposit:</label>
        <input type="number" id="cash" name="cash" min="1" max="9999999999" step=".01" required onChange={(e) => setCash(e.target.value)} value={cash}></input>
        
        <br></br>
        <input type="submit" value="newAccount" />
      </form>
      {element}
    </div>
    
  );
};

export default NewAccount;
