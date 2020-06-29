import {
  REQUEST_QUESTIONS_PENDING,
  REQUEST_QUESTIONS_SUCCESS,
  REQUEST_QUESTIONS_FAILED,
  GET_CURRENT_QUESTION,
  GET_CURRENT_PENDING,
  GET_DESCRIPTION_STATUS,
  GET_TEST_DATA,
  CHANGE_SELECT_FIELD,
} from "./../constants";

export const requestQuestions = () => (dispatch) => {
  dispatch({ type: REQUEST_QUESTIONS_PENDING });
  dispatch({ type: GET_CURRENT_PENDING });
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: REQUEST_QUESTIONS_SUCCESS, payload: data })
    )
    .then((data) => {
      dispatch({
        type: GET_CURRENT_QUESTION,
        payload: data.payload.data.data.questions[0],
      });
    })
    .catch((error) =>
      dispatch({ type: REQUEST_QUESTIONS_FAILED, payload: error })
    );
};

export const setCurrentQuestion = (text) => ({
  type: GET_CURRENT_QUESTION,
  payload: text,
});

export const setDisplayStatus = (text) => ({
  type: GET_DESCRIPTION_STATUS,
  payload: text,
});

export const setTestData = (text) => ({
  type: GET_TEST_DATA,
  payload: text,
});

export const setSelectOption = (text) => ({
  type: CHANGE_SELECT_FIELD,
  payload: text,
});
