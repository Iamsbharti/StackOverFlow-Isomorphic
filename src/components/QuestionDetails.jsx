import React from "react";
import Markdown from "react-markdown";
import { connect } from "react-redux";
import QuestionsTag from "./QuestionsTag";

function QuestionDetails({
  title,
  body,
  tags,
  answer_count,
  is_answered,
  answer_details,
}) {
  console.log(`answer_details ${answer_details.answer_id}`);
  //console.log(`Answer-details ${Object.keys(answer_details)}`);
  return (
    <div>
      <h3 className="mb-2">{title}</h3>
      <h3 className="mb-2">
        {is_answered === false ? (
          <h5 style={{ color: "red" }}>Answer not available</h5>
        ) : (
          <a href={`https://stackoverflow.com/a/${answer_details.answer_id}`}>
            Answer
          </a>
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
  return {
    ...state.questions.find(
      ({ question_id }) => question_id == ownProps.question_id
    ),
  };
}
export default connect(mapStateToProps)(QuestionDetails);
