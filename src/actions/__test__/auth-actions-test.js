import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import Config from '../../config';
import {
  login, LOGIN, AUTH_USER,
  logout, UNAUTH_USER,
  authError, AUTH_ERROR,
  signupUser, SIGNUP_USER,
  thunkUser, THUNK_USER
} from '../auth';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Auth', () => {
  afterEach(() => {
    nock.cleanAll();
  });

/*
  it(`Test Async actions`, () => {
    nock(Config.auth.url)
    .log(console.log)
    .defaultReplyHeaders({
      'Content-Type': 'application/json'
    })
    .post('/signup', {
      email: 'x1@y.com',
      password: '123'
    })
    .reply(200);

    const expectedActions = [
      {type: 'AUTH_USER'},
      {type: 'AUTH_USE'}
    ];

    const store = mockStore({});
    return store.dispatch(thunkUser({email:'x1@y.com', password:'123'}))
    .then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions);
    })
  });
*/

  it('Signup User', () => {
    nock(Config.auth.url)
    .log(console.log)
    .post('/signup', {
      email: 'x1@y.com',
      password: '123'
    })
    .reply(200, { token: 'JWT TOKEN'});

    nock('http://localhost:8080')
    .log(console.log)
    .get('/#/')
    .reply(200);


    const expectedActions = [
      {
        type: 'AUTH_USER'
       }
    ]
    const store = mockStore({ });

    return store.dispatch(signupUser({email: 'x1@y.com', password: '123'}))
    .then(() => {
      console.log(store.getActions());
      expect(store.getActions()).to.deep.equal(expectedActions)
    });

  });

/*
  it('Test redux-mock-store', () => {
    const store = mockStore({});
    const dummyAction = {type: 'dummy'};
    store.dispatch(dummyAction);

    const actions = store.getActions();
    expect(actions).to.eql([dummyAction]);
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
*/

});
