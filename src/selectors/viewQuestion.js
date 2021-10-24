import { createSelector } from 'reselect'

const selectQuestions = state => state.questions
const selectUsers = state => state.users
const selectAuthedId = state => state.authedUser.id
const selectQuestionId = (_, props) => props.match.params.qId
const selectQuestion = createSelector(
  selectQuestions,
  selectQuestionId,
  (questions,qId) => questions[qId]
)
const selectAuthor = createSelector(
  selectQuestion,
  (question) => question.author
)
const selectUser = createSelector(
  selectUsers,
  selectAuthor,
  (users,author) => users[author]
)
const selectAnswered = createSelector(
  selectUsers,
  selectAuthedId,
  selectQuestionId,
  (users,authedId, qId) => users[authedId].answers[qId] ? users[authedId].answers[qId] : null
)

const viewQuestionSelector = createSelector(
  selectQuestion,
  selectUser,
  selectAnswered,
  (question, user, answered) => ({
    question,
    user,
    answered,
  })
)

export default viewQuestionSelector
