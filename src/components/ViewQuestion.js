import React from 'react'
import { connect } from 'react-redux'
import PollResults from './PollResults'
import PollAnswer from './PollAnswer'
import Error from './Error'
import viewQuestionSelector from '../selectors/viewQuestion'

function ViewQuestion(props) {
  const { error } = props
  if (!error) {
    const { question, user, answered} = props
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
  else {
    return (
      <Error message = {error} />
    );
  }

}

const mapStateToProps = (state, props) => {
  const { question, user, answered } = viewQuestionSelector(state,props)
  const error = question ? null : "Error 404! This Question Dosen't Exist"
  return {
    user,
    question,
    answered,
    error
  };
}

export default connect(mapStateToProps)(ViewQuestion)
