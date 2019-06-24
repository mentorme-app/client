import * as types from "../actions/actionTypes.js";

const initialState_login = {
  token: "",
  loginSuccess: true,
  isLogginIn: false
};

export const loginReducer = (state = initialState_login, action) => {
  switch (action.type) {
    case types.START_LOGIN:
      return { ...state, isLogginIn: true };
    case types.END_LOGIN:
      return { ...state, isLogginIn: false };
    case types.FAILURE_LOGIN:
      return { ...state, loginSuccess: false };
    case types.SUCCESS_LOGIN:
      return { ...state, loginSuccess: true };
    case types.LOGIN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
