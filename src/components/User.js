import React from 'react'


class User extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render(){
    const {user, rank} = this.props
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

    return (
      <div className="ui stackable olive piled segment container">
        <div className="ui left corner label">
          <i className={rankClass}></i>
        </div>
        <div className="ui stackable internally celled grid container">
          <div className="centered row">
            <div className="centered three wide column">
              <img className="ui circular centered medium image" src={user.avatarURL} alt = 'avatar' />
            </div>
            <div className="centered six wide column">
              <h3 className="ui header">{user.name}</h3>
              <h5 className="ui header">
                Answered Questions
                <div className="ui right floated left pointing label disabled green button">
                  <span >{answeredQuestions}</span>
                </div>
              </h5>
              <h5 className="ui header">
                Created Questions
                <div className="ui right floated left pointing label disabled green button">
                  <span >{createdQuestions}</span>
                </div>
              </h5>
            </div>
            <div className="centered three wide column">
              <div className = "ui center aligned orange compact segment">
                Score
                <div className = "ui center aligned grey compact segment">
                  <div className = "circular compact ui disabled green tiny button">
                    {score}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}


export default User
