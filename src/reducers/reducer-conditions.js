import {FETCH_CONDITIONS} from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function conditions(state = INITIAL_STATE, action){
  console.log("reducer-conditions: type", action.type);

  switch(action.type){
    case FETCH_CONDITIONS:
      return { ...state, all: action.payload }
    default:
      return state;
  }

}
