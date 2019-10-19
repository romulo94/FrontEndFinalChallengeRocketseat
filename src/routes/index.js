import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Main from '~/pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
}
