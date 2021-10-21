import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import User from './User'
class LeaderBoard extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render(){
    const {topUsers} = this.props
    return (
      <div className = "ui segment container">
        <div className = "ui grid">
          <div className="wide column"></div>
          <div className="sixteen wide stretched column">
            {topUsers.map((user,i) => <User key = {user.id} user = {user} rank = {i}/>)}
          </div>
          <div className="wide column"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => {
  const usersIds = Object.keys(users)
  const usersRank = usersIds.sort( (a,b) => {
    return (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length);
  } )
  const topIds = usersRank.slice(0 , 3)
  const topUsers = topIds.map((id) => users[id])
  console.log(topUsers);
  return {
    topUsers,
  };
}

export default connect(mapStateToProps)(LeaderBoard)
