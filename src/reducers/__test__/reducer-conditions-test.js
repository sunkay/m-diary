import {expect} from 'chai';
import {FETCH_CONDITIONS} from '../../actions/index';
import ConditionsReducer from '../reducer-conditions';

describe('Conditions Reducer', () => {

  it('handles action with unknown type', () => {
    expect(ConditionsReducer(undefined, {})).to.eql({ all: [] });
  });

  it('handles action of type FETCH_CONDITIONS', () => {
    expect(ConditionsReducer([], {
      type: FETCH_CONDITIONS,
      payload: [{title: 'xyz'}]
    })
  ).to.eql({ all: [{title: 'xyz'}] });
  });


});
