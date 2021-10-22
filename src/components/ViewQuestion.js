import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import PollResults from './PollResults'
import PollAnswer from './PollAnswer'

class ViewQuestion extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render(){
    const { question, user, answered } = this.props
    if (answered !== null) {
      return (
        <div className="ui centered teal stacked segment">
          <PollResults question = {question} answered = {answered} user = {user}/>
        </div>
      );
    } else {
      return (
        <div className="ui centered teal stacked segment">
          <PollAnswer question = {question} user = {user} /> optionOne: {question.optionOne.text} optionTwo: {question.optionTwo.text}
        </div>
      );
    }
  }
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
