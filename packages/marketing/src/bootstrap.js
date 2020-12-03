import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Mount function to start up the app

const mount = (el, { onNavigate, browserHistory, initPath }) => {
  const history =
    browserHistory || createMemoryHistory({ initialEntries: [initPath] });
  onNavigate && history.listen(onNavigate); //invoke callback on history change

  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      pathname !== nextPathname && history.push(nextPathname);
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  const browserHistory = createBrowserHistory();
  devRoot && mount(devRoot, { browserHistory });
}

// We are running through container
// and we should export the mount function
export { mount };
