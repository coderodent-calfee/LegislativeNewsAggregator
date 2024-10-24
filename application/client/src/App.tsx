import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetButton from "./components/getButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the Client: A React Application!
        </p>
        <GetButton />
      </header>
    </div>
  );
}

export default App;
