import { Redirect, Route, Switch } from "react-router";
import Login from "./pages/Login";
import MainContainer from "./pages/Main";
import NotFound from "./pages/NotFound";

const RootRoute = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/login' />} />
      <Route path='/login' component={Login} />
      <Route path='/main' component={MainContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default RootRoute;
