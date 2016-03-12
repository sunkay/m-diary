import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../app';

describe('App' , () => {

  it('renders something', () => {
    const wrapper = shallow(<App />);

    //console.log(wrapper.debug());

    expect(wrapper.children()).to.have.length(2);

  });



});
