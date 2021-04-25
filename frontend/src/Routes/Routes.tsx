import Structure from 'pages/Structure';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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
