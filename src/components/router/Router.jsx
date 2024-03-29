import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Posts from "../../pages/Posts/Posts";
import Coin from "../../pages/Coin/Coin";

const Router = () => (
  <Switch>
    <Route exact path={"/posts/:id"}>
      <Posts />
    </Route>
    <Route exact path={"/catalog"}>
      <Catalog />
    </Route>
    <Route exact path={"/coin"}>
      <Coin />
    </Route>
    <Route path={"/"}>
      <Home />
    </Route>
  </Switch>
);


export default Router;
