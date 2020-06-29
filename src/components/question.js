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

class Question extends React.Component {
  render() {
    const { currentQuestion, questions } = this.props;

    const handleBookmark = (id) => {
      questions.data.questions.find((obj) => obj._id === id).bookmarked = true;
    };
    return (
      <div className="question">
        {currentQuestion.title}
        <span
          className={
            currentQuestion.bookmarked === true
              ? "bookmark bookmarked pull-right"
              : "bookmark pull-right"
          }
          onClick={() => handleBookmark(currentQuestion._id)}
        >
          <i aria-hidden="true" className="fa fa-bookmark"></i>
        </span>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
