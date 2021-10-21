import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class NewQuestion extends React.Component {

  state = {
    optionOne: '',
    optionTwo: '',
    formComplete: '',
  }

  componentDidMount() {
    console.log(this.props);
  }

  render(){
    return (
      <div className="ui segment">
        <h3 className="ui center aligned icon blue header">
          Create NEW Question!
          <i className="tiny question circle outline icon"></i>
        </h3>
        <hr/>
        <form className="ui form">
          <h4 className="ui header">
            Complete The Question
          </h4>
          <h3 className="ui header">
            Would You Rather.....
          </h3>
          <div className="field">
            <input type="text" name="optionOne" placeholder="Option One" />
          </div>
          <h2 className="ui center aligned header">
            ...OR...
          </h2>
          <div className="field">
            <input type="text" name="optionTwo" placeholder="Option Two" />
          </div>

          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (authedUser) => {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion)
