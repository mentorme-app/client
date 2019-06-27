import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { questionsReducer } from "./questionsReducer";
import { conversationsReducer } from "./conversationsReducer";
import { tagsReducer } from "./tagsReducer";
import { chatsReducer } from "./chatsReducer";

export default combineReducers({
  authReducer,
  userReducer,
  questionsReducer,
  conversationsReducer,
  tagsReducer,
  chatsReducer
});
