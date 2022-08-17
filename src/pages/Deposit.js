import logo from '../logo.svg';
import '../App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function Deposit() {
    if( (localStorage.getItem("id") == -1) || (localStorage.getItem("id") == undefined ))
    {
        let url = "/";
        window.location.href = url;
    }
    const [id, setId] = useState(localStorage.getItem("id"));
    const [user, setUser] = useState([]);
    const [deposit, setDeposit] = useState(0.0);

    useEffect(() => {
        const API_URL = "http://localhost:8080/user/" + localStorage.getItem("id");
        axios.get(API_URL).then((res) => {
          const result1 = res.data;
          setUser(result1);
        });
      }, []);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const amount = parseFloat(deposit);
        const API_URL = "http://localhost:8080/user";
    
        axios.put(API_URL, {"id": user.userId, "type": "deposit", "amount": amount}, {headers: {"Content-Type": "application/json"}} )
        .then((res) => {
          const result = res.data;
          setUser(result);
        });
    
    
        console.log(user);
      };
    
      return (
        <div className="Deposit">
          <h1>Current Balance: ${user.cash}</h1>
    
          <form onSubmit={handleSubmit} action="/">
            <label>Enter Amount to deposit:</label>
            <input type="number" id="deposit" name="deposit" min="1" step=".01" onChange={(event) => setDeposit(event.target.value)} value={deposit}></input>
            
            <br></br>
    
            <input type="submit" value="Deposit" />
          </form>
    
        </div>
        
      );
};
