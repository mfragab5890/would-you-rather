import React from 'react'


function User (props) {

  const {user, rank} = props
  const answeredQuestions = Object.keys(user.answers).length
  const createdQuestions = user.questions.length
  const score = answeredQuestions + createdQuestions

  let rankClass = ''
  if (rank === 0) {
    rankClass = "shield alternate yellow icon"
  }
  else if (rank === 1) {
    rankClass = "shield alternate grey icon"
  }
  else if (rank === 2) {
    rankClass = "shield alternate brown icon"
  }
  else {
    rankClass = "user blue icon"
  }

  return (
    <div className="ui stackable blue stacked center aligned segment container">
      <div className="ui left corner black label">
        <i className={rankClass}></i>
      </div>
      <div className="ui stackable internally celled grid container">
        <div className="centered row">
          <div className="centered four wide column">
            <img className="ui circular centered image" src={user.avatarURL} alt = 'avatar' />
          </div>
          <div className="centered five wide column">
            <h3 className="ui header">{user.name}</h3>
            <h5 className="ui header">
              Answered Questions
              <div className="ui right floated left pointing label blue button" style = {{cursor:'default'}}>
                <span >{answeredQuestions}</span>
              </div>
            </h5>
            <h5 className="ui header">
              Created Questions
              <div className="ui right floated left pointing label blue button" style = {{cursor:'default'}}>
                <span >{createdQuestions}</span>
              </div>
            </h5>
          </div>
          <div className="centered four wide column">
            <div className = "centered ui center aligned black segment">
              Score
              <div className = "ui center aligned red segment">
                <div className="ui blue circular big label">{score}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}


export default User
