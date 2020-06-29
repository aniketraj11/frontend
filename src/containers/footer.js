import React from "react";
import { connect } from "react-redux";
import { setCurrentQuestion } from "../actions/actions";

const mapStateToProps = (state) => {
  return {
    current: state.currentQuestion.current,
    questions: state.requestQuestions.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentQuestion: (value) => dispatch(setCurrentQuestion(value)),
  };
};

class Footer extends React.Component {
  render() {
    const { current, questions, getCurrentQuestion } = this.props;
    const handleNext = () => {
      let index = questions.data.questions.findIndex(
        (obj) => obj._id === current._id
      );
      let newCurrent =
        questions.data.questions[
          index + 1 === questions.data.questions.length ? 0 : index + 1
        ];

      getCurrentQuestion(newCurrent);
    };

    const handlePrevious = () => {
      let index = questions.data.questions.findIndex(
        (obj) => obj._id === current._id
      );
      let newCurrent =
        questions.data.questions[
          index === 0 ? questions.data.questions.length - 1 : index - 1
        ];

      getCurrentQuestion(newCurrent);
    };

    return (
      <footer>
        <div className="nav-btn">
          <button className="previous" onClick={handlePrevious}>
            Previous
          </button>
          <button className="next" onClick={handleNext}>
            Next
          </button>
        </div>
      </footer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
