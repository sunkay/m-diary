import {expect} from 'chai';
import {
  login, LOGIN, AUTH_USER,
  logout, UNAUTH_USER,
} from '../auth';

describe('Auth', () => {

  it('LOGIN', () => {
    //expect(login().type).to.equal(LOGIN);
  });

  it('LOGOUT', () => {
    expect(logout().type).to.equal(UNAUTH_USER);
  });

});
