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
          <GetButton path={'api/news'} params={{state: 'x'}}>
              Get Something
          </GetButton>
          <GetButton path={'api/news/1234567890'} >
              Get Something Else
          </GetButton>
      </header>
    </div>
  );
}

export default App;
