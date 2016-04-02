import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { ConditionsList } from '../conditions-list';


describe('ConditionsList', () => {
  const conditions = { conditions: [
    {title: 'headache', desc: 'severe pain like migranes'},
    {title: 'knee sprain', desc: 'severe pain in the knee'}
  ]
};

function setup(){

    const component = shallow(
      <ConditionsList {...conditions} />
    );
    return{
      component: component
    }
}

it('shows a LI for each condition', () => {
  const { component } = setup();
  //console.log(component.debug());
  expect(component.find('li').length).to.equal(2);
});

it('shows each condition that is provided', () => {
  const { component } = setup();

  expect(component.contains('headache')).to.equal(true);
  expect(component.contains('knee sprain')).to.equal(true);
});

it('handles null props', () => {
  const component = shallow(<ConditionsList />);
  expect(component.find('li').length).to.equal(0);
});

it('fetchConditions is called when component is mounted', () => {
  const props = {
    fetchConditions: sinon.spy(),
    ...conditions
  }
  const component = mount(<ConditionsList {...props}/>);

  //console.log("mounted:   ", component.debug());
  expect(props.fetchConditions.calledOnce).to.equal(true);
  expect(component.contains(<li>knee sprain</li>)).to.equal(true);
});


});
