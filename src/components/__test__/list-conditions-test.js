import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {Link} from 'react-router';
import ListConditions from '../list-conditions';
import ConditionItem from '../condition-item';


describe('Conditions Suite' , () => {

  it('renders list conditions', () => {
    const wrapper = shallow(<ListConditions />);

    //console.log(wrapper.debug());

    expect(wrapper.find(ConditionItem)).to.have.length(1);

  });

  it('Click new condition link', () => {
    const wrapper = shallow(<ListConditions />);

    expect(wrapper.find(Link)).to.have.length(1);
  });

});
