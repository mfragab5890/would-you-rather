import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Link } from 'react-router-dom'

class Home extends React.Component {

  state = {
    activeTab:1
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleActiveTab = (e) => {
    const {id} = e.target
    if (id === 'answered') {
      this.setState({
        activeTab : 1
      })
    }
    else if (id === 'unanswered') {
      this.setState({
        activeTab : 2
      })
    }
  }

  render(){
    const { activeTab } = this.state
    const { answeredIds, unansweredIds } = this.props
    return (
      <div className="ui segment">
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui vertical fluid tabular menu">
              <Link
              id = 'answered'
              to = '/'
              className = {activeTab === 1 ? "active item" : "item"}
              onClick = {this.handleActiveTab}
              >
                Answered Questions
              </ Link>
              <Link
              id = 'unanswered'
              to = '/'
              className = {activeTab === 2 ? "active item" : "item"}
              onClick = {this.handleActiveTab}
              >
                Unanswered Questions
              </ Link>
            </div>
          </div>
          <div className="twelve wide stretched column">
            <div className="ui segment ">
              <ul>
              {
                activeTab === 1 ?
                <div>{answeredIds.map((id) => <li>{id}</li> )}</div>:
                <div>{unansweredIds.map((id) => <li>{id}</li> )}</div>
              }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({questions, authedUser}) => {

  const authedId = authedUser.id
  const answeredIds = Object.keys(questions)
  .sort( (a,b) => questions[b].timestamp - questions[a].timestamp ).filter((id) => {
    return questions[id].optionOne.votes.includes(authedId) || questions[id].optionTwo.votes.includes(authedId)
  })
  const unansweredIds = Object.keys(questions)
  .sort( (a,b) => questions[b].timestamp - questions[a].timestamp ).filter((id) => {
    console.log(questions[id].optionOne.votes.includes(authedId));
    return !questions[id].optionOne.votes.includes(authedId) && !questions[id].optionTwo.votes.includes(authedId)
  })
  return {
    answeredIds,
    unansweredIds,
  };
}

export default connect(mapStateToProps)(Home)