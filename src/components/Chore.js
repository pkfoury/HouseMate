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
      dropdownOpen: false,
      dropVal: '',
    }

    this.changeVal = this.changeVal.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  changeVal(user) {    
    this.setState({dropVal: user})
  }

  render() {
    const { dropVal } = this.state;
    return (
      <div className="chore">
        <Row>
          <Col sm="10">
            <Card body >
              <p> Chore Title</p>
              <p>   { dropVal.name } </p> 
              <Drop value={ dropVal } changeVal={ this.changeVal }/>
             
            
      
              <Button>Remove</Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Chore;