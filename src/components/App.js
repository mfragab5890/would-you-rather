import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    const {authedUser} = this.props
    if (authedUser !== null) {
      return (
        <Route exact path='/' render ={() => (
          <Fragment>
            <NavBar />
            <div className="ui segment">
              <p></p>
            </div>
          </Fragment>
          )}
        />

      );
    }
    else {
      return (
        <Fragment>
          <Route exact path='/sign-up' render ={() => (
              <SignUp />
            )}
          />
          <Route exact path='/log-in' render ={() => (
              <Login />
            )}
          />
        <Redirect to='/log-in' />
        </Fragment>


      );
    }
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser,
    loading : authedUser === null
  };
}

export default connect(mapStateToProps)(App)
