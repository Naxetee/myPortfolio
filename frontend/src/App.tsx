import React from 'react';
import logo from './logo.svg';
import './App.css';
import { testAllEndpoints, testContactMessages, testSendMessage } from './testing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
      <h1>API Testing</h1>
      <p>Check the browser console (F12) to see the API test results!</p>
      
      <button onClick={testAllEndpoints}>
        Test All Endpoints
      </button>
      
      <button onClick={testContactMessages}>
        Test Contact Messages
      </button>
      
      <button onClick={testSendMessage}>
        Send Test Message
      </button>
    </div>
      </header>
    </div>
  );
}

export default App;
