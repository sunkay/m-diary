import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ConditionsReducer from './reducer-conditions';

const rootReducer = combineReducers({
  conditions: ConditionsReducer,
  form: formReducer
});

export default rootReducer;
