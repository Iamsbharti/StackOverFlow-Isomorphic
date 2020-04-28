import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { question } from "../../data/api-real-url";
function TagsRelatedQuestions({ tag }) {
  return (
    <div>
      <h4>Questions List related to {tag}</h4>
      <Question />
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(TagsRelatedQuestions);
