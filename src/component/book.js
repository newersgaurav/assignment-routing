import React, { Component } from 'react';
import './book.css';

class Book extends Component{
	render(){
		return(
			<div className="book">
				<img src={this.props.data.thumbnailUrl} />
				<h3>{this.props.data.title}</h3>
			</div>
		)
	}
}

export default Book;