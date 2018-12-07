import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import './Styling/Login.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }
  validateForm() {
    return this.state.email.length > 0 && 
        this.state.password.length > 0 &&
        this.state.name.length > 0;
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="login">
        <h3 className="title">Register</h3>
        <Form>
         <FormGroup className="input">
             <Label for="exampleEmail">Name</Label>
            <Input type="name" name="name" id="exampleEmail" placeholder="Name" />
          </FormGroup>
            
          <FormGroup className="input">
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>

          

          <FormGroup className="input">
            <Label for="exampleEmail">Password</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Password" />
          </FormGroup>
        </Form>

        <Button className="button">Register</Button>
      </div>

    );
  }
}

export default Register;