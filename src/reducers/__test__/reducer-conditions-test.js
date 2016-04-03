import {expect} from 'chai';
import {
  REQUEST_CONDITIONS,
  RECEIVE_CONDITIONS,
} from '../../actions/index';
import ConditionsReducer from '../reducer-conditions';

describe('Conditions Reducer', () => {

  it('handles action with unknown type', () => {
    expect(ConditionsReducer(undefined, {})).to.eql({ all: [], isFetching: false });
  });

  it('handles action of type RECEIVE_CONDITIONS', () => {
    expect(ConditionsReducer([], {
      type: RECEIVE_CONDITIONS,
      payload: [{title: 'xyz'}],
      isFetching: false
    })
  ).to.eql({ all: [{title: 'xyz'}], isFetching: false  });
  });


});
