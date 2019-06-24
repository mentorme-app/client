import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/actionCreators.js";
import Loader from "react-loader-spinner";

function Login(props) {
  const refEmail = React.createRef();
  const refPassword = React.createRef();

  const submitLogin = event => {
    event.preventDefault();
    props.loginUser({
      email: refEmail.current.value,
      password: refPassword.current.value
    });
    refPassword.current.value = "";
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/home" />;
  } else {
    return (
      <div>
        <form onSubmit={submitLogin}>
          <input type="email" placeholder="Enter Email" ref={refEmail} />
          <input type="password" placeholder="Enter Password" ref={refPassword} />
          <button type="submit">
            {props.signingUp ? (
              <Loader type="ThreeDots" color="#ccc" height={80} width={80} />
            ) : (
              "Log In"
            )}
          </button>
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
