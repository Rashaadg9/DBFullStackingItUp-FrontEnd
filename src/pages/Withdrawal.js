import logo from '../logo.svg';
import '../App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function Withdrawal() {
    if( (localStorage.getItem("id") == -1) || (localStorage.getItem("id") == undefined ))
    {
        let url = "/";
        window.location.href = url;
    }
    const [id, setId] = useState(localStorage.getItem("id"));
    const [user, setUser] = useState([]);
    const [withdrawal, setWithdrawal] = useState(0.0);

    useEffect(() => {
        const API_URL = "http://localhost:8080/user/" + localStorage.getItem("id");
        axios.get(API_URL).then((res) => {
          const result1 = res.data;
          setUser(result1);
        });
      }, []);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const amount = parseFloat(withdrawal);
        const API_URL = "http://localhost:8080/user";
    
        axios.put(API_URL, {"id": user.userId, "type": "withdrawal", "amount": amount}, {headers: {"Content-Type": "application/json"}} )
        .then((res) => {
          const result = res.data;
          setUser(result);
        });
    
    
        console.log(user);
      };
    
      return (
        <div className="withdrawal">
          <h1>Current Balance: ${user.cash}</h1>
    
          <form onSubmit={handleSubmit} action="/">
            <label>Enter Amount to deposit:</label>
            <input type="number" id="withdrawal" name="withdrawal" min="1" max={user.cash} step=".01" onChange={(event) => setWithdrawal(event.target.value)} value={withdrawal}></input>
            
            <br></br>
    
            <input type="submit" value="Withdrawal" />
          </form>
    
        </div>
        
      );
};
