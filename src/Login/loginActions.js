import axios from "axios";
import * as types from "./actiontypes.js";

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
