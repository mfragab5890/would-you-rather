import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect,withRouter } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Loader from './Loader'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import ViewQuestion from './ViewQuestion'

class App extends React.Component {
  state = {
    prevLocation : ''
  }
  async componentDidMount() {
    const { prevLocation } = this.state
    const { pathname } = this.props.location
    if ( prevLocation !== pathname ) {
      await this.setState({
        prevLocation : pathname
      })
    }
    await this.props.dispatch(handleInitialData())
  }

  render(){
    const { authedUser, loading } = this.props
    const { prevLocation } = this.state
    if ( authedUser !== null ) {
      return (
        <Fragment>
          <LoadingBar />
          <NavBar />
          <br />
          <div className = "ui main text container">
          {
            !loading ?
              <div>
                <Route exact path='/' render ={() =>{
                  return (
                    <Home />
                    );
                  }

                }
                />
              <Route exact path='/add' render ={() =>{
                  return (
                    <NewQuestion />
                    );
                  }
                }
                />
              <Route exact path='/leaderboard' render ={() =>{
                  return (
                    <LeaderBoard />
                    );
                  }
                }
                />
              <Route exact path='/questions/:qId' component = { ViewQuestion } />
            </div>

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
        </div>
      </Fragment>

      );
    }
    else {
      return (
        <Fragment>
          <LoadingBar />
          <Route exact path='/sign-up' render ={() => (
              <SignUp prevLocation = {prevLocation} />
            )}
          />
        <Route exact path='/log-in' render ={() => (
              <Login prevLocation = {prevLocation} />
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

export default withRouter(connect(mapStateToProps)(App))
