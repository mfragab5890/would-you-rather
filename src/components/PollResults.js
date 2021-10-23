import { Progress } from 'semantic-ui-react'

function PollResults(props) {
  const {user, answered, question} = props
  const oneVotes = question.optionOne.votes.length
  const twoVotes = question.optionTwo.votes.length
  const allVotes = oneVotes + twoVotes

  return (
    <div>
      <h1>Asked by {user.name}</h1>
      <div className = "ui stackable fluid black segment container">
        <div className = "ui stackable internally celled grid container">
          <div className = "row">
              <div className = "middle aligned six wide ui column container">
                <div className = "ui circular blue compact segment">
                  <img className="ui avatar massive image" src={user.avatarURL} alt = "avatar"/>
                </div>
              </div>
              <div className = "centered nine wide column container">
                <div className="ui medium header">Results:</div>
                <div className = "ui brown segment">
                {
                  answered === 'optionOne'
                  ?<div className="floating ui yellow circular label">Your<br/>Vote</div>
                  :null
                }
                  <div className="ui small header">Would you rather {question.optionOne.text}</div>
                  <Progress
                    percent = {Math.floor(oneVotes*100/allVotes)}
                    indicating
                    progress
                    success
                  >
                    Votes: {oneVotes} out of {allVotes}
                  </Progress>
                </div>
                <div className = "ui red segment">
                {
                  answered === 'optionTwo'
                  ?<div className="floating ui yellow circular label">Your<br/>Vote</div>
                  :null
                }
                  <div className="ui small header">Would you rather {question.optionTwo.text}</div>
                  <Progress
                  percent = {Math.floor(twoVotes*100/allVotes)}
                  indicating
                  progress
                  success
                >
                  Votes: {twoVotes} out of {allVotes}</Progress>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default PollResults
