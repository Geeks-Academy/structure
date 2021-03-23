import Dashboard from "pages/DashBoard";
import Structure from "pages/Structure";
import { Route, Switch } from "react-router-dom";

const Routes = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Structure} />
        <Route exact path="/admin" component={Dashboard} />
      </Switch>
    </>
  );
};

export default Routes;
