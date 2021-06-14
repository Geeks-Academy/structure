import { AddForm, Dashboard, EditForm, Structure } from 'pages';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Structure} />
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/admin/add">
          <AddForm />
        </Route>
        <Route exact path="/admin/edit/:id">
          <EditForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
