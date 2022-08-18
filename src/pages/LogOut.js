import '../App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export const LogOut = (props) => {
  localStorage.setItem("id", -1);
  localStorage.setItem("name", -1);

  return(
    <div>
    <h1>Logged Out</h1>
  </div>
  )

}
export default LogOut;
