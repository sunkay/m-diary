import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';

import routes from './routes';
import reducers from './reducers';

const middlewares = [thunkMiddleware];

console.log('NODE_ENV=',process.env.NODE_ENV);
if (process.env.NODE_ENV === `development` || !process.env.NODE_ENV) {
  const createLogger = require(`redux-logger`);
  const logger = createLogger({
    collapsed: true
  });
  middlewares.push(logger);
}

const createStoreWithMiddleware =
      applyMiddleware(...middlewares)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
