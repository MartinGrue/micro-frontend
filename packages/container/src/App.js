import React from "react";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";

import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <h1>Hi There</h1>
          <hr></hr>
          <Switch>
            <Route path="/auth" component={AuthApp}></Route>
            {/* <Route path="/" component={MarketingApp}></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
