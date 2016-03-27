import { renderComponent, expect } from '../../test_helper';
import ConditionsList from '../conditions-list';
import spyOnReactClass from 'sinon-spy-react';

describe('ConditionsList', () => {
  let component, spy;

  beforeEach(() => {
    const conditions = { conditions: {
      all: [
        {title: 'headache', desc: 'severe pain like migranes'},
        {title: 'knee sprain', desc: 'severe pain in the knee'}
        ]
    }};
    spy = spyOnReactClass(ConditionsList, 'componentDidMount');
    component = renderComponent(ConditionsList, null, conditions);
    //console.log(component);
  });

  it('shows a LI for each condition', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each condition that is provided', () => {
    expect(component).to.contain('headache');
    expect(component).to.contain('knee sprain');
  });

  it('handles null props', () => {
    const diffComponent = renderComponent(ConditionsList);
    expect(diffComponent.find('li').length).to.equal(0);
  });
});
