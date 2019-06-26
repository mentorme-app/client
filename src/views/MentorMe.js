import React, { Component } from "react";
import Signup from "../components/Signup";
import UserProfile from "../components/UserProfile";
import Login from "../components/Login";
import Homepage from "../components/Homepage";
import { Route, Redirect } from "react-router-dom";


export default class MentorMe extends Component {

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() =>
            localStorage.getItem("token") ? (
              <Redirect to= "/profile" />
            ) : (
              <Redirect to="/signup" />
            )
          }
        />
        <Route path="/profile" component={UserProfile} />
        <Route path="/signup" render={props => <Signup {...props} />} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Homepage} />
        <Route path="/question/:id" render={props => <Question id={props.id}} />
      </div>
    );
  }
}
