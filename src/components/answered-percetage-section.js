import React from "react";

const AnsweredPercentageSection = ({ optionsWeight, correctAnswer }) => {
  let percent = (
    (optionsWeight[parseInt(correctAnswer) - 1] * 100) /
    optionsWeight.reduce((a, b) => a + b, 0)
  ).toFixed(2);
  let strokeDashData = "calc((" + percent + " * 31.4) / 100) 31.4";
  return (
    <div className="answered-percentage">
      <svg height="20" width="20" viewBox="0 0 20 20">
        <circle r="10" cx="10" cy="10" fill="white" stroke="#CFD8DC" />
        <circle
          r="5"
          cx="10"
          cy="10"
          fill="transparent"
          stroke="#66BB6A"
          strokeWidth="10"
          strokeDasharray={strokeDashData}
          transform="rotate(-90) translate(-20)"
        />
      </svg>
      {percent}% answered this question correctly.
    </div>
  );
};

export default AnsweredPercentageSection;
