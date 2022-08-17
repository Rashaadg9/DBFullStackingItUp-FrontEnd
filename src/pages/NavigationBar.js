import React, { useState, useEffect } from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

export default function NavigationBar() {
  const [logStatus, setLogStatus] = useState("LogIn");
  const [element, setElement] = useState("");
  
  useEffect(() => {
    if (localStorage.getItem("id") > 0)
    {
      setLogStatus("LogOut");
      setElement(
        <Nav.Item>
          <a class="nav-link" href="/account">MyInfo</a><br></br>
          <a class="nav-link" href="/logOut">LogOut</a><br></br>
        </Nav.Item>
      );
    }
    else
    {
      setLogStatus("LogIn");
      setElement(
        <Nav.Item>
        <a class="nav-link" 
          href="/login">Login</a><br></br>
      </Nav.Item>
      )
    }
  }, []);

return(
  <div class="container">

  <h1 class="display-4">Dollars Bank</h1>

      <a class="navbar-brand" href="/">Home</a><br></br>
      
      {element}
      </div>
)
    };
