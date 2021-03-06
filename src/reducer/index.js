import { combineReducers } from 'redux';
import todos from './todoReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
  todos,
  counter
});

export default rootReducer;
