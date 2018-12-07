import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import './Styling/Login.css';
import { apiPost } from '../functions/Api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    }
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const userInfo = {
      'email': this.state.email,
      'password': this.state.password
    };

    apiPost('login', userInfo).then(({data}) => {
      if (data.success == true) {
        window.location.href = '/home';
      } else {
        window.alert("Incorrect credentials");
      }
    })
  }

  render() {
    return (
      <div className="login">
        <h3 className="title">Login</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="input">
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" placeholder="Email" onChange={this.updateEmail} />
          </FormGroup>

          <FormGroup className="input">
            <Label for="exampleEmail">Password</Label>
            <Input type="password" name="password" placeholder="Password" onChange={this.updatePassword} />
          </FormGroup>

          <Button className="button" type="submit">Login</Button>
        </Form>
      </div>

    );
  }
}

export default Login;