import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class Question extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render(){
    const { user, answered, qId, answer } = this.props
    return (
      <div className="ui centered olive piled segment">
        <div class="ui stackable internally celled grid container">
          <div class="row">
            <div class="ten wide column"><h3 class="ui header">{user.name} asks:</h3></div>
          </div>
          <div class="row">
            <div class="four wide column">
              <img class="ui tiny centered circular image" src={user.avatarURL} alt = 'avatar' />
            </div>
            <div class="nine wide column">
              <h4 class="ui header">Would you rather!</h4>
              <h5 className = "ui disabled header">...{answer}...</h5>
              <button class="fluid ui basic labeled icon button">
                <i class="eye icon"></i>
                View Poll
              </button>
            </div>
          </div>
        </div>

      </div>


    );
  }
}

const mapStateToProps = ({questions,users, authedUser},{qId,answered}) => {
  const question = questions[qId]
  const user = users[question.author]
  const questionerAnswer = user.answers[qId] ? question[user.answers[qId]].text : "!!!"
  let userAnswer = null
  if (answered) {
    if (question.optionOne.votes.includes(authedUser.id)) {
      userAnswer =  question.optionOne.text
    }
    else if (question.optionTwo.votes.includes(authedUser.id)) {
      userAnswer =  question.optionTwo.text
    }
  }
  const answer = userAnswer ? userAnswer : questionerAnswer
  return {
    user,
    answer,
  };
}

export default connect(mapStateToProps)(Question)
