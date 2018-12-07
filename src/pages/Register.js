import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import './Styling/Login.css';
import { apiPost } from '../functions/Api'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateName = this.updateName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.name.length > 0;
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  updateName(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const userInfo = {
      'email': this.state.email,
      'password': this.state.password,
      'name': this.state.name
    };

    apiPost('register', userInfo).then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="login">
        <h3 className="title">Register</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="input">
            <Label for="exampleEmail">Name</Label>
            <Input type="name" name="name" placeholder="Name" onChange={this.updateName} />
          </FormGroup>

          <FormGroup className="input">
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" placeholder="Email" onChange={this.updateEmail} />
          </FormGroup>

          <FormGroup className="input">
            <Label for="exampleEmail">Password</Label>
            <Input type="password" name="password" placeholder="Password" onChange={this.updatePassword} />
          </FormGroup>

          <Button className="button" type="submit">Register</Button>
        </Form>


      </div>

    );
  }
}

export default Register;