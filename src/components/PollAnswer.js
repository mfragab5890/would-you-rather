import React from 'react'
import { connect } from 'react-redux'
import { handleAddQuestionAnswer } from '../actions/shared'

class PollAnswer extends React.Component {
  state = {
    answer: '',
    optionOne: false,
    optionTwo: false,
    formComplete : false
  }

  handleChoiceChange = async(e) => {
    const { value, choice } = e.target.dataset
    if (value) {
      if (choice === '1') {
        await this.setState({
          optionOne : true,
          optionTwo : false,
        })
      }else {
        await this.setState({
          optionOne : false,
          optionTwo : true,
        })
      }
      await this.setState({
        answer : value,
        formComplete : true
      })

    }
    else {
      await this.setState({
        answer : '',
        formComplete : false,
        optionOne : false,
        optionTwo : false,
      })
    }

  }

  handleUserAnswerSubmit = async(e) => {
    e.preventDefault()
    const { answer } = this.state
    const { dispatch } = this.props
    const authedUser = this.props.authedUser.id
    const qId = this.props.question.id
    if (answer !== '') {
      dispatch(handleAddQuestionAnswer({qId, authedUser, answer}))
    }
    else {
      await this.setState({
        answer : '',
        enableSubmit : false
      })
    }
  }

  render(){
    const { question, user} = this.props
    const { formComplete, optionOne, optionTwo } = this.state
    return (
      <div>
        <h1>{user.name} asks:</h1>
        <div className = "ui stackable fluid black segment container">
          <div className = "ui stackable internally celled grid container">
            <div className = "row">
                <div className = "middle aligned six wide ui column container">
                  <div className = "ui circular blue compact segment">
                    <img className="ui avatar massive image" src={user.avatarURL} alt = "avatar"/>
                  </div>
                </div>
                <div className = "middle aligned nine wide column container">
                  <div className="ui medium header">Would You Rather...</div>
                  <div className="ui form">
                    <div className="grouped fields">
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input
                            type="radio"
                            name={question.optionOne.text}
                            tabIndex="0"
                            className="hidden"
                            value = {optionOne}
                            checked = {optionOne? true : false}
                            onChange = {this.handleChoiceChange}
                            />
                            <label
                            data-value = 'optionOne'
                            data-choice = {1}
                            onClick = {this.handleChoiceChange}
                            >
                            {question.optionOne.text}
                            </label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input
                            type="radio"
                            name={question.optionTwo.text}
                            tabIndex="0"
                            className="hidden"
                            checked = {optionTwo ? true : false}
                            onChange = {this.handleChoiceChange}
                            />
                          <label
                          data-value = 'optionTwo'
                          data-choice = {2}
                          onClick = {this.handleChoiceChange}
                          >
                          {question.optionTwo.text}
                          </label>
                        </div>
                      </div>
                      <button
                      className={formComplete === false ? "ui fluid disabled blue button" : "ui fluid blue button"}
                      type="submit"
                      onClick = {this.handleUserAnswerSubmit}
                      >Submit</button>
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

const mapStateToProps = ({authedUser}, props) => {
  const { question, user } = props

  return {
    user,
    question,
    authedUser,
  };
}

export default connect(mapStateToProps)(PollAnswer)
