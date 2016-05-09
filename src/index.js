import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory, hashHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';
import routes from './routes';
import reducers from './reducers';
import {AUTH_USER} from './actions/auth';

const middlewares = [thunkMiddleware];

console.log('NODE_ENV=',process.env.NODE_ENV);
if (process.env.NODE_ENV === `development` || !process.env.NODE_ENV) {
  const createLogger = require(`redux-logger`);
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) =>
        action.type !== 'redux-form/CHANGE' &&
        action.type !== 'redux-form/BLUR' &&
        action.type !== 'redux-form/FOCUS'
  });
  //middlewares.push(logger);
}

const createStoreWithMiddleware =
      applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducers);

// Check for an already authenticated user
// ToDo: Serverside validation of token and check expiration
const token = localStorage.getItem('token');
if(token){
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
