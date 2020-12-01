import React from "react";
import MerketingApp from "./components/MerketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <h1>Hi There</h1>
        <hr></hr>
        <MerketingApp />
      </div>
    </BrowserRouter>
  );
};
