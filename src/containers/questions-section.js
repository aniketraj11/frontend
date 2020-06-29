import React from "react";
import { connect } from "react-redux";
import QuestionProgressBar from "../components/questionProgressBar";
import Question from "../components/question";
import Options from "../components/options";
import Description from "../components/description";
import { setCurrentQuestion } from "../actions/actions";

const mapStateToProps = (state) => {
  return {
    current: state.currentQuestion.current,
    isCurrentPending: state.currentQuestion.isCurrentPending,
    showDetail: state.displayStatus.showDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentQuestion: (value) => dispatch(setCurrentQuestion(value)),
  };
};

class QuestionSection extends React.Component {
  render() {
    const { questions, current, isCurrentPending } = this.props;
    let currentq = current;

    return isCurrentPending ? (
      "Loading"
    ) : (
      <div className="questions-section">
        <QuestionProgressBar
          questionsList={questions.questions}
          currentQuestion={currentq}
        />
        <Question currentQuestion={currentq} />
        <Options currentQuestion={currentq} />
        {current.displayData ? (
          <Description
            description={currentq.answer_desc}
            reference={currentq.book_reference}
            optionsWeight={[
              currentq.answered_option_1,
              currentq.answered_option_2,
              currentq.answered_option_3,
              currentq.answered_option_4,
            ]}
            correctAnswer={currentq.answer.replace("option_", "")}
          />
        ) : (
          " "
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSection);
