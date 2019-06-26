import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { signupReducer } from "./signupReducer";
import { loginReducer } from "./loginReducer.js";
import { questionsReducer } from "./questionsReducer.js";

export default combineReducers({
  signupReducer,
  userReducer,
  loginReducer,
  questionsReducer
});
