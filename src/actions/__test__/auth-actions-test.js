import {expect} from 'chai';
import {
  login, LOGIN, AUTH_USER,
  logout, UNAUTH_USER,
  authError, AUTH_ERROR
} from '../auth';

describe('Auth', () => {

  it('LOGIN', () => {
    //expect(login().type).to.equal(LOGIN);
  });

  it('LOGOUT', () => {
    expect(logout().type).to.equal(UNAUTH_USER);
  });

  it('AUTH_ERROR', () => {
    expect(authError('error').type).to.equal(AUTH_ERROR);
    expect(authError('error').payload).to.equal('error')
  });

});
