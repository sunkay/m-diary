import expect from 'expect';
import {FETCH_CONDITIONS} from '../../actions/index';
import ConditionsReducer from '../reducer-conditions';

describe('Conditions Reducer', () => {

  it('should return initial-state', () => {
    expect(ConditionsReducer(undefined, {})).toEqual({ all: [] });
  });

  it('should handle FETCH_CONDITIONS', () => {
    expect(ConditionsReducer([], {
      type: FETCH_CONDITIONS,
      payload: [{title: 'xyz'}]
    })
  ).toEqual({ all: [{title: 'xyz'}] });
  });


});
