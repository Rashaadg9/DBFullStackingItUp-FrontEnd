import logo from '../logo.svg';
import '../App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function Account() {
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

      console.log(user);
  return(
      <div>
          <h1>MyInfo</h1>

          <br></br>

          <table>
            <tbody>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Pin</th>
                <th>Cash</th>
            </tbody>
              <tbody>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.username}</td>
                <td>{user.pin}</td>
                <td>${user.cash}</td>
              </tbody>
          </table>
      </div>
  )
};
