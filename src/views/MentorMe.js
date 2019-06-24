import React, { Component } from "react";
import Signup from "../components/Signup";
import UserProfile from "../components/UserProfile";


export default class MentorMe extends Component {
    render() {
        return (
            <div>
                <Signup />
                <UserProfile />
            </div>
        )
    }
}
