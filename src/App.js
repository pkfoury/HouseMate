import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Login />
      </div>
    );
  }
}

export default App;
