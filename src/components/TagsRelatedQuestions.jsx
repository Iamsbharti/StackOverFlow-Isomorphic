import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { question } from "../../data/api-real-url";
function TagsRelatedQuestions({ tag }) {
  return (
    <div className="mb-6">
      <h5>
        Displaying <code>{tag}</code> related questions
      </h5>
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
