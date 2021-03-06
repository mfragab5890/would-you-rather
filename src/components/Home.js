import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Question from './Question'
import homeSelector from '../selectors/home'

class Home extends React.Component {

  state = {
    activeTab:1
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
      <div className="ui container segment">
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui vertical tabular mini menu">
              <Link
              id = 'answered'
              to = '/'
              className = {activeTab === 1 ? "active item" : "item"}
              onClick = {this.handleActiveTab}
              >
                Unanswered Questions
              </ Link>
              <Link
              id = 'unanswered'
              to = '/'
              className = {activeTab === 2 ? "active item" : "item"}
              onClick = {this.handleActiveTab}
              >
                Answered Questions
              </ Link>
            </div>
          </div>
          <div className="twelve wide column">
            <div className="ui segment ">
              <div className = "ui list">
              {
                activeTab === 2 ?
                <Fragment>
                  {answeredIds.length > 0 ?
                    answeredIds.map((id) => <Question key = { id } qId = { id } answered = {true} /> )
                    : 'sorry you have no unanswered questions'}
                </Fragment>:
                <Fragment>
                  {unansweredIds.length > 0 ?
                    unansweredIds.map((id) => <Question key = { id } qId = { id } answered = {false} /> )
                    : 'sorry you have no answered questions'}
                </Fragment>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { answeredIds, unansweredIds } = homeSelector(state)
  return {
    answeredIds,
    unansweredIds,
  };
}

export default connect(mapStateToProps)(Home)
