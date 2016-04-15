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

  it('shows a add condition button', () => {
    expect(component.find('#add-condition')).to.have.length(2);
  })
});
