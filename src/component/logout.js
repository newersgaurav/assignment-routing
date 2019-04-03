import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

function LogOut(props) {
  if (props.isAuth) {
    return (
      <div>
        {props.changeAuth()}

        <Redirect to="/login" />
      </div>
    );
  }
}

export default LogOut;

