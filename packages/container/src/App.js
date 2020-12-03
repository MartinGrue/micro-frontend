import React, { lazy, Suspense } from "react";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";

import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const marketingLazy = lazy(() => import("./components/MarketingApp"));
const authLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/auth" component={authLazy}></Route>
              <Route path="/" component={marketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
