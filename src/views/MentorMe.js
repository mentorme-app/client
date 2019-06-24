import React, { Component } from "react";
import Signup from "../components/Signup";
import UserProfile from "../components/UserProfile";
import Login from "../components/Login";
import { Route } from "react-router-dom";

export default class MentorMe extends Component {
  render() {
    return (
      <div>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <UserProfile />
      </div>
    );
  }
}
