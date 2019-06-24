import axios from "axios";
import * as types from "./actionTypes";

export const signup = userData => dispatch => {
  const { username, email, password } = userData;
  dispatch({ type: types.SIGNUP_LOAD });
  axios
    .post("https://mentor-me-backend.herokuapp.com/api/auth/register", {
      username,
      email,
      password
    })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: types.SIGNUP_FAILURE, payload: err.message });
    });
};

export const userProfile = () => dispatch => {
  dispatch({ type: types.USER_LOAD });
  axios
    .get("https://mentor-me-backend.herokuapp.com/api/user")
    .then(res => {
      dispatch({ type: types.USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.USER_FAILURE, payload: err.message });
    });
};

export function loginUser(user) {
  return dispatch => {
    dispatch(startLogin());
    axios
      .post("https://mentor-me-backend.herokuapp.com/api/auth/login", user)
      .then(res => {
        dispatch(login(res.data));
        dispatch(successLogin());
      })
      .catch(err => {
        dispatch(failureLogin());
      })
      .finally(dispatch(endLogin()));
  };
}

export function login(payload) {
  return {
    type: types.LOGIN,
    payload: payload
  };
}

export function failureLogin() {
  return {
    type: types.FAILURE_LOGIN
  };
}

export function successLogin() {
  return {
    type: types.SUCCESS_LOGIN
  };
}

export function startLogin() {
  return {
    type: types.START_LOGIN
  };
}

export function endLogin() {
  return {
    type: types.END_LOGIN
  };
}
