import expect from 'expect';
import {fetchConditions, FETCH_CONDITIONS} from '../index';

describe('Actions Index Suite', () => {

  it('should create an action fetchConditions', () => {

    expect(fetchConditions().type).toEqual(FETCH_CONDITIONS);
    expect(fetchConditions().payload.length).toEqual(5);

  });

});
