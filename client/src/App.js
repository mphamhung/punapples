import React from 'react';
import logo from './logo.png';
import './App.css';
import SearchBox from './components/SearchBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Search for a pun!
        </p>
        <SearchBox></SearchBox>
      </header>
    </div>
  );
}

export default App;
