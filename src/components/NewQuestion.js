import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class NewQuestion extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render(){
    return (
      <div className="ui segment">
        <p>NewQuestion</p>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  };
}

export default connect(mapStateToProps)(NewQuestion)
