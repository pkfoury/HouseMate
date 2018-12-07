import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Chore from '../components/Chore'

class Chores extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="Chores">
      <p>Page to show all Chores</p>
      <Button>Add a Chore</Button>
      <Chore/>
      </div>
    );
  }
}
 
export default Chores;