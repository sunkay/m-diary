import React from 'react';
import {Route, IndexRoute} from 'react-router';

import requireAuth from './components/require_authentication';
import App from './components/app';
import MainContent from './components/main-content';
//import ListConditions from './components/list-conditions';
import ConditionsList from './components/conditions-list';
import NewCondition from './components/new-condition';
import Login from './components/auth/login';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={ConditionsList} />
    <Route path="cond/new" component={requireAuth(NewCondition)} />
    <Route path="cond/edit/:id" component={requireAuth(NewCondition)} />
    <Route path="/login" component={Login} />
  </Route>
);
