import { RECEIVE_QUESTIONS, ADD_ANSWER, ADD_QUESTION } from '../actions/questions'

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      const {question} = action
      return {
        ...state,
        [question.id] : question,
      };
    case ADD_ANSWER:
    const {qId, answer, authedUser} = action.info
    return {
      ...state,
      [qId]: {
        ...state[qId],
        [answer]: {
          ...state[qId][answer],
          votes: state[qId][answer].votes.concat([authedUser])
        }
      }
    }
    default:
      return state;
  }
}

export default questions
