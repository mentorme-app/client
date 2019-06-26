import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Signup from "../components/Signup";
import UserProfile from "../components/UserProfile";
import Login from "../components/Login";
import Homepage from "../components/Homepage";
import Question from "../components/Question";
import UserEdit from "../components/UserEdit";


export default class MentorMe extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() =>
            localStorage.getItem("token") ? (
              <Redirect to="/profile" />
            ) : (
              <Redirect to="/signup" />
            )
          }
        />
        <Route path="/profile" render={props => <UserProfile {...props} />} />
        <Route path="/signup" render={props => <Signup {...props} />} />
        <Route path="/login" component={Login} />
        <Route path="/edit-profile" component={UserEdit} />
        <Route path="/home" component={Homepage} />
        <Route path="/question/:id" render={props => <Question {...props} />} />
        <Route
          path="/conversation/:id"
          render={props => {/* <Conversation {...props} 7>*/} }
        />
      </div>
    );
  }
}
