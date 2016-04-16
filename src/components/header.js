import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/auth';

export class Header extends Component
{
  handleAuth(){
    this.props.authenticated? this.props.logout() : this.props.login();
  }

  render(){
    const { authenticated, login, logout } = this.props;

    return(
      <div>
        <nav>
          <div className="header nav-wrapper">
            <a href="#" className="left brand-logo">MDiary</a>
            <ul id="nav-mobile" className="right hide-on-small-and-down">
              <Link to="/cond/new" id="add-condition">Add Condition</Link>

              <Link
                to="#"
                onClick={this.handleAuth.bind(this)}
                id={`${authenticated? 'sign-out' : 'sign-in'}`}>
                  {`${authenticated? 'Sign Out' : 'Sign In'}`}
              </Link>
            </ul>
          </div>
        </nav>
        <div className="fixed-action-btn">
          <Link className="btn-floating btn red"
                to="/cond/new" id="add-condition">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(Header);
