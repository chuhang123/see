var rml =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/src/rml.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/lib/icon/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/icon/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj['default'] = obj;return newObj;
    }
}

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}

var Icon = function Icon(props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        spin = props.spin;

    var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
        anticon: true,
        'anticon-spin': !!spin || type === 'loading'
    }, 'anticon-' + type, true), className);
    return React.createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), { className: classString }));
};
exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/progress/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/progress/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = __webpack_require__(/*! ./progress */ "./node_modules/antd/lib/progress/progress.js");

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

exports['default'] = _progress2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/progress/progress.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/progress/progress.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _rcProgress = __webpack_require__(/*! rc-progress */ "./node_modules/rc-progress/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj['default'] = obj;return newObj;
    }
}

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var statusColorMap = {
    normal: '#108ee9',
    exception: '#ff5500',
    success: '#87d068'
};
var validProgress = function validProgress(progress) {
    if (!progress || progress < 0) {
        return 0;
    } else if (progress > 100) {
        return 100;
    }
    return progress;
};

var Progress = function (_React$Component) {
    (0, _inherits3['default'])(Progress, _React$Component);

    function Progress() {
        (0, _classCallCheck3['default'])(this, Progress);
        return (0, _possibleConstructorReturn3['default'])(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Progress, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props;

            var prefixCls = props.prefixCls,
                className = props.className,
                _props$percent = props.percent,
                percent = _props$percent === undefined ? 0 : _props$percent,
                status = props.status,
                format = props.format,
                trailColor = props.trailColor,
                size = props.size,
                successPercent = props.successPercent,
                type = props.type,
                strokeWidth = props.strokeWidth,
                width = props.width,
                showInfo = props.showInfo,
                _props$gapDegree = props.gapDegree,
                gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
                gapPosition = props.gapPosition,
                restProps = __rest(props, ["prefixCls", "className", "percent", "status", "format", "trailColor", "size", "successPercent", "type", "strokeWidth", "width", "showInfo", "gapDegree", "gapPosition"]);

            var progressStatus = parseInt(successPercent ? successPercent.toString() : percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : status || 'normal';
            var progressInfo = void 0;
            var progress = void 0;
            var textFormatter = format || function (percentNumber) {
                return percentNumber + '%';
            };
            if (showInfo) {
                var text = void 0;
                var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';
                if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
                    text = textFormatter(validProgress(percent), validProgress(successPercent));
                } else if (progressStatus === 'exception') {
                    text = React.createElement(_icon2['default'], { type: 'cross' + iconType });
                } else if (progressStatus === 'success') {
                    text = React.createElement(_icon2['default'], { type: 'check' + iconType });
                }
                progressInfo = React.createElement('span', { className: prefixCls + '-text' }, text);
            }
            if (type === 'line') {
                var percentStyle = {
                    width: validProgress(percent) + '%',
                    height: strokeWidth || (size === 'small' ? 6 : 8)
                };
                var successPercentStyle = {
                    width: validProgress(successPercent) + '%',
                    height: strokeWidth || (size === 'small' ? 6 : 8)
                };
                var successSegment = successPercent !== undefined ? React.createElement('div', { className: prefixCls + '-success-bg', style: successPercentStyle }) : null;
                progress = React.createElement('div', null, React.createElement('div', { className: prefixCls + '-outer' }, React.createElement('div', { className: prefixCls + '-inner' }, React.createElement('div', { className: prefixCls + '-bg', style: percentStyle }), successSegment)), progressInfo);
            } else if (type === 'circle' || type === 'dashboard') {
                var circleSize = width || 120;
                var circleStyle = {
                    width: circleSize,
                    height: circleSize,
                    fontSize: circleSize * 0.15 + 6
                };
                var circleWidth = strokeWidth || 6;
                var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
                var gapDeg = gapDegree || type === 'dashboard' && 75;
                progress = React.createElement('div', { className: prefixCls + '-inner', style: circleStyle }, React.createElement(_rcProgress.Circle, { percent: validProgress(percent), strokeWidth: circleWidth, trailWidth: circleWidth, strokeColor: statusColorMap[progressStatus], trailColor: trailColor, prefixCls: prefixCls, gapDegree: gapDeg, gapPosition: gapPos }), progressInfo);
            }
            var classString = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + (type === 'dashboard' && 'circle' || type), true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-show-info', showInfo), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, size), _classNames), className);
            return React.createElement('div', (0, _extends3['default'])({}, restProps, { className: classString }), progress);
        }
    }]);
    return Progress;
}(React.Component);

exports['default'] = Progress;

Progress.defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'ant-progress',
    size: 'default'
};
Progress.propTypes = {
    status: _propTypes2['default'].oneOf(['normal', 'exception', 'active', 'success']),
    type: _propTypes2['default'].oneOf(['line', 'circle', 'dashboard']),
    showInfo: _propTypes2['default'].bool,
    percent: _propTypes2['default'].number,
    width: _propTypes2['default'].number,
    strokeWidth: _propTypes2['default'].number,
    trailColor: _propTypes2['default'].string,
    format: _propTypes2['default'].func,
    gapDegree: _propTypes2['default'].number,
    'default': _propTypes2['default'].oneOf(['default', 'small'])
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/progress/style/index.css":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/progress/style/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Symbol;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {/* empty */};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var _Symbol = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js") });

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f });

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js").set });

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }$replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('observable');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if ("function" === 'function' && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/mobx-react/index.module.js":
/*!*************************************************!*\
  !*** ./node_modules/mobx-react/index.module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inject = exports.Provider = exports.useStaticRendering = exports.trackComponents = exports.componentByNodeRegistry = exports.componentByNodeRegistery = exports.renderReporter = exports.Observer = exports.observer = exports.onError = exports.PropTypes = exports.propTypes = undefined;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// These functions can be stubbed out in specific environments
var unstable_batchedUpdates$1 = undefined;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hoistNonReactStatics = createCommonjsModule(function (module, exports) {
    /**
     * Copyright 2015, Yahoo! Inc.
     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
     */
    (function (global, factory) {
        module.exports = factory();
    })(commonjsGlobal, function () {
        'use strict';

        var REACT_STATICS = {
            childContextTypes: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            getDerivedStateFromProps: true,
            mixins: true,
            propTypes: true,
            type: true
        };

        var KNOWN_STATICS = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            callee: true,
            arguments: true,
            arity: true
        };

        var defineProperty = Object.defineProperty;
        var getOwnPropertyNames = Object.getOwnPropertyNames;
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var getPrototypeOf = Object.getPrototypeOf;
        var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

        return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
            if (typeof sourceComponent !== 'string') {
                // don't hoist over string (html) components

                if (objectPrototype) {
                    var inheritedComponent = getPrototypeOf(sourceComponent);
                    if (inheritedComponent && inheritedComponent !== objectPrototype) {
                        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                    }
                }

                var keys = getOwnPropertyNames(sourceComponent);

                if (getOwnPropertySymbols) {
                    keys = keys.concat(getOwnPropertySymbols(sourceComponent));
                }

                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                        try {
                            // Avoid failures from read-only properties
                            defineProperty(targetComponent, key, descriptor);
                        } catch (e) {}
                    }
                }

                return targetComponent;
            }

            return targetComponent;
        };
    });
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
};

var asyncGenerator = function () {
    function AwaitValue(value) {
        this.value = value;
    }

    function AsyncGenerator(gen) {
        var front, back;

        function send(key, arg) {
            return new Promise(function (resolve, reject) {
                var request = {
                    key: key,
                    arg: arg,
                    resolve: resolve,
                    reject: reject,
                    next: null
                };

                if (back) {
                    back = back.next = request;
                } else {
                    front = back = request;
                    resume(key, arg);
                }
            });
        }

        function resume(key, arg) {
            try {
                var result = gen[key](arg);
                var value = result.value;

                if (value instanceof AwaitValue) {
                    Promise.resolve(value.value).then(function (arg) {
                        resume("next", arg);
                    }, function (arg) {
                        resume("throw", arg);
                    });
                } else {
                    settle(result.done ? "return" : "normal", result.value);
                }
            } catch (err) {
                settle("throw", err);
            }
        }

        function settle(type, value) {
            switch (type) {
                case "return":
                    front.resolve({
                        value: value,
                        done: true
                    });
                    break;

                case "throw":
                    front.reject(value);
                    break;

                default:
                    front.resolve({
                        value: value,
                        done: false
                    });
                    break;
            }

            front = front.next;

            if (front) {
                resume(front.key, front.arg);
            } else {
                back = null;
            }
        }

        this._invoke = send;

        if (typeof gen.return !== "function") {
            this.return = undefined;
        }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
        AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
            return this;
        };
    }

    AsyncGenerator.prototype.next = function (arg) {
        return this._invoke("next", arg);
    };

    AsyncGenerator.prototype.throw = function (arg) {
        return this._invoke("throw", arg);
    };

    AsyncGenerator.prototype.return = function (arg) {
        return this._invoke("return", arg);
    };

    return {
        wrap: function wrap(fn) {
            return function () {
                return new AsyncGenerator(fn.apply(this, arguments));
            };
        },
        await: function _await(value) {
            return new AwaitValue(value);
        }
    };
}();

var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var inherits = function inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
};

var EventEmitter = function () {
    function EventEmitter() {
        classCallCheck(this, EventEmitter);
        this.listeners = [];
    }

    createClass(EventEmitter, [{
        key: "on",
        value: function on(cb) {
            var _this = this;

            this.listeners.push(cb);
            return function () {
                var index = _this.listeners.indexOf(cb);
                if (index !== -1) _this.listeners.splice(index, 1);
            };
        }
    }, {
        key: "emit",
        value: function emit(data) {
            this.listeners.forEach(function (fn) {
                return fn(data);
            });
        }
    }]);
    return EventEmitter;
}();

// Copied from React.PropTypes
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
            rest[_key - 6] = arguments[_key];
        }

        return (0, _mobx.untracked)(function () {
            componentName = componentName || "<<anonymous>>";
            propFullName = propFullName || propName;
            if (props[propName] == null) {
                if (isRequired) {
                    var actual = props[propName] === null ? "null" : "undefined";
                    return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
                }
                return null;
            } else {
                return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
            }
        });
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}

// Copied from React.PropTypes
function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === "symbol") {
        return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue["@@toStringTag"] === "Symbol") {
        return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
    }

    return false;
}

// Copied from React.PropTypes
function getPropType(propValue) {
    var propType = typeof propValue === "undefined" ? "undefined" : _typeof(propValue);
    if (Array.isArray(propValue)) {
        return "array";
    }
    if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
    }
    if (isSymbol(propType, propValue)) {
        return "symbol";
    }
    return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes
function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === "object") {
        if (propValue instanceof Date) {
            return "date";
        } else if (propValue instanceof RegExp) {
            return "regexp";
        }
    }
    return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        return (0, _mobx.untracked)(function () {
            if (allowNativeType) {
                if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
            }
            var mobxChecker = void 0;
            switch (mobxType) {
                case "Array":
                    mobxChecker = _mobx.isObservableArray;
                    break;
                case "Object":
                    mobxChecker = _mobx.isObservableObject;
                    break;
                case "Map":
                    mobxChecker = _mobx.isObservableMap;
                    break;
                default:
                    throw new Error("Unexpected mobxType: " + mobxType);
            }
            var propValue = props[propName];
            if (!mobxChecker(propValue)) {
                var preciseType = getPreciseType(propValue);
                var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
                return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
            }
            return null;
        });
    });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
            rest[_key2 - 5] = arguments[_key2];
        }

        return (0, _mobx.untracked)(function () {
            if (typeof typeChecker !== "function") {
                return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
            }
            var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName);
            if (error instanceof Error) return error;
            var propValue = props[propName];
            for (var i = 0; i < propValue.length; i++) {
                error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
                if (error instanceof Error) return error;
            }
            return null;
        });
    });
}

var observableArray = createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = createObservableTypeCheckerCreator(false, "Map");
var observableObject = createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = createObservableTypeCheckerCreator(true, "Object");

var propTypes = Object.freeze({
    observableArray: observableArray,
    observableArrayOf: observableArrayOf,
    observableMap: observableMap,
    observableObject: observableObject,
    arrayOrObservableArray: arrayOrObservableArray,
    arrayOrObservableArrayOf: arrayOrObservableArrayOf,
    objectOrObservableObject: objectOrObservableObject
});

function isStateless(component) {
    // `function() {}` has prototype, but `() => {}` doesn't
    // `() => {}` via Babel has prototype too.
    return !(component.prototype && component.prototype.render);
}

var injectorContextTypes = {
    mobxStores: objectOrObservableObject
};
Object.seal(injectorContextTypes);

var proxiedInjectorProps = {
    contextTypes: {
        get: function get$$1() {
            return injectorContextTypes;
        },
        set: function set$$1(_) {
            console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
        },
        configurable: true,
        enumerable: false
    },
    isMobxInjector: {
        value: true,
        writable: true,
        configurable: true,
        enumerable: true

        /**
         * Store Injection
         */
    } };function createStoreInjector(grabStoresFn, component, injectNames) {
    var _class, _temp2;

    var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
    if (injectNames) displayName += "-with-" + injectNames;

    var Injector = (_temp2 = _class = function (_Component) {
        inherits(Injector, _Component);

        function Injector() {
            var _ref;

            var _temp, _this, _ret;

            classCallCheck(this, Injector);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Injector.__proto__ || Object.getPrototypeOf(Injector)).call.apply(_ref, [this].concat(args))), _this), _this.storeRef = function (instance) {
                _this.wrappedInstance = instance;
            }, _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(Injector, [{
            key: "render",
            value: function render() {
                // Optimization: it might be more efficient to apply the mapper function *outside* the render method
                // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
                // See this test: 'using a custom injector is not too reactive' in inject.js
                var newProps = {};
                for (var key in this.props) {
                    if (this.props.hasOwnProperty(key)) {
                        newProps[key] = this.props[key];
                    }
                }var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};
                for (var _key2 in additionalProps) {
                    newProps[_key2] = additionalProps[_key2];
                }

                if (!isStateless(component)) {
                    newProps.ref = this.storeRef;
                }

                return (0, _react.createElement)(component, newProps);
            }
        }]);
        return Injector;
    }(_react.Component), _class.displayName = displayName, _temp2);

    // Static fields from component should be visible on the generated Injector

    hoistNonReactStatics(Injector, component);

    Injector.wrappedComponent = component;
    Object.defineProperties(Injector, proxiedInjectorProps);

    return Injector;
}

function grabStoresByName(storeNames) {
    return function (baseStores, nextProps) {
        storeNames.forEach(function (storeName) {
            if (storeName in nextProps // prefer props over stores
            ) return;
            if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
            nextProps[storeName] = baseStores[storeName];
        });
        return nextProps;
    };
}

/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */
function inject() /* fn(stores, nextProps) or ...storeNames */{
    var grabStoresFn = void 0;
    if (typeof arguments[0] === "function") {
        grabStoresFn = arguments[0];
        return function (componentClass) {
            var injected = createStoreInjector(grabStoresFn, componentClass);
            injected.isMobxInjector = false; // supress warning
            // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
            // see #111
            injected = observer(injected);
            injected.isMobxInjector = true; // restore warning
            return injected;
        };
    } else {
        var storeNames = [];
        for (var i = 0; i < arguments.length; i++) {
            storeNames[i] = arguments[i];
        }grabStoresFn = grabStoresByName(storeNames);
        return function (componentClass) {
            return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
        };
    }
}

/**
 * dev tool support
 */
var isDevtoolsEnabled = false;

var isUsingStaticRendering = false;

var warnedAboutObserverInjectDeprecation = false;

// WeakMap<Node, Object>;
var componentByNodeRegistry = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
var renderReporter = new EventEmitter();

function findDOMNode$2(component) {
    if (_reactDom.findDOMNode) {
        try {
            return (0, _reactDom.findDOMNode)(component);
        } catch (e) {
            // findDOMNode will throw in react-test-renderer, see:
            // See https://github.com/mobxjs/mobx-react/issues/216
            // Is there a better heuristic?
            return null;
        }
    }
    return null;
}

function reportRendering(component) {
    var node = findDOMNode$2(component);
    if (node && componentByNodeRegistry) componentByNodeRegistry.set(node, component);

    renderReporter.emit({
        event: "render",
        renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
        totalTime: Date.now() - component.__$mobRenderStart,
        component: component,
        node: node
    });
}

function trackComponents() {
    if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
    if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
}

function useStaticRendering(useStaticRendering) {
    isUsingStaticRendering = useStaticRendering;
}

/**
 * Errors reporter
 */

var errorsReporter = new EventEmitter();

/**
 * Utilities
 */

function patch(target, funcName) {
    var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var base = target[funcName];
    var mixinFunc = reactiveMixin[funcName];
    var f = !base ? mixinFunc : runMixinFirst === true ? function () {
        mixinFunc.apply(this, arguments);
        base.apply(this, arguments);
    } : function () {
        base.apply(this, arguments);
        mixinFunc.apply(this, arguments);
    };

    // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
    // ...but that breaks react-hot-loader, see #231...
    target[funcName] = f;
}

function shallowEqual(objA, objB) {
    //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (is(objA, objB)) return true;
    if ((typeof objA === "undefined" ? "undefined" : _typeof(objA)) !== "object" || objA === null || (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== "object" || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

function makeComponentReactive(render) {
    var _this2 = this;

    if (isUsingStaticRendering === true) return render.call(this);

    function makePropertyObservableReference(propName) {
        var valueHolder = this[propName];
        var atom = (0, _mobx.createAtom)("reactive " + propName);
        Object.defineProperty(this, propName, {
            configurable: true,
            enumerable: true,
            get: function get$$1() {
                atom.reportObserved();
                return valueHolder;
            },
            set: function set$$1(v) {
                if (!isForcingUpdate && !shallowEqual(valueHolder, v)) {
                    valueHolder = v;
                    skipRender = true;
                    atom.reportChanged();
                    skipRender = false;
                } else {
                    valueHolder = v;
                }
            }
        });
    }

    function reactiveRender() {
        var _this = this;

        isRenderingPending = false;
        var exception = undefined;
        var rendering = undefined;
        reaction.track(function () {
            if (isDevtoolsEnabled) {
                _this.__$mobRenderStart = Date.now();
            }
            try {
                rendering = (0, _mobx._allowStateChanges)(false, baseRender);
            } catch (e) {
                exception = e;
            }
            if (isDevtoolsEnabled) {
                _this.__$mobRenderEnd = Date.now();
            }
        });
        if (exception) {
            errorsReporter.emit(exception);
            throw exception;
        }
        return rendering;
    }

    // Generate friendly name for debugging
    var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
    var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID || this._reactInternalFiber && this._reactInternalFiber._debugID;
    /**
     * If props are shallowly modified, react will render anyway,
     * so atom.reportChanged() should not result in yet another re-render
     */
    var skipRender = false;
    /**
     * forceUpdate will re-assign this.props. We don't want that to cause a loop,
     * so detect these changes
     */
    var isForcingUpdate = false;

    // make this.props an observable reference, see #124
    makePropertyObservableReference.call(this, "props");
    // make state an observable reference
    makePropertyObservableReference.call(this, "state");

    // wire up reactive render
    var baseRender = render.bind(this);
    var isRenderingPending = false;

    var reaction = new _mobx.Reaction(initialName + "#" + rootNodeID + ".render()", function () {
        if (!isRenderingPending) {
            // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
            // This unidiomatic React usage but React will correctly warn about this so we continue as usual
            // See #85 / Pull #44
            isRenderingPending = true;
            if (typeof _this2.componentWillReact === "function") _this2.componentWillReact(); // TODO: wrap in action?
            if (_this2.__$mobxIsUnmounted !== true) {
                // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
                // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
                // However, people also claim this migth happen during unit tests..
                var hasError = true;
                try {
                    isForcingUpdate = true;
                    if (!skipRender) _react.Component.prototype.forceUpdate.call(_this2);
                    hasError = false;
                } finally {
                    isForcingUpdate = false;
                    if (hasError) reaction.dispose();
                }
            }
        }
    });
    reaction.reactComponent = this;
    reactiveRender.$mobx = reaction;
    this.render = reactiveRender;
    return reactiveRender.call(this);
}

/**
 * ReactiveMixin
 */
var reactiveMixin = {
    componentWillUnmount: function componentWillUnmount() {
        if (isUsingStaticRendering === true) return;
        this.render.$mobx && this.render.$mobx.dispose();
        this.__$mobxIsUnmounted = true;
        if (isDevtoolsEnabled) {
            var node = findDOMNode$2(this);
            if (node && componentByNodeRegistry) {
                componentByNodeRegistry.delete(node);
            }
            renderReporter.emit({
                event: "destroy",
                component: this,
                node: node
            });
        }
    },

    componentDidMount: function componentDidMount() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    componentDidUpdate: function componentDidUpdate() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        if (isUsingStaticRendering) {
            console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
        }
        // update on any state changes (as is the default)
        if (this.state !== nextState) {
            return true;
        }
        // update if props are shallowly not equal, inspired by PureRenderMixin
        // we could return just 'false' here, and avoid the `skipRender` checks etc
        // however, it is nicer if lifecycle events are triggered like usually,
        // so we return true here if props are shallowly modified.
        return !shallowEqual(this.props, nextProps);
    }

    /**
     * Observer function / decorator
     */
};function observer(arg1, arg2) {
    if (typeof arg1 === "string") {
        throw new Error("Store names should be provided as array");
    }
    if (Array.isArray(arg1)) {
        // TODO: remove in next major
        // component needs stores
        if (!warnedAboutObserverInjectDeprecation) {
            warnedAboutObserverInjectDeprecation = true;
            console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
        }
        if (!arg2) {
            // invoked as decorator
            return function (componentClass) {
                return observer(arg1, componentClass);
            };
        } else {
            return inject.apply(null, arg1)(observer(arg2));
        }
    }
    var componentClass = arg1;

    if (componentClass.isMobxInjector === true) {
        console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
    }
    if (componentClass.__proto__ === _react.PureComponent) {
        console.warn("Mobx observer: You are using 'observer' on React.PureComponent. These two achieve two opposite goals and should not be used together");
    }

    // Stateless function component:
    // If it is function but doesn't seem to be a react class constructor,
    // wrap it to a react class automatically
    if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !_react.Component.isPrototypeOf(componentClass)) {
        var _class, _temp;

        var observerComponent = observer((_temp = _class = function (_Component) {
            inherits(_class, _Component);

            function _class() {
                classCallCheck(this, _class);
                return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            createClass(_class, [{
                key: "render",
                value: function render() {
                    return componentClass.call(this, this.props, this.context);
                }
            }]);
            return _class;
        }(_react.Component), _class.displayName = componentClass.displayName || componentClass.name, _class.contextTypes = componentClass.contextTypes, _class.propTypes = componentClass.propTypes, _class.defaultProps = componentClass.defaultProps, _temp));
        hoistNonReactStatics(observerComponent, componentClass);
        return observerComponent;
    }

    if (!componentClass) {
        throw new Error("Please pass a valid component to 'observer'");
    }

    var target = componentClass.prototype || componentClass;
    mixinLifecycleEvents(target);
    componentClass.isMobXReactObserver = true;
    var baseRender = target.render;
    target.render = function () {
        return makeComponentReactive.call(this, baseRender);
    };
    return componentClass;
}

function mixinLifecycleEvents(target) {
    ["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
        patch(target, funcName);
    });
    if (!target.shouldComponentUpdate) {
        target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
    } else {
        // TODO: make throw in next major
        console.warn("Use `shouldComponentUpdate` in an `observer` based component breaks the behavior of `observer` and might lead to unexpected results. Manually implementing `sCU` should not be needed when using mobx-react.");
    }
}

var Observer = observer(function (_ref) {
    var children = _ref.children,
        observerInject = _ref.inject,
        render = _ref.render;

    var component = children || render;
    if (typeof component === "undefined") {
        return null;
    }
    if (!observerInject) {
        return component();
    }
    // TODO: remove in next major
    console.warn("<Observer inject=.../> is no longer supported. Please use inject on the enclosing component instead");
    var InjectComponent = inject(observerInject)(component);
    return _react2.default.createElement(InjectComponent, null);
});

Observer.displayName = "Observer";

var ObserverPropsCheck = function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    if (typeof props[key] === "function" && typeof props[extraKey] === "function") {
        return new Error("Invalid prop,do not use children and render in the same time in`" + componentName);
    }

    if (typeof props[key] === "function" || typeof props[extraKey] === "function") {
        return;
    }
    return new Error("Invalid prop `" + propFullName + "` of type `" + _typeof(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
};

Observer.propTypes = {
    render: ObserverPropsCheck,
    children: ObserverPropsCheck
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
        this.setState(state);
    }
}

function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(nextProps, this.state);
    if (state !== null && state !== undefined) {
        this.setState(state);
    }
}

function componentWillUpdate(nextProps, nextState) {
    try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally {
        this.props = prevProps;
        this.state = prevState;
    }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component$$1) {
    var prototype = Component$$1.prototype;

    if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
    }

    if (typeof Component$$1.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
        return Component$$1;
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
        foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
        foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component$$1.displayName || Component$$1.name;
        var newApiName = typeof Component$$1.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';

        throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
    }

    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component$$1.getDerivedStateFromProps === 'function') {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
    }

    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
        if (typeof prototype.componentDidUpdate !== 'function') {
            throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
        }

        prototype.componentWillUpdate = componentWillUpdate;

        var componentDidUpdate = prototype.componentDidUpdate;

        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;

            componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
    }

    return Component$$1;
}

var _class;
var _temp;

var specialReactKeys = { children: true, key: true, ref: true };

var Provider = (_temp = _class = function (_Component) {
    inherits(Provider, _Component);

    function Provider(props, context) {
        classCallCheck(this, Provider);

        var _this = possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props, context));

        _this.state = props || {};
        return _this;
    }

    createClass(Provider, [{
        key: "render",
        value: function render() {
            return _react.Children.only(this.props.children);
        }
    }, {
        key: "getChildContext",
        value: function getChildContext() {
            var stores = {};
            // inherit stores
            var baseStores = this.context.mobxStores;
            if (baseStores) for (var key in baseStores) {
                stores[key] = baseStores[key];
            }
            // add own stores
            for (var _key in this.state) {
                if (!specialReactKeys[_key] && _key !== "suppressChangedStoreWarning") stores[_key] = this.props[_key];
            }return {
                mobxStores: stores
            };
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(nextProps, prevState) {
            if (!nextProps) return null;
            if (!prevState) return nextProps;

            // Maybe this warning is too aggressive?
            if (Object.keys(nextProps).length !== Object.keys(prevState).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
            if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
                if (!specialReactKeys[key] && prevState[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
            }return nextProps;
        }
    }]);
    return Provider;
}(_react.Component), _class.contextTypes = {
    mobxStores: objectOrObservableObject
}, _class.childContextTypes = {
    mobxStores: objectOrObservableObject.isRequired
}, _temp);

// TODO: kill in next major

polyfill(Provider);

if (!_react.Component) throw new Error("mobx-react requires React to be available");
if (!_mobx.spy) throw new Error("mobx-react requires mobx to be available");

if (typeof _reactDom.unstable_batchedUpdates === "function") (0, _mobx.configure)({ reactionScheduler: _reactDom.unstable_batchedUpdates });else if (typeof unstable_batchedUpdates$1 === "function") (0, _mobx.configure)({ reactionScheduler: unstable_batchedUpdates$1 });

var onError = function onError(fn) {
    return errorsReporter.on(fn);
};

/* DevTool support */
// See: https://github.com/andykog/mobx-devtools/blob/d8976c24b8cb727ed59f9a0bc905a009df79e221/src/backend/installGlobalHook.js

if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
    var mobx$1 = { spy: _mobx.spy, extras: { getDebugName: _mobx.getDebugName } };
    var mobxReact = {
        renderReporter: renderReporter,
        componentByNodeRegistry: componentByNodeRegistry,
        componentByNodeRegistery: componentByNodeRegistry,
        trackComponents: trackComponents
    };
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(mobxReact, mobx$1);
}

exports.propTypes = propTypes;
exports.PropTypes = propTypes;
exports.onError = onError;
exports.observer = observer;
exports.Observer = Observer;
exports.renderReporter = renderReporter;
exports.componentByNodeRegistery = componentByNodeRegistry;
exports.componentByNodeRegistry = componentByNodeRegistry;
exports.trackComponents = trackComponents;
exports.useStaticRendering = useStaticRendering;
exports.Provider = Provider;
exports.inject = inject;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),

/***/ "./node_modules/omit.js/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/omit.js/es/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function omit(obj, fields) {
  var shallowCopy = (0, _extends3.default)({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

exports.default = omit;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (true) {
  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/rc-progress/es/Circle.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-progress/es/Circle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enhancer = __webpack_require__(/*! ./enhancer */ "./node_modules/rc-progress/es/enhancer.js");

var _enhancer2 = _interopRequireDefault(_enhancer);

var _types = __webpack_require__(/*! ./types */ "./node_modules/rc-progress/es/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/prop-types: 0 */
var Circle = function (_Component) {
  (0, _inherits3.default)(Circle, _Component);

  function Circle() {
    (0, _classCallCheck3.default)(this, Circle);

    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Circle.prototype.getPathStyles = function getPathStyles() {
    var _props = this.props,
        percent = _props.percent,
        strokeWidth = _props.strokeWidth,
        _props$gapDegree = _props.gapDegree,
        gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
        gapPosition = _props.gapPosition;

    var radius = 50 - strokeWidth / 2;
    var beginPositionX = 0;
    var beginPositionY = -radius;
    var endPositionX = 0;
    var endPositionY = -2 * radius;
    switch (gapPosition) {
      case 'left':
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = 2 * radius;
        endPositionY = 0;
        break;
      case 'right':
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = -2 * radius;
        endPositionY = 0;
        break;
      case 'bottom':
        beginPositionY = radius;
        endPositionY = 2 * radius;
        break;
      default:
    }
    var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
    var len = Math.PI * 2 * radius;
    var trailPathStyle = {
      strokeDasharray: len - gapDegree + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
    };
    var strokePathStyle = {
      strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
    };
    return { pathString: pathString, trailPathStyle: trailPathStyle, strokePathStyle: strokePathStyle };
  };

  Circle.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        strokeWidth = _props2.strokeWidth,
        trailWidth = _props2.trailWidth,
        strokeColor = _props2.strokeColor,
        percent = _props2.percent,
        trailColor = _props2.trailColor,
        strokeLinecap = _props2.strokeLinecap,
        style = _props2.style,
        className = _props2.className,
        restProps = (0, _objectWithoutProperties3.default)(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'strokeColor', 'percent', 'trailColor', 'strokeLinecap', 'style', 'className']);

    var _getPathStyles = this.getPathStyles(),
        pathString = _getPathStyles.pathString,
        trailPathStyle = _getPathStyles.trailPathStyle,
        strokePathStyle = _getPathStyles.strokePathStyle;

    delete restProps.percent;
    delete restProps.gapDegree;
    delete restProps.gapPosition;
    return _react2.default.createElement('svg', (0, _extends3.default)({
      className: prefixCls + '-circle ' + className,
      viewBox: '0 0 100 100',
      style: style
    }, restProps), _react2.default.createElement('path', {
      className: prefixCls + '-circle-trail',
      d: pathString,
      stroke: trailColor,
      strokeWidth: trailWidth || strokeWidth,
      fillOpacity: '0',
      style: trailPathStyle
    }), _react2.default.createElement('path', {
      className: prefixCls + '-circle-path',
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: strokeColor,
      strokeWidth: this.props.percent === 0 ? 0 : strokeWidth,
      fillOpacity: '0',
      ref: function ref(path) {
        _this2.path = path;
      },
      style: strokePathStyle
    }));
  };

  return Circle;
}(_react.Component);

Circle.propTypes = (0, _extends3.default)({}, _types.propTypes, {
  gapPosition: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right'])
});

Circle.defaultProps = (0, _extends3.default)({}, _types.defaultProps, {
  gapPosition: 'top'
});

exports.default = (0, _enhancer2.default)(Circle);

/***/ }),

/***/ "./node_modules/rc-progress/es/Line.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-progress/es/Line.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _enhancer = __webpack_require__(/*! ./enhancer */ "./node_modules/rc-progress/es/enhancer.js");

var _enhancer2 = _interopRequireDefault(_enhancer);

var _types = __webpack_require__(/*! ./types */ "./node_modules/rc-progress/es/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Line = function (_Component) {
  (0, _inherits3.default)(Line, _Component);

  function Line() {
    (0, _classCallCheck3.default)(this, Line);

    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Line.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        percent = _props.percent,
        prefixCls = _props.prefixCls,
        strokeColor = _props.strokeColor,
        strokeLinecap = _props.strokeLinecap,
        strokeWidth = _props.strokeWidth,
        style = _props.style,
        trailColor = _props.trailColor,
        trailWidth = _props.trailWidth,
        restProps = (0, _objectWithoutProperties3.default)(_props, ['className', 'percent', 'prefixCls', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'trailWidth']);

    delete restProps.gapPosition;

    var pathStyle = {
      strokeDasharray: '100px, 100px',
      strokeDashoffset: 100 - percent + 'px',
      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear'
    };

    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = 'M ' + (strokeLinecap === 'round' ? center : 0) + ',' + center + '\n           L ' + (strokeLinecap === 'round' ? right : 100) + ',' + center;
    var viewBoxString = '0 0 100 ' + strokeWidth;

    return _react2.default.createElement('svg', (0, _extends3.default)({
      className: prefixCls + '-line ' + className,
      viewBox: viewBoxString,
      preserveAspectRatio: 'none',
      style: style
    }, restProps), _react2.default.createElement('path', {
      className: prefixCls + '-line-trail',
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: trailColor,
      strokeWidth: trailWidth || strokeWidth,
      fillOpacity: '0'
    }), _react2.default.createElement('path', {
      className: prefixCls + '-line-path',
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      fillOpacity: '0',
      ref: function ref(path) {
        _this2.path = path;
      },
      style: pathStyle
    }));
  };

  return Line;
}(_react.Component);

Line.propTypes = _types.propTypes;

Line.defaultProps = _types.defaultProps;

exports.default = (0, _enhancer2.default)(Line);

/***/ }),

/***/ "./node_modules/rc-progress/es/enhancer.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-progress/es/enhancer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancer = function enhancer(WrappedComponent) {
  return function (_WrappedComponent) {
    (0, _inherits3.default)(Progress, _WrappedComponent);

    function Progress() {
      (0, _classCallCheck3.default)(this, Progress);

      return (0, _possibleConstructorReturn3.default)(this, _WrappedComponent.apply(this, arguments));
    }

    Progress.prototype.componentDidUpdate = function componentDidUpdate() {
      if (!this.path) {
        return;
      }
      var pathStyle = this.path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
      var now = Date.now();
      if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
      this.prevTimeStamp = Date.now();
    };

    Progress.prototype.render = function render() {
      return _WrappedComponent.prototype.render.call(this);
    };

    return Progress;
  }(WrappedComponent);
};

exports.default = enhancer;

/***/ }),

/***/ "./node_modules/rc-progress/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-progress/es/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = exports.Line = undefined;

var _Line = __webpack_require__(/*! ./Line */ "./node_modules/rc-progress/es/Line.js");

var _Line2 = _interopRequireDefault(_Line);

var _Circle = __webpack_require__(/*! ./Circle */ "./node_modules/rc-progress/es/Circle.js");

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Line = _Line2.default;
exports.Circle = _Circle2.default;
exports.default = {
  Line: _Line2.default,
  Circle: _Circle2.default
};

/***/ }),

/***/ "./node_modules/rc-progress/es/types.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-progress/es/types.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};

var propTypes = exports.propTypes = {
  className: _propTypes2.default.string,
  percent: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  prefixCls: _propTypes2.default.string,
  strokeColor: _propTypes2.default.string,
  strokeLinecap: _propTypes2.default.oneOf(['butt', 'round', 'square']),
  strokeWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  style: _propTypes2.default.object,
  trailColor: _propTypes2.default.string,
  trailWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

/***/ }),

/***/ "./node_modules/react-aiot/src/style/theme-wordpress.scss":
/*!****************************************************************!*\
  !*** ./node_modules/react-aiot/src/style/theme-wordpress.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./public/src/AppTree.js":
/*!*******************************!*\
  !*** ./public/src/AppTree.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.latestQueriedFolder = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps; /** @module AppTree */


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _components = __webpack_require__(/*! ./components */ "./public/src/components/index.js");

var _renderOrderMenu = __webpack_require__(/*! ./others/renderOrderMenu */ "./public/src/others/renderOrderMenu.js");

var _renderOrderMenu2 = _interopRequireDefault(_renderOrderMenu);

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

var _reactAiot2 = _interopRequireDefault(_reactAiot);

var _util = __webpack_require__(/*! ./util */ "./public/src/util/index.js");

var _dragdrop = __webpack_require__(/*! ./util/dragdrop */ "./public/src/util/dragdrop.js");

var _immer = __webpack_require__(/*! immer */ "immer");

var _immer2 = _interopRequireDefault(_immer);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _filter = __webpack_require__(/*! ./others/filter */ "./public/src/others/filter.js");

var _permissions = __webpack_require__(/*! ./hooks/permissions */ "./public/src/hooks/permissions.js");

var _permissions2 = _interopRequireDefault(_permissions);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _sortable = __webpack_require__(/*! ./hooks/sortable */ "./public/src/hooks/sortable.js");

var _MetaBox = __webpack_require__(/*! ./components/MetaBox */ "./public/src/components/MetaBox.js");

var _MetaBox2 = _interopRequireDefault(_MetaBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The latest queried folder.
 * 
 * @type object
 */
var latestQueriedFolder = exports.latestQueriedFolder = { node: null };

_reactAiot.message.config({ top: 50 });

/**
 * The application tree handler for Real Media Library.
 * 
 * @param {string} id The HTML id (needed to localStorage support)
 * @param {object} [attachmentsBrowser] The attachments browser (for media grid view)
 * @param {boolean} [isModal=false] If true the given app tree is a modal dialog
 * @param {module:AppTree~AppTree~init} [init]
 * @see module:store.StoredAppTree
 * @see module:react-aiot~Tree
 * @extends React.Component
 */
var AppTree = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(AppTree, _React$Component);

    /**
     * Initialize properties and state for AIOTree component.
     * Also handles the responsiveness.
     */
    function AppTree(props) {
        _classCallCheck(this, AppTree);

        // Add respnsive handler for non-modal views
        var _this = _possibleConstructorReturn(this, (AppTree.__proto__ || Object.getPrototypeOf(AppTree)).call(this, props));

        _initialiseProps.call(_this);

        !props.isModal && (0, _jquery2.default)(window).resize(_this.handleWindowResize);
        var isMobile = _this._isMobile();

        // State refs (see https://github.com/reactjs/redux/issues/1793) and #resolveStateRefs
        _this.stateRefs = {
            keysCreatable: 'icon,iconActive,toolTipTitle,toolTipText,onClick,label'.split(','),
            keysToolbar: 'content,toolTipTitle,toolTipText,onClick,onCancel,onSave,modifier,label,save,menu'.split(','),

            // Icons
            ICON_OBJ_FOLDER_CLOSED: _util.ICON_OBJ_FOLDER_CLOSED,
            ICON_OBJ_FOLDER_OPEN: _util.ICON_OBJ_FOLDER_OPEN,
            ICON_OBJ_FOLDER_ROOT: _util.ICON_OBJ_FOLDER_ROOT,
            ICON_OBJ_FOLDER_COLLECTION: _util.ICON_OBJ_FOLDER_COLLECTION,
            ICON_OBJ_FOLDER_GALLERY: _util.ICON_OBJ_FOLDER_GALLERY,
            ICON_SETTINGS: _react2.default.createElement(_reactAiot.Icon, { type: 'setting' }),
            ICON_LOCKED: _react2.default.createElement(_reactAiot.Icon, { type: 'lock' }),
            ICON_ORDER: _react2.default.createElement(_components.DashIcon, { name: 'move' }),
            ICON_RELOAD: _react2.default.createElement(_reactAiot.Icon, { type: 'reload' }),
            ICON_RENAME: _react2.default.createElement(_reactAiot.Icon, { type: 'edit' }),
            ICON_TRASH: _react2.default.createElement(_reactAiot.Icon, { type: 'delete' }),
            ICON_SORT: _react2.default.createElement(_components.DashIcon, { name: 'sort' }),
            ICON_SAVE: _react2.default.createElement(_reactAiot.Icon, { type: 'save' }),
            ICON_ELLIPSIS: _react2.default.createElement(_reactAiot.Icon, { type: 'ellipsis' }),

            // Creatable
            handleCreatableClickBackButton: function handleCreatableClickBackButton() {
                return _this.handleCreatableClick();
            },
            handleCreatableClickFolder: function handleCreatableClickFolder() {
                return _this.handleCreatableClick('folder', 0);
            },
            handleCreatableClickCollection: function handleCreatableClickCollection() {
                return _this.handleCreatableClick('collection', 1);
            },
            handleCreatableClickGallery: function handleCreatableClickGallery() {
                return _this.handleCreatableClick('gallery', 2);
            },

            // Toolbar buttons
            renderOrderMenu: _renderOrderMenu2.default.bind(_this),
            handleOrderClick: _this.handleOrderClick,
            handleOrderCancel: _this.handleOrderCancel,
            handleReload: _this.handleReload,
            handleRenameClick: _this.handleRenameClick,
            handleRenameCancel: _this.handleRenameCancel,
            handleTrashModifier: function handleTrashModifier(body) {
                var node = _this.getTreeItemById();
                return node ? _react2.default.createElement(
                    _reactAiot.Popconfirm,
                    { placement: 'bottom', onConfirm: _this.handleTrash,
                        title: (0, _util.i18n)('deleteConfirm', { name: node.title }, 'maxWidth'),
                        okText: (0, _util.i18n)('ok'), cancelText: (0, _util.i18n)('cancel') },
                    body
                ) : body;
            },
            handleSortClick: function handleSortClick() {
                return _this._handleSortNode('sort');
            },
            handleSortCancel: function handleSortCancel() {
                return _this._handleSortNode();
            },
            handleDetailsClick: function handleDetailsClick() {
                return _this._handleDetails('details');
            },
            handleDetailsCancel: function handleDetailsCancel() {
                return _this._handleDetails();
            },
            handleDetailsSave: function handleDetailsSave() {
                return _this._handleDetails('save');
            },
            handleUserSettingsClick: function handleUserSettingsClick() {
                return _this._handleDetails('usersettings');
            },
            handleUserSettingsCancel: function handleUserSettingsCancel() {
                return _this._handleDetails();
            },
            handleUserSettingsSave: function handleUserSettingsSave() {
                return _this._handleDetails('save');
            }
        };

        // Determine selected id and fetch tree
        var selectedId = (0, _util.urlParam)('rml_folder');

        _this.attachmentsBrowser = props.attachmentsBrowser;
        _this.state = {
            // Custom
            currentFolderRestrictions: [],
            isModal: props.isModal,
            isMoveable: true,
            isWPAttachmentsSortMode: false, // See modal.js
            initialSelectedId: !selectedId || selectedId === 'all' ? 'all' : +selectedId,
            metaBoxId: false,
            metaBoxErrors: false,

            // Creatables
            availableCreatables: 'folder,collection,gallery'.split(','),
            selectedCreatableType: undefined, // The selected folder type
            creatable_folder: {
                icon: 'ICON_OBJ_FOLDER_CLOSED',
                iconActive: 'ICON_OBJ_FOLDER_OPEN',
                visibleInFolderType: [undefined, 0],
                cssClasses: 'page-title-action add-new-h2',
                toolTipTitle: 'i18n.creatable0ToolTipTitle',
                toolTipText: 'i18n.creatable0ToolTipText',
                label: '+',
                onClick: 'handleCreatableClickFolder'
            },
            creatable_collection: {
                icon: 'ICON_OBJ_FOLDER_COLLECTION',
                visibleInFolderType: [undefined, 0, 1],
                cssClasses: 'page-title-action add-new-h2',
                toolTipTitle: 'i18n.creatable1ToolTipTitle',
                toolTipText: 'i18n.creatable1ToolTipText',
                label: '+',
                onClick: 'handleCreatableClickCollection'
            },
            creatable_gallery: {
                icon: 'ICON_OBJ_FOLDER_GALLERY',
                visibleInFolderType: [1],
                visible: false,
                cssClasses: 'page-title-action add-new-h2',
                toolTipTitle: 'i18n.creatable2ToolTipTitle',
                toolTipText: 'i18n.creatable2ToolTipText',
                label: '+',
                onClick: 'handleCreatableClickGallery'
            },
            creatableBackButton: {
                cssClasses: 'page-title-action add-new-h2',
                label: 'i18n.cancel',
                onClick: 'handleCreatableClickBackButton'
            },

            // Toolbar buttons
            availableToolbarButtons: 'locked,usersettings,order,reload,rename,trash,sort,details'.split(','),
            toolbar_usersettings: {
                content: 'ICON_SETTINGS',
                visible: !!+_util.rmlOpts.userSettings,
                toolTipTitle: 'i18n.userSettingsToolTipTitle',
                toolTipText: 'i18n.userSettingsToolTipText',
                onClick: 'handleUserSettingsClick',
                onCancel: 'handleUserSettingsCancel',
                onSave: 'handleUserSettingsSave'
            },
            toolbar_locked: {
                content: 'ICON_LOCKED',
                visible: false,
                toolTipTitle: 'i18n.lockedToolTipTitle',
                toolTipText: '' // Lazy
            },
            toolbar_order: {
                content: 'ICON_ORDER',
                toolTipTitle: 'i18n.orderToolTipTitle',
                toolTipText: 'i18n.orderToolTipText',
                onClick: 'handleOrderClick',
                onCancel: 'handleOrderCancel',
                menu: 'resolve.renderOrderMenu',
                toolTipPlacement: 'topLeft',
                dropdownPlacement: 'bottomLeft'
            },
            toolbar_reload: {
                content: 'ICON_RELOAD',
                toolTipTitle: 'i18n.refreshToolTipTitle',
                toolTipText: 'i18n.refreshToolTipText',
                onClick: 'handleReload'
            },
            toolbar_rename: {
                content: 'ICON_RENAME',
                toolTipTitle: 'i18n.renameToolTipTitle',
                toolTipText: 'i18n.renameToolTipText',
                onClick: 'handleRenameClick',
                onCancel: 'handleRenameCancel',
                disabled: true
            },
            toolbar_trash: {
                content: 'ICON_TRASH',
                toolTipTitle: 'i18n.trashToolTipTitle',
                toolTipText: 'i18n.trashToolTipText',
                modifier: 'handleTrashModifier',
                disabled: true
            },
            toolbar_sort: {
                content: 'ICON_SORT',
                toolTipTitle: 'i18n.sortToolTipTitle',
                toolTipText: 'i18n.sortToolTipText',
                onClick: 'handleSortClick',
                onCancel: 'handleSortCancel'
            },
            toolbar_details: {
                content: 'ICON_ELLIPSIS',
                disabled: true,
                toolTipTitle: 'i18n.detailsToolTipTitle',
                toolTipText: 'i18n.detailsToolTipText',
                onClick: 'handleDetailsClick',
                onCancel: 'handleDetailsCancel',
                onSave: 'handleDetailsSave'
            },
            toolbarBackButton: {
                label: 'i18n.cancel',
                save: 'i18n.save'
            },

            // AIO
            isResizable: !isMobile,
            isSticky: !isMobile,
            isStickyHeader: !isMobile,
            isFullWidth: isMobile,
            style: isMobile ? { marginLeft: 10 } : {},
            isSortable: true,
            isSortableDisabled: false,
            isTreeBusy: false,
            isBusyHeader: false,
            sortableDelay: 100,
            headerStickyAttr: {
                top: '#wpadminbar'
            },
            isCreatableLinkDisabled: false,
            toolbarActiveButton: undefined,
            isTreeLinkDisabled: false
        };

        // What happens if the attachments browser is available? We will add a reference to this React element
        _this.attachmentsBrowser && (_this.attachmentsBrowser.controller.$RmlAppTree = _this);

        /**
         * Called on initialzation and allows you to modify the init state.
         * 
         * @callback module:AppTree~AppTree~init
         * @param {object} state The default state
         * @param {AppTree} tree The AppTree component instance
         * @returns {object} The new state
         */
        props.init && (_this.state = props.init(_this.state, _this));

        /**
         * The React AppTree instance gets constructed and you can modify it here.
         * 
         * @event module:util/hooks#tree/init
         * @param {object} state
         * @param {object} props
         * @this module:AppTree~AppTree
         */
        _util.hooks.call('tree/init', [_this.state, props], _this);
        _this.initialSelectedId = _this.state.initialSelectedId;
        return _this;
    }

    /**
     * Render AIO tree with tax switcher.
     */


    _createClass(AppTree, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$store = this.props.store,
                staticTree = _props$store.staticTree,
                tree = _props$store.tree,
                selectedId = _props$store.selectedId,
                _state = this.state,
                metaBoxId = _state.metaBoxId,
                metaBoxErrors = _state.metaBoxErrors,
                isBusyHeader = _state.isBusyHeader;

            return _react2.default.createElement(
                _reactAiot2.default,
                _extends({ ref: this.doRef, id: this.props.id, rootId: +_util.rmlOpts.rootId,
                    staticTree: staticTree, selectedId: selectedId, tree: tree.length > 0 ? tree : [],
                    opposite: document.getElementById('wpbody-content'), onSelect: this.handleSelect,
                    onRenameClose: this.handleRenameClose, onAddClose: this.handleAddClose,
                    onNodeExpand: function onNodeExpand() {
                        return setTimeout(function () {
                            return (0, _dragdrop.droppable)(_this2);
                        }, 200);
                    }, renderItem: this.onTreeNodeRender,
                    onNodePressF2: this.handleRenameClick, onSort: this.handleSort, onResize: this.handleResize,
                    headline: _react2.default.createElement(
                        'span',
                        { style: { paddingRight: 5 } },
                        (0, _util.i18n)('folders')
                    ),
                    renameSaveText: this.stateRefs.ICON_SAVE, renameAddText: this.stateRefs.ICON_SAVE,
                    noFoldersTitle: (0, _util.i18n)('noFoldersTitle'), noFoldersDescription: (0, _util.i18n)('noFoldersDescription'),
                    noSearchResult: (0, _util.i18n)('noSearchResult'), innerClassName: 'wrap', theme: 'wordpress',
                    creatable: this.renderCreatables(), toolbar: this.renderToolbarButtons()
                }, this.state),
                metaBoxId !== false && _react2.default.createElement(_MetaBox2.default, { patcher: function patcher(_patcher) {
                        return _this2.metaboxPatcher = _patcher;
                    }, busy: isBusyHeader,
                    errors: metaBoxErrors, id: metaBoxId })
            );
        }

        /**
         * @returns {object}
         */


        /**
         * @returns {object}
         */

    }, {
        key: 'resolveStateRefs',


        /**
         * Iterates all available values in an object and resolve it with the available
         * this::stateRefs.
         * 
         * @returns {object}
         */
        value: function resolveStateRefs(_obj, keys) {
            var obj = Object.assign({}, _obj);
            var value = void 0,
                newValue = void 0;
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && (value = obj[key]) && this.stateRefs[keys].indexOf(key) > -1 && typeof value === 'string' && (newValue = this.resolveStateRef(value))) {
                    obj[key] = newValue;
                }
            }
            return obj;
        }

        /**
         * Resolve single state ref key.
         * 
         * @returns {object}
         */

    }, {
        key: 'resolveStateRef',
        value: function resolveStateRef(key) {
            if (typeof key !== 'string') {
                return;
            }
            if (key.indexOf('i18n.') === 0) {
                return (0, _util.i18n)(key.substr(5));
            } else if (key.indexOf('resolve.') === 0) {
                return this.stateRefs[key.substr(8)]();
            } else if (this.stateRefs[key]) {
                return this.stateRefs[key];
            }
        }
    }, {
        key: 'componentWillUnmount',


        /**
         * Remove resize handler.
         */
        value: function componentWillUnmount() {
            (0, _jquery2.default)(window).off('resize', this.handleWindowResize);
        }

        /**
         * Fetch initial tree.
         */

    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.fetchTree(this.initialSelectedId);
        }

        /**
         * Initiate draggable and droppable
         */

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _dragdrop.draggable)(this);
            (0, _dragdrop.droppable)(this);
            this.handleResize();

            // If order should be enabled in list mode, then activate it now
            if (_util.rmlOpts.listMode === 'list' && window.location.hash === '#order') {
                this.handleOrderClick();
                window.location.hash = '';
            }
        }

        /**
         * When the component updates the droppable zone is reinitialized.
         * Also the toolbar buttons gets disabled or enabled depending on selected node.
         */

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var selectedCreatableType = this.state.selectedCreatableType,
                selected = this.getTreeItemById();

            if (selected && selectedCreatableType !== selected.properties.type || !selected && selectedCreatableType !== undefined) {
                this._updateCreatableButtons(selected ? selected.properties.type : undefined);
            }

            // Enable / Disable toolbar buttons
            this._updateToolbarButtons();

            // Enable locked toolbar item
            (0, _permissions2.default)(this);

            (0, _dragdrop.draggable)(this);
            (0, _dragdrop.droppable)(this);
        }

        /**
         * Return the backbone filter view for the given attachments browser.
         * 
         * @returns object
         */

    }, {
        key: 'getBackboneFilter',
        value: function getBackboneFilter() {
            var attachmentsBrowser = this.attachmentsBrowser;

            return attachmentsBrowser && attachmentsBrowser.toolbar.get('rml_folder');
        }

        /**
         * Get the selected node id.
         * 
         * @returns {string|int}
         */

    }, {
        key: 'getSelectedId',
        value: function getSelectedId() {
            return this.props.store.selectedId;
        }

        /**
         * Get tree item by id.
         * 
         * @param {string|int} [id=Current]
         * @param {boolean} [excludeStatic=true]
         * @returns {object} Tree node
         */

    }, {
        key: 'getTreeItemById',
        value: function getTreeItemById() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelectedId();
            var excludeStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.props.store.getTreeItemById(id, excludeStatic);
        }

        /**
         * Update a tree item by id.
         * 
         * @param {function|array} callback The callback with one argument (node draft) and should return the new node.
         * @param {string|int} [id=Current] The id which should be updated
         */

    }, {
        key: 'updateTreeItemById',
        value: function updateTreeItemById(callback) {
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getSelectedId();

            var node = this.props.store.getTreeItemById(id);
            node && node.setter(callback);
        }

        /**
         * Updates the create node. That's the node without id and the input field.
         * 
         * @param {function} callback The callback with one argument (node draft) and should return the new node.
         */

    }, {
        key: 'updateCreateNode',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(callback) {
                var createRoot, node;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // Root update
                                createRoot = this.state.createRoot;

                                createRoot && this.setState({
                                    createRoot: (0, _immer2.default)(createRoot, callback)
                                });

                                // Child node update
                                node = this.getTreeItemById();

                                node && node.$create && this.updateTreeItemById(function (node) {
                                    node.$create = (0, _immer2.default)(node.$create, callback);
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function updateCreateNode(_x4) {
                return _ref.apply(this, arguments);
            }

            return updateCreateNode;
        }()

        /**
         * Handles the creatable click and creates a new node depending on the selected one.
         * 
         * @method
         */


        /**
         * A node gets selected. Depending on the fast mode the page gets reloaded
         * or the wp list table gets reloaded.
         * 
         * @method
         */


        /**
         * When resizing the container set ideal width for attachments.
         */


        /**
         * Handle order click.
         * 
         * @method
         */


        /**
         * Handle order cancel.
         * 
         * @method
         */


        /**
         * Handle rename click and enable the input field if necessery.
         * 
         * @method
         */


        /**
         * Handle rename cancel.
         * 
         * @method
         */


        /**
         * Handle rename close and depending on the save state create the new node.
         * 
         * @method
         */


        /**
         * Handle add close and remove the new node.
         * 
         * @method
         */


        /**
         * Handle trashing of a category. If the category has subcategories the
         * trash is forbidden.
         * 
         * @method
         */


        /**
         * Handle categories sorting and update the tree so the changes are visible. If sorting
         * is cancelled the old tree gets restored.
         * 
         * @method
         */


        /**
         * Handle responsiveness on window resize.
         * 
         * @method
         */


        /**
         * Handle refesh of content.
         */

    }, {
        key: 'handleDestroy',
        value: function handleDestroy() {
            _reactDom2.default.unmountComponentAtNode(this.ref.container.parentNode);
        }

        /**
         * A node item should be an observer (mobx).
         */


        /**
         * Handle rename node states (helper).
         * 
         * @method
         */


        /**
         * Checks if the current window size is mobile.
         * 
         * @returns {boolean}
         * @method
         */


        /**
         * Handle the sort node button.
         * 
         * @method
         */


        /**
         * Handle the details meta box.
         */

    }, {
        key: '_handleBackboneFilterSelection',


        /**
         * Set the attachments browser location.
         * 
         * @param {int} [id=Current selected id] The id
         */
        value: function _handleBackboneFilterSelection() {
            var _this3 = this;

            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelectedId();

            var attachmentsBrowser = this.attachmentsBrowser;
            if (attachmentsBrowser) {
                setTimeout(function () {
                    var backboneFilter = _this3.getBackboneFilter();
                    backboneFilter && backboneFilter.$el.val(id).change();

                    // Reset bulk select in no-modal mode
                    attachmentsBrowser.$el.parents('.media-modal').size() === 0 && attachmentsBrowser.controller.state().get('selection').reset();

                    // Check if folder needs refresh
                    var store = _this3.props.store;

                    if (store.foldersNeedsRefresh.indexOf(id) > -1) {
                        store.removeFoldersNeedsRefresh(id);
                        _this3.handleReload();
                    }
                }, 0);
            }
        }

        /**
         * Update the creatable buttons regarding the selected type.
         * 
         * @param {int} selectedCreatableType
         */

    }, {
        key: '_updateCreatableButtons',
        value: function _updateCreatableButtons(selectedCreatableType) {
            var _this4 = this;

            this.setState({ selectedCreatableType: selectedCreatableType });

            this.state.availableCreatables.forEach(function (c) {
                return _this4.setState(_defineProperty({}, 'creatable_' + c, (0, _immer2.default)(_this4.state['creatable_' + c], function (v) {
                    v.visible = v.visibleInFolderType.indexOf(selectedCreatableType) > -1;
                })));
            });
        }
    }, {
        key: '_updateToolbarButtons',
        value: function _updateToolbarButtons() {
            var _state2 = this.state,
                isWPAttachmentsSortMode = _state2.isWPAttachmentsSortMode,
                toolbar_order = _state2.toolbar_order,
                toolbar_rename = _state2.toolbar_rename,
                toolbar_trash = _state2.toolbar_trash,
                toolbar_details = _state2.toolbar_details,
                selected = this.getTreeItemById(),
                disableIfStatic = !selected,
                restrictions = selected && selected.properties && selected.properties.restrictions || [];


            var disableOrder = disableIfStatic || isWPAttachmentsSortMode || selected && selected.contentCustomOrder === 2;
            toolbar_order.disabled !== disableOrder && this.setState({
                toolbar_order: (0, _immer2.default)(toolbar_order, function (draft) {
                    draft.disabled = disableOrder;
                })
            });

            var disableRename = disableIfStatic || restrictions.indexOf('ren') > -1;
            toolbar_rename.disabled !== disableRename && this.setState({
                toolbar_rename: (0, _immer2.default)(toolbar_rename, function (draft) {
                    draft.disabled = disableRename;
                })
            });

            var disableTrash = disableIfStatic || restrictions.indexOf('del') > -1;
            toolbar_trash.disabled !== disableTrash && this.setState({
                toolbar_trash: (0, _immer2.default)(toolbar_trash, function (draft) {
                    draft.disabled = disableTrash;
                })
            });

            toolbar_details.disabled !== disableIfStatic && this.setState({
                toolbar_details: (0, _immer2.default)(toolbar_details, function (draft) {
                    draft.disabled = disableIfStatic;
                })
            });
        }

        /**
         * Fetch folder tree.
         */

    }, {
        key: 'fetchTree',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(setSelectedId) {
                var _ref3, slugs;

                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.setState({ isTreeBusy: true });
                                _context2.next = 3;
                                return this.props.store.fetchTree(setSelectedId);

                            case 3:
                                _ref3 = _context2.sent;
                                slugs = _ref3.slugs;


                                // Modify all available attachments browsers filter
                                (0, _jquery2.default)(_filter.FILTER_SELECTOR).each(function () {
                                    var backboneFilter = (0, _jquery2.default)(this).data('backboneView');
                                    backboneFilter && backboneFilter.createFilters(slugs);
                                });

                                this._handleBackboneFilterSelection();

                                // Modify this tree
                                this.setState({ isTreeBusy: false });
                                latestQueriedFolder.node = this.props.store.selected;

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function fetchTree(_x6) {
                return _ref2.apply(this, arguments);
            }

            return fetchTree;
        }()

        /**
         * Update the folder count. If you pass no argument the folder count is
         * requested from server.
         * 
         * @param {object} counts Key value map of folder and count
         */

    }, {
        key: 'fetchCounts',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(counts) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.props.store.fetchCounts(counts);

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function fetchCounts(_x7) {
                return _ref4.apply(this, arguments);
            }

            return fetchCounts;
        }()
    }]);

    return AppTree;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.renderToolbarButtons = function () {
        var _state3 = _this5.state,
            availableToolbarButtons = _state3.availableToolbarButtons,
            toolbarBackButton = _state3.toolbarBackButton,
            toolbar = {
            buttons: {},
            backButton: _this5.resolveStateRefs(toolbarBackButton, 'keysToolbar')
        };

        for (var i = 0; i < availableToolbarButtons.length; i++) {
            toolbar.buttons[availableToolbarButtons[i]] = _this5.resolveStateRefs(_this5.state['toolbar_' + availableToolbarButtons[i]], 'keysToolbar');
        }
        return toolbar;
    };

    this.renderCreatables = function () {
        var _state4 = _this5.state,
            availableCreatables = _state4.availableCreatables,
            creatableBackButton = _state4.creatableBackButton,
            creatable = {
            buttons: {},
            backButton: _this5.resolveStateRefs(creatableBackButton, 'keysCreatable')
        };

        for (var i = 0; i < availableCreatables.length; i++) {
            creatable.buttons[availableCreatables[i]] = _this5.resolveStateRefs(_this5.state['creatable_' + availableCreatables[i]], 'keysCreatable');
        }
        return creatable;
    };

    this.doRef = function (ref) {
        return _this5.ref = ref;
    };

    this.handleCreatableClick = function (type, typeInt) {
        var createRoot = undefined,
            $create = undefined;

        if (type) {
            // Activate create
            var creatable = _this5.state['creatable_' + type],
                newNode = {
                $rename: true,
                icon: _this5.resolveStateRef(creatable.icon),
                iconActive: _this5.resolveStateRef(creatable.iconActive),
                parent: +_util.rmlOpts.rootId,
                typeInt: typeInt
            },
                selectedId = _this5.getSelectedId();
            if (typeof selectedId !== 'number' || selectedId === +_util.rmlOpts.rootId) {
                createRoot = newNode;
            } else {
                $create = newNode;
                newNode.parent = selectedId;
            }
        }

        _this5.setState({
            isTreeLinkDisabled: !!type,
            isCreatableLinkCancel: !!type,
            isToolbarActive: !type,
            createRoot: createRoot
        });
        _this5.updateTreeItemById(function (node) {
            node.$create = $create;
        });
    };

    this.handleSelect = function (id) {
        // Do nothing when sort mode is active
        if (_this5.state.toolbarActiveButton === 'sort') {
            return;
        }

        var select = _this5.getTreeItemById(id, false),
            setter = function setter(_id, $busy) {
            latestQueriedFolder.node = select;
            latestQueriedFolder.node.setter(function (node) {
                node.$busy = $busy;
                node.selected = true;
            });
        };

        if (_this5.attachmentsBrowser) {
            !id && _this5.attachmentsBrowser.collection.props.set({ ignore: +new Date() }); // Reload the view
            _this5._handleBackboneFilterSelection(select.id);
        } else {
            var href = window.location.href;
            (0, _util.urlParam)('orderby') === 'rml' && (href = href.split('?')[0]);
            select.properties && select.contentCustomOrder === 1 && (href = (0, _sortable.orderUrl)(href));
            window.location.href = (0, _util.addUrlParam)(href, 'rml_folder', select.id);
        }
        setter(select.id, !_this5.attachmentsBrowser);
    };

    this.handleResize = function () {
        var attachmentsBrowser = _this5.attachmentsBrowser;

        attachmentsBrowser && attachmentsBrowser.attachments.setColumns();
    };

    this.handleOrderClick = function () {
        if ((0, _sortable.toggleSortable)(_this5.getTreeItemById(), true, _this5.attachmentsBrowser)) {
            _this5.setState({
                isMoveable: false,
                toolbarActiveButton: 'order',
                toolbarBackButton: (0, _immer2.default)(_this5.state.toolbarBackButton, function (draft) {
                    draft.label = 'i18n.back';
                })
            });
        }
    };

    this.handleOrderCancel = function () {
        (0, _sortable.toggleSortable)(_this5.getTreeItemById(), false, _this5.attachmentsBrowser);
        _this5.setState({
            isMoveable: true,
            toolbarActiveButton: undefined,
            toolbarBackButton: (0, _immer2.default)(_this5.state.toolbarBackButton, function (draft) {
                draft.label = 'i18n.cancel';
            })
        });
    };

    this.handleRenameClick = function () {
        return _this5._handleRenameNode('rename', true, true, true);
    };

    this.handleRenameCancel = function () {
        return _this5._handleRenameNode(undefined, false, false, undefined);
    };

    this.handleRenameClose = function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(save, inputValue, _ref6) {
            var id = _ref6.id;

            var hide, _ref7, name;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (!(save && inputValue.length)) {
                                _context4.next = 19;
                                break;
                            }

                            hide = _reactAiot.message.loading((0, _util.i18n)('renameLoadingText', { name: inputValue }));
                            _context4.prev = 2;
                            _context4.next = 5;
                            return _this5.props.store.getTreeItemById(id).setName(inputValue);

                        case 5:
                            _ref7 = _context4.sent;
                            name = _ref7.name;

                            _reactAiot.message.success((0, _util.i18n)('renameSuccess', { name: name }));
                            _this5.handleRenameCancel();
                            _context4.next = 14;
                            break;

                        case 11:
                            _context4.prev = 11;
                            _context4.t0 = _context4['catch'](2);

                            _reactAiot.message.error(_context4.t0.responseJSON.message);

                        case 14:
                            _context4.prev = 14;

                            hide();
                            return _context4.finish(14);

                        case 17:
                            _context4.next = 20;
                            break;

                        case 19:
                            _this5.handleRenameCancel();

                        case 20:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this5, [[2, 11, 14, 17]]);
        }));

        return function (_x8, _x9, _x10) {
            return _ref5.apply(this, arguments);
        };
    }();

    this.handleAddClose = function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(save, name, _ref9) {
            var parent = _ref9.parent,
                typeInt = _ref9.typeInt;
            var hide, newObj, backboneFilter, lastSlugs;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!save) {
                                _context5.next = 21;
                                break;
                            }

                            _this5.updateCreateNode(function (node) {
                                node.$busy = true;
                            });
                            hide = _reactAiot.message.loading((0, _util.i18n)('addLoadingText', { name: name }));
                            _context5.prev = 3;
                            _context5.next = 6;
                            return _this5.props.store.persist(name, { parent: parent, typeInt: typeInt }, function () {
                                return _this5.handleCreatableClick();
                            });

                        case 6:
                            newObj = _context5.sent;

                            _reactAiot.message.success((0, _util.i18n)('addSuccess', { name: name }));

                            // Modify all available attachments browsers filter
                            backboneFilter = void 0, lastSlugs = void 0;

                            (0, _jquery2.default)(_filter.FILTER_SELECTOR).each(function () {
                                backboneFilter = (0, _jquery2.default)(this).data('backboneView');
                                if (backboneFilter) {
                                    lastSlugs = backboneFilter.lastSlugs;
                                    lastSlugs.names.push('(NEW) ' + name);
                                    lastSlugs.slugs.push(newObj.id);
                                    lastSlugs.types.push(typeInt);
                                    backboneFilter.createFilters(lastSlugs);
                                }
                            });
                            _context5.next = 16;
                            break;

                        case 12:
                            _context5.prev = 12;
                            _context5.t0 = _context5['catch'](3);

                            _reactAiot.message.error(_context5.t0.responseJSON.message);
                            _this5.updateCreateNode(function (node) {
                                node.$busy = false;
                            });

                        case 16:
                            _context5.prev = 16;

                            hide();
                            return _context5.finish(16);

                        case 19:
                            _context5.next = 22;
                            break;

                        case 21:
                            _this5.handleCreatableClick();

                        case 22:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this5, [[3, 12, 16, 19]]);
        }));

        return function (_x11, _x12, _x13) {
            return _ref8.apply(this, arguments);
        };
    }();

    this.handleTrash = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        var node, hide, parentId;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        node = _this5.getTreeItemById();

                        // Check if subdirectories

                        if (!node.childNodes.filter(function (node) {
                            return node.$visible;
                        }).length) {
                            _context6.next = 3;
                            break;
                        }

                        return _context6.abrupt('return', _reactAiot.message.error((0, _util.i18n)('deleteFailedSub', { name: node.title })));

                    case 3:
                        hide = _reactAiot.message.loading(_react2.default.createElement(
                            'span',
                            null,
                            'Deleteing ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                node.title
                            ),
                            '...'
                        ));
                        _context6.prev = 4;
                        _context6.next = 7;
                        return node.trash();

                    case 7:
                        _reactAiot.message.success((0, _util.i18n)('deleteSuccess', { name: node.title }));

                        // Select parent
                        parentId = (0, _reactAiot.getTreeParentById)(node.id, _this5.props.store.tree);

                        _this5.handleSelect(parentId === 0 ? +_util.rmlOpts.rootId : parentId);
                        _context6.next = 15;
                        break;

                    case 12:
                        _context6.prev = 12;
                        _context6.t0 = _context6['catch'](4);

                        _reactAiot.message.error(_context6.t0.responseJSON.message);

                    case 15:
                        _context6.prev = 15;

                        hide();
                        return _context6.finish(15);

                    case 18:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, _this5, [[4, 12, 15, 18]]);
    }));

    this.handleSort = function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(props) {
            var hide, toolbarActiveButton, store;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _this5.setState({
                                isSortableBusy: true,
                                isToolbarBusy: true
                            });

                            hide = _reactAiot.message.loading((0, _util.i18n)('sortLoadingText')), toolbarActiveButton = _this5.state.toolbarActiveButton, store = _this5.props.store;
                            _context7.prev = 2;
                            _context7.next = 5;
                            return store.handleSort(props);

                        case 5:
                            _reactAiot.message.success((0, _util.i18n)('sortedSuccess'));
                            _context7.next = 11;
                            break;

                        case 8:
                            _context7.prev = 8;
                            _context7.t0 = _context7['catch'](2);

                            _reactAiot.message.error(_context7.t0.responseJSON.message);

                        case 11:
                            _context7.prev = 11;

                            hide();
                            _this5._handleSortNode(toolbarActiveButton, false);
                            return _context7.finish(11);

                        case 15:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, _this5, [[2, 8, 11, 15]]);
        }));

        return function (_x14) {
            return _ref11.apply(this, arguments);
        };
    }();

    this.handleWindowResize = function () {
        var isMobile = _this5._isMobile();
        _this5.setState({
            isSticky: !isMobile,
            isStickyHeader: !isMobile,
            isResizable: !isMobile,
            isFullWidth: isMobile,
            style: isMobile ? { marginLeft: 10 } : {}
        });
    };

    this.handleReload = function () {
        _this5.handleSelect();
    };

    this.onTreeNodeRender = function (createTreeNode, TreeNode, node) {
        return _react2.default.createElement(
            _mobxReact.Observer,
            { key: node.id },
            function () {
                return createTreeNode(node);
            }
        );
    };

    this._handleRenameNode = function (toolbarActiveButton, isCreatableLinkDisabled, isTreeLinkDisabled, nodeRename) {
        _this5.setState({ // Make other nodes editable / not editable
            isCreatableLinkDisabled: isCreatableLinkDisabled,
            isTreeLinkDisabled: isTreeLinkDisabled,
            toolbarActiveButton: toolbarActiveButton
        });
        _this5.updateTreeItemById(function (node) {
            // Make selected node editable / not editable
            node.$rename = nodeRename;
        });
    };

    this._isMobile = function () {
        return (0, _jquery2.default)(window).width() <= 700;
    };

    this._handleSortNode = function (toolbarActiveButton, isBusy) {
        _this5.setState({
            isCreatableLinkDisabled: !!toolbarActiveButton,
            toolbarActiveButton: toolbarActiveButton,
            sortableDelay: toolbarActiveButton ? 0 : 100,
            toolbarBackButton: (0, _immer2.default)(_this5.state.toolbarBackButton, function (draft) {
                draft.label = 'i18n.' + (toolbarActiveButton ? 'back' : 'cancel');
            })
        });

        typeof isBusy === 'boolean' && _this5.setState({ isSortableBusy: isBusy });
        typeof isBusy === 'boolean' && _this5.setState({ isToolbarBusy: isBusy });
    };

    this._handleDetails = function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(action) {
            var message;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            action !== 'save' && _this5.setState({
                                toolbarActiveButton: action,
                                metaBoxId: action ? action === 'usersettings' ? action : _this5.props.store.selectedId : false
                            });

                            if (!(action === 'save')) {
                                _context8.next = 16;
                                break;
                            }

                            _this5.setState({ isBusyHeader: true, metaBoxErrors: [] });
                            _context8.prev = 3;
                            _context8.next = 6;
                            return _this5.metaboxPatcher();

                        case 6:
                            _this5._handleDetails();
                            _context8.next = 13;
                            break;

                        case 9:
                            _context8.prev = 9;
                            _context8.t0 = _context8['catch'](3);
                            message = _context8.t0.responseJSON.message;

                            _this5.setState({ metaBoxErrors: message });

                        case 13:
                            _context8.prev = 13;

                            _this5.setState({ isBusyHeader: false });
                            return _context8.finish(13);

                        case 16:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, _this5, [[3, 9, 13, 16]]);
        }));

        return function (_x15) {
            return _ref12.apply(this, arguments);
        };
    }();
}, _temp)) || _class) || _class);
exports.default = AppTree;

/***/ }),

/***/ "./public/src/components/Breadcrumb.js":
/*!*********************************************!*\
  !*** ./public/src/components/Breadcrumb.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @module components/Breadcrumb */

var ICON_OBJ_SEP = _react2.default.createElement(_reactAiot.Icon, { type: 'right' });

/**
 * Simple breadcrumbs with arrows and a home icon.
 * 
 * @property {string[]} path The pathes
 * @type React.Element
 */

exports.default = function (_ref) {
    var path = _ref.path;

    var i = 0; // Use counter as key
    return _react2.default.createElement(
        'div',
        null,
        _util.ICON_OBJ_FOLDER_ROOT,
        '\xA0\xA0',
        path.map(function (item) {
            return _react2.default.createElement(
                'span',
                { key: i++ },
                item,
                '\xA0',
                i < path.length && ICON_OBJ_SEP,
                '\xA0'
            );
        })
    );
};

/***/ }),

/***/ "./public/src/components/MetaBox.js":
/*!******************************************!*\
  !*** ./public/src/components/MetaBox.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /** @module components/MetaBox */

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Show a meta box for the selected folder id. It also supports
 * user settings.
 * 
 * @property {string|int} id The id of the folder or 'usersettings'
 * @property {module:components/MetaBox~MetaBox~patcher} patcher
 * @extends React.Component
 */
var MetaBox = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(MetaBox, _React$Component);

    function MetaBox(props) {
        var _this2 = this;

        _classCallCheck(this, MetaBox);

        var _this = _possibleConstructorReturn(this, (MetaBox.__proto__ || Object.getPrototypeOf(MetaBox)).call(this, props));

        _this.handleRef = function (ref) {
            _this.refSpan = ref;

            /**
             * The MetaBox ref element is ready and created.
             * 
             * @event module:util/hooks#folder/meta
             * @param {HTMLElement} ref The reference
             * @param {string|id} id The folder id or 'usersettings'
             * @param {module:store~Store} store The store
             */
            _util.hooks.call('folder/meta', [ref, _this.state.id, _this.props.store]);
            var patcher = _this.props.patcher;

            /**
             * This callback is fired when the ref is created
             * 
             * @callback module:components/MetaBox~MetaBox~patcher
             * @param {function} handleSave Fire this function if you want to serialize the data and save to server (async)
             * @param {HTMLElement} ref The meta box container
             */

            patcher && patcher(_this.handleSave, ref);
        };

        _this.handleSave = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var form, serialize, data, url, response;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            form = (0, _jquery2.default)(_this.refSpan).children('form'), serialize = form.serializeArray(), data = {};

                            _jquery2.default.each(serialize, function (key, value) {
                                return data[value.name] = value.value;
                            });

                            /**
                             * The MetaBox is serialized and ready to send.
                             * 
                             * @event module:util/hooks#folder/meta/serialize
                             * @param {string|id} id The folder id or 'usersettings'
                             * @param {module:store~Store} store The store
                             * @param {object} data The data prepared for the server so you can perhaps modify it
                             * @param {HTMLElement} form The form container
                             */
                            _util.hooks.call('folder/meta/serialize', [_this.state.id, _this.props.store, data, form]);
                            url = _this.state.id === 'usersettings' ? 'usersettings' : 'folders/' + _this.state.id + '/meta';
                            _context.next = 6;
                            return (0, _util.ajax)(url, {
                                method: 'PUT',
                                data: data
                            });

                        case 6:
                            response = _context.sent;


                            /**
                             * The MetaBox is saved successfully.
                             * 
                             * @event module:util/hooks#folder/meta/saved
                             * @param {string|id} id The folder id or 'usersettings'
                             * @param {object} response The server response
                             * @param {object} data The data sent to the server
                             */
                            _util.hooks.call('folder/meta/saved', [_this.state.id, response, data]);

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));


        _this.state = {
            id: 0, // The current visible id
            html: '' // The html
        };
        return _this;
    }

    _createClass(MetaBox, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.handleAjax(this.props, this.state);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            this.handleAjax.apply(this, arguments);
        }
    }, {
        key: 'handleAjax',
        value: function handleAjax(nextProps, nextState) {
            var _this3 = this;

            // Loading phase
            if (nextProps.id !== this.state.id) {
                this.state.id = nextProps.id; // Avoid rerendering
                this.state.html = '';
                var url = nextProps.id === 'usersettings' ? 'usersettings' : 'folders/' + nextProps.id + '/meta';
                (0, _util.ajax)(url).then(function (_ref2) {
                    var html = _ref2.html;

                    _this3.setState({ html: html });
                }, function () {
                    // An error occured
                    _this3.setState({
                        html: ''
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var selected = void 0;
            if (this.props.id === 'usersettings') {
                selected = {
                    icon: _react2.default.createElement(_reactAiot.Icon, { type: 'setting' }),
                    title: _util.rmlOpts.lang.userSettingsToolTipTitle
                };
            } else {
                selected = this.props.store.getTreeItemById(this.props.id, false);
            }
            var html = this.state.html,
                _props = this.props,
                _props$busy = _props.busy,
                busy = _props$busy === undefined ? false : _props$busy,
                _props$errors = _props.errors,
                errors = _props$errors === undefined ? [] : _props$errors;

            if (!selected) {
                return null;
            }

            return _react2.default.createElement(
                _reactAiot.Spin,
                { spinning: !html || busy, size: 'small' },
                _react2.default.createElement(
                    'div',
                    { className: 'rml-postbox' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        _react2.default.createElement(_reactAiot.Icon, { type: 'ellipsis' }),
                        ' ',
                        selected.icon,
                        ' ',
                        selected.title
                    ),
                    errors.length > 0 && _react2.default.createElement(
                        'ul',
                        null,
                        errors.map(function (e, i) {
                            return _react2.default.createElement(
                                'li',
                                { key: i },
                                e
                            );
                        })
                    ),
                    html && _react2.default.createElement(
                        'div',
                        { className: 'inside' },
                        _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: html }, style: { display: html ? 'block' : 'none' },
                            ref: this.handleRef })
                    )
                )
            );
        }
    }]);

    return MetaBox;
}(_react2.default.Component)) || _class) || _class);

/**
 * Wait for the input field for the cover image and create a media picker.
 * 
 * @see https://wordpress.stackexchange.com/questions/190987/how-do-i-create-a-custom-add-media-button-modal
 */

_util.hooks.register('wprfc/metaCoverImage', function (data) {
    var inputFilename = (0, _jquery2.default)(this),
        inputId = (0, _jquery2.default)(this).prev();
    (0, _jquery2.default)('<div class="rml-drop-zone">' + _util.rmlOpts.lang.coverImageDropHere + '</div>').insertAfter((0, _jquery2.default)(this)).droppable({
        tolerance: 'pointer',
        drop: function drop(event, ui) {
            var draggable = ui.draggable,
                id = draggable.data('id'),
                filename = draggable.parents('.attachments-browser').data('backboneView').collection.get(id).get('filename');

            inputFilename.val(filename);
            inputId.val(id);
        }
    });
});

exports.default = MetaBox;

/***/ }),

/***/ "./public/src/components/UploadMessage.js":
/*!************************************************!*\
  !*** ./public/src/components/UploadMessage.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _ = __webpack_require__(/*! ./ */ "./public/src/components/index.js");

var _store = __webpack_require__(/*! ../store */ "./public/src/store/index.js");

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Show the current uploading file with progress bar and status. It uses
 * the main store to read the current upload.
 * 
 * @type React.Element
 */
exports.default = (0, _store.injectAndObserve)(function (_ref) {
    var store = _ref.store;
    var currentUpload = store.currentUpload,
        uploadTotalRemainTime = store.uploadTotalRemainTime,
        readableUploadTotalLoaded = store.readableUploadTotalLoaded,
        readableUploadTotalSize = store.readableUploadTotalSize,
        readableUploadTotalBytesPerSec = store.readableUploadTotalBytesPerSec;

    if (!currentUpload) {
        return null;
    }
    var name = currentUpload.name,
        previewSrc = currentUpload.previewSrc,
        percent = currentUpload.percent,
        _currentUpload$node = currentUpload.node,
        title = _currentUpload$node.title,
        icon = _currentUpload$node.icon,
        readableLoaded = currentUpload.readableLoaded,
        readableSize = currentUpload.readableSize,
        deny = currentUpload.deny,
        count = store.uploading.length;


    return _react2.default.createElement(
        'span',
        { className: 'rml-upload' },
        !!previewSrc && _react2.default.createElement(
            'div',
            { className: 'rml-upload-image' },
            _react2.default.createElement('img', { src: previewSrc })
        ),
        _react2.default.createElement(
            'div',
            { className: 'rml-upload-container' },
            _react2.default.createElement(
                'strong',
                { className: 'rml-upload-file' },
                name
            ),
            _react2.default.createElement(
                'div',
                { className: 'rml-upload-folder' },
                icon,
                ' ',
                title
            ),
            _react2.default.createElement(_.Progress, { percent: percent, size: 'small', status: percent >= 100 ? 'success' : 'active' }),
            _react2.default.createElement(
                'div',
                { className: 'rml-upload-progress' },
                count > 1 && _react2.default.createElement(
                    'span',
                    null,
                    (0, _util.i18n)('filesRemaining', { count: count }),
                    ' \xB7\xA0'
                ),
                percent >= 100 ? (0, _util.i18n)('receiveData') : _react2.default.createElement(
                    'span',
                    null,
                    readableLoaded,
                    ' / ',
                    readableSize
                ),
                _react2.default.createElement('br', null),
                uploadTotalRemainTime,
                ' \xB7 ',
                readableUploadTotalBytesPerSec,
                '/s\xA0',
                count > 1 ? _react2.default.createElement(
                    'span',
                    null,
                    '\xB7 ',
                    readableUploadTotalLoaded,
                    ' / ',
                    readableUploadTotalSize
                ) : ''
            ),
            !!deny && _react2.default.createElement(
                'div',
                { className: 'rml-upload-deny' },
                _react2.default.createElement(_reactAiot.Icon, { type: 'warning' }),
                ' ',
                deny
            )
        )
    );
}); /** @module components/UploadMessage */

/***/ }),

/***/ "./public/src/components/index.js":
/*!****************************************!*\
  !*** ./public/src/components/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashIcon = exports.Progress = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _progress = __webpack_require__(/*! antd/lib/progress */ "./node_modules/antd/lib/progress/index.js");

var _progress2 = _interopRequireDefault(_progress);

__webpack_require__(/*! antd/lib/progress/style/index.css */ "./node_modules/antd/lib/progress/style/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @module components */

exports.Progress = _progress2.default;

/**
 * Create a WordPress dash icon.
 * 
 * @property {string} name The icon
 * @see https://developer.wordpress.org/resource/dashicons/ Available icons
 * @returns React.Element
 * @function
 */

var DashIcon = exports.DashIcon = function DashIcon(_ref) {
  var name = _ref.name;
  return _react2.default.createElement('span', { className: "dashicons dashicons-" + name });
};

/***/ }),

/***/ "./public/src/hooks/index.js":
/*!***********************************!*\
  !*** ./public/src/hooks/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./shortcut */ "./public/src/hooks/shortcut.js");

__webpack_require__(/*! ./permissions */ "./public/src/hooks/permissions.js");

__webpack_require__(/*! ./uploader */ "./public/src/hooks/uploader.js");

__webpack_require__(/*! ./modal */ "./public/src/hooks/modal.js");

__webpack_require__(/*! ./sortable */ "./public/src/hooks/sortable.js");

/***/ }),

/***/ "./public/src/hooks/modal.js":
/*!***********************************!*\
  !*** ./public/src/hooks/modal.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /** @module hooks/modal */

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _wp = __webpack_require__(/*! wp */ "wp");

var _wp2 = _interopRequireDefault(_wp);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * When there is a new attachments browser in modal view then
 * prepare the media view for the AppTree container.
 */
_util.hooks.register('attachmentsBrowser/modal', function () {
    var _this = this;

    // Wait the menu, it will immmediatly created
    setTimeout(function () {
        var parent = _this.views.parent,
            views = parent.views,
            _views$get = views.get('.media-frame-menu'),
            _views$get2 = _slicedToArray(_views$get, 1),
            mediaMenu = _views$get2[0];

        var container = mediaMenu.views.get().filter(function (v) {
            return v.className === 'rml-modal-container';
        });
        container && container.length && (container = container[0]) || (container = undefined);

        if (!container) {
            // Add seperator
            mediaMenu.views.add(new _wp2.default.media.View({
                className: 'separator'
            }));

            // Add ReactJS container
            container = new _wp2.default.media.View({
                className: "rml-modal-container"
            });
            mediaMenu.views.add(container);
        }

        // Always enable the menu
        _this.controller.state().set('menu', true, { silent: true });
        parent.$el.addClass('rml-media-modal').removeClass('hide-menu');

        /**
         * A modal attachments browser is created and the view for the
         * React element is ready.
         * 
         * @event module:util/hooks#attachmentsBrowser/modal/dom/ready
         * @param {object} container The backbone view
         * @this wp.media.view.AttachmentsBrowser
         */
        _util.hooks.call('attachmentsBrowser/modal/dom/ready', [container], _this);

        setTimeout(function () {
            return (0, _jquery2.default)(window).trigger('resize');
        }, 0);
    }, 50);
});

/**
 * The sortable state gets refreshed so check if we have to destroy the
 * draggable instance.
 * 
 * @returns {boolean}
 */
function isAttachmentsBrowserSortable(element) {
    return !element.attachmentsBrowser.attachments.$el.sortable('option', 'disabled');
}

/**
 * When a tree gets initialized then check if it is a modal and
 * modify the state.
 */
_util.hooks.register('tree/init', function (state, _ref) {
    var _this2 = this;

    var isModal = _ref.isModal;

    if (isModal) {
        state.isResizable = false, state.isSticky = false;
        state.isStickyHeader = false;
        state.isFullWidth = true;

        // Update WP attachment sort mode and disable the draggable items
        state.isWPAttachmentsSortMode = isAttachmentsBrowserSortable(this);
        this.attachmentsBrowser.collection.props.on('change:orderby', function () {
            return _this2.setState({
                isWPAttachmentsSortMode: isAttachmentsBrowserSortable(_this2)
            });
        });
    }
});

/**
 * When the window gets resized check the flexible modal containers
 * for responsiveness.
 */
(0, _jquery2.default)(function () {
    return (0, _jquery2.default)(window).resize(function () {
        (0, _jquery2.default)('.rml-modal-container .aiot-pad > div:nth-child(2)').each(function () {
            var parent = (0, _jquery2.default)(this).parents('.rml-media-modal'),
                menu = parent.find('.media-frame-menu .media-menu'),
                menuHeight = menu.get(0).offsetHeight,
                oppositeHeight = menu.children(':not(.rml-modal-container)').get().map(function (c) {
                return c.offsetHeight;
            }).reduce(function (a, b) {
                return a + b;
            }, 0);
            if (menuHeight - oppositeHeight > 300) {
                parent.removeClass('rml-mobile-modal');
            } else {
                parent.addClass('rml-mobile-modal');
            }
        });
    });
});

/***/ }),

/***/ "./public/src/hooks/permissions.js":
/*!*****************************************!*\
  !*** ./public/src/hooks/permissions.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LockedToolTipText = undefined;

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _immer = __webpack_require__(/*! immer */ "immer");

var _immer2 = _interopRequireDefault(_immer);

var _rmlopts = __webpack_require__(/*! rmlopts */ "rmlopts");

var _rmlopts2 = _interopRequireDefault(_rmlopts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This functions generates a tooltip text for the locked toolbar button.
 * 
 * @params {object} props The properties
 * @params {string[]} props.restrictions The restrictions
 * @returns {React.Element}
 */
var LockedToolTipText = exports.LockedToolTipText = function LockedToolTipText(_ref) {
    var restrictions = _ref.restrictions;

    var inheritsCount = 0;
    return React.createElement(
        'div',
        null,
        (0, _util.i18n)('restrictionsSuffix'),
        React.createElement('br', null),
        restrictions.map(function (r) {
            var inherits = r.slice(-1) === '>',
                i18nKey = inherits ? r.slice(0, -1) : r;
            inherits && inheritsCount++;

            return React.createElement(
                'div',
                { key: r },
                '- ',
                (0, _util.i18n)('restrictions.' + i18nKey),
                inherits && React.createElement(
                    'strong',
                    null,
                    ' *'
                )
            );
        }),
        inheritsCount > 0 && React.createElement(
            'div',
            null,
            React.createElement(
                'strong',
                null,
                '*'
            ),
            ' ',
            (0, _util.i18n)('restrictionsInherits')
        )
    );
};

/**
 * Show a locked button with tooltip in toolbar depending the permissions.
 * 
 * @param {module:AppTree} element The AppTree
 * @param {object} [selected=Current] The node
 */
/** @module hooks/permissions */

exports.default = function (element) {
    var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.getTreeItemById();

    var restrictions = [];
    var _element$state = element.state,
        currentFolderRestrictions = _element$state.currentFolderRestrictions,
        toolbar_locked = _element$state.toolbar_locked,
        lockedVisible = !!(selected && (restrictions = selected.properties.restrictions).length),
        lockedToolTipText = lockedVisible ? React.createElement(LockedToolTipText, { restrictions: restrictions }) : '';

    currentFolderRestrictions.join() !== restrictions.join() && element.setState({
        currentFolderRestrictions: restrictions || [],
        toolbar_locked: (0, _immer2.default)(toolbar_locked, function (draft) {
            draft.visible = lockedVisible;
            draft.toolTipText = lockedToolTipText;
        })
    });
};

/**
 * A new node is pushed to the folder tree. We can modify it here that way that
 * a locked icon is shown.
 */


_util.hooks.register('tree/node', function (node) {
    var restrictions = node.properties.restrictions;

    if (restrictions.length) {
        node.className['rml-locked'] = true;
    }
});

/**
 * When a file is added do check if upload is allowed to this folder.
 */
_util.hooks.register('uploader/add', function (file, _ref2, store) {
    var properties = _ref2.properties;

    if (properties && properties.restrictions && properties.restrictions.join().indexOf('ins') > -1) {
        this.node = store.getTreeItemById(+_rmlopts2.default.rootId, false);
        this.deny = (0, _util.i18n)('restrictions.ins');
    }
});

/***/ }),

/***/ "./public/src/hooks/shortcut.js":
/*!**************************************!*\
  !*** ./public/src/hooks/shortcut.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A icon with tooltip showing a text that the given attachment is a shortcut.
 * 
 * @param {object} props Properties
 * @type React.Element
 */
var ShortcutIconTooltip = function ShortcutIconTooltip(props) {
    return _react2.default.createElement(
        _reactAiot.Tooltip,
        { placement: 'top', title: (0, _util.i18n)('shortcut'),
            content: (0, _util.i18n)('shortcutInfo') },
        _react2.default.createElement('i', { className: 'rmlicon-share' })
    );
};

/**
 * Is called after each grid item in the attachments browser is rendered completely
 * and adds the shortcut icon container with a tooltip.
 */
/** @module hooks/shortcut */

_util.hooks.register('attachmentsBrowser/item/rendered', function ($el, model, element) {
    // Parse it
    var isShortcut = model.attributes.rmlIsShortcut > 0;
    var icon = $el.children('.attachment-preview').children('.rml-shortcut-container');
    icon.remove();

    if (isShortcut > 0) {
        $el.addClass('rml-shortcut rml-shortcut-grid');
        icon = (0, _jquery2.default)('<div class="rml-shortcut-container"></div>').appendTo($el.children('.attachment-preview'));
        _reactDom2.default.render(_react2.default.createElement(ShortcutIconTooltip, null), icon.get(0));
    } else {
        $el.removeClass('rml-shortcut rml-shortcut-grid');
    }
});

/**
 * Is called in media library list mode and shows a shortcut icon to each shortcut attachment.
 */
_util.hooks.register('ready', function () {
    (0, _jquery2.default)('.rmlShortcutSpan').each(function () {
        var tr = (0, _jquery2.default)(this).parents('tr'),
            imgContainer = tr.children('td.title').find('.media-icon'),
            icon = (0, _jquery2.default)('<div class="rml-shortcut-container"></div>').appendTo(imgContainer);
        _reactDom2.default.render(_react2.default.createElement(ShortcutIconTooltip, null), icon.get(0));
    });
});

/**
 * Is called in grid mode when an item is removed. This callback handles the remove of duplicate
 * shortcuts when one gets removed.
 */
_util.hooks.register('attachmentsBrowser/item/removed', function (element, model, collection) {
    var id = model.attributes.id;

    collection.models.forEach(function (single) {
        if (single.attributes.rmlIsShortcut === id) {
            collection.remove(single);
        }
    });
});

/***/ }),

/***/ "./public/src/hooks/sortable.js":
/*!**************************************!*\
  !*** ./public/src/hooks/sortable.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.applyToAttachmentsBrowser = applyToAttachmentsBrowser;
exports.isFilterActive = isFilterActive;
exports.isOrderByActive = isOrderByActive;
exports.orderUrl = orderUrl;
exports.toggleSortable = toggleSortable;

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _store = __webpack_require__(/*! ../store */ "./public/src/store/index.js");

var _store2 = _interopRequireDefault(_store);

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @module hooks/sortable */

var WP_TABLE_LIST_SELECTOR = '.wp-list-table.media tbody';

/**
 * Apply an order to attachments browser without reloading the collection.
 */
function applyToAttachmentsBrowser(attachmentsBrowser, selected) {
    var orderby = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rml';
    var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ASC';

    var filter = void 0;
    if (attachmentsBrowser && (filter = attachmentsBrowser.toolbar.get('rml_folder').filters[selected.id])) {
        var props = attachmentsBrowser.collection.props,
            o = { silent: true };
        if (selected.contentCustomOrder === 1) {
            filter.props.orderby = 'rml';
            filter.props.order = 'ASC';
            props.set({ orderby: orderby, order: order }, o);
        } else {
            delete filter.props.orderby;
            delete filter.props.order;
            props.set({ orderby: 'date', order: 'DESC' }, o);
        }
    }
}

/**
 * An item gets relocated, so update the table or grid view.
 */
_util.hooks.register('attachment/relocate', function (node, attachmentId, nextId, lastIdInView, next, e, ui) {
    var attachmentsBrowser = (0, _jquery2.default)(ui.item).parents(".attachments-browser").data('backboneView');
    ui.item.stop().fadeTo(100, 0.2);
    (0, _util.ajax)('attachments/' + attachmentId, {
        method: 'PUT',
        data: {
            folderId: node.id,
            nextId: nextId,
            lastId: lastIdInView
        }
    }).done(function () {
        node.setter(function (node) {
            return node.contentCustomOrder = 1;
        });
        applyToAttachmentsBrowser(attachmentsBrowser, node);
        ui.item.stop().fadeTo(100, 1);
    });
});

/**
 * Prepare sortable in list table mode.
 */
_util.hooks.register('ready', function () {
    var lastIdInView = void 0;

    // Grid mode
    (0, _jquery2.default)(document).on('sortstart', '.attachments-browser ul.attachments', function (e, ui) {
        var _$$parents$data = (0, _jquery2.default)(this).parents(".attachments-browser").data('backboneView'),
            collection = _$$parents$data.collection;

        lastIdInView = collection.models[collection.models.length - 1].id;
    }).on('sortupdate', '.attachments-browser ul.attachments', function (e, ui) {
        var next = ui.item.next(),
            nextId = next.html() ? next.data('id') : false,
            attachmentId = ui.item.data('id'),
            folder = (0, _jquery2.default)(this).parents(".attachments-browser").data('backboneView').controller.$RmlAppTree.getTreeItemById();

        /**
         * An attachment is relocated and should be saved to the server.
         * 
         * @event module:util/hooks#attachment/relocate
         * @param {module:store/TreeNode~TreeNode} folder The tree node
         * @param {int} attachmentId The attachment id
         * @param {int} nextId The next id
         * @param {int} lastIdInView
         * @param {jQuery} next
         * @this wp.media.view.AttachmentsBrowser
         */
        _util.hooks.call('attachment/relocate', [folder, attachmentId, nextId, lastIdInView, next, e, ui]);
    });

    // List mode
    (0, _jquery2.default)(WP_TABLE_LIST_SELECTOR).sortable({
        disabled: true,
        appendTo: 'body',
        tolerance: 'pointer',
        scrollSensitivity: 50,
        placeholder: 'ui-sortable-helper-wp-media-list',
        scrollSpeed: 50,
        distance: 10,
        cursor: 'move',
        start: function start(e, ui) {
            ui.placeholder.height(ui.helper[0].scrollHeight);

            // The last ID (grid mode is done in the backbone collection)
            lastIdInView = +(0, _jquery2.default)(WP_TABLE_LIST_SELECTOR + ' tr:last input[name="media[]"]').val();
        },
        update: function update(e, ui) {
            var next = ui.item.next(),
                nextId = next.html() ? next.find('input[name="media[]"]').val() : false,
                attachmentId = ui.item.find('input[name="media[]"]').val(),
                folderId = (0, _jquery2.default)('.rml-container .aiot-active').data('id');

            _util.hooks.call('attachment/relocate', [_store2.default.getTreeItemById(folderId), attachmentId, nextId, lastIdInView, next, e, ui]);
        }
    });
});

/**
 * Checks if a filter is active.
 * 
 * @param {object} [attachmentsBrowser] If set the filter is searched in the backbone controller
 */
function isFilterActive(attachmentsBrowser) {
    if (attachmentsBrowser) {
        var filters = ['monthnum', 'year', 'uploadedTo', 'type'],
            props = attachmentsBrowser.collection.props;

        for (var i = 0; i < filters.length; i++) {
            if (props.get(filters[i])) {
                return true;
            }
        }
        return false;
    } else {
        // List
        return !!(0, _util.urlParam)('attachment-filter');
    }
}

/**
 * Checks if a orderby is active.
 * 
 * @param {object} [attachmentsBrowser] If set the filter is searched in the backbone controller
 */
function isOrderByActive(attachmentsBrowser) {
    var orderby = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rml';
    var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ASC';

    if (attachmentsBrowser) {
        var props = attachmentsBrowser.collection.props,
            propOrder = props.get('order') || 'DESC';
        return props.get('orderby') === orderby && propOrder.toUpperCase() === order.toUpperCase();
    } else {
        // List
        var _propOrder = (0, _util.urlParam)('order') || 'DESC';
        return (0, _util.urlParam)('orderby') === orderby && _propOrder.toUpperCase() === order.toUpperCase();
    }
}

/**
 * @returns {string}
 */
function orderUrl() {
    var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;

    return (0, _util.addUrlParam)((0, _util.addUrlParam)(href, 'orderby', 'rml'), 'order', 'asc');
}

/**
 * Toggle the sortable mode. Popup a message if custom order is not disabled, yet.
 * If custom order is enabled check the different list and grid mode behavior.
 * 
 * @param {object} selected The selected node
 * @parma {boolean} mode The mode to activate
 * @param {object} [attachmentsBrowser] If set the filter is searched in the backbone controller
 */
function toggleSortable(selected, mode, attachmentsBrowser) {
    var orderByActive = isOrderByActive(attachmentsBrowser) || isOrderByActive(attachmentsBrowser, 'date', 'DESC'),
        filterActive = isFilterActive(attachmentsBrowser),
        redirect = !orderByActive || filterActive;

    // Redirect to the sortable mode
    if (redirect && mode) {
        if (!attachmentsBrowser) {
            var href = orderUrl();
            window.location.href = href + "#order";
        } else {
            // Grid mode, show popup that the filters should be deactivated
            _reactAiot.message.error((0, _util.i18n)('orderFilterActive'));
        }
        return false;
    }

    // Toggle sortable
    (attachmentsBrowser ? attachmentsBrowser.attachments.$el : (0, _jquery2.default)(WP_TABLE_LIST_SELECTOR)).sortable(mode ? 'enable' : 'disable');

    return true;
}

/***/ }),

/***/ "./public/src/hooks/uploader.js":
/*!**************************************!*\
  !*** ./public/src/hooks/uploader.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _wp = __webpack_require__(/*! wp */ "wp");

var _wp2 = _interopRequireDefault(_wp);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _store = __webpack_require__(/*! ../store */ "./public/src/store/index.js");

var _store2 = _interopRequireDefault(_store);

var _AppTree = __webpack_require__(/*! ../AppTree */ "./public/src/AppTree.js");

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

var _UploadMessage = __webpack_require__(/*! ../components/UploadMessage */ "./public/src/components/UploadMessage.js");

var _UploadMessage2 = _interopRequireDefault(_UploadMessage);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _mediaViews = __webpack_require__(/*! ../others/mediaViews */ "./public/src/others/mediaViews.js");

var _rmlopts = __webpack_require__(/*! rmlopts */ "rmlopts");

var _rmlopts2 = _interopRequireDefault(_rmlopts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /** @module hooks/uploader */

var UniqueUploadMessage = React.createElement(
    _mobxReact.Provider,
    { store: _store2.default },
    React.createElement(_UploadMessage2.default, null)
),
    CLASS_NAME = 'ant-message-bottom';
var uploaderFetchCountsTimeout = void 0,
    currentMessageHide = void 0;

/**
 * Show the uploading message.
 */
function showMessage() {
    currentMessageHide = _reactAiot.message.loading(UniqueUploadMessage, 0);
}

/**
 * Hide the uploading message.
 */
function hideMessage() {
    currentMessageHide && currentMessageHide();
}

/**
 * Toggle the placement of the unique uploader message.
 */
function togglePlacement() {
    (0, _jquery2.default)(this).parents('.ant-message').toggleClass(CLASS_NAME);
    setTimeout(function () {
        return (0, _jquery2.default)(document).one('mouseenter', '.rml-upload', togglePlacement);
    }, 10);
}

/**
 * Get the current selected node id.
 * 
 * @returns {object}
 */
function getNodeId() {
    var selectVal = (0, _jquery2.default)(".attachments-filter-preUploadUi:visible:first"),
        value = selectVal.val();
    if (value) {
        var option = selectVal.find('option[value="' + value + '"]'),
            _option$data = option.data(),
            type = _option$data.type,
            name = _option$data.name,
            id = parseInt(value, 10);

        return _store2.default.getTreeItemById(value, false) || _store.TreeNode.create({
            id: id, title: name, properties: { type: type },
            isQueried: false
        });
    } else {
        return _AppTree.latestQueriedFolder.node;
    }
}

/**
 * When a file is added do general checks.
 */
_util.hooks.register('uploader/add', function (file, node) {
    if (node.id === 'all') {
        this.node = _store2.default.getTreeItemById(+_rmlopts2.default.rootId, false);
    }
});

/**
 * The media-new.php page. Adds the property to the asyn-upload.php file and
 * modifies the output row while uploading a new file. 
 * 
 * @see wp-includes/js/plupload/handlers.js
 */
_util.hooks.register('general', function () {
    if (!(0, _jquery2.default)('body').hasClass('media-new-php')) {
        return;
    }

    // When the file is uploaded, then the original filename is overwritten. Now we
    // must add it again to the row after the filename.
    if (window.prepareMediaItemInit) {
        var copyPrepareMediaItemInit = window.prepareMediaItemInit;
        window.prepareMediaItemInit = function (file) {
            copyPrepareMediaItemInit.apply(this, arguments);
            if (file.rmlFolderHTML) {
                var mediaRowFilename = (0, _jquery2.default)('#media-item-' + file.id).find(".filename");
                if (mediaRowFilename.size()) {
                    mediaRowFilename.after(file.rmlFolderHTML);
                }
            }
        };
    }

    // Add event to the uploader so the parameter for the folder id is sent
    setTimeout(function () {
        return window.uploader && window.uploader.bind('BeforeUpload', function (up, file) {
            var rmlFolderNode = getNodeId();

            // Set server-side-readable rmlfolder id
            if (rmlFolderNode && !isNaN(+rmlFolderNode.id)) {
                up.settings.multipart_params.rmlFolder = rmlFolderNode.id;

                // Get title as string
                var div = document.createElement('div');
                var title = rmlFolderNode.title;

                typeof title === 'string' ? div.innerText = title : _reactDom2.default.render(title, div);
                title = div.innerText;

                var mediaRowFilename = (0, _jquery2.default)('#media-item-' + file.id).find('.filename');
                if (mediaRowFilename.length > 0) {
                    file.rmlFolderHTML = '<div class="media-item-rml-folder">' + title + '</div>';
                    mediaRowFilename.after(file.rmlFolderHTML);
                }
            }
        });
    }, 500);
});

/**
 * Load data to a dropdown or show label that the folder is inherited from the AppTree.
 * This RFC is placed in the upload UI where you can select your files.
 */
_util.hooks.register('wprfc/preUploadUi', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
        var attachmentsBrowser, _ref2, html;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        attachmentsBrowser = (0, _jquery2.default)(this).parents('.attachments-browser');

                        if (!attachmentsBrowser.size()) {
                            _context.next = 5;
                            break;
                        }

                        (0, _jquery2.default)(this).parent().hide().prev().html(_rmlopts2.default.lang.uploaderUsesLeftTree);
                        _context.next = 10;
                        break;

                    case 5:
                        _context.next = 7;
                        return (0, _util.ajax)('tree/dropdown');

                    case 7:
                        _ref2 = _context.sent;
                        html = _ref2.html;

                        (0, _jquery2.default)(this).addClass('attachments-filter-preUploadUi').html(html);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());

/**
 * The default backbone uploader.
 */
_util.hooks.register('general', function () {
    if (!(0, _util.findDeep)(window, 'wp.media') || !(0, _util.findDeep)(window, 'wp.Uploader')) {
        return;
    }
    (0, _jquery2.default)(document).one('mouseenter', '.rml-upload', togglePlacement);

    // Initialize
    var oldP = _wp2.default.Uploader.prototype,
        oldInit = oldP.init,
        oldSucess = oldP.success;
    oldP.init = function () {
        oldInit.apply(this, arguments);

        /**
         * The uploader gets initialized.
         * 
         * @event module:util/hooks#uploader/init
         * @this wp.Uploader
         */
        _util.hooks.call('uploader/init', [], this);

        // Bind the last selected node to the uploaded file
        this.uploader.bind('FileFiltered', function (up, file) {
            file.rmlFolderNode = getNodeId();
        });

        // Remove files from queue if upload is a folder
        /*this.uploader.bind('FilesAdded', function(up, files) {
            files.forEach(file => {
                console.log(file.getSource().relativePath);
            	up.removeFile(file);
            });
            console.log(files);
            console.log(up);
            
            // TODO: Disable upload until here and show dialog with folder preview
        }, undefined, 10);*/

        // A new file is added, add it to the store so it can be rendered
        this.uploader.bind('FilesAdded', function (up, files) {
            showMessage();
            files.forEach(function (file) {
                var cid = file.attachment.cid,
                    name = file.name,
                    percent = file.percent,
                    loaded = file.loaded,
                    size = file.size,
                    rmlFolderNode = file.rmlFolderNode,
                    previewObj = {
                    cid: cid, name: name, percent: percent, loaded: loaded, size: size,
                    node: rmlFolderNode
                };

                /**
                 * A new file is added.
                 * 
                 * @event module:util/hooks#uploader/add
                 * @param {object} file The file
                 * @param {module:store/TreeNode~TreeNode} folder The folder node
                 * @param {module:store~Store} store The store
                 * @this object
                 */

                _util.hooks.call('uploader/add', [file, rmlFolderNode, _store2.default], previewObj);
                var upload = file.rmlUpload = _store2.default.addUploading(previewObj);

                // Generate preview url
                var preloader = new window.mOxie.Image();
                preloader.onload = function () {
                    preloader.downsize(89, 89);
                    var finalUrl = void 0;

                    try {
                        finalUrl = preloader.getAsDataURL();
                        finalUrl = (0, _util.dataUriToBlob)(finalUrl);
                        finalUrl = window.URL.createObjectURL(finalUrl);
                        finalUrl && upload.setter(function (u) {
                            return u.previewSrc = finalUrl;
                        });
                    } catch (e) {
                        // Silence is golden.
                    }
                };
                preloader.load(file.getSource());
            });
        });

        // Set server-side-readable RML folder id
        this.uploader.bind('BeforeUpload', function (up, file) {
            var multipart_params = up.settings.multipart_params;
            var rmlFolderNode = file.rmlFolderNode;


            !rmlFolderNode && (rmlFolderNode = getNodeId()); // Lazy node
            if (rmlFolderNode && !isNaN(+rmlFolderNode.id)) {
                multipart_params.rmlFolder = rmlFolderNode.id;
            }
        });

        // The upload progress
        this.uploader.bind('UploadProgress', function (_ref3, _ref4) {
            var total = _ref3.total;
            var rmlUpload = _ref4.rmlUpload,
                percent = _ref4.percent,
                loaded = _ref4.loaded;

            rmlUpload.setter(function (u) {
                u.percent = percent;
                u.loaded = loaded;
            });

            _store2.default.setUploadTotal(total);
        });

        // All files are completed
        this.uploader.bind('UploadComplete', function (up, files) {
            // Update queue and counter
            up.splice();
            up.total.reset();
            clearTimeout(uploaderFetchCountsTimeout);
            uploaderFetchCountsTimeout = setTimeout(function () {
                return _store2.default.fetchCounts();
            }, 500); // Avoid too many requests

            // Hide uploader message
            hideMessage();
        });
    };

    /**
     * A single file is completed successfully.
     */
    oldP.success = function (file_attachment) {
        oldSucess.apply(this, arguments);

        // Remove file from queue
        var upload = _store2.default.removeUploading(file_attachment.cid),
            uploadId = upload.node;
        _store2.default.addFoldersNeedsRefresh(uploadId);

        // Update all available backbone view
        var rmlGalleryOrder = file_attachment.get('rmlGalleryOrder'),
            at = rmlGalleryOrder === -1 ? 0 : rmlGalleryOrder;
        (0, _jquery2.default)(_mediaViews.BROWSER_SELECTOR).each(function () {
            var backboneView = (0, _jquery2.default)(this).data('backboneView');
            if (backboneView) {
                var $RmlAppTree = backboneView.controller.$RmlAppTree,
                    activeNode = $RmlAppTree.getTreeItemById(undefined, false);

                if (uploadId === activeNode.id || activeNode.id === 'all') {
                    backboneView.collection.add(file_attachment, { at: activeNode.id === 'all' ? 0 : at });
                }
            }
        });
    };
});

var GALLERY_ALLOWED_EXT = ['jpg', 'jpeg', 'jpe', 'gif', 'png'];

/**
 * Checks, if the uploading folder is a collection or gallery and restrict the upload,
 * move the file to unorganized folder.
 */
_util.hooks.register('uploader/add', function (_ref5, _ref6, store) {
    var name = _ref5.name;
    var properties = _ref6.properties;

    // May only contain image files
    if (properties && properties.type) {
        var ext = name.substr(name.lastIndexOf('.') + 1).toLowerCase(),
            isCollection = +properties.type === 1;
        if (_jquery2.default.inArray(ext, GALLERY_ALLOWED_EXT) === -1 || isCollection) {
            this.node = store.getTreeItemById(+_rmlopts2.default.rootId, false);
            this.deny = (0, _util.i18n)(isCollection ? 'uploadingCollection' : 'uploadingGallery');
        }
    }
});

/***/ }),

/***/ "./public/src/others/filter.js":
/*!*************************************!*\
  !*** ./public/src/others/filter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.filter = exports.FILTER_SELECTOR = undefined;

var _store = __webpack_require__(/*! ../store */ "./public/src/store/index.js");

var _store2 = _interopRequireDefault(_store);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _2 = __webpack_require__(/*! _ */ "_");

var _3 = _interopRequireDefault(_2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The attachments filter selectors.
 */
var FILTER_SELECTOR = exports.FILTER_SELECTOR = '.attachment-filters.attachment-filters-rml';

/**
 * The filter select dropdown prepared as backbone object.
 */
/** @module others/filter */

var filter = exports.filter = {
	id: 'media-attachment-filters-rml',
	className: 'attachment-filters attachment-filters-rml',
	lastSlugs: {},

	createFilters: function createFilters(namesSlug) {
		this.$el.data('backboneView', this);

		// default "all" filter, shows all tags
		var filters = this.filters = {
			all: {
				text: 'All',
				props: {
					rml_folder: ''
				},
				priority: 10
			}
		};

		// No filters loaded, yet
		if (namesSlug) {
			this.lastSlugs = namesSlug;
			var names = namesSlug.names,
			    slugs = namesSlug.slugs;

			// create a filter for each tag

			var props = void 0,
			    node = void 0;
			for (var i = 0; i < names.length; i++) {
				node = _store2.default.getTreeItemById(slugs[i]);
				props = {
					rml_folder: slugs[i]
				};

				// Add order by
				if (node && node.contentCustomOrder === 1) {
					props.orderby = 'rml';
					props.order = 'ASC';
				}

				filters[slugs[i]] = {
					text: names[i],
					props: props,
					priority: 20 + i
				};
			}
		}

		//this.model.set(filters['all'].props); // Implemented in mediaViews

		if (namesSlug) {
			// Build `<option>` elements.
			this.$el.html(_3.default.chain(this.filters).map(function (filter, value) {
				return {
					el: (0, _jquery2.default)('<option></option>').val(value).html(filter.text)[0],
					priority: filter.priority || 50
				};
			}, this).sortBy('priority').pluck('el').value());

			// Reselect
			this.select();
		}
	}
};

/***/ }),

/***/ "./public/src/others/mediaViews.js":
/*!*****************************************!*\
  !*** ./public/src/others/mediaViews.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.firstCreatedToolbar = exports.BROWSER_SELECTOR = undefined;

exports.default = function () {
	if (!(0, _util.findDeep)(window, 'wp.media.view.Attachment.Library')) {
		return false;
	}

	// Create filter
	var RMLFilter = _wp2.default.media.view.AttachmentFilters.RML = _wp2.default.media.view.AttachmentFilters.extend(_filter.filter);

	// Hold selectedId to select previously selected id
	var Modal = _wp2.default.media.view.Modal;
	_wp2.default.media.view.Modal = _wp2.default.media.view.Modal.extend({
		close: function close() {
			Modal.prototype.close.apply(this, arguments);
			var $RmlAppTree = this.controller.$RmlAppTree;

			this._rmlFolder = $RmlAppTree ? $RmlAppTree.props.store.selectedId : undefined;
		},
		open: function open() {
			var $RmlAppTree = this.controller.$RmlAppTree;

			if (this._rmlFolder !== undefined && $RmlAppTree) {
				// Detect, if the folder is available, if yes, select it if not yet
				var store = $RmlAppTree.props.store,
				    node = store.getTreeItemById(this._rmlFolder);

				if (node && node.visible && store.selectedId !== this._rmlFolder) {
					node.setter(function (node) {
						node.selected = true;
					});
				}

				// If the folder is no longer available, force 'All' files to be selected
				if (!node || !node.visible) {
					$RmlAppTree.handleSelect('all');
				}
			}
			Modal.prototype.open.apply(this, arguments);
		}
	});

	// Allow rml orderby
	_wp2.default.media.model.Query.orderby.allowed.push('rml');

	// Create rml orderby comparator
	var Attachments = _wp2.default.media.view.Attachments;
	_wp2.default.media.view.Attachments = _wp2.default.media.view.Attachments.extend({
		initialize: function initialize() {
			Attachments.prototype.initialize.apply(this, arguments);
			var that = this,
			    collection = this.collection,
			    comparator = collection.comparator,
			    available = typeof comparator === 'function';
			collection.comparator = function (a, b, c) {
				var aO = void 0,
				    bO = void 0;
				if (collection.props.get('orderby') === 'rml' && (aO = a.attributes.rmlGalleryOrder) && (bO = b.attributes.rmlGalleryOrder) && aO !== -1 && bO !== -1) {
					if (aO < bO) {
						return -1;
					} else if (aO > bO) {
						return 1;
					}
					return 0;
				} else if (available) {
					return comparator.apply(this, arguments);
				}
			};

			// Initially load a folder from the AppTree initialSelectedId state
			var oldMore = collection.more;
			var setted = false;
			collection.more = function () {
				var $RmlAppTree = that.controller.$RmlAppTree,
				    toolbar = that.views.parent.toolbar;

				var initialSelectedId = void 0;
				if ($RmlAppTree && $RmlAppTree.props && (initialSelectedId = $RmlAppTree.initialSelectedId)) {
					if (!setted) {
						var model = toolbar.get('rml_folder').model;
						model.set({ rml_folder: initialSelectedId === 'all' ? '' : initialSelectedId }, { silent: false });
						setted = true;
					}
					return oldMore.apply(this, arguments);
				}
				return _jquery2.default.Deferred().resolveWith(that).promise();
			};
		}
	});

	// Call a grid render for all new generated items
	var oldRender = _wp2.default.media.view.Attachment.Library.prototype.render;
	_wp2.default.media.view.Attachment.Library.prototype.render = function () {
		oldRender.apply(this, arguments);
		var $RmlAppTree = this.controller.$RmlAppTree;

		/**
         * Fired when an attachments browser item is rendered.
         * 
         * @event module:util/hooks#attachmentsBrowser/item/rendered
         * @param {jQuery} $el The element
         * @param {object} model The backbone model
         * @param {object} appTree The app tree instance
         * @this wp.media.view.Attachment.Library
         */

		_util.hooks.call('attachmentsBrowser/item/rendered', [this.$el, this.model, $RmlAppTree], this);
	};

	// Modify attachments browser
	var AttachmentsBrowser = _wp2.default.media.view.AttachmentsBrowser;
	_wp2.default.media.view.AttachmentsBrowser = _wp2.default.media.view.AttachmentsBrowser.extend({
		initialize: function initialize() {
			var _this = this;

			AttachmentsBrowser.prototype.initialize.apply(this, arguments);

			// Events for attachments browsers collections
			var timeout = void 0;
			this.collection.on('change reset add remove', function () {
				clearTimeout(timeout);
				timeout = setTimeout(function () {
					// Merged collection change
					var $RmlAppTree = _this.controller.$RmlAppTree;

					if ($RmlAppTree) {
						(0, _dragdrop.draggable)($RmlAppTree);

						/**
      * Fired when the collection of attachments browser changes.
      * 
      * @event module:util/hooks#attachmentsBrowser/collection/change
      * @param {object} appTree The app tree instance
      * @this wp.media.view.AttachmentsBrowser
      */
						_util.hooks.call('attachmentsBrowser/collection/change', [$RmlAppTree], _this);
					}
				}, 50);
			});

			this.collection.on('remove', function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				/**
    * Fired when an attachments browser item gets removed.
    * 
    * @event module:util/hooks#attachmentsBrowser/item/removed
    * @param {mixed} args... The event arguments
    * @this wp.media.view.AttachmentsBrowser
    */
				_util.hooks.call('attachmentsBrowser/item/removed', [_this.controller.$RmlAppTree].concat(args), _this);
			});

			// Listen to the ajax complete to refresh the folder counts
			(0, _jquery2.default)(document).ajaxComplete(function (e, xhs, req) {
				try {
					if (req.data.indexOf('action=delete-post') > -1) {
						var $RmlAppTree = _this.controller.$RmlAppTree;

						$RmlAppTree && $RmlAppTree.fetchCounts();
					}
				} catch (e) {
					// Silence is golden.
				}
			});
		},
		createToolbar: function createToolbar() {
			AttachmentsBrowser.prototype.createToolbar.call(this);
			this.$el.data('backboneView', this);

			// Add new toolbar
			var obj = new RMLFilter({
				controller: this.controller,
				model: this.collection.props,
				priority: -81 // see media-views.js#7295
			}).render();
			this.toolbar.set('rml_folder', obj);
			obj.initialize();

			var modal = this.controller.options.modal;

			if (modal) {
				/**
           * Fired, when a new modal window is created.
           * 
           * @event module:util/hooks#attachmentsBrowser/modal
           * @this wp.media.view.AttachmentsBrowser
           */
				_util.hooks.call('attachmentsBrowser/modal', [], this);
			} else {
				firstCreatedToolbar.resolve(this);
			}
		},
		remove: function remove() {
			this.controller.$RmlAppTree.handleDestroy();
			AttachmentsBrowser.prototype.remove.apply(this, arguments);
		}
	});

	return true;
};

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _dragdrop = __webpack_require__(/*! ../util/dragdrop */ "./public/src/util/dragdrop.js");

var _wp = __webpack_require__(/*! wp */ "wp");

var _wp2 = _interopRequireDefault(_wp);

var _filter = __webpack_require__(/*! ./filter */ "./public/src/others/filter.js");

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The attachments browser selectors.hooks
 */
var BROWSER_SELECTOR = exports.BROWSER_SELECTOR = '.attachments-browser';

/**
 * This deferred promise is resolved when the first attachments browser'
 * toolbar is created with the RML filter.
 */
/** @module others/mediaViews */

var firstCreatedToolbar = exports.firstCreatedToolbar = _jquery2.default.Deferred();

/**
 * Modify the media-views.js components (Backbone) in a way
 * to make them compatible with the AIOT component.
 */


/**
 * Enhanced Media Library compatibility and layout adjustment.
 */
_util.hooks.register('ready', function () {
	if ((0, _jquery2.default)('body').hasClass('eml-grid')) {
		var mediaGrid = (0, _jquery2.default)('#wp-media-grid'),
		    offsetTop = mediaGrid.offset().top,
		    fnResize = function fnResize() {
			mediaGrid.css('height', (0, _jquery2.default)(window).height() - (0, _jquery2.default)('#wpadminbar').height() - 10);
		},
		    fnScroll = function fnScroll() {
			var scrollTop = (0, _jquery2.default)(window).scrollTop();
			mediaGrid[0].style.top = (scrollTop > offsetTop ? scrollTop : 0) + 'px';
			//mediaGrid.css("top", scrollTop > offsetTop ? scrollTop - offsetTop : 0);
		};

		// Centerize container
		(0, _jquery2.default)(window).on("resize", fnResize);
		fnResize();

		// Scroll container
		(0, _jquery2.default)(window).on("scroll", fnScroll);
		fnScroll();
	}
});

/***/ }),

/***/ "./public/src/others/optionsScreen.js":
/*!********************************************!*\
  !*** ./public/src/others/optionsScreen.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    // Append to known option
    var container = (0, _jquery2.default)('<div class="rml-options"><nav><ul></ul></nav></div>').insertBefore((0, _jquery2.default)('[for="rml_load_frontend"]').parents('table').prev()),
        headline = (0, _jquery2.default)('<h2>Real Media Library</h2>').insertBefore(container),
        nav = container.find('nav ul');
    var navLiCnt = 0;
    (0, _jquery2.default)('<a target="_blank" href="https://matthias-web.com/wordpress/real-media-library/add-ons/"><strong>Browse Add-Ons</strong></a>').insertAfter(headline);

    // Search the option panels
    (0, _jquery2.default)('table.form-table').each(function () {
        var oHeadline = (0, _jquery2.default)(this).prev();
        var sHeadline = oHeadline.html();
        if (sHeadline && sHeadline.indexOf('RealMediaLibrary') === 0) {
            sHeadline = sHeadline.split(":", 2)[1];

            // Append headline to options panel
            var li = (0, _jquery2.default)('<li class="nav-tab ' + (navLiCnt === 0 ? 'nav-tab-active' : '') + '">' + sHeadline + '</li>').appendTo(nav),
                section = (0, _jquery2.default)(this).appendTo(container);

            !navLiCnt && section.show();
            li.click(function () {
                container.children('table').hide();
                nav.find('.nav-tab-active').removeClass('nav-tab-active');
                (0, _jquery2.default)(this).addClass('nav-tab-active');
                section.show();
            });

            oHeadline.remove();
            navLiCnt++;
        }
    });
};

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** @module others/optionsScreen */

/**
 * Do the options screen with a nav bar (WordPress standard). This
 * nav bar is not ReactJS.
 */


/**
 * When a .rml-rest-button is pressed show a loading indicator and send
 * the request to the REST server.
 */
(0, _jquery2.default)(function () {
    return (0, _jquery2.default)(document).on('click', '.rml-rest-button', function (e) {
        var _$$data = (0, _jquery2.default)(this).data(),
            url = _$$data.url,
            method = _$$data.method,
            data = _objectWithoutProperties(_$$data, ['url', 'method']),
            btn = (0, _jquery2.default)(this);

        if (window.confirm(_util.rmlOpts.lang.areYouSure)) {
            btn.html('<div class="spinner is-active" style="float: initial;margin: 0;"></div>');
            btn.attr('disabled', 'disabled');

            /**
             * Fired when a button with class .rml-rest-button gets clicked and
             * the POST data is prepared so you can modify it. The $url is the
             * data-url attribute of the button. You also have to define a
             * data-method attribute.
             * 
             * @event module:util/hooks#rest/button/prepare/$url
             * @param {object} data The data
             * @this jQuery
             */
            _util.hooks.call('rest/button/prepare/' + url, [data], btn);
            (0, _util.ajax)(url, { method: method, data: data }).then(function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                btn.html('<i class="fa fa-check"></i> ' + _util.rmlOpts.lang.success).attr("disabled", false);

                /**
                 * Fired when a button with class .rml-rest-button is successfully saved.
                 * 
                 * @event module:util/hooks#rest/button/success/$url
                 * @param {mixed} args... The $.ajax success arguments
                 * @param {string} method The method
                 * @param {object} data The data
                 * @this jQuery
                 */
                _util.hooks.call('rest/button/success/' + url, [].concat(args, [method, data]), btn);
            }, function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                btn.html('<i class="fa fa-warning"></i> ' + _util.rmlOpts.lang.failed).attr("disabled", false);

                /**
                 * Fired when a button with class .rml-rest-button is successfully saved.
                 * 
                 * @event module:util/hooks#rest/button/error/$url
                 * @param {mixed} args... The $.ajax success arguments
                 * @param {string} method The method
                 * @param {object} data The data
                 * @this jQuery
                 */
                _util.hooks.call('rest/button/error/' + url, [].concat(args, [method, data]), btn);
            });
        }
        e.preventDefault();
        return false;
    });
});

_util.hooks.register('rest/button/success/export', function (response) {
    (0, _jquery2.default)('#rml_export_data textarea').get(0).value = response;
});

_util.hooks.register('rest/button/prepare/import', function (data) {
    data.import = encodeURIComponent((0, _jquery2.default)("#rml_import_data textarea").get(0).value);
});

/***/ }),

/***/ "./public/src/others/renderOrderMenu.js":
/*!**********************************************!*\
  !*** ./public/src/others/renderOrderMenu.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

/**
 * Apply an order to a tree node object and afterwards reload the view.
 * 
 * @this AppTree
 */
var applyOrder = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(selected, key, automatically) {
        var hide, attachmentsBrowser;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        hide = _reactAiot.message.loading((0, _util.i18n)('orderLoadingText', { name: selected.title })), attachmentsBrowser = this.attachmentsBrowser;
                        _context.next = 3;
                        return selected.applyOrder(key, automatically);

                    case 3:

                        // Apply props to backbone model
                        (0, _sortable.applyToAttachmentsBrowser)(attachmentsBrowser, selected);

                        this.handleReload();
                        hide();

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function applyOrder(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * When clicking on a menu item in the order menu popup.
 * 
 * @this AppTree
 */


var handleClick = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
        var key = _ref3.key,
            keyPath = _ref3.keyPath;

        var path, selected, _applyOrder;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        path = keyPath.reverse(), selected = this.props.store.selected, _applyOrder = applyOrder.bind(this);

                        if (path[0] === 'applyOnce') {
                            // Apply sorting once
                            _applyOrder(selected, key);
                        } else if (path[0] === 'applyAutomatically') {
                            _applyOrder(selected, key, true);
                        } else if (key === 'reset') {
                            _applyOrder(selected, 'original');
                        } else if (key === 'resetAutomatically') {
                            _applyOrder(selected, 'deactivate');
                        } else if (key === 'applyReindex') {
                            _applyOrder(selected, 'reindex');
                        } else if (key === 'applyResetLast') {
                            _applyOrder(selected, 'last');
                        }

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function handleClick(_x4) {
        return _ref2.apply(this, arguments);
    };
}();

/**
 * Render the order menu.
 * 
 * @type React.Element
 */


exports.default = function () {
    var store = this.props.store,
        selected = store.selected,
        sortables = store.sortables,
        isSortable = selected && selected.properties && selected.contentCustomOrder !== 2;


    return _react2.default.createElement(
        _reactAiot.Menu,
        { onClick: handleClick.bind(this) },
        _react2.default.createElement(
            Item,
            { key: 'reset', disabled: !isSortable || selected.contentCustomOrder === 0 },
            (0, _util.i18n)('resetOrder')
        ),
        isSortable && _react2.default.createElement(
            SubMenu,
            { key: 'applyOnce', title: (0, _util.i18n)('applyOrderOnce'), disabled: selected.orderAutomatically },
            sortables && createSortables(sortables, selected.lastOrderBy, (0, _util.i18n)('last'))
        ),
        isSortable && _react2.default.createElement(Divider, null),
        isSortable && selected.orderAutomatically && _react2.default.createElement(
            Item,
            { key: 'resetAutomatically', disabled: !isSortable || selected.contentCustomOrder === 0 },
            (0, _util.i18n)('deactivateOrderAutomatically')
        ),
        isSortable && _react2.default.createElement(
            SubMenu,
            { key: 'applyAutomatically', title: (0, _util.i18n)('applyOrderAutomatically') },
            sortables && createSortables(sortables, selected.orderAutomatically && selected.lastOrderBy, (0, _util.i18n)('latest'))
        ),
        isSortable && selected.contentCustomOrder === 1 && _react2.default.createElement(Divider, null),
        isSortable && selected.contentCustomOrder === 1 && _react2.default.createElement(
            Item,
            { key: 'applyReindex' },
            (0, _util.i18n)('reindexOrder')
        ),
        isSortable && selected.contentCustomOrder === 1 && _react2.default.createElement(
            Item,
            { key: 'applyResetLast' },
            (0, _util.i18n)('resetToLastOrder')
        )
    );
};

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _sortable = __webpack_require__(/*! ../hooks/sortable */ "./public/src/hooks/sortable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /** @module others/renderOrderMenu */

var Item = _reactAiot.Menu.Item,
    SubMenu = _reactAiot.Menu.SubMenu,
    Divider = _reactAiot.Menu.Divider;

/**
 * An element rendering sortables for the popup menu.
 * 
 * @returns React.Element[]
 */

var createSortables = function createSortables(sortables, select, selectText) {
    return Object.keys(sortables).map(function (key) {
        return _react2.default.createElement(
            Item,
            { key: key },
            sortables[key],
            ' ',
            select === key && _react2.default.createElement(
                'strong',
                null,
                '(',
                selectText,
                ')'
            )
        );
    });
};

/***/ }),

/***/ "./public/src/others/rfcBreadcrumb.js":
/*!********************************************!*\
  !*** ./public/src/others/rfcBreadcrumb.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _hooks = __webpack_require__(/*! ../util/hooks */ "./public/src/util/hooks.js");

var _hooks2 = _interopRequireDefault(_hooks);

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _Breadcrumb = __webpack_require__(/*! ../components/Breadcrumb */ "./public/src/components/Breadcrumb.js");

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Create a WP RFC for a breadcrumb item and for a customField.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @property {string[]} data-path The pathes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @module others/rfcBreadcrumb
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

/**
 * Create a WP RFC for a breadcrumb. All the element data is passed to
 * {@link module:components/Breadcrumb}.
 * 
 * @function breadcrumb
 * @listens module:util/hooks#wprfc/$function
 */
_hooks2.default.register('wprfc/breadcrumb', function (props) {
  _reactDom2.default.render(_react2.default.createElement(_Breadcrumb2.default, props), (0, _jquery2.default)(this).get(0));
});

/**
 * Create a WP RFC for a custom field. It puts a simple dropdown with folder
 * select to the element.
 * 
 * @property {string|int} selected The preselected id
 * @function customField
 * @listens module:util/hooks#wprfc/$function
 */
_hooks2.default.register('wprfc/customField', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var selected = _ref2.selected;

    var _ref3, html;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _util.ajax)('tree/dropdown', { data: { selected: selected } });

          case 2:
            _ref3 = _context.sent;
            html = _ref3.html;

            (0, _jquery2.default)(this).html(html);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./public/src/others/rfcShortcutInfo.js":
/*!**********************************************!*\
  !*** ./public/src/others/rfcShortcutInfo.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _hooks = __webpack_require__(/*! ../util/hooks */ "./public/src/util/hooks.js");

var _hooks2 = _interopRequireDefault(_hooks);

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Create a WP RFC for the shortcut info container.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @property {string[]} data-path The pathes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @module others/rfcShortcutInfo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

/**
 * Append HTML content below the attachment details.
 * 
 * @param {jQuery} container The container
 * @param {string} html The html
 * @returns {jQuery}
 */
var appendTo = function appendTo(container, html) {
    var attachmentDetails = container.parents('.attachment-details'),
        mediaSidebar = container.parents('.media-sidebar');

    // Check if it is already an container
    (mediaSidebar.length > 0 ? mediaSidebar : attachmentDetails.length > 0 ? attachmentDetails : container).find('.rml-shortcut-info-container').remove();

    // The normal media library view
    if (mediaSidebar.length > 0) {
        return (0, _jquery2.default)(html).appendTo(mediaSidebar);
    } else if (attachmentDetails.length > 0) {
        return (0, _jquery2.default)(html).insertAfter(attachmentDetails.children('.attachment-info').children('.settings'));
    } else {
        return container.replaceWithPush(html);
    }
};

/**
 * Create a WP RFC for a shortcut info container. 
 * 
 * @property {id} id The attachment id.
 * @function shortcutInfo
 * @listens module:util/hooks#wprfc/$function
 */
_hooks2.default.register('wprfc/shortcutInfo', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var id = _ref2.id;

        var loadingContainer, _ref3, html;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        loadingContainer = appendTo((0, _jquery2.default)(this).addClass("rml-shortcut-info-container"), '<div style="height:50px;text-align:center;"><div class="spinner is-active" style="float: initial;margin: 0;"></div></div>');
                        _context.next = 3;
                        return (0, _util.ajax)('attachments/' + id + '/shortcutInfo');

                    case 3:
                        _ref3 = _context.sent;
                        html = _ref3.html;

                        loadingContainer.replaceWithPush(html);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());

/***/ }),

/***/ "./public/src/others/static.js":
/*!*************************************!*\
  !*** ./public/src/others/static.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rmlopts = __webpack_require__(/*! rmlopts */ "rmlopts");

var _rmlopts2 = _interopRequireDefault(_rmlopts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Warn the user when deleting files and give a hint while deleting shortcuts.
 */
window.rmlWarnDelete = function () {
  return confirm((commonL10n.warnDelete || '') + _rmlopts2.default.lang.warnDelete);
}; /* global commonL10n */

/***/ }),

/***/ "./public/src/rml.js":
/*!***************************!*\
  !*** ./public/src/rml.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoredAppTree = exports.Upload = exports.TreeNode = exports.store = exports.injectAndObserve = exports.addUrlParam = exports.dataUriToBlob = exports.secondsFormat = exports.humanFileSize = exports.findDeep = exports.fetchTree = exports.applyNodeDefaults = exports.ajax = exports.urlParam = exports.i18n = exports.rmlOpts = exports.hooks = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _util = __webpack_require__(/*! ./util */ "./public/src/util/index.js");

var _optionsScreen = __webpack_require__(/*! ./others/optionsScreen */ "./public/src/others/optionsScreen.js");

var _optionsScreen2 = _interopRequireDefault(_optionsScreen);

var _mediaViews = __webpack_require__(/*! ./others/mediaViews */ "./public/src/others/mediaViews.js");

var _mediaViews2 = _interopRequireDefault(_mediaViews);

var _dragdrop = __webpack_require__(/*! ./util/dragdrop */ "./public/src/util/dragdrop.js");

var _store = __webpack_require__(/*! ./store */ "./public/src/store/index.js");

var _store2 = _interopRequireDefault(_store);

__webpack_require__(/*! ./style/style.scss */ "./public/src/style/style.scss");

__webpack_require__(/*! react-aiot/src/style/theme-wordpress.scss */ "./node_modules/react-aiot/src/style/theme-wordpress.scss");

__webpack_require__(/*! ./hooks */ "./public/src/hooks/index.js");

__webpack_require__(/*! ./others/static */ "./public/src/others/static.js");

__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Polyfill for yielding

exports.hooks = _util.hooks;
exports.rmlOpts = _util.rmlOpts;
exports.i18n = _util.i18n;
exports.urlParam = _util.urlParam;
exports.ajax = _util.ajax;
exports.applyNodeDefaults = _util.applyNodeDefaults;
exports.fetchTree = _util.fetchTree;
exports.findDeep = _util.findDeep;
exports.humanFileSize = _util.humanFileSize;
exports.secondsFormat = _util.secondsFormat;
exports.dataUriToBlob = _util.dataUriToBlob;
exports.addUrlParam = _util.addUrlParam;
exports.injectAndObserve = _store.injectAndObserve;
exports.store = _store2.default;
exports.TreeNode = _store.TreeNode;
exports.Upload = _store.Upload;
exports.StoredAppTree = _store.StoredAppTree;

// ReplaceWith should return the new object
/**
 * Startup file which initializes the AIOT Tree. You can access the exports
 * through <code>window.rml</code>.
 * 
 * @module rml
 */

!_jquery2.default.fn.replaceWithPush && (_jquery2.default.fn.replaceWithPush = function (a) {
  var $a = (0, _jquery2.default)(a);
  this.replaceWith($a);
  return $a;
});

/**
 * General event when script for RML is ready to load.
 * 
 * @event module:util/hooks#general 
 */
_util.hooks.call('general');

(0, _mediaViews2.default)();

(0, _jquery2.default)(document).ready(function () {
  // Add rml-touch class if touch device
  if ('ontouchstart' in window || window.navigator.maxTouchPoints) {
    (0, _jquery2.default)('body').addClass('rml-touch');
  }

  (0, _dragdrop.anyKeyHolding)();
  'WebkitAppearance' in document.documentElement.style && (0, _jquery2.default)('body').addClass('rml-webkit');

  if (_util.rmlOpts && (0, _jquery2.default)('body').hasClass('wp-admin') && (0, _jquery2.default)('body').hasClass('upload-php')) {
    var $container = void 0,
        container = void 0;
    var containerId = 'rml' + _util.rmlOpts.blogId;

    /**
     * General event when DOM is ready and a list table / grid mode
     * is available in media library page.
     * 
     * @event module:util/hooks#ready
     */
    _util.hooks.call('ready');

    // Create the container sidebar
    (0, _jquery2.default)('body').addClass('activate-aiot');
    $container = (0, _jquery2.default)('<div/>').prependTo('body.wp-admin #wpbody').addClass('rml-container');
    container = $container.get(0);

    // Create the wrapper and React component, the modal react element is created in hooks/modal.js
    if (_util.rmlOpts.listMode === 'grid') {
      // When in grid mode, we have to wait for the first attachments browser
      _mediaViews.firstCreatedToolbar.done(function (attachmentsBrowser) {
        _reactDom2.default.render(_react2.default.createElement(_store.StoredAppTree, { attachmentsBrowser: attachmentsBrowser, id: containerId }), container);
      });
    } else {
      _reactDom2.default.render(_react2.default.createElement(_store.StoredAppTree, { id: containerId }), container);
    }
  }

  // Wait for modals
  _util.hooks.register('attachmentsBrowser/modal/dom/ready', function (container) {
    if (!_util.rmlOpts) return;
    try {
      _util.hooks.call('attachmentsBrowser/modal/exception', [container], this);
      var _containerId = 'rml' + _util.rmlOpts.blogId;
      _reactDom2.default.render(_react2.default.createElement(_store.StoredAppTree, { attachmentsBrowser: this, isModal: true, id: _containerId }), container.el);
    } catch (e) {
      // Silence is golden.
    }
  });

  // Options panel
  (0, _jquery2.default)('body').hasClass('options-media-php') && (0, _optionsScreen2.default)();
});

/***/ }),

/***/ "./public/src/store/TreeNode.js":
/*!**************************************!*\
  !*** ./public/src/store/TreeNode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _mobxStateTree = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** @module store/TreeNode */

/**
 * The store holding general data for folders. The properties are read-only.
 * 
 * @see React AIOT TreeNode documentation for properties and defaults
 * @class TreeNode
 */
var TreeNode = _mobxStateTree.types.model('RMLTreeNode', {
    id: _mobxStateTree.types.identifier(_mobxStateTree.types.union(_mobxStateTree.types.string, _mobxStateTree.types.number)),
    hash: '',
    className: _mobxStateTree.types.optional(_mobxStateTree.types.frozen),
    icon: _mobxStateTree.types.optional(_mobxStateTree.types.frozen),
    iconActive: _mobxStateTree.types.optional(_mobxStateTree.types.frozen),
    childNodes: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.late(function () {
        return TreeNode;
    }))),
    title: _mobxStateTree.types.frozen,
    count: 0,
    attr: _mobxStateTree.types.optional(_mobxStateTree.types.frozen),
    isTreeLinkDisabled: false,
    selected: false,
    $busy: false,
    $busyOrder: false,
    $droppable: true,
    $visible: true,
    $rename: false,
    $create: _mobxStateTree.types.optional(_mobxStateTree.types.frozen),
    contentCustomOrder: 0,
    lastOrderBy: '',
    orderAutomatically: false,
    //searchSelected: false,
    //expandedState: true,
    //displayChildren: true,
    //selectedIds: [],
    //onRenameClose: undefined,
    //onAddClose: undefined,
    //onSelect: undefined,
    //onNodePressF2: undefined,
    //onExpand: undefined,
    //onUlRef: undefined
    properties: _mobxStateTree.types.optional(_mobxStateTree.types.frozen),
    isQueried: true
}).actions(function (self) {
    return {
        afterAttach: function afterAttach() {
            (0, _mobxStateTree.getRoot)(self)._afterAttachTreeNode(self);
        },
        beforeDestroy: function beforeDestroy() {
            (0, _mobxStateTree.getRoot)(self)._beforeDestroyTreeNode(self);
        },


        /**
         * Update this node attributes.
         * 
         * @param {function} callback The callback with one argument (node draft)
         * @param {boolean} [setHash] If true the hash node is changed so a rerender is forced
         * @memberof module:store/TreeNode~TreeNode
         * @instance
         */
        setter: function setter(callback) {
            var setHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            callback(self);
            setHash && (self.hash = (0, _reactAiot.uuid)());
        },


        /**
         * Rename folder.
         * 
         * @param {string} inputValue The new name
         * @returns {object} Server response
         * @throws Error
         * @memberof module:store/TreeNode~TreeNode
         * @instance
         * @async
         */
        setName: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function _callee(inputValue) {
            var result, _result, id, name, cnt, children, rest;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            self.setter(function (node) {
                                node.$busy = true;
                            });

                            _context.prev = 1;
                            result = void 0;
                            _context.next = 5;
                            return (0, _util.ajax)('folders/' + self.id, {
                                method: 'PUT',
                                data: {
                                    name: inputValue
                                }
                            });

                        case 5:
                            _result = result = _context.sent;
                            id = _result.id;
                            name = _result.name;
                            cnt = _result.cnt;
                            children = _result.children;
                            rest = _objectWithoutProperties(_result, ['id', 'name', 'cnt', 'children']);

                            self.setter(function (node) {
                                node.title = name;
                                node.properties = _jquery2.default.merge(node.properties, rest);
                                node.$busy = false;
                            });
                            return _context.abrupt('return', result);

                        case 15:
                            _context.prev = 15;
                            _context.t0 = _context['catch'](1);

                            self.setter(function (node) {
                                node.$busy = false;
                            }, self.id);
                            throw _context.t0;

                        case 19:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[1, 15]]);
        })),

        /**
         * Apply an order to the folder.
         * 
         * @param {string} id The sortable id
         * @param {boolean} [automatically=false] If true the order is applied automatically if new files are added to the folder
         * @memberof module:store/TreeNode~TreeNode
         * @instance
         * @async
         */
        applyOrder: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
            var automatically = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var result;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            self.setter(function (node) {
                                node.$busyOrder = true;
                            });

                            _context2.prev = 1;
                            _context2.next = 4;
                            return (0, _util.ajax)('folders/content/sortables', {
                                method: 'POST',
                                data: {
                                    id: id,
                                    applyTo: self.id,
                                    automatically: automatically
                                }
                            });

                        case 4:
                            result = _context2.sent;

                            result && id !== 'reindex' && id !== 'last' && (self.contentCustomOrder = 1, self.lastOrderBy = id);
                            result && automatically && (self.orderAutomatically = true);
                            id === 'original' && result && (self.contentCustomOrder = 0, self.orderAutomatically = false);
                            id === 'deactivate' && result && (self.orderAutomatically = false);
                            _context2.next = 14;
                            break;

                        case 11:
                            _context2.prev = 11;
                            _context2.t0 = _context2['catch'](1);
                            throw _context2.t0;

                        case 14:
                            _context2.prev = 14;

                            self.setter(function (node) {
                                node.$busyOrder = false;
                            });
                            return _context2.finish(14);

                        case 17:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[1, 11, 14, 17]]);
        })),

        /**
         * Permanently delete folder.
         * 
         * @returns {string|int} The parent id
         * @throws Error
         * @memberof module:store/TreeNode~TreeNode
         * @instance
         * @async
         */
        trash: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            self.setter(function (node) {
                                node.$busy = true;
                            });

                            _context3.prev = 1;
                            _context3.next = 4;
                            return (0, _util.ajax)('folders/' + self.id, {
                                method: 'DELETE'
                            });

                        case 4:
                            self.setter(function (node) {
                                node.$visible = false;
                            });
                            _context3.next = 10;
                            break;

                        case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3['catch'](1);
                            throw _context3.t0;

                        case 10:
                            _context3.prev = 10;

                            self.setter(function (node) {
                                node.$busy = false;
                            });
                            return _context3.finish(10);

                        case 13:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this, [[1, 7, 10, 13]]);
        }))
    };
});

exports.default = TreeNode;

/***/ }),

/***/ "./public/src/store/Upload.js":
/*!************************************!*\
  !*** ./public/src/store/Upload.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxStateTree = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");

var _TreeNode = __webpack_require__(/*! ./TreeNode */ "./public/src/store/TreeNode.js");

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This model represents an uploading file. The properties are read-only.
 * 
 * @class Upload
 * @property {string} cid The cid
 * @property {string} name The name of the uploaded file
 * @property {module:store/TreeNode~TreeNode} node The destination tree node
 * @property {int} percent The percent
 * @property {int} loaded The loaded size
 * @property {int} size The total size of the upload
 * @property {string} [previewSrc] The src for the preview image
 * @property {React.Element|string} [deny] Deny message
 * @property {int} readableLoaded The loaded size in human readable format
 * @property {int} readableSize The total size of the upload in human readable format
 */
var Upload = _mobxStateTree.types.model('RMLUpload', {
    cid: _mobxStateTree.types.identifier(_mobxStateTree.types.string),
    name: _mobxStateTree.types.string,
    node: _mobxStateTree.types.reference(_TreeNode2.default),
    percent: _mobxStateTree.types.number, // Not computed because it comes directly from plupload
    loaded: _mobxStateTree.types.number,
    size: _mobxStateTree.types.number,
    previewSrc: _mobxStateTree.types.optional(_mobxStateTree.types.string),
    deny: _mobxStateTree.types.optional(_mobxStateTree.types.frozen)
}).views(function (self) {
    return {
        get readableLoaded() {
            return (0, _util.humanFileSize)(self.loaded);
        },

        get readableSize() {
            return (0, _util.humanFileSize)(self.size);
        }
    };
}).actions(function (self) {
    return {
        /**
         * Update this upload attributes.
         * 
         * @param {function} callback The callback with one argument (node draft)
         * @memberof module:store/Upload~Upload
         * @instance
         */
        setter: function setter(callback) {
            callback(self);
        }
    };
}); /** @module store/Upload */

exports.default = Upload;

/***/ }),

/***/ "./public/src/store/index.js":
/*!***********************************!*\
  !*** ./public/src/store/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Upload = exports.TreeNode = exports.StoredAppTree = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.injectAndObserve = injectAndObserve;

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _AppTree = __webpack_require__(/*! ../AppTree */ "./public/src/AppTree.js");

var _AppTree2 = _interopRequireDefault(_AppTree);

var _util = __webpack_require__(/*! ../util */ "./public/src/util/index.js");

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

var _mobxStateTree = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");

var _TreeNode = __webpack_require__(/*! ./TreeNode */ "./public/src/store/TreeNode.js");

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _Upload = __webpack_require__(/*! ./Upload */ "./public/src/store/Upload.js");

var _Upload2 = _interopRequireDefault(_Upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** @module store */

/**
 * The main Mobx State Tree store for the RML application. It holds a static tree and
 * the fetched tree from the server. The properties are read-only.
 * 
 * @class Store
 * @property {int} [rootId=rmlOpts.rootId] The root folder id
 * @property {module:store/TreeNode~TreeNode[]} staticTree The static tree
 * @property {module:store/TreeNode~TreeNode[]} [tree] The tree
 * @property {object} [refs] Refs to all available tree nodes
 * @property {string|int} [selectedId=0] The selected id
 * @property {mixed[]} [foldersNeedsRefresh] Node ids which needs to be refreshed when they gets queried
 * @property {module:store/Upload~Upload[]} [uploading] The upload queue
 * @property {int} [uploadTotalLoaded=0] The upload total loaded
 * @property {int} [uploadTotalSize=0] The upload total size
 * @property {object} [sortables] Available sortables for the order menu
 * @property {int} [uploadTotalBytesPerSec=0] The uploader bytes per second
 * @property {module:store/TreeNode~TreeNode} [selected] The selected tree node
 * @property {module:store/Upload~Upload} [currentUpload] The current upload file
 * @property {string} [uploadTotalRemainTime] The current upload remaining time in human readable form
 * @property {string} [readableUploadTotalLoaded] The uploader total loaded in human readable form
 * @property {string} [readableUploadTotalSize] The uploader total size in human readable form
 * @property {string} [readableUploadTotalBytesPerSec] The uploader bytes per second in human readable form
 */
var Store = _mobxStateTree.types.model('RMLStore', {
    rootId: +_util.rmlOpts.rootId,
    staticTree: _mobxStateTree.types.array(_TreeNode2.default),
    tree: _mobxStateTree.types.optional(_mobxStateTree.types.array(_TreeNode2.default), []),
    refs: _mobxStateTree.types.optional(_mobxStateTree.types.map(_mobxStateTree.types.reference(_TreeNode2.default)), {}),
    selectedId: _mobxStateTree.types.optional(_mobxStateTree.types.union(_mobxStateTree.types.string, _mobxStateTree.types.number), 0), // Do not fill manually, it is filled in afterCreated through onPatch
    foldersNeedsRefresh: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.union(_mobxStateTree.types.string, _mobxStateTree.types.number)), []),
    uploading: _mobxStateTree.types.optional(_mobxStateTree.types.array(_Upload2.default), []),
    uploadTotalLoaded: _mobxStateTree.types.optional(_mobxStateTree.types.number, 0),
    uploadTotalSize: _mobxStateTree.types.optional(_mobxStateTree.types.number, 0),
    sortables: _mobxStateTree.types.optional(_mobxStateTree.types.frozen),
    uploadTotalBytesPerSec: _mobxStateTree.types.optional(_mobxStateTree.types.number, 0)
}).views(function (self) {
    return {
        /**
         * Get tree item by id.
         * 
         * @param {string|int} id
         * @param {boolean} [exlucdeStatic=true]
         * @returns {module:store/TreeNode~TreeNode} Tree node
         * @memberof module:store~Store
         * @instance
         */
        getTreeItemById: function getTreeItemById(id) {
            var excludeStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var useId = parseInt(id, 10),
                ref = self.refs.get(isNaN(useId) ? id : useId);
            return excludeStatic && ref && self.staticTree.indexOf(ref) > -1 ? undefined : ref;
        },


        get selected() {
            return self.getTreeItemById(self.selectedId, false);
        },

        get currentUpload() {
            return self.uploading.length ? self.uploading[0] : undefined;
        },

        get uploadTotalRemainTime() {
            if (self.uploadTotalBytesPerSec > 0) {
                var remainTime = Math.floor((self.uploadTotalSize - self.uploadTotalLoaded) / self.uploadTotalBytesPerSec);
                return (0, _util.secondsFormat)(remainTime);
            } else {
                return '00:00:00';
            }
        },

        get readableUploadTotalLoaded() {
            return (0, _util.humanFileSize)(self.uploadTotalLoaded);
        },

        get readableUploadTotalSize() {
            return (0, _util.humanFileSize)(self.uploadTotalSize);
        },

        get readableUploadTotalBytesPerSec() {
            return (0, _util.humanFileSize)(self.uploadTotalBytesPerSec);
        }
    };
}).actions(function (self) {
    return {
        /**
         * The model is created so watch for specific properties. For example set
         * the selected property.
         * 
         * @memberof module:store~Store
         * @private
         * @instance
         */
        afterCreate: function afterCreate() {
            (0, _mobxStateTree.onPatch)(self, function (_ref) {
                var op = _ref.op,
                    path = _ref.path,
                    value = _ref.value;

                // A new selected item is setted
                if ((path.startsWith('/tree/') || path.startsWith('/staticTree/')) && path.endsWith('/selected') && value === true) {
                    var currentSelected = self.selected,
                        obj = (0, _mobxStateTree.resolvePath)(self, path.slice(0, path.length - 9));
                    currentSelected && currentSelected.id !== obj.id && currentSelected.setter(function (node) {
                        node.selected = false;
                    });
                    self._setSelectedIdFromPath(obj);
                }
            });

            // Initially load sortables
            !self.sortables && self.fetchSortables();
        },
        _setSelectedIdFromPath: function _setSelectedIdFromPath(obj) {
            self.selectedId = obj.id;
        },


        /**
         * A new tree node is created (static or normal tree).
         * 
         * @memberof module:store~Store
         * @instance
         * @private
         */
        _afterAttachTreeNode: function _afterAttachTreeNode(instance) {
            self.refs.set(instance.id, instance);
        },


        /**
         * An instance is destroyed.
         * 
         * @private
         */
        _beforeDestroyTreeNode: function _beforeDestroyTreeNode(instance) {
            self.refs.delete(instance.id);
        },


        /**
         * Update this node attributes.
         * 
         * @param {function} callback The callback with one argument (node draft)
         * @memberof module:store~Store
         * @instance
         */
        setter: function setter(callback) {
            callback(self);
        },


        /**
         * Set the tree.
         * 
         * @param {object} tree The object representing a tree
         * @param {boolean} [isStatic=false]
         * @memberof module:store~Store
         * @instance
         */
        setTree: function setTree(tree) {
            var isStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (isStatic) {
                self.staticTree = tree;
            } else {
                self.tree = tree;
            }
        },


        /**
         * Set upload total stats.
         * 
         * @memberof module:store~Store
         * @instance
         */
        setUploadTotal: function setUploadTotal(_ref2) {
            var loaded = _ref2.loaded,
                size = _ref2.size,
                bytesPerSec = _ref2.bytesPerSec;

            self.uploadTotalLoaded = loaded;
            self.uploadTotalSize = size;
            self.uploadTotalBytesPerSec = bytesPerSec;
        },


        /**
         * Add an uploading file.
         * 
         * @param {object} object The object to push
         * @returns {object} The upload instance
         * @memberof module:store~Store
         * @instance
         */
        addUploading: function addUploading(upload) {
            self.uploading.push(upload);
            return self.uploading[self.uploading.length - 1];
        },


        /**
         * Register a folder that it needs refresh.
         * 
         * @memberof module:store~Store
         * @instance
         */
        addFoldersNeedsRefresh: function addFoldersNeedsRefresh(id) {
            self.foldersNeedsRefresh.indexOf(id) === -1 && self.foldersNeedsRefresh.push(id);
        },


        /**
         * Register a folder that it needs refresh.
         * 
         * @memberof module:store~Store
         * @instance
         */
        removeFoldersNeedsRefresh: function removeFoldersNeedsRefresh(id) {
            var idx = self.foldersNeedsRefresh.indexOf(id);
            idx > -1 && self.foldersNeedsRefresh.splice(idx, 1);
        },


        /**
         * Remove an uploading file from queue.
         * 
         * @param {string} cid The cid
         * @returns {object} A copy of the original object
         * @memberof module:store~Store
         * @instance
         */
        removeUploading: function removeUploading(cid) {
            var found = self.uploading.filter(function (u) {
                return u.cid === cid;
            }),
                result = !!found.length && found[0].toJSON();
            found.length && self.uploading.splice(self.uploading.indexOf(found[0]), 1);
            return result;
        },


        /**
         * Handle sort mechanism.
         * 
         * @returns {boolean}
         * @throws Error
         * @memberof module:store~Store
         * @instance
         */
        handleSort: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref3) {
            var id = _ref3.id,
                oldIndex = _ref3.oldIndex,
                newIndex = _ref3.newIndex,
                parentFromId = _ref3.parentFromId,
                parentToId = _ref3.parentToId,
                nextId = _ref3.nextId,
                _ref3$request = _ref3.request,
                request = _ref3$request === undefined ? true : _ref3$request;
            var tree, rootId, treeItem;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            tree = self.tree, rootId = self.rootId;

                            // Find parent trees with children

                            treeItem = void 0;

                            if (parentFromId === rootId) {
                                treeItem = tree[oldIndex].toJSON();
                                tree.splice(oldIndex, 1);
                            } else {
                                self.getTreeItemById(parentFromId).setter(function (node) {
                                    treeItem = node.childNodes[oldIndex].toJSON();
                                    node.childNodes.splice(oldIndex, 1);
                                }, true);
                            }

                            // Find destination tree
                            if (parentToId === rootId) {
                                tree.splice(newIndex, 0, treeItem);
                            } else {
                                self.getTreeItemById(parentToId).setter(function (node) {
                                    node.childNodes.splice(newIndex, 0, treeItem);
                                }, true);
                            }

                            if (request) {
                                _context.next = 6;
                                break;
                            }

                            return _context.abrupt('return', true);

                        case 6:
                            _context.prev = 6;
                            _context.next = 9;
                            return (0, _util.ajax)('hierarchy/' + id, {
                                method: 'PUT',
                                data: {
                                    parent: parentToId,
                                    nextId: nextId === 0 ? false : nextId
                                }
                            });

                        case 9:
                            return _context.abrupt('return', true);

                        case 12:
                            _context.prev = 12;
                            _context.t0 = _context['catch'](6);
                            _context.next = 16;
                            return store.handleSort({
                                id: self.rootId,
                                oldIndex: newIndex,
                                newIndex: oldIndex,
                                parentFromId: parentToId,
                                parentToId: parentFromId,
                                request: false
                            });

                        case 16:
                            throw _context.t0;

                        case 17:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[6, 12]]);
        })),

        /**
         * Fetch the folder tree.
         * 
         * @returns {object[]} Tree
         * @memberof module:store~Store
         * @instance
         * @async
         */
        fetchTree: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(setSelectedId) {
            var _ref4, tree, cntRoot, cntAll, slugs, result;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return (0, _util.fetchTree)();

                        case 2:
                            _ref4 = _context2.sent;
                            tree = _ref4.tree;
                            cntRoot = _ref4.cntRoot;
                            cntAll = _ref4.cntAll;
                            slugs = _ref4.slugs;
                            result = {
                                tree: tree,
                                cntRoot: cntRoot,
                                cntAll: cntAll,
                                slugs: slugs
                            };

                            self.setTree(tree);

                            typeof setSelectedId !== 'undefined' && self.getTreeItemById(setSelectedId, false).setter(function (node) {
                                return node.selected = true;
                            });
                            self.getTreeItemById('all', false).setter(function (node) {
                                return node.count = cntAll;
                            });
                            self.getTreeItemById(self.rootId, false).setter(function (node) {
                                return node.count = cntRoot;
                            });
                            return _context2.abrupt('return', result);

                        case 13:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        })),

        /**
         * Update the folder count. If you pass no argument the folder count is
         * requested from server.
         * 
         * @param {object} counts Key value map of folder and count
         * @returns {object<string|int,int>} Count map
         * @memberof module:store~Store
         * @instance
         * @async
         */
        fetchCounts: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(counts) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!counts) {
                                _context3.next = 3;
                                break;
                            }

                            Object.keys(counts).forEach(function (k) {
                                var ref = self.getTreeItemById(k, false);
                                ref && (ref.count = counts[k]);
                            });
                            return _context3.abrupt('return', counts);

                        case 3:
                            _context3.t0 = self;
                            _context3.next = 6;
                            return (0, _util.ajax)('folders/content/counts');

                        case 6:
                            _context3.t1 = _context3.sent;
                            _context3.next = 9;
                            return _context3.t0.fetchCounts.call(_context3.t0, _context3.t1);

                        case 9:
                            return _context3.abrupt('return', _context3.sent);

                        case 10:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        })),

        /**
         * Fetch sortables.
         * 
         * @memberof module:store~Store
         * @instance
         * @async
         */
        fetchSortables: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return (0, _util.ajax)('folders/content/sortables');

                        case 2:
                            self.sortables = _context4.sent;

                        case 3:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        })),

        /**
         * Create a new tree node.
         * 
         * @param {string} name The name of the new folder
         * @param {object} obj The object representing the folder
         * @param {string|int} obj.parent 
         * @param {int} obj.typeInt 
         * @param {function} [beforeAttach] Callback executed before attaching the new object to the tree
         * @returns {object} The tree node (no mobx model)
         * @memberof module:store~Store
         * @instance
         * @async
         */
        persist: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(name, _ref5, beforeAttach) {
            var parent = _ref5.parent,
                typeInt = _ref5.typeInt;
            var newObj;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.t0 = _util.applyNodeDefaults;
                            _context5.next = 3;
                            return (0, _util.ajax)('folders', {
                                method: 'POST',
                                data: {
                                    name: name,
                                    parent: parent,
                                    type: typeInt
                                }
                            });

                        case 3:
                            _context5.t1 = _context5.sent;
                            _context5.t2 = [_context5.t1];
                            newObj = (0, _context5.t0)(_context5.t2)[0];


                            // Add to tree
                            beforeAttach && beforeAttach(newObj);
                            if (parent === self.rootId) {
                                self.tree.push(newObj);
                            } else {
                                self.getTreeItemById(parent).setter(function (node) {
                                    node.childNodes.push(newObj);
                                }, true);
                            }
                            return _context5.abrupt('return', newObj);

                        case 9:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }))
    };
});

/**
 * Main store instance.
 */
var store = Store.create({
    staticTree: [{
        id: 'all',
        title: React.createElement(
            'span',
            null,
            (0, _util.i18n)('allPosts')
        ),
        icon: React.createElement(_reactAiot.Icon, { type: 'copy' }),
        count: _util.rmlOpts.allPostCnt
    }, {
        id: +_util.rmlOpts.rootId,
        title: (0, _util.i18n)('unorganized'),
        icon: _util.ICON_OBJ_FOLDER_ROOT,
        count: 0,
        properties: {
            type: 4
        }
    }]
});

/**
 * A single instance of store.
 */
exports.default = store;

/**
 * An AppTree implementation with store provided. This means you have no longer
 * implement the Provider of mobx here.
 * 
 * @returns {React.Element}
 */

var StoredAppTree = function StoredAppTree(_ref6) {
    var children = _ref6.children,
        rest = _objectWithoutProperties(_ref6, ['children']);

    return React.createElement(
        _mobxReact.Provider,
        { store: store },
        React.createElement(
            _AppTree2.default,
            rest,
            children
        )
    );
};

/**
 * Import general store to ReactJS component.
 */
exports.StoredAppTree = StoredAppTree;
function injectAndObserve(fn) {
    var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'store';

    return (0, _mobxReact.inject)(store)((0, _mobxReact.observer)(fn));
}

exports.TreeNode = _TreeNode2.default;
exports.Upload = _Upload2.default;

/***/ }),

/***/ "./public/src/style/style.scss":
/*!*************************************!*\
  !*** ./public/src/style/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./public/src/util/addUrlParam.js":
/*!****************************************!*\
  !*** ./public/src/util/addUrlParam.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addUrlParam;
/**
 * Add a URL parameter (or changing it if it already exists)
 * 
 * @param {string} url The url
 * @param {string} parameterName The parameter name
 * @param {string} parameterValue The parameter value
 * @param {boolean} [atStart] Add param before others
 * @returns {string} URL
 * @see http://stackoverflow.com/questions/486896/adding-a-parameter-to-the-url-with-javascript
 * @see http://stackoverflow.com/questions/6953944/how-to-add-parameters-to-a-url-that-already-contains-other-parameters-and-maybe?noredirect=1&lq=1
 * @module util/addUrlParam
 */
function addUrlParam(url, parameterName, parameterValue, atStart) {
    var replaceDuplicates = true,
        urlhash,
        sourceUrl;
    if (url.indexOf('#') > 0) {
        var cl = url.indexOf('#');
        urlhash = url.substring(url.indexOf('#'), url.length);
    } else {
        urlhash = '';
        cl = url.length;
    }
    sourceUrl = url.substring(0, cl);

    var urlParts = sourceUrl.split("?");
    var newQueryString = "";

    if (urlParts.length > 1) {
        var parameters = urlParts[1].split("&");
        for (var i = 0; i < parameters.length; i++) {
            var parameterParts = parameters[i].split("=");
            if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
                if (newQueryString == "") newQueryString = "?";else newQueryString += "&";
                newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
            }
        }
    }
    if (newQueryString == "") newQueryString = "?";

    if (atStart) {
        newQueryString = '?' + parameterName + "=" + parameterValue + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
    } else {
        if (newQueryString !== "" && newQueryString != '?') newQueryString += "&";
        newQueryString += parameterName + "=" + (parameterValue ? parameterValue : '');
    }
    return urlParts[0] + newQueryString + urlhash;
}

/***/ }),

/***/ "./public/src/util/dragdrop.js":
/*!*************************************!*\
  !*** ./public/src/util/dragdrop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.anyKeyHolding = anyKeyHolding;
exports.droppable = droppable;
exports.draggable = draggable;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

var _ = __webpack_require__(/*! . */ "./public/src/util/index.js");

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /** @module util/dragdrop */

/**
 * On CTRL holding add class 'aiot-helper-method-append' to document body.
 */
function anyKeyHolding() {
    (0, _jquery2.default)(document).on('keydown', function (e) {
        return (0, _jquery2.default)('body').addClass('aiot-helper-method-append');
    });
    (0, _jquery2.default)(document).on('keyup', function (e) {
        return (0, _jquery2.default)('body').removeClass('aiot-helper-method-append');
    });
}

/**
 * jQuery's draggable helper container.
 * 
 * @param {object} props Properties
 * @param {int} props.count The count
 * @type React.Element
 */
var DragHelper = function DragHelper(_ref) {
    var count = _ref.count;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'aiot-helper-method-move' },
            _react2.default.createElement(_reactAiot.Icon, { type: 'swap' }),
            ' ',
            (0, _.i18n)(count > 1 ? 'move' : 'moveOne', { count: count }),
            _react2.default.createElement(
                'p',
                null,
                (0, _.i18n)('moveTip')
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'aiot-helper-method-append' },
            _react2.default.createElement(_reactAiot.Icon, { type: 'copy' }),
            ' ',
            (0, _.i18n)(count > 1 ? 'append' : 'appendOne', { count: count }),
            _react2.default.createElement(
                'p',
                null,
                (0, _.i18n)('appendTip')
            )
        )
    );
};

/**
 * Enables / Reinitializes the droppable nodes. If a draggable item is dropped
 * here the given posts are moved to the category. You have to provide a ReactJS
 * element to reload the tree.
 * 
 * @param {React.Element} element The element
 */
function droppable(element) {
    var dom = (0, _jquery2.default)(element.ref.container).find('.aiot-node.aiot-droppable[data-id!=\'all\']'),
        attachmentsBrowser = element.attachmentsBrowser;

    dom.droppable({
        activeClass: 'aiot-state-default',
        hoverClass: 'aiot-state-hover',
        tolerance: 'pointer',
        drop: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(event, ui) {
                var ids, toTmp, to, activeId, elements, fnFade, isCopy, store, isOne, i18nProps, i18nGet, hide, _ref3, counts, fadeBack;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                ids = [], toTmp = (0, _jquery2.default)(event.target).attr('data-id'), to = toTmp === 'all' ? toTmp : +toTmp, activeId = element.getSelectedId(), elements = [], fnFade = function fnFade(percent) {
                                    return elements.forEach(function (obj) {
                                        return obj.fadeTo(250, percent);
                                    });
                                }, isCopy = (0, _jquery2.default)('body').hasClass('aiot-helper-method-append'), store = element.props.store;

                                // Get dragged items

                                iterateDraggedItem(ui.draggable, element, function (tr) {
                                    ids.push(+tr.find('input[name="media[]"]').attr("value"));
                                    elements.push(tr);
                                }, function (attributes, attachmentsBrowser) {
                                    ids.push(attributes.id);
                                    elements.push(attachmentsBrowser.$el.find('li[data-id="' + attributes.id + '"]'));
                                });
                                element.setState({ isTreeLinkDisabled: true }); // Disable tree
                                fnFade(0.3);

                                // Make folders updateable in grid mode
                                if (attachmentsBrowser) {
                                    // If the target is "Uncategorized" the current folder has to be refreshed, too
                                    store.addFoldersNeedsRefresh(to);
                                    to === +_.rmlOpts.rootId && store.addFoldersNeedsRefresh(activeId);
                                }

                                // Get i18n key
                                isOne = ids.length === 1, i18nProps = {
                                    count: ids.length,
                                    category: (0, _jquery2.default)(event.target).find('.aiot-node-name').html()
                                }, i18nGet = function i18nGet(key) {
                                    return (0, _.i18n)((isCopy ? 'append' : 'move') + key + (isOne ? 'One' : ''), i18nProps);
                                };
                                hide = _reactAiot.message.loading(i18nGet('LoadingText'));
                                _context.prev = 7;
                                _context.next = 10;
                                return (0, _.ajax)('attachments/bulk/move', {
                                    method: 'PUT',
                                    data: { ids: ids, to: to, isCopy: isCopy }
                                });

                            case 10:
                                _ref3 = _context.sent;
                                counts = _ref3.counts;


                                _reactAiot.message.success(i18nGet('Success'));
                                element.fetchCounts(counts);

                                // Update items view
                                fadeBack = isCopy || !isCopy && activeId === to || activeId === 'all';

                                fadeBack ? fnFade(1) : elements.forEach(function (obj) {
                                    return obj.remove();
                                });

                                // Refresh view if necessery
                                if (activeId === 'all' && isCopy || isCopy && activeId === to) {
                                    element.handleReload();
                                }

                                // Deselect for the next bulk selection action
                                elements.forEach(function (obj) {
                                    var attachmentPreview = obj.children('.attachment-preview');
                                    obj.hasClass('selected') && attachmentPreview.length && attachmentPreview.click();
                                });

                                // Add no media
                                if (!element.attachmentsBrowser && !(0, _jquery2.default)(".wp-list-table tbody tr").length) {
                                    (0, _jquery2.default)(".wp-list-table tbody").html('<tr class="no-items"><td class="colspanchange" colspan="6">' + _.rmlOpts.lang.noEntries + '</td></tr></tbody>');
                                }
                                _context.next = 25;
                                break;

                            case 21:
                                _context.prev = 21;
                                _context.t0 = _context['catch'](7);

                                _reactAiot.message.error(_context.t0.responseJSON.message);
                                fnFade(1);

                            case 25:
                                _context.prev = 25;

                                hide();
                                element.setState(function (prevState) {
                                    return {
                                        isTreeLinkDisabled: false
                                    };
                                }); // Enable tree
                                return _context.finish(25);

                            case 29:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[7, 21, 25, 29]]);
            }));

            function drop(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return drop;
        }()
    });
}

/*
 * Iterates through the UI and gets the collection of dragged items.
 * 
 * @param {jQuery} ui The draggable ui object
 * @param {React.Element} container The AIOT container
 * @param {function} [listMode] Function to iterate over list mode items (<tr> object)
 * @param {function} [gridMode] Function to iterate over grid mode items (attributes, attachmentsBrowser)
 * @returns {int} The count of selected items
 */
function iterateDraggedItem(ui, _ref4, listMode, gridMode) {
    var attachmentsBrowser = _ref4.attachmentsBrowser;

    if (attachmentsBrowser) {
        // Grid mode
        var selection = attachmentsBrowser.options.selection.models;
        if (selection.length) {
            selection.forEach(function (model) {
                gridMode && gridMode(model.attributes, attachmentsBrowser);
            });
            return selection.length;
        } else {
            var id = ui.data('id'),
                models = attachmentsBrowser.collection.models;
            gridMode && gridMode(models.filter(function (model) {
                return model.id === id;
            })[0], attachmentsBrowser);
            return 1;
        }
    } else {
        // List mode
        var trs = (0, _jquery2.default)('input[name="media[]"]:checked');
        if (trs.length) {
            trs.each(function () {
                listMode && listMode((0, _jquery2.default)(this).parents('tr'));
            });
        } else {
            listMode && listMode(ui);
        }
        return trs.length || 1;
    }
}

/**
 * Make the list table draggable if sort mode is not active.
 * 
 * @param {React.Element} element The element
 * @param {boolean} [destroy=false] If true the draggable gets destroyed
 */
function draggable(element, destroy) {
    // Get selector
    var attachmentsBrowser = element.attachmentsBrowser,
        _element$state = element.state,
        isMoveable = _element$state.isMoveable,
        isWPAttachmentsSortMode = _element$state.isWPAttachmentsSortMode,
        selector = attachmentsBrowser ? attachmentsBrowser.$el.find('ul.attachments > li') : (0, _jquery2.default)('#wpbody-content .wp-list-table tbody tr:not(.no-items)');

    // Make draggable
    if (destroy || !isMoveable || isWPAttachmentsSortMode) {
        try {
            selector.draggable('destroy');
        } catch (e) {
            // Silence is golden.
        }
    } else {
        selector.draggable({
            revert: 'invalid',
            revertDuration: 0,
            appendTo: 'body',
            cursorAt: { top: 0, left: 0 },
            distance: 10,
            refreshPositions: true,
            helper: function helper(event) {
                var helper = (0, _jquery2.default)('<div class="aiot-helper"></div>').appendTo((0, _jquery2.default)('body')),
                    count = iterateDraggedItem((0, _jquery2.default)(event.currentTarget), element);
                _reactDom2.default.render(_react2.default.createElement(DragHelper, { count: count }), helper.get(0));
                return helper;
            },
            start: function start(event) {
                (0, _jquery2.default)('body').addClass('aiot-currently-dragging');

                // FIX https://bugs.jqueryui.com/ticket/4261
                (0, _jquery2.default)(document.activeElement).blur();
            },
            stop: function stop() {
                (0, _jquery2.default)('body').removeClass("aiot-currently-dragging");
            }
        });
    }
}

/***/ }),

/***/ "./public/src/util/hooks.js":
/*!**********************************!*\
  !*** ./public/src/util/hooks.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registry = {},
    hooks = {
    /**
     * Registers a callback to a given event name.
     * 
     * @param {string} names The event name, you can also pass multiple names when splitted with " "
     * @param {function} callback The callback function with the arguments
     * @returns {module:util/hooks}
     * @function register
     */
    register: function register(names, callback) {
        names.split(' ').forEach(function (name) {
            registry[name] = registry[name] || [];
            registry[name].push(callback);
        });
        return hooks;
    },


    /**
     * Deregister a callback to a given event name.
     * 
     * @param {string} name The event name
     * @param {function} callback The callback function with the arguments
     * @returns {module:util/hooks}
     * @function register
     */
    deregister: function deregister(name, callback) {
        var i = void 0;
        if (registry[name]) {
            registry[name].forEach(function (fns) {
                i = fns.indexOf(callback);
                i > -1 && fns.splice(i, 1);
            });
        }
        return hooks;
    },


    /**
     * Call an event.
     * 
     * @param {string} name The event name
     * @param {mixed[]} args Pass arguments to the callbacks
     * @param {object} context Pass context to the callbacks
     * @returns {module:util/hooks}
     * @function call
     */
    call: function call(name, args, context) {
        if (registry[name]) {
            if (args) {
                if (Object.prototype.toString.call(args) === '[object Array]') {
                    args.push(_jquery2.default);
                } else {
                    args = [args, _jquery2.default];
                }
            } else {
                args = [_jquery2.default];
            }

            // When explicit false then break the for
            registry[name].forEach(function (callback) {
                return callback.apply(context, args) !== false;
            });
        }
        return hooks;
    },


    /**
     * Checks if a event name is registered.
     * 
     * @param {string} name The event name
     * @returns {boolean}
     * @function exists
     */
    exists: function exists(name) {
        return !!registry[name];
    }
}; /**
    * Hook system to modify simple things.
    * 
    * @module util/hooks
    * @see Events for hook events
    * @example <caption>Accessing the hook system</caption>
    * window.rml.hooks.register("yourAction", function() {
    *  // Do something
    * });
    */
exports.default = hooks;

/***/ }),

/***/ "./public/src/util/index.js":
/*!**********************************!*\
  !*** ./public/src/util/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rmlOpts = exports.hooks = exports.addUrlParam = exports.fetchTree = exports.ICON_OBJ_FOLDER_GALLERY = exports.ICON_OBJ_FOLDER_COLLECTION = exports.ICON_OBJ_FOLDER_ROOT = exports.ICON_OBJ_FOLDER_CLOSED = exports.ICON_OBJ_FOLDER_OPEN = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @module util */


/**
 * Execute the REST query to fetch the category tree.
 * 
 * @param {object} [settings] Additional options for jQuery.ajax
 * @returns {object} The original AJAX result and the tree result prepared for AIO
 */
var fetchTree = exports.fetchTree = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(settings) {
        var _ref3, tree, rest;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return ajax('tree', settings);

                    case 2:
                        _ref3 = _context.sent;
                        tree = _ref3.tree;
                        rest = _objectWithoutProperties(_ref3, ['tree']);
                        return _context.abrupt('return', _extends({ tree: applyNodeDefaults(tree) }, rest));

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function fetchTree(_x4) {
        return _ref2.apply(this, arguments);
    };
}();

/**
 * Allows you to find an object path.
 * 
 * @param {object} obj The object
 * @param {string} path The path
 * @returns {mixed|undefined}
 */


exports.i18n = i18n;
exports.urlParam = urlParam;
exports.ajax = ajax;
exports.applyNodeDefaults = applyNodeDefaults;
exports.findDeep = findDeep;
exports.humanFileSize = humanFileSize;
exports.secondsFormat = secondsFormat;
exports.dataUriToBlob = dataUriToBlob;

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _addUrlParam = __webpack_require__(/*! ./addUrlParam */ "./public/src/util/addUrlParam.js");

var _addUrlParam2 = _interopRequireDefault(_addUrlParam);

var _hooks = __webpack_require__(/*! ./hooks */ "./public/src/util/hooks.js");

var _hooks2 = _interopRequireDefault(_hooks);

var _rmlopts = __webpack_require__(/*! rmlopts */ "rmlopts");

var _rmlopts2 = _interopRequireDefault(_rmlopts);

var _wpApiSettings = __webpack_require__(/*! wpApiSettings */ "wpApiSettings");

var _wpApiSettings2 = _interopRequireDefault(_wpApiSettings);

var _reactAiot = __webpack_require__(/*! react-aiot */ "react-aiot");

var _i18nReact = __webpack_require__(/*! i18n-react */ "i18n-react");

var _i18nReact2 = _interopRequireDefault(_i18nReact);

__webpack_require__(/*! ./wpRfc */ "./public/src/util/wpRfc.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Creates a React component (span) with the translated markdown.
 * 
 * @param {string} key The key in rmlOpts.lang
 * @param {object} [params] The parameters
 * @param {object|string('maxWidth')} [spanWrapperProps] Wraps an additinal span wrapper with custom attributes
 * @see https://github.com/alexdrel/i18n-react
 * @returns {React.Element} Or null if key not found
 */
function i18n(key, params, spanWrapperProps) {
    if (_rmlopts2.default && _rmlopts2.default.lang && _rmlopts2.default.lang[key]) {
        // @TODO rmlOpts.lang check remove
        var span = React.createElement(_i18nReact2.default.span, _extends({ text: _rmlopts2.default.lang[key] }, params));

        // Predefined span wrapper props
        if (typeof spanWrapperProps === 'string') {
            switch (spanWrapperProps) {
                case 'maxWidth':
                    spanWrapperProps = { style: { display: 'inline-block', maxWidth: 200 } };
                    break;
                default:
                    break;
            }
        }

        return spanWrapperProps ? React.createElement(
            'span',
            spanWrapperProps,
            span
        ) : span;
    }
    return key;
}

/**
 * Get URL parameter of current url.
 * 
 * @param {string} name The parameter name
 * @param {string} [url=window.location.href]
 * @returns {string|null}
 */
function urlParam(name) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;

    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
    return results && results[1] || null;
}

/**
 * Execute a jQuery request with X-WP-Nonce header.
 * 
 * @param {string} url The url appended to ".../wp-json/realmedialibrary/v1/"
 * @param {object} [settings] The options for jQuery.ajax
 * @param {string} [url='realmedialibrary/v1'] The API namespace
 * @returns Result of jQuery.ajax
 */
function ajax(url) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var urlNamespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'realmedialibrary/v1';

    var apiUrlRoot = _wpApiSettings2.default.root,
        lang = urlParam('lang', apiUrlRoot),
        apiUrl = apiUrlRoot.split('?')[0];
    var useUrl = apiUrl + urlNamespace + '/' + url;

    if (lang) {
        useUrl = (0, _addUrlParam2.default)(useUrl, 'lang', lang.replace('/', ''));
    }

    return _jquery2.default.ajax(useUrl, _jquery2.default.extend(true, settings, {
        headers: {
            'X-WP-Nonce': _wpApiSettings2.default.nonce
        }
    }));
}

/**
 * Icon showing a opened folder.
 * 
 * @type React.Element
 */
var ICON_OBJ_FOLDER_OPEN = exports.ICON_OBJ_FOLDER_OPEN = React.createElement(_reactAiot.Icon, { type: 'folder-open' });

/**
 * Icon showing a closed folder.
 * 
 * @type React.Element
 */
var ICON_OBJ_FOLDER_CLOSED = exports.ICON_OBJ_FOLDER_CLOSED = React.createElement(_reactAiot.Icon, { type: 'folder' });

/**
 * Icon showing a home icon for Unorganized.
 * 
 * @type React.Element
 */
var ICON_OBJ_FOLDER_ROOT = exports.ICON_OBJ_FOLDER_ROOT = React.createElement(_reactAiot.Icon, { type: 'home' });

/**
 * Icon showing a collection.
 * 
 * @type React.Element
 */
var ICON_OBJ_FOLDER_COLLECTION = exports.ICON_OBJ_FOLDER_COLLECTION = React.createElement('i', { className: 'rmlicon-collection' });

/**
 * Icon showing a gallery.
 * 
 * @type React.Element
 */
var ICON_OBJ_FOLDER_GALLERY = exports.ICON_OBJ_FOLDER_GALLERY = React.createElement('i', { className: 'rmlicon-gallery' });

/**
 * Handle tree node defaults for loaded folder items and new items.
 * 
 * @param {object[]} folders The folders
 * @returns object[]
 */
function applyNodeDefaults(arr) {
    return arr.map(function (_ref) {
        var id = _ref.id,
            name = _ref.name,
            cnt = _ref.cnt,
            children = _ref.children,
            contentCustomOrder = _ref.contentCustomOrder,
            lastOrderBy = _ref.lastOrderBy,
            orderAutomatically = _ref.orderAutomatically,
            rest = _objectWithoutProperties(_ref, ['id', 'name', 'cnt', 'children', 'contentCustomOrder', 'lastOrderBy', 'orderAutomatically']);

        return function (node) {
            // Update node
            switch (node.properties.type) {
                case 0:
                    node.iconActive = ICON_OBJ_FOLDER_OPEN;
                    break;
                case 1:
                    node.icon = ICON_OBJ_FOLDER_COLLECTION;
                    break;
                case 2:
                    node.icon = ICON_OBJ_FOLDER_GALLERY;
                    break;
                default:
                    break;
            }

            /**
             * A tree node is fetched from the server and should be prepared
             * for the {@link module:store/TreeNode~TreeNode} class.
             * 
             * @event module:util/hooks#tree/node
             * @param {object} node The node object
             */
            _hooks2.default.call('tree/node', [node]);
            return node;
        }(_jquery2.default.extend({}, _reactAiot.TreeNode.defaultProps, { // Default node
            id: id,
            title: name,
            icon: ICON_OBJ_FOLDER_CLOSED,
            count: cnt,
            childNodes: children ? applyNodeDefaults(children) : [],
            properties: rest,
            className: {},
            contentCustomOrder: contentCustomOrder,
            lastOrderBy: !!lastOrderBy ? lastOrderBy : "",
            orderAutomatically: !!orderAutomatically,
            $visible: true
        }));
    });
}function findDeep(obj, path) {
    var paths = path.split('.');
    var current = obj;
    for (var i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
            return undefined;
        } else {
            current = current[paths[i]];
        }
    }
    return current;
}

/**
 * Transform bytes to humand readable string.
 * 
 * @param {int} bytes The bytes
 * @returns {string}
 * @see http://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable
 */
function humanFileSize(bytes) {
    var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
}

/**
 * Transform seconds to readable HH:mm:ss.
 * 
 * @param {int} totalSec The seconds
 * @returns {string}
 */
function secondsFormat(totalSec) {
    var hours = Math.floor(totalSec / 3600),
        minutes = Math.floor((totalSec - hours * 3600) / 60),
        seconds = totalSec - hours * 3600 - minutes * 60;
    return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
}

/**
 * Export Data URI to blob instance.
 * 
 * @param {string} sUri
 * @returns {Blob}
 */
function dataUriToBlob(sUri) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString = void 0;
    if (sUri.split(",")[0].indexOf("base64") >= 0) {
        byteString = window.atob(sUri.split(',')[1]);
    } else {
        byteString = unescape(sUri.split(',')[1]);
    }

    // separate out the mime component
    var type = sUri.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new window.Blob([ia], { type: type });
}

exports.addUrlParam = _addUrlParam2.default;
exports.hooks = _hooks2.default;
exports.rmlOpts = _rmlopts2.default;

/***/ }),

/***/ "./public/src/util/wpRfc.js":
/*!**********************************!*\
  !*** ./public/src/util/wpRfc.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _hooks = __webpack_require__(/*! ./hooks */ "./public/src/util/hooks.js");

var _hooks2 = _interopRequireDefault(_hooks);

__webpack_require__(/*! ../others/rfcBreadcrumb.js */ "./public/src/others/rfcBreadcrumb.js");

__webpack_require__(/*! ../others/rfcShortcutInfo.js */ "./public/src/others/rfcShortcutInfo.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The RML WP RFC functionality allows you to create callbacks for specific
 * elements defined in the DOM. For example you have to fallback to HTML output
 * like the CustomField in attachment browser.
 * 
 * You can otherwise use the class rml-wprfc-visible then the RFC is called when
 * the elemen is visible. You do not have to append an additional script.
 * 
 * @example <caption>PHP side component</caption>
 * <div class="rml-wprfc" data-wprfc="breadcrumb"></div>
 * <script>jQuery(function() { window.rml.hooks.call("wprfc"); });</script>
 * @example <caption>JS side</caption>
 * window.rml.hooks.register('wprfc/breadcrumb', () => { });
 * @module util/wpRfc
 * @see module:util/hooks#wprfc/$function
 */

var RFC_CLASS_NAME = 'rml-wprfc';

/**
 * Interval visible rfc.
 */
setInterval(function () {
  (0, _jquery2.default)('.' + RFC_CLASS_NAME + '-visible:visible').removeClass(RFC_CLASS_NAME + '-visible').each(function () {
    /**
     * A RML WP RFC is called and should be handled.
     * 
     * @event module:util/hooks#wprfc/$function
     * @param {object} data The element data
     * @param {jQuery} $el The element
     */
    _hooks2.default.call('wprfc/' + (0, _jquery2.default)(this).attr('data-wprfc'), (0, _jquery2.default)(this).data(), (0, _jquery2.default)(this));
  });
}, 500);

/**
 * Usual scripted rfc.
 */
_hooks2.default.register('wprfc', function () {
  (0, _jquery2.default)('.' + RFC_CLASS_NAME).removeClass(RFC_CLASS_NAME).each(function () {
    _hooks2.default.call('wprfc/' + (0, _jquery2.default)(this).attr('data-wprfc'), (0, _jquery2.default)(this).data(), (0, _jquery2.default)(this));
  });
});

/***/ }),

/***/ "_":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),

/***/ "i18n-react":
/*!***************************************!*\
  !*** external "window['i18n-react']" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window['i18n-react'];

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = immer;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = mobx;

/***/ }),

/***/ "mobx-state-tree":
/*!********************************!*\
  !*** external "mobxStateTree" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = mobxStateTree;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-aiot":
/*!****************************!*\
  !*** external "ReactAIOT" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactAIOT;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "rmlopts":
/*!**************************!*\
  !*** external "rmlOpts" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rmlOpts;

/***/ }),

/***/ "wp":
/*!*********************!*\
  !*** external "wp" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp;

/***/ }),

/***/ "wpApiSettings":
/*!********************************!*\
  !*** external "wpApiSettings" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wpApiSettings;

/***/ })

/******/ });
//# sourceMappingURL=rml.js.map