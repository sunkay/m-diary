import {expect} from 'chai';
import {
  AUTH_USER,
  UNAUTH_USER,
} from '../../actions/auth';
import AuthReducer from '../reducer-auth';

describe('Auth Reducer', () => {

  it('handles action with unknown type', () => {
    expect(AuthReducer(undefined, {})).to.eql({ authenticated: false });
  });

  it('handles action of type AUTH_USER', () => {
    expect(AuthReducer([], {
      type: AUTH_USER
    })
  ).to.eql({ authenticated: true  });
  });

  it('handles action of type LOGOUT', () => {
    expect(AuthReducer([], {
      type: UNAUTH_USER
    })
  ).to.eql({ authenticated: false });
  });


});
