import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useState, useEffect } from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
export default function NavigationBar() {
  const [logStatus, setLogStatus] = useState("LogIn");
  const [element, setElement] = useState("");
  
  useEffect(() => {
    if (localStorage.getItem("id") > 0)
    {
      setLogStatus("LogOut");
      setElement(
        <Nav.Item>
          <a class="btn btn-primary" href="/" role="button">Home</a>
          <a class="btn btn-primary" href="/account" role="button">MyInfo</a>
          <a class="btn btn-danger" href="/logOut" role="button">LogOut</a>
        </Nav.Item>
      );
    }
    else
    {
      setLogStatus("LogIn");
      setElement(
        <Nav.Item>
          <a class="btn btn-primary" href="/" role="button">Home</a>
          <a class="btn btn-primary" href="/login" role="button">LogIn</a>
      </Nav.Item>
      )
    }
  }, []);

return(
  <div>

  <h1>Dollars Bank</h1>

    {element}
  </div>
)
    };
