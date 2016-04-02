import _$ from 'jquery';
//var jsdom = require('jsdom');
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

//global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
//global.window = global.document.defaultView;
const $ = _$(global.window);

chaiJquery(chai, chai.util, $);

var React = require('react');
var ReactDOM = require('react-dom');
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
