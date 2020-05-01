import React from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

function Question({ questions, has_more, auth }) {
  console.log("in Question component:" + has_more);
  return (
    <div>
      <button className="btn btn-success" onClick={auth.login}>
        Login
      </button>
    </div>
  );
  /*return questions && questions.length > 0 ? (
    questions.map((question) => (
      <QuestionList key={question.question_id} {...question} />
    ))
  ) : (
    <div>Loading...</div>
  );*/
}
function mapStateToProps(state, ownProps) {
  let que_local = [];
  if (state.questions.length > 1) {
    que_local = state.questions.shift();
  } else if (state.questions.length === 1) {
    que_local = state.questions[0];
  }
  return {
    questions: que_local.items,
    has_more: state.questions[0].has_more,
  };
}
export default connect(mapStateToProps)(Question);
