import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/GlobalNav';
import Tasks from './pages/Tasks';
require('dotenv').config({ path: '../.env' })

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <div>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />

            {/* if authed */}
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/tasks' component={Tasks} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
