import { SET_ERROR, RESET_ERRORS } from '../actions/errors'

const errors = (state = {}, action) => {
  switch (action.type) {
    case SET_ERROR:
      const {error} = action
      return {
        ...state,
        noError : false,
        [error.name] : error.message
      };
    case RESET_ERRORS:
      return {
        noError : true
      };
    default:
      return state;
  }
}

export default errors
