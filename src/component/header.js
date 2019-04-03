import React, { Component } from 'react';
import './header.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Header extends Component{
	render(){
		return(
			<div className="header">
				<h1>BOOK ADDICTS</h1>
				<nav>
					<Link className="link" to="/book">Book Gallery</Link>
					{
						this.props.auth ? <Link className="link" to="/logout">Logout</Link> : <Link className="link" to="/login">login</Link>
					}
				</nav>
			</div>
		)
	}	
}

export default Header;