import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { questionsReducer } from "./questionsReducer";
import { chatsReducer } from "./chatsReducer";

export default combineReducers({
  authReducer,
  userReducer,
  questionsReducer,
  chatsReducer
});
