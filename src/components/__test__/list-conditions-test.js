import React from 'react';
import  expect  from 'expect';
import { shallow } from 'enzyme';
import {Link} from 'react-router';
import {ListConditions} from '../list-conditions';
import ConditionItem from '../condition-item';

function setup(conditions) {
  const props = {
    fetchConditions: expect.createSpy(),
    conditions: conditions
  };

  const component = shallow(
    <ListConditions {...props} />
  )

  return {
    component: component
  }
}

describe('Conditions Suite' , () => {
  const conditions = [
    {
      title: 'title-1',
      desc: 'desc-1'
    },
    {
      title: 'title-2',
      desc: 'desc-2'
    }
  ];

  it('renders list conditions', () => {
    const { component } = setup(conditions);

    //console.log(component.debug());

    expect(component.find(ConditionItem).length).toBe(2);

  });

  it('render conditions with empty conditions', () => {
    const { component } = setup([]);

    expect(component.find(ConditionItem).length).toBe(0);
  });

  it('there is a new condition link', () => {
    const { component } = setup(conditions);

    expect(component.find(Link).length).toBe(1);
  });

});
