import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from '../app';

describe('App' , () => {
  let component;
  beforeEach(() => {
    component = mount(<App />);
  })

  it('shows a header', () => {
    expect(component.find('.header')).to.exist;
  });


});
