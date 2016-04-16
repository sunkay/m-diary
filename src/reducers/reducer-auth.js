import {
  LOGIN,
  LOGOUT
} from '../actions/auth';

const INITIAL_STATE = {
  authenticated: false
 };

export default function auth(state = INITIAL_STATE, action){

  switch(action.type){
    case LOGIN:
      return { ...state, authenticated: action.payload.authenticated }
    case LOGOUT:
      return { ...state, authenticated: action.payload.authenticated }

    default:
      return state;
  }

}
