import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="Login">
      <form>
      
      <div>
      <p>Username  <input type="text" placeholder="Username"/></p>
     
      </div>
      
      <div>
      <p>Password  <input type="text" placeholder="Passowrd"/></p>
      </div>
      </form>
      
      </div>
      
      );
    }
  }
  
  export default Login;