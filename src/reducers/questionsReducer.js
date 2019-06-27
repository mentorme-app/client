import { QUESTIONS_SUCCESS/*, QUESTION_SUCCESS */ } from "../actions/actionTypes";

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
    /* case QUESTION_SUCCESS:
      return {
        questions: [state.questions, action.payload]
      }; */
    default:
      return state;
  }
};
