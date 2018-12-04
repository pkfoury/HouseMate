import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
