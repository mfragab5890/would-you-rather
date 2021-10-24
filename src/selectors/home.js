import { createSelector } from 'reselect'

const selectAuthedId = state => state.authedUser.id
const selectQuestions = state => state.questions

const selectHomeState = createSelector(
  selectAuthedId,
  selectQuestions,
  (authedId, questions) => {
    const answeredIds = Object.keys(questions)
    .sort( (a,b) => questions[b].timestamp - questions[a].timestamp ).filter((id) => {
      return questions[id].optionOne.votes.includes(authedId) || questions[id].optionTwo.votes.includes(authedId)
    })
    const unansweredIds = Object.keys(questions)
    .sort( (a,b) => questions[b].timestamp - questions[a].timestamp ).filter((id) => {
      return !questions[id].optionOne.votes.includes(authedId) && !questions[id].optionTwo.votes.includes(authedId)
    })
    return {
      answeredIds,
      unansweredIds,
    };
  }
)

export default selectHomeState
