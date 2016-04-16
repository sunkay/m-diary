import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ConditionsReducer from './reducer-conditions';
import AuthReducer from './reducer-auth';

const rootReducer = combineReducers({
  conditions: ConditionsReducer,
  auth: AuthReducer,
  form: formReducer
});

export default rootReducer;
