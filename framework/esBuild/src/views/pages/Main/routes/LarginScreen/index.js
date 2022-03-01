import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import AttackDrill from "./routes/AttackDrill";

const parentUrl = "/main/largescreen";

const ResourceRoutes = props => {
  return (
    <Switch>
      <Route exact path={`${parentUrl}`} component={AttackDrill} />
      <Route path={`${parentUrl}/attackdrill`} component={AttackDrill} />
    </Switch>
  );
};

export default ResourceRoutes;
