import axios from "axios";
import {SIGNUP_LOAD,SIGNUP_SUCCESS } from './actionTypes';

export const signup  = (name, email, password) => dispatch => {
  dispatch({ type: SIGNUP_LOAD });
   axios
    .post("https://mentor-me-backend.herokuapp.com/signup", { name, email, password })
    .then(res => {
      localStorage.setItem("token", res.data);
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch(err => console.log(err.message));
};