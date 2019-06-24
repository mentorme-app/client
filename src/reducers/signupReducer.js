import { SIGNUP_LOAD, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions";

const initialState = {
  error: "",
  token: "",
  signingUp: false
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_LOAD:
      return {
        ...state,
        signingUp: true,
        error: ""
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        token: action.payload
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };

    default:
      return state;
  }
};
