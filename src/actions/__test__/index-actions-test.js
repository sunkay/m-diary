import {expect} from 'chai';
import {
  receiveConditions, RECEIVE_CONDITIONS
} from '../index';

describe('Actions', () => {

  const conditions = [
    {
      id:1,
      fields: {title: 'headache', description: 'severe pain like migranes'}
    },
    {
      id:2,
      fields:   {title: 'knee sprain', description: 'severe pain in the knee'},
    }
  ];

  it('RECEIVE_CONDITIONS', () => {

    expect(receiveConditions(conditions).type).to.equal(RECEIVE_CONDITIONS);
    expect(receiveConditions(conditions).payload.length).to.equal(2);

  });

});
