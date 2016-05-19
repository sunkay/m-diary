import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

export  class Signup extends Component{

  onSubmit({email, password, password_confirm}){
    console.log("Signup: ", {email, password, password_confirm});
  }

  render(){
    const {fields: {email, password, password_confirm}, handleSubmit } = this.props;
    return(
      <div className="container">
        <div className="row signup">
          <form className="col s12"
                onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h4>Signup</h4>

            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email"
                  className="validate" {...email} required/>
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" c
                  lassName="validate" {...password} required/>
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="password_confirm" type="password"
                  className="validate" {...password_confirm} required/>
                <label htmlFor="password">Confirm Your Password</label>
              </div>
              { // validations
                password_confirm.touched && password_confirm.error &&
                <div>
                  <span className="red-text text-darken-2">{password_confirm.error}</span>
                </div>
              }
            </div>

            <div className="row">
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/" className="btn btn-danger">Cancel</Link>
            </div>
          </form>

          <div className="row center">
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>

        </div>

      </div>
    );
  }
}

function validate(values)
{
  const errors = {};
  if(values.password != values.password_confirm){
    errors.password_confirm = "Passwords do not match... Please try again"
  }

  return errors;
}

export default reduxForm({
  form: 'SignupForm',
  fields: ['email', 'password', 'password_confirm'],
  validate
})(Signup);
