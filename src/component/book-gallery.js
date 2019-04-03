import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import books from '../booksJSON.js';
import Book from './book.js';
import './book-gallery.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class BookGallery extends Component{
	constructor(){
		super();
		this.state = {
			books : books
		}
	}

	render(){
		return(
			<div className="books">
				{this.state.books.map(
						(item,index) => {
							const {_id, title, isbn} = item;
							{console.log("id..",_id)}
							return(
								<Link className="link" to={{pathname : 	`book-detail/${_id}/${title}`, state : item }} key = {isbn}>
									<Book data={item}/>
								</Link>
							)
						}
					)}
			</div>
		)
	}
}

export default BookGallery;