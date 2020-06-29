import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    questions: state.requestQuestions.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

class SideQuestion extends React.Component {
  render() {
    const { id, question, index, questions } = this.props;
    const handleBookmark = (id) => {
      questions.data.questions.find((obj) => obj._id === id).bookmarked = true;
    };
    return (
      <div className="card">
        <div className="card-body">
          <p>
            {id === question._id ? (
              <span>
                <i
                  className="fa fa-arrow-circle-right current"
                  aria-hidden="true"
                ></i>
              </span>
            ) : (
              ""
            )}
            <span
              className={
                question.bookmarked === true
                  ? "bookmark bookmarked pull-right"
                  : "bookmark pull-right"
              }
              onClick={() => handleBookmark(question._id)}
            >
              <i aria-hidden="true" className="fa fa-bookmark"></i>
            </span>
            {index + 1}. {question.title}
          </p>
          <span
            className={
              question.status === "correct"
                ? "status correct"
                : question.status === "incorrect"
                ? "status wrong"
                : ""
            }
          >
            {question.status === "correct"
              ? "Correct"
              : question.status === "incorrect"
              ? "Incorrect"
              : ""}
          </span>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideQuestion);
