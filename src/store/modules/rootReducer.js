import { combineReducers } from 'redux';
import exampleReducer from './example/botaoClicadoReducer';

export default combineReducers({
  example: exampleReducer,
});
