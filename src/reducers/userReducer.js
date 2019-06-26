import {
  USER_LOAD,
  USER_SUCCESS,
  USER_FAILURE,
  USER_EDIT
} from "../actions/actionTypes";

const initialState = {
  user: [],
  loading: false,
  error: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOAD:
      return {
        ...state,
        loading: true,
        error: ""
      };

    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case USER_EDIT:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
