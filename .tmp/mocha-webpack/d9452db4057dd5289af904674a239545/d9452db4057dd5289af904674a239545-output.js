/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var testsContext = __webpack_require__(1);

	var runnable = testsContext.keys();

	runnable.forEach(testsContext);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./actions/__test__/conditions-actions-test.js": 2,
		"./components/__test__/app-test.js": 6,
		"./components/__test__/conditions-list-test.js": 17,
		"./components/__test__/header-test.js": 22,
		"./components/__test__/new-condition-test.js": 23,
		"./reducers/__test__/reducer-conditions-test.js": 26
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _chai = __webpack_require__(3);

	var _conditions = __webpack_require__(4);

	describe('Actions', function () {

	  var conditions = [{
	    id: 1,
	    fields: { title: 'headache', description: 'severe pain like migranes' }
	  }, {
	    id: 2,
	    fields: { title: 'knee sprain', description: 'severe pain in the knee' }
	  }];

	  it('RECEIVE_CONDITIONS', function () {

	    (0, _chai.expect)((0, _conditions.receiveConditions)(conditions).type).to.equal(_conditions.RECEIVE_CONDITIONS);
	    (0, _chai.expect)((0, _conditions.receiveConditions)(conditions).payload.length).to.equal(2);
	  });

	  it('FETCH_CONDITION', function () {

	    (0, _chai.expect)((0, _conditions.fetchCondition)('-K0TjlcKWNcEfotatvaj').type).to.equal(_conditions.FETCH_CONDITION);
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("chai");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.REQUEST_CONDITIONS = exports.RECEIVE_CONDITIONS = exports.RESET_CONDITION = exports.FETCH_CONDITION = exports.EDIT_CONDITION = exports.DELETE_CONDITION = exports.NEW_CONDITION = undefined;
	exports.fbref = fbref;
	exports.newCondition = newCondition;
	exports.deleteCondition = deleteCondition;
	exports.editCondition = editCondition;
	exports.fetchCondition = fetchCondition;
	exports.resetCondition = resetCondition;
	exports.receiveConditions = receiveConditions;
	exports.requestConditions = requestConditions;
	exports.fetchConditionsFromFB = fetchConditionsFromFB;

	var _firebase = __webpack_require__(5);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import Config from 'Config';
	//var Config = JSON.stringify(require('../../config.prod.json'));

	function fbref() {
	  var test = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	  /*
	  const fbref_url =
	    (!test) ? Config.firebaseUrl : Config.test.firebaseUrl
	   const fbref = new firebase(fbref_url+"conditions");
	   return fbref;
	  */
	  return "https://m-diary.firebaseio.com/conditions";
	}

	var NEW_CONDITION = exports.NEW_CONDITION = 'NEW_CONDITION';
	function newCondition(props) {
	  // add data to firebase
	  fbref().push(props);

	  return {
	    type: NEW_CONDITION,
	    payload: props
	  };
	}

	var DELETE_CONDITION = exports.DELETE_CONDITION = 'DELETE_CONDITION';
	function deleteCondition(id) {
	  // delete the record in firebase
	  fbref().child(id).remove();

	  return {
	    type: DELETE_CONDITION
	  };
	}

	var EDIT_CONDITION = exports.EDIT_CONDITION = 'EDIT_CONDITION';
	function editCondition(id, props) {
	  // add data to firebase
	  fbref().child(id).set(props);

	  return {
	    type: EDIT_CONDITION
	  };
	}

	var FETCH_CONDITION = exports.FETCH_CONDITION = 'FETCH_CONDITION';
	function fetchCondition(id) {
	  var data = {};
	  fbref().child(id).once('value', function (snap) {
	    data = snap.val();
	  });
	  console.log("fetchCondition ", data, id);
	  return {
	    type: FETCH_CONDITION,
	    payload: data
	  };
	}

	var RESET_CONDITION = exports.RESET_CONDITION = 'RESET_CONDITION';
	function resetCondition() {
	  return {
	    type: RESET_CONDITION
	  };
	}

	var RECEIVE_CONDITIONS = exports.RECEIVE_CONDITIONS = 'RECEIVE_CONDITIONS';
	function receiveConditions(data) {
	  return {
	    type: RECEIVE_CONDITIONS,
	    payload: data,
	    isFetching: false
	  };
	}

	var REQUEST_CONDITIONS = exports.REQUEST_CONDITIONS = 'REQUEST_CONDITIONS';
	function requestConditions() {
	  return {
	    type: REQUEST_CONDITIONS,
	    isFetching: true
	  };
	}

	function fetchConditionsFromFB() {
	  return function (dispatch) {
	    dispatch(requestConditions());
	    fbref().on('value', function (snapshot) {
	      var data = [];
	      snapshot.forEach(function (item) {
	        data.push({
	          id: item.key(),
	          fields: item.val()
	        });
	      });
	      dispatch(receiveConditions(data));
	    }, function (error) {
	      console.log("The read failed: " + error.code);
	    });
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("firebase");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _chai = __webpack_require__(3);

	var _enzyme = __webpack_require__(8);

	var _app = __webpack_require__(9);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('App', function () {
	  var component = void 0;
	  beforeEach(function () {
	    component = (0, _enzyme.mount)(_react2.default.createElement(_app2.default, null));
	  });

	  it('shows a header', function () {
	    (0, _chai.expect)(component.find('.header')).to.exist;
	  });
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("enzyme");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _main = __webpack_require__(10);

	var _main2 = _interopRequireDefault(_main);

	var _header = __webpack_require__(14);

	var _header2 = _interopRequireDefault(_header);

	var _mainContent = __webpack_require__(16);

	var _mainContent2 = _interopRequireDefault(_mainContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_header2.default, null),
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if (typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if (content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if (false) {
		// When the styles change, update the <style> tags
		if (!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./main.css", function () {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./main.css");
				if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function () {
			update();
		});
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "/*\nbody {\n  background: cornsilk;\n}\n*/\nform a {\n  margin-left: 5px\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(
	    'div',
	    { className: 'header' },
	    'This is the header component',
	    _react2.default.createElement(
	      _reactRouter.Link,
	      { to: '/cond/new', id: 'add-condition' },
	      'Add Condition'
	    )
	  );
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'This is the main content'
	  );
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _chai = __webpack_require__(3);

	var _sinon = __webpack_require__(18);

	var _sinon2 = _interopRequireDefault(_sinon);

	var _enzyme = __webpack_require__(8);

	var _conditionsList = __webpack_require__(19);

	var _conditionItem = __webpack_require__(21);

	var _conditionItem2 = _interopRequireDefault(_conditionItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('ConditionsList', function () {
	  var conditions = { conditions: [{
	      id: 1,
	      fields: { title: 'headache', description: 'severe pain like migranes' }
	    }, {
	      id: 2,
	      fields: { title: 'knee sprain', description: 'severe pain in the knee' }
	    }]
	  };
	  var props = _extends({
	    fetchConditions: _sinon2.default.spy(),
	    fetchConditionsFromFB: _sinon2.default.spy(),
	    deleteHandler: _sinon2.default.spy()
	  }, conditions);

	  function setup() {

	    var component = (0, _enzyme.shallow)(_react2.default.createElement(_conditionsList.ConditionsList, props));
	    return {
	      component: component
	    };
	  }

	  it('shows a ConditionItem for each condition', function () {
	    var _setup = setup();

	    var component = _setup.component;
	    //console.log(component.debug());

	    (0, _chai.expect)(component.find(_conditionItem2.default).length).to.equal(2);
	  });

	  it('shows condition title and desc', function () {
	    var _setup2 = setup();

	    var component = _setup2.component;
	    //console.log(component.debug());

	    (0, _chai.expect)(component.find({ title: 'headache' })).to.have.length(1);
	    (0, _chai.expect)(component.find({ title: 'knee sprain' })).to.have.length(1);
	  });

	  it('handles null props', function () {
	    var component = (0, _enzyme.shallow)(_react2.default.createElement(_conditionsList.ConditionsList, null));
	    (0, _chai.expect)(component.find('li').length).to.equal(0);
	    (0, _chai.expect)(component.contains('loading...')).to.equal(true);
	  });

	  it('fetchConditions is called when component is mounted', function () {

	    var component = (0, _enzyme.mount)(_react2.default.createElement(_conditionsList.ConditionsList, props));

	    //console.log("mounted:   ", component.debug());
	    (0, _chai.expect)(props.fetchConditionsFromFB.calledOnce).to.equal(true);
	  });
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("sinon");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConditionsList = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(20);

	var _conditions = __webpack_require__(4);

	var actions = _interopRequireWildcard(_conditions);

	var _conditionItem = __webpack_require__(21);

	var _conditionItem2 = _interopRequireDefault(_conditionItem);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ConditionsList = exports.ConditionsList = function (_Component) {
	  _inherits(ConditionsList, _Component);

	  function ConditionsList() {
	    _classCallCheck(this, ConditionsList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ConditionsList).apply(this, arguments));
	  }

	  _createClass(ConditionsList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.fetchConditionsFromFB();
	    }
	  }, {
	    key: 'deleteHandler',
	    value: function deleteHandler(id) {
	      //console.log("In conditionList deleteHandler", id);
	      this.props.deleteCondition(id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (!this.props.conditions || this.props.isFetching) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'loading...'
	        );
	      }

	      var list = this.props.conditions.map(function (cond) {
	        return _react2.default.createElement(_conditionItem2.default, {
	          key: cond.id,
	          id: cond.id,
	          title: cond.fields.title,
	          onDeleteClick: _this2.deleteHandler.bind(_this2),
	          desc: cond.fields.description });
	      }, this);

	      return _react2.default.createElement(
	        'ul',
	        { className: 'conditions-list list-group' },
	        list
	      );
	    }
	  }]);

	  return ConditionsList;
	}(_react.Component);

	;

	function mapStateToProps(state) {
	  return {
	    conditions: state.conditions.all,
	    isFetching: state.conditions.isFetching
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ConditionsList);

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ConditionItem = function (_Component) {
	  _inherits(ConditionItem, _Component);

	  function ConditionItem() {
	    _classCallCheck(this, ConditionItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ConditionItem).apply(this, arguments));
	  }

	  _createClass(ConditionItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        { className: 'condition-item list-group-item' },
	        _react2.default.createElement(
	          'h4',
	          { className: 'list-group-item-heading' },
	          this.props.title
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'list-group-item-text' },
	          this.props.desc
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'btn-group', role: 'group' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/cond/edit/' + this.props.id, className: 'btn btn-secondary' },
	            'Edit'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'btn-group', role: 'group' },
	          _react2.default.createElement(
	            'button',
	            {
	              onClick: this.props.onDeleteClick.bind(null, this.props.id),
	              className: 'btn btn-danger' },
	            'Delete'
	          )
	        )
	      );
	    }
	  }]);

	  return ConditionItem;
	}(_react.Component);

	exports.default = ConditionItem;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _chai = __webpack_require__(3);

	var _enzyme = __webpack_require__(8);

	var _header = __webpack_require__(14);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('header', function () {
	  var component = void 0;
	  beforeEach(function () {
	    component = (0, _enzyme.mount)(_react2.default.createElement(_header2.default, null));
	  });

	  it('shows a header', function () {
	    (0, _chai.expect)(component.find('.header')).to.have.length(1);
	  });

	  it('shows a add condition button', function () {
	    (0, _chai.expect)(component.find('#add-condition')).to.have.length(1);
	  });
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _chai = __webpack_require__(3);

	var _sinon = __webpack_require__(18);

	var _sinon2 = _interopRequireDefault(_sinon);

	var _enzyme = __webpack_require__(8);

	var _newCondition = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('ConditionNew', function () {
	  var props = {
	    handleSubmit: _sinon2.default.spy(),
	    params: {
	      id: 10
	    },
	    fields: {
	      title: '',
	      description: ''
	    }
	  };

	  function setup() {

	    var component = (0, _enzyme.shallow)(_react2.default.createElement(_newCondition.ConditionNew, props));
	    return {
	      component: component
	    };
	  }
	  it('has title and description input elements', function () {
	    var _setup = setup();

	    var component = _setup.component;
	    //console.log(component.debug());

	    (0, _chai.expect)(component.find('input').length).to.equal(2);
	  });
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConditionNew = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(25);

	var _reactRouter = __webpack_require__(15);

	var _conditions = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ConditionNew = exports.ConditionNew = function (_Component) {
	  _inherits(ConditionNew, _Component);

	  function ConditionNew() {
	    _classCallCheck(this, ConditionNew);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ConditionNew).apply(this, arguments));
	  }

	  _createClass(ConditionNew, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log("componentDidMount: ID", this.props.params.id);
	      if (this.props.params.id) {
	        this.props.fetchCondition(this.props.params.id);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.resetCondition();
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(formProps) {
	      if (this.props.params.id) this.props.editCondition(this.props.params.id, formProps);else this.props.newCondition(formProps);

	      this.context.router.push('/');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var _props$fields = _props.fields;
	      var title = _props$fields.title;
	      var description = _props$fields.description;
	      var handleSubmit = _props.handleSubmit;


	      return _react2.default.createElement(
	        'form',
	        { onSubmit: handleSubmit(this.onSubmit.bind(this)) },
	        _react2.default.createElement(
	          'h3',
	          null,
	          this.props.params.id ? 'Edit' : 'Create',
	          ' a condition'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (title.touched && title.invalid ? 'has-danger' : '') },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Title'
	          ),
	          _react2.default.createElement('input', _extends({ type: 'text', placeholder: 'title', className: 'form-control' }, title)),
	          title.touched && title.error && _react2.default.createElement(
	            'div',
	            null,
	            title.error
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (description.touched && description.invalid ? 'has-danger' : '') },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Description'
	          ),
	          _react2.default.createElement('input', _extends({ type: 'text', placeholder: 'description', className: 'form-control' }, description)),
	          description.touched && description.error && _react2.default.createElement(
	            'div',
	            null,
	            description.error
	          )
	        ),
	        _react2.default.createElement(
	          'button',
	          { type: 'submit', className: 'btn btn-primary' },
	          'Submit'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/', className: 'btn btn-danger' },
	          'Cancel'
	        )
	      );
	    }
	  }]);

	  return ConditionNew;
	}(_react.Component);

	ConditionNew.contextTypes = {
	  router: _react.PropTypes.object
	};


	function validate(values) {
	  var errors = {};

	  if (!values.title) {
	    errors.title = 'Required';
	  }

	  if (!values.description) {
	    errors.description = 'Required';
	  }

	  return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	  form: 'ConditionNew',
	  fields: ['title', 'description'],
	  validate: validate
	}, function (state) {
	  return { // mapStateToProps
	    initialValues: state.conditions.condition };
	}, // will pull state into form's initialValues
	{ newCondition: _conditions.newCondition, fetchCondition: _conditions.fetchCondition, resetCondition: _conditions.resetCondition, editCondition: _conditions.editCondition })(ConditionNew);

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("redux-form");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _chai = __webpack_require__(3);

	var _conditions = __webpack_require__(4);

	var _reducerConditions = __webpack_require__(27);

	var _reducerConditions2 = _interopRequireDefault(_reducerConditions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Conditions Reducer', function () {

	  it('handles action with unknown type', function () {
	    (0, _chai.expect)((0, _reducerConditions2.default)(undefined, {})).to.eql({ all: [], condition: {}, isFetching: false });
	  });

	  it('handles action of type RECEIVE_CONDITIONS', function () {
	    (0, _chai.expect)((0, _reducerConditions2.default)([], {
	      type: _conditions.RECEIVE_CONDITIONS,
	      payload: [{ title: 'xyz' }],
	      isFetching: false
	    })).to.eql({ all: [{ title: 'xyz' }], isFetching: false });
	  });

	  it('handles action of type FETCH_CONDITION', function () {
	    (0, _chai.expect)((0, _reducerConditions2.default)([], {
	      type: _conditions.FETCH_CONDITION,
	      payload: { title: 'xyz' }
	    })).to.eql({ condition: { title: 'xyz' } });
	  });
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = conditions;

	var _conditions = __webpack_require__(4);

	var INITIAL_STATE = {
	  all: [],
	  isFetching: false,
	  condition: {}
	};

	function conditions() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	  var action = arguments[1];


	  switch (action.type) {
	    case _conditions.RECEIVE_CONDITIONS:
	      return _extends({}, state, { all: action.payload, isFetching: action.isFetching });
	    case _conditions.REQUEST_CONDITIONS:
	      return _extends({}, state, { isFetching: action.isFetching });
	    case _conditions.FETCH_CONDITION:
	      return _extends({}, state, { condition: action.payload });
	    case _conditions.RESET_CONDITION:
	      return _extends({}, state, { condition: {} });

	    default:
	      return state;
	  }
	}

/***/ }
/******/ ]);