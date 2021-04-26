import FormPanel from 'pages/Form';
import Dashboard from 'pages/DashBoard';
import Structure from 'pages/Structure';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Structure} />
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/admin/add">
          <FormPanel />
        </Route>
        <Route exact path="/admin/edit/:id">
          <FormPanel edit />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
