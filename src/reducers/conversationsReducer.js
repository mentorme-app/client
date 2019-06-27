import {
  CONVERSATIONS_SUCCESS,
  ADD_CONVERSATION,
} from "../actions/actionTypes";

const initialState = {
  conversations: [],
  questionId: "",
  wasFetched: false,
  rightAvatar: ""
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONVERSATIONS_SUCCESS:
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
