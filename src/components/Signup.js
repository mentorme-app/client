import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {SignupModal} from '../styled-components/styled-components'
import { Link } from "react-router-dom";
import { signup } from "../actions";

const Signup = props => {
  
  const [userData, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const userSignup = e => {
    e.preventDefault();

    props.signup(userData)
    // .then(() => props.history.push('/profile'))
  };

  useEffect(() => {
    if(localStorage.getItem('token')) {
      props.history.push('/profile')
    }
  })

  return (
    <SignupModal display={localStorage.getItem("token") ? "none" : "block"}>
      <div>
        <h1>Register</h1>
        <form onSubmit={userSignup}>
          <input
            type="text"
            placeholder="Name"
            value={userData.username}
            onChange={e => setUser({ ...userData, username: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={e => setUser({ ...userData, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={e => setUser({ ...userData, password: e.target.value })}
          />
          <input type="submit"
            value={props.loading ? "Loading..." : "REGISTER"}
          />
        </form>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </SignupModal>
  );
};

const mapStateToProps = state => ({
  loading: state.authReducer.loading,
  error: state.authReducer.error
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
