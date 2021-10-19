import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveNewUser,
  _login,
  _logout
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}

export function saveNewUser (user) {
  return _saveNewUser(user)
}

export function login (user) {
  return _login(user)
}

export function logout () {
  return _logout()
}
