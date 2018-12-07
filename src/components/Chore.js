import React, { Component } from 'react';
import {
  Card, Button, CardTitle,
  CardText, Row, Col
} from 'reactstrap';

import './Chore.css'
import Drop from './Drop';
import { apiGet } from '../functions/Api';


class Chore extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      task: null,
      name: null,
      assignee: null,
      duration: null,
      dropdownOpen: false,
      dropVal: '',
      index: 1
    }

    this.changeVal = this.changeVal.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  changeVal(user) {
    this.setState({
      dropVal: user
    })
  }

  removeChore(task) {
    console.log("hit")
    // if (window.confirm("Are you sure you want to delete this task?")) {
    //   let choreList = this.state.chores;
    //   //choreList.splice(index,1); //remove one element at index from the array
    //   // this.setState({chores: choreList})
    //   console.log("chores: " + this.state.chores);
    //   console.log("choreList: " + choreList);
    // }      
    apiGet('deleteTask?name=' + task, (req, res) => {
      console.log(res)
      // console.log("Name: " + task)
      // console.log(res.data)
    })
  }

  componentDidMount() {
    if (this.props.task.member_id) {
      apiGet('getMember?id=' + this.props.task.member_id, (req, res) => {

        this.setState({
          assignee: res.data[0].name
        })
      })
    }


  }


  render() {
    const { dropVal } = this.state;
    let assig;

    if (dropVal.name == '' || dropVal.name == null || dropVal == 'None') {
      assig = <CardText>  Not Yet Assigned </CardText>
    }
    else {
      assig = <CardText> Assignee:  {dropVal.name} </CardText>
      // assig = <CardText> Assignee:  { this.props.task.member_id } </CardText>

    }

    //console.log("sdsd " +this.props.task.name);
    return (
      <div className="chore">
        <Row>
          <Col lg="10" xs="6">
            <Card body >
              <CardText> {this.props.task.name} </CardText>
              {assig}
              <Drop value={dropVal} changeVal={this.changeVal} />
              <Button onClick={() => this.removeChore(this.props.task.name)}> Delete Chore </Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Chore;