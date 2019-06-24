import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/actionCreators.js";

function Login(props) {
  const refEmail = React.createRef();
  const refPassword = React.createRef();
  console.log(refEmail)

  const submitLogin = event => {
    event.preventDefault();
    props.loginUser({
      email: refEmail.current.value,
      password: refPassword.current.value
    });
    refPassword.current.value = "";
    refEmail.current.value = "";
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/home" />;
  } else {
    return (
      <div>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            placeholder="E-mail"
            ref={refEmail}
          />
          <input
            type="text"
            placeholder="Password"
            ref={refPassword}        
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
