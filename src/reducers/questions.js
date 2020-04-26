//reducers update the state
import unionWith from "lodash/unionWith";
import getQuestionsSaga from "../saga/get-questions.saga";

export const questions = (state = [], { type, questions }) => {
  const equalityCheck = (a = {}, b = {}) => {
    return a.question_id === b.question_id;
  };
  //update state based on type returned from saga
  if (type === "FETCHED_QUESTIONS") {
    state = unionWith(state, questions, equalityCheck);
  }
  return state;
};
