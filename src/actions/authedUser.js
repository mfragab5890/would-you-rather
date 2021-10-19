import { login, logout } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import {setError} from './errors'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RESET_AUTHED_USER = 'RESET_AUTHED_USER'

export const setAuthedUser = (authedUser) => {
  return {
    type : SET_AUTHED_USER,
    authedUser,
  };
}

export const resetAuthedUser = () => {
  return { type : RESET_AUTHED_USER, };
}

export const handleUserLogin = ({userId,userPassword}) => {
  return (dispatch) => {
    dispatch(showLoading())
    return login({ userId, userPassword})
      .then((authedUser) => {
        dispatch(setAuthedUser(authedUser))
        dispatch(hideLoading())
        return true;
      }).catch(err => {
        const error = {
          name : 'login_error',
          message : err,
        }
        dispatch(setError(error))
        dispatch(resetAuthedUser())
        dispatch(hideLoading())
        return false;
      })
  };
}

export const handleUserLogout = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return logout().then((res) => {
      dispatch(resetAuthedUser())
      dispatch(hideLoading())
      return res;
    })
  };
}
