import React from 'react';
import  {renderComponent, expect}  from '../../test_helper';



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

  it('render conditions with empty this.state.', () => {
    const { component } = setup();

    //console.log(component.debug());

    expect(component.find(ConditionItem).length).toBe(0);
    expect(component.contains(<div>Loading...</div>)).toBe(true);
  });

  it('there is a new condition link', () => {
    const { component } = setup(conditions);

    expect(component.find(Link).length).toBe(1);
  });

});
