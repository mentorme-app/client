import React, { Component } from "react";
import Signup from "../components/Signup.js";
import Login from "../components/Login.js";
import { Route } from "react-router-dom";



export default class MentorMe extends Component {
    render() {
        return (
            <div>
                <Route path="/SignUp" component={Signup} />
                <Route path="/LogIn" component={Login} />
            </div>
        )
    }
}
