import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  render(){
    return (
      <div className = "ui center aligned container padded segment">
        <div className="ui middle aligned center aligned grid">
          <div className="medium column">
            <h2 className="ui teal image header">
              <i class="sign-in icon"></i>
              <div className="content">
                Log-in to your account
              </div>
            </h2>
            <form className="ui small form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" name="id" placeholder="id" />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password" placeholder="Password" />
                  </div>
                </div>
                <div className="ui fluid large teal submit button">Login</div>
              </div>

              <div className="ui error message"></div>

            </form>

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

export default Login
