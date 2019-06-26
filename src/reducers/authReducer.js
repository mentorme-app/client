import { AUTH_LOAD, AUTH_SUCCESS, AUTH_FAILURE } from "../actions";
import jwtDecode from "jwt-decode";
const token = localStorage.getItem("token");
const initialUser = token ? jwtDecode(token) : {};

const initialState = {
  error: "",
  userId: initialUser ? initialUser.subject : "",
  loading: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOAD:
      return {
        ...state,
        signingUp: true,
        error: ""
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        signingUp: false,
        userId: action.payload
      };

    case AUTH_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };

    default:
      return state;
  }
};
