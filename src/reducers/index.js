import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { signupReducer } from "./signupReducer";
import { loginReducer } from "./loginReducer.js";

export default combineReducers({
  signupReducer,
  userReducer,
  loginReducer
});
