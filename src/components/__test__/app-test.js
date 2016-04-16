import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from '../app';

describe('App' , () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  })

  it('shows a header', () => {
    expect(component.find('.header')).to.exist;
  });


});
