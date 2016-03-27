import React from 'react';
import  {renderComponent, expect}  from '../../test_helper';
import Header from '../header';

describe('App' , () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Header);
  })

  it('shows a header', () => {
    expect(component).to.have.class('header');
  });


});
