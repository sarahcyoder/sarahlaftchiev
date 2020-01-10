import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <Body />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
