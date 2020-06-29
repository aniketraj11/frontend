import React from "react";
import SideQuestion from "./sideQuestion";
import SideOptions from "./side-options";
import { connect } from "react-redux";
import {
  setCurrentQuestion,
  setDisplayStatus,
  setSelectOption,
} from "../actions/actions";

const mapStateToProps = (state) => {
  return {
    current: state.currentQuestion.current,
    showDetail: state.displayStatus.showDetail,
    selectOption: state.searchQuestion.selectOption,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentQuestion: (value) => dispatch(setCurrentQuestion(value)),
    getDisplayStatus: (value) => dispatch(setDisplayStatus(value)),
    onSelectChange: (event) => dispatch(setSelectOption(event.target.value)),
  };
};

class SideQuestionContainer extends React.Component {
  render() {
    const {
      questions,
      getCurrentQuestion,
      getDisplayStatus,
      current,
      onSelectChange,
      selectOption,
    } = this.props;

    const onGetCurrentQuestion = (id) => {
      let newCurrentQuestion = questions.find((obj) => obj._id === id);
      getCurrentQuestion(newCurrentQuestion);
      getDisplayStatus(false);
    };

    const filteredQuestion = questions.filter((question) => {
      return question.root_subject_id.includes(selectOption);
    });

    console.log(selectOption);

    return (
      <div className="side-ques-container">
        <SideOptions handleSelect={onSelectChange} />
        {filteredQuestion.map((question, i) => {
          return (
            <span
              key={question._id}
              onClick={() => onGetCurrentQuestion(question._id)}
            >
              <SideQuestion id={current._id} question={question} index={i} />
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
)(SideQuestionContainer);
