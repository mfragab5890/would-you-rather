//handle tweets action creator

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export const addQuestion = (question) => {
  return {
    type : ADD_QUESTION,
    question,
  };
}

export const receiveQuestions = (questions) => {
  return {
    type : RECEIVE_QUESTIONS,
    questions,
  };
}

export const addAnswer = (info) => {
  return {
    type : ADD_ANSWER,
    info,
  };
}
