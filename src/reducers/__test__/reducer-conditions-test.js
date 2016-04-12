import {expect} from 'chai';
import {
  REQUEST_CONDITIONS,
  RECEIVE_CONDITIONS,
  FETCH_CONDITION
} from '../../actions/conditions';
import ConditionsReducer from '../reducer-conditions';

describe('Conditions Reducer', () => {

  it('handles action with unknown type', () => {
    expect(ConditionsReducer(undefined, {})).to.eql({ all: [], condition: {}, isFetching: false });
  });

  it('handles action of type RECEIVE_CONDITIONS', () => {
    expect(ConditionsReducer([], {
      type: RECEIVE_CONDITIONS,
      payload: [{title: 'xyz'}],
      isFetching: false
    })
  ).to.eql({ all: [{title: 'xyz'}], isFetching: false  });
  });

  it('handles action of type FETCH_CONDITION', () => {
    expect(ConditionsReducer([], {
      type: FETCH_CONDITION,
      payload: {title: 'xyz'},
    })
  ).to.eql({ condition: {title:'xyz'} });
  });


});
