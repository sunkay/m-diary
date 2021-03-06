import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { ConditionsList } from '../conditions-list';
import ConditionItem from '../condition-item';


describe('ConditionsList', () => {
  const conditions = { conditions: [
    {
      id:1,
      fields: {title: 'headache', description: 'severe pain like migranes'}
    },
    {
      id:2,
      fields:   {title: 'knee sprain', description: 'severe pain in the knee'},
    }
  ]
};
const props =  {
  fetchConditions: sinon.spy(),
  fetchConditionsFromFB: sinon.spy(),
  deleteHandler: sinon.spy(),
  ...conditions
};

function setup(){

  const component = shallow(
    <ConditionsList {...props} />
  );
  return{
    component: component
  }
}

it('shows a ConditionItem for each condition', () => {
  const { component } = setup();
  //console.log(component.debug());

  expect(component.find(ConditionItem).length).to.equal(2);
});

it('shows condition title and desc', () => {
  const { component } = setup();
  //console.log(component.debug());

  expect(component.find({title: 'headache'})).to.have.length(1);
  expect(component.find({title: 'knee sprain'})).to.have.length(1);
});

it('handles null props', () => {
  const component = shallow(<ConditionsList />);
  expect(component.find('li').length).to.equal(0);
  expect(component.contains('loading...')).to.equal(true);
});

it('fetchConditions is called when component is mounted', () => {

  const component = mount(<ConditionsList {...props}/>);

  //console.log("mounted:   ", component.debug());
  expect(props.fetchConditionsFromFB.calledOnce).to.equal(true);
});


});
