import React from "react";

function QuestionsTag({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <code key={tag}>{tag},</code>
      ))}
    </div>
  );
}
export default QuestionsTag;
