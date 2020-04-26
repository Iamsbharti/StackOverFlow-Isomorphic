import React from "react";
import QuestionsTag from "./QuestionsTag";
import { Link } from "react-router-dom";

function QuestionList({ title, tags, question_id }) {
  return (
    <div className="mb-3">
      <h4>{title}</h4>
      <div className="mb-2">
        <QuestionsTag tags={tags} />
      </div>
      <Link to={`/questions/${question_id}`}>
        <button className="btn btn-info">More Info!</button>
      </Link>
    </div>
  );
}
export default QuestionList;
