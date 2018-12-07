import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { apiGet } from '../functions/Api'
// import './Member.css';

class Drop extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			users: {},
			home: {},
			options: null,
			dropdownOpen: false
			
		};
	}
	
	componentDidMount() {
		// TODO: get home associated with logged in user
		apiGet('homes?id=1').then(({ data }) => {
			this.setState({
				home: data
			})
		})
		
		// TODO: get users associated with home
		apiGet('members?home_id=1').then(({ data }) => {
			this.setState({
				users: data
			});
			this.listMembers();
		})
		
	}
	
	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	
	listMembers () {
		let members = []
		for (let member of this.state.users) {
			members.push(<DropdownItem> {member.name} </DropdownItem>)
		}
		this.setState({
			options: members
		})
		
	}
	
	render() {
		return (
			<div className="person">
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
			<DropdownToggle caret> Member
			</DropdownToggle>
			<DropdownMenu> 
			{this.state.options}
			</DropdownMenu>
			</Dropdown>
			
			</div>
			);
		}
	}
	
	export default Drop;