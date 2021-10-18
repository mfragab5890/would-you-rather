//handle tweets action creator
import { saveLikeToggle } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

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

export const addQuestionAnswer = (question) => {
  return {
    type : ADD_QUESTION_ANSWER,
    question,
  };
}
