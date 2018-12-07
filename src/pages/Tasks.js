import React, { Component } from 'react';
import './Styling/Tasks.css'
import Chore from '../components/Chore';
import { apiGet } from '../functions/Api'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      houseName: null,
    }
    // this.handle = this.handle.bind(this)
  }

  componentDidMount() {
    // TODO: get home associated with logged in user
    apiGet('homes').then(({ data }) => {
      this.setState({
        houseName: data[0]['name']
      })
    })

    // // TODO: get users associated with home
    // apiGet('members').then(({ data }) => {
    //   this.setState({
    //     users: data
    //   });
    // })
  }

  generateCard = () => {
    let card = []
    // TODO: for each user in users
    // for (let i = 0; i < 2; i++) {
    // card.push(<Member />);

    // return <Chore />;
  }

  render() {
    return (
      <div className="tasks">
        <h1> {this.state.houseName} </h1>
          <Chore />
      </div>
    );
  }
}


{/* <p className="counter">{this.state.peanut}</p>
  <button className="but" onClick={this.handle}>button</button>
<Chore /> */}

export default Home;