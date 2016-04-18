import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import {Link} from 'react-router';
import { login, logout } from '../../actions/auth';


export class Login extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(formProps){
    this.props.login();

    console.log("In Login: ",this.props.params);

    this.context.router.push('/');
  }

  render(){
    const { fields: { email, password }, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>LOGIN</h3>

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

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
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

export default reduxForm(
  {
    form: 'LoginForm',
    fields: ['email', 'password'],
    validate
  },
  null,
  { login, logout}
)(Login);
