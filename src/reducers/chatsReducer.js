import { CHATS_ID } from "../actions/actionTypes";
import jwtDecode from "jwt-decode";
const token = localStorage.getItem("token");
const initialUser = token ? jwtDecode(token) : {};

const initialState = {
  chats:  [],
  userId: initialUser ? initialUser.subject : "",
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHATS_ID:
        return {
          ...state,
          chats: action.payload
        };

      default:
        return state;
    }
  };