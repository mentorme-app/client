import { QUESTIONS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  questions: []
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload
      };
    default:
      return state;
  }
};
