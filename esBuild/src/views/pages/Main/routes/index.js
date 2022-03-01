import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import LargeScreen from "./LarginScreen/index.js";
const MainRoutes = () => {
  return (
    <Switch>
      <Route path='/main/largescreen' component={LargeScreen} />
      <Redirect exact to='/main/largescreen' />
    </Switch>
  );
};

export default MainRoutes;
