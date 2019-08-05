import React from 'react';
import { Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { Route } from '@project/common';

import '../style.less';

import HomePage from './Homepage';
import GeneralPage from './General';

export default hot(module)(() => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route exact path="/general" component={GeneralPage} />
  </Switch>
));
