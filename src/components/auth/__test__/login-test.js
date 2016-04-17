import React, {PropTypes} from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { Login } from '../login';

describe('Login', () => {
  const props =  {
    handleSubmit: sinon.spy(),
    params: {
      id: 10
    },
    fields: {
      email: '',
      password: ''
    },
  };

  function setup(){

    const component = shallow(<Login {...props}/>);
    return{
      component: component
    }
  }
  it('has title and description input elements', () => {
    const { component } = setup();
    //console.log(component.debug());

    expect(component.find('input').length).to.equal(2);
  });

});
