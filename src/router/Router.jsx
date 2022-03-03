import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Seeroom from "../pages/Seeroom";
import Recruitment from "../pages/Recruitment";
import News from "../pages/News";
import Contactus from "../pages/Contactus";
import Bookroom from "../pages/Bookroom";
const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/seeroom/:slug" component={Seeroom} />
      <Route path="/seeroom" component={Bookroom} />
      <Route path="/recruitment" component={Recruitment} />
      <Route path="/news" component={News} />
      <Route path="/contactus" component={Contactus} />
    </Switch>
  );
};

export default Router;
