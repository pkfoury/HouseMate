import React, { Component } from 'react';
import './Styling/Home.css'
import { CardDeck } from 'reactstrap'
import Member from '../components/Member';
import { apiGet } from '../functions/Api'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peanut: 1,
      houseName: 'Apartment 12',
      // name: 'julien'
      name: ['Julie', 'Peter', 'Gustavo']
    }
    // this.handle = this.handle.bind(this)
  }

  generateCard = () => {
    let card = []
    for (let i = 0; i < 3; i++) {
      card.push(<Member />);
    }

    return card;
  }

  render() {
    return (
      <div>
        <h1> {this.state.houseName} </h1>
        <CardDeck>
          {this.generateCard()}
        </CardDeck>



      </div>
    );
  }
}


{/* <p className="counter">{this.state.peanut}</p>
  <button className="but" onClick={this.handle}>button</button>
<Chore /> */}

export default Home;