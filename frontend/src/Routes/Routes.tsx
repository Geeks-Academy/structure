import Dashboard from 'pages/DashBoard';
import Structure from 'pages/Structure';
import AddForm from 'pages/AddForm';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import EditForm from 'pages/EditForm';

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
