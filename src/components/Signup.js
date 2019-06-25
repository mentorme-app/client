import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
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

    props.signup(userData);
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
          <button type="submit">
            {props.signingUp ? "Loading..." : "REGISTER"}
          </button>
        </form>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </SignupModal>
  );
};

const mapStateToProps = state => ({
  signingUp: state.signupReducer.signingUp
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);

const SignupModal = styled.div`
  animation: ${props => (props.display ? fadeIn : fadeOut)} 0.3s linear;
  display: ${props => props.display};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 812px;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(25deg, #5574f7, #60c3ff);
  color: #fff;

  div {
    margin: 133px 30px;

    a {
      text-decoration: underline;
      color: #fff;
      cursor: pointer;
    }
    h1 {
      color: #fff;
      margin-bottom: 90px;
    }
    form {
      display: flex;
      flex-direction: column;
      * {
        box-sizing: border-box;
      }

      input {
        margin: 1.2rem 0rem;
        padding-bottom: 1rem;
        background: none;
        border: none;
        border-bottom: 1px solid #fff;
        color: #fff;
        font-size: 1rem;
        ::-webkit-input-placeholder {
          color: #fff;
          font-size: 1rem;
        }
        &:focus {
          outline: none;
        }
      }

      button {
        background-color: #fff;
        color: #5887f9;
        padding: 1rem;
        border: none;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: bold;
        margin: 1.2rem 0rem;
      }
    }
  }
`;

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;
