import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import SingupPage from './containers/SingupPage';
import HomePage from './containers/HomePage';
//import SingupPage from './containers/SingupPage';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="singup" component={SingupPage}/>

    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
