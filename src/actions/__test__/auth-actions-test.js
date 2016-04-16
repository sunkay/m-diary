import {expect} from 'chai';
import {
  login, LOGIN,
  logout, LOGOUT,
} from '../auth';

describe('Auth', () => {


  it('LOGIN', () => {
    expect(login().type).to.equal(LOGIN);
    expect(login().payload.authenticated).to.equal(true);
  });

  it('LOGOUT', () => {
    expect(logout().type).to.equal(LOGOUT);
    expect(logout().payload.authenticated).to.equal(false);
  });

});
