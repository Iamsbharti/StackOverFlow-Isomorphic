import React from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

function Question({ questions }) {
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
    ...state,
  };
}
export default connect(mapStateToProps)(Question);
