import React from "react";
import QuestionsTag from "./QuestionsTag";

function QuestionList({ title, tags }) {
  return (
    <div className="mb-3">
      <h4>{title}</h4>
      <div className="mb-2">
        <QuestionsTag tags={tags} />
      </div>
    </div>
  );
}
export default QuestionList;
