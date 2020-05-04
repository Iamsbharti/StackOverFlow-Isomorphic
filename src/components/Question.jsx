import React from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

function Question({ questions, has_more, auth }) {
  //console.log("in Question component:" + has_more);

  return questions && questions.length > 0 ? (
    questions.map((question) => (
      <QuestionList key={question.question_id} {...question} />
    ))
  ) : (
    <div>Loading...</div>
  );
}
function mapStateToProps(state, ownProps) {
  /*let que_local = [];
  console.log(state.questions[0].items);
  if (state.questions.length > 1) {
    que_local = state.questions.shift();
  } else if (state.questions.length === 1) {
    que_local = state.questions[0];
  } else if (state.questions[0].items === "undefined") {
    return {
      ...state,
    };
  }*/
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(Question);
