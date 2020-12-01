import React from "react";
import MerketingApp from "./components/MerketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
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
          <MerketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
