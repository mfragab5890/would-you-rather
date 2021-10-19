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
