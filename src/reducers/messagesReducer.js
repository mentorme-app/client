import {STORE_MESSAGES} from "../actions/actionTypes.js";


const intialState = [];

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case STORE_MESSAGES:
        return {
          conversations: action.payload,
          questionId: action.payload[0].question_id,
          wasFetched: true
        };
      case ADD_CONVERSATION:
        return {
          conversations: state.conversations.concat(action.payload),
          questionId: state.conversations[0].question_id,
          wasFetched: true
        };
      default:
        return state;
    }
  };

