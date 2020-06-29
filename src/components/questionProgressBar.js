import React from "react";
import { connect } from "react-redux";
import {
  setCurrentQuestion,
  setDisplayStatus,
  setTestData,
} from "../actions/actions";

const mapStateToProps = (state) => {
  return {
    current: state.currentQuestion.current,
    showDetail: state.displayStatus.showDetail,
    testData: state.testData.testData,
    questions: state.requestQuestions.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentQuestion: (value) => dispatch(setCurrentQuestion(value)),
    getDisplayStatus: (value) => dispatch(setDisplayStatus(value)),
    getTestData: (value) => dispatch(setTestData(value)),
  };
};

class QuestionProgressBar extends React.Component {
  render() {
    const {
      questionsList,
      getCurrentQuestion,
      getDisplayStatus,
      currentQuestion,
    } = this.props;

    const onGetCurrentQuestion = (id) => {
      let newCurrentQuestion = questionsList.find((obj) => obj._id === id);
      getCurrentQuestion(newCurrentQuestion);
      getDisplayStatus(false);
    };

    return (
      <div className="question-progress-bar">
        {questionsList.map((question, i) => {
          return (
            <span
              key={question._id}
              onClick={() => onGetCurrentQuestion(question._id)}
            >
              <i
                className={
                  question.status === "correct"
                    ? "fa fa-circle correct"
                    : question.status === "incorrect"
                    ? "fa fa-circle wrong"
                    : question._id === currentQuestion._id
                    ? "fa fa-circle current"
                    : "fa fa-circle"
                }
                aria-hidden="true"
              ></i>
            </span>
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionProgressBar);
