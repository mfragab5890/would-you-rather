import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class LeaderBoard extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render(){
    return (
      <div className="ui segment">
        <p>LeaderBoard</p>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  };
}

export default connect(mapStateToProps)(LeaderBoard)
