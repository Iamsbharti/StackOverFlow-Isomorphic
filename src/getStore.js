import { createStore, combineReducers, applyMiddleware } from "redux";
import { identity } from "lodash";

export default function getStore(
  defaultState = { test: "Test data from store" }
) {
  const store = createStore(identity, defaultState);
  return store;
}
