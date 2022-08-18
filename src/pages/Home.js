import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const GridWrapper = styled.div`
  // display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;


export default function  Home()
{
  if( localStorage.getItem("id") > 0)
    {
        let url = "/userHome";
        window.location.href = url;
    }

  return(
  <div>
    <h1>Welcome To Dollars Bank</h1>
  </div>
  )
}