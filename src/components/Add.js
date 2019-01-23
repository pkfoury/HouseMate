import React, { Component } from 'react';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import './Member.css';
import { apiPost } from '../functions/Api';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			home_id: null,
			type: '',
			p: '',
			in: ''
		};
		this.updateChore = this.updateChore.bind(this);
		this.updateHomeId = this.updateHomeId.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateChore(e) {
		this.setState({ name: e.target.value })
	}

	updateHomeId(e) {
		this.setState({ home_id: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault();
		apiPost('addTask', {
			name: this.state.name,
			home_id: this.state.home_id
		}).then( ({data}) => {
			console.log(data)
		})
	}

	render() {
		let field1;
		console.log(this.props.type);
		if (this.props.type == "Task") {
			field1 = <Input onChange={this.updateHomeId} placeholder="Home Id" />
		}
		return (
			<div className="person">
				<InputGroup onSubmit={this.handleSubmit}>
					<InputGroupAddon addonType="prepend">
						<Button type="submit">Add {this.props.type}</Button>
					</InputGroupAddon>
					<Input onChange={this.updateChore} placeholder={this.props.p} value={this.props.in} />
					{field1}
				</InputGroup>
			</div>
		);
	}
}

export default Add;