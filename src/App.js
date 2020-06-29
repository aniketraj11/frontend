import React from "react";
import "./App.css";
import { connect } from "react-redux";
import QuestionSection from "./containers/questions-section";
import SideQuestionsList from "./containers/side-questions-list";
import Footer from "./containers/footer";
import {
  requestQuestions,
  setCurrentQuestion,
  setTestData,
} from "./actions/actions";

const mapStateToProps = (state) => {
  return {
    isPending: state.requestQuestions.isPending,
    questions: state.requestQuestions.questions,
    error: state.requestQuestions.error,
    current: state.currentQuestion.current,
    testData: state.testData.testData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onrequestQuestions: () => dispatch(requestQuestions()),
    getCurrentQuestion: (value) => dispatch(setCurrentQuestion(value)),
    getTestData: (value) => dispatch(setTestData(value)),
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.onrequestQuestions();
  }

  render() {
    const { questions } = this.props;
    return questions.data === undefined ? (
      <h1>Loading...</h1>
    ) : (
      <React.Fragment>
        <div className="container">
          <QuestionSection questions={questions.data} />
          <SideQuestionsList questions={questions.data} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
