import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Editor } from 'pages/Editor';

export const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Editor />
        </Route>
      </Switch>
    </Router>
  );
};
