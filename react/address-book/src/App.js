import React, { Component } from 'react';
import {addresses} from './addresses.js';

import './contactStyle.css';
import ContactPreview from './contactPreview.js';
import ContactInformation from './contactInformation.js';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
	setCurrentContact=(contact) => {
		this.setState({
			currentContact: contact
		})
	};
	
	constructor(props) {
		super(props);
		
		this.setCurrentContact=this.setCurrentContact.bind(this);
		
		this.state = {
			currentContact: null
		};
	}
  render() {
	  //console.log(this.state.currentContact);
	  
    return (
	<main>
		<header>
		<h1>Address Book</h1>
		<h2>select a contact to see more information</h2>
			</header>
		
		
        <ContactPreview
          contact={addresses}
          setCurrentContact={this.setCurrentContact}
          />
         
		<div className='selectContact'>
                {
                 this.state.currentContact ?
                 	<ContactInformation
						contact={this.state.currentContact}
						onClickFunction={this.setCurrentContact}
						/>
               
        :
		
		<div className='contactPreview'>
			{
				addresses.map((address) => {
					return(
					<div
						key={address}
						>
						<ContactPreview
							contact={address}
							onClickFunction={this.setCurrentContact}
						/>
						</div>
					);
				})
  }
	</div>
		
		
		


}
</div>
	  				<footer>
						wdv321 advanced javascript |
						eileen mcmanus |
						react address book app</footer>
</main>
    );
  }
}

export default App;
