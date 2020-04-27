import React from "react";
import Markdown from "react-markdown";
import { connect } from "react-redux";
import QuestionsTag from "./QuestionsTag";

function QuestionDetails({ title, body, tags, answer_counts }) {
  return (
    <div>
      <h3 className="mb-2">{title}</h3>
      {body ? (
        <div>
          <div className="mb-3">
            <QuestionsTag tags={tags} />
          </div>
          <Markdown source={body} />
          <div>{answer_counts} Answers</div>
        </div>
      ) : (
        <div>Question Is Loading</div>
      )}
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  console.log("ownProps:" + ownProps.question_id);
  return {
    ...state.questions.find(
      ({ question_id }) => question_id == ownProps.question_id
    ),
  };
}
export default connect(mapStateToProps)(QuestionDetails);
