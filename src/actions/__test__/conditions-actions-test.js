import {expect} from 'chai';
import {
  receiveConditions, RECEIVE_CONDITIONS,
  fetchCondition, FETCH_CONDITION,
  newCondition, NEW_CONDITION,
  deleteCondition, DELETE_CONDITION,
  editCondition, EDIT_CONDITION
} from '../conditions';

describe('Actions', () => {

  const conditions = [
    {
      title: 'headache',
      description: 'severe pain like migranes'
    },
    {
      title: 'knee sprain',
      description: 'severe pain in the knee'
    }
  ];

  it('RECEIVE_CONDITIONS', () => {

    expect(receiveConditions(conditions).type).to.equal(RECEIVE_CONDITIONS);
    expect(receiveConditions(conditions).payload.length).to.equal(2);

  });

  it('FETCH_CONDITION', () => {

    expect(fetchCondition('-K0TjlcKWNcEfotatvaj').type).to.equal(FETCH_CONDITION);

  });

  it('test new, fetch & delete Condition from test server', () => {
    // make sure the condition is inserted into firebase and delete it
    const obj = newCondition(conditions[0]);

    expect(obj.type).to.equal(NEW_CONDITION);
    expect(obj.payload.title).to.exist;
    expect(obj.id).to.exist;

    // fetchCondition and check if it is correct
    expect(fetchCondition(obj.id.key()).payload.title).to.equal('headache');

    // delete condition
    expect(deleteCondition(obj.id.key()).type).to.equal(DELETE_CONDITION);
    // multiple deletes on the same key should not throw an error
    expect(deleteCondition(obj.id.key()).type).to.equal(DELETE_CONDITION);

  });

  it('EDIT_CONDITION', () => {
    // create a new condition
    const obj = newCondition(conditions[0]);
    expect(obj.payload.title).to.exist;

    //edit it
    editCondition(obj.id.key(), {title: "EDITED"});
    expect(fetchCondition(obj.id.key()).payload.title).to.equal('EDITED');

    //delete + cleanup
    expect(deleteCondition(obj.id.key()).type).to.equal(DELETE_CONDITION);

  });

});
