import Structure from "pages/Structure";
import { Route, Switch } from "react-router-dom";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Structure} />
    </Switch>
  );
};

export default Routes;
