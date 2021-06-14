module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _slicedToArray2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _toConsumableArray2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

var _ref2 = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[],"enableBlurryPlaceholder":false} || _imageConfig.imageConfigDefault,
    configDeviceSizes = _ref2.deviceSizes,
    configImageSizes = _ref2.imageSizes,
    configLoader = _ref2.loader,
    configPath = _ref2.path,
    configDomains = _ref2.domains,
    configEnableBlurryPlaceholder = _ref2.enableBlurryPlaceholder; // sort smallest to largest


var allSizes = [].concat((0, _toConsumableArray2["default"])(configDeviceSizes), (0, _toConsumableArray2["default"])(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= configDeviceSizes[0] * smallestRatio;
        }),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  var widths = (0, _toConsumableArray2["default"])(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));
  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref3) {
  var src = _ref3.src,
      unoptimized = _ref3.unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      quality = _ref3.quality,
      sizes = _ref3.sizes,
      loader = _ref3.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src: src,
      quality: quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  var load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2["default"])({
      root: configPath
    }, loaderProps));
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(configLoader));
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(element, placeholder) {
  if (placeholder === 'blur' && element) {
    if (element.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      element.style.backgroundImage = 'none';
    } else {
      element.onload = function () {
        element.style.backgroundImage = 'none';
      };
    }
  }
}

function Image(_ref) {
  var src = _ref.src,
      sizes = _ref.sizes,
      _ref$unoptimized = _ref.unoptimized,
      unoptimized = _ref$unoptimized === void 0 ? false : _ref$unoptimized,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? false : _ref$priority,
      loading = _ref.loading,
      className = _ref.className,
      quality = _ref.quality,
      width = _ref.width,
      height = _ref.height,
      objectFit = _ref.objectFit,
      objectPosition = _ref.objectPosition,
      _ref$loader = _ref.loader,
      loader = _ref$loader === void 0 ? defaultImageLoader : _ref$loader,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'empty' : _ref$placeholder,
      blurDataURL = _ref.blurDataURL,
      all = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';
  var unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (!configEnableBlurryPlaceholder) {
    placeholder = 'empty';
  }

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (unsized) {
      throw new Error("Image with src \"".concat(src, "\" has deprecated \"unsized\" property, which was removed in favor of the \"layout='fill'\" property"));
    }
  }

  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  var _ref4 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  }),
      _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
      setRef = _ref5[0],
      isIntersected = _ref5[1];

  var isVisible = !isLazy || isIntersected;
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);
  var MIN_IMG_SIZE_FOR_PLACEHOLDER = 5000;
  var tooSmallForBlurryPlaceholder = widthInt && heightInt && widthInt * heightInt < MIN_IMG_SIZE_FOR_PLACEHOLDER;
  var shouldShowBlurryPlaceholder = placeholder === 'blur' && !tooSmallForBlurryPlaceholder;
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = (0, _extends2["default"])({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: objectFit,
    objectPosition: objectPosition
  }, shouldShowBlurryPlaceholder ? {
    backgroundSize: 'cover',
    backgroundImage: "url(\"".concat(blurDataURL, "\")")
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop: paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  }

  var imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: "data:image/svg+xml;base64,".concat((0, _toBase.toBase64)(sizerSvg))
  }) : null) : null, !isVisible && /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, generateImgAttrs({
    src: src,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt,
    sizes: sizes,
    loader: loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: function ref(element) {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref6) {
  var root = _ref6.root,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  var params = ['auto=format', 'fit=max', 'w=' + width];
  var paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return "".concat(root).concat(normalizeSrc(src)).concat(paramsString);
}

function akamaiLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref8) {
  var root = _ref8.root,
      src = _ref8.src,
      width = _ref8.width,
      quality = _ref8.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function defaultLoader(_ref9) {
  var root = _ref9.root,
      src = _ref9.src,
      width = _ref9.width,
      quality = _ref9.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src.startsWith('//')) {
      throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)"));
    }

    if (!src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js"));

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/components/body/Body.js":
/*!*************************************!*\
  !*** ./src/components/body/Body.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSessionStorage */ "./src/hooks/useSessionStorage.js");
/* harmony import */ var _error_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/ErrorBoundary */ "./src/components/error/ErrorBoundary.js");
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body.module.scss */ "./src/components/body/body.module.scss");
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_body_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _GenresFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GenresFilter */ "./src/components/body/GenresFilter.js");
/* harmony import */ var _movieList_MovieList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movieList/MovieList */ "./src/components/body/movieList/MovieList.js");
/* harmony import */ var _MoviesSorter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MoviesSorter */ "./src/components/body/MoviesSorter.js");












var Body = function Body(_ref) {
  var movies = _ref.movies,
      loadMovies = _ref.loadMovies;

  var _useSessionStorage = Object(_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_5__["default"])('filter'),
      _useSessionStorage2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useSessionStorage, 2),
      currentFilter = _useSessionStorage2[0],
      setCurrentFilter = _useSessionStorage2[1];

  var _useSessionStorage3 = Object(_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_5__["default"])('sort'),
      _useSessionStorage4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useSessionStorage3, 2),
      currentSort = _useSessionStorage4[0],
      setCurrentSort = _useSessionStorage4[1];

  var searchQuery = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])().search;
  var query = new URLSearchParams(searchQuery).get('search');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    loadMovies(currentFilter, currentSort, query);
  }, [currentFilter, currentSort, query, loadMovies]);

  var onFilterClick = function onFilterClick(genre) {
    setCurrentFilter(genre);
  };

  var onSortChange = function onSortChange(sort) {
    setCurrentSort(sort);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.body,
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.submenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GenresFilter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onFilterClick: onFilterClick,
    selectedFilter: currentFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MoviesSorter__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onSortChange: onSortChange,
    selectedSort: currentSort
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/",
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
    to: "/movies"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/movies"
  }, !(movies !== null && movies !== void 0 && movies.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noMovies
  }, "No Movies Found")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_error_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_movieList_MovieList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    movies: movies
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "*"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
    to: "/pagenotfound"
  }))));
};

Body.propTypes = {
  movies: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    poster_path: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    release_date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    genres: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string),
    vote_average: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    tagline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    vote_count: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    overview: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    budget: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    revenue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    runtime: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  })).isRequired,
  loadMovies: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./src/components/body/GenresFilter.js":
/*!*********************************************!*\
  !*** ./src/components/body/GenresFilter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body.module.scss */ "./src/components/body/body.module.scss");
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_body_module_scss__WEBPACK_IMPORTED_MODULE_3__);




var genres = ['All', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

var GenresFilter = function GenresFilter(_ref) {
  var onFilterClick = _ref.onFilterClick,
      selectedFilter = _ref.selectedFilter;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(selectedFilter),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.genresFilter
  }, genres.map(function (genre) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      key: genre,
      type: "button",
      onClick: function onClick() {
        onFilterClick(genre);
        setSelected(genre);
      },
      className: "".concat(_body_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a, ".item ").concat(genre === selected ? 'active' : '')
    }, genre);
  }));
};

GenresFilter.propTypes = {
  onFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  selectedFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (GenresFilter);

/***/ }),

/***/ "./src/components/body/MoviesSorter.js":
/*!*********************************************!*\
  !*** ./src/components/body/MoviesSorter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body.module.scss */ "./src/components/body/body.module.scss");
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_body_module_scss__WEBPACK_IMPORTED_MODULE_5__);







var MoviesSorter = function MoviesSorter(_ref) {
  var onSortChange = _ref.onSortChange,
      selectedSort = _ref.selectedSort;

  if (!selectedSort) {
    onSortChange('release_date');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sort
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sort by "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sortForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    labelId: "simple-select",
    id: "simple-select",
    defaultValue: selectedSort,
    onChange: function onChange(event) {
      return onSortChange(event.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: "vote_average"
  }, "Rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: "release_date"
  }, "Release date"))));
};

MoviesSorter.propTypes = {
  onSortChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  selectedSort: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MoviesSorter);

/***/ }),

/***/ "./src/components/body/body.module.scss":
/*!**********************************************!*\
  !*** ./src/components/body/body.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"body": "body_body__1Sr7c",
	"submenu": "body_submenu__3_czv",
	"sort": "body_sort__2QfZ-",
	"MuiFormControl-root": "body_MuiFormControl-root__2M4UB",
	"sortForm": "body_sortForm__19SSw",
	"MuiSelect-select": "body_MuiSelect-select__HalxI",
	"MuiSelect-icon": "body_MuiSelect-icon__VG8m5",
	"MuiInput-underline": "body_MuiInput-underline__1gRE2",
	"genresFilter": "body_genresFilter__1k2Lq",
	"item": "body_item__1sD1C",
	"active": "body_active__r0qtu",
	"movies-counter": "body_movies-counter__xe4wm",
	"noMovies": "body_noMovies__2T1P5"
};


/***/ }),

/***/ "./src/components/body/index.js":
/*!**************************************!*\
  !*** ./src/components/body/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/movies */ "./src/store/actions/movies.js");
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body */ "./src/components/body/Body.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    movies: state.movies
  };
};

var mapDispatchToProps = {
  loadMovies: _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__["loadMovies"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Body__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/body/movieList/DeleteMovieDialog.js":
/*!************************************************************!*\
  !*** ./src/components/body/movieList/DeleteMovieDialog.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);











var DeleteMovieDialog = function DeleteMovieDialog(_ref) {
  var open = _ref.open,
      movieId = _ref.movieId,
      onClose = _ref.onClose,
      onDelete = _ref.onDelete;

  var onCloseDeleteDialog = function onCloseDeleteDialog() {
    onClose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default.a, {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: open,
    onClose: onCloseDeleteDialog,
    maxWidth: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    "aria-label": "close",
    onClick: onCloseDeleteDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "alert-dialog-title"
  }, "Delete Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "dialog-form-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "alert-dialog-description"
  }, "Are you sure you want to delete this movie?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: function onClick() {
      return onDelete(movieId);
    },
    color: "primary",
    size: "large"
  }, "Confirm")));
};

DeleteMovieDialog.propTypes = {
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  movieId: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteMovieDialog);

/***/ }),

/***/ "./src/components/body/movieList/MovieList.js":
/*!****************************************************!*\
  !*** ./src/components/body/movieList/MovieList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieCard */ "./src/components/body/movieList/movieCard/index.js");




var MovieList = function MovieList(_ref) {
  var movies = _ref.movies;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "movieList"
  }, movies === null || movies === void 0 ? void 0 : movies.map(function (movie) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_movieCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: movie === null || movie === void 0 ? void 0 : movie.id,
      movie: movie
    });
  }));
};

MovieList.propTypes = {
  movies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    poster_path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    release_date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    genres: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
    vote_average: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    tagline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    vote_count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    overview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    budget: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    revenue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    runtime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MovieList);

/***/ }),

/***/ "./src/components/body/movieList/UpdateMovieDialog.js":
/*!************************************************************!*\
  !*** ./src/components/body/movieList/UpdateMovieDialog.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./src/components/constants.js");















var UpdateMovieDialog = function UpdateMovieDialog(_ref) {
  var movie = _ref.movie,
      open = _ref.open,
      onUpdate = _ref.onUpdate,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((movie === null || movie === void 0 ? void 0 : movie.genres) || []),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      genres = _useState2[0],
      setGenres = _useState2[1];

  var onCloseEditDialog = function onCloseEditDialog() {
    onClose();
  };

  var onChangeGenres = function onChangeGenres(value, setFieldValue) {
    setGenres(value);
    setFieldValue('genres', value);
  };

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_11__["useFormik"])({
    initialValues: {
      id: movie === null || movie === void 0 ? void 0 : movie.id,
      title: movie === null || movie === void 0 ? void 0 : movie.title,
      release_date: movie === null || movie === void 0 ? void 0 : movie.release_date,
      poster_path: movie === null || movie === void 0 ? void 0 : movie.poster_path,
      overview: movie === null || movie === void 0 ? void 0 : movie.overview,
      runtime: movie === null || movie === void 0 ? void 0 : movie.runtime,
      genres: genres
    },
    validationSchema: _constants__WEBPACK_IMPORTED_MODULE_13__["validationSchema"],
    values: {
      genres: genres
    },
    onSubmit: function onSubmit(fields) {
      onUpdate(fields);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["FormikProvider"], {
    value: formik
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
    disableEscapeKeyDown: true,
    open: open,
    onClose: onCloseEditDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    "aria-label": "close",
    onClick: onCloseEditDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default.a, null, "Edit Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "dialog-form-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Movie ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name",
    style: {
      color: 'white'
    }
  }, movie === null || movie === void 0 ? void 0 : movie.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].TITLE,
    type: "text",
    className: "edit-field"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].TITLE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Release Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RELEASE_DATE,
    type: "date",
    className: "edit-field"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RELEASE_DATE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Movie URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].POSTER_PATH,
    type: "text",
    className: "edit-field"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].POSTER_PATH,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].GENRES,
    className: "edit-field",
    value: genres,
    onChange: function onChange(event) {
      return onChangeGenres(event.target.value, formik.setFieldValue);
    },
    multiple: true
  }, _constants__WEBPACK_IMPORTED_MODULE_13__["genresArray"].map(function (genre) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
      key: genre,
      value: genre
    }, genre);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].GENRES,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    as: "textarea",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].OVERVIEW,
    "aria-label": "empty textarea",
    className: "edit-field"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].OVERVIEW,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Runtime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RUNTIME,
    type: "number",
    className: "edit-field"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RUNTIME,
    component: "div",
    className: "error"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: onCloseEditDialog,
    color: "secondary",
    size: "large"
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "primary",
    size: "large",
    type: "submit"
  }, "Save")))));
};

UpdateMovieDialog.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired,
    poster_path: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    release_date: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    genres: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string),
    vote_average: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
    tagline: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    url: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    vote_count: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
    overview: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    budget: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
    revenue: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
    runtime: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number
  }).isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool.isRequired,
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UpdateMovieDialog);

/***/ }),

/***/ "./src/components/body/movieList/movieCard/MovieCard.js":
/*!**************************************************************!*\
  !*** ./src/components/body/movieList/movieCard/MovieCard.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DeleteMovieDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DeleteMovieDialog */ "./src/components/body/movieList/DeleteMovieDialog.js");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../movies.module.scss */ "./src/components/body/movieList/movies.module.scss");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_movies_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _UpdateMovieDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UpdateMovieDialog */ "./src/components/body/movieList/UpdateMovieDialog.js");


/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */











var MovieCard = function MovieCard(_ref) {
  var _movie$release_date, _movie$genres;

  var movie = _ref.movie,
      updateMovie = _ref.updateMovie,
      deleteMovie = _ref.deleteMovie;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      openDelete = _useState4[0],
      setOpenDelete = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      openEdit = _useState6[0],
      setOpenEdit = _useState6[1];

  var handleClick = function handleClick(e) {
    setAnchorEl(e.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var onEditMenuItemClick = function onEditMenuItemClick() {
    handleClose();
    setOpenEdit(true);
  };

  var onDeleteMenuItemClick = function onDeleteMenuItemClick() {
    handleClose();
    setOpenDelete(true);
  };

  var onDeleteMovie = function onDeleteMovie(movieId) {
    deleteMovie(movieId);
    setOpenDelete(false);
  };

  var onUpdateMovie = function onUpdateMovie(m) {
    updateMovie(m);
    setOpenEdit(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "movieCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/movies/".concat(movie === null || movie === void 0 ? void 0 : movie.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: movie === null || movie === void 0 ? void 0 : movie.poster_path,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "movieInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "infoFirstRow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "title"
  }, movie === null || movie === void 0 ? void 0 : movie.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "movieReleaseYear"
  }, movie === null || movie === void 0 ? void 0 : (_movie$release_date = movie.release_date) === null || _movie$release_date === void 0 ? void 0 : _movie$release_date.split('-')[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "genre"
  }, movie === null || movie === void 0 ? void 0 : (_movie$genres = movie.genres) === null || _movie$genres === void 0 ? void 0 : _movie$genres.join(', '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "card-menu-icon",
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: onEditMenuItemClick,
    className: "card-menu-item"
  }, "edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: onDeleteMenuItemClick,
    className: "card-menu-item"
  }, "delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UpdateMovieDialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: openEdit,
    movie: movie,
    onUpdate: onUpdateMovie,
    onClose: function onClose() {
      return setOpenEdit(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DeleteMovieDialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
    open: openDelete,
    movieId: movie === null || movie === void 0 ? void 0 : movie.id,
    onDelete: onDeleteMovie,
    onClose: function onClose() {
      return setOpenDelete(false);
    }
  })));
};

MovieCard.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
    poster_path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    release_date: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    genres: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string),
    vote_average: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    tagline: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    vote_count: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    overview: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    budget: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    revenue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    runtime: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
  }).isRequired,
  updateMovie: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  deleteMovie: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MovieCard);

/***/ }),

/***/ "./src/components/body/movieList/movieCard/index.js":
/*!**********************************************************!*\
  !*** ./src/components/body/movieList/movieCard/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/actions/movies */ "./src/store/actions/movies.js");
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieCard */ "./src/components/body/movieList/movieCard/MovieCard.js");



var mapDispatchToProps = {
  updateMovie: _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__["updateMovie"],
  deleteMovie: _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__["deleteMovie"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_MovieCard__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/body/movieList/movies.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/body/movieList/movies.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"movieList": "movies_movieList__2jkpg",
	"movieCard": "movies_movieCard__1gePF",
	"cardMenuIcon": "movies_cardMenuIcon__2RoNb",
	"movieInfo": "movies_movieInfo__1rN1w",
	"title": "movies_title__8soAs",
	"infoFirstRow": "movies_infoFirstRow__3mX_E",
	"movieReleaseYear": "movies_movieReleaseYear__3MxSo",
	"genre": "movies_genre__2y4vp",
	"MuiPaper-root": "movies_MuiPaper-root__1AQlm",
	"MuiMenu-paper": "movies_MuiMenu-paper__ohhxu",
	"MuiPopover-paper": "movies_MuiPopover-paper__2Zu0M",
	"MuiButtonBase-root": "movies_MuiButtonBase-root__ZnN-3",
	"MuiListItem-root": "movies_MuiListItem-root__3zKJp",
	"MuiMenuItem-root": "movies_MuiMenuItem-root__1q3E4",
	"card-menu-item": "movies_card-menu-item__3nuWi",
	"MuiDialog-paper": "movies_MuiDialog-paper__svPeQ",
	"MuiInput-underline": "movies_MuiInput-underline__1wOU8",
	"dialog-form-content": "movies_dialog-form-content__1iKf6",
	"edit-field-name": "movies_edit-field-name__2mT2l",
	"edit-field": "movies_edit-field__2DiMO",
	"MuiSelect-icon": "movies_MuiSelect-icon__uXJVm",
	"error": "movies_error__16WBk",
	"MuiIconButton-root": "movies_MuiIconButton-root__23CCG",
	"MuiTypography-h6": "movies_MuiTypography-h6__IVOI5",
	"MuiTypography-colorTextSecondary": "movies_MuiTypography-colorTextSecondary__1VL1R",
	"MuiDialogActions-spacing": "movies_MuiDialogActions-spacing__1u0Uq",
	"MuiButton-textPrimary": "movies_MuiButton-textPrimary__J5RyP",
	"MuiButton-textSecondary": "movies_MuiButton-textSecondary__2mgVI"
};


/***/ }),

/***/ "./src/components/constants.js":
/*!*************************************!*\
  !*** ./src/components/constants.js ***!
  \*************************************/
/*! exports provided: MOVIE_FIELDS, genresArray, validationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_FIELDS", function() { return MOVIE_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genresArray", function() { return genresArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationSchema", function() { return validationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

var MOVIE_FIELDS = {
  TITLE: 'title',
  RELEASE_DATE: 'release_date',
  POSTER_PATH: 'poster_path',
  GENRES: 'genres',
  OVERVIEW: 'overview',
  RUNTIME: 'runtime'
};
var genresArray = ['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Family', 'Fantasy', 'Science Fiction'];
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  title: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Title is required'),
  poster_path: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().url().required('Poster url is required'),
  release_date: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
  overview: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Overview is required'),
  runtime: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Runtime is required'),
  genres: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().min(1).required('Minimum one genre should be selected')
});

/***/ }),

/***/ "./src/components/error/ErrorBoundary.js":
/*!***********************************************!*\
  !*** ./src/components/error/ErrorBoundary.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable react/prop-types */


var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch() {}
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Something went wrong (");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./src/components/error/PageNotFound.js":
/*!**********************************************!*\
  !*** ./src/components/error/PageNotFound.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error.module.scss */ "./src/components/error/error.module.scss");
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_error_module_scss__WEBPACK_IMPORTED_MODULE_5__);







/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
  src: "/public/images/logo.png",
  className: "logo-footer"
});

var PageNotFound = function PageNotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: _error_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.errorPage,
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: "/public/images/logo.png",
    width: "150",
    height: "50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _error_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.errorContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _error_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.error
  }, "Page Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/movies",
    className: _error_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.homeLink,
    title: "linkToHome"
  }, "Go Back To Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/components/error/error.module.scss":
/*!************************************************!*\
  !*** ./src/components/error/error.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"errorPage": "error_errorPage__3AWyo",
	"logo": "error_logo__mIz0m",
	"errorContent": "error_errorContent__1v6Fk",
	"error": "error_error__2upOj",
	"homeLink": "error_homeLink__3oWG3"
};


/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.module.scss */ "./src/components/footer/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_3__);





var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: "/public/images/logo.png",
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logoFooter,
    width: "150",
    height: "50"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/footer/footer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/footer/footer.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "footer_footer__2j_Fr",
	"logoFooter": "footer_logoFooter__2jK8e"
};


/***/ }),

/***/ "./src/components/header/AddMovieDialog.js":
/*!*************************************************!*\
  !*** ./src/components/header/AddMovieDialog.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants */ "./src/components/constants.js");















var AddMovieDialog = function AddMovieDialog(_ref) {
  var open = _ref.open,
      onAdd = _ref.onAdd,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      genres = _useState2[0],
      setGenres = _useState2[1];

  var onCloseAddDialog = function onCloseAddDialog() {
    onClose();
  };

  var onChangeGenres = function onChangeGenres(value, setFieldValue) {
    setGenres(value);
    setFieldValue('genres', value);
  };

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_11__["useFormik"])({
    initialValues: {
      title: '',
      release_date: '',
      poster_path: '',
      genres: genres,
      overview: '',
      runtime: ''
    },
    validationSchema: _constants__WEBPACK_IMPORTED_MODULE_13__["validationSchema"],
    values: {
      genres: genres
    },
    onSubmit: function onSubmit(values) {
      onAdd(values);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["FormikProvider"], {
    value: formik
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: open,
    onClose: onCloseAddDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    "aria-label": "close",
    onClick: onCloseAddDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Form"], {
    title: "add-movie",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "alert-dialog-title"
  }, "Add Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "dialog-form-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].TITLE,
    placeholder: "Movie Title",
    className: "edit-field",
    title: "title",
    "data-testid": "title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].TITLE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Release Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    type: "date",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RELEASE_DATE,
    placeholder: "Select Date",
    className: "edit-field",
    title: "release_date",
    "data-testid": "release_date"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RELEASE_DATE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Movie URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].POSTER_PATH,
    placeholder: "Movie URL here",
    className: "edit-field",
    title: "poster_path",
    "data-testid": "poster_path"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].POSTER_PATH,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].GENRES,
    className: "edit-field",
    value: genres,
    onChange: function onChange(event) {
      return onChangeGenres(event.target.value, formik.setFieldValue);
    },
    multiple: true,
    title: "genres",
    "data-testid": "genres"
  }, _constants__WEBPACK_IMPORTED_MODULE_13__["genresArray"].map(function (genre) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
      key: genre,
      value: genre
    }, genre);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].GENRES,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    as: "textarea",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].OVERVIEW,
    placeholder: "Overview Here",
    className: "edit-field",
    title: "overview",
    "data-testid": "overview"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].OVERVIEW,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "edit-field-name"
  }, "Runtime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    type: "number",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RUNTIME,
    placeholder: "Runtime Here",
    className: "edit-field",
    title: "runtime",
    "data-testid": "runtime"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RUNTIME,
    component: "div",
    className: "error"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: onCloseAddDialog,
    color: "secondary",
    size: "large",
    title: "reset"
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "submit",
    color: "primary",
    size: "large",
    "data-testid": "submit"
  }, "Submit")))));
};

AddMovieDialog.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  onAdd: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AddMovieDialog);

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AddMovieDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddMovieDialog */ "./src/components/header/AddMovieDialog.js");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header.module.scss */ "./src/components/header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _movieDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movieDetails */ "./src/components/header/movieDetails/index.js");
/* harmony import */ var _searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./searchBar/SearchBar */ "./src/components/header/searchBar/SearchBar.js");














var Header = function Header(_ref) {
  var addMovie = _ref.addMovie;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      openAdd = _useState2[0],
      setOpenAdd = _useState2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();

  var onAddMovieClick = function onAddMovieClick() {
    setOpenAdd(true);
  };

  var onAddMovie = function onAddMovie(movie) {
    addMovie(movie);
    setOpenAdd(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header,
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: "/movies/:movieId"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.subheader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
    src: "/public/images/logo.png",
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.logoFooter,
    width: "150",
    height: "50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: function onClick() {
      return history.push('/');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "large"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_movieDetails__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.subheader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
    src: "/public/images/logo.png",
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.logoFooter,
    width: "150",
    height: "50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "button-add-movie",
    variant: "contained",
    size: "large",
    onClick: onAddMovieClick
  }, "+ Add Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddMovieDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: openAdd,
    onAdd: onAddMovie,
    onClose: function onClose() {
      return setOpenAdd(false);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], null))));
};

Header.propTypes = {
  addMovie: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header/header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/header/header.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__2pLiX",
	"subheader": "header_subheader__5Ww61",
	"logo": "header_logo__24fwD",
	"button-add-movie": "header_button-add-movie__28c5Z",
	"MuiIconButton-root": "header_MuiIconButton-root__MaE5s"
};


/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/movies */ "./src/store/actions/movies.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/header/Header.js");



var mapDispatchToProps = {
  addMovie: _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__["addMovie"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_Header__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/header/movieDetails/MovieDetails.js":
/*!************************************************************!*\
  !*** ./src/components/header/movieDetails/MovieDetails.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movieDetails.module.scss */ "./src/components/header/movieDetails/movieDetails.module.scss");
/* harmony import */ var _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3__);





var MovieDetails = function MovieDetails(_ref) {
  var _movie$release_date;

  var movie = _ref.movie,
      getMovie = _ref.getMovie;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      movieId = _useParams.movieId;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getMovie(Number(movieId));
  }, [movieId, getMovie]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "movie-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: movie === null || movie === void 0 ? void 0 : movie.poster_path,
    alt: "",
    className: "poster"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "first-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, movie === null || movie === void 0 ? void 0 : movie.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rating"
  }, movie === null || movie === void 0 ? void 0 : movie.vote_average)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tagline"
  }, movie === null || movie === void 0 ? void 0 : movie.tagline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "third-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "release-date"
  }, movie === null || movie === void 0 ? void 0 : (_movie$release_date = movie.release_date) === null || _movie$release_date === void 0 ? void 0 : _movie$release_date.split('-')[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "runtime"
  }, movie === null || movie === void 0 ? void 0 : movie.runtime, " min")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overview"
  }, movie === null || movie === void 0 ? void 0 : movie.overview)));
};

MovieDetails.defaultProps = {
  movie: null
};
MovieDetails.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    poster_path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    release_date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    genres: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
    vote_average: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    tagline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    vote_count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    overview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    budget: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    revenue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    runtime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  getMovie: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MovieDetails);

/***/ }),

/***/ "./src/components/header/movieDetails/index.js":
/*!*****************************************************!*\
  !*** ./src/components/header/movieDetails/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/actions/header */ "./src/store/actions/header.js");
/* harmony import */ var _MovieDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieDetails */ "./src/components/header/movieDetails/MovieDetails.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    movie: state.movie
  };
};

var mapDispatchToProps = {
  getMovie: _store_actions_header__WEBPACK_IMPORTED_MODULE_1__["getMovie"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_MovieDetails__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/header/movieDetails/movieDetails.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/header/movieDetails/movieDetails.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"movie-details": "movieDetails_movie-details__7gsNb",
	"poster": "movieDetails_poster__1EdVn",
	"info": "movieDetails_info__2zPd9",
	"first-row": "movieDetails_first-row__ui2fx",
	"title": "movieDetails_title__Ohp-j",
	"rating": "movieDetails_rating__kJqlK",
	"third-row": "movieDetails_third-row__2IKyf",
	"release-date": "movieDetails_release-date__293cs",
	"runtime": "movieDetails_runtime__3eb_e",
	"dark": "movieDetails_dark__uFdMF"
};


/***/ }),

/***/ "./src/components/header/searchBar/SearchBar.js":
/*!******************************************************!*\
  !*** ./src/components/header/searchBar/SearchBar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _searchBar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchBar.module.scss */ "./src/components/header/searchBar/searchBar.module.scss");
/* harmony import */ var _searchBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_searchBar_module_scss__WEBPACK_IMPORTED_MODULE_4__);






var SearchBar = function SearchBar() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var onSearchMovies = function onSearchMovies(query) {
    history.push("/movies?search=".concat(query));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _searchBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _searchBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title
  }, "find your movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      query: ''
    },
    onSubmit: function onSubmit(fields) {
      onSearchMovies(fields.query);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "search",
    variant: "filled",
    color: "secondary",
    id: "search-input",
    name: "query"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    type: "submit"
  }, "Search"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/components/header/searchBar/searchBar.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/header/searchBar/searchBar.module.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBar": "searchBar_searchBar__1MCa7",
	"title": "searchBar_title__2E-8I",
	"search-input": "searchBar_search-input__2o5fb"
};


/***/ }),

/***/ "./src/components/layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.scss */ "./src/components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);




var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mainlayout
  }, children);
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/layout/layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/layout/layout.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainlayout": "layout_mainlayout__1uOKv"
};


/***/ }),

/***/ "./src/hooks/useSessionStorage.js":
/*!****************************************!*\
  !*** ./src/hooks/useSessionStorage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var useSessionStorage = function useSessionStorage(storageKey) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false ? undefined : null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (value) {
      sessionStorage.setItem(storageKey, value);
    }
  }, [value, storageKey]);
  return [value, setValue];
};

/* harmony default export */ __webpack_exports__["default"] = (useSessionStorage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/body */ "./src/components/body/index.js");
/* harmony import */ var _components_error_PageNotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/error/PageNotFound */ "./src/components/error/PageNotFound.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout/Layout */ "./src/components/layout/Layout.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");



 // import '../components/error/error.scss';








var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/pagenotfound"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_error_PageNotFound__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_body__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/services/MoviesService.js":
/*!***************************************!*\
  !*** ./src/services/MoviesService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



var MoviesService = function MoviesService() {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MoviesService);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "apiURL", 'http://localhost:4000/movies/');

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "fetchMovies", function (filter, sort, query) {
    return fetch(_this.buildUrl(filter, sort, query)).then(function (res) {
      return res.json();
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getMovieById", function (movieId) {
    return fetch(_this.apiURL + movieId).then(function (res) {
      return res.json();
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "addMovie", function (movie) {
    return fetch(_this.apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    }).then(function (res) {
      return res.json();
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "updateMovie", function (movie) {
    return fetch(_this.apiURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "deleteMovie", function (id) {
    return fetch(_this.apiURL + id, {
      method: 'DELETE'
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "buildUrl", function (filter, sort, query) {
    var url = "".concat(_this.apiURL, "?sortBy=").concat(sort, "&sortOrder=desc");

    if (filter && filter !== 'All') {
      url += "?filter=".concat(filter);
    }

    if (query) {
      url += "&search=".concat(query, "&searchBy=title");
    }

    return url;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new MoviesService());

/***/ }),

/***/ "./src/store/actions/header.js":
/*!*************************************!*\
  !*** ./src/store/actions/header.js ***!
  \*************************************/
/*! exports provided: getMovie, getMovieSuccess, getMovieFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovie", function() { return getMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieSuccess", function() { return getMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieFail", function() { return getMovieFail; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/actions/types.js");

var getMovie = function getMovie(movieId) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIE_BY_ID"],
    movieId: movieId
  };
};
var getMovieSuccess = function getMovieSuccess(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIE_BY_ID_SUCCESS"],
    movie: movie
  };
};
var getMovieFail = function getMovieFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIE_BY_ID_FAIL"],
    message: message
  };
};

/***/ }),

/***/ "./src/store/actions/movies.js":
/*!*************************************!*\
  !*** ./src/store/actions/movies.js ***!
  \*************************************/
/*! exports provided: loadMovies, loadMoviesSuccess, loadMoviesFail, addMovie, addMovieSuccess, addMovieFail, updateMovie, updateMovieSuccess, updateMovieFail, deleteMovie, deleteMovieSuccess, deleteMovieFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovies", function() { return loadMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoviesSuccess", function() { return loadMoviesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoviesFail", function() { return loadMoviesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovie", function() { return addMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovieSuccess", function() { return addMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovieFail", function() { return addMovieFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovie", function() { return updateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovieSuccess", function() { return updateMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovieFail", function() { return updateMovieFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovie", function() { return deleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovieSuccess", function() { return deleteMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovieFail", function() { return deleteMovieFail; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/actions/types.js");

var loadMovies = function loadMovies(filter, sort, query) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MOVIES"],
    filter: filter,
    sort: sort,
    query: query
  };
};
var loadMoviesSuccess = function loadMoviesSuccess(movies) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MOVIES_SUCCCESS"],
    movies: movies
  };
};
var loadMoviesFail = function loadMoviesFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MOVIES_FAIL"],
    message: message
  };
};
var addMovie = function addMovie(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE"],
    movie: movie
  };
};
var addMovieSuccess = function addMovieSuccess(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE_SUCCESS"],
    movie: movie
  };
};
var addMovieFail = function addMovieFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE_FAIL"],
    message: message
  };
};
var updateMovie = function updateMovie(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MOVIE"],
    movie: movie
  };
};
var updateMovieSuccess = function updateMovieSuccess(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MOVIE_SUCCESS"],
    movie: movie
  };
};
var updateMovieFail = function updateMovieFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MOVIE_FAIL"],
    message: message
  };
};
var deleteMovie = function deleteMovie(id) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_MOVIE"],
    id: id
  };
};
var deleteMovieSuccess = function deleteMovieSuccess(id) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_MOVIE_SUCCESS"],
    id: id
  };
};
var deleteMovieFail = function deleteMovieFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_MOVIE_FAIL"],
    message: message
  };
};

/***/ }),

/***/ "./src/store/actions/types.js":
/*!************************************!*\
  !*** ./src/store/actions/types.js ***!
  \************************************/
/*! exports provided: LOAD_MOVIES, LOAD_MOVIES_SUCCCESS, LOAD_MOVIES_FAIL, ADD_MOVIE, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAIL, UPDATE_MOVIE, UPDATE_MOVIE_SUCCESS, UPDATE_MOVIE_FAIL, DELETE_MOVIE, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAIL, GET_MOVIE_BY_ID, GET_MOVIE_BY_ID_SUCCESS, GET_MOVIE_BY_ID_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MOVIES", function() { return LOAD_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MOVIES_SUCCCESS", function() { return LOAD_MOVIES_SUCCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MOVIES_FAIL", function() { return LOAD_MOVIES_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE", function() { return ADD_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_SUCCESS", function() { return ADD_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_FAIL", function() { return ADD_MOVIE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE", function() { return UPDATE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE_SUCCESS", function() { return UPDATE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE_FAIL", function() { return UPDATE_MOVIE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE", function() { return DELETE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE_SUCCESS", function() { return DELETE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE_FAIL", function() { return DELETE_MOVIE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_BY_ID", function() { return GET_MOVIE_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_BY_ID_SUCCESS", function() { return GET_MOVIE_BY_ID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_BY_ID_FAIL", function() { return GET_MOVIE_BY_ID_FAIL; });
var LOAD_MOVIES = 'LOAD_MOVIES';
var LOAD_MOVIES_SUCCCESS = 'LOAD_MOVIES_SUCCCESS';
var LOAD_MOVIES_FAIL = 'LOAD_MOVIES_FAIL';
var ADD_MOVIE = 'ADD_MOVIE';
var ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
var ADD_MOVIE_FAIL = 'ADD_MOVIE_FAIL';
var UPDATE_MOVIE = 'UPDATE_MOVIE';
var UPDATE_MOVIE_SUCCESS = 'UPDATE_MOVIE_SUCCESS';
var UPDATE_MOVIE_FAIL = 'UPDATE_MOVIE_FAIL';
var DELETE_MOVIE = 'DELETE_MOVIE';
var DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
var DELETE_MOVIE_FAIL = 'DELETE_MOVIE_FAIL';
var GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
var GET_MOVIE_BY_ID_SUCCESS = 'GET_MOVIE_BY_ID_SUCCESS';
var GET_MOVIE_BY_ID_FAIL = 'GET_MOVIE_BY_ID_FAIL';

/***/ }),

/***/ "./src/store/reducers/header.js":
/*!**************************************!*\
  !*** ./src/store/reducers/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/store/actions/types.js");


var headerReducer = function headerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIE_BY_ID_SUCCESS"]:
      return action.movie;

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIE_BY_ID_FAIL"]:
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (headerReducer);

/***/ }),

/***/ "./src/store/reducers/movies.js":
/*!**************************************!*\
  !*** ./src/store/reducers/movies.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/types */ "./src/store/actions/types.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var moviesReducer = function moviesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["LOAD_MOVIES_SUCCCESS"]:
      return action.movies;

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["ADD_MOVIE_SUCCESS"]:
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state), [action.movie]);

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_MOVIE_SUCCESS"]:
      return state.map(function (movie) {
        if (movie.id === action.movie.id) {
          return _objectSpread({}, action.movie);
        }

        return movie;
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["DELETE_MOVIE_SUCCESS"]:
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state.filter(function (movie) {
        return movie.id !== action.id;
      }));

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["LOAD_MOVIES_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["ADD_MOVIE_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_MOVIE_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["DELETE_MOVIE_FAIL"]:
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (moviesReducer);

/***/ }),

/***/ "./src/store/sagas.js":
/*!****************************!*\
  !*** ./src/store/sagas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_MoviesService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/MoviesService */ "./src/services/MoviesService.js");
/* harmony import */ var _actions_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/header */ "./src/store/actions/header.js");
/* harmony import */ var _actions_movies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/movies */ "./src/store/actions/movies.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/types */ "./src/store/actions/types.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getAllMovies),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getMovie),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addMovie),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updateMovie),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteMovie),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(moviesSagas);

// eslint-disable-next-line import/no-extraneous-dependencies







function getAllMovies(_ref) {
  var filter, sort, query, movies;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getAllMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          filter = _ref.filter, sort = _ref.sort, query = _ref.query;
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__["default"].fetchMovies, filter, sort, query);

        case 4:
          movies = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_movies__WEBPACK_IMPORTED_MODULE_5__["loadMoviesSuccess"])(movies.data));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_movies__WEBPACK_IMPORTED_MODULE_5__["loadMoviesFail"])(_context.t0.message));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}

function getMovie(_ref2) {
  var movieId, movie;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          movieId = _ref2.movieId;
          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__["default"].getMovieById, movieId);

        case 4:
          movie = _context2.sent;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_header__WEBPACK_IMPORTED_MODULE_4__["getMovieSuccess"])(movie));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_header__WEBPACK_IMPORTED_MODULE_4__["getMovieFail"])(_context2.t0.message));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}

function addMovie(_ref3) {
  var movie, addedMovie;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addMovie$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          movie = _ref3.movie;
          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__["default"].addMovie, movie);

        case 4:
          addedMovie = _context3.sent;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_movies__WEBPACK_IMPORTED_MODULE_5__["addMovieSuccess"])(addedMovie));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_movies__WEBPACK_IMPORTED_MODULE_5__["addMovieFail"])(_context3.t0.message));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
}

function updateMovie(_ref4) {
  var movie;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateMovie$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          movie = _ref4.movie;
          _context4.prev = 1;
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__["default"].updateMovie, movie);

        case 4:
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_movies__WEBPACK_IMPORTED_MODULE_5__["updateMovieSuccess"])(movie));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_movies__WEBPACK_IMPORTED_MODULE_5__["updateMovieFail"])(_context4.t0.message));

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 8]]);
}

function deleteMovie(_ref5) {
  var id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteMovie$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = _ref5.id;
          _context5.prev = 1;
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__["default"].deleteMovie, id);

        case 4:
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_movies__WEBPACK_IMPORTED_MODULE_5__["deleteMovieSuccess"])(id));

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_movies__WEBPACK_IMPORTED_MODULE_5__["deleteMovieFail"])(_context5.t0.message));

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[1, 8]]);
}

function moviesSagas() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function moviesSagas$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions_types__WEBPACK_IMPORTED_MODULE_6__["LOAD_MOVIES"], getAllMovies);

        case 2:
          _context6.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions_types__WEBPACK_IMPORTED_MODULE_6__["ADD_MOVIE"], addMovie);

        case 4:
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions_types__WEBPACK_IMPORTED_MODULE_6__["UPDATE_MOVIE"], updateMovie);

        case 6:
          _context6.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions_types__WEBPACK_IMPORTED_MODULE_6__["DELETE_MOVIE"], deleteMovie);

        case 8:
          _context6.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions_types__WEBPACK_IMPORTED_MODULE_6__["GET_MOVIE_BY_ID"], getMovie);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

/* harmony default export */ __webpack_exports__["default"] = (moviesSagas);

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/header */ "./src/store/reducers/header.js");
/* harmony import */ var _reducers_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/movies */ "./src/store/reducers/movies.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./src/store/sagas.js");





var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  movies: _reducers_movies__WEBPACK_IMPORTED_MODULE_3__["default"],
  movie: _reducers_header__WEBPACK_IMPORTED_MODULE_2__["default"]
}), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib2R5L0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9HZW5yZXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9Nb3ZpZXNTb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9ib2R5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvRGVsZXRlTW92aWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvTW92aWVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L1VwZGF0ZU1vdmllRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllQ2FyZC9Nb3ZpZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvbW92aWVDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvRXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9BZGRNb3ZpZURpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvTW92aWVEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vdmllRGV0YWlscy9tb3ZpZURldGFpbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9zZWFyY2hCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VTZXNzaW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL01vdmllc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL21vdmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NhZ2FzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsImVuYWJsZUJsdXJyeVBsYWNlaG9sZGVyIiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJzaXplcyIsImxheW91dCIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInMiLCJraW5kIiwid2lkdGgiLCJ3IiwicCIsInNyYyIsInNyY1NldCIsImdldFdpZHRocyIsImxhc3QiLCJxdWFsaXR5IiwiaSIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsInBsYWNlaG9sZGVyIiwiZWxlbWVudCIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwiaGVpZ2h0IiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsIk1JTl9JTUdfU0laRV9GT1JfUExBQ0VIT0xERVIiLCJ0b29TbWFsbEZvckJsdXJyeVBsYWNlaG9sZGVyIiwic2hvdWxkU2hvd0JsdXJyeVBsYWNlaG9sZGVyIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJzZXRSZWYiLCJyZW1vdmVQbGFjZWhvbGRlciIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkJvZHkiLCJtb3ZpZXMiLCJsb2FkTW92aWVzIiwidXNlU2Vzc2lvblN0b3JhZ2UiLCJjdXJyZW50RmlsdGVyIiwic2V0Q3VycmVudEZpbHRlciIsImN1cnJlbnRTb3J0Iiwic2V0Q3VycmVudFNvcnQiLCJzZWFyY2hRdWVyeSIsInVzZUxvY2F0aW9uIiwic2VhcmNoIiwicXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJ1c2VFZmZlY3QiLCJvbkZpbHRlckNsaWNrIiwiZ2VucmUiLCJvblNvcnRDaGFuZ2UiLCJzb3J0Iiwic3R5bGVzIiwiYm9keSIsInN1Ym1lbnUiLCJsZW5ndGgiLCJub01vdmllcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJ0aXRsZSIsInN0cmluZyIsInBvc3Rlcl9wYXRoIiwicmVsZWFzZV9kYXRlIiwiZ2VucmVzIiwidm90ZV9hdmVyYWdlIiwidGFnbGluZSIsInZvdGVfY291bnQiLCJvdmVydmlldyIsImJ1ZGdldCIsInJldmVudWUiLCJydW50aW1lIiwiZnVuYyIsIkdlbnJlc0ZpbHRlciIsInNlbGVjdGVkRmlsdGVyIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZ2VucmVzRmlsdGVyIiwibWFwIiwiTW92aWVzU29ydGVyIiwic2VsZWN0ZWRTb3J0Iiwic29ydEZvcm0iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0IiwiRGVsZXRlTW92aWVEaWFsb2ciLCJvcGVuIiwibW92aWVJZCIsIm9uQ2xvc2UiLCJvbkRlbGV0ZSIsIm9uQ2xvc2VEZWxldGVEaWFsb2ciLCJib29sIiwiTW92aWVMaXN0IiwibW92aWUiLCJVcGRhdGVNb3ZpZURpYWxvZyIsIm9uVXBkYXRlIiwic2V0R2VucmVzIiwib25DbG9zZUVkaXREaWFsb2ciLCJvbkNoYW5nZUdlbnJlcyIsInNldEZpZWxkVmFsdWUiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsInZhbHVlcyIsIm9uU3VibWl0IiwiZmllbGRzIiwiY29sb3IiLCJNT1ZJRV9GSUVMRFMiLCJUSVRMRSIsIlJFTEVBU0VfREFURSIsIlBPU1RFUl9QQVRIIiwiR0VOUkVTIiwiZ2VucmVzQXJyYXkiLCJPVkVSVklFVyIsIlJVTlRJTUUiLCJ1cmwiLCJNb3ZpZUNhcmQiLCJ1cGRhdGVNb3ZpZSIsImRlbGV0ZU1vdmllIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm9wZW5EZWxldGUiLCJzZXRPcGVuRGVsZXRlIiwib3BlbkVkaXQiLCJzZXRPcGVuRWRpdCIsImhhbmRsZUNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsIm9uRWRpdE1lbnVJdGVtQ2xpY2siLCJvbkRlbGV0ZU1lbnVJdGVtQ2xpY2siLCJvbkRlbGV0ZU1vdmllIiwib25VcGRhdGVNb3ZpZSIsIm0iLCJzcGxpdCIsImpvaW4iLCJ5dXAiLCJyZXF1aXJlZCIsIm1pbiIsIkVycm9yQm91bmRhcnkiLCJwcm9wcyIsImhhc0Vycm9yIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJQYWdlTm90Rm91bmQiLCJlcnJvclBhZ2UiLCJlcnJvckNvbnRlbnQiLCJlcnJvciIsImhvbWVMaW5rIiwiRm9vdGVyIiwiZm9vdGVyIiwibG9nb0Zvb3RlciIsIkFkZE1vdmllRGlhbG9nIiwib25BZGQiLCJvbkNsb3NlQWRkRGlhbG9nIiwiaGFuZGxlU3VibWl0IiwiSGVhZGVyIiwiYWRkTW92aWUiLCJvcGVuQWRkIiwic2V0T3BlbkFkZCIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwib25BZGRNb3ZpZUNsaWNrIiwib25BZGRNb3ZpZSIsImhlYWRlciIsInN1YmhlYWRlciIsInB1c2giLCJNb3ZpZURldGFpbHMiLCJnZXRNb3ZpZSIsInVzZVBhcmFtcyIsIk51bWJlciIsImRlZmF1bHRQcm9wcyIsIlNlYXJjaEJhciIsIm9uU2VhcmNoTW92aWVzIiwic2VhcmNoQmFyIiwiTGF5b3V0IiwibWFpbmxheW91dCIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImFycmF5Iiwic3RvcmFnZUtleSIsInNlc3Npb25TdG9yYWdlIiwic2V0VmFsdWUiLCJzZXRJdGVtIiwiQXBwIiwic3RvcmUiLCJNb3ZpZXNTZXJ2aWNlIiwiZmlsdGVyIiwiZmV0Y2giLCJidWlsZFVybCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYXBpVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsInN0cmluZ2lmeSIsInR5cGUiLCJHRVRfTU9WSUVfQllfSUQiLCJnZXRNb3ZpZVN1Y2Nlc3MiLCJHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyIsImdldE1vdmllRmFpbCIsIm1lc3NhZ2UiLCJHRVRfTU9WSUVfQllfSURfRkFJTCIsIkxPQURfTU9WSUVTIiwibG9hZE1vdmllc1N1Y2Nlc3MiLCJMT0FEX01PVklFU19TVUNDQ0VTUyIsImxvYWRNb3ZpZXNGYWlsIiwiTE9BRF9NT1ZJRVNfRkFJTCIsIkFERF9NT1ZJRSIsImFkZE1vdmllU3VjY2VzcyIsIkFERF9NT1ZJRV9TVUNDRVNTIiwiYWRkTW92aWVGYWlsIiwiQUREX01PVklFX0ZBSUwiLCJVUERBVEVfTU9WSUUiLCJ1cGRhdGVNb3ZpZVN1Y2Nlc3MiLCJVUERBVEVfTU9WSUVfU1VDQ0VTUyIsInVwZGF0ZU1vdmllRmFpbCIsIlVQREFURV9NT1ZJRV9GQUlMIiwiREVMRVRFX01PVklFIiwiZGVsZXRlTW92aWVTdWNjZXNzIiwiREVMRVRFX01PVklFX1NVQ0NFU1MiLCJkZWxldGVNb3ZpZUZhaWwiLCJERUxFVEVfTU9WSUVfRkFJTCIsImhlYWRlclJlZHVjZXIiLCJhY3Rpb24iLCJtb3ZpZXNSZWR1Y2VyIiwiZ2V0QWxsTW92aWVzIiwibW92aWVzU2FnYXMiLCJjYWxsIiwiZmV0Y2hNb3ZpZXMiLCJwdXQiLCJkYXRhIiwiZ2V0TW92aWVCeUlkIiwiYWRkZWRNb3ZpZSIsInRha2VFdmVyeSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLDhEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDTEEsdUJBQXVCLG1CQUFPLENBQUMsd0ZBQXVCOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ1BBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNUQSxxQkFBcUIsbUJBQU8sQ0FBQyxvRkFBcUI7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ0xBLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJELDRCQUE0QixtQkFBTyxDQUFDLGtHQUE0Qjs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDWEEscUJBQXFCLG1CQUFPLENBQUMsb0ZBQXFCOztBQUVsRCwyQkFBMkIsbUJBQU8sQ0FBQyxnR0FBMkI7O0FBRTlELGlDQUFpQyxtQkFBTyxDQUFDLDRHQUFpQzs7QUFFMUUsc0JBQXNCLG1CQUFPLENBQUMsc0ZBQXNCOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNiQSx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhELHNCQUFzQixtQkFBTyxDQUFDLHNGQUFzQjs7QUFFcEQsaUNBQWlDLG1CQUFPLENBQUMsNEdBQWlDOztBQUUxRSx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ3JCQSx1QkFBdUIsbUJBQU8sQ0FBQyx3RkFBdUI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNaQSxpQkFBaUIsbUJBQU8sQ0FBQyxnREFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E5Qzs7QUFDQTs7QUFDQTs7QUFDQTs7QUFNQTs7QUFFQSxVQUFtQztBQUNqQztBQUFFQSxRQUFELHNCQUFDQSxHQUFELElBQUNBO0FBR0o7O0FBQUEsSUFBTUMsb0JBQW9CLEdBQUcsa0JBQTdCLFNBQTZCLENBQTdCO0FBYUEsSUFBTUMsT0FBTyxHQUFHLFFBR2QsQ0FDQSxVQURBLFdBQ0EsQ0FEQSxFQUVBLGVBRkEsZ0JBRUEsQ0FGQSxFQUdBLFdBSEEsWUFHQSxDQUhBLEVBSUEsWUFQRixhQU9FLENBSkEsQ0FIYyxDQUFoQjtBQVVBLElBQU1DLG1CQUFtQixHQUFHLDZDQUE1QixTQUE0QixDQUE1Qjs7WUF1RElDLDBMQUF5REMsYUFSN0Qsa0I7SUFBTSxpQixTQUNKQyxXO0lBREksZ0IsU0FFSkMsVTtJQUZJLFksU0FHSkMsTTtJQUhJLFUsU0FJSkMsSTtJQUpJLGEsU0FLSkMsTztJQUxJLDZCLFNBTUpDLHVCLEVBR0Y7OztBQUNBLElBQU1DLFFBQVEsaURBQUcsaUJBQUgsdUNBQWQsZ0JBQWMsRUFBZDtBQUNBQyxpQkFBaUIsQ0FBakJBLEtBQXVCO0FBQUEsU0FBVUMsQ0FBQyxHQUFsQ0QsQ0FBdUI7QUFBQSxDQUF2QkE7QUFDQUQsUUFBUSxDQUFSQSxLQUFjO0FBQUEsU0FBVUUsQ0FBQyxHQUF6QkYsQ0FBYztBQUFBLENBQWRBOztBQUVBLHlDQUl5QztBQUN2QyxNQUFJRyxLQUFLLEtBQUtDLE1BQU0sS0FBTkEsVUFBcUJBLE1BQU0sS0FBekMsWUFBUyxDQUFULEVBQTZEO0FBQzNEO0FBQ0EsUUFBTUMsZUFBZSxHQUFyQjtBQUNBLFFBQU1DLFlBQVksR0FBbEI7O0FBQ0EsU0FBSyxJQUFMLE9BQWlCQyxLQUFLLEdBQUdGLGVBQWUsQ0FBZkEsS0FBekIsS0FBeUJBLENBQXpCLFNBQThEO0FBQzVEQyxrQkFBWSxDQUFaQSxLQUFrQkUsUUFBUSxDQUFDRCxLQUFLLENBQWhDRCxDQUFnQyxDQUFOLENBQTFCQTtBQUVGOztBQUFBLFFBQUlBLFlBQVksQ0FBaEIsUUFBeUI7QUFDdkIsVUFBTUcsYUFBYSxHQUFHQyxJQUFJLENBQUpBLGNBQUksRUFBSkEsWUFBSSxDQUFKQSxHQUF0QjtBQUNBLGFBQU87QUFDTEMsY0FBTSxFQUFFWCxRQUFRLENBQVJBLE9BQ0xZLFdBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxJQUFJWCxpQkFBaUIsQ0FBakJBLENBQWlCLENBQWpCQSxHQUZULGFBRUg7QUFBQSxTQURNRCxDQURIO0FBSUxhLFlBQUksRUFKTjtBQUFPLE9BQVA7QUFPRjs7QUFBQSxXQUFPO0FBQUVGLFlBQU0sRUFBUjtBQUFvQkUsVUFBSSxFQUEvQjtBQUFPLEtBQVA7QUFFRjs7QUFBQSxNQUNFLDZCQUNBVCxNQUFNLEtBRE4sVUFFQUEsTUFBTSxLQUhSLGNBSUU7QUFDQSxXQUFPO0FBQUVPLFlBQU0sRUFBUjtBQUE2QkUsVUFBSSxFQUF4QztBQUFPLEtBQVA7QUFHRjs7QUFBQSxNQUFNRixNQUFNLHVDQUNQLFNBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVFHLEtBQUssR0FBRztBQUFoQjtBQUFBLFFBQ0dDLFdBQUQ7QUFBQSxXQUFPZixRQUFRLENBQVJBLEtBQWVnQixXQUFEO0FBQUEsYUFBT0EsQ0FBQyxJQUF0QmhCLENBQWM7QUFBQSxLQUFkQSxLQUFnQ0EsUUFBUSxDQUFDQSxRQUFRLENBQVJBLFNBWHRELENBV3FELENBQS9DO0FBQUEsR0FERixDQVRDLENBRE8sQ0FBWjtBQWVBLFNBQU87QUFBRVcsVUFBRixFQUFFQSxNQUFGO0FBQVVFLFFBQUksRUFBckI7QUFBTyxHQUFQO0FBbUJGOztBQUFBLGlDQVF1QztBQUFBLE1BUmIsR0FRYSxTQVJiLEdBUWE7QUFBQSxNQVJiLFdBUWEsU0FSYixXQVFhO0FBQUEsTUFSYixNQVFhLFNBUmIsTUFRYTtBQUFBLE1BUmIsS0FRYSxTQVJiLEtBUWE7QUFBQSxNQVJiLE9BUWEsU0FSYixPQVFhO0FBQUEsTUFSYixLQVFhLFNBUmIsS0FRYTtBQUFBLE1BUnZDLE1BUXVDLFNBUnZDLE1BUXVDOztBQUNyQyxtQkFBaUI7QUFDZixXQUFPO0FBQUVJLFNBQUYsRUFBRUEsR0FBRjtBQUFPQyxZQUFNLEVBQWI7QUFBMEJmLFdBQUssRUFBdEM7QUFBTyxLQUFQO0FBR0Y7O0FBTHFDLG1CQUtaZ0IsU0FBUyxnQkFBbEMsS0FBa0MsQ0FMRztBQUFBLE1BSy9CLE1BTCtCLGNBSy9CLE1BTCtCO0FBQUEsTUFLL0IsSUFMK0IsY0FLL0IsSUFMK0I7O0FBTXJDLE1BQU1DLElBQUksR0FBR1QsTUFBTSxDQUFOQSxTQUFiO0FBRUEsU0FBTztBQUNMUixTQUFLLEVBQUUsVUFBVVUsSUFBSSxLQUFkLGdCQURGO0FBRUxLLFVBQU0sRUFBRVAsTUFBTSxDQUFOQSxJQUVKO0FBQUEsdUJBQ0tmLE1BQU0sQ0FBQztBQUFFcUIsV0FBRixFQUFFQSxHQUFGO0FBQU9JLGVBQVAsRUFBT0EsT0FBUDtBQUFnQlAsYUFBSyxFQUF0QjtBQUFDLE9BQUQsQ0FEWCxjQUVJRCxJQUFJLEtBQUpBLFVBQW1CUyxDQUFDLEdBQUcsQ0FGM0IsU0FGSVgsSUFFSjtBQUFBLEtBRklBLE9BRkgsSUFFR0EsQ0FGSDtBQVdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBTSxPQUFHLEVBQUVyQixNQUFNLENBQUM7QUFBRXFCLFNBQUYsRUFBRUEsR0FBRjtBQUFPSSxhQUFQLEVBQU9BLE9BQVA7QUFBZ0JQLFdBQUssRUFBRUgsTUFBTSxDQWpCM0MsSUFpQjJDO0FBQTdCLEtBQUQ7QUFqQk4sR0FBUDtBQXFCRjs7QUFBQSxtQkFBZ0Q7QUFDOUMsTUFBSSxhQUFKLFVBQTJCO0FBQ3pCO0FBRUY7O0FBQUEsTUFBSSxhQUFKLFVBQTJCO0FBQ3pCLFdBQU9ILFFBQVEsSUFBZixFQUFlLENBQWY7QUFFRjs7QUFBQTtBQUdGOztBQUFBLHlDQUEyRDtBQUN6RCxNQUFNZSxJQUFJLEdBQUdqQyxPQUFPLENBQVBBLElBQWIsWUFBYUEsQ0FBYjs7QUFDQSxZQUFVO0FBQ1IsV0FBT2lDLElBQUk7QUFBR0MsVUFBSSxFQUFQO0FBQUEsT0FBWCxXQUFXLEVBQVg7QUFFRjs7QUFBQSxRQUFNLDhFQUNxREMscUNBRHJELHlCQUFOLFlBQU0sRUFBTjtBQU9GLEMsQ0FBQTtBQUNBOzs7QUFDQSxpREFHRTtBQUNBLE1BQUlDLFdBQVcsS0FBWEEsVUFBSixTQUF1QztBQUNyQyxRQUFJQyxPQUFPLENBQVgsVUFBc0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0FBLGFBQU8sQ0FBUEE7QUFKRixXQUtPO0FBQ0xBLGFBQU8sQ0FBUEEsU0FBaUIsWUFBTTtBQUNyQkEsZUFBTyxDQUFQQTtBQURGQTtBQUlIO0FBQ0Y7QUFFYzs7QUFBQSxxQkFBZTtBQUFBLFlBZ0JmLElBaEJlO0FBQUEsY0FnQmYsSUFoQmU7QUFBQSx5QkFnQmYsSUFoQmUsQ0FHNUJDLFdBSDRCO0FBQUEsTUFHNUJBLFdBSDRCO0FBQUEsc0JBZ0JmLElBaEJlLENBSTVCQyxRQUo0QjtBQUFBLE1BSTVCQSxRQUo0QjtBQUFBLGdCQWdCZixJQWhCZTtBQUFBLGtCQWdCZixJQWhCZTtBQUFBLGdCQWdCZixJQWhCZTtBQUFBLGNBZ0JmLElBaEJlO0FBQUEsZUFnQmYsSUFoQmU7QUFBQSxrQkFnQmYsSUFoQmU7QUFBQSx1QkFnQmYsSUFoQmU7QUFBQSxvQkFnQmYsSUFoQmUsQ0FZNUJqQyxNQVo0QjtBQUFBLE1BWTVCQSxNQVo0QjtBQUFBLHlCQWdCZixJQWhCZSxDQWE1QjhCLFdBYjRCO0FBQUEsTUFhNUJBLFdBYjRCO0FBQUEsb0JBZ0JmLElBaEJlO0FBQUEsTUFlekJJLEdBZnlCLEdBZ0JmLDhOQWhCZTtBQWlCNUIsTUFBSUMsSUFBeUIsR0FBN0I7QUFDQSxNQUFJM0IsTUFBZ0MsR0FBR0QsS0FBSyxrQkFBNUM7QUFDQSxNQUFJNkIsT0FBTyxHQUFYOztBQUNBLE1BQUksYUFBSixNQUF1QjtBQUNyQkEsV0FBTyxHQUFHQyxPQUFPLENBQUNGLElBQUksQ0FBdEJDLE9BQWlCLENBQWpCQSxDQURxQixDQUVyQjs7QUFDQSxXQUFPRCxJQUFJLENBQVgsU0FBVyxDQUFYO0FBSEYsU0FJTyxJQUFJLFlBQUosTUFBc0I7QUFDM0I7QUFDQSxRQUFJQSxJQUFJLENBQVIsUUFBaUIzQixNQUFNLEdBQUcyQixJQUFJLENBQWIzQixPQUZVLENBSTNCOztBQUNBLFdBQU8yQixJQUFJLENBQVgsUUFBVyxDQUFYO0FBR0Y7O0FBQUEsTUFBSSxDQUFKLCtCQUFvQztBQUNsQ0wsZUFBVyxHQUFYQTtBQUdGOztBQUFBLFlBQTJDO0FBQ3pDLFFBQUksQ0FBSixLQUFVO0FBQ1IsWUFBTSw2SUFDc0hRLElBQUksQ0FBSkEsVUFDeEg7QUFBRXBCLGFBQUYsRUFBRUEsS0FBRjtBQUFTcUIsY0FBVCxFQUFTQSxNQUFUO0FBQWlCZCxlQUZyQixFQUVxQkE7QUFBakIsT0FEd0hhLENBRHRILEVBQU47QUFNRjs7QUFBQSxRQUFJLENBQUMzQyxtQkFBbUIsQ0FBbkJBLFNBQUwsTUFBS0EsQ0FBTCxFQUEyQztBQUN6QyxZQUFNLHFDQUNlMEIsR0FEZiw0REFDZ0ViLE1BRGhFLGlDQUM0RmIsbUJBQW1CLENBQW5CQSxpQkFEbEcsR0FDa0dBLENBRDVGLE9BQU47QUFNRjs7QUFBQSxRQUFJLENBQUNGLG9CQUFvQixDQUFwQkEsU0FBTCxPQUFLQSxDQUFMLEVBQTZDO0FBQzNDLFlBQU0scUNBQ2U0QixHQURmLDZEQUNpRW1CLE9BRGpFLGlDQUM4Ri9DLG9CQUFvQixDQUFwQkEsaUJBRHBHLEdBQ29HQSxDQUQ5RixPQUFOO0FBTUY7O0FBQUEsUUFBSXdDLFFBQVEsSUFBSU8sT0FBTyxLQUF2QixRQUFvQztBQUNsQyxZQUFNLHFDQUFOLEdBQU0sMEZBQU47QUFJRjs7QUFBQSxpQkFBYTtBQUNYLFlBQU0scUNBQU4sR0FBTSwwR0FBTjtBQUlIO0FBRUQ7O0FBQUEsTUFBSUMsTUFBTSxHQUNSLGNBQWNELE9BQU8sS0FBUEEsVUFBc0IsbUJBRHRDLFdBQ0UsQ0FERjs7QUFFQSxNQUFJbkIsR0FBRyxJQUFJQSxHQUFHLENBQUhBLFdBQVgsT0FBV0EsQ0FBWCxFQUFvQztBQUNsQztBQUNBVyxlQUFXLEdBQVhBO0FBQ0FTLFVBQU0sR0FBTkE7QUFHRjs7QUE5RTRCLGNBOEVJLHNDQUFrQztBQUNoRUMsY0FBVSxFQURzRDtBQUVoRUMsWUFBUSxFQUFFLENBRlo7QUFBa0UsR0FBbEMsQ0E5RUo7QUFBQTtBQUFBLE1BOEV0QixNQTlFc0I7QUFBQSxNQThFdEIsYUE5RXNCOztBQWtGNUIsTUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQyxNQUFNLENBQXZCLEtBQXVCLENBQXZCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQXhCLE1BQXdCLENBQXhCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHRixNQUFNLENBQXpCLE9BQXlCLENBQXpCO0FBRUEsTUFBTUcsNEJBQTRCLEdBQWxDO0FBQ0EsTUFBTUMsNEJBQTRCLEdBQ2hDTCxRQUFRLElBQVJBLGFBQXlCQSxRQUFRLEdBQVJBLFlBRDNCO0FBRUEsTUFBTU0sMkJBQTJCLEdBQy9CckIsV0FBVyxLQUFYQSxVQUEwQixDQUQ1QjtBQUdBO0FBQ0E7QUFDQTtBQUNBLE1BQUlzQixRQUFxQztBQUN2Q0MsWUFBUSxFQUQrQjtBQUV2Q0MsT0FBRyxFQUZvQztBQUd2Q0MsUUFBSSxFQUhtQztBQUl2Q0MsVUFBTSxFQUppQztBQUt2Q0MsU0FBSyxFQUxrQztBQU92Q0MsYUFBUyxFQVA4QjtBQVF2Q0MsV0FBTyxFQVJnQztBQVN2Q0MsVUFBTSxFQVRpQztBQVV2Q0MsVUFBTSxFQVZpQztBQVl2Q0MsV0FBTyxFQVpnQztBQWF2QzVDLFNBQUssRUFia0M7QUFjdkNxQixVQUFNLEVBZGlDO0FBZXZDd0IsWUFBUSxFQWYrQjtBQWdCdkNDLFlBQVEsRUFoQitCO0FBaUJ2Q0MsYUFBUyxFQWpCOEI7QUFrQnZDQyxhQUFTLEVBbEI4QjtBQW9CdkNDLGFBcEJ1QyxFQW9CdkNBLFNBcEJ1QztBQXFCdkNDLGtCQXJCdUMsRUFxQnZDQTtBQXJCdUMsS0F1Qm5DakIsMkJBQTJCLEdBQzNCO0FBQ0VrQixrQkFBYyxFQURoQjtBQUVFQyxtQkFBZSxrQkFIVSxXQUdWO0FBRmpCLEdBRDJCLEdBdkJqQyxTQUF5QyxDQUF6Qzs7QUE4QkEsTUFDRSxtQ0FDQSxxQkFEQSxlQUVBOUQsTUFBTSxLQUhSLFFBSUU7QUFDQTtBQUNBLFFBQU0rRCxRQUFRLEdBQUd4QixTQUFTLEdBQTFCO0FBQ0EsUUFBTXlCLFVBQVUsR0FBR0MsS0FBSyxDQUFMQSxRQUFLLENBQUxBLHNCQUE4QkYsUUFBUSxHQUF6RCxHQUFtQkUsTUFBbkI7O0FBQ0EsUUFBSWpFLE1BQU0sS0FBVixjQUE2QjtBQUMzQjtBQUNBa0Usa0JBQVksR0FBRztBQUNiWixlQUFPLEVBRE07QUFFYmEsZ0JBQVEsRUFGSztBQUdidEIsZ0JBQVEsRUFISztBQUtiSyxpQkFBUyxFQUxJO0FBTWJHLGNBQU0sRUFOUmE7QUFBZSxPQUFmQTtBQVFBRSxnQkFBVSxHQUFHO0FBQUVkLGVBQU8sRUFBVDtBQUFvQkosaUJBQVMsRUFBN0I7QUFBNkNjLGtCQUExREksRUFBMERKO0FBQTdDLE9BQWJJO0FBVkYsV0FXTyxJQUFJcEUsTUFBTSxLQUFWLGFBQTRCO0FBQ2pDO0FBQ0FrRSxrQkFBWSxHQUFHO0FBQ2JaLGVBQU8sRUFETTtBQUViRSxnQkFBUSxFQUZLO0FBR2JXLGdCQUFRLEVBSEs7QUFJYnRCLGdCQUFRLEVBSks7QUFLYkssaUJBQVMsRUFMSTtBQU1iRyxjQUFNLEVBTlJhO0FBQWUsT0FBZkE7QUFRQUUsZ0JBQVUsR0FBRztBQUNYbEIsaUJBQVMsRUFERTtBQUVYSSxlQUFPLEVBRkk7QUFHWEUsZ0JBQVEsRUFIVlk7QUFBYSxPQUFiQTtBQUtBQyxjQUFRLDBCQUFrQmhDLFFBQWxCLHlCQUFSZ0MsU0FBUSw4REFBUkE7QUFmSyxXQWdCQSxJQUFJckUsTUFBTSxLQUFWLFNBQXdCO0FBQzdCO0FBQ0FrRSxrQkFBWSxHQUFHO0FBQ2JDLGdCQUFRLEVBREs7QUFFYmpCLGlCQUFTLEVBRkk7QUFHYkksZUFBTyxFQUhNO0FBSWJULGdCQUFRLEVBSks7QUFLYm5DLGFBQUssRUFMUTtBQU1icUIsY0FBTSxFQU5SbUM7QUFBZSxPQUFmQTtBQVNIO0FBOUNELFNBOENPLElBQ0wsbUNBQ0EscUJBREEsZUFFQWxFLE1BQU0sS0FIRCxRQUlMO0FBQ0E7QUFDQWtFLGdCQUFZLEdBQUc7QUFDYlosYUFBTyxFQURNO0FBRWJhLGNBQVEsRUFGSztBQUlidEIsY0FBUSxFQUpLO0FBS2JDLFNBQUcsRUFMVTtBQU1iQyxVQUFJLEVBTlM7QUFPYkMsWUFBTSxFQVBPO0FBUWJDLFdBQUssRUFSUTtBQVViQyxlQUFTLEVBVkk7QUFXYkcsWUFBTSxFQVhSYTtBQUFlLEtBQWZBO0FBTkssU0FtQkE7QUFDTDtBQUNBLGNBQTJDO0FBQ3pDLFlBQU0scUNBQU4sR0FBTSxvRkFBTjtBQUlIO0FBRUQ7O0FBQUEsTUFBSUksYUFBZ0MsR0FBRztBQUNyQ3pELE9BQUcsRUFEa0M7QUFHckNDLFVBQU0sRUFIK0I7QUFJckNmLFNBQUssRUFKUDtBQUF1QyxHQUF2Qzs7QUFPQSxpQkFBZTtBQUNidUUsaUJBQWEsR0FBR0MsZ0JBQWdCLENBQUM7QUFDL0IxRCxTQUQrQixFQUMvQkEsR0FEK0I7QUFFL0JXLGlCQUYrQixFQUUvQkEsV0FGK0I7QUFHL0J4QixZQUgrQixFQUcvQkEsTUFIK0I7QUFJL0JVLFdBQUssRUFKMEI7QUFLL0JPLGFBQU8sRUFMd0I7QUFNL0JsQixXQU4rQixFQU0vQkEsS0FOK0I7QUFPL0JQLFlBUEY4RSxFQU9FOUU7QUFQK0IsS0FBRCxDQUFoQzhFO0FBV0Y7O0FBQUEsZUFBYTtBQUNYSixnQkFBWSxHQUFaQTtBQUNBRSxjQUFVLEdBQVZBO0FBQ0F4QixZQUFRLEdBQVJBO0FBRUY7O0FBQUEsc0JBQ0U7QUFBSyxTQUFLLEVBQVY7QUFBQSxLQUNHd0IsVUFBVSxnQkFDVDtBQUFLLFNBQUssRUFBVjtBQUFBLEtBQ0dDLFFBQVEsZ0JBQ1A7QUFDRSxTQUFLLEVBQUU7QUFDTGIsY0FBUSxFQURIO0FBRUxGLGFBQU8sRUFGRjtBQUdMRCxZQUFNLEVBSEQ7QUFJTEQsWUFBTSxFQUpEO0FBS0xELGFBQU8sRUFOWDtBQUNTLEtBRFQ7QUFRRSxPQUFHLEVBUkw7QUFTRSxtQkFURjtBQVVFLFFBQUksRUFWTjtBQVdFLE9BQUcsc0NBQStCLHNCQVo3QixRQVk2QixDQUEvQjtBQVhMLElBRE8sR0FGRixJQUNULENBRFMsR0FEYixNQW9CRywyQkFDQywrREFDRSwrREFFTW9CLGdCQUFnQixDQUFDO0FBQ25CMUQsT0FEbUIsRUFDbkJBLEdBRG1CO0FBRW5CVyxlQUZtQixFQUVuQkEsV0FGbUI7QUFHbkJ4QixVQUhtQixFQUduQkEsTUFIbUI7QUFJbkJVLFNBQUssRUFKYztBQUtuQk8sV0FBTyxFQUxZO0FBTW5CbEIsU0FObUIsRUFNbkJBLEtBTm1CO0FBT25CUCxVQVRKLEVBU0lBO0FBUG1CLEdBQUQsQ0FGdEI7QUFXRSxPQUFHLEVBWEw7QUFZRSxZQUFRLEVBWlY7QUFhRSxTQUFLLEVBYlA7QUFjRSxTQUFLLEVBZFA7QUFlRSxhQUFTLEVBckNqQjtBQXNCTSxLQURGLENBckJKLGVBeUNFO0FBR0UsWUFBUSxFQUhWO0FBSUUsYUFBUyxFQUpYO0FBS0UsT0FBRyxFQUFHK0Isb0JBQUQsRUFBYTtBQUNoQmlELFlBQU0sQ0FBTkEsT0FBTSxDQUFOQTtBQUNBQyx1QkFBaUIsVUFBakJBLFdBQWlCLENBQWpCQTtBQVBKO0FBU0UsU0FBSyxFQWxEVDtBQXlDRSxLQXpDRixFQW9ER2hELFFBQVE7QUFBQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBQyxLQUFELGdDQUNFO0FBQ0UsT0FBRyxFQUNELFlBQ0E2QyxhQUFhLENBRGIsTUFFQUEsYUFBYSxDQUZiLFNBR0FBLGFBQWEsQ0FMakI7QUFPRSxPQUFHLEVBUEw7QUFRRSxNQUFFLEVBUko7QUFTRSxRQUFJLEVBQUVBLGFBQWEsQ0FBYkEscUJBQW1DQSxhQUFhLENBQUN6RCxHQVR6RCxDQVVFO0FBVkY7QUFXRSxlQUFXLEVBQUV5RCxhQUFhLENBQUN4RCxNQVg3QixDQVlFO0FBWkY7QUFhRSxjQUFVLEVBQUV3RCxhQUFhLENBcEJ0QjtBQU9MLElBREYsQ0FOTyxHQXJEYixJQUNFLENBREY7QUFpRkYsQyxDQUFBOzs7QUFFQSwyQkFBMkM7QUFDekMsU0FBT3pELEdBQUcsQ0FBSEEsQ0FBRyxDQUFIQSxXQUFpQkEsR0FBRyxDQUFIQSxNQUFqQkEsQ0FBaUJBLENBQWpCQSxHQUFQO0FBR0Y7O0FBQUEsNEJBS29DO0FBQUEsTUFMZixJQUtlLFNBTGYsSUFLZTtBQUFBLE1BTGYsR0FLZSxTQUxmLEdBS2U7QUFBQSxNQUxmLEtBS2UsU0FMZixLQUtlO0FBQUEsTUFMcEMsT0FLb0MsU0FMcEMsT0FLb0M7QUFDbEM7QUFDQSxNQUFNNkQsTUFBTSxHQUFHLDJCQUEyQixPQUExQyxLQUFlLENBQWY7QUFDQSxNQUFJQyxZQUFZLEdBQWhCOztBQUNBLGVBQWE7QUFDWEQsVUFBTSxDQUFOQSxLQUFZLE9BQVpBO0FBR0Y7O0FBQUEsTUFBSUEsTUFBTSxDQUFWLFFBQW1CO0FBQ2pCQyxnQkFBWSxHQUFHLE1BQU1ELE1BQU0sQ0FBTkEsS0FBckJDLEdBQXFCRCxDQUFyQkM7QUFFRjs7QUFBQSxtQkFBVXZELElBQVYsU0FBaUJ3RCxZQUFZLEtBQTdCO0FBR0Y7O0FBQUEsNkJBQTZFO0FBQUEsTUFBdkQsSUFBdUQsU0FBdkQsSUFBdUQ7QUFBQSxNQUF2RCxHQUF1RCxTQUF2RCxHQUF1RDtBQUFBLE1BQTdFLEtBQTZFLFNBQTdFLEtBQTZFO0FBQzNFLG1CQUFVeEQsSUFBVixTQUFpQndELFlBQVksS0FBN0I7QUFHRjs7QUFBQSxpQ0FLb0M7QUFBQSxNQUxWLElBS1UsU0FMVixJQUtVO0FBQUEsTUFMVixHQUtVLFNBTFYsR0FLVTtBQUFBLE1BTFYsS0FLVSxTQUxWLEtBS1U7QUFBQSxNQUxwQyxPQUtvQyxTQUxwQyxPQUtvQztBQUNsQztBQUNBLE1BQU1GLE1BQU0sR0FBRyxzQkFBc0IsT0FBdEIsT0FBb0MsUUFBUXpELE9BQU8sSUFBbEUsTUFBbUQsQ0FBcEMsQ0FBZjtBQUNBLE1BQUkwRCxZQUFZLEdBQUdELE1BQU0sQ0FBTkEsWUFBbkI7QUFDQSxtQkFBVXRELElBQVYsU0FBaUJ1RCxZQUFqQixTQUFnQ0MsWUFBWSxDQUE1QyxHQUE0QyxDQUE1QztBQUdGOztBQUFBLDhCQUtvQztBQUFBLE1BTGIsSUFLYSxTQUxiLElBS2E7QUFBQSxNQUxiLEdBS2EsU0FMYixHQUthO0FBQUEsTUFMYixLQUthLFNBTGIsS0FLYTtBQUFBLE1BTHBDLE9BS29DLFNBTHBDLE9BS29DOztBQUNsQyxZQUEyQztBQUN6QyxRQUFNQyxhQUFhLEdBQW5CLEdBRHlDLENBR3pDOztBQUNBLFFBQUksQ0FBSixLQUFVQSxhQUFhLENBQWJBO0FBQ1YsUUFBSSxDQUFKLE9BQVlBLGFBQWEsQ0FBYkE7O0FBRVosUUFBSUEsYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLFlBQU0scURBQ2dDQSxhQUFhLENBQWJBLFVBRGhDLHdHQUc2Ri9DLElBQUksQ0FBSkEsVUFDL0Y7QUFBRWpCLFdBQUYsRUFBRUEsR0FBRjtBQUFPSCxhQUFQLEVBQU9BLEtBQVA7QUFBY08sZUFKbEIsRUFJa0JBO0FBQWQsT0FEK0ZhLENBSDdGLEVBQU47QUFTRjs7QUFBQSxRQUFJakIsR0FBRyxDQUFIQSxXQUFKLElBQUlBLENBQUosRUFBMEI7QUFDeEIsWUFBTSwwQ0FBTixHQUFNLDZHQUFOO0FBS0Y7O0FBQUEsUUFBSSxDQUFDQSxHQUFHLENBQUhBLFdBQUQsR0FBQ0EsQ0FBRCxJQUFKLGVBQTJDO0FBQ3pDOztBQUNBLFVBQUk7QUFDRmlFLGlCQUFTLEdBQUcsUUFBWkEsR0FBWSxDQUFaQTtBQUNBLE9BRkYsQ0FFRSxZQUFZO0FBQ1pDLGVBQU8sQ0FBUEE7QUFDQSxjQUFNLDBDQUFOLEdBQU0sc0lBQU47QUFLRjs7QUFBQSxVQUFJLENBQUNDLGFBQWEsQ0FBYkEsU0FBdUJGLFNBQVMsQ0FBckMsUUFBS0UsQ0FBTCxFQUFpRDtBQUMvQyxjQUFNLFVBQ0gsNEJBQW9CbkUsR0FBcEIsMkNBQXlEaUUsU0FBUyxDQURyRSxRQUNHLGtKQURHLENBQU47QUFLSDtBQUNGO0FBRUQ7O0FBQUEsbUJBQVUxRCxJQUFWLGtCQUFzQjZELGtCQUFrQixLQUF4QyxnQkFBbUR2RSxLQUFuRCxnQkFBOERPLE9BQU8sSUFBckU7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdtQk0sSUFBTWlFLG1CQUFtQixHQUM3QiwrQkFBK0JDLElBQUksQ0FBcEMsbUJBQUMsSUFDRCxjQUVrQjtBQUNoQixNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBaEIsR0FBWUEsRUFBWjtBQUNBLFNBQU9DLFVBQVUsQ0FBQyxZQUFZO0FBQzVCQyxNQUFFLENBQUM7QUFDREMsZ0JBQVUsRUFEVDtBQUVEQyxtQkFBYSxFQUFFLHlCQUFZO0FBQ3pCLGVBQU9uRixJQUFJLENBQUpBLE9BQVksTUFBTStFLElBQUksQ0FBSkEsUUFBekIsS0FBbUIsQ0FBWi9FLENBQVA7QUFISmlGO0FBQUcsS0FBRCxDQUFGQTtBQURlLEtBQWpCLENBQWlCLENBQWpCO0FBTkc7Ozs7QUFnQkEsSUFBTUcsa0JBQWtCLEdBQzVCLCtCQUErQlAsSUFBSSxDQUFwQyxrQkFBQyxJQUNELGNBQXlDO0FBQ3ZDLFNBQU9RLFlBQVksQ0FBbkIsRUFBbUIsQ0FBbkI7QUFIRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ1A7O0FBQ0E7O0FBY0EsSUFBTUMsdUJBQXVCLEdBQUcsZ0NBQWhDOztBQUVPLCtCQUdxRDtBQUFBLE1BSFQsVUFHUyxRQUhULFVBR1M7QUFBQSxNQUhyRCxRQUdxRCxRQUhyRCxRQUdxRDtBQUMxRCxNQUFNQyxVQUFtQixHQUFHMUQsUUFBUSxJQUFJLENBQXhDO0FBRUEsTUFBTTJELFNBQVMsR0FBRyxXQUFsQixNQUFrQixHQUFsQjs7QUFIMEQsY0FJNUIscUJBQTlCLEtBQThCLENBSjRCO0FBQUE7QUFBQSxNQUlwRCxPQUpvRDtBQUFBLE1BSXBELFVBSm9EOztBQU0xRCxNQUFNdEIsTUFBTSxHQUFHLHdCQUNadUIsWUFBRCxFQUFrQjtBQUNoQixRQUFJRCxTQUFTLENBQWIsU0FBdUI7QUFDckJBLGVBQVMsQ0FBVEE7QUFDQUEsZUFBUyxDQUFUQTtBQUdGOztBQUFBLFFBQUlELFVBQVUsSUFBZCxTQUEyQjs7QUFFM0IsUUFBSUUsRUFBRSxJQUFJQSxFQUFFLENBQVosU0FBc0I7QUFDcEJELGVBQVMsQ0FBVEEsVUFBb0JFLE9BQU8sS0FFeEI1RCxtQkFBRDtBQUFBLGVBQWVBLFNBQVMsSUFBSTZELFVBQVUsQ0FGYixTQUVhLENBQXRDO0FBQUEsT0FGeUIsRUFHekI7QUFBRS9ELGtCQUhKNEQsRUFHSTVEO0FBQUYsT0FIeUIsQ0FBM0I0RDtBQU1IO0FBaEJZLEtBaUJiLHlCQWpCRixPQWlCRSxDQWpCYSxDQUFmO0FBb0JBLHdCQUFVLFlBQU07QUFDZCxRQUFJLENBQUoseUJBQThCO0FBQzVCLFVBQUksQ0FBSixTQUFjO0FBQ1osWUFBTUksWUFBWSxHQUFHLDhDQUFvQjtBQUFBLGlCQUFNRCxVQUFVLENBQXpELElBQXlELENBQWhCO0FBQUEsU0FBcEIsQ0FBckI7QUFDQSxlQUFPO0FBQUEsaUJBQU0sNkNBQWIsWUFBYSxDQUFOO0FBQUEsU0FBUDtBQUVIO0FBQ0Y7QUFQRCxLQU9HLENBUEgsT0FPRyxDQVBIO0FBU0EsU0FBTyxTQUFQLE9BQU8sQ0FBUDtBQUdGOztBQUFBLDZDQUljO0FBQUEsd0JBQ3VCRSxjQUFjLENBQWpELE9BQWlELENBRHJDO0FBQUEsTUFDTixFQURNLG1CQUNOLEVBRE07QUFBQSxNQUNOLFFBRE0sbUJBQ04sUUFETTtBQUFBLE1BQ04sUUFETSxtQkFDTixRQURNOztBQUVaQyxVQUFRLENBQVJBO0FBRUFDLFVBQVEsQ0FBUkE7QUFDQSxTQUFPLHFCQUEyQjtBQUNoQ0Q7QUFDQUMsWUFBUSxDQUFSQSxtQkFGZ0MsQ0FJaEM7O0FBQ0EsUUFBSUQsUUFBUSxDQUFSQSxTQUFKLEdBQXlCO0FBQ3ZCQyxjQUFRLENBQVJBO0FBQ0FDO0FBRUg7QUFURDtBQVlGOztBQUFBLElBQU1BLFNBQVMsR0FBRyxJQUFsQixHQUFrQixFQUFsQjs7QUFDQSxpQ0FBd0U7QUFDdEUsTUFBTUMsRUFBRSxHQUFHQyxPQUFPLENBQVBBLGNBQVg7QUFDQSxNQUFJQyxRQUFRLEdBQUdILFNBQVMsQ0FBVEEsSUFBZixFQUFlQSxDQUFmOztBQUNBLGdCQUFjO0FBQ1o7QUFHRjs7QUFBQSxNQUFNRixRQUFRLEdBQUcsSUFBakIsR0FBaUIsRUFBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUcseUJBQTBCSyxpQkFBRCxFQUFhO0FBQ3JEQSxXQUFPLENBQVBBLFFBQWlCQyxlQUFELEVBQVc7QUFDekIsVUFBTUMsUUFBUSxHQUFHUixRQUFRLENBQVJBLElBQWFPLEtBQUssQ0FBbkMsTUFBaUJQLENBQWpCO0FBQ0EsVUFBTWhFLFNBQVMsR0FBR3VFLEtBQUssQ0FBTEEsa0JBQXdCQSxLQUFLLENBQUxBLG9CQUExQzs7QUFDQSxVQUFJQyxRQUFRLElBQVosV0FBMkI7QUFDekJBLGdCQUFRLENBQVJBLFNBQVEsQ0FBUkE7QUFFSDtBQU5ERjtBQURlLEtBQWpCLE9BQWlCLENBQWpCO0FBVUFKLFdBQVMsQ0FBVEEsUUFFR0csUUFBUSxHQUFHO0FBQ1ZGLE1BRFUsRUFDVkEsRUFEVTtBQUVWRixZQUZVLEVBRVZBLFFBRlU7QUFHVkQsWUFMSkUsRUFLSUY7QUFIVSxHQUZkRTtBQVFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUMzR0QsaUJBQWlCLG1CQUFPLENBQUMscUVBQXFCOzs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ0pBLHVCQUF1QixtQkFBTyxDQUFDLHVHQUFvQjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUM7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7OztBQ2ZBLHFCQUFxQixtQkFBTyxDQUFDLG1HQUFrQjs7QUFFL0MsMkJBQTJCLG1CQUFPLENBQUMsK0dBQXdCOztBQUUzRCxpQ0FBaUMsbUJBQU8sQ0FBQywySEFBOEI7O0FBRXZFLHNCQUFzQixtQkFBTyxDQUFDLHFHQUFtQjs7QUFFakQ7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7Ozs7OztBQ1pBLHdCQUF3QixtQkFBTyxDQUFDLHlHQUFxQjs7QUFFckQsc0JBQXNCLG1CQUFPLENBQUMscUdBQW1COztBQUVqRCxpQ0FBaUMsbUJBQU8sQ0FBQywySEFBOEI7O0FBRXZFLHdCQUF3QixtQkFBTyxDQUFDLHlHQUFxQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ1pBLHVCQUF1QixtQkFBTyxDQUFDLHVHQUFvQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRCO0FBQUEsTUFBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsMkJBQ0dDLHdFQUFpQixDQUFDLFFBQUQsQ0FEcEI7QUFBQTtBQUFBLE1BQ2hDQyxhQURnQztBQUFBLE1BQ2pCQyxnQkFEaUI7O0FBQUEsNEJBRURGLHdFQUFpQixDQUFDLE1BQUQsQ0FGaEI7QUFBQTtBQUFBLE1BRWhDRyxXQUZnQztBQUFBLE1BRW5CQyxjQUZtQjs7QUFHdkMsTUFBTUMsV0FBVyxHQUFHQyxvRUFBVyxHQUFHQyxNQUFsQztBQUNBLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxlQUFKLENBQW9CSixXQUFwQixFQUFpQ0ssR0FBakMsQ0FBcUMsUUFBckMsQ0FBZDtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZFosY0FBVSxDQUFDRSxhQUFELEVBQWdCRSxXQUFoQixFQUE2QkssS0FBN0IsQ0FBVjtBQUNELEdBRlEsRUFFTixDQUFDUCxhQUFELEVBQWdCRSxXQUFoQixFQUE2QkssS0FBN0IsRUFBb0NULFVBQXBDLENBRk0sQ0FBVDs7QUFJQSxNQUFNYSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQlgsb0JBQWdCLENBQUNXLEtBQUQsQ0FBaEI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBVTtBQUM3Qlgsa0JBQWMsQ0FBQ1csSUFBRCxDQUFkO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSwyREFBQywyREFBRDtBQUFXLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsSUFBN0I7QUFBbUMsU0FBSztBQUF4QyxrQkFDRTtBQUFLLGFBQVMsRUFBRUQsd0RBQU0sQ0FBQ0U7QUFBdkIsa0JBQ0UsMkRBQUMscURBQUQ7QUFBYyxpQkFBYSxFQUFFTixhQUE3QjtBQUE0QyxrQkFBYyxFQUFFWDtBQUE1RCxJQURGLGVBRUUsMkRBQUMsc0RBQUQ7QUFBYyxnQkFBWSxFQUFFYSxZQUE1QjtBQUEwQyxnQkFBWSxFQUFFWDtBQUF4RCxJQUZGLENBREYsZUFLRSwyREFBQyx1REFBRCxxQkFDRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQWdCLFNBQUs7QUFBckIsa0JBQ0UsMkRBQUMseURBQUQ7QUFBVSxNQUFFLEVBQUM7QUFBYixJQURGLENBREYsZUFJRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQztBQUFaLEtBQ0csRUFBQ0wsTUFBRCxhQUFDQSxNQUFELGVBQUNBLE1BQU0sQ0FBRXFCLE1BQVQsaUJBQ0MscUZBQ0U7QUFBRyxhQUFTLEVBQUVILHdEQUFNLENBQUNJO0FBQXJCLHVCQURGLENBREQsZ0JBS0MsMkRBQUMsNERBQUQscUJBQ0UsMkRBQUMsNERBQUQ7QUFBVyxVQUFNLEVBQUV0QjtBQUFuQixJQURGLENBTkosQ0FKRixlQWVFLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDO0FBQVosa0JBQ0UsMkRBQUMseURBQUQ7QUFBVSxNQUFFLEVBQUM7QUFBYixJQURGLENBZkYsQ0FMRixDQURGO0FBMkJELENBN0NEOztBQStDQUQsSUFBSSxDQUFDd0IsU0FBTCxHQUFpQjtBQUNmdkIsUUFBTSxFQUFFd0IsaURBQVMsQ0FBQ0MsT0FBVixDQUNORCxpREFBUyxDQUFDRSxLQUFWLENBQWdCO0FBQ2RqQyxNQUFFLEVBQUUrQixpREFBUyxDQUFDRyxNQUFWLENBQWlCQyxVQURQO0FBRWRDLFNBQUssRUFBRUwsaURBQVMsQ0FBQ00sTUFBVixDQUFpQkYsVUFGVjtBQUdkRyxlQUFXLEVBQUVQLGlEQUFTLENBQUNNLE1BSFQ7QUFJZEUsZ0JBQVksRUFBRVIsaURBQVMsQ0FBQ00sTUFKVjtBQUtkRyxVQUFNLEVBQUVULGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNNLE1BQTVCLENBTE07QUFNZEksZ0JBQVksRUFBRVYsaURBQVMsQ0FBQ0csTUFOVjtBQU9kUSxXQUFPLEVBQUVYLGlEQUFTLENBQUNNLE1BUEw7QUFRZE0sY0FBVSxFQUFFWixpREFBUyxDQUFDRyxNQVJSO0FBU2RVLFlBQVEsRUFBRWIsaURBQVMsQ0FBQ00sTUFUTjtBQVVkUSxVQUFNLEVBQUVkLGlEQUFTLENBQUNHLE1BVko7QUFXZFksV0FBTyxFQUFFZixpREFBUyxDQUFDRyxNQVhMO0FBWWRhLFdBQU8sRUFBRWhCLGlEQUFTLENBQUNHO0FBWkwsR0FBaEIsQ0FETSxFQWVOQyxVQWhCYTtBQWlCZjNCLFlBQVUsRUFBRXVCLGlEQUFTLENBQUNpQixJQUFWLENBQWViO0FBakJaLENBQWpCO0FBb0JlN0IsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUVBO0FBRUE7QUFFQSxJQUFNa0MsTUFBTSxHQUFHLENBQUMsS0FBRCxFQUFRLFdBQVIsRUFBcUIsUUFBckIsRUFBK0IsT0FBL0IsRUFBd0MsU0FBeEMsQ0FBZjs7QUFFQSxJQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF1QztBQUFBLE1BQXBDNUIsYUFBb0MsUUFBcENBLGFBQW9DO0FBQUEsTUFBckI2QixjQUFxQixRQUFyQkEsY0FBcUI7O0FBQUEsa0JBQzFCQyxzREFBUSxDQUFDRCxjQUFELENBRGtCO0FBQUE7QUFBQSxNQUNuREUsUUFEbUQ7QUFBQSxNQUN6Q0MsV0FEeUM7O0FBRzFELHNCQUNFO0FBQUssYUFBUyxFQUFFNUIsd0RBQU0sQ0FBQzZCO0FBQXZCLEtBQ0dkLE1BQU0sQ0FBQ2UsR0FBUCxDQUFXLFVBQUNqQyxLQUFEO0FBQUEsd0JBQ1Y7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLGFBQU8sRUFBRSxtQkFBTTtBQUNiRCxxQkFBYSxDQUFDQyxLQUFELENBQWI7QUFDQStCLG1CQUFXLENBQUMvQixLQUFELENBQVg7QUFDRCxPQU5IO0FBT0UsZUFBUyxZQUFLRyx3REFBTCxtQkFBb0JILEtBQUssS0FBSzhCLFFBQVYsR0FBcUIsUUFBckIsR0FBZ0MsRUFBcEQ7QUFQWCxPQVNHOUIsS0FUSCxDQURVO0FBQUEsR0FBWCxDQURILENBREY7QUFpQkQsQ0FwQkQ7O0FBc0JBMkIsWUFBWSxDQUFDbkIsU0FBYixHQUF5QjtBQUN2QlQsZUFBYSxFQUFFVSxpREFBUyxDQUFDaUIsSUFBVixDQUFlYixVQURQO0FBRXZCZSxnQkFBYyxFQUFFbkIsaURBQVMsQ0FBQ00sTUFBVixDQUFpQkY7QUFGVixDQUF6QjtBQUtlYywyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBb0M7QUFBQSxNQUFqQ2pDLFlBQWlDLFFBQWpDQSxZQUFpQztBQUFBLE1BQW5Ca0MsWUFBbUIsUUFBbkJBLFlBQW1COztBQUN2RCxNQUFJLENBQUNBLFlBQUwsRUFBbUI7QUFDakJsQyxnQkFBWSxDQUFDLGNBQUQsQ0FBWjtBQUNEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFFRSx3REFBTSxDQUFDRDtBQUF2QixrQkFDRSxpRkFERixlQUVFLDJEQUFDLG9FQUFEO0FBQWEsYUFBUyxFQUFFQyx3REFBTSxDQUFDaUM7QUFBL0Isa0JBQ0UsMkRBQUMsK0RBQUQ7QUFDRSxXQUFPLEVBQUMsZUFEVjtBQUVFLE1BQUUsRUFBQyxlQUZMO0FBR0UsZ0JBQVksRUFBRUQsWUFIaEI7QUFJRSxZQUFRLEVBQUUsa0JBQUNFLEtBQUQ7QUFBQSxhQUFXcEMsWUFBWSxDQUFDb0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBdkI7QUFBQTtBQUpaLGtCQU1FLDJEQUFDLGlFQUFEO0FBQVUsU0FBSyxFQUFDO0FBQWhCLGNBTkYsZUFPRSwyREFBQyxpRUFBRDtBQUFVLFNBQUssRUFBQztBQUFoQixvQkFQRixDQURGLENBRkYsQ0FERjtBQWdCRCxDQXBCRDs7QUFzQkFMLFlBQVksQ0FBQzFCLFNBQWIsR0FBeUI7QUFDdkJQLGNBQVksRUFBRVEsaURBQVMsQ0FBQ2lCLElBQVYsQ0FBZWIsVUFETjtBQUV2QnNCLGNBQVksRUFBRTFCLGlEQUFTLENBQUNNLE1BQVYsQ0FBaUJGO0FBRlIsQ0FBekI7QUFLZXFCLDJFQUFmLEU7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7QUFFQSxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQUV4RCxVQUFNLEVBQUV3RCxLQUFLLENBQUN4RDtBQUFoQixHQUFaO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTXlELGtCQUFrQixHQUFHO0FBQ3pCeEQsWUFBVSxFQUFWQSxnRUFBVUE7QUFEZSxDQUEzQjtBQUlleUQsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkMxRCw2Q0FBN0MsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNNEQsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUEwQztBQUFBLE1BQXZDQyxJQUF1QyxRQUF2Q0EsSUFBdUM7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDbEUsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDRixXQUFPO0FBQ1IsR0FGRDs7QUFJQSxzQkFDRSwyREFBQywrREFBRDtBQUNFLHdCQUFvQixNQUR0QjtBQUVFLHdCQUFvQixNQUZ0QjtBQUdFLFFBQUksRUFBRUYsSUFIUjtBQUlFLFdBQU8sRUFBRUksbUJBSlg7QUFLRSxZQUFRLEVBQUM7QUFMWCxrQkFPRSwyREFBQyxtRUFBRDtBQUFZLGtCQUFXLE9BQXZCO0FBQStCLFdBQU8sRUFBRUE7QUFBeEMsa0JBQ0UsMkRBQUMsK0RBQUQsT0FERixDQVBGLGVBVUUsMkRBQUMsb0VBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsb0JBVkYsZUFXRSwyREFBQyxzRUFBRDtBQUFlLGFBQVMsRUFBQztBQUF6QixrQkFDRSwyREFBQywwRUFBRDtBQUFtQixNQUFFLEVBQUM7QUFBdEIsbURBREYsQ0FYRixlQWdCRSwyREFBQyxzRUFBRCxxQkFDRSwyREFBQywrREFBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1ELFFBQVEsQ0FBQ0YsT0FBRCxDQUFkO0FBQUEsS0FBakI7QUFBMEMsU0FBSyxFQUFDLFNBQWhEO0FBQTBELFFBQUksRUFBQztBQUEvRCxlQURGLENBaEJGLENBREY7QUF3QkQsQ0E3QkQ7O0FBK0JBRixpQkFBaUIsQ0FBQ3BDLFNBQWxCLEdBQThCO0FBQzVCdUMsU0FBTyxFQUFFdEMsaURBQVMsQ0FBQ2lCLElBQVYsQ0FBZWIsVUFESTtBQUU1QmdDLE1BQUksRUFBRXBDLGlEQUFTLENBQUN5QyxJQUFWLENBQWVyQyxVQUZPO0FBRzVCbUMsVUFBUSxFQUFFdkMsaURBQVMsQ0FBQ2lCLElBQVYsQ0FBZWIsVUFIRztBQUk1QmlDLFNBQU8sRUFBRXJDLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJDO0FBSkUsQ0FBOUI7QUFPZStCLGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7O0FBRUEsSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxNQUFHbEUsTUFBSCxRQUFHQSxNQUFIO0FBQUEsc0JBQ2hCO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDR0EsTUFESCxhQUNHQSxNQURILHVCQUNHQSxNQUFNLENBQUVnRCxHQUFSLENBQVksVUFBQ21CLEtBQUQ7QUFBQSx3QkFDWCwyREFBQyxrREFBRDtBQUFXLFNBQUcsRUFBRUEsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUUxRSxFQUF2QjtBQUEyQixXQUFLLEVBQUUwRTtBQUFsQyxNQURXO0FBQUEsR0FBWixDQURILENBRGdCO0FBQUEsQ0FBbEI7O0FBUUFELFNBQVMsQ0FBQzNDLFNBQVYsR0FBc0I7QUFDcEJ2QixRQUFNLEVBQUV3QixpREFBUyxDQUFDQyxPQUFWLENBQ05ELGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0I7QUFDZGpDLE1BQUUsRUFBRStCLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJDLFVBRFA7QUFFZEMsU0FBSyxFQUFFTCxpREFBUyxDQUFDTSxNQUFWLENBQWlCRixVQUZWO0FBR2RHLGVBQVcsRUFBRVAsaURBQVMsQ0FBQ00sTUFIVDtBQUlkRSxnQkFBWSxFQUFFUixpREFBUyxDQUFDTSxNQUpWO0FBS2RHLFVBQU0sRUFBRVQsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ00sTUFBNUIsQ0FMTTtBQU1kSSxnQkFBWSxFQUFFVixpREFBUyxDQUFDRyxNQU5WO0FBT2RRLFdBQU8sRUFBRVgsaURBQVMsQ0FBQ00sTUFQTDtBQVFkTSxjQUFVLEVBQUVaLGlEQUFTLENBQUNHLE1BUlI7QUFTZFUsWUFBUSxFQUFFYixpREFBUyxDQUFDTSxNQVROO0FBVWRRLFVBQU0sRUFBRWQsaURBQVMsQ0FBQ0csTUFWSjtBQVdkWSxXQUFPLEVBQUVmLGlEQUFTLENBQUNHLE1BWEw7QUFZZGEsV0FBTyxFQUFFaEIsaURBQVMsQ0FBQ0c7QUFaTCxHQUFoQixDQURNLEVBZU5DO0FBaEJrQixDQUF0QjtBQW1CZXNDLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBd0M7QUFBQSxNQUFyQ0QsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJQLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXhCUyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkUCxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ3BDbEIsc0RBQVEsQ0FBQyxDQUFBdUIsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVsQyxNQUFQLEtBQWlCLEVBQWxCLENBRDRCO0FBQUE7QUFBQSxNQUN6REEsTUFEeUQ7QUFBQSxNQUNqRHFDLFNBRGlEOztBQUVoRSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJULFdBQU87QUFDUixHQUZEOztBQUlBLE1BQU1VLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2xCLEtBQUQsRUFBUW1CLGFBQVIsRUFBMEI7QUFDL0NILGFBQVMsQ0FBQ2hCLEtBQUQsQ0FBVDtBQUNBbUIsaUJBQWEsQ0FBQyxRQUFELEVBQVduQixLQUFYLENBQWI7QUFDRCxHQUhEOztBQUtBLE1BQU1vQixNQUFNLEdBQUdDLHlEQUFTLENBQUM7QUFDdkJDLGlCQUFhLEVBQUU7QUFDYm5GLFFBQUUsRUFBRTBFLEtBQUYsYUFBRUEsS0FBRix1QkFBRUEsS0FBSyxDQUFFMUUsRUFERTtBQUVib0MsV0FBSyxFQUFFc0MsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUV0QyxLQUZEO0FBR2JHLGtCQUFZLEVBQUVtQyxLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRW5DLFlBSFI7QUFJYkQsaUJBQVcsRUFBRW9DLEtBQUYsYUFBRUEsS0FBRix1QkFBRUEsS0FBSyxDQUFFcEMsV0FKUDtBQUtiTSxjQUFRLEVBQUU4QixLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRTlCLFFBTEo7QUFNYkcsYUFBTyxFQUFFMkIsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUUzQixPQU5IO0FBT2JQLFlBQU0sRUFBTkE7QUFQYSxLQURRO0FBVXZCNEMsb0JBQWdCLEVBQWhCQSw0REFWdUI7QUFXdkJDLFVBQU0sRUFBRTtBQUNON0MsWUFBTSxFQUFOQTtBQURNLEtBWGU7QUFjdkI4QyxZQUFRLEVBQUUsa0JBQUNDLE1BQUQsRUFBWTtBQUNwQlgsY0FBUSxDQUFDVyxNQUFELENBQVI7QUFDRDtBQWhCc0IsR0FBRCxDQUF4QjtBQW1CQSxzQkFDRSwyREFBQyxzREFBRDtBQUFnQixTQUFLLEVBQUVOO0FBQXZCLGtCQUNFLDJEQUFDLCtEQUFEO0FBQVEsd0JBQW9CLE1BQTVCO0FBQTZCLFFBQUksRUFBRWQsSUFBbkM7QUFBeUMsV0FBTyxFQUFFVztBQUFsRCxrQkFDRSwyREFBQyxtRUFBRDtBQUFZLGtCQUFXLE9BQXZCO0FBQStCLFdBQU8sRUFBRUE7QUFBeEMsa0JBQ0UsMkRBQUMsZ0VBQUQsT0FERixDQURGLGVBSUUsMkRBQUMsNENBQUQscUJBQ0UsMkRBQUMsb0VBQUQscUJBREYsZUFFRSwyREFBQyxzRUFBRDtBQUFlLGFBQVMsRUFBQztBQUF6QixrQkFDRTtBQUFHLGFBQVMsRUFBQztBQUFiLGdCQURGLGVBRUU7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBK0IsU0FBSyxFQUFFO0FBQUVVLFdBQUssRUFBRTtBQUFUO0FBQXRDLEtBQ0dkLEtBREgsYUFDR0EsS0FESCx1QkFDR0EsS0FBSyxDQUFFMUUsRUFEVixDQUZGLGVBS0U7QUFBRyxhQUFTLEVBQUM7QUFBYixhQUxGLGVBTUUsMkRBQUMsNkNBQUQ7QUFDRSxRQUFJLEVBQUV5Rix3REFBWSxDQUFDQyxLQURyQjtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsYUFBUyxFQUFDO0FBSFosSUFORixlQVdFLDJEQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFFRCx3REFBWSxDQUFDQyxLQURyQjtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsYUFBUyxFQUFDO0FBSFosSUFYRixlQWdCRTtBQUFHLGFBQVMsRUFBQztBQUFiLG9CQWhCRixlQWlCRSwyREFBQyw2Q0FBRDtBQUNFLFFBQUksRUFBRUQsd0RBQVksQ0FBQ0UsWUFEckI7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLGFBQVMsRUFBQztBQUhaLElBakJGLGVBc0JFLDJEQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFFRix3REFBWSxDQUFDRSxZQURyQjtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsYUFBUyxFQUFDO0FBSFosSUF0QkYsZUEyQkU7QUFBRyxhQUFTLEVBQUM7QUFBYixpQkEzQkYsZUE0QkUsMkRBQUMsNkNBQUQ7QUFDRSxRQUFJLEVBQUVGLHdEQUFZLENBQUNHLFdBRHJCO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxhQUFTLEVBQUM7QUFIWixJQTVCRixlQWlDRSwyREFBQyxvREFBRDtBQUNFLFFBQUksRUFBRUgsd0RBQVksQ0FBQ0csV0FEckI7QUFFRSxhQUFTLEVBQUMsS0FGWjtBQUdFLGFBQVMsRUFBQztBQUhaLElBakNGLGVBc0NFO0FBQUcsYUFBUyxFQUFDO0FBQWIsYUF0Q0YsZUF1Q0UsMkRBQUMsK0RBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBRUgsd0RBQVksQ0FBQ0ksTUFGckI7QUFHRSxhQUFTLEVBQUMsWUFIWjtBQUlFLFNBQUssRUFBRXJELE1BSlQ7QUFLRSxZQUFRLEVBQUUsa0JBQUNtQixLQUFEO0FBQUEsYUFDUm9CLGNBQWMsQ0FBQ3BCLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLEVBQXFCb0IsTUFBTSxDQUFDRCxhQUE1QixDQUROO0FBQUEsS0FMWjtBQVFFLFlBQVE7QUFSVixLQVVHYyx1REFBVyxDQUFDdkMsR0FBWixDQUFnQixVQUFDakMsS0FBRDtBQUFBLHdCQUNmLDJEQUFDLGlFQUFEO0FBQVUsU0FBRyxFQUFFQSxLQUFmO0FBQXNCLFdBQUssRUFBRUE7QUFBN0IsT0FDR0EsS0FESCxDQURlO0FBQUEsR0FBaEIsQ0FWSCxDQXZDRixlQXVERSwyREFBQyxvREFBRDtBQUNFLFFBQUksRUFBRW1FLHdEQUFZLENBQUNJLE1BRHJCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxhQUFTLEVBQUM7QUFIWixJQXZERixlQTRERTtBQUFHLGFBQVMsRUFBQztBQUFiLGdCQTVERixlQTZERSwyREFBQyw2Q0FBRDtBQUNFLE1BQUUsRUFBQyxVQURMO0FBRUUsUUFBSSxFQUFFSix3REFBWSxDQUFDTSxRQUZyQjtBQUdFLGtCQUFXLGdCQUhiO0FBSUUsYUFBUyxFQUFDO0FBSlosSUE3REYsZUFtRUUsMkRBQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUVOLHdEQUFZLENBQUNNLFFBRHJCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxhQUFTLEVBQUM7QUFIWixJQW5FRixlQXdFRTtBQUFHLGFBQVMsRUFBQztBQUFiLGVBeEVGLGVBeUVFLDJEQUFDLDZDQUFEO0FBQ0UsUUFBSSxFQUFFTix3REFBWSxDQUFDTyxPQURyQjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsYUFBUyxFQUFDO0FBSFosSUF6RUYsZUE4RUUsMkRBQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUVQLHdEQUFZLENBQUNPLE9BRHJCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxhQUFTLEVBQUM7QUFIWixJQTlFRixDQUZGLGVBc0ZFLDJEQUFDLHNFQUFELHFCQUNFLDJEQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFFbEIsaUJBQWpCO0FBQW9DLFNBQUssRUFBQyxXQUExQztBQUFzRCxRQUFJLEVBQUM7QUFBM0QsYUFERixlQUlFLDJEQUFDLCtEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBd0IsUUFBSSxFQUFDLE9BQTdCO0FBQXFDLFFBQUksRUFBQztBQUExQyxZQUpGLENBdEZGLENBSkYsQ0FERixDQURGO0FBd0dELENBdElEOztBQXdJQUgsaUJBQWlCLENBQUM3QyxTQUFsQixHQUE4QjtBQUM1QjRDLE9BQUssRUFBRTNDLGtEQUFTLENBQUNFLEtBQVYsQ0FBZ0I7QUFDckJqQyxNQUFFLEVBQUUrQixrREFBUyxDQUFDRyxNQUFWLENBQWlCQyxVQURBO0FBRXJCQyxTQUFLLEVBQUVMLGtEQUFTLENBQUNNLE1BQVYsQ0FBaUJGLFVBRkg7QUFHckJHLGVBQVcsRUFBRVAsa0RBQVMsQ0FBQ00sTUFIRjtBQUlyQkUsZ0JBQVksRUFBRVIsa0RBQVMsQ0FBQ00sTUFKSDtBQUtyQkcsVUFBTSxFQUFFVCxrREFBUyxDQUFDQyxPQUFWLENBQWtCRCxrREFBUyxDQUFDTSxNQUE1QixDQUxhO0FBTXJCSSxnQkFBWSxFQUFFVixrREFBUyxDQUFDRyxNQU5IO0FBT3JCUSxXQUFPLEVBQUVYLGtEQUFTLENBQUNNLE1BUEU7QUFRckI0RCxPQUFHLEVBQUVsRSxrREFBUyxDQUFDTSxNQVJNO0FBU3JCTSxjQUFVLEVBQUVaLGtEQUFTLENBQUNHLE1BVEQ7QUFVckJVLFlBQVEsRUFBRWIsa0RBQVMsQ0FBQ00sTUFWQztBQVdyQlEsVUFBTSxFQUFFZCxrREFBUyxDQUFDRyxNQVhHO0FBWXJCWSxXQUFPLEVBQUVmLGtEQUFTLENBQUNHLE1BWkU7QUFhckJhLFdBQU8sRUFBRWhCLGtEQUFTLENBQUNHO0FBYkUsR0FBaEIsRUFjSkMsVUFmeUI7QUFnQjVCZ0MsTUFBSSxFQUFFcEMsa0RBQVMsQ0FBQ3lDLElBQVYsQ0FBZXJDLFVBaEJPO0FBaUI1QnlDLFVBQVEsRUFBRTdDLGtEQUFTLENBQUNpQixJQUFWLENBQWViLFVBakJHO0FBa0I1QmtDLFNBQU8sRUFBRXRDLGtEQUFTLENBQUNpQixJQUFWLENBQWViO0FBbEJJLENBQTlCO0FBcUJld0MsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNdUIsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBeUM7QUFBQTs7QUFBQSxNQUF0Q3hCLEtBQXNDLFFBQXRDQSxLQUFzQztBQUFBLE1BQS9CeUIsV0FBK0IsUUFBL0JBLFdBQStCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDekJqRCxzREFBUSxDQUFDLElBQUQsQ0FEaUI7QUFBQTtBQUFBLE1BQ2xEa0QsUUFEa0Q7QUFBQSxNQUN4Q0MsV0FEd0M7O0FBQUEsbUJBRXJCbkQsc0RBQVEsQ0FBQyxLQUFELENBRmE7QUFBQTtBQUFBLE1BRWxEb0QsVUFGa0Q7QUFBQSxNQUV0Q0MsYUFGc0M7O0FBQUEsbUJBR3pCckQsc0RBQVEsQ0FBQyxLQUFELENBSGlCO0FBQUE7QUFBQSxNQUdsRHNELFFBSGtEO0FBQUEsTUFHeENDLFdBSHdDOztBQUt6RCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJOLGVBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxhQUFILENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJSLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1TLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQ0QsZUFBVztBQUNYSixlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsR0FIRDs7QUFLQSxNQUFNTSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbENGLGVBQVc7QUFDWE4saUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUhEOztBQUtBLE1BQU1TLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzdDLE9BQUQsRUFBYTtBQUNqQ2dDLGVBQVcsQ0FBQ2hDLE9BQUQsQ0FBWDtBQUNBb0MsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxHQUhEOztBQUtBLE1BQU1VLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCaEIsZUFBVyxDQUFDZ0IsQ0FBRCxDQUFYO0FBQ0FULGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0UsMkRBQUMscURBQUQ7QUFBTSxNQUFFLG9CQUFhaEMsS0FBYixhQUFhQSxLQUFiLHVCQUFhQSxLQUFLLENBQUUxRSxFQUFwQjtBQUFSLGtCQUNFO0FBQUssT0FBRyxFQUFFMEUsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVwQyxXQUFqQjtBQUE4QixPQUFHLEVBQUM7QUFBbEMsSUFERixDQURGLGVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBc0JvQyxLQUF0QixhQUFzQkEsS0FBdEIsdUJBQXNCQSxLQUFLLENBQUV0QyxLQUE3QixDQURGLGVBRUU7QUFBRyxhQUFTLEVBQUM7QUFBYixLQUFpQ3NDLEtBQWpDLGFBQWlDQSxLQUFqQyw4Q0FBaUNBLEtBQUssQ0FBRW5DLFlBQXhDLHdEQUFpQyxvQkFBcUI2RSxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFqQyxDQUZGLENBREYsZUFLRTtBQUFHLGFBQVMsRUFBQztBQUFiLEtBQXNCMUMsS0FBdEIsYUFBc0JBLEtBQXRCLHdDQUFzQkEsS0FBSyxDQUFFbEMsTUFBN0Isa0RBQXNCLGNBQWU2RSxJQUFmLENBQW9CLElBQXBCLENBQXRCLENBTEYsQ0FKRixlQVdFLDJEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLGdCQUF0QjtBQUF1QyxxQkFBYyxhQUFyRDtBQUFtRSxxQkFBYyxNQUFqRjtBQUF3RixXQUFPLEVBQUVWO0FBQWpHLGtCQUNFLDJEQUFDLGtFQUFELE9BREYsQ0FYRixlQWNFLDJEQUFDLDZEQUFEO0FBQU0sTUFBRSxFQUFDLGFBQVQ7QUFBdUIsWUFBUSxFQUFFTixRQUFqQztBQUEyQyxlQUFXLE1BQXREO0FBQXVELFFBQUksRUFBRS9LLE9BQU8sQ0FBQytLLFFBQUQsQ0FBcEU7QUFBZ0YsV0FBTyxFQUFFUztBQUF6RixrQkFDRSwyREFBQyxpRUFBRDtBQUFVLFdBQU8sRUFBRUMsbUJBQW5CO0FBQXdDLGFBQVMsRUFBQztBQUFsRCxZQURGLGVBSUUsMkRBQUMsaUVBQUQ7QUFBVSxXQUFPLEVBQUVDLHFCQUFuQjtBQUEwQyxhQUFTLEVBQUM7QUFBcEQsY0FKRixlQU9FLDJEQUFDLDJEQUFEO0FBQW1CLFFBQUksRUFBRVAsUUFBekI7QUFBbUMsU0FBSyxFQUFFL0IsS0FBMUM7QUFBaUQsWUFBUSxFQUFFd0MsYUFBM0Q7QUFBMEUsV0FBTyxFQUFFO0FBQUEsYUFBTVIsV0FBVyxDQUFDLEtBQUQsQ0FBakI7QUFBQTtBQUFuRixJQVBGLGVBUUUsMkRBQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUVILFVBRFI7QUFFRSxXQUFPLEVBQUU3QixLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRTFFLEVBRmxCO0FBR0UsWUFBUSxFQUFFaUgsYUFIWjtBQUlFLFdBQU8sRUFBRTtBQUFBLGFBQU1ULGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUE7QUFKWCxJQVJGLENBZEYsQ0FERjtBQWdDRCxDQWpFRDs7QUFtRUFOLFNBQVMsQ0FBQ3BFLFNBQVYsR0FBc0I7QUFDcEI0QyxPQUFLLEVBQUUzQyxpREFBUyxDQUFDRSxLQUFWLENBQWdCO0FBQ3JCakMsTUFBRSxFQUFFK0IsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkMsVUFEQTtBQUVyQkMsU0FBSyxFQUFFTCxpREFBUyxDQUFDTSxNQUFWLENBQWlCRixVQUZIO0FBR3JCRyxlQUFXLEVBQUVQLGlEQUFTLENBQUNNLE1BSEY7QUFJckJFLGdCQUFZLEVBQUVSLGlEQUFTLENBQUNNLE1BSkg7QUFLckJHLFVBQU0sRUFBRVQsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ00sTUFBNUIsQ0FMYTtBQU1yQkksZ0JBQVksRUFBRVYsaURBQVMsQ0FBQ0csTUFOSDtBQU9yQlEsV0FBTyxFQUFFWCxpREFBUyxDQUFDTSxNQVBFO0FBUXJCTSxjQUFVLEVBQUVaLGlEQUFTLENBQUNHLE1BUkQ7QUFTckJVLFlBQVEsRUFBRWIsaURBQVMsQ0FBQ00sTUFUQztBQVVyQlEsVUFBTSxFQUFFZCxpREFBUyxDQUFDRyxNQVZHO0FBV3JCWSxXQUFPLEVBQUVmLGlEQUFTLENBQUNHLE1BWEU7QUFZckJhLFdBQU8sRUFBRWhCLGlEQUFTLENBQUNHO0FBWkUsR0FBaEIsRUFhSkMsVUFkaUI7QUFlcEJnRSxhQUFXLEVBQUVwRSxpREFBUyxDQUFDaUIsSUFBVixDQUFlYixVQWZSO0FBZ0JwQmlFLGFBQVcsRUFBRXJFLGlEQUFTLENBQUNpQixJQUFWLENBQWViO0FBaEJSLENBQXRCO0FBbUJlK0Qsd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQSxJQUFNbEMsa0JBQWtCLEdBQUc7QUFDekJtQyxhQUFXLEVBQVhBLGlFQUR5QjtBQUV6QkMsYUFBVyxFQUFYQSxpRUFBV0E7QUFGYyxDQUEzQjtBQUtlbkMsMEhBQU8sQ0FBQyxJQUFELEVBQU9ELGtCQUFQLENBQVAsQ0FBa0NrQyxrREFBbEMsQ0FBZixFOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTVQsWUFBWSxHQUFHO0FBQzFCQyxPQUFLLEVBQUUsT0FEbUI7QUFFMUJDLGNBQVksRUFBRSxjQUZZO0FBRzFCQyxhQUFXLEVBQUUsYUFIYTtBQUkxQkMsUUFBTSxFQUFFLFFBSmtCO0FBSzFCRSxVQUFRLEVBQUUsVUFMZ0I7QUFNMUJDLFNBQU8sRUFBRTtBQU5pQixDQUFyQjtBQVNBLElBQU1GLFdBQVcsR0FBRyxDQUN6QixRQUR5QixFQUV6QixXQUZ5QixFQUd6QixXQUh5QixFQUl6QixRQUp5QixFQUt6QixPQUx5QixFQU16QixRQU55QixFQU96QixTQVB5QixFQVF6QixpQkFSeUIsQ0FBcEI7QUFXQSxJQUFNVixnQkFBZ0IsR0FBR2tDLDBDQUFBLENBQVc7QUFDekNsRixPQUFLLEVBQUVrRiwwQ0FBQSxHQUFhQyxRQUFiLENBQXNCLG1CQUF0QixDQURrQztBQUV6Q2pGLGFBQVcsRUFBRWdGLDBDQUFBLEdBQWFyQixHQUFiLEdBQW1Cc0IsUUFBbkIsQ0FBNEIsd0JBQTVCLENBRjRCO0FBR3pDaEYsY0FBWSxFQUFFK0UsMENBQUEsRUFIMkI7QUFJekMxRSxVQUFRLEVBQUUwRSwwQ0FBQSxHQUFhQyxRQUFiLENBQXNCLHNCQUF0QixDQUorQjtBQUt6Q3hFLFNBQU8sRUFBRXVFLDBDQUFBLEdBQWFDLFFBQWIsQ0FBc0IscUJBQXRCLENBTGdDO0FBTXpDL0UsUUFBTSxFQUFFOEUseUNBQUEsR0FBWUUsR0FBWixDQUFnQixDQUFoQixFQUFtQkQsUUFBbkIsQ0FBNEIsc0NBQTVCO0FBTmlDLENBQVgsQ0FBekIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QlA7QUFDQTs7SUFFTUUsYTs7Ozs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUszRCxLQUFMLEdBQWE7QUFBRTRELGNBQVEsRUFBRTtBQUFaLEtBQWI7QUFGaUI7QUFHbEI7Ozs7V0FNRCw2QkFBb0IsQ0FBRTs7O1dBRXRCLGtCQUFTO0FBQ1AsVUFBSSxLQUFLNUQsS0FBTCxDQUFXNEQsUUFBZixFQUF5QjtBQUN2Qiw0QkFBTyxnR0FBUDtBQUNEOztBQUNELGFBQU8sS0FBS0QsS0FBTCxDQUFXRSxRQUFsQjtBQUNEOzs7V0FYRCxvQ0FBa0M7QUFDaEMsYUFBTztBQUFFRCxnQkFBUSxFQUFFO0FBQVosT0FBUDtBQUNEOzs7O0VBUnlCRSwrQzs7QUFvQmJKLDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFBQSwyREFBQyxpREFBRDtBQUFPLEtBQUcsRUFBQyx5QkFBWDtBQUFxQyxXQUFTLEVBQUM7QUFBL0M7O0FBRUEsSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxzQkFDbkIscUlBQ0UsMkRBQUMsMkRBQUQ7QUFBVyxhQUFTLEVBQUVyRyx5REFBTSxDQUFDc0csU0FBN0I7QUFBd0MsU0FBSztBQUE3QyxrQkFDRSwyREFBQyxpREFBRDtBQUFPLE9BQUcsRUFBQyx5QkFBWDtBQUFxQyxTQUFLLEVBQUMsS0FBM0M7QUFBaUQsVUFBTSxFQUFDO0FBQXhELElBREYsZUFFRTtBQUFLLGFBQVMsRUFBRXRHLHlEQUFNLENBQUN1RztBQUF2QixrQkFDRTtBQUFHLGFBQVMsRUFBRXZHLHlEQUFNLENBQUN3RztBQUFyQixzQkFERixlQUVFLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDLFNBQVQ7QUFBbUIsYUFBUyxFQUFFeEcseURBQU0sQ0FBQ3lHLFFBQXJDO0FBQStDLFNBQUssRUFBQztBQUFyRCx1QkFGRixDQUZGLENBREYsZUFVRSwyREFBQyxzREFBRCxPQVZGLENBRG1CO0FBQUEsQ0FBckI7O0FBZWVKLDJFQUFmLEU7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNSyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLHNCQUNiLDJEQUFDLDJEQUFEO0FBQVcsYUFBUyxFQUFFMUcsMERBQU0sQ0FBQzJHLE1BQTdCO0FBQXFDLFNBQUs7QUFBMUMsa0JBQ0UsMkRBQUMsaURBQUQ7QUFBTyxPQUFHLEVBQUMseUJBQVg7QUFBcUMsYUFBUyxFQUFFM0csMERBQU0sQ0FBQzRHLFVBQXZEO0FBQW1FLFNBQUssRUFBQyxLQUF6RTtBQUErRSxVQUFNLEVBQUM7QUFBdEYsSUFERixDQURhO0FBQUEsQ0FBZjs7QUFNZUYscUVBQWYsRTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQThCO0FBQUEsTUFBM0JuRSxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQm9FLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRsRSxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ3ZCbEIsc0RBQVEsQ0FBQyxFQUFELENBRGU7QUFBQTtBQUFBLE1BQzVDWCxNQUQ0QztBQUFBLE1BQ3BDcUMsU0FEb0M7O0FBR25ELE1BQU0yRCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JuRSxXQUFPO0FBQ1IsR0FGRDs7QUFJQSxNQUFNVSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNsQixLQUFELEVBQVFtQixhQUFSLEVBQTBCO0FBQy9DSCxhQUFTLENBQUNoQixLQUFELENBQVQ7QUFDQW1CLGlCQUFhLENBQUMsUUFBRCxFQUFXbkIsS0FBWCxDQUFiO0FBQ0QsR0FIRDs7QUFLQSxNQUFNb0IsTUFBTSxHQUFHQyx5REFBUyxDQUFDO0FBQ3ZCQyxpQkFBYSxFQUFFO0FBQ2IvQyxXQUFLLEVBQUUsRUFETTtBQUViRyxrQkFBWSxFQUFFLEVBRkQ7QUFHYkQsaUJBQVcsRUFBRSxFQUhBO0FBSWJFLFlBQU0sRUFBTkEsTUFKYTtBQUtiSSxjQUFRLEVBQUUsRUFMRztBQU1iRyxhQUFPLEVBQUU7QUFOSSxLQURRO0FBU3ZCcUMsb0JBQWdCLEVBQWhCQSw0REFUdUI7QUFVdkJDLFVBQU0sRUFBRTtBQUNON0MsWUFBTSxFQUFOQTtBQURNLEtBVmU7QUFhdkI4QyxZQUFRLEVBQUUsa0JBQUNELE1BQUQsRUFBWTtBQUNwQmtELFdBQUssQ0FBQ2xELE1BQUQsQ0FBTDtBQUNEO0FBZnNCLEdBQUQsQ0FBeEI7QUFrQkEsc0JBQ0UsMkRBQUMsc0RBQUQ7QUFBZ0IsU0FBSyxFQUFFSjtBQUF2QixrQkFDRSwyREFBQywrREFBRDtBQUNFLHdCQUFvQixNQUR0QjtBQUVFLHdCQUFvQixNQUZ0QjtBQUdFLFFBQUksRUFBRWQsSUFIUjtBQUlFLFdBQU8sRUFBRXFFO0FBSlgsa0JBTUUsMkRBQUMsbUVBQUQ7QUFBWSxrQkFBVyxPQUF2QjtBQUErQixXQUFPLEVBQUVBO0FBQXhDLGtCQUNFLDJEQUFDLGdFQUFELE9BREYsQ0FORixlQVNFLDJEQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFDLFdBQVo7QUFBd0IsWUFBUSxFQUFFdkQsTUFBTSxDQUFDd0Q7QUFBekMsa0JBQ0UsMkRBQUMsb0VBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsaUJBREYsZUFFRSwyREFBQyxzRUFBRDtBQUFlLGFBQVMsRUFBQztBQUF6QixrQkFDRTtBQUFHLGFBQVMsRUFBQztBQUFiLGFBREYsZUFFRSwyREFBQyw2Q0FBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFFaEQsd0RBQVksQ0FBQ0MsS0FGckI7QUFHRSxlQUFXLEVBQUMsYUFIZDtBQUlFLGFBQVMsRUFBQyxZQUpaO0FBS0UsU0FBSyxFQUFDLE9BTFI7QUFNRSxtQkFBWTtBQU5kLElBRkYsZUFVRSwyREFBQyxvREFBRDtBQUNFLFFBQUksRUFBRUQsd0RBQVksQ0FBQ0MsS0FEckI7QUFFRSxhQUFTLEVBQUMsS0FGWjtBQUdFLGFBQVMsRUFBQztBQUhaLElBVkYsZUFlRTtBQUFHLGFBQVMsRUFBQztBQUFiLG9CQWZGLGVBZ0JFLDJEQUFDLDZDQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUVELHdEQUFZLENBQUNFLFlBRnJCO0FBR0UsZUFBVyxFQUFDLGFBSGQ7QUFJRSxhQUFTLEVBQUMsWUFKWjtBQUtFLFNBQUssRUFBQyxjQUxSO0FBTUUsbUJBQVk7QUFOZCxJQWhCRixlQXdCRSwyREFBQyxvREFBRDtBQUNFLFFBQUksRUFBRUYsd0RBQVksQ0FBQ0UsWUFEckI7QUFFRSxhQUFTLEVBQUMsS0FGWjtBQUdFLGFBQVMsRUFBQztBQUhaLElBeEJGLGVBNkJFO0FBQUcsYUFBUyxFQUFDO0FBQWIsaUJBN0JGLGVBOEJFLDJEQUFDLDZDQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUVGLHdEQUFZLENBQUNHLFdBRnJCO0FBR0UsZUFBVyxFQUFDLGdCQUhkO0FBSUUsYUFBUyxFQUFDLFlBSlo7QUFLRSxTQUFLLEVBQUMsYUFMUjtBQU1FLG1CQUFZO0FBTmQsSUE5QkYsZUFzQ0UsMkRBQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUVILHdEQUFZLENBQUNHLFdBRHJCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxhQUFTLEVBQUM7QUFIWixJQXRDRixlQTJDRTtBQUFHLGFBQVMsRUFBQztBQUFiLGFBM0NGLGVBNENFLDJEQUFDLCtEQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUVILHdEQUFZLENBQUNJLE1BRnJCO0FBR0UsYUFBUyxFQUFDLFlBSFo7QUFJRSxTQUFLLEVBQUVyRCxNQUpUO0FBS0UsWUFBUSxFQUFFLGtCQUFDbUIsS0FBRDtBQUFBLGFBQ1JvQixjQUFjLENBQUNwQixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxFQUFxQm9CLE1BQU0sQ0FBQ0QsYUFBNUIsQ0FETjtBQUFBLEtBTFo7QUFRRSxZQUFRLE1BUlY7QUFTRSxTQUFLLEVBQUMsUUFUUjtBQVVFLG1CQUFZO0FBVmQsS0FZR2MsdURBQVcsQ0FBQ3ZDLEdBQVosQ0FBZ0IsVUFBQ2pDLEtBQUQ7QUFBQSx3QkFDZiwyREFBQyxpRUFBRDtBQUFVLFNBQUcsRUFBRUEsS0FBZjtBQUFzQixXQUFLLEVBQUVBO0FBQTdCLE9BQ0dBLEtBREgsQ0FEZTtBQUFBLEdBQWhCLENBWkgsQ0E1Q0YsZUE4REUsMkRBQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUVtRSx3REFBWSxDQUFDSSxNQURyQjtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsYUFBUyxFQUFDO0FBSFosSUE5REYsZUFtRUU7QUFBRyxhQUFTLEVBQUM7QUFBYixnQkFuRUYsZUFvRUUsMkRBQUMsNkNBQUQ7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFFBQUksRUFBRUosd0RBQVksQ0FBQ00sUUFGckI7QUFHRSxlQUFXLEVBQUMsZUFIZDtBQUlFLGFBQVMsRUFBQyxZQUpaO0FBS0UsU0FBSyxFQUFDLFVBTFI7QUFNRSxtQkFBWTtBQU5kLElBcEVGLGVBNEVFLDJEQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFFTix3REFBWSxDQUFDTSxRQURyQjtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsYUFBUyxFQUFDO0FBSFosSUE1RUYsZUFpRkU7QUFBRyxhQUFTLEVBQUM7QUFBYixlQWpGRixlQWtGRSwyREFBQyw2Q0FBRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsUUFBSSxFQUFFTix3REFBWSxDQUFDTyxPQUZyQjtBQUdFLGVBQVcsRUFBQyxjQUhkO0FBSUUsYUFBUyxFQUFDLFlBSlo7QUFLRSxTQUFLLEVBQUMsU0FMUjtBQU1FLG1CQUFZO0FBTmQsSUFsRkYsZUEwRkUsMkRBQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUVQLHdEQUFZLENBQUNPLE9BRHJCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxhQUFTLEVBQUM7QUFIWixJQTFGRixDQUZGLGVBa0dFLDJEQUFDLHNFQUFELHFCQUNFLDJEQUFDLCtEQUFEO0FBQ0UsV0FBTyxFQUFFd0MsZ0JBRFg7QUFFRSxTQUFLLEVBQUMsV0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsU0FBSyxFQUFDO0FBSlIsYUFERixlQVNFLDJEQUFDLCtEQUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsbUJBQVk7QUFKZCxjQVRGLENBbEdGLENBVEYsQ0FERixDQURGO0FBbUlELENBaktEOztBQW1LQUYsY0FBYyxDQUFDeEcsU0FBZixHQUEyQjtBQUN6QnFDLE1BQUksRUFBRXBDLGtEQUFTLENBQUN5QyxJQUFWLENBQWVyQyxVQURJO0FBRXpCa0MsU0FBTyxFQUFFdEMsa0RBQVMsQ0FBQ2lCLElBQVYsQ0FBZWIsVUFGQztBQUd6Qm9HLE9BQUssRUFBRXhHLGtEQUFTLENBQUNpQixJQUFWLENBQWViO0FBSEcsQ0FBM0I7QUFNZW1HLDZFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNEeEYsc0RBQVEsQ0FBQyxLQUFELENBRFA7QUFBQTtBQUFBLE1BQ3hCeUYsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUUvQixNQUFNQyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QkgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ3ZFLEtBQUQsRUFBVztBQUM1QmlFLFlBQVEsQ0FBQ2pFLEtBQUQsQ0FBUjtBQUNBbUUsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0UsMkRBQUMsMkRBQUQ7QUFBVyxhQUFTLEVBQUVwSCwyREFBTSxDQUFDeUgsTUFBN0I7QUFBcUMsU0FBSztBQUExQyxrQkFDRSwyREFBQyx1REFBRCxxQkFDRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQztBQUFaLGtCQUNFO0FBQUssYUFBUyxFQUFFekgsMkRBQU0sQ0FBQzBIO0FBQXZCLGtCQUNFLDJEQUFDLGlEQUFEO0FBQU8sT0FBRyxFQUFDLHlCQUFYO0FBQXFDLGFBQVMsRUFBRTFILDJEQUFNLENBQUM0RyxVQUF2RDtBQUFtRSxTQUFLLEVBQUMsS0FBekU7QUFBK0UsVUFBTSxFQUFDO0FBQXRGLElBREYsZUFFRSwyREFBQyxtRUFBRDtBQUFZLFdBQU8sRUFBRTtBQUFBLGFBQU1TLE9BQU8sQ0FBQ00sSUFBUixDQUFhLEdBQWIsQ0FBTjtBQUFBO0FBQXJCLGtCQUNFLDJEQUFDLGdFQUFEO0FBQVksWUFBUSxFQUFDO0FBQXJCLElBREYsQ0FGRixDQURGLGVBT0UsMkRBQUMsc0RBQUQsT0FQRixDQURGLGVBVUUsMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUM7QUFBWixrQkFDRTtBQUFLLGFBQVMsRUFBRTNILDJEQUFNLENBQUMwSDtBQUF2QixrQkFDRSwyREFBQyxpREFBRDtBQUFPLE9BQUcsRUFBQyx5QkFBWDtBQUFxQyxhQUFTLEVBQUUxSCwyREFBTSxDQUFDNEcsVUFBdkQ7QUFBbUUsU0FBSyxFQUFDLEtBQXpFO0FBQStFLFVBQU0sRUFBQztBQUF0RixJQURGLGVBRUUsMkRBQUMsK0RBQUQ7QUFBUSxNQUFFLEVBQUMsa0JBQVg7QUFBOEIsV0FBTyxFQUFDLFdBQXRDO0FBQWtELFFBQUksRUFBQyxPQUF2RDtBQUErRCxXQUFPLEVBQUVXO0FBQXhFLG1CQUZGLGVBS0UsMkRBQUMsdURBQUQ7QUFBZ0IsUUFBSSxFQUFFSixPQUF0QjtBQUErQixTQUFLLEVBQUVLLFVBQXRDO0FBQWtELFdBQU8sRUFBRTtBQUFBLGFBQU1KLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUE7QUFBM0QsSUFMRixDQURGLGVBUUUsMkRBQUMsNkRBQUQsT0FSRixDQVZGLENBREYsQ0FERjtBQXlCRCxDQXRDRDs7QUF3Q0FILE1BQU0sQ0FBQzVHLFNBQVAsR0FBbUI7QUFDakI2RyxVQUFRLEVBQUU1RyxpREFBUyxDQUFDaUIsSUFBVixDQUFlYjtBQURSLENBQW5CO0FBSWV1RyxxRUFBZixFOzs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBLElBQU0xRSxrQkFBa0IsR0FBRztBQUN6QjJFLFVBQVEsRUFBUkEsOERBQVFBO0FBRGlCLENBQTNCO0FBSWUxRSwwSEFBTyxDQUFDLElBQUQsRUFBT0Qsa0JBQVAsQ0FBUCxDQUFrQzBFLCtDQUFsQyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEIzRSxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmNEUsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG1CQUN4QkMsa0VBQVMsRUFEZTtBQUFBLE1BQ3BDbkYsT0FEb0MsY0FDcENBLE9BRG9DOztBQUc1Q2hELHlEQUFTLENBQUMsWUFBTTtBQUNka0ksWUFBUSxDQUFDRSxNQUFNLENBQUNwRixPQUFELENBQVAsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDQSxPQUFELEVBQVVrRixRQUFWLENBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxPQUFHLEVBQUU1RSxLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRXBDLFdBQWpCO0FBQThCLE9BQUcsRUFBQyxFQUFsQztBQUFxQyxhQUFTLEVBQUM7QUFBL0MsSUFERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQXVCb0MsS0FBdkIsYUFBdUJBLEtBQXZCLHVCQUF1QkEsS0FBSyxDQUFFdEMsS0FBOUIsQ0FERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBeUJzQyxLQUF6QixhQUF5QkEsS0FBekIsdUJBQXlCQSxLQUFLLENBQUVqQyxZQUFoQyxDQUZGLENBREYsZUFLRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQTBCaUMsS0FBMUIsYUFBMEJBLEtBQTFCLHVCQUEwQkEsS0FBSyxDQUFFaEMsT0FBakMsQ0FMRixlQU1FO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUErQmdDLEtBQS9CLGFBQStCQSxLQUEvQiw4Q0FBK0JBLEtBQUssQ0FBRW5DLFlBQXRDLHdEQUErQixvQkFBcUI2RSxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUEvQixDQURGLGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUEwQjFDLEtBQTFCLGFBQTBCQSxLQUExQix1QkFBMEJBLEtBQUssQ0FBRTNCLE9BQWpDLFNBRkYsQ0FORixlQVVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBMkIyQixLQUEzQixhQUEyQkEsS0FBM0IsdUJBQTJCQSxLQUFLLENBQUU5QixRQUFsQyxDQVZGLENBRkYsQ0FERjtBQWlCRCxDQXhCRDs7QUEwQkF5RyxZQUFZLENBQUNJLFlBQWIsR0FBNEI7QUFDMUIvRSxPQUFLLEVBQUU7QUFEbUIsQ0FBNUI7QUFJQTJFLFlBQVksQ0FBQ3ZILFNBQWIsR0FBeUI7QUFDdkI0QyxPQUFLLEVBQUUzQyxpREFBUyxDQUFDRSxLQUFWLENBQWdCO0FBQ3JCakMsTUFBRSxFQUFFK0IsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkMsVUFEQTtBQUVyQkMsU0FBSyxFQUFFTCxpREFBUyxDQUFDTSxNQUFWLENBQWlCRixVQUZIO0FBR3JCRyxlQUFXLEVBQUVQLGlEQUFTLENBQUNNLE1BSEY7QUFJckJFLGdCQUFZLEVBQUVSLGlEQUFTLENBQUNNLE1BSkg7QUFLckJHLFVBQU0sRUFBRVQsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ00sTUFBNUIsQ0FMYTtBQU1yQkksZ0JBQVksRUFBRVYsaURBQVMsQ0FBQ0csTUFOSDtBQU9yQlEsV0FBTyxFQUFFWCxpREFBUyxDQUFDTSxNQVBFO0FBUXJCTSxjQUFVLEVBQUVaLGlEQUFTLENBQUNHLE1BUkQ7QUFTckJVLFlBQVEsRUFBRWIsaURBQVMsQ0FBQ00sTUFUQztBQVVyQlEsVUFBTSxFQUFFZCxpREFBUyxDQUFDRyxNQVZHO0FBV3JCWSxXQUFPLEVBQUVmLGlEQUFTLENBQUNHLE1BWEU7QUFZckJhLFdBQU8sRUFBRWhCLGlEQUFTLENBQUNHO0FBWkUsR0FBaEIsQ0FEZ0I7QUFldkJvSCxVQUFRLEVBQUV2SCxpREFBUyxDQUFDaUIsSUFBVixDQUFlYjtBQWZGLENBQXpCO0FBa0Jla0gsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7O0FBRUEsSUFBTXZGLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFBRVcsU0FBSyxFQUFFWCxLQUFLLENBQUNXO0FBQWYsR0FBWjtBQUFBLENBQXhCOztBQUVBLElBQU1WLGtCQUFrQixHQUFHO0FBQ3pCc0YsVUFBUSxFQUFSQSw4REFBUUE7QUFEaUIsQ0FBM0I7QUFHZXJGLDBIQUFPLENBQUNILGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDcUYscURBQTdDLENBQWYsRTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsTUFBTVosT0FBTyxHQUFHQyxtRUFBVSxFQUExQjs7QUFFQSxNQUFNWSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUMxSSxLQUFELEVBQVc7QUFDaEM2SCxXQUFPLENBQUNNLElBQVIsMEJBQStCbkksS0FBL0I7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFUSw2REFBTSxDQUFDbUk7QUFBdkIsa0JBQ0U7QUFBRyxhQUFTLEVBQUVuSSw2REFBTSxDQUFDVztBQUFyQix1QkFERixlQUVFLDJEQUFDLDZDQUFEO0FBQ0UsaUJBQWEsRUFBRTtBQUNibkIsV0FBSyxFQUFFO0FBRE0sS0FEakI7QUFJRSxZQUFRLEVBQUUsa0JBQUNzRSxNQUFELEVBQVk7QUFDcEJvRSxvQkFBYyxDQUFDcEUsTUFBTSxDQUFDdEUsS0FBUixDQUFkO0FBQ0Q7QUFOSCxrQkFRRSwyREFBQywyQ0FBRCxxQkFDRSwyREFBQyw0Q0FBRDtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFdBQU8sRUFBQyxRQUE3QjtBQUFzQyxTQUFLLEVBQUMsV0FBNUM7QUFBd0QsTUFBRSxFQUFDLGNBQTNEO0FBQTBFLFFBQUksRUFBQztBQUEvRSxJQURGLGVBRUUsMkRBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsUUFBSSxFQUFDO0FBQWpDLGNBRkYsQ0FSRixDQUZGLENBREY7QUFvQkQsQ0EzQkQ7O0FBNkJleUksd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHakMsUUFBSCxRQUFHQSxRQUFIO0FBQUEsc0JBQWtCO0FBQUssYUFBUyxFQUFFbkcsMERBQU0sQ0FBQ3FJO0FBQXZCLEtBQW9DbEMsUUFBcEMsQ0FBbEI7QUFBQSxDQUFmOztBQUVBaUMsTUFBTSxDQUFDL0gsU0FBUCxHQUFtQjtBQUNqQjhGLFVBQVEsRUFBRTdGLGlEQUFTLENBQUNnSSxTQUFWLENBQW9CLENBQUNoSSxpREFBUyxDQUFDaUksTUFBWCxFQUFtQmpJLGlEQUFTLENBQUNrSSxLQUE3QixDQUFwQixFQUF5RDlIO0FBRGxELENBQW5CO0FBSWUwSCxxRUFBZixFOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUEsSUFBTXBKLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3lKLFVBQUQsRUFBZ0I7QUFBQSxrQkFDZC9HLHNEQUFRLENBQUMsUUFBa0JnSCxTQUFsQixHQUF1RCxJQUF4RCxDQURNO0FBQUE7QUFBQSxNQUNqQ3RHLEtBRGlDO0FBQUEsTUFDMUJ1RyxRQUQwQjs7QUFHeENoSix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJeUMsS0FBSixFQUFXO0FBQ1RzRyxvQkFBYyxDQUFDRSxPQUFmLENBQXVCSCxVQUF2QixFQUFtQ3JHLEtBQW5DO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsS0FBRCxFQUFRcUcsVUFBUixDQUpNLENBQVQ7QUFNQSxTQUFPLENBQUNyRyxLQUFELEVBQVF1RyxRQUFSLENBQVA7QUFDRCxDQVZEOztBQVllM0osZ0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU02SixHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLHNCQUNWLDJEQUFDLDZEQUFELHFCQUNFLDJEQUFDLGlFQUFELHFCQUNFLDJEQUFDLHVEQUFELHFCQUNFLDJEQUFDLHNEQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNFLDJEQUFDLHNFQUFELE9BREYsQ0FERixlQUlFLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDO0FBQVosa0JBQ0UsMkRBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVDLG9EQUFLQTtBQUF0QixrQkFDRSwyREFBQywwREFBRCxPQURGLGVBRUUsMkRBQUMsd0RBQUQsT0FGRixlQUdFLDJEQUFDLGlFQUFELE9BSEYsQ0FERixDQUpGLENBREYsQ0FERixDQURVO0FBQUEsQ0FBWjs7QUFtQmVELGtFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDakNNRSxhOzs7OzsrRkFDSywrQjs7b0dBRUssVUFBQ0MsTUFBRCxFQUFTakosSUFBVCxFQUFlUCxLQUFmO0FBQUEsV0FDWnlKLEtBQUssQ0FBQyxLQUFJLENBQUNDLFFBQUwsQ0FBY0YsTUFBZCxFQUFzQmpKLElBQXRCLEVBQTRCUCxLQUE1QixDQUFELENBQUwsQ0FBMEMySixJQUExQyxDQUErQyxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQUEvQyxDQURZO0FBQUEsRzs7cUdBR0MsVUFBQzFHLE9BQUQ7QUFBQSxXQUNic0csS0FBSyxDQUFDLEtBQUksQ0FBQ0ssTUFBTCxHQUFjM0csT0FBZixDQUFMLENBQTZCd0csSUFBN0IsQ0FBa0MsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FBbEMsQ0FEYTtBQUFBLEc7O2lHQUdKLFVBQUNwRyxLQUFEO0FBQUEsV0FDVGdHLEtBQUssQ0FBQyxLQUFJLENBQUNLLE1BQU4sRUFBYztBQUNqQkMsWUFBTSxFQUFFLE1BRFM7QUFFakJDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRlE7QUFLakJ2SixVQUFJLEVBQUVuRyxJQUFJLENBQUMyUCxTQUFMLENBQWV4RyxLQUFmO0FBTFcsS0FBZCxDQUFMLENBTUdrRyxJQU5ILENBTVEsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FOUixDQURTO0FBQUEsRzs7b0dBU0csVUFBQ3BHLEtBQUQ7QUFBQSxXQUNaZ0csS0FBSyxDQUFDLEtBQUksQ0FBQ0ssTUFBTixFQUFjO0FBQ2pCQyxZQUFNLEVBQUUsS0FEUztBQUVqQkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGUTtBQUtqQnZKLFVBQUksRUFBRW5HLElBQUksQ0FBQzJQLFNBQUwsQ0FBZXhHLEtBQWY7QUFMVyxLQUFkLENBRE87QUFBQSxHOztvR0FTQSxVQUFDMUUsRUFBRDtBQUFBLFdBQVEwSyxLQUFLLENBQUMsS0FBSSxDQUFDSyxNQUFMLEdBQWMvSyxFQUFmLEVBQW1CO0FBQUVnTCxZQUFNLEVBQUU7QUFBVixLQUFuQixDQUFiO0FBQUEsRzs7aUdBRUgsVUFBQ1AsTUFBRCxFQUFTakosSUFBVCxFQUFlUCxLQUFmLEVBQXlCO0FBQ2xDLFFBQUlnRixHQUFHLGFBQU0sS0FBSSxDQUFDOEUsTUFBWCxxQkFBNEJ2SixJQUE1QixvQkFBUDs7QUFDQSxRQUFJaUosTUFBTSxJQUFJQSxNQUFNLEtBQUssS0FBekIsRUFBZ0M7QUFDOUJ4RSxTQUFHLHNCQUFld0UsTUFBZixDQUFIO0FBQ0Q7O0FBQ0QsUUFBSXhKLEtBQUosRUFBVztBQUNUZ0YsU0FBRyxzQkFBZWhGLEtBQWYsb0JBQUg7QUFDRDs7QUFDRCxXQUFPZ0YsR0FBUDtBQUNELEc7OztBQUdZLG1FQUFJdUUsYUFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNTyxJQUFNbEIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ2xGLE9BQUQ7QUFBQSxTQUFjO0FBQ3BDK0csUUFBSSxFQUFFQyxzREFEOEI7QUFFcENoSCxXQUFPLEVBQVBBO0FBRm9DLEdBQWQ7QUFBQSxDQUFqQjtBQUtBLElBQU1pSCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUMzRyxLQUFEO0FBQUEsU0FBWTtBQUN6Q3lHLFFBQUksRUFBRUcsOERBRG1DO0FBRXpDNUcsU0FBSyxFQUFMQTtBQUZ5QyxHQUFaO0FBQUEsQ0FBeEI7QUFLQSxJQUFNNkcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsT0FBRDtBQUFBLFNBQWM7QUFDeENMLFFBQUksRUFBRU0sMkRBRGtDO0FBRXhDRCxXQUFPLEVBQVBBO0FBRndDLEdBQWQ7QUFBQSxDQUFyQixDOzs7Ozs7Ozs7Ozs7QUNoQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZU8sSUFBTWhMLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNpSyxNQUFELEVBQVNqSixJQUFULEVBQWVQLEtBQWY7QUFBQSxTQUEwQjtBQUNsRGtLLFFBQUksRUFBRU8sa0RBRDRDO0FBRWxEakIsVUFBTSxFQUFOQSxNQUZrRDtBQUdsRGpKLFFBQUksRUFBSkEsSUFIa0Q7QUFJbERQLFNBQUssRUFBTEE7QUFKa0QsR0FBMUI7QUFBQSxDQUFuQjtBQU9BLElBQU0wSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNwTCxNQUFEO0FBQUEsU0FBYTtBQUM1QzRLLFFBQUksRUFBRVMsMkRBRHNDO0FBRTVDckwsVUFBTSxFQUFOQTtBQUY0QyxHQUFiO0FBQUEsQ0FBMUI7QUFLQSxJQUFNc0wsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDTCxPQUFEO0FBQUEsU0FBYztBQUMxQ0wsUUFBSSxFQUFFVyx1REFEb0M7QUFFMUNOLFdBQU8sRUFBUEE7QUFGMEMsR0FBZDtBQUFBLENBQXZCO0FBS0EsSUFBTTdDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNqRSxLQUFEO0FBQUEsU0FBWTtBQUNsQ3lHLFFBQUksRUFBRVksZ0RBRDRCO0FBRWxDckgsU0FBSyxFQUFMQTtBQUZrQyxHQUFaO0FBQUEsQ0FBakI7QUFLQSxJQUFNc0gsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDdEgsS0FBRDtBQUFBLFNBQVk7QUFDekN5RyxRQUFJLEVBQUVjLHdEQURtQztBQUV6Q3ZILFNBQUssRUFBTEE7QUFGeUMsR0FBWjtBQUFBLENBQXhCO0FBS0EsSUFBTXdILFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNWLE9BQUQ7QUFBQSxTQUFjO0FBQ3hDTCxRQUFJLEVBQUVnQixxREFEa0M7QUFFeENYLFdBQU8sRUFBUEE7QUFGd0MsR0FBZDtBQUFBLENBQXJCO0FBS0EsSUFBTXJGLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN6QixLQUFEO0FBQUEsU0FBWTtBQUNyQ3lHLFFBQUksRUFBRWlCLG1EQUQrQjtBQUVyQzFILFNBQUssRUFBTEE7QUFGcUMsR0FBWjtBQUFBLENBQXBCO0FBS0EsSUFBTTJILGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQzNILEtBQUQ7QUFBQSxTQUFZO0FBQzVDeUcsUUFBSSxFQUFFbUIsMkRBRHNDO0FBRTVDNUgsU0FBSyxFQUFMQTtBQUY0QyxHQUFaO0FBQUEsQ0FBM0I7QUFLQSxJQUFNNkgsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDZixPQUFEO0FBQUEsU0FBYztBQUMzQ0wsUUFBSSxFQUFFcUIsd0RBRHFDO0FBRTNDaEIsV0FBTyxFQUFQQTtBQUYyQyxHQUFkO0FBQUEsQ0FBeEI7QUFLQSxJQUFNcEYsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ3BHLEVBQUQ7QUFBQSxTQUFTO0FBQ2xDbUwsUUFBSSxFQUFFc0IsbURBRDRCO0FBRWxDek0sTUFBRSxFQUFGQTtBQUZrQyxHQUFUO0FBQUEsQ0FBcEI7QUFLQSxJQUFNME0sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDMU0sRUFBRDtBQUFBLFNBQVM7QUFDekNtTCxRQUFJLEVBQUV3QiwyREFEbUM7QUFFekMzTSxNQUFFLEVBQUZBO0FBRnlDLEdBQVQ7QUFBQSxDQUEzQjtBQUtBLElBQU00TSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixPQUFEO0FBQUEsU0FBYztBQUMzQ0wsUUFBSSxFQUFFMEIsd0RBRHFDO0FBRTNDckIsV0FBTyxFQUFQQTtBQUYyQyxHQUFkO0FBQUEsQ0FBeEIsQzs7Ozs7Ozs7Ozs7O0FDeEVQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUUsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsSUFBTUUsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUUsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUUsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUUsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1FLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1FLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1FLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1FLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU16QixlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUUsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsSUFBTUcsb0JBQW9CLEdBQUcsc0JBQTdCLEM7Ozs7Ozs7Ozs7OztBQ2RQO0FBQUE7QUFBQTs7QUFLQSxJQUFNcUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUEwQjtBQUFBLE1BQXpCL0ksS0FBeUIsdUVBQWpCLElBQWlCO0FBQUEsTUFBWGdKLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQzVCLElBQWY7QUFDRSxTQUFLRyxzRUFBTDtBQUNFLGFBQU95QixNQUFNLENBQUNySSxLQUFkOztBQUNGLFNBQUsrRyxtRUFBTDtBQUNBO0FBQ0UsYUFBTzFILEtBQVA7QUFMSjtBQU9ELENBUkQ7O0FBVWUrSSw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBV0EsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUF3QjtBQUFBLE1BQXZCakosS0FBdUIsdUVBQWYsRUFBZTtBQUFBLE1BQVhnSixNQUFXOztBQUM1QyxVQUFRQSxNQUFNLENBQUM1QixJQUFmO0FBQ0UsU0FBS1MsbUVBQUw7QUFDRSxhQUFPbUIsTUFBTSxDQUFDeE0sTUFBZDs7QUFDRixTQUFLMEwsZ0VBQUw7QUFDRSx1R0FBV2xJLEtBQVgsSUFBa0JnSixNQUFNLENBQUNySSxLQUF6Qjs7QUFDRixTQUFLNEgsbUVBQUw7QUFDRSxhQUFPdkksS0FBSyxDQUFDUixHQUFOLENBQVUsVUFBQ21CLEtBQUQsRUFBVztBQUMxQixZQUFJQSxLQUFLLENBQUMxRSxFQUFOLEtBQWErTSxNQUFNLENBQUNySSxLQUFQLENBQWExRSxFQUE5QixFQUFrQztBQUNoQyxtQ0FDSytNLE1BQU0sQ0FBQ3JJLEtBRFo7QUFHRDs7QUFDRCxlQUFPQSxLQUFQO0FBQ0QsT0FQTSxDQUFQOztBQVFGLFNBQUtpSSxtRUFBTDtBQUNFLDZGQUFXNUksS0FBSyxDQUFDMEcsTUFBTixDQUFhLFVBQUMvRixLQUFEO0FBQUEsZUFBV0EsS0FBSyxDQUFDMUUsRUFBTixLQUFhK00sTUFBTSxDQUFDL00sRUFBL0I7QUFBQSxPQUFiLENBQVg7O0FBQ0YsU0FBSzhMLCtEQUFMO0FBQ0EsU0FBS0ssNkRBQUw7QUFDQSxTQUFLSyxnRUFBTDtBQUNBLFNBQUtLLGdFQUFMO0FBQ0E7QUFDRSxhQUFPOUksS0FBUDtBQXJCSjtBQXVCRCxDQXhCRDs7QUEwQmVpSiw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQ1hVQyxZO21HQVNBM0QsUTttR0FRQVgsUTttR0FTQXhDLFc7bUdBU0FDLFc7bUdBU0E4RyxXOztBQXRFVjtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFVQTs7QUFRQSxTQUFVRCxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QnhDLGdCQUF6QixRQUF5QkEsTUFBekIsRUFBaUNqSixJQUFqQyxRQUFpQ0EsSUFBakMsRUFBdUNQLEtBQXZDLFFBQXVDQSxLQUF2QztBQUFBO0FBQUE7QUFFbUIsaUJBQU1rTSwrREFBSSxDQUFDM0MsK0RBQWEsQ0FBQzRDLFdBQWYsRUFBNEIzQyxNQUE1QixFQUFvQ2pKLElBQXBDLEVBQTBDUCxLQUExQyxDQUFWOztBQUZuQjtBQUVVVixnQkFGVjtBQUFBO0FBR0ksaUJBQU04TSw4REFBRyxDQUFDMUIseUVBQWlCLENBQUNwTCxNQUFNLENBQUMrTSxJQUFSLENBQWxCLENBQVQ7O0FBSEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0ksaUJBQU1ELDhEQUFHLENBQUN4QixzRUFBYyxDQUFDLFlBQUVMLE9BQUgsQ0FBZixDQUFUOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFNBQVVsQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQmxGLGlCQUFyQixTQUFxQkEsT0FBckI7QUFBQTtBQUFBO0FBRWtCLGlCQUFNK0ksK0RBQUksQ0FBQzNDLCtEQUFhLENBQUMrQyxZQUFmLEVBQTZCbkosT0FBN0IsQ0FBVjs7QUFGbEI7QUFFVU0sZUFGVjtBQUFBO0FBR0ksaUJBQU0ySSw4REFBRyxDQUFDaEMsdUVBQWUsQ0FBQzNHLEtBQUQsQ0FBaEIsQ0FBVDs7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLSSxpQkFBTTJJLDhEQUFHLENBQUM5QixvRUFBWSxDQUFDLGFBQUVDLE9BQUgsQ0FBYixDQUFUOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLFNBQVU3QyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQmpFLGVBQXJCLFNBQXFCQSxLQUFyQjtBQUFBO0FBQUE7QUFFdUIsaUJBQU15SSwrREFBSSxDQUFDM0MsK0RBQWEsQ0FBQzdCLFFBQWYsRUFBeUJqRSxLQUF6QixDQUFWOztBQUZ2QjtBQUVVOEksb0JBRlY7QUFBQTtBQUdJLGlCQUFNSCw4REFBRyxDQUFDckIsdUVBQWUsQ0FBQ3dCLFVBQUQsQ0FBaEIsQ0FBVDs7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLSSxpQkFBTUgsOERBQUcsQ0FBQ25CLG9FQUFZLENBQUMsYUFBRVYsT0FBSCxDQUFiLENBQVQ7O0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0EsU0FBVXJGLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCekIsZUFBeEIsU0FBd0JBLEtBQXhCO0FBQUE7QUFBQTtBQUVJLGlCQUFNeUksK0RBQUksQ0FBQzNDLCtEQUFhLENBQUNyRSxXQUFmLEVBQTRCekIsS0FBNUIsQ0FBVjs7QUFGSjtBQUFBO0FBR0ksaUJBQU0ySSw4REFBRyxDQUFDaEIsMEVBQWtCLENBQUMzSCxLQUFELENBQW5CLENBQVQ7O0FBSEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0ksaUJBQU0ySSw4REFBRyxDQUFDZCx1RUFBZSxDQUFDLGFBQUVmLE9BQUgsQ0FBaEIsQ0FBVDs7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSxTQUFVcEYsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0JwRyxZQUF4QixTQUF3QkEsRUFBeEI7QUFBQTtBQUFBO0FBRUksaUJBQU1tTiwrREFBSSxDQUFDM0MsK0RBQWEsQ0FBQ3BFLFdBQWYsRUFBNEJwRyxFQUE1QixDQUFWOztBQUZKO0FBQUE7QUFHSSxpQkFBTXFOLDhEQUFHLENBQUNYLDBFQUFrQixDQUFDMU0sRUFBRCxDQUFuQixDQUFUOztBQUhKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtJLGlCQUFNcU4sOERBQUcsQ0FBQ1QsdUVBQWUsQ0FBQyxhQUFFcEIsT0FBSCxDQUFoQixDQUFUOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFNBQVUwQixXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNTyxvRUFBUyxDQUFDL0IsMERBQUQsRUFBY3VCLFlBQWQsQ0FBZjs7QUFERjtBQUFBO0FBRUUsaUJBQU1RLG9FQUFTLENBQUMxQix3REFBRCxFQUFZcEQsUUFBWixDQUFmOztBQUZGO0FBQUE7QUFHRSxpQkFBTThFLG9FQUFTLENBQUNyQiwyREFBRCxFQUFlakcsV0FBZixDQUFmOztBQUhGO0FBQUE7QUFJRSxpQkFBTXNILG9FQUFTLENBQUNoQiwyREFBRCxFQUFlckcsV0FBZixDQUFmOztBQUpGO0FBQUE7QUFLRSxpQkFBTXFILG9FQUFTLENBQUNyQyw4REFBRCxFQUFrQjlCLFFBQWxCLENBQWY7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWU0RCwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNUSxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLElBQU1wRCxLQUFLLEdBQUdxRCx5REFBVyxDQUN2QkMsNkRBQWUsQ0FBQztBQUFFdE4sUUFBTSxFQUFFeU0sd0RBQVY7QUFBeUJ0SSxPQUFLLEVBQUVvSSx3REFBYUE7QUFBN0MsQ0FBRCxDQURRLEVBRXZCZ0IsNkRBQWUsQ0FBQ0osY0FBRCxDQUZRLENBQXpCO0FBSUFBLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQmIsOENBQW5CO0FBRWUzQyxvRUFBZixFOzs7Ozs7Ozs7OztBQ2RBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIFBsYWNlaG9sZGVyVmFsdWUgPSAnYmx1cicgfCAnZW1wdHknXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gICkgJlxuICAoXG4gICAgfCB7XG4gICAgICAgIHBsYWNlaG9sZGVyPzogRXhjbHVkZTxQbGFjZWhvbGRlclZhbHVlLCAnYmx1cic+XG4gICAgICAgIGJsdXJEYXRhVVJMPzogbmV2ZXJcbiAgICAgIH1cbiAgICB8IHsgcGxhY2Vob2xkZXI6ICdibHVyJzsgYmx1ckRhdGFVUkw6IHN0cmluZyB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxuICBlbmFibGVCbHVycnlQbGFjZWhvbGRlcjogY29uZmlnRW5hYmxlQmx1cnJ5UGxhY2Vob2xkZXIsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2dcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXVxuICAgIGZvciAobGV0IG1hdGNoOyAobWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcykpOyBtYXRjaCkge1xuICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKVxuICAgIH1cbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKFxuICBlbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbCxcbiAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyVmFsdWVcbikge1xuICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJyAmJiBlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY29tcGxldGUpIHtcbiAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICBwbGFjZWhvbGRlciA9ICdlbXB0eScsXG4gIGJsdXJEYXRhVVJMLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmICghY29uZmlnRW5hYmxlQmx1cnJ5UGxhY2Vob2xkZXIpIHtcbiAgICBwbGFjZWhvbGRlciA9ICdlbXB0eSdcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGNvbnN0IE1JTl9JTUdfU0laRV9GT1JfUExBQ0VIT0xERVIgPSA1MDAwXG4gIGNvbnN0IHRvb1NtYWxsRm9yQmx1cnJ5UGxhY2Vob2xkZXIgPVxuICAgIHdpZHRoSW50ICYmIGhlaWdodEludCAmJiB3aWR0aEludCAqIGhlaWdodEludCA8IE1JTl9JTUdfU0laRV9GT1JfUExBQ0VIT0xERVJcbiAgY29uc3Qgc2hvdWxkU2hvd0JsdXJyeVBsYWNlaG9sZGVyID1cbiAgICBwbGFjZWhvbGRlciA9PT0gJ2JsdXInICYmICF0b29TbWFsbEZvckJsdXJyeVBsYWNlaG9sZGVyXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuXG4gICAgLi4uKHNob3VsZFNob3dCbHVycnlQbGFjZWhvbGRlclxuICAgICAgPyB7XG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCksXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHshaXNWaXNpYmxlICYmIChcbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICApfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHNldFJlZihlbGVtZW50KVxuICAgICAgICAgIHJlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQsIHBsYWNlaG9sZGVyKVxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB1c2VTZXNzaW9uU3RvcmFnZSBmcm9tICcuLi8uLi9ob29rcy91c2VTZXNzaW9uU3RvcmFnZSc7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9lcnJvci9FcnJvckJvdW5kYXJ5JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEdlbnJlc0ZpbHRlciBmcm9tICcuL0dlbnJlc0ZpbHRlcic7XG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vbW92aWVMaXN0L01vdmllTGlzdCc7XG5pbXBvcnQgTW92aWVzU29ydGVyIGZyb20gJy4vTW92aWVzU29ydGVyJztcblxuY29uc3QgQm9keSA9ICh7IG1vdmllcywgbG9hZE1vdmllcyB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50RmlsdGVyLCBzZXRDdXJyZW50RmlsdGVyXSA9IHVzZVNlc3Npb25TdG9yYWdlKCdmaWx0ZXInKTtcbiAgY29uc3QgW2N1cnJlbnRTb3J0LCBzZXRDdXJyZW50U29ydF0gPSB1c2VTZXNzaW9uU3RvcmFnZSgnc29ydCcpO1xuICBjb25zdCBzZWFyY2hRdWVyeSA9IHVzZUxvY2F0aW9uKCkuc2VhcmNoO1xuICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUXVlcnkpLmdldCgnc2VhcmNoJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkTW92aWVzKGN1cnJlbnRGaWx0ZXIsIGN1cnJlbnRTb3J0LCBxdWVyeSk7XG4gIH0sIFtjdXJyZW50RmlsdGVyLCBjdXJyZW50U29ydCwgcXVlcnksIGxvYWRNb3ZpZXNdKTtcblxuICBjb25zdCBvbkZpbHRlckNsaWNrID0gKGdlbnJlKSA9PiB7XG4gICAgc2V0Q3VycmVudEZpbHRlcihnZW5yZSk7XG4gIH07XG5cbiAgY29uc3Qgb25Tb3J0Q2hhbmdlID0gKHNvcnQpID0+IHtcbiAgICBzZXRDdXJyZW50U29ydChzb3J0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0gZml4ZWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1lbnV9PlxuICAgICAgICA8R2VucmVzRmlsdGVyIG9uRmlsdGVyQ2xpY2s9e29uRmlsdGVyQ2xpY2t9IHNlbGVjdGVkRmlsdGVyPXtjdXJyZW50RmlsdGVyfSAvPlxuICAgICAgICA8TW92aWVzU29ydGVyIG9uU29ydENoYW5nZT17b25Tb3J0Q2hhbmdlfSBzZWxlY3RlZFNvcnQ9e2N1cnJlbnRTb3J0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdD5cbiAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvbW92aWVzXCIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbW92aWVzXCI+XG4gICAgICAgICAgeyFtb3ZpZXM/Lmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vTW92aWVzfT5ObyBNb3ZpZXMgRm91bmQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IC8+XG4gICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCI+XG4gICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL3BhZ2Vub3Rmb3VuZFwiIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkJvZHkucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KSxcbiAgKS5pc1JlcXVpcmVkLFxuICBsb2FkTW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBnZW5yZXMgPSBbJ0FsbCcsICdBZHZlbnR1cmUnLCAnQ29tZWR5JywgJ0RyYW1hJywgJ0ZhbnRhc3knXTtcblxuY29uc3QgR2VucmVzRmlsdGVyID0gKHsgb25GaWx0ZXJDbGljaywgc2VsZWN0ZWRGaWx0ZXIgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHNlbGVjdGVkRmlsdGVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2VucmVzRmlsdGVyfT5cbiAgICAgIHtnZW5yZXMubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2V5PXtnZW5yZX1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBvbkZpbHRlckNsaWNrKGdlbnJlKTtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkKGdlbnJlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzfS5pdGVtICR7Z2VucmUgPT09IHNlbGVjdGVkID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICA+XG4gICAgICAgICAge2dlbnJlfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR2VucmVzRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25GaWx0ZXJDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRGaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlc0ZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBNb3ZpZXNTb3J0ZXIgPSAoeyBvblNvcnRDaGFuZ2UsIHNlbGVjdGVkU29ydCB9KSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTb3J0KSB7XG4gICAgb25Tb3J0Q2hhbmdlKCdyZWxlYXNlX2RhdGUnKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29ydH0+XG4gICAgICA8cD5Tb3J0IGJ5IDwvcD5cbiAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlcy5zb3J0Rm9ybX0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBsYWJlbElkPVwic2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgaWQ9XCJzaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlbGVjdGVkU29ydH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvblNvcnRDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInZvdGVfYXZlcmFnZVwiPlJhdGluZzwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwicmVsZWFzZV9kYXRlXCI+UmVsZWFzZSBkYXRlPC9NZW51SXRlbT5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVzU29ydGVyLnByb3BUeXBlcyA9IHtcbiAgb25Tb3J0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZFNvcnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllc1NvcnRlcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJib2R5X2JvZHlfXzFTcjdjXCIsXG5cdFwic3VibWVudVwiOiBcImJvZHlfc3VibWVudV9fM19jenZcIixcblx0XCJzb3J0XCI6IFwiYm9keV9zb3J0X18yUWZaLVwiLFxuXHRcIk11aUZvcm1Db250cm9sLXJvb3RcIjogXCJib2R5X011aUZvcm1Db250cm9sLXJvb3RfXzJNNFVCXCIsXG5cdFwic29ydEZvcm1cIjogXCJib2R5X3NvcnRGb3JtX18xOVNTd1wiLFxuXHRcIk11aVNlbGVjdC1zZWxlY3RcIjogXCJib2R5X011aVNlbGVjdC1zZWxlY3RfX0hhbHhJXCIsXG5cdFwiTXVpU2VsZWN0LWljb25cIjogXCJib2R5X011aVNlbGVjdC1pY29uX19WRzhtNVwiLFxuXHRcIk11aUlucHV0LXVuZGVybGluZVwiOiBcImJvZHlfTXVpSW5wdXQtdW5kZXJsaW5lX18xZ1JFMlwiLFxuXHRcImdlbnJlc0ZpbHRlclwiOiBcImJvZHlfZ2VucmVzRmlsdGVyX18xazJMcVwiLFxuXHRcIml0ZW1cIjogXCJib2R5X2l0ZW1fXzFzRDFDXCIsXG5cdFwiYWN0aXZlXCI6IFwiYm9keV9hY3RpdmVfX3IwcXR1XCIsXG5cdFwibW92aWVzLWNvdW50ZXJcIjogXCJib2R5X21vdmllcy1jb3VudGVyX194ZTR3bVwiLFxuXHRcIm5vTW92aWVzXCI6IFwiYm9keV9ub01vdmllc19fMlQxUDVcIlxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGxvYWRNb3ZpZXMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL21vdmllcyc7XG5cbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgbW92aWVzOiBzdGF0ZS5tb3ZpZXMgfSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZE1vdmllcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJvZHkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBEZWxldGVNb3ZpZURpYWxvZyA9ICh7IG9wZW4sIG1vdmllSWQsIG9uQ2xvc2UsIG9uRGVsZXRlIH0pID0+IHtcbiAgY29uc3Qgb25DbG9zZURlbGV0ZURpYWxvZyA9ICgpID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICBkaXNhYmxlQmFja2Ryb3BDbGlja1xuICAgICAgZGlzYWJsZUVzY2FwZUtleURvd25cbiAgICAgIG9wZW49e29wZW59XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlRGVsZXRlRGlhbG9nfVxuICAgICAgbWF4V2lkdGg9XCJsZ1wiXG4gICAgPlxuICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNsb3NlXCIgb25DbGljaz17b25DbG9zZURlbGV0ZURpYWxvZ30+XG4gICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPkRlbGV0ZSBNb3ZpZTwvRGlhbG9nVGl0bGU+XG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJkaWFsb2ctZm9ybS1jb250ZW50XCI+XG4gICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBtb3ZpZT9cbiAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKG1vdmllSWQpfSBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICBDb25maXJtXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgIDwvRGlhbG9nPlxuICApO1xufTtcblxuRGVsZXRlTW92aWVEaWFsb2cucHJvcFR5cGVzID0ge1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbW92aWVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlTW92aWVEaWFsb2c7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vbW92aWVDYXJkJztcblxuY29uc3QgTW92aWVMaXN0ID0gKHsgbW92aWVzIH0pID0+IChcbiAgPHVsIGNsYXNzTmFtZT1cIm1vdmllTGlzdFwiPlxuICAgIHttb3ZpZXM/Lm1hcCgobW92aWUpID0+IChcbiAgICAgIDxNb3ZpZUNhcmQga2V5PXttb3ZpZT8uaWR9IG1vdmllPXttb3ZpZX0gLz5cbiAgICApKX1cbiAgPC91bD5cbik7XG5cbk1vdmllTGlzdC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pLFxuICApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IHsgRmllbGQsIEZvcm0sIEZvcm1pa1Byb3ZpZGVyLCBFcnJvck1lc3NhZ2UsIHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZW5yZXNBcnJheSwgdmFsaWRhdGlvblNjaGVtYSwgTU9WSUVfRklFTERTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgVXBkYXRlTW92aWVEaWFsb2cgPSAoeyBtb3ZpZSwgb3Blbiwgb25VcGRhdGUsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbZ2VucmVzLCBzZXRHZW5yZXNdID0gdXNlU3RhdGUobW92aWU/LmdlbnJlcyB8fCBbXSk7XG4gIGNvbnN0IG9uQ2xvc2VFZGl0RGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUdlbnJlcyA9ICh2YWx1ZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIHNldEdlbnJlcyh2YWx1ZSk7XG4gICAgc2V0RmllbGRWYWx1ZSgnZ2VucmVzJywgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgaWQ6IG1vdmllPy5pZCxcbiAgICAgIHRpdGxlOiBtb3ZpZT8udGl0bGUsXG4gICAgICByZWxlYXNlX2RhdGU6IG1vdmllPy5yZWxlYXNlX2RhdGUsXG4gICAgICBwb3N0ZXJfcGF0aDogbW92aWU/LnBvc3Rlcl9wYXRoLFxuICAgICAgb3ZlcnZpZXc6IG1vdmllPy5vdmVydmlldyxcbiAgICAgIHJ1bnRpbWU6IG1vdmllPy5ydW50aW1lLFxuICAgICAgZ2VucmVzLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIG9uU3VibWl0OiAoZmllbGRzKSA9PiB7XG4gICAgICBvblVwZGF0ZShmaWVsZHMpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1Byb3ZpZGVyIHZhbHVlPXtmb3JtaWt9PlxuICAgICAgPERpYWxvZyBkaXNhYmxlRXNjYXBlS2V5RG93biBvcGVuPXtvcGVufSBvbkNsb3NlPXtvbkNsb3NlRWRpdERpYWxvZ30+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VFZGl0RGlhbG9nfT5cbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlPkVkaXQgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cImRpYWxvZy1mb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPk1vdmllIElEPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgIHttb3ZpZT8uaWR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5UaXRsZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5SZWxlYXNlIERhdGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX1cbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SRUxFQVNFX0RBVEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5Nb3ZpZSBVUkw8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+R2VucmU8L3A+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLkdFTlJFU31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtnZW5yZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VHZW5yZXMoZXZlbnQudGFyZ2V0LnZhbHVlLCBmb3JtaWsuc2V0RmllbGRWYWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzQXJyYXkubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2dlbnJlfSB2YWx1ZT17Z2VucmV9PlxuICAgICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5PdmVydmlldzwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZW1wdHkgdGV4dGFyZWFcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5PVkVSVklFV31cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPlJ1bnRpbWU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SVU5USU1FfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZUVkaXREaWFsb2d9IGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvRm9ybWlrUHJvdmlkZXI+XG4gICk7XG59O1xuXG5VcGRhdGVNb3ZpZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwb3N0ZXJfcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KS5pc1JlcXVpcmVkLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvblVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZU1vdmllRGlhbG9nO1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgRGVsZXRlTW92aWVEaWFsb2cgZnJvbSAnLi4vRGVsZXRlTW92aWVEaWFsb2cnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9tb3ZpZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFVwZGF0ZU1vdmllRGlhbG9nIGZyb20gJy4uL1VwZGF0ZU1vdmllRGlhbG9nJztcblxuY29uc3QgTW92aWVDYXJkID0gKHsgbW92aWUsIHVwZGF0ZU1vdmllLCBkZWxldGVNb3ZpZSB9KSA9PiB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtvcGVuRGVsZXRlLCBzZXRPcGVuRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wZW5FZGl0LCBzZXRPcGVuRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHNldEFuY2hvckVsKGUuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgY29uc3Qgb25FZGl0TWVudUl0ZW1DbGljayA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpO1xuICAgIHNldE9wZW5FZGl0KHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlTWVudUl0ZW1DbGljayA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpO1xuICAgIHNldE9wZW5EZWxldGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGVNb3ZpZSA9IChtb3ZpZUlkKSA9PiB7XG4gICAgZGVsZXRlTW92aWUobW92aWVJZCk7XG4gICAgc2V0T3BlbkRlbGV0ZShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgb25VcGRhdGVNb3ZpZSA9IChtKSA9PiB7XG4gICAgdXBkYXRlTW92aWUobSk7XG4gICAgc2V0T3BlbkVkaXQoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1vdmllQ2FyZFwiPlxuICAgICAgPExpbmsgdG89e2AvbW92aWVzLyR7bW92aWU/LmlkfWB9PlxuICAgICAgICA8aW1nIHNyYz17bW92aWU/LnBvc3Rlcl9wYXRofSBhbHQ9XCJcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZUluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvRmlyc3RSb3dcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnttb3ZpZT8udGl0bGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vdmllUmVsZWFzZVllYXJcIj57bW92aWU/LnJlbGVhc2VfZGF0ZT8uc3BsaXQoJy0nKVswXX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJnZW5yZVwiPnttb3ZpZT8uZ2VucmVzPy5qb2luKCcsICcpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwiY2FyZC1tZW51LWljb25cIiBhcmlhLWNvbnRyb2xzPVwic2ltcGxlLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPE1lbnUgaWQ9XCJzaW1wbGUtbWVudVwiIGFuY2hvckVsPXthbmNob3JFbH0ga2VlcE1vdW50ZWQgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e29uRWRpdE1lbnVJdGVtQ2xpY2t9IGNsYXNzTmFtZT1cImNhcmQtbWVudS1pdGVtXCI+XG4gICAgICAgICAgZWRpdFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17b25EZWxldGVNZW51SXRlbUNsaWNrfSBjbGFzc05hbWU9XCJjYXJkLW1lbnUtaXRlbVwiPlxuICAgICAgICAgIGRlbGV0ZVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8VXBkYXRlTW92aWVEaWFsb2cgb3Blbj17b3BlbkVkaXR9IG1vdmllPXttb3ZpZX0gb25VcGRhdGU9e29uVXBkYXRlTW92aWV9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5FZGl0KGZhbHNlKX0gLz5cbiAgICAgICAgPERlbGV0ZU1vdmllRGlhbG9nXG4gICAgICAgICAgb3Blbj17b3BlbkRlbGV0ZX1cbiAgICAgICAgICBtb3ZpZUlkPXttb3ZpZT8uaWR9XG4gICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlTW92aWV9XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbkRlbGV0ZShmYWxzZSl9XG4gICAgICAgIC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbk1vdmllQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwb3N0ZXJfcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZU1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZWxldGVNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGRlbGV0ZU1vdmllLCB1cGRhdGVNb3ZpZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvbW92aWVzJztcblxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCc7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgdXBkYXRlTW92aWUsXG4gIGRlbGV0ZU1vdmllLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vdmllQ2FyZCk7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb3ZpZUxpc3RcIjogXCJtb3ZpZXNfbW92aWVMaXN0X18yamtwZ1wiLFxuXHRcIm1vdmllQ2FyZFwiOiBcIm1vdmllc19tb3ZpZUNhcmRfXzFnZVBGXCIsXG5cdFwiY2FyZE1lbnVJY29uXCI6IFwibW92aWVzX2NhcmRNZW51SWNvbl9fMlJvTmJcIixcblx0XCJtb3ZpZUluZm9cIjogXCJtb3ZpZXNfbW92aWVJbmZvX18xck4xd1wiLFxuXHRcInRpdGxlXCI6IFwibW92aWVzX3RpdGxlX184c29Bc1wiLFxuXHRcImluZm9GaXJzdFJvd1wiOiBcIm1vdmllc19pbmZvRmlyc3RSb3dfXzNtWF9FXCIsXG5cdFwibW92aWVSZWxlYXNlWWVhclwiOiBcIm1vdmllc19tb3ZpZVJlbGVhc2VZZWFyX18zTXhTb1wiLFxuXHRcImdlbnJlXCI6IFwibW92aWVzX2dlbnJlX18yeTR2cFwiLFxuXHRcIk11aVBhcGVyLXJvb3RcIjogXCJtb3ZpZXNfTXVpUGFwZXItcm9vdF9fMUFRbG1cIixcblx0XCJNdWlNZW51LXBhcGVyXCI6IFwibW92aWVzX011aU1lbnUtcGFwZXJfX29oaHh1XCIsXG5cdFwiTXVpUG9wb3Zlci1wYXBlclwiOiBcIm1vdmllc19NdWlQb3BvdmVyLXBhcGVyX18yWnUwTVwiLFxuXHRcIk11aUJ1dHRvbkJhc2Utcm9vdFwiOiBcIm1vdmllc19NdWlCdXR0b25CYXNlLXJvb3RfX1puTi0zXCIsXG5cdFwiTXVpTGlzdEl0ZW0tcm9vdFwiOiBcIm1vdmllc19NdWlMaXN0SXRlbS1yb290X18zektKcFwiLFxuXHRcIk11aU1lbnVJdGVtLXJvb3RcIjogXCJtb3ZpZXNfTXVpTWVudUl0ZW0tcm9vdF9fMXEzRTRcIixcblx0XCJjYXJkLW1lbnUtaXRlbVwiOiBcIm1vdmllc19jYXJkLW1lbnUtaXRlbV9fM251V2lcIixcblx0XCJNdWlEaWFsb2ctcGFwZXJcIjogXCJtb3ZpZXNfTXVpRGlhbG9nLXBhcGVyX19zdlBlUVwiLFxuXHRcIk11aUlucHV0LXVuZGVybGluZVwiOiBcIm1vdmllc19NdWlJbnB1dC11bmRlcmxpbmVfXzF3T1U4XCIsXG5cdFwiZGlhbG9nLWZvcm0tY29udGVudFwiOiBcIm1vdmllc19kaWFsb2ctZm9ybS1jb250ZW50X18xaUtmNlwiLFxuXHRcImVkaXQtZmllbGQtbmFtZVwiOiBcIm1vdmllc19lZGl0LWZpZWxkLW5hbWVfXzJtVDJsXCIsXG5cdFwiZWRpdC1maWVsZFwiOiBcIm1vdmllc19lZGl0LWZpZWxkX18yRGlNT1wiLFxuXHRcIk11aVNlbGVjdC1pY29uXCI6IFwibW92aWVzX011aVNlbGVjdC1pY29uX191WEpWbVwiLFxuXHRcImVycm9yXCI6IFwibW92aWVzX2Vycm9yX18xNldCa1wiLFxuXHRcIk11aUljb25CdXR0b24tcm9vdFwiOiBcIm1vdmllc19NdWlJY29uQnV0dG9uLXJvb3RfXzIzQ0NHXCIsXG5cdFwiTXVpVHlwb2dyYXBoeS1oNlwiOiBcIm1vdmllc19NdWlUeXBvZ3JhcGh5LWg2X19JVk9JNVwiLFxuXHRcIk11aVR5cG9ncmFwaHktY29sb3JUZXh0U2Vjb25kYXJ5XCI6IFwibW92aWVzX011aVR5cG9ncmFwaHktY29sb3JUZXh0U2Vjb25kYXJ5X18xVkwxUlwiLFxuXHRcIk11aURpYWxvZ0FjdGlvbnMtc3BhY2luZ1wiOiBcIm1vdmllc19NdWlEaWFsb2dBY3Rpb25zLXNwYWNpbmdfXzF1MFVxXCIsXG5cdFwiTXVpQnV0dG9uLXRleHRQcmltYXJ5XCI6IFwibW92aWVzX011aUJ1dHRvbi10ZXh0UHJpbWFyeV9fSjVSeVBcIixcblx0XCJNdWlCdXR0b24tdGV4dFNlY29uZGFyeVwiOiBcIm1vdmllc19NdWlCdXR0b24tdGV4dFNlY29uZGFyeV9fMm1nVklcIlxufTtcbiIsImltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xuXG5leHBvcnQgY29uc3QgTU9WSUVfRklFTERTID0ge1xuICBUSVRMRTogJ3RpdGxlJyxcbiAgUkVMRUFTRV9EQVRFOiAncmVsZWFzZV9kYXRlJyxcbiAgUE9TVEVSX1BBVEg6ICdwb3N0ZXJfcGF0aCcsXG4gIEdFTlJFUzogJ2dlbnJlcycsXG4gIE9WRVJWSUVXOiAnb3ZlcnZpZXcnLFxuICBSVU5USU1FOiAncnVudGltZScsXG59O1xuXG5leHBvcnQgY29uc3QgZ2VucmVzQXJyYXkgPSBbXG4gICdBY3Rpb24nLFxuICAnQWR2ZW50dXJlJyxcbiAgJ0FuaW1hdGlvbicsXG4gICdDb21lZHknLFxuICAnRHJhbWEnLFxuICAnRmFtaWx5JyxcbiAgJ0ZhbnRhc3knLFxuICAnU2NpZW5jZSBGaWN0aW9uJyxcbl07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCh7XG4gIHRpdGxlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ1RpdGxlIGlzIHJlcXVpcmVkJyksXG4gIHBvc3Rlcl9wYXRoOiB5dXAuc3RyaW5nKCkudXJsKCkucmVxdWlyZWQoJ1Bvc3RlciB1cmwgaXMgcmVxdWlyZWQnKSxcbiAgcmVsZWFzZV9kYXRlOiB5dXAuc3RyaW5nKCksXG4gIG92ZXJ2aWV3OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ092ZXJ2aWV3IGlzIHJlcXVpcmVkJyksXG4gIHJ1bnRpbWU6IHl1cC5udW1iZXIoKS5yZXF1aXJlZCgnUnVudGltZSBpcyByZXF1aXJlZCcpLFxuICBnZW5yZXM6IHl1cC5hcnJheSgpLm1pbigxKS5yZXF1aXJlZCgnTWluaW11bSBvbmUgZ2VucmUgc2hvdWxkIGJlIHNlbGVjdGVkJyksXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoKSB7XG4gICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKCkge31cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgIHJldHVybiA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmcgKDwvaDE+O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9Gb290ZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXJyb3IubW9kdWxlLnNjc3MnO1xuXG48SW1hZ2Ugc3JjPVwiL3B1YmxpYy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJsb2dvLWZvb3RlclwiIC8+O1xuXG5jb25zdCBQYWdlTm90Rm91bmQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5lcnJvclBhZ2V9IGZpeGVkPlxuICAgICAgPEltYWdlIHNyYz1cIi9wdWJsaWMvaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCI1MFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yQ29udGVudH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5QYWdlIE5vdCBGb3VuZDwvcD5cbiAgICAgICAgPExpbmsgdG89XCIvbW92aWVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZUxpbmt9IHRpdGxlPVwibGlua1RvSG9tZVwiPlxuICAgICAgICAgIEdvIEJhY2sgVG8gSG9tZVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Rm9vdGVyIC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdEZvdW5kO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXJyb3JQYWdlXCI6IFwiZXJyb3JfZXJyb3JQYWdlX18zQVd5b1wiLFxuXHRcImxvZ29cIjogXCJlcnJvcl9sb2dvX19tSXowbVwiLFxuXHRcImVycm9yQ29udGVudFwiOiBcImVycm9yX2Vycm9yQ29udGVudF9fMXY2RmtcIixcblx0XCJlcnJvclwiOiBcImVycm9yX2Vycm9yX18ydXBPalwiLFxuXHRcImhvbWVMaW5rXCI6IFwiZXJyb3JfaG9tZUxpbmtfXzNvV0czXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfSBmaXhlZD5cbiAgICA8SW1hZ2Ugc3JjPVwiL3B1YmxpYy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvRm9vdGVyfSB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjUwXCIgLz5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJfZm9vdGVyX18yal9GclwiLFxuXHRcImxvZ29Gb290ZXJcIjogXCJmb290ZXJfbG9nb0Zvb3Rlcl9fMmpLOGVcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrUHJvdmlkZXIsIEVycm9yTWVzc2FnZSwgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdlbnJlc0FycmF5LCB2YWxpZGF0aW9uU2NoZW1hLCBNT1ZJRV9GSUVMRFMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBBZGRNb3ZpZURpYWxvZyA9ICh7IG9wZW4sIG9uQWRkLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBvbkNsb3NlQWRkRGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUdlbnJlcyA9ICh2YWx1ZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIHNldEdlbnJlcyh2YWx1ZSk7XG4gICAgc2V0RmllbGRWYWx1ZSgnZ2VucmVzJywgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgcmVsZWFzZV9kYXRlOiAnJyxcbiAgICAgIHBvc3Rlcl9wYXRoOiAnJyxcbiAgICAgIGdlbnJlcyxcbiAgICAgIG92ZXJ2aWV3OiAnJyxcbiAgICAgIHJ1bnRpbWU6ICcnLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XG4gICAgICBvbkFkZCh2YWx1ZXMpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1Byb3ZpZGVyIHZhbHVlPXtmb3JtaWt9PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBkaXNhYmxlQmFja2Ryb3BDbGlja1xuICAgICAgICBkaXNhYmxlRXNjYXBlS2V5RG93blxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlQWRkRGlhbG9nfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlQWRkRGlhbG9nfT5cbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEZvcm0gdGl0bGU9XCJhZGQtbW92aWVcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+QWRkIE1vdmllPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJkaWFsb2ctZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5UaXRsZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3ZpZSBUaXRsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5SZWxlYXNlIERhdGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUkVMRUFTRV9EQVRFfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBEYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicmVsZWFzZV9kYXRlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJyZWxlYXNlX2RhdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPk1vdmllIFVSTDwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3ZpZSBVUkwgaGVyZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInBvc3Rlcl9wYXRoXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJwb3N0ZXJfcGF0aFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUE9TVEVSX1BBVEh9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5HZW5yZTwvcD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2dlbnJlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUdlbnJlcyhldmVudC50YXJnZXQudmFsdWUsIGZvcm1pay5zZXRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgIHRpdGxlPVwiZ2VucmVzXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJnZW5yZXNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzQXJyYXkubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2dlbnJlfSB2YWx1ZT17Z2VucmV9PlxuICAgICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5PdmVydmlldzwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk92ZXJ2aWV3IEhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJvdmVydmlld1wiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwib3ZlcnZpZXdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+UnVudGltZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUnVudGltZSBIZXJlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicnVudGltZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwicnVudGltZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2VBZGREaWFsb2d9XG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJyZXNldFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwic3VibWl0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvRm9ybWlrUHJvdmlkZXI+XG4gICk7XG59O1xuXG5BZGRNb3ZpZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQWRkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTW92aWVEaWFsb2c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQWRkTW92aWVEaWFsb2cgZnJvbSAnLi9BZGRNb3ZpZURpYWxvZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBNb3ZpZURldGFpbHMgZnJvbSAnLi9tb3ZpZURldGFpbHMnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL3NlYXJjaEJhci9TZWFyY2hCYXInO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBhZGRNb3ZpZSB9KSA9PiB7XG4gIGNvbnN0IFtvcGVuQWRkLCBzZXRPcGVuQWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBvbkFkZE1vdmllQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0T3BlbkFkZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkFkZE1vdmllID0gKG1vdmllKSA9PiB7XG4gICAgYWRkTW92aWUobW92aWUpO1xuICAgIHNldE9wZW5BZGQoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IGZpeGVkPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbW92aWVzLzptb3ZpZUlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJ9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9wdWJsaWMvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0Zvb3Rlcn0gd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCI1MFwiIC8+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goJy8nKX0+XG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIGZvbnRTaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxNb3ZpZURldGFpbHMgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJ9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9wdWJsaWMvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0Zvb3Rlcn0gd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCI1MFwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGlkPVwiYnV0dG9uLWFkZC1tb3ZpZVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtvbkFkZE1vdmllQ2xpY2t9PlxuICAgICAgICAgICAgICArIEFkZCBNb3ZpZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QWRkTW92aWVEaWFsb2cgb3Blbj17b3BlbkFkZH0gb25BZGQ9e29uQWRkTW92aWV9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5BZGQoZmFsc2UpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgYWRkTW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18ycExpWFwiLFxuXHRcInN1YmhlYWRlclwiOiBcImhlYWRlcl9zdWJoZWFkZXJfXzVXdzYxXCIsXG5cdFwibG9nb1wiOiBcImhlYWRlcl9sb2dvX18yNGZ3RFwiLFxuXHRcImJ1dHRvbi1hZGQtbW92aWVcIjogXCJoZWFkZXJfYnV0dG9uLWFkZC1tb3ZpZV9fMjhjNVpcIixcblx0XCJNdWlJY29uQnV0dG9uLXJvb3RcIjogXCJoZWFkZXJfTXVpSWNvbkJ1dHRvbi1yb290X19NYUU1c1wiXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgYWRkTW92aWUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL21vdmllcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGFkZE1vdmllLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWRlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVEZXRhaWxzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVEZXRhaWxzID0gKHsgbW92aWUsIGdldE1vdmllIH0pID0+IHtcbiAgY29uc3QgeyBtb3ZpZUlkIH0gPSB1c2VQYXJhbXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1vdmllKE51bWJlcihtb3ZpZUlkKSk7XG4gIH0sIFttb3ZpZUlkLCBnZXRNb3ZpZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1kZXRhaWxzXCI+XG4gICAgICA8aW1nIHNyYz17bW92aWU/LnBvc3Rlcl9wYXRofSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJwb3N0ZXJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3Qtcm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e21vdmllPy50aXRsZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+e21vdmllPy52b3RlX2F2ZXJhZ2V9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ2xpbmVcIj57bW92aWU/LnRhZ2xpbmV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpcmQtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxlYXNlLWRhdGVcIj57bW92aWU/LnJlbGVhc2VfZGF0ZT8uc3BsaXQoJy0nKVswXX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bnRpbWVcIj57bW92aWU/LnJ1bnRpbWV9IG1pbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlld1wiPnttb3ZpZT8ub3ZlcnZpZXd9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllRGV0YWlscy5kZWZhdWx0UHJvcHMgPSB7XG4gIG1vdmllOiBudWxsLFxufTtcblxuTW92aWVEZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGdldE1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVEZXRhaWxzO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0TW92aWUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2hlYWRlcic7XG5cbmltcG9ydCBNb3ZpZURldGFpbHMgZnJvbSAnLi9Nb3ZpZURldGFpbHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7IG1vdmllOiBzdGF0ZS5tb3ZpZSB9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRNb3ZpZSxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb3ZpZURldGFpbHMpO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW92aWUtZGV0YWlsc1wiOiBcIm1vdmllRGV0YWlsc19tb3ZpZS1kZXRhaWxzX183Z3NOYlwiLFxuXHRcInBvc3RlclwiOiBcIm1vdmllRGV0YWlsc19wb3N0ZXJfXzFFZFZuXCIsXG5cdFwiaW5mb1wiOiBcIm1vdmllRGV0YWlsc19pbmZvX18yelBkOVwiLFxuXHRcImZpcnN0LXJvd1wiOiBcIm1vdmllRGV0YWlsc19maXJzdC1yb3dfX3VpMmZ4XCIsXG5cdFwidGl0bGVcIjogXCJtb3ZpZURldGFpbHNfdGl0bGVfX09ocC1qXCIsXG5cdFwicmF0aW5nXCI6IFwibW92aWVEZXRhaWxzX3JhdGluZ19fa0pxbEtcIixcblx0XCJ0aGlyZC1yb3dcIjogXCJtb3ZpZURldGFpbHNfdGhpcmQtcm93X18ySUt5ZlwiLFxuXHRcInJlbGVhc2UtZGF0ZVwiOiBcIm1vdmllRGV0YWlsc19yZWxlYXNlLWRhdGVfXzI5M2NzXCIsXG5cdFwicnVudGltZVwiOiBcIm1vdmllRGV0YWlsc19ydW50aW1lX18zZWJfZVwiLFxuXHRcImRhcmtcIjogXCJtb3ZpZURldGFpbHNfZGFya19fdUZkTUZcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2VhcmNoQmFyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgU2VhcmNoQmFyID0gKCkgPT4ge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGNvbnN0IG9uU2VhcmNoTW92aWVzID0gKHF1ZXJ5KSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKGAvbW92aWVzP3NlYXJjaD0ke3F1ZXJ5fWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCYXJ9PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PmZpbmQgeW91ciBtb3ZpZTwvcD5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9eyhmaWVsZHMpID0+IHtcbiAgICAgICAgICBvblNlYXJjaE1vdmllcyhmaWVsZHMucXVlcnkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8RmllbGQgdHlwZT1cInNlYXJjaFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIGlkPVwic2VhcmNoLWlucHV0XCIgbmFtZT1cInF1ZXJ5XCIgLz5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hCYXJcIjogXCJzZWFyY2hCYXJfc2VhcmNoQmFyX18xTUNhN1wiLFxuXHRcInRpdGxlXCI6IFwic2VhcmNoQmFyX3RpdGxlX18yRS04SVwiLFxuXHRcInNlYXJjaC1pbnB1dFwiOiBcInNlYXJjaEJhcl9zZWFyY2gtaW5wdXRfXzJvNWZiXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbmxheW91dH0+e2NoaWxkcmVufTwvZGl2PjtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWlubGF5b3V0XCI6IFwibGF5b3V0X21haW5sYXlvdXRfXzF1T0t2XCJcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VTZXNzaW9uU3RvcmFnZSA9IChzdG9yYWdlS2V5KSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocHJvY2Vzcy5icm93c2VyID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSA6IG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIHZhbHVlKTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgc3RvcmFnZUtleV0pO1xuXG4gIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlc3Npb25TdG9yYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlLCBTdGF0aWNSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLy8gaW1wb3J0ICcuLi9jb21wb25lbnRzL2Vycm9yL2Vycm9yLnNjc3MnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9ib2R5JztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxSb3V0ZXI+XG4gICAgPExheW91dD5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BhZ2Vub3Rmb3VuZFwiPlxuICAgICAgICAgIDxQYWdlTm90Rm91bmQgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8Qm9keSAvPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L0xheW91dD5cbiAgPC9Sb3V0ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJjbGFzcyBNb3ZpZXNTZXJ2aWNlIHtcbiAgYXBpVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9tb3ZpZXMvJztcblxuICBmZXRjaE1vdmllcyA9IChmaWx0ZXIsIHNvcnQsIHF1ZXJ5KSA9PlxuICAgIGZldGNoKHRoaXMuYnVpbGRVcmwoZmlsdGVyLCBzb3J0LCBxdWVyeSkpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgZ2V0TW92aWVCeUlkID0gKG1vdmllSWQpID0+XG4gICAgZmV0Y2godGhpcy5hcGlVUkwgKyBtb3ZpZUlkKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGFkZE1vdmllID0gKG1vdmllKSA9PlxuICAgIGZldGNoKHRoaXMuYXBpVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtb3ZpZSksXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICB1cGRhdGVNb3ZpZSA9IChtb3ZpZSkgPT5cbiAgICBmZXRjaCh0aGlzLmFwaVVSTCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtb3ZpZSksXG4gICAgfSk7XG5cbiAgZGVsZXRlTW92aWUgPSAoaWQpID0+IGZldGNoKHRoaXMuYXBpVVJMICsgaWQsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcblxuICBidWlsZFVybCA9IChmaWx0ZXIsIHNvcnQsIHF1ZXJ5KSA9PiB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuYXBpVVJMfT9zb3J0Qnk9JHtzb3J0fSZzb3J0T3JkZXI9ZGVzY2A7XG4gICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIgIT09ICdBbGwnKSB7XG4gICAgICB1cmwgKz0gYD9maWx0ZXI9JHtmaWx0ZXJ9YDtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICB1cmwgKz0gYCZzZWFyY2g9JHtxdWVyeX0mc2VhcmNoQnk9dGl0bGVgO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTW92aWVzU2VydmljZSgpO1xuIiwiaW1wb3J0IHtcbiAgR0VUX01PVklFX0JZX0lELFxuICBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyxcbiAgR0VUX01PVklFX0JZX0lEX0ZBSUwsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWUgPSAobW92aWVJZCkgPT4gKHtcbiAgdHlwZTogR0VUX01PVklFX0JZX0lELFxuICBtb3ZpZUlkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZVN1Y2Nlc3MgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IEdFVF9NT1ZJRV9CWV9JRF9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG4iLCJpbXBvcnQge1xuICBMT0FEX01PVklFUyxcbiAgQUREX01PVklFLFxuICBVUERBVEVfTU9WSUUsXG4gIERFTEVURV9NT1ZJRSxcbiAgTE9BRF9NT1ZJRVNfU1VDQ0NFU1MsXG4gIExPQURfTU9WSUVTX0ZBSUwsXG4gIEFERF9NT1ZJRV9TVUNDRVNTLFxuICBBRERfTU9WSUVfRkFJTCxcbiAgVVBEQVRFX01PVklFX1NVQ0NFU1MsXG4gIFVQREFURV9NT1ZJRV9GQUlMLFxuICBERUxFVEVfTU9WSUVfU1VDQ0VTUyxcbiAgREVMRVRFX01PVklFX0ZBSUwsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbG9hZE1vdmllcyA9IChmaWx0ZXIsIHNvcnQsIHF1ZXJ5KSA9PiAoe1xuICB0eXBlOiBMT0FEX01PVklFUyxcbiAgZmlsdGVyLFxuICBzb3J0LFxuICBxdWVyeSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9hZE1vdmllc1N1Y2Nlc3MgPSAobW92aWVzKSA9PiAoe1xuICB0eXBlOiBMT0FEX01PVklFU19TVUNDQ0VTUyxcbiAgbW92aWVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkTW92aWVzRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBMT0FEX01PVklFU19GQUlMLFxuICBtZXNzYWdlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRNb3ZpZSA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogQUREX01PVklFLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkTW92aWVTdWNjZXNzID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBBRERfTU9WSUVfU1VDQ0VTUyxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBBRERfTU9WSUVfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWUgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IFVQREFURV9NT1ZJRSxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllU3VjY2VzcyA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX01PVklFX1NVQ0NFU1MsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX01PVklFX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllID0gKGlkKSA9PiAoe1xuICB0eXBlOiBERUxFVEVfTU9WSUUsXG4gIGlkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZVN1Y2Nlc3MgPSAoaWQpID0+ICh7XG4gIHR5cGU6IERFTEVURV9NT1ZJRV9TVUNDRVNTLFxuICBpZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IERFTEVURV9NT1ZJRV9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG4iLCJleHBvcnQgY29uc3QgTE9BRF9NT1ZJRVMgPSAnTE9BRF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IExPQURfTU9WSUVTX1NVQ0NDRVNTID0gJ0xPQURfTU9WSUVTX1NVQ0NDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX01PVklFU19GQUlMID0gJ0xPQURfTU9WSUVTX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRSA9ICdBRERfTU9WSUUnO1xuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRV9TVUNDRVNTID0gJ0FERF9NT1ZJRV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfTU9WSUVfRkFJTCA9ICdBRERfTU9WSUVfRkFJTCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFID0gJ1VQREFURV9NT1ZJRSc7XG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFX1NVQ0NFU1MgPSAnVVBEQVRFX01PVklFX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9NT1ZJRV9GQUlMID0gJ1VQREFURV9NT1ZJRV9GQUlMJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9WSUUgPSAnREVMRVRFX01PVklFJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9WSUVfU1VDQ0VTUyA9ICdERUxFVEVfTU9WSUVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFX0ZBSUwgPSAnREVMRVRFX01PVklFX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9CWV9JRCA9ICdHRVRfTU9WSUVfQllfSUQnO1xuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTID0gJ0dFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfQllfSURfRkFJTCA9ICdHRVRfTU9WSUVfQllfSURfRkFJTCc7XG4iLCJpbXBvcnQge1xuICBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyxcbiAgR0VUX01PVklFX0JZX0lEX0ZBSUwsXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBoZWFkZXJSZWR1Y2VyID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5tb3ZpZTtcbiAgICBjYXNlIEdFVF9NT1ZJRV9CWV9JRF9GQUlMOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlclJlZHVjZXI7XG4iLCJpbXBvcnQge1xuICBMT0FEX01PVklFU19TVUNDQ0VTUyxcbiAgQUREX01PVklFX1NVQ0NFU1MsXG4gIFVQREFURV9NT1ZJRV9GQUlMLFxuICBERUxFVEVfTU9WSUVfRkFJTCxcbiAgTE9BRF9NT1ZJRVNfRkFJTCxcbiAgQUREX01PVklFX0ZBSUwsXG4gIFVQREFURV9NT1ZJRV9TVUNDRVNTLFxuICBERUxFVEVfTU9WSUVfU1VDQ0VTUyxcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IG1vdmllc1JlZHVjZXIgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPQURfTU9WSUVTX1NVQ0NDRVNTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5tb3ZpZXM7XG4gICAgY2FzZSBBRERfTU9WSUVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5tb3ZpZV07XG4gICAgY2FzZSBVUERBVEVfTU9WSUVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoKG1vdmllKSA9PiB7XG4gICAgICAgIGlmIChtb3ZpZS5pZCA9PT0gYWN0aW9uLm1vdmllLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmFjdGlvbi5tb3ZpZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZpZTtcbiAgICAgIH0pO1xuICAgIGNhc2UgREVMRVRFX01PVklFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLmZpbHRlcigobW92aWUpID0+IG1vdmllLmlkICE9PSBhY3Rpb24uaWQpXTtcbiAgICBjYXNlIExPQURfTU9WSUVTX0ZBSUw6XG4gICAgY2FzZSBBRERfTU9WSUVfRkFJTDpcbiAgICBjYXNlIFVQREFURV9NT1ZJRV9GQUlMOlxuICAgIGNhc2UgREVMRVRFX01PVklFX0ZBSUw6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92aWVzUmVkdWNlcjtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcblxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgTW92aWVzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9Nb3ZpZXNTZXJ2aWNlJztcblxuaW1wb3J0IHsgZ2V0TW92aWVTdWNjZXNzLCBnZXRNb3ZpZUZhaWwgfSBmcm9tICcuL2FjdGlvbnMvaGVhZGVyJztcbmltcG9ydCB7XG4gIGxvYWRNb3ZpZXNTdWNjZXNzLFxuICBsb2FkTW92aWVzRmFpbCxcbiAgYWRkTW92aWVTdWNjZXNzLFxuICBhZGRNb3ZpZUZhaWwsXG4gIHVwZGF0ZU1vdmllU3VjY2VzcyxcbiAgdXBkYXRlTW92aWVGYWlsLFxuICBkZWxldGVNb3ZpZVN1Y2Nlc3MsXG4gIGRlbGV0ZU1vdmllRmFpbCxcbn0gZnJvbSAnLi9hY3Rpb25zL21vdmllcyc7XG5pbXBvcnQge1xuICBMT0FEX01PVklFUyxcbiAgQUREX01PVklFLFxuICBERUxFVEVfTU9WSUUsXG4gIFVQREFURV9NT1ZJRSxcbiAgR0VUX01PVklFX0JZX0lELFxufSBmcm9tICcuL2FjdGlvbnMvdHlwZXMnO1xuXG5mdW5jdGlvbiogZ2V0QWxsTW92aWVzKHsgZmlsdGVyLCBzb3J0LCBxdWVyeSB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbW92aWVzID0geWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmZldGNoTW92aWVzLCBmaWx0ZXIsIHNvcnQsIHF1ZXJ5KTtcbiAgICB5aWVsZCBwdXQobG9hZE1vdmllc1N1Y2Nlc3MobW92aWVzLmRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChsb2FkTW92aWVzRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZ2V0TW92aWUoeyBtb3ZpZUlkIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb3ZpZSA9IHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5nZXRNb3ZpZUJ5SWQsIG1vdmllSWQpO1xuICAgIHlpZWxkIHB1dChnZXRNb3ZpZVN1Y2Nlc3MobW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChnZXRNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiBhZGRNb3ZpZSh7IG1vdmllIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhZGRlZE1vdmllID0geWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmFkZE1vdmllLCBtb3ZpZSk7XG4gICAgeWllbGQgcHV0KGFkZE1vdmllU3VjY2VzcyhhZGRlZE1vdmllKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoYWRkTW92aWVGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB1cGRhdGVNb3ZpZSh7IG1vdmllIH0pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UudXBkYXRlTW92aWUsIG1vdmllKTtcbiAgICB5aWVsZCBwdXQodXBkYXRlTW92aWVTdWNjZXNzKG1vdmllKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQodXBkYXRlTW92aWVGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBkZWxldGVNb3ZpZSh7IGlkIH0pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuZGVsZXRlTW92aWUsIGlkKTtcbiAgICB5aWVsZCBwdXQoZGVsZXRlTW92aWVTdWNjZXNzKGlkKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoZGVsZXRlTW92aWVGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBtb3ZpZXNTYWdhcygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfTU9WSUVTLCBnZXRBbGxNb3ZpZXMpO1xuICB5aWVsZCB0YWtlRXZlcnkoQUREX01PVklFLCBhZGRNb3ZpZSk7XG4gIHlpZWxkIHRha2VFdmVyeShVUERBVEVfTU9WSUUsIHVwZGF0ZU1vdmllKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KERFTEVURV9NT1ZJRSwgZGVsZXRlTW92aWUpO1xuICB5aWVsZCB0YWtlRXZlcnkoR0VUX01PVklFX0JZX0lELCBnZXRNb3ZpZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmllc1NhZ2FzO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuXG5pbXBvcnQgaGVhZGVyUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2hlYWRlcic7XG5pbXBvcnQgbW92aWVzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL21vdmllcyc7XG5pbXBvcnQgbW92aWVzU2FnYXMgZnJvbSAnLi9zYWdhcyc7XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIGNvbWJpbmVSZWR1Y2Vycyh7IG1vdmllczogbW92aWVzUmVkdWNlciwgbW92aWU6IGhlYWRlclJlZHVjZXIgfSksXG4gIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSlcbik7XG5zYWdhTWlkZGxld2FyZS5ydW4obW92aWVzU2FnYXMpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9