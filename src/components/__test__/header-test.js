import React from 'react';
import  {expect}  from 'chai';
import {mount, shallow} from 'enzyme';
import {Header} from '../header';

function setup(props){
  const component = shallow(<Header {...props} />);
  return component;
};


describe('header' , () => {

  it('shows a header', () => {
    const component = setup({ authenticated: false} );
    expect(component.find('.header')).to.have.length(1);
  });

  it('shows a add condition button', () => {
    const component = setup({ authenticated: false} );

    expect(component.find('#add-condition')).to.have.length(2);
  });

  it('shows a Sign In button when authenticated is false', () => {
    const component = setup({ authenticated: false} );
    expect(component.find('#sign-in')).to.have.length(1);
  });

  it('shows a Sign Out button when authenticated is true', () => {
    const component = setup({ authenticated: true} );
    expect(component.find('#sign-out')).to.have.length(1);
  });

});
