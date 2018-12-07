import React, { Component } from 'react';
import { 
  Card, Button, CardTitle, 
  CardText, Row, Col } from 'reactstrap';

import Drop from './Drop';


class Chore extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      name: null,
      assignee: null,
      duration: null,
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="chore">
        <Row>
          <Col lg="10" xs="6">
            <Card body >
              <CardTitle>Chore</CardTitle>
              <CardText>
              <Drop/>

              </CardText>
              <CardText>Time</CardText>
              <Button>Remove</Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Chore;