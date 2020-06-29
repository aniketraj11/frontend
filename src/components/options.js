import React from "react";
import Option from "./option";
import { connect } from "react-redux";
import { setDisplayStatus } from "../actions/actions";

const mapStateToProps = (state) => {
  return {
    showDetail: state.displayStatus.showDetail,
    questions: state.requestQuestions.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDisplayStatus: (value) => dispatch(setDisplayStatus(value)),
  };
};

class Options extends React.Component {
  render() {
    const { currentQuestion, getDisplayStatus } = this.props;

    const handleCheck = (selected, id) => {
      getDisplayStatus(true);
      this.props.questions.data.questions.find(
        (o) => o._id === id
      ).displayData = true;
      if (selected === currentQuestion.answer) {
        this.props.questions.data.questions.find((o) => o._id === id).status =
          "correct";
      } else {
        this.props.questions.data.questions.find((o) => o._id === id).status =
          "incorrect";
      }
      this.props.questions.data.questions.find(
        (o) => o._id === id
      ).answered = true;
    };

    let sum =
      currentQuestion.answered_option_1 +
      currentQuestion.answered_option_2 +
      currentQuestion.answered_option_3 +
      currentQuestion.answered_option_4;

    return (
      <div className="options-row">
        <Option
          id={currentQuestion._id}
          option={currentQuestion.option_1}
          handleAnswerCheck={() => handleCheck("option_1", currentQuestion._id)}
          showDetail={currentQuestion.displayData}
          ansStatus={
            "option_1" === currentQuestion.answer ? "correct" : "wrong"
          }
          sum={sum}
          value={currentQuestion.answered_option_1}
        />
        <Option
          id={currentQuestion._id}
          option={currentQuestion.option_2}
          handleAnswerCheck={() => handleCheck("option_2", currentQuestion._id)}
          showDetail={currentQuestion.displayData}
          ansStatus={
            "option_2" === currentQuestion.answer ? "correct" : "wrong"
          }
          sum={sum}
          percent={currentQuestion.answered_option_2}
        />
        <Option
          id={currentQuestion._id}
          option={currentQuestion.option_3}
          handleAnswerCheck={() => handleCheck("option_3", currentQuestion._id)}
          showDetail={currentQuestion.displayData}
          ansStatus={
            "option_3" === currentQuestion.answer ? "correct" : "wrong"
          }
          sum={sum}
          percent={currentQuestion.answered_option_3}
        />
        <Option
          id={currentQuestion._id}
          option={currentQuestion.option_4}
          handleAnswerCheck={() => handleCheck("option_4", currentQuestion._id)}
          showDetail={currentQuestion.displayData}
          ansStatus={
            "option_4" === currentQuestion.answer ? "correct" : "wrong"
          }
          sum={sum}
          percent={currentQuestion.answered_option_4}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
