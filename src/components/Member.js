import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardImg } from 'reactstrap';
import './Member.css';

class MemberCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null
		};
	}

	render() {
		return (
			<div className="person">
				<Card >
					<CardBody>
						<CardImg src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
						<CardTitle>{this.props.member['name']}</CardTitle>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default MemberCard;