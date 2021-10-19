import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
    if (window.confirm("Are you sure you want to logout?")) {
      console.log(e);
    }
    else {
      console.log('not logging out');
    }
  }

  render(){
    const { activeTab } = this.state
    const { name, avatarURL } = this.props.authedUser
    return (
      <Fragment>
        <div className="ui secondary pointing center aligned menu">
          <Link id = 'home' to = '/' className={ activeTab === 1 ? "active item" : "item" } onClick = {this.handleActiveTab}>
            Home
          </Link>
          <Link id = 'new_question' to = '/new_question' className={ activeTab === 2 ? "active item" : "item" } onClick = {this.handleActiveTab}>
            New Question
          </Link>
          <Link id = 'leader_board' to = '/leader_board' className={ activeTab === 3 ? "active item" : "item" } onClick = {this.handleActiveTab}>
          Leader Board
          </Link>

          <div className="right menu">
            <span className = "ui pointing blue basic label item">
              <img className="ui tiny circular image" src={avatarURL} alt = 'avatar' />
              <div className="detail">welcome {name}</div>
            </span>

            <button
              className = "ui item basic button"
              onClick = {this.handleUserLogout}
              >
              Logout!
            </button>

          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NavBar)
