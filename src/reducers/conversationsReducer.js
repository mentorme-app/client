import {
  CONVERSATIONS_SUCCESS,
  ADD_CONVERSATION
} from "../actions/actionTypes";

const initialState = {
  conversations: [],
  wasFetched: false
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONVERSATIONS_SUCCESS:
      return {
        conversations: action.payload,
        wasFetched: true
      };
    case ADD_CONVERSATION:
        debugger;
      return {
        conversations: state.conversations.concat(action.payload),
        wasFetched: true
      };
    default:
      return state;
  }
};
