//reducers update the state
import unionWith from "lodash/unionWith";
import without from "lodash/without";

export const questions = (
  state = [],
  { type, questions, question, taggedQuestions }
) => {
  const equalityCheck = (a = {}, b = {}) => {
    return a.question_id === b.question_id;
  };
  //update state with taggedQuestions
  if (type === `FETCHED_TAGGED_QUES`) {
    state = without(taggedQuestions, questions);
  }
  //update state with single question details
  if (type === `FETCHED_QUESTION`) {
    state = unionWith([question], state, equalityCheck);
  }
  //update state based on type returned from saga
  if (type === `FETCHED_QUESTIONS`) {
    state = unionWith(state, questions, equalityCheck);
  }
  return state;
};
