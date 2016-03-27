import {expect} from '../../test_helper';
import {fetchConditions, FETCH_CONDITIONS} from '../index';

describe('Actions', () => {

  it('FETCH_CONDITIONS', () => {

    expect(fetchConditions().type).to.equal(FETCH_CONDITIONS);
    expect(fetchConditions().payload.length).to.equal(5);

  });

});
