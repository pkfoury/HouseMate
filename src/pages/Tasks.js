import React, { Component } from 'react';
import './Styling/Tasks.css'
import Chore from '../components/Chore';
import Add from '../components/Add';
import { apiGet, apiDelete } from '../functions/Api'
import { CardDeck } from 'reactstrap';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      houseName: null,
      tasks: null,
      chores: null
    };
  }

  componentDidMount() {
    // TODO: get home associated with logged in user
    apiGet('homes').then(({ data }) => {
      this.setState({
        houseName: data[0]['name'],
        homeId: data[0]['id']
      })
    })

     //TODO: get tasks associated with home
     apiGet('getTasks?home_id=1').then(( { data }) => {
       this.setState({
         tasks: data
       })
       this.generateChores()
     // console.log("data: " + data[0]['name']);
     })

    

    // // TODO: get users associated with home
    // apiGet('members').then(({ data }) => {
    //   this.setState({
    //     users: data
    //   });
    // })
  }

  generateChores = () => {
    let taskList = []
    for (let task of this.state.tasks) {
      taskList.push(<Chore task={task}/>)
      console.log(task)
    }
    this.setState({
      chores: taskList
    })
  }

    // TODO: for each user in users
    // for (let i = 0; i < 2; i++) {
    // card.push(<Member />);

    // return <Chore />;
  //}

  render() {
    return (
      <div className="tasks">
        <h1> {this.state.houseName} </h1>
        <Add type={'Task'} p={'Enter a chore'}/>
        <CardDeck>
          {this.state.chores}
        </CardDeck> 
      </div>
    );
  }
}


export default Tasks;