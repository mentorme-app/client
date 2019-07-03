import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { FormModal } from "../styled-components/styled-components";
import { loginUser } from "../actions/actionCreators.js";

function Login(props) {
  const [state, changeState] = useState({
    email: "",
    password: ""
  });

  const submitLogin = event => {
    event.preventDefault();
    props.loginUser(state).then(res => {
      if (res.status === 200) props.history.push("/home");
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return <Redirect to="/home" />;
    }
  });

  return (
    <FormModal display={localStorage.getItem("token") ? "none" : "block"}>
      <div>
        <h1>Log In</h1>
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
          <input type="submit" value={props.loading ? "Loading..." : "LOGIN"} />
          {props.error && <div>Wrong email or password, please try again</div>}
        </form>
        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </FormModal>
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
