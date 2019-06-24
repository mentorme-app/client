import axios from "axios";

export const SIGNUP_LOAD = "SIGNUP_LOAD";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

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