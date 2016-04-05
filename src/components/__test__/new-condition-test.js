import React, {PropTypes} from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { ConditionNew } from '../new-condition';

describe('ConditionNew', () => {
  const props =  {
    handleSubmit: sinon.spy(),
    fields: {
      title: '',
      description: ''
    },
  };

  function setup(){

    const component = shallow(<ConditionNew {...props}/>);
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
