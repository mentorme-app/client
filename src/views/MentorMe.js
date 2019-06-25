import React, { Component } from "react";
import Signup from "../components/Signup";
import UserProfile from "../components/UserProfile";
import Login from "../components/Login";
import { Route, Redirect } from "react-router-dom";

export default class MentorMe extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() =>
            localStorage.getItem("token") ? (
                <UserProfile />
            ) : (
              <Redirect to="/signup" />
            )
          }
        />
        <Route path="/signup"  render={props => <Signup {...props} />} /> 
        <Route path="/login" component={Login} />
      </div>
    );
  }
}
