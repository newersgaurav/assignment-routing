import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './App.css';
import Header from './component/header';
import Login from './component/login';
import BookGallery from './component/book-gallery';
import Logout from './component/logout';
import BookDetail from './component/bookDetails';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {

  constructor(){
    super();
    this.state = {
      isAuth : false,
      username : "admin",
      password : "admin"
    }
  }

  handleSubmit = (e,item) => {
    e.preventDefault();
    const {username, password} = this.state;

    if(item.username === username && item.password === password){
      this.setState({
        isAuth : true
      })
    }
    else{
      this.setState({
        isAuth : false
      })
    }
  }

  changeAuth = () => {
    console.log("change auth called")
    this.setState({
      isAuth : !this.state.isAuth
    })
    console.log(this.state);
  }



  render() {
    return (
      <Router>
        <Header auth={this.state.isAuth}/>

        <Route
          exact 
          path = "/"
          render = { () => <p className="opening-message">Content will be showed as soon as u login</p>}
        />

        <Route
          path="/login"
          component = {() => (
                          <Login 
                            handleSubmit = {this.handleSubmit}
                            isAuth = {this.state.isAuth}
                            />
                      )}
        />

        <PrivateComponent
          path="/book-detail/:_id/:title"
          isAuth={this.state.isAuth}
          component={BookDetail}
        />

        <PrivateComponent
          path="/book"
          isAuth = {this.state.isAuth}
          component = {BookGallery}
        />

        <Route
          path='/logout'
          component = {() => (
            <Logout 
              changeAuth = {this.changeAuth}
              isAuth = {this.state.isAuth}
            />
          )} />


      </Router>
      
    );
  }
}

export default App;

const PrivateComponent = ({
  component: Component,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: isAuth
            }}
          />
        )
      }
    />
  );
};



