import Structure from 'pages/Structure';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Structure} />
      </Switch>
    </Router>
  );
};

export default Routes;
