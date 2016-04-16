import {expect} from 'chai';
import {
  LOGIN,
  LOGOUT,
} from '../../actions/auth';
import AuthReducer from '../reducer-auth';

describe('Auth Reducer', () => {

  it('handles action with unknown type', () => {
    expect(AuthReducer(undefined, {})).to.eql({ authenticated: false });
  });

  it('handles action of type LOGIN', () => {
    expect(AuthReducer([], {
      type: LOGIN,
      payload: {
        authenticated: true
      }
    })
  ).to.eql({ authenticated: true  });
  });

  it('handles action of type LOGOUT', () => {
    expect(AuthReducer([], {
      type: LOGOUT,
      payload: {
        authenticated: false
      }
    })
  ).to.eql({ authenticated: false });
  });


});
