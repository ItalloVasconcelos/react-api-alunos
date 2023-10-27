import { combineReducers } from 'redux';
import auth from './auth/loginReducer';

export default combineReducers({
  auth,
});
