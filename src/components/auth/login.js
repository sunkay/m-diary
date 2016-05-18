import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import {Link} from 'react-router';
import { login, logout, authError} from '../../actions/auth';


export class Login extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit({email, password}){
    const authRedURL = this.props.location.query.redurl;
    const url  = authRedURL? authRedURL: '/';

    this.props.login({ email, password }, url);

    //    this.context.router.push('/');
  }

  componentWillUnmount(){
    this.props.authError('');
  }

  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="chip red row s6">
          <i className="left material-icons">announcement</i>
          <strong>
            {this.props.errorMessage}
          </strong>
        </div>
      );
    }
  }

  render(){
    const { fields: { email, password }, handleSubmit } = this.props;
    return(
      <div className="row">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="col s12">
          <h4>LOGIN</h4>

          <div className={`${email.touched && email.invalid ? 'has-danger' : '' }`}>

            <label htmlFor="email" >Email</label>
            <input type="text" className="validate" {...email}/>
            {
              email.touched && email.error &&
              <div><span className="red-text text-darken-2">{email.error}</span></div>
            }
          </div>

          <div className={`${password.touched && password.invalid ? 'has-danger' : '' }`}>
            <label htmlFor="password">Password</label>
            <input type="text" className="validate" {...password}/>
            {
              password.touched && password.error &&
              <div><span className="red-text text-darken-2">{password.error}</span></div>
            }
          </div>
          {this.renderAlert()}
          <div className="row">
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values)
{
  const errors = {};

  if(!values.email){
    errors.email = 'Email is required';
  }

  if(!values.password){
    errors.password = 'Password is required';
  }

  return errors;
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm(
  {
    form: 'LoginForm',
    fields: ['email', 'password'],
    validate
  },
  mapStateToProps,
  { login, logout, authError}
)(Login);
