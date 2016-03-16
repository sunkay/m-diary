import { combineReducers } from 'redux';
import ConditionsReducer from './reducer-conditions';

const rootReducer = combineReducers({
  conditions: ConditionsReducer
});

export default rootReducer;
