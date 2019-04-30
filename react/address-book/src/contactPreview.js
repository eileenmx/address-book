import React, { Component } from 'react';

class ContactPreview extends Component {
	render() {
		const{contact, onClickFunction}=this.props;
	
		return(
			<button 
				onClick={() => onClickFunction(contact)}
			>
				<p>{contact.firstName} {contact.lastName}</p>
				<p>{contact.addressOne}</p>
			</button>
		)
	}
}

export default ContactPreview;
