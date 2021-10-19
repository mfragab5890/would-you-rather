import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
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
