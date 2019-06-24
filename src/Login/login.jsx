import React from "react";
import {} from "";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "./loginActions.js";

function Login(props) {
  const refName = React.createRef();
  const refPassword = React.createRef();

  const submitLogin = event => {
    event.preventDefault();
    this.props.loginUser({
      username: refName.current.value,
      password: refPassword.current.value
    });
    refPassword.current.value = "";
    refName.current.value = "";
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/home" />;
  } else {
    return (
      <div>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            placeholder="Username"
            ref={refName}
            value={refName.current.value}
          />
          <input
            type="text"
            placeholder="Password"
            ref={refPassword}
            value={refPassword.current.value}
          />
          <input type="submit" onClick={submitLogin} value="Login" />
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
