import React, { Component } from 'react';

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
        
      </div>
    );
  }
}
 
export default Chore;