import { createStore, combineReducers, applyMiddleware } from "redux";
import { identity } from "lodash";
import createSagaMiddleWare from "redux-saga";
import { createLogger } from "redux-logger";
import fetchQuestionsSaga from "./saga/get-questions.saga";
import * as reducers from "./reducers";
export default function getStore(defaultState) {
  //create a middle ware for saga
  const sagaMiddleWare = createSagaMiddleWare();
  //a chain for all the middlewares
  const middleWareChain = [sagaMiddleWare];
  //a logger is create only for development envoirnment
  if (process.env.NODE_ENV === "development") {
    const logger = createLogger();
    middleWareChain.push(logger);
  }

  //create a store and apply the middleware components
  console.log("creating store");
  const store = createStore(
    combineReducers({ ...reducers }),
    defaultState,
    applyMiddleware(...middleWareChain)
  );
  //run saga
  sagaMiddleWare.run(fetchQuestionsSaga);
  return store;
}
