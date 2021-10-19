import { saveNewUser } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setError } from './errors'
import { setAuthedUser, resetAuthedUser } from './authedUser'
//handle users action creator

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'

export const receiveUsers = (users) => {
  return {
    type : RECEIVE_USERS,
    users,
  };
}

export const addUser = (user) => {
  return {
    type : ADD_USER,
    user,
  };
}

export const handleSaveNewUser = (id, password, name ) => {
  return (dispatch) => {
    dispatch(showLoading())
    const user = {
      id,
      name,
      password,
    }
    return saveNewUser(user)
      .then((authedUser) => {
        dispatch(addUser(authedUser))
        dispatch(setAuthedUser(authedUser))
        dispatch(hideLoading())
        return true;
      }).catch(err => {
        const error = {
          name : 'signup_error',
          message : err,
        }
        dispatch(setError(error))
        dispatch(resetAuthedUser())
        dispatch(hideLoading())
        return false;
      })
  };
}
