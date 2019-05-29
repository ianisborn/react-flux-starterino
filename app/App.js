import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import SampleContainer from "./components/SampleContainer";

const muiTheme = createMuiTheme({});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then(reg => {
        console.log("ServiceWorker is registered.", reg);
      })
      .catch(err => {
        console.log("ServiceWorker registration error.", err);
      });
  });
} else {
  console.log("Your browser doesn't suppert ServiceWorker.", navigator);
}

render(
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <div>
        <Route path="/" component={SampleContainer} />
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
