import React from 'react'
import { connect } from 'react-redux'
import PollResults from './PollResults'
import PollAnswer from './PollAnswer'

function ViewQuestion(props) {
  const { question, user, answered } = props

  return (
    <div className="ui three column grid">
      <div className="row">
        <div className="column">
        </div>
        <div className="fifteen wide column container">
          {
            answered !== null
            ? <div className="ui fluid centered teal stacked segment container">
                <PollResults question = {question} answered = {answered} user = {user}/>
              </div>
            : <div className="ui centered teal stacked segment">
                <PollAnswer question = {question} user = {user} />
              </div>
          }
        </div>
        <div className="column">
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({questions, users, authedUser}, props) => {
  const { qId } = props.match.params
  const question = questions[qId]
  const error = question ? null : {questionView: "Error 404! This question dosen't exist"}
  const user = users[question.author]
  const answered = users[authedUser.id].answers[qId] ? users[authedUser.id].answers[qId] : null
  return {
    user,
    question,
    answered,
    error
  };
}

export default connect(mapStateToProps)(ViewQuestion)
