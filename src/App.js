import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-900">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl">
          React TailwindCSS Boilerplate
        </p>
        <a
          className="App-link text-xl"
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
