import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';
import Nav from './components/GlobalNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
