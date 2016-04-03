import {
  REQUEST_CONDITIONS,
  RECEIVE_CONDITIONS
} from '../actions/index';

const INITIAL_STATE = {
  all: [],
  isFetching: false
 };

export default function conditions(state = INITIAL_STATE, action){

  switch(action.type){
    case RECEIVE_CONDITIONS:
      return { ...state, all: action.payload, isFetching: action.isFetching }
    case REQUEST_CONDITIONS:
      return { ...state, isFetching: action.isFetching }
    default:
      return state;
  }

}
