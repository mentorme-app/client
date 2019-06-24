import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { signup } from "../actions";

const Signup = props => {

  const [userData, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });


  const userSignup = e => {
    e.preventDefault();

    props.signup(userData)
  };

  return (
    <div>
      <form onSubmit={userSignup}>
        <input
          type="text"
          placeholder="Enter name"
          value={userData.name}
          onChange={e => setUser({ ...userData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={userData.email}
          onChange={e => setUser({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={userData.password}
          onChange={e => setUser({ ...userData, password: e.target.value })}
        />
        <button type="submit">
          {props.signingUp ? (
            <Loader type="ThreeDots" color="#ccc" height={80} width={80} />
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
    signingUp: state.signupReducer.signingUp
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
