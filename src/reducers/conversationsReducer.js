import {
  CONVERSATIONS_SUCCESS,
  ADD_CONVERSATION,
  CONV_BY_ID_SUCCESS,
  STORE_MESSAGE
} from "../actions/actionTypes";

const initialState = {
  conversations: [],
  conv: {},
  wasFetched: false,
  convWasFetched: false
};

export const conversationsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case CONVERSATIONS_SUCCESS:
      return {
        ...state,
        wasFetched: true,
        conversations: action.payload,
        convWasFetched: false
      };
    case ADD_CONVERSATION:
      return {
        ...state,
        wasFetched: true,
        convWasFetched: true,
        conversations: state.conversations.concat(action.payload)
      };
    case CONV_BY_ID_SUCCESS:
      return {
        ...state,
        conv: action.payload,
        convWasFetched: true
      };
    case STORE_MESSAGE:
      return {
        ...state,
        conv : {...state.conv, messages: state.conv.messages.concat(action.payload)}
      }
    default:
      return state;
  }
};
