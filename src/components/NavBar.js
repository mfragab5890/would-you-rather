import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleUserLogout } from '../actions/authedUser'

class NavBar extends React.Component {
  state = {
    activeTab : 1,
  }

  handleActiveTab = (e) => {
    const {id} = e.target
    if (id === 'home') {
      this.setState({
        activeTab : 1
      })
    }
    else if (id === 'new_question') {
      this.setState({
        activeTab : 2
      })
    }
    else if (id === 'leader_board') {
      this.setState({
        activeTab : 3
      })
    }
  }

  handleUserLogout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(handleUserLogout())
    }
  }

  render(){
    const { activeTab } = this.state
    const { name, avatarURL } = this.props.authedUser
    return (
      <div className = "ui fluid container">
        <div className="ui stackable secondary pointing center aligned small menu">
          <Link id = 'home' to = '/' className={ activeTab === 1 ? "active item" : " fitted item" } onClick = {this.handleActiveTab}>
            Home
          </Link>
          <Link id = 'new_question' to = '/add' className={ activeTab === 2 ? "active item" : "fitted item" } onClick = {this.handleActiveTab}>
            New Question
          </Link>
          <Link id = 'leader_board' to = '/leaderboard' className={ activeTab === 3 ? "active item" : "fitted item" } onClick = {this.handleActiveTab}>
          Leader Board
          </Link>

          <div className="right menu">
            <span className = "ui pointing blue basic label fitted item">
              <img className="ui tiny circular image" src={avatarURL} alt = 'avatar' />
              <div className="detail">welcome {name}</div>
            </span>

            <button
              className = "ui fitted item basic button"
              onClick = {this.handleUserLogout}
              >
              Logout!
            </button>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NavBar)
