import React from "react";
import { Link } from "react-router-dom";
function QuestionsTag({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <Link to={`/tags/${tag}`} key={tag}>
          <code key={tag}>{tag},</code>
        </Link>
      ))}
    </div>
  );
}
export default QuestionsTag;
