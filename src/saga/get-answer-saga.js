import { takeEvery, put } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

export default function* () {
  yield takeEvery("REQUEST_FETCH_QUE_ANSWERS", handleFetchAnswers);
}
function* handleFetchAnswers({ question_id }) {
  console.log(`fetching answers from ${question_id}`);
  const raw_ans = yield fetch(`/api/question/answers/${question_id}`);
  const ans_json = raw_ans.json();
  const answers = ans_json.items;
  console.log(`typeof answers ${answers}`);
  yield put({ type: `FETCHED_ANSWERS`, answers });
}
