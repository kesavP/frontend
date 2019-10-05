/*
 * dev/App.js
 * Author: kesav p
 * Date: 24.09.2019
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env browser */

import React from "react";
import ReactDOM from "react-dom";
import Template from "../src";
import { store, history } from "../src/store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Embeds styles
import "../less/standart.less";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Template />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
