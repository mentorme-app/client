import axios from "axios";
// import withAuth from "../withAuth";
import {
  SIGNUP_LOAD,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  USER_LOAD,
  USER_SUCCESS,
  USER_FAILURE
} from "./actionTypes";

export const signup = userData => dispatch => {
    console.log(userData)
  const { username, email, password } = userData;
  dispatch({ type: SIGNUP_LOAD });
  axios
    .post("https://mentor-me-backend.herokuapp.com/api/auth/register", {
      username,
      email,
      password
    })
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload:res.data.token });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.message });
      console.log(err.message);
    });
};

export const userProfile = () => dispatch => {
  dispatch({ type: USER_LOAD });
  axios
    .get("https://mentor-me-backend.herokuapp.com/api/user")
    .then(res => {
      dispatch({ type: USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: USER_FAILURE, payload: err.message });
    });
};
