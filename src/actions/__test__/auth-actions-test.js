import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Config from '../../config';
import {
  login, LOGIN, AUTH_USER,
  logout, UNAUTH_USER,
  authError, AUTH_ERROR,
  signupUser, SIGNUP_USER,
  thunkUser, THUNK_USER
} from '../auth';

// mock, spy
import nock from 'nock';
import sinon from 'sinon';
import { hashHistory } from 'react-router';


const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Auth', () => {
  var sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    nock.cleanAll();
    sandbox.restore();
  });

  // Testing async actions with promises & stubbing hashHistory push
  it('Login', () => {
    nock(Config.auth.url)
    .log(console.log)
    .post('/signin', {
      email: 'x1@y.com',
      password: '123'
    })
    .reply(200, {token: 'JWT TOKEN'});

    // mock the redirect request in the action
    var push = sandbox.stub(hashHistory, 'push');

    const expectedActions = [
      {
        type: 'AUTH_USER'
       }
    ]
    const store = mockStore({ });

    return store.dispatch(login({email: 'x1@y.com', password: '123'}))
    .then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });


  it('Signup User', () => {
    nock(Config.auth.url)
    .log(console.log)
    .post('/signup', {
      email: 'x1@y.com',
      password: '123'
    })
    .reply(200, { token: 'JWT TOKEN'});

    // mock the redirect request in the action
    var push = sandbox.stub(hashHistory, 'push');

    const expectedActions = [
      {
        type: 'AUTH_USER'
       }
    ]
    const store = mockStore({ });

    return store.dispatch(signupUser({email: 'x1@y.com', password: '123'}))
    .then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });

  });

  });

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


});
