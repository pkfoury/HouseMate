import React, { Component } from 'react';
import { Card, CardTitle, Col, CardImg } from 'reactstrap';

class MemberCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Julien'
			// names: ['Julien', 'Peter']
		};
	}
	
	render(){
		return(
			<div>
				{/* <Col lg="4" xs="4"> */}
					<Card body >
						<CardImg  src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"/>
						<CardTitle>{this.state.name}</CardTitle>
					</Card>
				{/* </Col> */}
			</div>
			);
		}
	}
	
	export default MemberCard;