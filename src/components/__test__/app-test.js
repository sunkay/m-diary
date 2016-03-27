import React from 'react';
import  {renderComponent, expect}  from '../../test_helper';
import App from '../app';

describe('App' , () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  })

  it('shows a header', () => {
    expect(component.find('.header')).to.exist;
  });


});
