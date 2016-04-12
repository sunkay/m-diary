import {
  REQUEST_CONDITIONS,
  RECEIVE_CONDITIONS,
  FETCH_CONDITION,
  RESET_CONDITION
} from '../actions/conditions';

const INITIAL_STATE = {
  all: [],
  isFetching: false,
  condition: {}
 };

export default function conditions(state = INITIAL_STATE, action){

  switch(action.type){
    case RECEIVE_CONDITIONS:
      return { ...state, all: action.payload, isFetching: action.isFetching }
    case REQUEST_CONDITIONS:
      return { ...state, isFetching: action.isFetching }
    case FETCH_CONDITION:
      return { ...state, condition: action.payload }
    case RESET_CONDITION:
      return { ...state, condition: {} }

    default:
      return state;
  }

}
