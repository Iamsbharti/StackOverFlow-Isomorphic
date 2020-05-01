import React from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

function Question({ questions, has_more }) {
  console.log("in Question component:" + has_more);
  return questions && questions.length > 0 ? (
    questions.map((question) => (
      <QuestionList key={question.question_id} {...question} />
    ))
  ) : (
    <div>Loading...</div>
  );
}
function mapStateToProps(state) {
  return {
    questions: state.questions[0].items,
    has_more: state.questions[0].has_more,
  };
}
export default connect(mapStateToProps)(Question);
