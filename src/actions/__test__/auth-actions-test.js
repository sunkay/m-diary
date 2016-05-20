import {expect} from 'chai';
import {
  login, LOGIN, AUTH_USER,
  logout, UNAUTH_USER,
  authError, AUTH_ERROR,
  signupUser, SIGNUP_USER
} from '../auth';

describe('Auth', () => {

  it('LOGIN', () => {
    // need to figure out how to test async action dispatch functions
  });

  it('LOGOUT', () => {
    expect(logout().type).to.equal(UNAUTH_USER);
  });

  it('AUTH_ERROR', () => {
    expect(authError('error').type).to.equal(AUTH_ERROR);
    expect(authError('error').payload).to.equal('error')
  });

  it('SIGNUP_USER', () => {
    // need to figure out how to test async action dispatch functions
  });

});
