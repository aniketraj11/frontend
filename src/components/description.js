import React from "react";
import AnsweredPercentageSection from "./answered-percetage-section";
import DescriptionBody from "./description-body";
import Reference from "./reference";

const Description = ({
  description,
  reference,
  optionsWeight,
  correctAnswer,
}) => {
  return (
    <div className="description">
      <AnsweredPercentageSection
        optionsWeight={optionsWeight}
        correctAnswer={correctAnswer}
      />
      <div className="description-title">Description</div>
      <DescriptionBody description={description} />
      <hr />
      <Reference reference={reference} />
    </div>
  );
};

export default Description;
