import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import getStore from "./getStore";
import { Provider } from "react-redux";
const store = getStore();

//dispatch actions this will invoke saga
const fetchDataForLocation = () => {
  console.log("invoking actions");
  store.dispatch({ type: `REQUEST_FETCH_QUESTIONS` });
};
const render = (_App) => {
  ReactDOM.render(
    <Provider store={store}>
      <_App />
    </Provider>,
    document.getElementById("AppContainer")
  );
};
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
//render(App);
store.subscribe(() => {
  const state = store.getState();
  if (state.questions.length > 0) {
    console.log("Mounting App");
    render(App);
  } else {
    console.log("App not yet mounted");
  }
});
fetchDataForLocation();
