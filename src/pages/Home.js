import React, { Component } from 'react';
import Chore from '../components/Chore'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peanut: 1
    }
    this.handle = this.handle.bind(this)
  }

  handle() {
     this.setState({
       peanut: this.state.peanut + 1
     });
  }

  render() { 
    console.log('render');
    return (
      <div className="Home">
        <p className="counter">{this.state.peanut}</p>
        <button className="but" onClick={this.handle}>button</button>
      </div>
    );
  }
}
 
export default Home;