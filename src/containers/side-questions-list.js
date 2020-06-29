import React from "react";
import SideQuestionContainer from "../components/side-question-container";

const SideQuestionsList = ({ questions }) => {
  return (
    <div className="side-questions-list">
      <SideQuestionContainer questions={questions.questions} />
    </div>
  );
};

export default SideQuestionsList;
