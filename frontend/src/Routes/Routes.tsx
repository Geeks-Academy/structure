import AddPanel from "pages/AddPanel";
import Dashboard from "pages/DashBoard";
import Structure from "pages/Structure";
import { Route, Switch } from "react-router-dom";

const Routes = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Structure} />
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/admin/add" component={AddPanel} />
      </Switch>
    </>
  );
};

export default Routes;
