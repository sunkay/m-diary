import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Signup extends Component{
  render(){
    return(
      <div className="row signup">
        <form className="col s12">
          <h4>Signup</h4>

          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"/>
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password_confirm" type="password" className="validate"/>
              <label htmlFor="password">Confirm Your Password</label>
            </div>
          </div>

          <div className="row">
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
          </div>


        </form>
      </div>
    );
  }
}
