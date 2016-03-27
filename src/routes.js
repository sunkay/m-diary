import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import MainContent from './components/main-content';
//import ListConditions from './components/list-conditions';
import ConditionsList from './components/conditions-list';
import NewComdition from './components/new-condition';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={ConditionsList} />
    <Route path="cond/new" component={NewComdition} />
  </Route>
);
