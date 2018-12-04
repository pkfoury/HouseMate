import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import './Styling/Chore.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      email: "",
      password: ""
    }
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  
  // handleSubmit = event => {
  //   event.preventDefault();
  // }
  
  
  
  render() { 
    return (
      <div className="Login">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Password" />
          </FormGroup>
        </Form>

        <Button>Login</Button>
      </div>
      
      );
    }
  }
  
  export default Login;