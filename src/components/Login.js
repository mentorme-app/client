import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/actionCreators.js";
import Loader from "react-loader-spinner";

function Login(props) {
  const [state, changeState] = useState({
    email: "",
    password: ""
  });

  const submitLogin = event => {
    event.preventDefault();
    props.loginUser({
      email: state.email,
      password: state.password
    });
    changeState({ ...state, password: "" });
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/home" />;
  } else {
    return (
      <div>
        <form onSubmit={submitLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={e => changeState({ ...state, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={e => changeState({ ...state, password: e.target.value })}
          />
          <input type="submit">
            {props.isLoggingIn ? "Loading..." : "LOGIN"}
          </input>
          {!props.loginSuccess && (
            <div>Wrong email or password, please try again</div>
          )}
        </form>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    isLoggingIn: state.loginReducer.isLoggingIn,
    loginSuccess: state.loginReducer.loginSuccess
  };
}

export default connect(
  mapStatetoProps,
  { loginUser }
)(Login);
