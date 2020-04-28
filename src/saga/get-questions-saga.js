import { put, take } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

export default function* () {
  while (true) {
    yield take("REQUEST_FETCH_QUESTIONS");
    const raw_data = yield fetch("/api/questions");
    const json = yield raw_data.json();
    const questions = json.items;
    //console.log("Fetched questions:" + questions);
    yield put({ type: `FETCHED_QUESTIONS`, questions });
  }
}
