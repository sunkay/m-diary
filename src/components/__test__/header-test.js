import React from 'react';
import  {expect}  from 'chai';
import {mount} from 'enzyme';
import Header from '../header';

describe('header' , () => {
  let component;
  beforeEach(() => {
    component = mount(<Header />);
  })

  it('shows a header', () => {
    expect(component.find('.header')).to.have.length(1);
  });


});
