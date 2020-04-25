import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const render = (_App) => {
  ReactDOM.render(<_App />, document.getElementById("AppContainer"));
};

render(App);
