import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    const {authedUser, loading} = this.props

    if ( authedUser !== null ) {
      return (
        <Fragment>
          <LoadingBar />
          <NavBar />
          <Route exact path='/' render ={() =>
              {
                if (!loading) {
                  return (
                    <div className="ui segment">
                      <p>app here</p>
                    </div>
                  );
                }
                else {
                  return (
                    <div className="ui segment">
                      <p>Loading....</p>
                    </div>
                  );
                }
            }


          }
        />
      </Fragment>

      );
    }
    else {
      return (
        <Fragment>
          <LoadingBar />
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
