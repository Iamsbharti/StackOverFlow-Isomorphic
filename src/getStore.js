import { createStore, combineReducers, applyMiddleware } from "redux";
import { identity } from "lodash";
import createSagaMiddleWare from "redux-saga";
import { createLogger } from "redux-logger";
import fetchQuestionsSaga from "./saga/get-questions-saga";
import fetchQuestionSaga from "./saga/get-question-saga";
import fetchTaggedQuestions from "./saga/get-tag-que-saga";
import * as reducers from "./reducers";
import { routerReducer as router, routerMiddleware } from "react-router-redux";
export default function getStore(history, defaultState) {
  //create a middle ware for saga
  const sagaMiddleWare = createSagaMiddleWare();
  //middleware to handle routes
  const middleWare = routerMiddleware(history);
  //a chain for all the middlewares
  const middleWareChain = [middleWare, sagaMiddleWare];
  //a logger is create only for development envoirnment
  if (process.env.NODE_ENV === "development") {
    const logger = createLogger();
    middleWareChain.push(logger);
  }

  //create a store and apply the middleware components
  console.log("creating store");
  const store = createStore(
    combineReducers({ ...reducers, router }),
    defaultState,
    applyMiddleware(...middleWareChain)
  );
  //run saga
  sagaMiddleWare.run(fetchQuestionsSaga);
  sagaMiddleWare.run(fetchQuestionSaga);
  sagaMiddleWare.run(fetchTaggedQuestions);
  return store;
}
