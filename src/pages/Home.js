import React, { Component } from 'react';
import './Styling/Home.css'
import { CardDeck } from 'reactstrap'
import Member from '../components/Member';
import { apiGet } from '../functions/Api'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      home: {},
      cards: null
    }
    // this.handle = this.handle.bind(this)
  }

  componentDidMount() {
    // TODO: get home associated with logged in user
    apiGet('getHome?id=1').then(({ data }) => {
      this.setState({
        home: data
      })
    })

    // TODO: get users associated with home
    apiGet('getMembers?home_id=1').then(({ data }) => {
      this.setState({
        users: data
      });
      this.generateCards();
    })

  }

  generateCards() {
    let members = []
    // TODO: for each user in users
    for (let member of this.state.users) {
      members.push(<Member member={member}/>)
    }
    this.setState({
      cards: members
    })
  }

  render() {
    return (
      <div className="home">
        <h1> {this.state.home['name']} </h1>
        <CardDeck>
          {this.state.cards}
        </CardDeck>
      </div>
    );
  }
}


{/* <p className="counter">{this.state.peanut}</p>
  <button className="but" onClick={this.handle}>button</button>
<Chore /> */}

export default Home;