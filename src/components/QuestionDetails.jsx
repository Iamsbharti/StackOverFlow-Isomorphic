import React, { useEffect } from "react";
import Markdown from "react-markdown";
import { connect } from "react-redux";
import QuestionsTag from "./QuestionsTag";

function QuestionDetails({
  title,
  body,
  tags,
  answer_count,
  is_answered,
  answer_id,
}) {
  return (
    <div>
      <h3 className="mb-2">{title}</h3>
      <h3 className="mb-2">
        {is_answered === false || answer_id === "undefined" ? (
          <h2 style={{ color: "red" }}>Answer not available</h2>
        ) : (
          <a href={`https://stackoverflow.com/a/${answer_id}`}>Answer</a>
        )}
      </h3>
      {body ? (
        <div>
          <div className="mb-3">
            <QuestionsTag tags={tags} />
          </div>
          <Markdown source={body} />
          <div>{answer_count} Answers</div>
        </div>
      ) : (
        <div>Question Is Loading</div>
      )}
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  console.log("ownprops:" + ownProps);
  return {
    ...state.questions.find(
      ({ question_id }) => question_id == ownProps.question_id
    ),
  };
}

export default connect(mapStateToProps)(QuestionDetails);
