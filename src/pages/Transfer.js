import logo from '../logo.svg';
import '../App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function Transfer() {
    if( (localStorage.getItem("id") == -1) || (localStorage.getItem("id") == undefined ))
    {
        let url = "/";
        window.location.href = url;
    }
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState([]);
    const [transfer, setTransfer] = useState(0.0);

    useEffect(() => {
        const API_URL = "http://localhost:8080/user/" + localStorage.getItem("id");
        axios.get(API_URL).then((res) => {
          const result1 = res.data;
          setUser(result1);
        });
      }, []);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const amount = parseFloat(transfer);
        const API_URL = "http://localhost:8080/user/transfer";
    
        axios.put(API_URL, {"id": user.userId, "username": userName, "amount": amount}, {headers: {"Content-Type": "application/json"}} )
        .then((res) => {
          const result = res.data;
          setUser(result);
        });
    
    
        console.log(user);
      };
    
      return (
        <div className="transfer">
          <h1>Current Balance: ${user.cash}</h1>
    
          <form onSubmit={handleSubmit} action="/">
          <label>Enter Amount to transfer:</label>
            <input type='text' id="username" name="username" onChange={(event) => setUserName(event.target.value)} value={userName}></input>
            
            <br></br>

            <label>Enter Amount to Transfer:</label>
            <input type="number" id="transfer" name="transfer" min="1" max={user.cash} step=".01" onChange={(event) => setTransfer(event.target.value)} value={transfer}></input>
            
            <br></br>
    
            <input type="submit" value="Transfer" />
          </form>
    
        </div>
        
      );
};
