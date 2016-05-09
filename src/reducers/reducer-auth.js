import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/auth';

const INITIAL_STATE = {
  authenticated: false
 };

export default function auth(state = INITIAL_STATE, action){

  switch(action.type){
    case AUTH_USER:
      return { ...state, authenticated: true }
    case UNAUTH_USER:
      return { ...state, authenticated: false }
    case AUTH_ERROR:
      return { ...state, error: action.payload}
    default:
      return state;
  }

}
