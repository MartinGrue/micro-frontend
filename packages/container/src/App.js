import React, { lazy, Suspense } from "react";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";

import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";

const marketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <Suspense fallback={<Progress></Progress>}>
            <Switch>
              <Route path="/auth" render={() => (<AuthLazy></AuthLazy>)}></Route>
              <Route path="/" component={marketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
