import axios from "axios";
import * as types from "./actionTypes";

export const signup = userData => dispatch => {
  const { username, email, password } = userData;
  dispatch(startSignup());
  axios
    .post("https://mentor-me-backend.herokuapp.com/api/auth/register", {
      username,
      email,
      password
    })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch(signUpSuccess(res.data.token));
    })
    .catch(err => {
      dispatch(signUpFail(err.message));
    });
};

export const userProfile = () => dispatch => {
  dispatch(userLoad());
  axios
    .get("https://mentor-me-backend.herokuapp.com/api/user")
    .then(res => {
      dispatch(userSuccess(res.data));
    })
    .catch(err => {
      dispatch(userFail(err.message));
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



// SIGN UP ACTION TYPES
export function startSignup() {
  return {
    type: types.SIGNUP_LOAD,
  };
}

export function signUpSuccess(payload) {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: payload
  };
}

export function signUpFail(payload) {
  return {
    type: types.SIGNUP_FAILURE,
    payload: payload
  };
}

// LOGIN ACTION TYPES
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

// USER PROFILE ACTION TYPES

export function userLoad() {
  return {
    type: types.USER_LOAD,
  };
}

export function userSuccess(payload) {
  return {
    type: types.USER_SUCCESS,
    payload: payload
  };
}

export function userFail(payload) {
  return {
    type: types.USER_FAILURE,
    payload: payload
  };
}

// QUESTIONS ACTION TYPES
export const fetchQuestions = () => dispatch => {
  debugger;
  axios
    .get("https://mentor-me-backend.herokuapp.com/api/questions")
    .then(res => {
      console.log(".then")
      dispatch(questionsSuccess(res.data))
    })
    .catch(err => {
      console.log("error");
    });
};
export const userProfile = () => dispatch => {
  dispatch(userLoad());
  axios
    .get("https://mentor-me-backend.herokuapp.com/api/user")
    .then(res => {
      dispatch(userSuccess(res.data));
    })
    .catch(err => {
      dispatch(userFail(err.message));
    });
};

export function questionsSuccess(payload){
    return {
      type: types.QUESTIONS_SUCCESS,
      payload: payload
    }
}