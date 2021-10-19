export const SET_ERROR = 'SET_ERROR'
export const RESET_ERRORS = 'RESET_ERRORS'

export const setError = (error) => {
  return {
    type : SET_ERROR,
    error,
  };
}

export const resetErrors = () => {
  return {
    type : RESET_ERRORS,
  };
}
