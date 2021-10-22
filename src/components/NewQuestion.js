import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import {handleAddQuestion} from '../actions/shared'
class NewQuestion extends React.Component {

  state = {
    optionOne: '',
    optionTwo: '',
    formComplete: false,
    toHome : false
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleInputChange = async(e) => {
    e.preventDefault()
    const {name, value} = e.target
    if (name === 'optionOne') {
      await this.setState({
        optionOne : value,
      })
    }
    else if (name === 'optionTwo') {
      await this.setState({
        optionTwo : value,
      })
    }
    const {optionOne, optionTwo} = this.state
    if (optionOne !== '' && optionTwo !== '') {
      await this.setState({
        formComplete : true,
      })
    }
    else {
      await this.setState({
        formComplete : false
      })
    }
  }
  handleAddNewQuestion = async (e) => {
    e.preventDefault()
    const optionOneText = this.state.optionOne
    const optionTwoText = this.state.optionTwo
    const author = this.props.authedUser.id
    const {dispatch} = this.props
    await dispatch(handleAddQuestion({optionOneText, optionTwoText, author}))
    if (window.confirm("Question submited successfully, go to home page?")) {
      this.setState({
        toHome : true,
      })
    }
    else {
      this.setState({
        optionOne : '',
        optionTwo : '',
        formComplete : false,
      })
    }
  }

  render(){
    const {optionOne, optionTwo, formComplete, toHome} = this.state
    if (toHome === true) {
      return <Redirect to='/' />;
    } else {
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
              <input
              type="text"
              name="optionOne"
              placeholder="Option One"
              value = {optionOne}
              onChange = {this.handleInputChange}
              />
            </div>
            <h2 className="ui center aligned header">
              ...OR...
            </h2>
            <div className="field">
              <input
              type="text"
              name="optionTwo"
              placeholder="Option Two"
              value = {optionTwo}
              onChange = {this.handleInputChange}
              />
            </div>

            <button
            className={formComplete === false ? "ui fluid disabled blue button" : "ui fluid blue button"}
            type="submit"
            onClick = {this.handleAddNewQuestion}
            >Submit</button>
          </form>
        </div>
      );
    }

  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion)
