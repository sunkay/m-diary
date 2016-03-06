import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../app';

describe('App' , () => {

  it('renders something', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<div>React simple starter</div>))
      .to.equal(true);

  });



});
