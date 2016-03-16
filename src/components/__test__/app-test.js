import React from 'react';
import  expect  from 'expect';
import { shallow, mount, render } from 'enzyme';
import App from '../app';

describe('App' , () => {

  it('renders something', () => {
    const wrapper = shallow(<App />);

    //console.log(wrapper.debug());

    expect(wrapper.children().length).toBe(2);

  });



});
