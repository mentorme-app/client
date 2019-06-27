import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { questionsReducer } from "./questionsReducer";
import { conversationsReducer } from "./conversationsReducer";
import { tagsReducer } from "./tagsReducer";

export default combineReducers({
  authReducer,
  userReducer,
  questionsReducer,
  conversationsReducer,
  tagsReducer
});
