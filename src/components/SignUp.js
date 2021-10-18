import React from 'react'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
  render(){
    return (
      <div className = "ui center aligned container padded segment">
        <div className="ui middle aligned center aligned grid">
          <div className="medium column">
            <h2 className="ui teal image header">
              <i class="icons">
                <i class="user icon"></i>
                <i class="bottom right corner add icon"></i>
              </i>
              <div className="content">
                 &nbsp;Sign Up to a new account!
              </div>
            </h2>
            <form className="ui small form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" name="id" placeholder="id" required/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password" placeholder="Password" required/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="confirmPassword" placeholder="confirm Password" required />
                  </div>
                </div>
                <div className="ui fluid large teal submit button">Sign Up!</div>
              </div>

              <div className="ui error message"></div>

            </form>

            <div className="ui message">
              Already a user?
              <Link to = '/Log-in' >
                Log-in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp
