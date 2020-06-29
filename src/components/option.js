import React from "react";

const Option = ({
  id,
  sum,
  value,
  option,
  handleAnswerCheck,
  showDetail,
  ansStatus,
}) => {
  return (
    <div className="card">
      <label onClick={handleAnswerCheck}>
        <div className="card-body">
          <p>
            <span className="pull-right percent-answered-option">
              {showDetail ? ((value * 100) / sum).toFixed(2) + "%" : ""}
            </span>
            <input type="radio" name={id} />
            {option}
            {showDetail ? (
              <span>
                <i
                  className={
                    ansStatus === "correct"
                      ? "fa fa-check answered-correct"
                      : "fa fa-times answered-incorrect"
                  }
                  aria-hidden="true"
                >
                  {ansStatus === "correct" ? "Correct" : "Incorrect"}
                </i>
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
      </label>
    </div>
  );
};

export default Option;
