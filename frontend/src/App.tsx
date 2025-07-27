import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  testAllEndpoints,
  testContactMessages,
  testSendMessage,
} from "./testing";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// Importa tus componentes de sección aquí
// import About from './components/About';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <About />
        <Projects />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1>API Testing</h1>
          <p>Check the browser console (F12) to see the API test results!</p>

          <button onClick={testAllEndpoints}>Test All Endpoints</button>

          <button onClick={testContactMessages}>Test Contact Messages</button>

          <button onClick={testSendMessage}>Send Test Message</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
