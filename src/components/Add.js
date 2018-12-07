import React, { Component } from 'react';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import './Member.css';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			type: '',
			p: '',
			in: ''
		};
	}

	render() {
		let field1, field2;
		console.log(this.props.type);
		if (this.props.type == "Task"){
			field1 = <Input placeholder="Home Id"/>
		}
		return (
			<div className="person">
            <InputGroup>
            <InputGroupAddon addonType="prepend">
				<Button>Add {this.props.type}</Button>
			</InputGroupAddon>
            <Input placeholder={this.props.p} value={this.props.in}/>
			{field1}{field2}
            </InputGroup>
			</div>
            );
        }
    }
    
    export default Add;