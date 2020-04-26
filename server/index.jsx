import express from "express";
import yields from "express-yields";
import fs from "fs-extra";
import webpack from "webpack";
import { argv } from "optimist";
import { get } from "request-promise";
import { question, questions } from "../data/api-real-url";
import { delay } from "redux-saga";
import getStore from "../src/getStore";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import App from "../src/App";

const port = process.env.PORT || 3000;
const app = express();

//handle api call
//get arg from cmd line
const useLiveData = argv.useLiveData === "true";
const useServerRender = argv.useServerRender === "true";
console.log(`LiveData :${useLiveData},ServerRender: ${useServerRender}`);

//a generator function to get all questions
function* getQuestions() {
  let data;
  if (useLiveData) {
    data = yield get(questions, { gzip: true });
  } else {
    data = yield fs.readFile("./data/mock-questions.json", "utf-8");
  }

  return JSON.parse(data);
}
//get a single question based on id
function* getQuestion(question_id) {
  let data;
  if (useLiveData) {
    data = yield get(question(question_id), { gzip: true, json: true });
  } else {
    const questions = yield getQuestions();
    const question = questions.items.find(
      (ques) => ques.question_id == question_id
    );
    question.body = `Mock Question Body ${question_id}`;
    data = { items: [question] };
  }

  return data;
}

//add a path for getQuestions
app.get("/api/questions", function* (req, res) {
  const questions = yield getQuestions();
  yield delay(150);
  res.json(questions);
});
//path to a single question
app.get("/api/questions/:id", function* (req, res) {
  const data = yield getQuestion(req.params.id);
  yield delay(160);
  res.json(data);
});
//start webpack
if (process.env.NODE_ENV === "development") {
  const config = require("../webpack.config.dev.babel").default;
  //compile config
  const compiler = webpack(config);

  //add dev-middleware
  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
    })
  );
  //add hot-reload middleware
  app.use(require("webpack-hot-middleware")(compiler));
}

app.get(["/"], function* (req, res) {
  let index = yield fs.readFile("./public/index.html", "utf-8");

  //logic for server rendering

  const initialSate = {
    questions: [],
  };
  const questions = yield getQuestions();
  initialSate.questions = questions.items;
  const store = getStore(initialSate);
  if (useServerRender) {
    const appRendered = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );
    index = index.replace(`<%= preloadedApplication %>`, appRendered);
  } else {
    index = index.replace(
      `<%= preloadedApplication %>`,
      `Please wait while application loads`
    );
  }
  res.send(index);
});
app.listen(port, "0.0.0.0", () => console.log(`App listining at ${port}`));
