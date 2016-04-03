import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { ConditionsList } from '../conditions-list';
import ConditionItem from '../condition-item';


describe('ConditionsList', () => {
  const conditions = { conditions: [
      {title: 'headache', desc: 'severe pain like migranes'},
      {title: 'knee sprain', desc: 'severe pain in the knee'}
    ]
  };
  const props = {
    fetchConditions: sinon.spy(),
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

  const node1 = <ConditionItem title="headache" desc="severe pain like migranes" />;
  const node2 = <ConditionItem title="knee sprain" desc="severe pain in the knee" />
  expect(component.contains(node1)).to.equal(true);
  expect(component.contains(node2)).to.equal(true);
});

it('handles null props', () => {
  const component = shallow(<ConditionsList />);
  expect(component.find('li').length).to.equal(0);
  expect(component.contains('loading...')).to.equal(true);
});

it('fetchConditions is called when component is mounted', () => {

  const component = mount(<ConditionsList {...props}/>);

  //console.log("mounted:   ", component.debug());
  expect(props.fetchConditions.calledOnce).to.equal(true);
});


});
