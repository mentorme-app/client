import * as types from "./actiontypes.js";

const initialState = {
  token: "",
  loginSuccess: null,
  isLogginIn: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action) {
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
