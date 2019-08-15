import React, { useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';


const INITIAL_STATE = {
  loading: null,
  rockets: []
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'LOADING_COMPLETE':
      return {
        ...state,
        ...action.payload,
        loading: false
      }
  
    default:
     return state
  }
}
function App() {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  useEffect(() => {

  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
