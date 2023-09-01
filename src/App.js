import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleSignIn from './services/GoogleSignIn'; 
import PhoneSignIn from './services/PhoneSignIn'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleSignIn />
        <PhoneSignIn />
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
