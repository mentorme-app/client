import axios from "axios";
import jwtDecode from "jwt-decode";
import * as types from "./actionTypes";

export const signup = userData => dispatch => {
  const { username, email, password } = userData;
  dispatch(authSignup());
  return axios
    .post("https://mentor-me-backend.herokuapp.com/api/auth/register", {
      username,
      email,
      password
    })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      const user = jwtDecode(res.data.token);
      dispatch(authSuccess(user.subject));
    })
    .catch(err => {
      dispatch(authFail(err.response.data.message));
    });
};

export const loginUser = user => dispatch => {
  dispatch(authSignup());
  return axios
    .post("https://mentor-me-backend.herokuapp.com/api/auth/login", user)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      const user = jwtDecode(res.data.token);
      dispatch(authSuccess(user.subject));
    })
    .catch(err => {
      dispatch(authFail(err.response.data.message));
    });
};

export const userProfile = id => dispatch => {
  dispatch(userLoad());
  axios
    .get(`https://mentor-me-backend.herokuapp.com/api/user/${id}`)
    .then(res => {
      dispatch(userSuccess(res.data));
    })
    .catch(err => {
      dispatch(userFail(err.message));
    });
};

export const editCred = (id, cred) => dispatch => {
  dispatch(userLoad());
  axios
    .put(`https://mentor-me-backend.herokuapp.com/api/user/${id}`, cred)
    .then(res => {
      dispatch(userEdit(res.data));
    })
    .catch(err => {
      dispatch(userFail(err.message));
    });
};

// SIGN UP ACTION TYPES
export function authSignup() {
  return {
    type: types.AUTH_LOAD
  };
}

export function authSuccess(user) {
  return {
    type: types.AUTH_SUCCESS,
    payload: user
  };
}

export function authFail(payload) {
  return {
    type: types.AUTH_FAILURE,
    payload: payload
  };
}

// USER PROFILE ACTION TYPES

export function userLoad() {
  return {
    type: types.USER_LOAD
  };
}

export function userSuccess(payload) {
  return {
    type: types.USER_SUCCESS,
    payload: payload
  };
}

export function userEdit(payload) {
  return {
    type: types.USER_EDIT,
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
  axios
    .get("https://mentor-me-backend.herokuapp.com/api/questions")
    .then(res => {
      dispatch(questionsSuccess(res.data))
    })
    .catch(err => {
    });
};

export function questionsSuccess(payload){
    return {
      type: types.QUESTIONS_SUCCESS,
      payload: payload
    }
}

/* export const fetchQuestion = (id) => dispatch => {
  axios
    .get(`https://mentor-me-backend.herokuapp.com/api/questions/${id}`)
    .then(res => {
      dispatch(questionSuccess(res.data))
    })
    .catch(err => {
    });
};

export function questionSuccess(payload){
  return {
    type: types.QUESTION_SUCCESS,
    payload: payload
  }
} */