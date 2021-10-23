import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleUserLogin } from '../actions/authedUser'

class Login extends React.Component {

  state = {
    id : '',
    password : '',
    formComplete : false,
    showError : false
  }

  handleFormData = async (e) => {
    e.preventDefault()
    const { name, value } = e.target
    if (name === 'id') {
      await this.setState({
        id : value,
      })
    }
    else if (name === 'password') {
      await this.setState({
        password : value
      })
    }
    const {id, password} = this.state
    if (id !== '' && password !== '') {
      await this.setState({
        formComplete : true
      })
    }
    else {
      await this.setState({
        formComplete : false
      })
    }

  }

  handleFormSubmit = async(e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const userId = this.state.id
    const userPassword = this.state.password
    this.setState({
      formComplete : false
    })
    if ( await dispatch(handleUserLogin({userId,userPassword})) ){
      this.props.history.push(`/`)
    }
    else {
      this.setState({showError:true})
    }

  }

  handleShowError = () => {
    this.setState({showError:false})
  }

  handleUserSelect = (e) => {
    e.preventDefault()
    const value = e.target.value
    this.setState({id : value})
  }

  checkAutoFormComplete = async() => {
    const {id, password, formComplete} = this.state
    if (id !== '' && password !== '' && formComplete !== true) {
      await this.setState({
        formComplete : true
      })
    }
  }
  componentDidUpdate(){
    this.checkAutoFormComplete()
  }

  render(){
    const { formComplete, id, password, showError } = this.state
    const { error, userIds} = this.props
    return (
      <div className = "ui main text container segment">
        <div className="ui middle aligned center aligned grid">
          <div className="medium column">
            <h2 className="ui teal image header">
              <i className="sign-in icon"></i>
              <div className="content">
                Log-in to your account
              </div>
            </h2>
            <form className="ui small form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui action left icon input">
                    <i className="user icon"></i>
                    <input
                    type="text"
                    name="id"
                    placeholder="id"
                    value = {id}
                    onChange = {this.handleFormData}
                    />
                  <select
                    className="ui compact selection dropdown"
                    defaultValue = 'all'
                    onChange = {this.handleUserSelect}
                    >
                      <option value="all" disabled>All Users</option>
                      {
                        userIds.map(
                          (user) => <option
                            key = {user}
                            value={user}
                            >{user}
                          </option>
                        )
                      }
                    </select>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value = {password}
                    onChange = {this.handleFormData}
                    />
                  </div>
                </div>
                <div className= {
                    formComplete
                    ? "ui fluid large teal submit button"
                    : "ui fluid large teal submit disabled button"
                  }
                  onClick = {this.handleFormSubmit}
                  >Login
                </div>
              </div>

            </form>
            <div className={(showError)? "ui error message" : "ui error message hidden"}>
              <i className="close icon" onClick = {this.handleShowError}></i>
              <div className="header">
                {error? error : null}
              </div>
            </div>

            <div className="ui message">
              New to us?
              <Link to = '/sign-up' >
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({users, errors}) => {
  return {
    error : errors.login_error? errors.login_error : null,
    userIds : Object.keys(users)
  };
}

export default withRouter(connect(mapStateToProps)(Login))
