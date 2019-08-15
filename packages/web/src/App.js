import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {add} from "@wow/common"


function App() {

const [state, setState] =useState([])

useEffect(() => {

  fetch('http://localhost:4000/user')
  .then(res => res.json())
  .then(data => console.log(data))
  
}, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {add(1, 5)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
