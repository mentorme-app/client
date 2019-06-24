import React, { Component } from "react";
import Signup from "../components/Signup.js";
import Login from "../components/Login.js";


export default class MentorMe extends Component {
    render() {
        return (
            <div>
                <Signup />
                <Login />
            </div>
        )
    }
}
