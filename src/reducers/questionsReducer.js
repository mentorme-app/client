import { QUESTIONS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  questions: []
};

export const questionsReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case QUESTIONS_SUCCESS:
      return {
        questions: action.payload
      };
    default:
      return state;
  }
};
