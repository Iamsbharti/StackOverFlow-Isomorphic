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

render(App);
fetchDataForLocation();
