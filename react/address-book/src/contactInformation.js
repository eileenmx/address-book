import React, { Component } from 'react';

class ContactInformation extends Component {
	render() {
		const{contact, onClickFunction}=this.props;
		
		return(
			<div className="contactFull">
			<a href='App.js'><input  className='align-right' type='button' value='X'/></a>
				<p>{contact.firstName} {contact.lastName}</p>
				<p>{contact.addressOne} {contact.addressTwo}</p>
				<p>{contact.city}, {contact.state} {contact.zipCode}, {contact.country}</p>	
			
			</div>
			
			
		)
	}
	}

export default ContactInformation;