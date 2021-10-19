import { RECEIVE_USERS, ADD_USER } from '../actions/users'

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
      case ADD_USER:
        const {user} = action
        console.log(action);
        return {
          ...state,
          [user.id] : { ...user },
        };
    default:
      return state;
  }
}

export default users
