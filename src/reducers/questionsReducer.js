import { QUESTIONS_SUCCESS,/*, QUESTION_SUCCESS */ 
STORE_QUESTION} from "../actions/actionTypes";

const initialState = {
  questions: []
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_SUCCESS:
      return {
        questions: action.payload
      };
    case STORE_QUESTION:
      return {
        questions: [...state.questions, action.payload]
      };
    default:
      return state;
  }
};
