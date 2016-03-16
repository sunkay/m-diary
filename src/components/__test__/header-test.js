import React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import Header from '../header';

describe('Header' , () => {

  it('renders header', () => {
    const wrapper = shallow(<Header />);

    //console.log(wrapper.debug());

    expect(wrapper.contains(<div>This is the header component</div>))
      .toEqual(true);

  });



});
