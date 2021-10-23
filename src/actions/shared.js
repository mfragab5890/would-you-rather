import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions, addQuestion, addAnswer } from '../actions/questions'
import { setAuthedUser} from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { resetErrors } from '../actions/errors'


export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(resetErrors())
        dispatch(setAuthedUser(null))
        dispatch(hideLoading())
      })
  };
}

export const handleAddQuestion = (question) => {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion(question)
    .then(question => {
      dispatch(addQuestion(question))
      dispatch(hideLoading())

    })
  };
}

export const handleAddQuestionAnswer = (info) => {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(info)
    .then((info) => {
      dispatch(addAnswer(info))
      dispatch(hideLoading())

    })
  };
}
