import React from 'react';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
