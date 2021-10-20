import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Loader from './Loader'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

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
          {
            !loading ?
              <Fragment>
                <Route exact path='/' render ={() =>{
                  return (
                    <Home />
                    );
                  }

                }
                />
              <Route exact path='/new-question' render ={() =>{
                  return (
                    <NewQuestion />
                    );
                  }
                }
                />
              <Route exact path='/leader-board' render ={() =>{
                  return (
                    <LeaderBoard />
                    );
                  }
                }
                />
              </Fragment>

            :<Route exact path='/' render ={() =>{
                return (
                  <div className="ui segment">
                    <Loader />
                  </div>
                  );
                }

              }
              />

          }

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
