import("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const devRoot = document.querySelector("#root");
ReactDOM.render(<App />, devRoot);

// Mount function to start up the app
// const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
//   const history =
//     defaultHistory ||
//     createMemoryHistory({
//       initialEntries: [initialPath],
//     });

//   if (onNavigate) {
//     history.listen(onNavigate);
//   }

//   return {
//     onParentNavigate({ pathname: nextPathname }) {
//       const { pathname } = history.location;

//       if (pathname !== nextPathname) {
//         history.push(nextPathname);
//       }
//     },
//   };
// };

// // If we are in development and in isolation,
// // call mount immediately
// if (process.env.NODE_ENV === "development") {
//   if (devRoot) {
//     mount(devRoot, { defaultHistory: createBrowserHistory() });
//   }
// }

// // We are running through container
// // and we should export the mount function
// export { mount };
