import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import {handleAddQuestion} from '../actions/shared'
class NewQuestion extends React.Component {

  state = {
    optionOne: '',
    optionTwo: '',
    formComplete: false,
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleInputChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    const {optionOne, optionTwo} = this.state
    if (name === 'optionOne') {
      this.setState({
        optionOne : value,
      })
    } else {
      this.setState({
        optionTwo : value,
      })
    }
    if (optionOne !== '' && optionTwo !== '') {
      this.setState({
        formComplete : true,
      })
    }
  }
  handleAddNewQuestion = (e) => {
    e.preventDefault()
    const optionOneText = this.state.optionOne
    const optionTwoText = this.state.optionTwo
    const author = this.props.authedUser.id
    const {dispatch} = this.props
    dispatch(handleAddQuestion({optionOneText, optionTwoText, author}))
  }

  render(){
    const {optionOne, optionTwo, formComplete} = this.state
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

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion)
