import React from 'react'
import { connect } from 'react-redux'
import User from './User'

function LeaderBoard(props){

  const {topUsers} = props
  return (
    <div className = "ui segment container">
      <div className = "ui grid">
        <div className = "row">
          <div className="wide column"></div>
          <div className="sixteen wide stretched column">
            {topUsers.map((user,i) => <User key = {user.id} user = {user} rank = {i}/>)}
          </div>
          <div className="wide column"></div>
        </div>

      </div>
    </div>
  );
  }

const mapStateToProps = ({users}) => {
  const usersIds = Object.keys(users)
  const usersRank = usersIds.sort( (a,b) => {
    return (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length);
  } )
  const topIds = usersRank.slice(0 , 3)
  const topUsers = topIds.map((id) => users[id])
  return {
    topUsers,
  };
}

export default connect(mapStateToProps)(LeaderBoard)
