import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import './Styling/Login.css';

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
      <div className="login">
        <h3 className="title">Login</h3>
        <Form>
          <FormGroup className="input">
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>

          <FormGroup className="input">
            <Label for="exampleEmail">Password</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Password" />
          </FormGroup>
        </Form>

        <Button className="button">Login</Button>
      </div>

    );
  }
}

export default Login;