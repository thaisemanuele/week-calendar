import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store/store";

import "./index.css";
import App from "./App";
import ReactBreakpoints from "react-breakpoints";
import * as serviceWorker from "./serviceWorker";

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactBreakpoints breakpoints={breakpoints}>
        <App />
      </ReactBreakpoints>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
