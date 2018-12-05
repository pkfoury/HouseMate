import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Chore.css';

class Chore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      assignee: null,
      duration: null
    }
  }

  render() {
    return (
      <div className="Chore">
        <Row>
          <Col lg="10" xs="4">
            <Card body >
              <CardTitle>Chore</CardTitle>
              <CardText>Chore text</CardText>
              <Button>Do something</Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Chore;