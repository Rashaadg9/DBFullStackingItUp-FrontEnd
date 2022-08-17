import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./pages/NavigationBar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import UserHome from "./pages/userHome";
import Deposit from "./pages/Deposit";
import Withdrawal from "./pages/Withdrawal";
import Transfer from "./pages/Transfer";
import Recent from "./pages/Recent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavigationBar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userHome" element={<UserHome />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/recent" element={<Recent />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
