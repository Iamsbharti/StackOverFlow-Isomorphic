import { put, takeEvery } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
//REQUEST_FETCH_TAGGED_QUE
export default function* () {
  yield takeEvery("REQUEST_FETCH_TAGGED_QUE", handleFetchTaggedQues);
}
function* handleFetchTaggedQues({ tag }) {
  const raw = yield fetch(`/api/tags/${tag}`);
  const json = yield raw.json();
  const taggedQuestions = json.items;
  yield put({ type: "FETCHED_TAGGED_QUES", taggedQuestions });
}
