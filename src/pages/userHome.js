import logo from '../logo.svg';
import '../App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function UserHome() {
    if( (localStorage.getItem("id") == -1) || (localStorage.getItem("id") == undefined ))
    {
        let url = "/";
        window.location.href = url;
    }
    const [id, setId] = useState(localStorage.getItem("id"));
    const [user, setUser] = useState([]);

    useEffect(() => {
        const API_URL = "http://localhost:8080/user/" + localStorage.getItem("id");
        axios.get(API_URL).then((res) => {
          const result1 = res.data;
          setUser(result1);
        });
      }, []);
  
  return(
      <div>
          <h1>Hello {user.first_name}</h1>

          <h3>Current Balance: ${user.cash}</h3>

          <br></br>

          <table>
              <tbody>
                  <tr>
                      <td><a href="/deposit">Make Deposit</a></td>
                  </tr>
                  <tr>
                      <td><a href="/withdrawal">Make Withdrawal</a></td>
                  </tr>
                  <tr>
                      <td><a href="/transfer">Transfer Funds</a></td>
                  </tr>
                  <tr>
                      <td><a href="/recent">View 5 Recent Transactions</a></td>
                  </tr>
              </tbody>
          </table>
      </div>
  )
};
