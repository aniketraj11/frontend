import {
  REQUEST_QUESTIONS_PENDING,
  REQUEST_QUESTIONS_SUCCESS,
  REQUEST_QUESTIONS_FAILED,
  GET_CURRENT_QUESTION,
  GET_CURRENT_PENDING,
  GET_DESCRIPTION_STATUS,
  GET_TEST_DATA,
  REQUEST_QUESTIONS_UPDATE,
  CHANGE_SELECT_FIELD,
} from "./../constants";

const initialStateQuestions = {
  isPending: false,
  questions: {},
  error: "",
};

export const requestQuestions = (
  state = initialStateQuestions,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_QUESTIONS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {
        questions: action.payload.data,
        isPending: false,
      });
    case REQUEST_QUESTIONS_UPDATE:
      return Object.assign({}, state, {
        questions: action.payload.data,
        isPending: false,
      });
    case REQUEST_QUESTIONS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};

const currentQuestionState = {
  current: {},
  isCurrentPending: false,
};

export const currentQuestion = (state = currentQuestionState, action = {}) => {
  switch (action.type) {
    case GET_CURRENT_QUESTION:
      return Object.assign({}, state, {
        current: action.payload,
        isCurrentPending: false,
      });
    case GET_CURRENT_PENDING:
      return Object.assign({}, state, { isCurrentPending: true });
    default:
      return state;
  }
};

const currentDescriptionState = {
  showDetail: false,
};

export const displayStatus = (state = currentDescriptionState, action = {}) => {
  switch (action.type) {
    case GET_DESCRIPTION_STATUS:
      return Object.assign({}, state, { showDetail: action.payload });
    default:
      return state;
  }
};

const testState = {
  testData: [],
};

export const testData = (state = testState, action = {}) => {
  switch (action.type) {
    case GET_TEST_DATA:
      return Object.assign({}, state, { testData: action.payload });
    default:
      return state;
  }
};

const initialStateSearch = {
  selectOption: "",
};

export const searchQuestion = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SELECT_FIELD:
      return Object.assign({}, state, { selectOption: action.payload });
    default:
      return state;
  }
};
