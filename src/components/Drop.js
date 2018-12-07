import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { apiGet } from '../functions/Api'
// import './Member.css';

class Drop extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			users: null,
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
			dropdownOpen: !prevState.dropdownOpen,
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
		const { value, changeVal } = this.props;
		const { users } = this.state;

		return (
			<div className="person">
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
			<DropdownToggle caret> Change Member
			</DropdownToggle>
			<DropdownMenu> 
				{ users && users.map((user) => {
					return <DropdownItem onClick={ () => changeVal(user) } key={user.name}>{user.name}</DropdownItem>
				}) || <DropdownItem>hi</DropdownItem>}
			</DropdownMenu>
			</Dropdown>

			</div>
			);
		}
	}
	
	export default Drop;