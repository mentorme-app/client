import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer'; 
import { loginReducer } from './loginReducer.js';

export default combineReducers({
    signupReducer, loginReducer
  });