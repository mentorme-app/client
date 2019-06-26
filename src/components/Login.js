import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/actionCreators.js";

function Login(props) {
  const [state, changeState] = useState({
    email: "",
    password: ""
  });

  const submitLogin = event => {
    event.preventDefault();
    props.loginUser(state);
    // changeState({ ...state, password: "" });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      return <Redirect to="/home" />;
    }
  });

  return (
    <div>
      <form onSubmit={submitLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={state.email}
          onChange={e => changeState({ ...state, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={state.password}
          onChange={e => changeState({ ...state, password: e.target.value })}
        />
        <input type="submit"
          value={props.loading ? "Loading..." : "LOGIN"}
        />
        {props.error && (
          <div>Wrong email or password, please try again</div>
        )}
      </form>
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error
  };
}

export default connect(
  mapStatetoProps,
  { loginUser }
)(Login);
