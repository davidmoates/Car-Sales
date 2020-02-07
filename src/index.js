import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { carSalesReducer } from "./reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

const carSalesStore = createStore(carSalesReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={carSalesStore}>
    <App />
  </Provider>,
  rootElement
);
