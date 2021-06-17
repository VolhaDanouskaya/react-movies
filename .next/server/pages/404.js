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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/404.js");
/******/ })
/************************************************************************/
/******/ ({

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
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['no-movies']
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
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['genres-filter']
  }, genres.map(function (genre) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      key: genre,
      type: "button",
      onClick: function onClick() {
        onFilterClick(genre);
        setSelected(genre);
      },
      className: _body_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item
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
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['sort-form']
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
	"genres-filter": "body_genres-filter__30olf",
	"item": "body_item__1sD1C",
	"active": "body_active__r0qtu",
	"movies-counter": "body_movies-counter__xe4wm",
	"no-movies": "body_no-movies__3pVGp"
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
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies.module.scss */ "./src/components/body/movieList/movies.module.scss");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_movies_module_scss__WEBPACK_IMPORTED_MODULE_3__);





var MovieList = function MovieList(_ref) {
  var movies = _ref.movies;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['movie-list']
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
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movies.module.scss */ "./src/components/body/movieList/movies.module.scss");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_movies_module_scss__WEBPACK_IMPORTED_MODULE_14__);
















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
    onClose: onCloseEditDialog,
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['.MuiPaper-root.MuiMenu-paper.MuiPopover-paper']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    "aria-label": "close",
    onClick: onCloseEditDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default.a, null, "Edit Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "dialog-form-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field-name']
  }, "Movie ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field-name'],
    style: {
      color: 'white'
    }
  }, movie === null || movie === void 0 ? void 0 : movie.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field-name']
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].TITLE,
    type: "text",
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].TITLE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field-name']
  }, "Release Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RELEASE_DATE,
    type: "date",
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RELEASE_DATE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field-name']
  }, "Movie URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].POSTER_PATH,
    type: "text",
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].POSTER_PATH,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field-name']
  }, "Genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].GENRES,
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field'],
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
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field-name']
  }, "Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    as: "textarea",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].OVERVIEW,
    "aria-label": "empty textarea",
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].OVERVIEW,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field-name']
  }, "Runtime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], {
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].RUNTIME,
    type: "number",
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field']
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
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['movie-card']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/movies/".concat(movie === null || movie === void 0 ? void 0 : movie.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: movie === null || movie === void 0 ? void 0 : movie.poster_path,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['movie-info']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['info-first-row']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.title
  }, movie === null || movie === void 0 ? void 0 : movie.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['movie-release-year']
  }, movie === null || movie === void 0 ? void 0 : (_movie$release_date = movie.release_date) === null || _movie$release_date === void 0 ? void 0 : _movie$release_date.split('-')[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.genre
  }, movie === null || movie === void 0 ? void 0 : (_movie$genres = movie.genres) === null || _movie$genres === void 0 ? void 0 : _movie$genres.join(', '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['card-menu-icon'],
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
	"movie-list": "movies_movie-list__3o-h_",
	"movie-card": "movies_movie-card__pJAjp",
	"card-menu-icon": "movies_card-menu-icon__1QdvN",
	"movie-info": "movies_movie-info__3zr6c",
	"title": "movies_title__8soAs",
	"info-first-row": "movies_info-first-row__3nVxy",
	"movie-release-year": "movies_movie-release-year__26Lc1",
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.module.scss */ "./src/components/error/error.module.scss");
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_error_module_scss__WEBPACK_IMPORTED_MODULE_4__);






var PageNotFound = function PageNotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: _error_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.errorPage,
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/logo.png",
    className: _error_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _error_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.errorContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _error_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.error
  }, "Page Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/movies",
    className: _error_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.homeLink,
    title: "linkToHome"
  }, "Go Back To Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
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
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.module.scss */ "./src/components/footer/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);




var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/logo.png",
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['logo-footer'],
    alt: "logo"
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
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
  var isServer = true;

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/images/logo.png",
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.logo,
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: function onClick() {
      return history.push('/');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "large"
  }))), isServer ? Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])().pathname.includes('movieId') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_movieDetails__WEBPACK_IMPORTED_MODULE_11__["default"], null) : null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_movieDetails__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.subheader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/images/logo.png",
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.logo,
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "contained",
    size: "large",
    onClick: onAddMovieClick,
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['button-add-movie']
  }, "+ Add Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddMovieDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: openAdd,
    onAdd: onAddMovie,
    onClose: function onClose() {
      return setOpenAdd(false);
    }
  })), isServer ? Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])().pathname.includes('movieId') ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], null))));
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
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['movie-details']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: movie === null || movie === void 0 ? void 0 : movie.poster_path,
    alt: "",
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.poster
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['first-row']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title
  }, movie === null || movie === void 0 ? void 0 : movie.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rating
  }, movie === null || movie === void 0 ? void 0 : movie.vote_average)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tagline
  }, movie === null || movie === void 0 ? void 0 : movie.tagline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['third-row']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['release-date']
  }, movie === null || movie === void 0 ? void 0 : (_movie$release_date = movie.release_date) === null || _movie$release_date === void 0 ? void 0 : _movie$release_date.split('-')[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.runtime
  }, movie === null || movie === void 0 ? void 0 : movie.runtime, " min")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.overview
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
    className: _searchBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['search-bar']
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
    id: _searchBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['search-input'],
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
	"search-bar": "searchBar_search-bar__3I7dR",
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
    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['main-layout']
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
	"main-layout": "layout_main-layout__x8smH"
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

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/body */ "./src/components/body/index.js");
/* harmony import */ var _components_error_PageNotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/error/PageNotFound */ "./src/components/error/PageNotFound.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/Layout */ "./src/components/layout/Layout.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");









var isServer = true;

var App = function App() {
  if (isServer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_error_PageNotFound__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/pagenotfound"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_error_PageNotFound__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_body__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null))))));
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib2R5L0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9HZW5yZXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9Nb3ZpZXNTb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9ib2R5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvRGVsZXRlTW92aWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvTW92aWVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L1VwZGF0ZU1vdmllRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllQ2FyZC9Nb3ZpZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvbW92aWVDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvRXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9BZGRNb3ZpZURpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvTW92aWVEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vdmllRGV0YWlscy9tb3ZpZURldGFpbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9zZWFyY2hCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VTZXNzaW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnZW5vdGZvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9Nb3ZpZXNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvbW92aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zYWdhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiQm9keSIsIm1vdmllcyIsImxvYWRNb3ZpZXMiLCJ1c2VTZXNzaW9uU3RvcmFnZSIsImN1cnJlbnRGaWx0ZXIiLCJzZXRDdXJyZW50RmlsdGVyIiwiY3VycmVudFNvcnQiLCJzZXRDdXJyZW50U29ydCIsInNlYXJjaFF1ZXJ5IiwidXNlTG9jYXRpb24iLCJzZWFyY2giLCJxdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsInVzZUVmZmVjdCIsIm9uRmlsdGVyQ2xpY2siLCJnZW5yZSIsIm9uU29ydENoYW5nZSIsInNvcnQiLCJzdHlsZXMiLCJib2R5Iiwic3VibWVudSIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsImlkIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwic3RyaW5nIiwicG9zdGVyX3BhdGgiLCJyZWxlYXNlX2RhdGUiLCJnZW5yZXMiLCJ2b3RlX2F2ZXJhZ2UiLCJ0YWdsaW5lIiwidm90ZV9jb3VudCIsIm92ZXJ2aWV3IiwiYnVkZ2V0IiwicmV2ZW51ZSIsInJ1bnRpbWUiLCJmdW5jIiwiR2VucmVzRmlsdGVyIiwic2VsZWN0ZWRGaWx0ZXIiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJtYXAiLCJpdGVtIiwiTW92aWVzU29ydGVyIiwic2VsZWN0ZWRTb3J0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCIsIkRlbGV0ZU1vdmllRGlhbG9nIiwib3BlbiIsIm1vdmllSWQiLCJvbkNsb3NlIiwib25EZWxldGUiLCJvbkNsb3NlRGVsZXRlRGlhbG9nIiwiYm9vbCIsIk1vdmllTGlzdCIsIm1vdmllIiwiVXBkYXRlTW92aWVEaWFsb2ciLCJvblVwZGF0ZSIsInNldEdlbnJlcyIsIm9uQ2xvc2VFZGl0RGlhbG9nIiwib25DaGFuZ2VHZW5yZXMiLCJzZXRGaWVsZFZhbHVlIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJ2YWx1ZXMiLCJvblN1Ym1pdCIsImZpZWxkcyIsImNvbG9yIiwiTU9WSUVfRklFTERTIiwiVElUTEUiLCJSRUxFQVNFX0RBVEUiLCJQT1NURVJfUEFUSCIsIkdFTlJFUyIsImdlbnJlc0FycmF5IiwiT1ZFUlZJRVciLCJSVU5USU1FIiwidXJsIiwiTW92aWVDYXJkIiwidXBkYXRlTW92aWUiLCJkZWxldGVNb3ZpZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJvcGVuRGVsZXRlIiwic2V0T3BlbkRlbGV0ZSIsIm9wZW5FZGl0Iiwic2V0T3BlbkVkaXQiLCJoYW5kbGVDbGljayIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJvbkVkaXRNZW51SXRlbUNsaWNrIiwib25EZWxldGVNZW51SXRlbUNsaWNrIiwib25EZWxldGVNb3ZpZSIsIm9uVXBkYXRlTW92aWUiLCJtIiwic3BsaXQiLCJqb2luIiwiQm9vbGVhbiIsInl1cCIsInJlcXVpcmVkIiwibWluIiwiRXJyb3JCb3VuZGFyeSIsInByb3BzIiwiaGFzRXJyb3IiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlBhZ2VOb3RGb3VuZCIsImVycm9yUGFnZSIsImxvZ28iLCJlcnJvckNvbnRlbnQiLCJlcnJvciIsImhvbWVMaW5rIiwiRm9vdGVyIiwiZm9vdGVyIiwiQWRkTW92aWVEaWFsb2ciLCJvbkFkZCIsIm9uQ2xvc2VBZGREaWFsb2ciLCJoYW5kbGVTdWJtaXQiLCJIZWFkZXIiLCJhZGRNb3ZpZSIsIm9wZW5BZGQiLCJzZXRPcGVuQWRkIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJpc1NlcnZlciIsIm9uQWRkTW92aWVDbGljayIsIm9uQWRkTW92aWUiLCJoZWFkZXIiLCJzdWJoZWFkZXIiLCJwdXNoIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsIk1vdmllRGV0YWlscyIsImdldE1vdmllIiwidXNlUGFyYW1zIiwiTnVtYmVyIiwicG9zdGVyIiwiaW5mbyIsInJhdGluZyIsImRlZmF1bHRQcm9wcyIsIlNlYXJjaEJhciIsIm9uU2VhcmNoTW92aWVzIiwiTGF5b3V0Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwiYXJyYXkiLCJzdG9yYWdlS2V5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRWYWx1ZSIsInNldEl0ZW0iLCJBcHAiLCJzdG9yZSIsIk1vdmllc1NlcnZpY2UiLCJmaWx0ZXIiLCJmZXRjaCIsImJ1aWxkVXJsIiwidGhlbiIsInJlcyIsImpzb24iLCJhcGlVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJHRVRfTU9WSUVfQllfSUQiLCJnZXRNb3ZpZVN1Y2Nlc3MiLCJHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyIsImdldE1vdmllRmFpbCIsIm1lc3NhZ2UiLCJHRVRfTU9WSUVfQllfSURfRkFJTCIsIkxPQURfTU9WSUVTIiwibG9hZE1vdmllc1N1Y2Nlc3MiLCJMT0FEX01PVklFU19TVUNDQ0VTUyIsImxvYWRNb3ZpZXNGYWlsIiwiTE9BRF9NT1ZJRVNfRkFJTCIsIkFERF9NT1ZJRSIsImFkZE1vdmllU3VjY2VzcyIsIkFERF9NT1ZJRV9TVUNDRVNTIiwiYWRkTW92aWVGYWlsIiwiQUREX01PVklFX0ZBSUwiLCJVUERBVEVfTU9WSUUiLCJ1cGRhdGVNb3ZpZVN1Y2Nlc3MiLCJVUERBVEVfTU9WSUVfU1VDQ0VTUyIsInVwZGF0ZU1vdmllRmFpbCIsIlVQREFURV9NT1ZJRV9GQUlMIiwiREVMRVRFX01PVklFIiwiZGVsZXRlTW92aWVTdWNjZXNzIiwiREVMRVRFX01PVklFX1NVQ0NFU1MiLCJkZWxldGVNb3ZpZUZhaWwiLCJERUxFVEVfTU9WSUVfRkFJTCIsImhlYWRlclJlZHVjZXIiLCJhY3Rpb24iLCJtb3ZpZXNSZWR1Y2VyIiwiZ2V0QWxsTW92aWVzIiwibW92aWVzU2FnYXMiLCJjYWxsIiwiZmV0Y2hNb3ZpZXMiLCJwdXQiLCJkYXRhIiwiZ2V0TW92aWVCeUlkIiwiYWRkZWRNb3ZpZSIsInRha2VFdmVyeSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFD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QUUySSx3REFBYUE7QUFBN0MsQ0FBRCxDQURRLEVBRXZCZ0IsNkRBQWUsQ0FBQ0osY0FBRCxDQUZRLENBQXpCO0FBSUFBLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQmIsOENBQW5CO0FBRWU1QyxvRUFBZixFOzs7Ozs7Ozs7OztBQ2RBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzLzQwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzLzQwNC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHVzZVNlc3Npb25TdG9yYWdlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVNlc3Npb25TdG9yYWdlJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uL2Vycm9yL0Vycm9yQm91bmRhcnknO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYm9keS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgR2VucmVzRmlsdGVyIGZyb20gJy4vR2VucmVzRmlsdGVyJztcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9tb3ZpZUxpc3QvTW92aWVMaXN0JztcbmltcG9ydCBNb3ZpZXNTb3J0ZXIgZnJvbSAnLi9Nb3ZpZXNTb3J0ZXInO1xuXG5jb25zdCBCb2R5ID0gKHsgbW92aWVzLCBsb2FkTW92aWVzIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRGaWx0ZXIsIHNldEN1cnJlbnRGaWx0ZXJdID0gdXNlU2Vzc2lvblN0b3JhZ2UoJ2ZpbHRlcicpO1xuICBjb25zdCBbY3VycmVudFNvcnQsIHNldEN1cnJlbnRTb3J0XSA9IHVzZVNlc3Npb25TdG9yYWdlKCdzb3J0Jyk7XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdXNlTG9jYXRpb24oKS5zZWFyY2g7XG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hRdWVyeSkuZ2V0KCdzZWFyY2gnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRNb3ZpZXMoY3VycmVudEZpbHRlciwgY3VycmVudFNvcnQsIHF1ZXJ5KTtcbiAgfSwgW2N1cnJlbnRGaWx0ZXIsIGN1cnJlbnRTb3J0LCBxdWVyeSwgbG9hZE1vdmllc10pO1xuXG4gIGNvbnN0IG9uRmlsdGVyQ2xpY2sgPSAoZ2VucmUpID0+IHtcbiAgICBzZXRDdXJyZW50RmlsdGVyKGdlbnJlKTtcbiAgfTtcblxuICBjb25zdCBvblNvcnRDaGFuZ2UgPSAoc29ydCkgPT4ge1xuICAgIHNldEN1cnJlbnRTb3J0KHNvcnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fSBmaXhlZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWVudX0+XG4gICAgICAgIDxHZW5yZXNGaWx0ZXIgb25GaWx0ZXJDbGljaz17b25GaWx0ZXJDbGlja30gc2VsZWN0ZWRGaWx0ZXI9e2N1cnJlbnRGaWx0ZXJ9IC8+XG4gICAgICAgIDxNb3ZpZXNTb3J0ZXIgb25Tb3J0Q2hhbmdlPXtvblNvcnRDaGFuZ2V9IHNlbGVjdGVkU29ydD17Y3VycmVudFNvcnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0PlxuICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9tb3ZpZXNcIiAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZXNcIj5cbiAgICAgICAgICB7IW1vdmllcz8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ25vLW1vdmllcyddfT5ObyBNb3ZpZXMgRm91bmQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IC8+XG4gICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCI+XG4gICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL3BhZ2Vub3Rmb3VuZFwiIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkJvZHkucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KSxcbiAgKS5pc1JlcXVpcmVkLFxuICBsb2FkTW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBnZW5yZXMgPSBbJ0FsbCcsICdBZHZlbnR1cmUnLCAnQ29tZWR5JywgJ0RyYW1hJywgJ0ZhbnRhc3knXTtcblxuY29uc3QgR2VucmVzRmlsdGVyID0gKHsgb25GaWx0ZXJDbGljaywgc2VsZWN0ZWRGaWx0ZXIgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHNlbGVjdGVkRmlsdGVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2dlbnJlcy1maWx0ZXInXX0+XG4gICAgICB7Z2VucmVzLm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGtleT17Z2VucmV9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb25GaWx0ZXJDbGljayhnZW5yZSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZChnZW5yZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfVxuICAgICAgICA+XG4gICAgICAgICAge2dlbnJlfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR2VucmVzRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25GaWx0ZXJDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRGaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlc0ZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBNb3ZpZXNTb3J0ZXIgPSAoeyBvblNvcnRDaGFuZ2UsIHNlbGVjdGVkU29ydCB9KSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTb3J0KSB7XG4gICAgb25Tb3J0Q2hhbmdlKCdyZWxlYXNlX2RhdGUnKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29ydH0+XG4gICAgICA8cD5Tb3J0IGJ5IDwvcD5cbiAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlc1snc29ydC1mb3JtJ119PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbGFiZWxJZD1cInNpbXBsZS1zZWxlY3RcIlxuICAgICAgICAgIGlkPVwic2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWxlY3RlZFNvcnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25Tb3J0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJ2b3RlX2F2ZXJhZ2VcIj5SYXRpbmc8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInJlbGVhc2VfZGF0ZVwiPlJlbGVhc2UgZGF0ZTwvTWVudUl0ZW0+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllc1NvcnRlci5wcm9wVHlwZXMgPSB7XG4gIG9uU29ydENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRTb3J0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNTb3J0ZXI7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib2R5XCI6IFwiYm9keV9ib2R5X18xU3I3Y1wiLFxuXHRcInN1Ym1lbnVcIjogXCJib2R5X3N1Ym1lbnVfXzNfY3p2XCIsXG5cdFwic29ydFwiOiBcImJvZHlfc29ydF9fMlFmWi1cIixcblx0XCJNdWlGb3JtQ29udHJvbC1yb290XCI6IFwiYm9keV9NdWlGb3JtQ29udHJvbC1yb290X18yTTRVQlwiLFxuXHRcInNvcnRGb3JtXCI6IFwiYm9keV9zb3J0Rm9ybV9fMTlTU3dcIixcblx0XCJNdWlTZWxlY3Qtc2VsZWN0XCI6IFwiYm9keV9NdWlTZWxlY3Qtc2VsZWN0X19IYWx4SVwiLFxuXHRcIk11aVNlbGVjdC1pY29uXCI6IFwiYm9keV9NdWlTZWxlY3QtaWNvbl9fVkc4bTVcIixcblx0XCJNdWlJbnB1dC11bmRlcmxpbmVcIjogXCJib2R5X011aUlucHV0LXVuZGVybGluZV9fMWdSRTJcIixcblx0XCJnZW5yZXMtZmlsdGVyXCI6IFwiYm9keV9nZW5yZXMtZmlsdGVyX18zMG9sZlwiLFxuXHRcIml0ZW1cIjogXCJib2R5X2l0ZW1fXzFzRDFDXCIsXG5cdFwiYWN0aXZlXCI6IFwiYm9keV9hY3RpdmVfX3IwcXR1XCIsXG5cdFwibW92aWVzLWNvdW50ZXJcIjogXCJib2R5X21vdmllcy1jb3VudGVyX194ZTR3bVwiLFxuXHRcIm5vLW1vdmllc1wiOiBcImJvZHlfbm8tbW92aWVzX18zcFZHcFwiXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgbG9hZE1vdmllcyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvbW92aWVzJztcblxuaW1wb3J0IEJvZHkgZnJvbSAnLi9Cb2R5JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyBtb3ZpZXM6IHN0YXRlLm1vdmllcyB9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2FkTW92aWVzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQm9keSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IERlbGV0ZU1vdmllRGlhbG9nID0gKHsgb3BlbiwgbW92aWVJZCwgb25DbG9zZSwgb25EZWxldGUgfSkgPT4ge1xuICBjb25zdCBvbkNsb3NlRGVsZXRlRGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIGRpc2FibGVCYWNrZHJvcENsaWNrXG4gICAgICBkaXNhYmxlRXNjYXBlS2V5RG93blxuICAgICAgb3Blbj17b3Blbn1cbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2VEZWxldGVEaWFsb2d9XG4gICAgICBtYXhXaWR0aD1cImxnXCJcbiAgICA+XG4gICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlRGVsZXRlRGlhbG9nfT5cbiAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+RGVsZXRlIE1vdmllPC9EaWFsb2dUaXRsZT5cbiAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cImRpYWxvZy1mb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIG1vdmllP1xuICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25EZWxldGUobW92aWVJZCl9IGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59O1xuXG5EZWxldGVNb3ZpZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uRGVsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBtb3ZpZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVNb3ZpZURpYWxvZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9tb3ZpZUNhcmQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vdmllcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IE1vdmllTGlzdCA9ICh7IG1vdmllcyB9KSA9PiAoXG4gIDx1bCBjbGFzc05hbWU9e3N0eWxlc1snbW92aWUtbGlzdCddfT5cbiAgICB7bW92aWVzPy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICA8TW92aWVDYXJkIGtleT17bW92aWU/LmlkfSBtb3ZpZT17bW92aWV9IC8+XG4gICAgKSl9XG4gIDwvdWw+XG4pO1xuXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KSxcbiAgKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCB7IEZpZWxkLCBGb3JtLCBGb3JtaWtQcm92aWRlciwgRXJyb3JNZXNzYWdlLCB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgZ2VucmVzQXJyYXksIHZhbGlkYXRpb25TY2hlbWEsIE1PVklFX0ZJRUxEUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb3ZpZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBVcGRhdGVNb3ZpZURpYWxvZyA9ICh7IG1vdmllLCBvcGVuLCBvblVwZGF0ZSwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtnZW5yZXMsIHNldEdlbnJlc10gPSB1c2VTdGF0ZShtb3ZpZT8uZ2VucmVzIHx8IFtdKTtcbiAgY29uc3Qgb25DbG9zZUVkaXREaWFsb2cgPSAoKSA9PiB7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlR2VucmVzID0gKHZhbHVlLCBzZXRGaWVsZFZhbHVlKSA9PiB7XG4gICAgc2V0R2VucmVzKHZhbHVlKTtcbiAgICBzZXRGaWVsZFZhbHVlKCdnZW5yZXMnLCB2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBpZDogbW92aWU/LmlkLFxuICAgICAgdGl0bGU6IG1vdmllPy50aXRsZSxcbiAgICAgIHJlbGVhc2VfZGF0ZTogbW92aWU/LnJlbGVhc2VfZGF0ZSxcbiAgICAgIHBvc3Rlcl9wYXRoOiBtb3ZpZT8ucG9zdGVyX3BhdGgsXG4gICAgICBvdmVydmlldzogbW92aWU/Lm92ZXJ2aWV3LFxuICAgICAgcnVudGltZTogbW92aWU/LnJ1bnRpbWUsXG4gICAgICBnZW5yZXMsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxuICAgIHZhbHVlczoge1xuICAgICAgZ2VucmVzLFxuICAgIH0sXG4gICAgb25TdWJtaXQ6IChmaWVsZHMpID0+IHtcbiAgICAgIG9uVXBkYXRlKGZpZWxkcyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrUHJvdmlkZXIgdmFsdWU9e2Zvcm1pa30+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VFZGl0RGlhbG9nfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snLk11aVBhcGVyLXJvb3QuTXVpTWVudS1wYXBlci5NdWlQb3BvdmVyLXBhcGVyJ119XG4gICAgICA+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VFZGl0RGlhbG9nfT5cbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlPkVkaXQgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cImRpYWxvZy1mb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+TW92aWUgSUQ8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICB7bW92aWU/LmlkfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5UaXRsZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQnXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+UmVsZWFzZSBEYXRlPC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SRUxFQVNFX0RBVEV9XG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQnXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SRUxFQVNFX0RBVEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119Pk1vdmllIFVSTDwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUE9TVEVSX1BBVEh9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQnXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+R2VucmU8L3A+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLkdFTlJFU31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQnXX1cbiAgICAgICAgICAgICAgdmFsdWU9e2dlbnJlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUdlbnJlcyhldmVudC50YXJnZXQudmFsdWUsIGZvcm1pay5zZXRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZW5yZXNBcnJheS5tYXAoKGdlbnJlKSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Z2VucmV9IHZhbHVlPXtnZW5yZX0+XG4gICAgICAgICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLkdFTlJFU31cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+T3ZlcnZpZXc8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5PVkVSVklFV31cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImVtcHR5IHRleHRhcmVhXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQnXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5PVkVSVklFV31cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+UnVudGltZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX1cbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2VFZGl0RGlhbG9nfSBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJsYXJnZVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L0Zvcm1pa1Byb3ZpZGVyPlxuICApO1xufTtcblxuVXBkYXRlTW92aWVEaWFsb2cucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSkuaXNSZXF1aXJlZCxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVNb3ZpZURpYWxvZztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IERlbGV0ZU1vdmllRGlhbG9nIGZyb20gJy4uL0RlbGV0ZU1vdmllRGlhbG9nJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vbW92aWVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCBVcGRhdGVNb3ZpZURpYWxvZyBmcm9tICcuLi9VcGRhdGVNb3ZpZURpYWxvZyc7XG5cbmNvbnN0IE1vdmllQ2FyZCA9ICh7IG1vdmllLCB1cGRhdGVNb3ZpZSwgZGVsZXRlTW92aWUgfSkgPT4ge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbb3BlbkRlbGV0ZSwgc2V0T3BlbkRlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuRWRpdCwgc2V0T3BlbkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBzZXRBbmNob3JFbChlLmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IG9uRWRpdE1lbnVJdGVtQ2xpY2sgPSAoKSA9PiB7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgICBzZXRPcGVuRWRpdCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZU1lbnVJdGVtQ2xpY2sgPSAoKSA9PiB7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgICBzZXRPcGVuRGVsZXRlKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlTW92aWUgPSAobW92aWVJZCkgPT4ge1xuICAgIGRlbGV0ZU1vdmllKG1vdmllSWQpO1xuICAgIHNldE9wZW5EZWxldGUoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG9uVXBkYXRlTW92aWUgPSAobSkgPT4ge1xuICAgIHVwZGF0ZU1vdmllKG0pO1xuICAgIHNldE9wZW5FZGl0KGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1snbW92aWUtY2FyZCddfT5cbiAgICAgIDxMaW5rIHRvPXtgL21vdmllcy8ke21vdmllPy5pZH1gfT5cbiAgICAgICAgPGltZyBzcmM9e21vdmllPy5wb3N0ZXJfcGF0aH0gYWx0PVwiXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vdmllLWluZm8nXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2luZm8tZmlyc3Qtcm93J119PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bW92aWU/LnRpdGxlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snbW92aWUtcmVsZWFzZS15ZWFyJ119Pnttb3ZpZT8ucmVsZWFzZV9kYXRlPy5zcGxpdCgnLScpWzBdfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmdlbnJlfT57bW92aWU/LmdlbnJlcz8uam9pbignLCAnKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydjYXJkLW1lbnUtaWNvbiddfVxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwic2ltcGxlLW1lbnVcIlxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgPlxuICAgICAgICA8TW9yZVZlcnRJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8TWVudSBpZD1cInNpbXBsZS1tZW51XCIgYW5jaG9yRWw9e2FuY2hvckVsfSBrZWVwTW91bnRlZCBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17b25FZGl0TWVudUl0ZW1DbGlja30gY2xhc3NOYW1lPVwiY2FyZC1tZW51LWl0ZW1cIj5cbiAgICAgICAgICBlZGl0XG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtvbkRlbGV0ZU1lbnVJdGVtQ2xpY2t9IGNsYXNzTmFtZT1cImNhcmQtbWVudS1pdGVtXCI+XG4gICAgICAgICAgZGVsZXRlXG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgIDxVcGRhdGVNb3ZpZURpYWxvZyBvcGVuPXtvcGVuRWRpdH0gbW92aWU9e21vdmllfSBvblVwZGF0ZT17b25VcGRhdGVNb3ZpZX0gb25DbG9zZT17KCkgPT4gc2V0T3BlbkVkaXQoZmFsc2UpfSAvPlxuICAgICAgICA8RGVsZXRlTW92aWVEaWFsb2dcbiAgICAgICAgICBvcGVuPXtvcGVuRGVsZXRlfVxuICAgICAgICAgIG1vdmllSWQ9e21vdmllPy5pZH1cbiAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGVNb3ZpZX1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuRGVsZXRlKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvTWVudT5cbiAgICA8L2xpPlxuICApO1xufTtcblxuTW92aWVDYXJkLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSkuaXNSZXF1aXJlZCxcbiAgdXBkYXRlTW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRlbGV0ZU1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZGVsZXRlTW92aWUsIHVwZGF0ZU1vdmllIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9tb3ZpZXMnO1xuXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vTW92aWVDYXJkJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICB1cGRhdGVNb3ZpZSxcbiAgZGVsZXRlTW92aWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoTW92aWVDYXJkKTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vdmllLWxpc3RcIjogXCJtb3ZpZXNfbW92aWUtbGlzdF9fM28taF9cIixcblx0XCJtb3ZpZS1jYXJkXCI6IFwibW92aWVzX21vdmllLWNhcmRfX3BKQWpwXCIsXG5cdFwiY2FyZC1tZW51LWljb25cIjogXCJtb3ZpZXNfY2FyZC1tZW51LWljb25fXzFRZHZOXCIsXG5cdFwibW92aWUtaW5mb1wiOiBcIm1vdmllc19tb3ZpZS1pbmZvX18zenI2Y1wiLFxuXHRcInRpdGxlXCI6IFwibW92aWVzX3RpdGxlX184c29Bc1wiLFxuXHRcImluZm8tZmlyc3Qtcm93XCI6IFwibW92aWVzX2luZm8tZmlyc3Qtcm93X18zblZ4eVwiLFxuXHRcIm1vdmllLXJlbGVhc2UteWVhclwiOiBcIm1vdmllc19tb3ZpZS1yZWxlYXNlLXllYXJfXzI2TGMxXCIsXG5cdFwiZ2VucmVcIjogXCJtb3ZpZXNfZ2VucmVfXzJ5NHZwXCIsXG5cdFwiTXVpUGFwZXItcm9vdFwiOiBcIm1vdmllc19NdWlQYXBlci1yb290X18xQVFsbVwiLFxuXHRcIk11aU1lbnUtcGFwZXJcIjogXCJtb3ZpZXNfTXVpTWVudS1wYXBlcl9fb2hoeHVcIixcblx0XCJNdWlQb3BvdmVyLXBhcGVyXCI6IFwibW92aWVzX011aVBvcG92ZXItcGFwZXJfXzJadTBNXCIsXG5cdFwiTXVpQnV0dG9uQmFzZS1yb290XCI6IFwibW92aWVzX011aUJ1dHRvbkJhc2Utcm9vdF9fWm5OLTNcIixcblx0XCJNdWlMaXN0SXRlbS1yb290XCI6IFwibW92aWVzX011aUxpc3RJdGVtLXJvb3RfXzN6S0pwXCIsXG5cdFwiTXVpTWVudUl0ZW0tcm9vdFwiOiBcIm1vdmllc19NdWlNZW51SXRlbS1yb290X18xcTNFNFwiLFxuXHRcImNhcmQtbWVudS1pdGVtXCI6IFwibW92aWVzX2NhcmQtbWVudS1pdGVtX18zbnVXaVwiLFxuXHRcIk11aURpYWxvZy1wYXBlclwiOiBcIm1vdmllc19NdWlEaWFsb2ctcGFwZXJfX3N2UGVRXCIsXG5cdFwiTXVpSW5wdXQtdW5kZXJsaW5lXCI6IFwibW92aWVzX011aUlucHV0LXVuZGVybGluZV9fMXdPVThcIixcblx0XCJkaWFsb2ctZm9ybS1jb250ZW50XCI6IFwibW92aWVzX2RpYWxvZy1mb3JtLWNvbnRlbnRfXzFpS2Y2XCIsXG5cdFwiZWRpdC1maWVsZC1uYW1lXCI6IFwibW92aWVzX2VkaXQtZmllbGQtbmFtZV9fMm1UMmxcIixcblx0XCJlZGl0LWZpZWxkXCI6IFwibW92aWVzX2VkaXQtZmllbGRfXzJEaU1PXCIsXG5cdFwiTXVpU2VsZWN0LWljb25cIjogXCJtb3ZpZXNfTXVpU2VsZWN0LWljb25fX3VYSlZtXCIsXG5cdFwiZXJyb3JcIjogXCJtb3ZpZXNfZXJyb3JfXzE2V0JrXCIsXG5cdFwiTXVpSWNvbkJ1dHRvbi1yb290XCI6IFwibW92aWVzX011aUljb25CdXR0b24tcm9vdF9fMjNDQ0dcIixcblx0XCJNdWlUeXBvZ3JhcGh5LWg2XCI6IFwibW92aWVzX011aVR5cG9ncmFwaHktaDZfX0lWT0k1XCIsXG5cdFwiTXVpVHlwb2dyYXBoeS1jb2xvclRleHRTZWNvbmRhcnlcIjogXCJtb3ZpZXNfTXVpVHlwb2dyYXBoeS1jb2xvclRleHRTZWNvbmRhcnlfXzFWTDFSXCIsXG5cdFwiTXVpRGlhbG9nQWN0aW9ucy1zcGFjaW5nXCI6IFwibW92aWVzX011aURpYWxvZ0FjdGlvbnMtc3BhY2luZ19fMXUwVXFcIixcblx0XCJNdWlCdXR0b24tdGV4dFByaW1hcnlcIjogXCJtb3ZpZXNfTXVpQnV0dG9uLXRleHRQcmltYXJ5X19KNVJ5UFwiLFxuXHRcIk11aUJ1dHRvbi10ZXh0U2Vjb25kYXJ5XCI6IFwibW92aWVzX011aUJ1dHRvbi10ZXh0U2Vjb25kYXJ5X18ybWdWSVwiXG59O1xuIiwiaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XG5cbmV4cG9ydCBjb25zdCBNT1ZJRV9GSUVMRFMgPSB7XG4gIFRJVExFOiAndGl0bGUnLFxuICBSRUxFQVNFX0RBVEU6ICdyZWxlYXNlX2RhdGUnLFxuICBQT1NURVJfUEFUSDogJ3Bvc3Rlcl9wYXRoJyxcbiAgR0VOUkVTOiAnZ2VucmVzJyxcbiAgT1ZFUlZJRVc6ICdvdmVydmlldycsXG4gIFJVTlRJTUU6ICdydW50aW1lJyxcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5yZXNBcnJheSA9IFtcbiAgJ0FjdGlvbicsXG4gICdBZHZlbnR1cmUnLFxuICAnQW5pbWF0aW9uJyxcbiAgJ0NvbWVkeScsXG4gICdEcmFtYScsXG4gICdGYW1pbHknLFxuICAnRmFudGFzeScsXG4gICdTY2llbmNlIEZpY3Rpb24nLFxuXTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSB5dXAub2JqZWN0KHtcbiAgdGl0bGU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnVGl0bGUgaXMgcmVxdWlyZWQnKSxcbiAgcG9zdGVyX3BhdGg6IHl1cC5zdHJpbmcoKS51cmwoKS5yZXF1aXJlZCgnUG9zdGVyIHVybCBpcyByZXF1aXJlZCcpLFxuICByZWxlYXNlX2RhdGU6IHl1cC5zdHJpbmcoKSxcbiAgb3ZlcnZpZXc6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnT3ZlcnZpZXcgaXMgcmVxdWlyZWQnKSxcbiAgcnVudGltZTogeXVwLm51bWJlcigpLnJlcXVpcmVkKCdSdW50aW1lIGlzIHJlcXVpcmVkJyksXG4gIGdlbnJlczogeXVwLmFycmF5KCkubWluKDEpLnJlcXVpcmVkKCdNaW5pbXVtIG9uZSBnZW5yZSBzaG91bGQgYmUgc2VsZWN0ZWQnKSxcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcigpIHtcbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goKSB7fVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xuICAgICAgcmV0dXJuIDxoMT5Tb21ldGhpbmcgd2VudCB3cm9uZyAoPC9oMT47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL0Zvb3Rlcic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9lcnJvci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFBhZ2VOb3RGb3VuZCA9ICgpID0+IChcbiAgPD5cbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yUGFnZX0gZml4ZWQ+XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JDb250ZW50fT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PlBhZ2UgTm90IEZvdW5kPC9wPlxuICAgICAgICA8TGluayB0bz1cIi9tb3ZpZXNcIiBjbGFzc05hbWU9e3N0eWxlcy5ob21lTGlua30gdGl0bGU9XCJsaW5rVG9Ib21lXCI+XG4gICAgICAgICAgR28gQmFjayBUbyBIb21lXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxGb290ZXIgLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTm90Rm91bmQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlcnJvclBhZ2VcIjogXCJlcnJvcl9lcnJvclBhZ2VfXzNBV3lvXCIsXG5cdFwibG9nb1wiOiBcImVycm9yX2xvZ29fX21JejBtXCIsXG5cdFwiZXJyb3JDb250ZW50XCI6IFwiZXJyb3JfZXJyb3JDb250ZW50X18xdjZGa1wiLFxuXHRcImVycm9yXCI6IFwiZXJyb3JfZXJyb3JfXzJ1cE9qXCIsXG5cdFwiaG9tZUxpbmtcIjogXCJlcnJvcl9ob21lTGlua19fM29XRzNcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9IGZpeGVkPlxuICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzWydsb2dvLWZvb3RlciddfSBhbHQ9XCJsb2dvXCIgLz5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJfZm9vdGVyX18yal9GclwiLFxuXHRcImxvZ29Gb290ZXJcIjogXCJmb290ZXJfbG9nb0Zvb3Rlcl9fMmpLOGVcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrUHJvdmlkZXIsIEVycm9yTWVzc2FnZSwgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdlbnJlc0FycmF5LCB2YWxpZGF0aW9uU2NoZW1hLCBNT1ZJRV9GSUVMRFMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBBZGRNb3ZpZURpYWxvZyA9ICh7IG9wZW4sIG9uQWRkLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBvbkNsb3NlQWRkRGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUdlbnJlcyA9ICh2YWx1ZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIHNldEdlbnJlcyh2YWx1ZSk7XG4gICAgc2V0RmllbGRWYWx1ZSgnZ2VucmVzJywgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgcmVsZWFzZV9kYXRlOiAnJyxcbiAgICAgIHBvc3Rlcl9wYXRoOiAnJyxcbiAgICAgIGdlbnJlcyxcbiAgICAgIG92ZXJ2aWV3OiAnJyxcbiAgICAgIHJ1bnRpbWU6ICcnLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XG4gICAgICBvbkFkZCh2YWx1ZXMpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1Byb3ZpZGVyIHZhbHVlPXtmb3JtaWt9PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBkaXNhYmxlQmFja2Ryb3BDbGlja1xuICAgICAgICBkaXNhYmxlRXNjYXBlS2V5RG93blxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlQWRkRGlhbG9nfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlQWRkRGlhbG9nfT5cbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEZvcm0gdGl0bGU9XCJhZGQtbW92aWVcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+QWRkIE1vdmllPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJkaWFsb2ctZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5UaXRsZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3ZpZSBUaXRsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5SZWxlYXNlIERhdGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUkVMRUFTRV9EQVRFfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBEYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicmVsZWFzZV9kYXRlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJyZWxlYXNlX2RhdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPk1vdmllIFVSTDwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3ZpZSBVUkwgaGVyZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInBvc3Rlcl9wYXRoXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJwb3N0ZXJfcGF0aFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUE9TVEVSX1BBVEh9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5HZW5yZTwvcD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2dlbnJlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUdlbnJlcyhldmVudC50YXJnZXQudmFsdWUsIGZvcm1pay5zZXRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgIHRpdGxlPVwiZ2VucmVzXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJnZW5yZXNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzQXJyYXkubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2dlbnJlfSB2YWx1ZT17Z2VucmV9PlxuICAgICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5PdmVydmlldzwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk92ZXJ2aWV3IEhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJvdmVydmlld1wiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwib3ZlcnZpZXdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+UnVudGltZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUnVudGltZSBIZXJlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicnVudGltZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwicnVudGltZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2VBZGREaWFsb2d9XG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJyZXNldFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwic3VibWl0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvRm9ybWlrUHJvdmlkZXI+XG4gICk7XG59O1xuXG5BZGRNb3ZpZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQWRkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTW92aWVEaWFsb2c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQWRkTW92aWVEaWFsb2cgZnJvbSAnLi9BZGRNb3ZpZURpYWxvZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBNb3ZpZURldGFpbHMgZnJvbSAnLi9tb3ZpZURldGFpbHMnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL3NlYXJjaEJhci9TZWFyY2hCYXInO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBhZGRNb3ZpZSB9KSA9PiB7XG4gIGNvbnN0IFtvcGVuQWRkLCBzZXRPcGVuQWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcblxuICBjb25zdCBvbkFkZE1vdmllQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0T3BlbkFkZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkFkZE1vdmllID0gKG1vdmllKSA9PiB7XG4gICAgYWRkTW92aWUobW92aWUpO1xuICAgIHNldE9wZW5BZGQoZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfSBmaXhlZD5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllcy86bW92aWVJZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGVyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvJyl9PlxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aXNTZXJ2ZXIgPyAoXG4gICAgICAgICAgICB1c2VSb3V0ZXIoKS5wYXRobmFtZS5pbmNsdWRlcygnbW92aWVJZCcpID8gKFxuICAgICAgICAgICAgICA8TW92aWVEZXRhaWxzIC8+XG4gICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TW92aWVEZXRhaWxzIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFkZE1vdmllQ2xpY2t9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydidXR0b24tYWRkLW1vdmllJ119XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICsgQWRkIE1vdmllXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxBZGRNb3ZpZURpYWxvZ1xuICAgICAgICAgICAgICBvcGVuPXtvcGVuQWRkfVxuICAgICAgICAgICAgICBvbkFkZD17b25BZGRNb3ZpZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbkFkZChmYWxzZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc1NlcnZlciA/IChcbiAgICAgICAgICAgIHVzZVJvdXRlcigpLnBhdGhuYW1lLmluY2x1ZGVzKCdtb3ZpZUlkJykgPyBudWxsIDogKFxuICAgICAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBhZGRNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfXzJwTGlYXCIsXG5cdFwic3ViaGVhZGVyXCI6IFwiaGVhZGVyX3N1YmhlYWRlcl9fNVd3NjFcIixcblx0XCJsb2dvXCI6IFwiaGVhZGVyX2xvZ29fXzI0ZndEXCIsXG5cdFwiYnV0dG9uLWFkZC1tb3ZpZVwiOiBcImhlYWRlcl9idXR0b24tYWRkLW1vdmllX18yOGM1WlwiLFxuXHRcIk11aUljb25CdXR0b24tcm9vdFwiOiBcImhlYWRlcl9NdWlJY29uQnV0dG9uLXJvb3RfX01hRTVzXCJcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBhZGRNb3ZpZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvbW92aWVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYWRkTW92aWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vdmllRGV0YWlscy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IE1vdmllRGV0YWlscyA9ICh7IG1vdmllLCBnZXRNb3ZpZSB9KSA9PiB7XG4gIGNvbnN0IHsgbW92aWVJZCB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNb3ZpZShOdW1iZXIobW92aWVJZCkpO1xuICB9LCBbbW92aWVJZCwgZ2V0TW92aWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vdmllLWRldGFpbHMnXX0+XG4gICAgICA8aW1nIHNyYz17bW92aWU/LnBvc3Rlcl9wYXRofSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0ZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydmaXJzdC1yb3cnXX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bW92aWU/LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9Pnttb3ZpZT8udm90ZV9hdmVyYWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdsaW5lfT57bW92aWU/LnRhZ2xpbmV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RoaXJkLXJvdyddfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydyZWxlYXNlLWRhdGUnXX0+e21vdmllPy5yZWxlYXNlX2RhdGU/LnNwbGl0KCctJylbMF19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ydW50aW1lfT57bW92aWU/LnJ1bnRpbWV9IG1pbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+e21vdmllPy5vdmVydmlld308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVEZXRhaWxzLmRlZmF1bHRQcm9wcyA9IHtcbiAgbW92aWU6IG51bGwsXG59O1xuXG5Nb3ZpZURldGFpbHMucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgZ2V0TW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZURldGFpbHM7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRNb3ZpZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvaGVhZGVyJztcblxuaW1wb3J0IE1vdmllRGV0YWlscyBmcm9tICcuL01vdmllRGV0YWlscyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgbW92aWU6IHN0YXRlLm1vdmllIH0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldE1vdmllLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vdmllRGV0YWlscyk7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb3ZpZS1kZXRhaWxzXCI6IFwibW92aWVEZXRhaWxzX21vdmllLWRldGFpbHNfXzdnc05iXCIsXG5cdFwicG9zdGVyXCI6IFwibW92aWVEZXRhaWxzX3Bvc3Rlcl9fMUVkVm5cIixcblx0XCJpbmZvXCI6IFwibW92aWVEZXRhaWxzX2luZm9fXzJ6UGQ5XCIsXG5cdFwiZmlyc3Qtcm93XCI6IFwibW92aWVEZXRhaWxzX2ZpcnN0LXJvd19fdWkyZnhcIixcblx0XCJ0aXRsZVwiOiBcIm1vdmllRGV0YWlsc190aXRsZV9fT2hwLWpcIixcblx0XCJyYXRpbmdcIjogXCJtb3ZpZURldGFpbHNfcmF0aW5nX19rSnFsS1wiLFxuXHRcInRoaXJkLXJvd1wiOiBcIm1vdmllRGV0YWlsc190aGlyZC1yb3dfXzJJS3lmXCIsXG5cdFwicmVsZWFzZS1kYXRlXCI6IFwibW92aWVEZXRhaWxzX3JlbGVhc2UtZGF0ZV9fMjkzY3NcIixcblx0XCJydW50aW1lXCI6IFwibW92aWVEZXRhaWxzX3J1bnRpbWVfXzNlYl9lXCIsXG5cdFwiZGFya1wiOiBcIm1vdmllRGV0YWlsc19kYXJrX191RmRNRlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zZWFyY2hCYXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3Qgb25TZWFyY2hNb3ZpZXMgPSAocXVlcnkpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goYC9tb3ZpZXM/c2VhcmNoPSR7cXVlcnl9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydzZWFyY2gtYmFyJ119PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PmZpbmQgeW91ciBtb3ZpZTwvcD5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9eyhmaWVsZHMpID0+IHtcbiAgICAgICAgICBvblNlYXJjaE1vdmllcyhmaWVsZHMucXVlcnkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8RmllbGQgdHlwZT1cInNlYXJjaFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIGlkPXtzdHlsZXNbJ3NlYXJjaC1pbnB1dCddfSBuYW1lPVwicXVlcnlcIiAvPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaC1iYXJcIjogXCJzZWFyY2hCYXJfc2VhcmNoLWJhcl9fM0k3ZFJcIixcblx0XCJ0aXRsZVwiOiBcInNlYXJjaEJhcl90aXRsZV9fMkUtOElcIixcblx0XCJzZWFyY2gtaW5wdXRcIjogXCJzZWFyY2hCYXJfc2VhcmNoLWlucHV0X18ybzVmYlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbWFpbi1sYXlvdXQnXX0+e2NoaWxkcmVufTwvZGl2PlxuKTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluLWxheW91dFwiOiBcImxheW91dF9tYWluLWxheW91dF9feDhzbUhcIlxufTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVNlc3Npb25TdG9yYWdlID0gKHN0b3JhZ2VLZXkpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICBwcm9jZXNzLmJyb3dzZXIgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIDogbnVsbFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIHZhbHVlKTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgc3RvcmFnZUtleV0pO1xuXG4gIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlc3Npb25TdG9yYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZSwgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9ib2R5JztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhdGljUm91dGVyPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxQYWdlTm90Rm91bmQgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BhZ2Vub3Rmb3VuZFwiPlxuICAgICAgICAgICAgPFBhZ2VOb3RGb3VuZCAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICA8Qm9keSAvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiY2xhc3MgTW92aWVzU2VydmljZSB7XG4gIGFwaVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvbW92aWVzLyc7XG5cbiAgZmV0Y2hNb3ZpZXMgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT5cbiAgICBmZXRjaCh0aGlzLmJ1aWxkVXJsKGZpbHRlciwgc29ydCwgcXVlcnkpKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGdldE1vdmllQnlJZCA9IChtb3ZpZUlkKSA9PlxuICAgIGZldGNoKHRoaXMuYXBpVVJMICsgbW92aWVJZCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBhZGRNb3ZpZSA9IChtb3ZpZSkgPT5cbiAgICBmZXRjaCh0aGlzLmFwaVVSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobW92aWUpLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgdXBkYXRlTW92aWUgPSAobW92aWUpID0+XG4gICAgZmV0Y2godGhpcy5hcGlVUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobW92aWUpLFxuICAgIH0pO1xuXG4gIGRlbGV0ZU1vdmllID0gKGlkKSA9PiBmZXRjaCh0aGlzLmFwaVVSTCArIGlkLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG5cbiAgYnVpbGRVcmwgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT4ge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLmFwaVVSTH0/c29ydEJ5PSR7c29ydH0mc29ydE9yZGVyPWRlc2NgO1xuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9PSAnQWxsJykge1xuICAgICAgdXJsICs9IGA/ZmlsdGVyPSR7ZmlsdGVyfWA7XG4gICAgfVxuICAgIGlmIChxdWVyeSkge1xuICAgICAgdXJsICs9IGAmc2VhcmNoPSR7cXVlcnl9JnNlYXJjaEJ5PXRpdGxlYDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vdmllc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7XG4gIEdFVF9NT1ZJRV9CWV9JRCxcbiAgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MsXG4gIEdFVF9NT1ZJRV9CWV9JRF9GQUlMLFxufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllID0gKG1vdmllSWQpID0+ICh7XG4gIHR5cGU6IEdFVF9NT1ZJRV9CWV9JRCxcbiAgbW92aWVJZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVTdWNjZXNzID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBHRVRfTU9WSUVfQllfSURfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgTE9BRF9NT1ZJRVMsXG4gIEFERF9NT1ZJRSxcbiAgVVBEQVRFX01PVklFLFxuICBERUxFVEVfTU9WSUUsXG4gIExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBMT0FEX01PVklFU19GQUlMLFxuICBBRERfTU9WSUVfU1VDQ0VTUyxcbiAgQUREX01PVklFX0ZBSUwsXG4gIFVQREFURV9NT1ZJRV9TVUNDRVNTLFxuICBVUERBVEVfTU9WSUVfRkFJTCxcbiAgREVMRVRFX01PVklFX1NVQ0NFU1MsXG4gIERFTEVURV9NT1ZJRV9GQUlMLFxufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGxvYWRNb3ZpZXMgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT4gKHtcbiAgdHlwZTogTE9BRF9NT1ZJRVMsXG4gIGZpbHRlcixcbiAgc29ydCxcbiAgcXVlcnksXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvYWRNb3ZpZXNTdWNjZXNzID0gKG1vdmllcykgPT4gKHtcbiAgdHlwZTogTE9BRF9NT1ZJRVNfU1VDQ0NFU1MsXG4gIG1vdmllcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9hZE1vdmllc0ZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogTE9BRF9NT1ZJRVNfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkTW92aWUgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IEFERF9NT1ZJRSxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1vdmllU3VjY2VzcyA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogQUREX01PVklFX1NVQ0NFU1MsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogQUREX01PVklFX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfTU9WSUUsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZVN1Y2Nlc3MgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IFVQREFURV9NT1ZJRV9TVUNDRVNTLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IFVQREFURV9NT1ZJRV9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZSA9IChpZCkgPT4gKHtcbiAgdHlwZTogREVMRVRFX01PVklFLFxuICBpZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWVTdWNjZXNzID0gKGlkKSA9PiAoe1xuICB0eXBlOiBERUxFVEVfTU9WSUVfU1VDQ0VTUyxcbiAgaWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBERUxFVEVfTU9WSUVfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IExPQURfTU9WSUVTID0gJ0xPQURfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBMT0FEX01PVklFU19TVUNDQ0VTUyA9ICdMT0FEX01PVklFU19TVUNDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9NT1ZJRVNfRkFJTCA9ICdMT0FEX01PVklFU19GQUlMJztcbmV4cG9ydCBjb25zdCBBRERfTU9WSUUgPSAnQUREX01PVklFJztcbmV4cG9ydCBjb25zdCBBRERfTU9WSUVfU1VDQ0VTUyA9ICdBRERfTU9WSUVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX01PVklFX0ZBSUwgPSAnQUREX01PVklFX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9NT1ZJRSA9ICdVUERBVEVfTU9WSUUnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9NT1ZJRV9TVUNDRVNTID0gJ1VQREFURV9NT1ZJRV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUVfRkFJTCA9ICdVUERBVEVfTU9WSUVfRkFJTCc7XG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFID0gJ0RFTEVURV9NT1ZJRSc7XG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFX1NVQ0NFU1MgPSAnREVMRVRFX01PVklFX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRV9GQUlMID0gJ0RFTEVURV9NT1ZJRV9GQUlMJztcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfQllfSUQgPSAnR0VUX01PVklFX0JZX0lEJztcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyA9ICdHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgR0VUX01PVklFX0JZX0lEX0ZBSUwgPSAnR0VUX01PVklFX0JZX0lEX0ZBSUwnO1xuIiwiaW1wb3J0IHtcbiAgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MsXG4gIEdFVF9NT1ZJRV9CWV9JRF9GQUlMLFxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaGVhZGVyUmVkdWNlciA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ubW92aWU7XG4gICAgY2FzZSBHRVRfTU9WSUVfQllfSURfRkFJTDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJSZWR1Y2VyO1xuIiwiaW1wb3J0IHtcbiAgTE9BRF9NT1ZJRVNfU1VDQ0NFU1MsXG4gIEFERF9NT1ZJRV9TVUNDRVNTLFxuICBVUERBVEVfTU9WSUVfRkFJTCxcbiAgREVMRVRFX01PVklFX0ZBSUwsXG4gIExPQURfTU9WSUVTX0ZBSUwsXG4gIEFERF9NT1ZJRV9GQUlMLFxuICBVUERBVEVfTU9WSUVfU1VDQ0VTUyxcbiAgREVMRVRFX01PVklFX1NVQ0NFU1MsXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBtb3ZpZXNSZWR1Y2VyID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEX01PVklFU19TVUNDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ubW92aWVzO1xuICAgIGNhc2UgQUREX01PVklFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ubW92aWVdO1xuICAgIGNhc2UgVVBEQVRFX01PVklFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gc3RhdGUubWFwKChtb3ZpZSkgPT4ge1xuICAgICAgICBpZiAobW92aWUuaWQgPT09IGFjdGlvbi5tb3ZpZS5pZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5hY3Rpb24ubW92aWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92aWU7XG4gICAgICB9KTtcbiAgICBjYXNlIERFTEVURV9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5maWx0ZXIoKG1vdmllKSA9PiBtb3ZpZS5pZCAhPT0gYWN0aW9uLmlkKV07XG4gICAgY2FzZSBMT0FEX01PVklFU19GQUlMOlxuICAgIGNhc2UgQUREX01PVklFX0ZBSUw6XG4gICAgY2FzZSBVUERBVEVfTU9WSUVfRkFJTDpcbiAgICBjYXNlIERFTEVURV9NT1ZJRV9GQUlMOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmllc1JlZHVjZXI7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IE1vdmllc1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvTW92aWVzU2VydmljZSc7XG5cbmltcG9ydCB7IGdldE1vdmllU3VjY2VzcywgZ2V0TW92aWVGYWlsIH0gZnJvbSAnLi9hY3Rpb25zL2hlYWRlcic7XG5pbXBvcnQge1xuICBsb2FkTW92aWVzU3VjY2VzcyxcbiAgbG9hZE1vdmllc0ZhaWwsXG4gIGFkZE1vdmllU3VjY2VzcyxcbiAgYWRkTW92aWVGYWlsLFxuICB1cGRhdGVNb3ZpZVN1Y2Nlc3MsXG4gIHVwZGF0ZU1vdmllRmFpbCxcbiAgZGVsZXRlTW92aWVTdWNjZXNzLFxuICBkZWxldGVNb3ZpZUZhaWwsXG59IGZyb20gJy4vYWN0aW9ucy9tb3ZpZXMnO1xuaW1wb3J0IHtcbiAgTE9BRF9NT1ZJRVMsXG4gIEFERF9NT1ZJRSxcbiAgREVMRVRFX01PVklFLFxuICBVUERBVEVfTU9WSUUsXG4gIEdFVF9NT1ZJRV9CWV9JRCxcbn0gZnJvbSAnLi9hY3Rpb25zL3R5cGVzJztcblxuZnVuY3Rpb24qIGdldEFsbE1vdmllcyh7IGZpbHRlciwgc29ydCwgcXVlcnkgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vdmllcyA9IHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5mZXRjaE1vdmllcywgZmlsdGVyLCBzb3J0LCBxdWVyeSk7XG4gICAgeWllbGQgcHV0KGxvYWRNb3ZpZXNTdWNjZXNzKG1vdmllcy5kYXRhKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQobG9hZE1vdmllc0ZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGdldE1vdmllKHsgbW92aWVJZCB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbW92aWUgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuZ2V0TW92aWVCeUlkLCBtb3ZpZUlkKTtcbiAgICB5aWVsZCBwdXQoZ2V0TW92aWVTdWNjZXNzKG1vdmllKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoZ2V0TW92aWVGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5mdW5jdGlvbiogYWRkTW92aWUoeyBtb3ZpZSB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYWRkZWRNb3ZpZSA9IHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5hZGRNb3ZpZSwgbW92aWUpO1xuICAgIHlpZWxkIHB1dChhZGRNb3ZpZVN1Y2Nlc3MoYWRkZWRNb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGFkZE1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogdXBkYXRlTW92aWUoeyBtb3ZpZSB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLnVwZGF0ZU1vdmllLCBtb3ZpZSk7XG4gICAgeWllbGQgcHV0KHVwZGF0ZU1vdmllU3VjY2Vzcyhtb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KHVwZGF0ZU1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZGVsZXRlTW92aWUoeyBpZCB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmRlbGV0ZU1vdmllLCBpZCk7XG4gICAgeWllbGQgcHV0KGRlbGV0ZU1vdmllU3VjY2VzcyhpZCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGRlbGV0ZU1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogbW92aWVzU2FnYXMoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX01PVklFUywgZ2V0QWxsTW92aWVzKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KEFERF9NT1ZJRSwgYWRkTW92aWUpO1xuICB5aWVsZCB0YWtlRXZlcnkoVVBEQVRFX01PVklFLCB1cGRhdGVNb3ZpZSk7XG4gIHlpZWxkIHRha2VFdmVyeShERUxFVEVfTU9WSUUsIGRlbGV0ZU1vdmllKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KEdFVF9NT1ZJRV9CWV9JRCwgZ2V0TW92aWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtb3ZpZXNTYWdhcztcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcblxuaW1wb3J0IGhlYWRlclJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9oZWFkZXInO1xuaW1wb3J0IG1vdmllc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9tb3ZpZXMnO1xuaW1wb3J0IG1vdmllc1NhZ2FzIGZyb20gJy4vc2FnYXMnO1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICBjb21iaW5lUmVkdWNlcnMoeyBtb3ZpZXM6IG1vdmllc1JlZHVjZXIsIG1vdmllOiBoZWFkZXJSZWR1Y2VyIH0pLFxuICBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpXG4pO1xuc2FnYU1pZGRsZXdhcmUucnVuKG1vdmllc1NhZ2FzKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9