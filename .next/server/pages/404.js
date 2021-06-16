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
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies.module.scss */ "./src/components/body/movieList/movies.module.scss");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_movies_module_scss__WEBPACK_IMPORTED_MODULE_3__);





var MovieList = function MovieList(_ref) {
  var movies = _ref.movies;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.movieList
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
    onClose: onCloseEditDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    "aria-label": "close",
    onClick: onCloseEditDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default.a, null, "Edit Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['dialog-form-content']
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
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.movieCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/movies/".concat(movie === null || movie === void 0 ? void 0 : movie.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: movie === null || movie === void 0 ? void 0 : movie.poster_path,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.movieInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.infoFirstRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.title
  }, movie === null || movie === void 0 ? void 0 : movie.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.movieReleaseYear
  }, movie === null || movie === void 0 ? void 0 : (_movie$release_date = movie.release_date) === null || _movie$release_date === void 0 ? void 0 : _movie$release_date.split('-')[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.genre
  }, movie === null || movie === void 0 ? void 0 : (_movie$genres = movie.genres) === null || _movie$genres === void 0 ? void 0 : _movie$genres.join(', '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.cardMenuIcon,
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
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoFooter,
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
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.movieDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: movie === null || movie === void 0 ? void 0 : movie.poster_path,
    alt: "",
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.poster
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.firstRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title
  }, movie === null || movie === void 0 ? void 0 : movie.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rating
  }, movie === null || movie === void 0 ? void 0 : movie.vote_average)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tagline
  }, movie === null || movie === void 0 ? void 0 : movie.tagline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.thirdRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.releaseDate
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
	"movieDetails": "movieDetails_movieDetails__2FoKA",
	"poster": "movieDetails_poster__1EdVn",
	"info": "movieDetails_info__2zPd9",
	"firstRow": "movieDetails_firstRow__1EClC",
	"title": "movieDetails_title__Ohp-j",
	"rating": "movieDetails_rating__kJqlK",
	"thirdRow": "movieDetails_thirdRow__1Z1_W",
	"releaseDate": "movieDetails_releaseDate__2RX1G",
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
    id: _searchBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchInput,
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
	"searchInput": "searchBar_searchInput__3XuBN"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib2R5L0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9HZW5yZXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9Nb3ZpZXNTb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9ib2R5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvRGVsZXRlTW92aWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvTW92aWVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L1VwZGF0ZU1vdmllRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllQ2FyZC9Nb3ZpZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvbW92aWVDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvRXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9BZGRNb3ZpZURpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvTW92aWVEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vdmllRGV0YWlscy9tb3ZpZURldGFpbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9zZWFyY2hCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VTZXNzaW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnZW5vdGZvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9Nb3ZpZXNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvbW92aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zYWdhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiQm9keSIsIm1vdmllcyIsImxvYWRNb3ZpZXMiLCJ1c2VTZXNzaW9uU3RvcmFnZSIsImN1cnJlbnRGaWx0ZXIiLCJzZXRDdXJyZW50RmlsdGVyIiwiY3VycmVudFNvcnQiLCJzZXRDdXJyZW50U29ydCIsInNlYXJjaFF1ZXJ5IiwidXNlTG9jYXRpb24iLCJzZWFyY2giLCJxdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsInVzZUVmZmVjdCIsIm9uRmlsdGVyQ2xpY2siLCJnZW5yZSIsIm9uU29ydENoYW5nZSIsInNvcnQiLCJzdHlsZXMiLCJib2R5Iiwic3VibWVudSIsImxlbmd0aCIsIm5vTW92aWVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwiaWQiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwidGl0bGUiLCJzdHJpbmciLCJwb3N0ZXJfcGF0aCIsInJlbGVhc2VfZGF0ZSIsImdlbnJlcyIsInZvdGVfYXZlcmFnZSIsInRhZ2xpbmUiLCJ2b3RlX2NvdW50Iiwib3ZlcnZpZXciLCJidWRnZXQiLCJyZXZlbnVlIiwicnVudGltZSIsImZ1bmMiLCJHZW5yZXNGaWx0ZXIiLCJzZWxlY3RlZEZpbHRlciIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImdlbnJlc0ZpbHRlciIsIm1hcCIsIml0ZW0iLCJNb3ZpZXNTb3J0ZXIiLCJzZWxlY3RlZFNvcnQiLCJzb3J0Rm9ybSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiLCJEZWxldGVNb3ZpZURpYWxvZyIsIm9wZW4iLCJtb3ZpZUlkIiwib25DbG9zZSIsIm9uRGVsZXRlIiwib25DbG9zZURlbGV0ZURpYWxvZyIsImJvb2wiLCJNb3ZpZUxpc3QiLCJtb3ZpZUxpc3QiLCJtb3ZpZSIsIlVwZGF0ZU1vdmllRGlhbG9nIiwib25VcGRhdGUiLCJzZXRHZW5yZXMiLCJvbkNsb3NlRWRpdERpYWxvZyIsIm9uQ2hhbmdlR2VucmVzIiwic2V0RmllbGRWYWx1ZSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwidmFsdWVzIiwib25TdWJtaXQiLCJmaWVsZHMiLCJjb2xvciIsIk1PVklFX0ZJRUxEUyIsIlRJVExFIiwiUkVMRUFTRV9EQVRFIiwiUE9TVEVSX1BBVEgiLCJHRU5SRVMiLCJnZW5yZXNBcnJheSIsIk9WRVJWSUVXIiwiUlVOVElNRSIsInVybCIsIk1vdmllQ2FyZCIsInVwZGF0ZU1vdmllIiwiZGVsZXRlTW92aWUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJvcGVuRWRpdCIsInNldE9wZW5FZGl0IiwiaGFuZGxlQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwib25FZGl0TWVudUl0ZW1DbGljayIsIm9uRGVsZXRlTWVudUl0ZW1DbGljayIsIm9uRGVsZXRlTW92aWUiLCJvblVwZGF0ZU1vdmllIiwibSIsIm1vdmllQ2FyZCIsIm1vdmllSW5mbyIsImluZm9GaXJzdFJvdyIsIm1vdmllUmVsZWFzZVllYXIiLCJzcGxpdCIsImpvaW4iLCJjYXJkTWVudUljb24iLCJCb29sZWFuIiwieXVwIiwicmVxdWlyZWQiLCJtaW4iLCJFcnJvckJvdW5kYXJ5IiwicHJvcHMiLCJoYXNFcnJvciIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiUGFnZU5vdEZvdW5kIiwiZXJyb3JQYWdlIiwibG9nbyIsImVycm9yQ29udGVudCIsImVycm9yIiwiaG9tZUxpbmsiLCJGb290ZXIiLCJmb290ZXIiLCJsb2dvRm9vdGVyIiwiQWRkTW92aWVEaWFsb2ciLCJvbkFkZCIsIm9uQ2xvc2VBZGREaWFsb2ciLCJoYW5kbGVTdWJtaXQiLCJIZWFkZXIiLCJhZGRNb3ZpZSIsIm9wZW5BZGQiLCJzZXRPcGVuQWRkIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJpc1NlcnZlciIsIm9uQWRkTW92aWVDbGljayIsIm9uQWRkTW92aWUiLCJoZWFkZXIiLCJzdWJoZWFkZXIiLCJwdXNoIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsIk1vdmllRGV0YWlscyIsImdldE1vdmllIiwidXNlUGFyYW1zIiwiTnVtYmVyIiwibW92aWVEZXRhaWxzIiwicG9zdGVyIiwiaW5mbyIsImZpcnN0Um93IiwicmF0aW5nIiwidGhpcmRSb3ciLCJyZWxlYXNlRGF0ZSIsImRlZmF1bHRQcm9wcyIsIlNlYXJjaEJhciIsIm9uU2VhcmNoTW92aWVzIiwic2VhcmNoQmFyIiwic2VhcmNoSW5wdXQiLCJMYXlvdXQiLCJtYWlubGF5b3V0Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwiYXJyYXkiLCJzdG9yYWdlS2V5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRWYWx1ZSIsInNldEl0ZW0iLCJBcHAiLCJzdG9yZSIsIk1vdmllc1NlcnZpY2UiLCJmaWx0ZXIiLCJmZXRjaCIsImJ1aWxkVXJsIiwidGhlbiIsInJlcyIsImpzb24iLCJhcGlVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJHRVRfTU9WSUVfQllfSUQiLCJnZXRNb3ZpZVN1Y2Nlc3MiLCJHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyIsImdldE1vdmllRmFpbCIsIm1lc3NhZ2UiLCJHRVRfTU9WSUVfQllfSURfRkFJTCIsIkxPQURfTU9WSUVTIiwibG9hZE1vdmllc1N1Y2Nlc3MiLCJMT0FEX01PVklFU19TVUNDQ0VTUyIsImxvYWRNb3ZpZXNGYWlsIiwiTE9BRF9NT1ZJRVNfRkFJTCIsIkFERF9NT1ZJRSIsImFkZE1vdmllU3VjY2VzcyIsIkFERF9NT1ZJRV9TVUNDRVNTIiwiYWRkTW92aWVGYWlsIiwiQUREX01PVklFX0ZBSUwiLCJVUERBVEVfTU9WSUUiLCJ1cGRhdGVNb3ZpZVN1Y2Nlc3MiLCJVUERBVEVfTU9WSUVfU1VDQ0VTUyIsInVwZGF0ZU1vdmllRmFpbCIsIlVQREFURV9NT1ZJRV9GQUlMIiwiREVMRVRFX01PVklFIiwiZGVsZXRlTW92aWVTdWNjZXNzIiwiREVMRVRFX01PVklFX1NVQ0NFU1MiLCJkZWxldGVNb3ZpZUZhaWwiLCJERUxFVEVfTU9WSUVfRkFJTCIsImhlYWRlclJlZHVjZXIiLCJhY3Rpb24iLCJtb3ZpZXNSZWR1Y2VyIiwiZ2V0QWxsTW92aWVzIiwibW92aWVzU2FnYXMiLCJjYWxsIiwiZmV0Y2hNb3ZpZXMiLCJwdXQiLCJkYXRhIiwiZ2V0TW92aWVCeUlkIiwiYWRkZWRNb3ZpZSIsInRha2VFdmVyeSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNUSxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLElBQU1yRCxLQUFLLEdBQUdzRCx5REFBVyxDQUN2QkMsNkRBQWUsQ0FBQztBQUFFN08sUUFBTSxFQUFFZ08sd0RBQVY7QUFBeUIxSixPQUFLLEVBQUV3Six3REFBYUE7QUFBN0MsQ0FBRCxDQURRLEVBRXZCZ0IsNkRBQWUsQ0FBQ0osY0FBRCxDQUZRLENBQXpCO0FBSUFBLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQmIsOENBQW5CO0FBRWU1QyxvRUFBZixFOzs7Ozs7Ozs7OztBQ2RBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzLzQwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzLzQwNC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHVzZVNlc3Npb25TdG9yYWdlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVNlc3Npb25TdG9yYWdlJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uL2Vycm9yL0Vycm9yQm91bmRhcnknO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYm9keS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgR2VucmVzRmlsdGVyIGZyb20gJy4vR2VucmVzRmlsdGVyJztcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9tb3ZpZUxpc3QvTW92aWVMaXN0JztcbmltcG9ydCBNb3ZpZXNTb3J0ZXIgZnJvbSAnLi9Nb3ZpZXNTb3J0ZXInO1xuXG5jb25zdCBCb2R5ID0gKHsgbW92aWVzLCBsb2FkTW92aWVzIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRGaWx0ZXIsIHNldEN1cnJlbnRGaWx0ZXJdID0gdXNlU2Vzc2lvblN0b3JhZ2UoJ2ZpbHRlcicpO1xuICBjb25zdCBbY3VycmVudFNvcnQsIHNldEN1cnJlbnRTb3J0XSA9IHVzZVNlc3Npb25TdG9yYWdlKCdzb3J0Jyk7XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdXNlTG9jYXRpb24oKS5zZWFyY2g7XG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hRdWVyeSkuZ2V0KCdzZWFyY2gnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRNb3ZpZXMoY3VycmVudEZpbHRlciwgY3VycmVudFNvcnQsIHF1ZXJ5KTtcbiAgfSwgW2N1cnJlbnRGaWx0ZXIsIGN1cnJlbnRTb3J0LCBxdWVyeSwgbG9hZE1vdmllc10pO1xuXG4gIGNvbnN0IG9uRmlsdGVyQ2xpY2sgPSAoZ2VucmUpID0+IHtcbiAgICBzZXRDdXJyZW50RmlsdGVyKGdlbnJlKTtcbiAgfTtcblxuICBjb25zdCBvblNvcnRDaGFuZ2UgPSAoc29ydCkgPT4ge1xuICAgIHNldEN1cnJlbnRTb3J0KHNvcnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fSBmaXhlZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWVudX0+XG4gICAgICAgIDxHZW5yZXNGaWx0ZXIgb25GaWx0ZXJDbGljaz17b25GaWx0ZXJDbGlja30gc2VsZWN0ZWRGaWx0ZXI9e2N1cnJlbnRGaWx0ZXJ9IC8+XG4gICAgICAgIDxNb3ZpZXNTb3J0ZXIgb25Tb3J0Q2hhbmdlPXtvblNvcnRDaGFuZ2V9IHNlbGVjdGVkU29ydD17Y3VycmVudFNvcnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0PlxuICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9tb3ZpZXNcIiAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZXNcIj5cbiAgICAgICAgICB7IW1vdmllcz8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm9Nb3ZpZXN9Pk5vIE1vdmllcyBGb3VuZDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e21vdmllc30gLz5cbiAgICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIj5cbiAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvcGFnZW5vdGZvdW5kXCIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQm9keS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pLFxuICApLmlzUmVxdWlyZWQsXG4gIGxvYWRNb3ZpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYm9keS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IGdlbnJlcyA9IFsnQWxsJywgJ0FkdmVudHVyZScsICdDb21lZHknLCAnRHJhbWEnLCAnRmFudGFzeSddO1xuXG5jb25zdCBHZW5yZXNGaWx0ZXIgPSAoeyBvbkZpbHRlckNsaWNrLCBzZWxlY3RlZEZpbHRlciB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoc2VsZWN0ZWRGaWx0ZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZXNGaWx0ZXJ9PlxuICAgICAge2dlbnJlcy5tYXAoKGdlbnJlKSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2dlbnJlfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uRmlsdGVyQ2xpY2soZ2VucmUpO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoZ2VucmUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkdlbnJlc0ZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIG9uRmlsdGVyQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkRmlsdGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZW5yZXNGaWx0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ib2R5Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVzU29ydGVyID0gKHsgb25Tb3J0Q2hhbmdlLCBzZWxlY3RlZFNvcnQgfSkgPT4ge1xuICBpZiAoIXNlbGVjdGVkU29ydCkge1xuICAgIG9uU29ydENoYW5nZSgncmVsZWFzZV9kYXRlJyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvcnR9PlxuICAgICAgPHA+U29ydCBieSA8L3A+XG4gICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZXMuc29ydEZvcm19PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbGFiZWxJZD1cInNpbXBsZS1zZWxlY3RcIlxuICAgICAgICAgIGlkPVwic2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWxlY3RlZFNvcnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25Tb3J0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJ2b3RlX2F2ZXJhZ2VcIj5SYXRpbmc8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInJlbGVhc2VfZGF0ZVwiPlJlbGVhc2UgZGF0ZTwvTWVudUl0ZW0+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllc1NvcnRlci5wcm9wVHlwZXMgPSB7XG4gIG9uU29ydENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRTb3J0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNTb3J0ZXI7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib2R5XCI6IFwiYm9keV9ib2R5X18xU3I3Y1wiLFxuXHRcInN1Ym1lbnVcIjogXCJib2R5X3N1Ym1lbnVfXzNfY3p2XCIsXG5cdFwic29ydFwiOiBcImJvZHlfc29ydF9fMlFmWi1cIixcblx0XCJNdWlGb3JtQ29udHJvbC1yb290XCI6IFwiYm9keV9NdWlGb3JtQ29udHJvbC1yb290X18yTTRVQlwiLFxuXHRcInNvcnRGb3JtXCI6IFwiYm9keV9zb3J0Rm9ybV9fMTlTU3dcIixcblx0XCJNdWlTZWxlY3Qtc2VsZWN0XCI6IFwiYm9keV9NdWlTZWxlY3Qtc2VsZWN0X19IYWx4SVwiLFxuXHRcIk11aVNlbGVjdC1pY29uXCI6IFwiYm9keV9NdWlTZWxlY3QtaWNvbl9fVkc4bTVcIixcblx0XCJNdWlJbnB1dC11bmRlcmxpbmVcIjogXCJib2R5X011aUlucHV0LXVuZGVybGluZV9fMWdSRTJcIixcblx0XCJnZW5yZXNGaWx0ZXJcIjogXCJib2R5X2dlbnJlc0ZpbHRlcl9fMWsyTHFcIixcblx0XCJpdGVtXCI6IFwiYm9keV9pdGVtX18xc0QxQ1wiLFxuXHRcImFjdGl2ZVwiOiBcImJvZHlfYWN0aXZlX19yMHF0dVwiLFxuXHRcIm1vdmllcy1jb3VudGVyXCI6IFwiYm9keV9tb3ZpZXMtY291bnRlcl9feGU0d21cIixcblx0XCJub01vdmllc1wiOiBcImJvZHlfbm9Nb3ZpZXNfXzJUMVA1XCJcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBsb2FkTW92aWVzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9tb3ZpZXMnO1xuXG5pbXBvcnQgQm9keSBmcm9tICcuL0JvZHknO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7IG1vdmllczogc3RhdGUubW92aWVzIH0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRNb3ZpZXMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb2R5KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRGVsZXRlTW92aWVEaWFsb2cgPSAoeyBvcGVuLCBtb3ZpZUlkLCBvbkNsb3NlLCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGNvbnN0IG9uQ2xvc2VEZWxldGVEaWFsb2cgPSAoKSA9PiB7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgZGlzYWJsZUJhY2tkcm9wQ2xpY2tcbiAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duXG4gICAgICBvcGVuPXtvcGVufVxuICAgICAgb25DbG9zZT17b25DbG9zZURlbGV0ZURpYWxvZ31cbiAgICAgIG1heFdpZHRoPVwibGdcIlxuICAgID5cbiAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VEZWxldGVEaWFsb2d9PlxuICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj5EZWxldGUgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwiZGlhbG9nLWZvcm0tY29udGVudFwiPlxuICAgICAgICA8RGlhbG9nQ29udGVudFRleHQgaWQ9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbW92aWU/XG4gICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShtb3ZpZUlkKX0gY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgQ29uZmlybVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn07XG5cbkRlbGV0ZU1vdmllRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1vdmllSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZU1vdmllRGlhbG9nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL21vdmllQ2FyZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVMaXN0ID0gKHsgbW92aWVzIH0pID0+IChcbiAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1vdmllTGlzdH0+XG4gICAge21vdmllcz8ubWFwKChtb3ZpZSkgPT4gKFxuICAgICAgPE1vdmllQ2FyZCBrZXk9e21vdmllPy5pZH0gbW92aWU9e21vdmllfSAvPlxuICAgICkpfVxuICA8L3VsPlxuKTtcblxuTW92aWVMaXN0LnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBwb3N0ZXJfcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgfSksXG4gICkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrUHJvdmlkZXIsIEVycm9yTWVzc2FnZSwgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdlbnJlc0FycmF5LCB2YWxpZGF0aW9uU2NoZW1hLCBNT1ZJRV9GSUVMRFMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgVXBkYXRlTW92aWVEaWFsb2cgPSAoeyBtb3ZpZSwgb3Blbiwgb25VcGRhdGUsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbZ2VucmVzLCBzZXRHZW5yZXNdID0gdXNlU3RhdGUobW92aWU/LmdlbnJlcyB8fCBbXSk7XG4gIGNvbnN0IG9uQ2xvc2VFZGl0RGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUdlbnJlcyA9ICh2YWx1ZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIHNldEdlbnJlcyh2YWx1ZSk7XG4gICAgc2V0RmllbGRWYWx1ZSgnZ2VucmVzJywgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgaWQ6IG1vdmllPy5pZCxcbiAgICAgIHRpdGxlOiBtb3ZpZT8udGl0bGUsXG4gICAgICByZWxlYXNlX2RhdGU6IG1vdmllPy5yZWxlYXNlX2RhdGUsXG4gICAgICBwb3N0ZXJfcGF0aDogbW92aWU/LnBvc3Rlcl9wYXRoLFxuICAgICAgb3ZlcnZpZXc6IG1vdmllPy5vdmVydmlldyxcbiAgICAgIHJ1bnRpbWU6IG1vdmllPy5ydW50aW1lLFxuICAgICAgZ2VucmVzLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIG9uU3VibWl0OiAoZmllbGRzKSA9PiB7XG4gICAgICBvblVwZGF0ZShmaWVsZHMpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1Byb3ZpZGVyIHZhbHVlPXtmb3JtaWt9PlxuICAgICAgPERpYWxvZyBkaXNhYmxlRXNjYXBlS2V5RG93biBvcGVuPXtvcGVufSBvbkNsb3NlPXtvbkNsb3NlRWRpdERpYWxvZ30+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VFZGl0RGlhbG9nfT5cbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlPkVkaXQgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17c3R5bGVzWydkaWFsb2ctZm9ybS1jb250ZW50J119PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5Nb3ZpZSBJRDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgIHttb3ZpZT8uaWR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PlRpdGxlPC9wPlxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfSAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9IGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImVycm9yXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+UmVsZWFzZSBEYXRlPC9wPlxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9e01PVklFX0ZJRUxEUy5SRUxFQVNFX0RBVEV9IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQnXX0gLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX0gY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiZXJyb3JcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5Nb3ZpZSBVUkw8L3A+XG4gICAgICAgICAgICA8RmllbGQgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119IC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH0gY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiZXJyb3JcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5HZW5yZTwvcD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgICB2YWx1ZT17Z2VucmVzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZUdlbnJlcyhldmVudC50YXJnZXQudmFsdWUsIGZvcm1pay5zZXRGaWVsZFZhbHVlKX1cbiAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dlbnJlc0FycmF5Lm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtnZW5yZX0gdmFsdWU9e2dlbnJlfT5cbiAgICAgICAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJlcnJvclwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119Pk92ZXJ2aWV3PC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJlbXB0eSB0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9IGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImVycm9yXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+UnVudGltZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX0gdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119IC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9e01PVklFX0ZJRUxEUy5SVU5USU1FfSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJlcnJvclwiIC8+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlRWRpdERpYWxvZ30gY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9Gb3JtaWtQcm92aWRlcj5cbiAgKTtcbn07XG5cblVwZGF0ZU1vdmllRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uVXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlTW92aWVEaWFsb2c7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBEZWxldGVNb3ZpZURpYWxvZyBmcm9tICcuLi9EZWxldGVNb3ZpZURpYWxvZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL21vdmllcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVXBkYXRlTW92aWVEaWFsb2cgZnJvbSAnLi4vVXBkYXRlTW92aWVEaWFsb2cnO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSAoeyBtb3ZpZSwgdXBkYXRlTW92aWUsIGRlbGV0ZU1vdmllIH0pID0+IHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29wZW5EZWxldGUsIHNldE9wZW5EZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbkVkaXQsIHNldE9wZW5FZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZS5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICBjb25zdCBvbkVkaXRNZW51SXRlbUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgc2V0T3BlbkVkaXQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGVNZW51SXRlbUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgc2V0T3BlbkRlbGV0ZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZU1vdmllID0gKG1vdmllSWQpID0+IHtcbiAgICBkZWxldGVNb3ZpZShtb3ZpZUlkKTtcbiAgICBzZXRPcGVuRGVsZXRlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZU1vdmllID0gKG0pID0+IHtcbiAgICB1cGRhdGVNb3ZpZShtKTtcbiAgICBzZXRPcGVuRWRpdChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVDYXJkfT5cbiAgICAgIDxMaW5rIHRvPXtgL21vdmllcy8ke21vdmllPy5pZH1gfT5cbiAgICAgICAgPGltZyBzcmM9e21vdmllPy5wb3N0ZXJfcGF0aH0gYWx0PVwiXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVJbmZvfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvRmlyc3RSb3d9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bW92aWU/LnRpdGxlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZVJlbGVhc2VZZWFyfT57bW92aWU/LnJlbGVhc2VfZGF0ZT8uc3BsaXQoJy0nKVswXX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZX0+e21vdmllPy5nZW5yZXM/LmpvaW4oJywgJyl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkTWVudUljb259XG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxNZW51IGlkPVwic2ltcGxlLW1lbnVcIiBhbmNob3JFbD17YW5jaG9yRWx9IGtlZXBNb3VudGVkIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtvbkVkaXRNZW51SXRlbUNsaWNrfSBjbGFzc05hbWU9XCJjYXJkLW1lbnUtaXRlbVwiPlxuICAgICAgICAgIGVkaXRcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e29uRGVsZXRlTWVudUl0ZW1DbGlja30gY2xhc3NOYW1lPVwiY2FyZC1tZW51LWl0ZW1cIj5cbiAgICAgICAgICBkZWxldGVcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPFVwZGF0ZU1vdmllRGlhbG9nIG9wZW49e29wZW5FZGl0fSBtb3ZpZT17bW92aWV9IG9uVXBkYXRlPXtvblVwZGF0ZU1vdmllfSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuRWRpdChmYWxzZSl9IC8+XG4gICAgICAgIDxEZWxldGVNb3ZpZURpYWxvZ1xuICAgICAgICAgIG9wZW49e29wZW5EZWxldGV9XG4gICAgICAgICAgbW92aWVJZD17bW92aWU/LmlkfVxuICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZU1vdmllfVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW5EZWxldGUoZmFsc2UpfVxuICAgICAgICAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5Nb3ZpZUNhcmQucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KS5pc1JlcXVpcmVkLFxuICB1cGRhdGVNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGVsZXRlTW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBkZWxldGVNb3ZpZSwgdXBkYXRlTW92aWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21vdmllcyc7XG5cbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9Nb3ZpZUNhcmQnO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHVwZGF0ZU1vdmllLFxuICBkZWxldGVNb3ZpZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb3ZpZUNhcmQpO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW92aWVMaXN0XCI6IFwibW92aWVzX21vdmllTGlzdF9fMmprcGdcIixcblx0XCJtb3ZpZUNhcmRcIjogXCJtb3ZpZXNfbW92aWVDYXJkX18xZ2VQRlwiLFxuXHRcImNhcmRNZW51SWNvblwiOiBcIm1vdmllc19jYXJkTWVudUljb25fXzJSb05iXCIsXG5cdFwibW92aWVJbmZvXCI6IFwibW92aWVzX21vdmllSW5mb19fMXJOMXdcIixcblx0XCJ0aXRsZVwiOiBcIm1vdmllc190aXRsZV9fOHNvQXNcIixcblx0XCJpbmZvRmlyc3RSb3dcIjogXCJtb3ZpZXNfaW5mb0ZpcnN0Um93X18zbVhfRVwiLFxuXHRcIm1vdmllUmVsZWFzZVllYXJcIjogXCJtb3ZpZXNfbW92aWVSZWxlYXNlWWVhcl9fM014U29cIixcblx0XCJnZW5yZVwiOiBcIm1vdmllc19nZW5yZV9fMnk0dnBcIixcblx0XCJNdWlQYXBlci1yb290XCI6IFwibW92aWVzX011aVBhcGVyLXJvb3RfXzFBUWxtXCIsXG5cdFwiTXVpTWVudS1wYXBlclwiOiBcIm1vdmllc19NdWlNZW51LXBhcGVyX19vaGh4dVwiLFxuXHRcIk11aVBvcG92ZXItcGFwZXJcIjogXCJtb3ZpZXNfTXVpUG9wb3Zlci1wYXBlcl9fMlp1ME1cIixcblx0XCJNdWlCdXR0b25CYXNlLXJvb3RcIjogXCJtb3ZpZXNfTXVpQnV0dG9uQmFzZS1yb290X19abk4tM1wiLFxuXHRcIk11aUxpc3RJdGVtLXJvb3RcIjogXCJtb3ZpZXNfTXVpTGlzdEl0ZW0tcm9vdF9fM3pLSnBcIixcblx0XCJNdWlNZW51SXRlbS1yb290XCI6IFwibW92aWVzX011aU1lbnVJdGVtLXJvb3RfXzFxM0U0XCIsXG5cdFwiY2FyZC1tZW51LWl0ZW1cIjogXCJtb3ZpZXNfY2FyZC1tZW51LWl0ZW1fXzNudVdpXCIsXG5cdFwiTXVpRGlhbG9nLXBhcGVyXCI6IFwibW92aWVzX011aURpYWxvZy1wYXBlcl9fc3ZQZVFcIixcblx0XCJNdWlJbnB1dC11bmRlcmxpbmVcIjogXCJtb3ZpZXNfTXVpSW5wdXQtdW5kZXJsaW5lX18xd09VOFwiLFxuXHRcImRpYWxvZy1mb3JtLWNvbnRlbnRcIjogXCJtb3ZpZXNfZGlhbG9nLWZvcm0tY29udGVudF9fMWlLZjZcIixcblx0XCJlZGl0LWZpZWxkLW5hbWVcIjogXCJtb3ZpZXNfZWRpdC1maWVsZC1uYW1lX18ybVQybFwiLFxuXHRcImVkaXQtZmllbGRcIjogXCJtb3ZpZXNfZWRpdC1maWVsZF9fMkRpTU9cIixcblx0XCJNdWlTZWxlY3QtaWNvblwiOiBcIm1vdmllc19NdWlTZWxlY3QtaWNvbl9fdVhKVm1cIixcblx0XCJlcnJvclwiOiBcIm1vdmllc19lcnJvcl9fMTZXQmtcIixcblx0XCJNdWlJY29uQnV0dG9uLXJvb3RcIjogXCJtb3ZpZXNfTXVpSWNvbkJ1dHRvbi1yb290X18yM0NDR1wiLFxuXHRcIk11aVR5cG9ncmFwaHktaDZcIjogXCJtb3ZpZXNfTXVpVHlwb2dyYXBoeS1oNl9fSVZPSTVcIixcblx0XCJNdWlUeXBvZ3JhcGh5LWNvbG9yVGV4dFNlY29uZGFyeVwiOiBcIm1vdmllc19NdWlUeXBvZ3JhcGh5LWNvbG9yVGV4dFNlY29uZGFyeV9fMVZMMVJcIixcblx0XCJNdWlEaWFsb2dBY3Rpb25zLXNwYWNpbmdcIjogXCJtb3ZpZXNfTXVpRGlhbG9nQWN0aW9ucy1zcGFjaW5nX18xdTBVcVwiLFxuXHRcIk11aUJ1dHRvbi10ZXh0UHJpbWFyeVwiOiBcIm1vdmllc19NdWlCdXR0b24tdGV4dFByaW1hcnlfX0o1UnlQXCIsXG5cdFwiTXVpQnV0dG9uLXRleHRTZWNvbmRhcnlcIjogXCJtb3ZpZXNfTXVpQnV0dG9uLXRleHRTZWNvbmRhcnlfXzJtZ1ZJXCJcbn07XG4iLCJpbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcblxuZXhwb3J0IGNvbnN0IE1PVklFX0ZJRUxEUyA9IHtcbiAgVElUTEU6ICd0aXRsZScsXG4gIFJFTEVBU0VfREFURTogJ3JlbGVhc2VfZGF0ZScsXG4gIFBPU1RFUl9QQVRIOiAncG9zdGVyX3BhdGgnLFxuICBHRU5SRVM6ICdnZW5yZXMnLFxuICBPVkVSVklFVzogJ292ZXJ2aWV3JyxcbiAgUlVOVElNRTogJ3J1bnRpbWUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdlbnJlc0FycmF5ID0gW1xuICAnQWN0aW9uJyxcbiAgJ0FkdmVudHVyZScsXG4gICdBbmltYXRpb24nLFxuICAnQ29tZWR5JyxcbiAgJ0RyYW1hJyxcbiAgJ0ZhbWlseScsXG4gICdGYW50YXN5JyxcbiAgJ1NjaWVuY2UgRmljdGlvbicsXG5dO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xuICB0aXRsZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdUaXRsZSBpcyByZXF1aXJlZCcpLFxuICBwb3N0ZXJfcGF0aDogeXVwLnN0cmluZygpLnVybCgpLnJlcXVpcmVkKCdQb3N0ZXIgdXJsIGlzIHJlcXVpcmVkJyksXG4gIHJlbGVhc2VfZGF0ZTogeXVwLnN0cmluZygpLFxuICBvdmVydmlldzogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdPdmVydmlldyBpcyByZXF1aXJlZCcpLFxuICBydW50aW1lOiB5dXAubnVtYmVyKCkucmVxdWlyZWQoJ1J1bnRpbWUgaXMgcmVxdWlyZWQnKSxcbiAgZ2VucmVzOiB5dXAuYXJyYXkoKS5taW4oMSkucmVxdWlyZWQoJ01pbmltdW0gb25lIGdlbnJlIHNob3VsZCBiZSBzZWxlY3RlZCcpLFxufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKCkge1xuICAgIHJldHVybiB7IGhhc0Vycm9yOiB0cnVlIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaCgpIHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nICg8L2gxPjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvRm9vdGVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vycm9yLm1vZHVsZS5zY3NzJztcblxuY29uc3QgUGFnZU5vdEZvdW5kID0gKCkgPT4gKFxuICA8PlxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JQYWdlfSBmaXhlZD5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvckNvbnRlbnR9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+UGFnZSBOb3QgRm91bmQ8L3A+XG4gICAgICAgIDxMaW5rIHRvPVwiL21vdmllc1wiIGNsYXNzTmFtZT17c3R5bGVzLmhvbWVMaW5rfSB0aXRsZT1cImxpbmtUb0hvbWVcIj5cbiAgICAgICAgICBHbyBCYWNrIFRvIEhvbWVcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICAgPEZvb3RlciAvPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVycm9yUGFnZVwiOiBcImVycm9yX2Vycm9yUGFnZV9fM0FXeW9cIixcblx0XCJsb2dvXCI6IFwiZXJyb3JfbG9nb19fbUl6MG1cIixcblx0XCJlcnJvckNvbnRlbnRcIjogXCJlcnJvcl9lcnJvckNvbnRlbnRfXzF2NkZrXCIsXG5cdFwiZXJyb3JcIjogXCJlcnJvcl9lcnJvcl9fMnVwT2pcIixcblx0XCJob21lTGlua1wiOiBcImVycm9yX2hvbWVMaW5rX18zb1dHM1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0gZml4ZWQ+XG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0Zvb3Rlcn0gYWx0PVwibG9nb1wiIC8+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX2Zvb3Rlcl9fMmpfRnJcIixcblx0XCJsb2dvRm9vdGVyXCI6IFwiZm9vdGVyX2xvZ29Gb290ZXJfXzJqSzhlXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IHsgRmllbGQsIEZvcm0sIEZvcm1pa1Byb3ZpZGVyLCBFcnJvck1lc3NhZ2UsIHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZW5yZXNBcnJheSwgdmFsaWRhdGlvblNjaGVtYSwgTU9WSUVfRklFTERTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgQWRkTW92aWVEaWFsb2cgPSAoeyBvcGVuLCBvbkFkZCwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtnZW5yZXMsIHNldEdlbnJlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgb25DbG9zZUFkZERpYWxvZyA9ICgpID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VHZW5yZXMgPSAodmFsdWUsIHNldEZpZWxkVmFsdWUpID0+IHtcbiAgICBzZXRHZW5yZXModmFsdWUpO1xuICAgIHNldEZpZWxkVmFsdWUoJ2dlbnJlcycsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHJlbGVhc2VfZGF0ZTogJycsXG4gICAgICBwb3N0ZXJfcGF0aDogJycsXG4gICAgICBnZW5yZXMsXG4gICAgICBvdmVydmlldzogJycsXG4gICAgICBydW50aW1lOiAnJyxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWEsXG4gICAgdmFsdWVzOiB7XG4gICAgICBnZW5yZXMsXG4gICAgfSxcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xuICAgICAgb25BZGQodmFsdWVzKTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtaWtQcm92aWRlciB2YWx1ZT17Zm9ybWlrfT5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgZGlzYWJsZUJhY2tkcm9wQ2xpY2tcbiAgICAgICAgZGlzYWJsZUVzY2FwZUtleURvd25cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17b25DbG9zZUFkZERpYWxvZ31cbiAgICAgID5cbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNsb3NlXCIgb25DbGljaz17b25DbG9zZUFkZERpYWxvZ30+XG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxGb3JtIHRpdGxlPVwiYWRkLW1vdmllXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPkFkZCBNb3ZpZTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwiZGlhbG9nLWZvcm0tY29udGVudFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+VGl0bGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW92aWUgVGl0bGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlRJVExFfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+UmVsZWFzZSBEYXRlPC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgRGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInJlbGVhc2VfZGF0ZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwicmVsZWFzZV9kYXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SRUxFQVNFX0RBVEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5Nb3ZpZSBVUkw8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUE9TVEVSX1BBVEh9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW92aWUgVVJMIGhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJwb3N0ZXJfcGF0aFwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwicG9zdGVyX3BhdGhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+R2VucmU8L3A+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLkdFTlJFU31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtnZW5yZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VHZW5yZXMoZXZlbnQudGFyZ2V0LnZhbHVlLCBmb3JtaWsuc2V0RmllbGRWYWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICB0aXRsZT1cImdlbnJlc1wiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZ2VucmVzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dlbnJlc0FycmF5Lm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtnZW5yZX0gdmFsdWU9e2dlbnJlfT5cbiAgICAgICAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+T3ZlcnZpZXc8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5PVkVSVklFV31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPdmVydmlldyBIZXJlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwib3ZlcnZpZXdcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm92ZXJ2aWV3XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5PVkVSVklFV31cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPlJ1bnRpbWU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SVU5USU1FfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJ1bnRpbWUgSGVyZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInJ1bnRpbWVcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInJ1bnRpbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlQWRkRGlhbG9nfVxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicmVzZXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInN1Ym1pdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L0Zvcm1pa1Byb3ZpZGVyPlxuICApO1xufTtcblxuQWRkTW92aWVEaWFsb2cucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkFkZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE1vdmllRGlhbG9nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEFkZE1vdmllRGlhbG9nIGZyb20gJy4vQWRkTW92aWVEaWFsb2cnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTW92aWVEZXRhaWxzIGZyb20gJy4vbW92aWVEZXRhaWxzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2hCYXIvU2VhcmNoQmFyJztcblxuY29uc3QgSGVhZGVyID0gKHsgYWRkTW92aWUgfSkgPT4ge1xuICBjb25zdCBbb3BlbkFkZCwgc2V0T3BlbkFkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5cbiAgY29uc3Qgb25BZGRNb3ZpZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW5BZGQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25BZGRNb3ZpZSA9IChtb3ZpZSkgPT4ge1xuICAgIGFkZE1vdmllKG1vdmllKTtcbiAgICBzZXRPcGVuQWRkKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0gZml4ZWQ+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZXMvOm1vdmllSWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YmhlYWRlcn0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnLycpfT5cbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gZm9udFNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzU2VydmVyID8gdXNlUm91dGVyKCkucGF0aG5hbWUuaW5jbHVkZXMoJ21vdmllSWQnKSA/IDxNb3ZpZURldGFpbHMgLz4gOiBudWxsIDogPE1vdmllRGV0YWlscyAvPn1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGlkPVwiYnV0dG9uLWFkZC1tb3ZpZVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtvbkFkZE1vdmllQ2xpY2t9PlxuICAgICAgICAgICAgICArIEFkZCBNb3ZpZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QWRkTW92aWVEaWFsb2cgb3Blbj17b3BlbkFkZH0gb25BZGQ9e29uQWRkTW92aWV9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5BZGQoZmFsc2UpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc1NlcnZlciA/IHVzZVJvdXRlcigpLnBhdGhuYW1lLmluY2x1ZGVzKCdtb3ZpZUlkJykgPyBudWxsIDogPFNlYXJjaEJhciAvPiA6IDxTZWFyY2hCYXIgLz59XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGFkZE1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyX2hlYWRlcl9fMnBMaVhcIixcblx0XCJzdWJoZWFkZXJcIjogXCJoZWFkZXJfc3ViaGVhZGVyX181V3c2MVwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fMjRmd0RcIixcblx0XCJidXR0b24tYWRkLW1vdmllXCI6IFwiaGVhZGVyX2J1dHRvbi1hZGQtbW92aWVfXzI4YzVaXCIsXG5cdFwiTXVpSWNvbkJ1dHRvbi1yb290XCI6IFwiaGVhZGVyX011aUljb25CdXR0b24tcm9vdF9fTWFFNXNcIlxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGFkZE1vdmllIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9tb3ZpZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBhZGRNb3ZpZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVEZXRhaWxzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVEZXRhaWxzID0gKHsgbW92aWUsIGdldE1vdmllIH0pID0+IHtcbiAgY29uc3QgeyBtb3ZpZUlkIH0gPSB1c2VQYXJhbXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1vdmllKE51bWJlcihtb3ZpZUlkKSk7XG4gIH0sIFttb3ZpZUlkLCBnZXRNb3ZpZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZURldGFpbHN9PlxuICAgICAgPGltZyBzcmM9e21vdmllPy5wb3N0ZXJfcGF0aH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMucG9zdGVyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maXJzdFJvd30+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bW92aWU/LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9Pnttb3ZpZT8udm90ZV9hdmVyYWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdsaW5lfT57bW92aWU/LnRhZ2xpbmV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGhpcmRSb3d9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsZWFzZURhdGV9Pnttb3ZpZT8ucmVsZWFzZV9kYXRlPy5zcGxpdCgnLScpWzBdfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucnVudGltZX0+e21vdmllPy5ydW50aW1lfSBtaW48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9Pnttb3ZpZT8ub3ZlcnZpZXd9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllRGV0YWlscy5kZWZhdWx0UHJvcHMgPSB7XG4gIG1vdmllOiBudWxsLFxufTtcblxuTW92aWVEZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGdldE1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVEZXRhaWxzO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0TW92aWUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2hlYWRlcic7XG5cbmltcG9ydCBNb3ZpZURldGFpbHMgZnJvbSAnLi9Nb3ZpZURldGFpbHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7IG1vdmllOiBzdGF0ZS5tb3ZpZSB9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRNb3ZpZSxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb3ZpZURldGFpbHMpO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW92aWVEZXRhaWxzXCI6IFwibW92aWVEZXRhaWxzX21vdmllRGV0YWlsc19fMkZvS0FcIixcblx0XCJwb3N0ZXJcIjogXCJtb3ZpZURldGFpbHNfcG9zdGVyX18xRWRWblwiLFxuXHRcImluZm9cIjogXCJtb3ZpZURldGFpbHNfaW5mb19fMnpQZDlcIixcblx0XCJmaXJzdFJvd1wiOiBcIm1vdmllRGV0YWlsc19maXJzdFJvd19fMUVDbENcIixcblx0XCJ0aXRsZVwiOiBcIm1vdmllRGV0YWlsc190aXRsZV9fT2hwLWpcIixcblx0XCJyYXRpbmdcIjogXCJtb3ZpZURldGFpbHNfcmF0aW5nX19rSnFsS1wiLFxuXHRcInRoaXJkUm93XCI6IFwibW92aWVEZXRhaWxzX3RoaXJkUm93X18xWjFfV1wiLFxuXHRcInJlbGVhc2VEYXRlXCI6IFwibW92aWVEZXRhaWxzX3JlbGVhc2VEYXRlX18yUlgxR1wiLFxuXHRcInJ1bnRpbWVcIjogXCJtb3ZpZURldGFpbHNfcnVudGltZV9fM2ViX2VcIixcblx0XCJkYXJrXCI6IFwibW92aWVEZXRhaWxzX2RhcmtfX3VGZE1GXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlYXJjaEJhci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBvblNlYXJjaE1vdmllcyA9IChxdWVyeSkgPT4ge1xuICAgIGhpc3RvcnkucHVzaChgL21vdmllcz9zZWFyY2g9JHtxdWVyeX1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQmFyfT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5maW5kIHlvdXIgbW92aWU8L3A+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXsoZmllbGRzKSA9PiB7XG4gICAgICAgICAgb25TZWFyY2hNb3ZpZXMoZmllbGRzLnF1ZXJ5KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPEZpZWxkIHR5cGU9XCJzZWFyY2hcIiB2YXJpYW50PVwiZmlsbGVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBpZD17c3R5bGVzLnNlYXJjaElucHV0fSBuYW1lPVwicXVlcnlcIiAvPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaEJhclwiOiBcInNlYXJjaEJhcl9zZWFyY2hCYXJfXzFNQ2E3XCIsXG5cdFwidGl0bGVcIjogXCJzZWFyY2hCYXJfdGl0bGVfXzJFLThJXCIsXG5cdFwic2VhcmNoSW5wdXRcIjogXCJzZWFyY2hCYXJfc2VhcmNoSW5wdXRfXzNYdUJOXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbmxheW91dH0+e2NoaWxkcmVufTwvZGl2PjtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWlubGF5b3V0XCI6IFwibGF5b3V0X21haW5sYXlvdXRfXzF1T0t2XCJcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VTZXNzaW9uU3RvcmFnZSA9IChzdG9yYWdlS2V5KSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocHJvY2Vzcy5icm93c2VyID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSA6IG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIHZhbHVlKTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgc3RvcmFnZUtleV0pO1xuXG4gIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlc3Npb25TdG9yYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZSwgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9ib2R5JztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhdGljUm91dGVyPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxQYWdlTm90Rm91bmQgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BhZ2Vub3Rmb3VuZFwiPlxuICAgICAgICAgICAgPFBhZ2VOb3RGb3VuZCAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICA8Qm9keSAvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiY2xhc3MgTW92aWVzU2VydmljZSB7XG4gIGFwaVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvbW92aWVzLyc7XG5cbiAgZmV0Y2hNb3ZpZXMgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT5cbiAgICBmZXRjaCh0aGlzLmJ1aWxkVXJsKGZpbHRlciwgc29ydCwgcXVlcnkpKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGdldE1vdmllQnlJZCA9IChtb3ZpZUlkKSA9PlxuICAgIGZldGNoKHRoaXMuYXBpVVJMICsgbW92aWVJZCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBhZGRNb3ZpZSA9IChtb3ZpZSkgPT5cbiAgICBmZXRjaCh0aGlzLmFwaVVSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobW92aWUpLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgdXBkYXRlTW92aWUgPSAobW92aWUpID0+XG4gICAgZmV0Y2godGhpcy5hcGlVUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobW92aWUpLFxuICAgIH0pO1xuXG4gIGRlbGV0ZU1vdmllID0gKGlkKSA9PiBmZXRjaCh0aGlzLmFwaVVSTCArIGlkLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG5cbiAgYnVpbGRVcmwgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT4ge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLmFwaVVSTH0/c29ydEJ5PSR7c29ydH0mc29ydE9yZGVyPWRlc2NgO1xuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9PSAnQWxsJykge1xuICAgICAgdXJsICs9IGA/ZmlsdGVyPSR7ZmlsdGVyfWA7XG4gICAgfVxuICAgIGlmIChxdWVyeSkge1xuICAgICAgdXJsICs9IGAmc2VhcmNoPSR7cXVlcnl9JnNlYXJjaEJ5PXRpdGxlYDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vdmllc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7XG4gIEdFVF9NT1ZJRV9CWV9JRCxcbiAgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MsXG4gIEdFVF9NT1ZJRV9CWV9JRF9GQUlMLFxufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllID0gKG1vdmllSWQpID0+ICh7XG4gIHR5cGU6IEdFVF9NT1ZJRV9CWV9JRCxcbiAgbW92aWVJZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVTdWNjZXNzID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBHRVRfTU9WSUVfQllfSURfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgTE9BRF9NT1ZJRVMsXG4gIEFERF9NT1ZJRSxcbiAgVVBEQVRFX01PVklFLFxuICBERUxFVEVfTU9WSUUsXG4gIExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBMT0FEX01PVklFU19GQUlMLFxuICBBRERfTU9WSUVfU1VDQ0VTUyxcbiAgQUREX01PVklFX0ZBSUwsXG4gIFVQREFURV9NT1ZJRV9TVUNDRVNTLFxuICBVUERBVEVfTU9WSUVfRkFJTCxcbiAgREVMRVRFX01PVklFX1NVQ0NFU1MsXG4gIERFTEVURV9NT1ZJRV9GQUlMLFxufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGxvYWRNb3ZpZXMgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT4gKHtcbiAgdHlwZTogTE9BRF9NT1ZJRVMsXG4gIGZpbHRlcixcbiAgc29ydCxcbiAgcXVlcnksXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvYWRNb3ZpZXNTdWNjZXNzID0gKG1vdmllcykgPT4gKHtcbiAgdHlwZTogTE9BRF9NT1ZJRVNfU1VDQ0NFU1MsXG4gIG1vdmllcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9hZE1vdmllc0ZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogTE9BRF9NT1ZJRVNfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkTW92aWUgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IEFERF9NT1ZJRSxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1vdmllU3VjY2VzcyA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogQUREX01PVklFX1NVQ0NFU1MsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogQUREX01PVklFX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfTU9WSUUsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZVN1Y2Nlc3MgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IFVQREFURV9NT1ZJRV9TVUNDRVNTLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IFVQREFURV9NT1ZJRV9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZSA9IChpZCkgPT4gKHtcbiAgdHlwZTogREVMRVRFX01PVklFLFxuICBpZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWVTdWNjZXNzID0gKGlkKSA9PiAoe1xuICB0eXBlOiBERUxFVEVfTU9WSUVfU1VDQ0VTUyxcbiAgaWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBERUxFVEVfTU9WSUVfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IExPQURfTU9WSUVTID0gJ0xPQURfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBMT0FEX01PVklFU19TVUNDQ0VTUyA9ICdMT0FEX01PVklFU19TVUNDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9NT1ZJRVNfRkFJTCA9ICdMT0FEX01PVklFU19GQUlMJztcbmV4cG9ydCBjb25zdCBBRERfTU9WSUUgPSAnQUREX01PVklFJztcbmV4cG9ydCBjb25zdCBBRERfTU9WSUVfU1VDQ0VTUyA9ICdBRERfTU9WSUVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX01PVklFX0ZBSUwgPSAnQUREX01PVklFX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9NT1ZJRSA9ICdVUERBVEVfTU9WSUUnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9NT1ZJRV9TVUNDRVNTID0gJ1VQREFURV9NT1ZJRV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUVfRkFJTCA9ICdVUERBVEVfTU9WSUVfRkFJTCc7XG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFID0gJ0RFTEVURV9NT1ZJRSc7XG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFX1NVQ0NFU1MgPSAnREVMRVRFX01PVklFX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRV9GQUlMID0gJ0RFTEVURV9NT1ZJRV9GQUlMJztcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfQllfSUQgPSAnR0VUX01PVklFX0JZX0lEJztcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyA9ICdHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgR0VUX01PVklFX0JZX0lEX0ZBSUwgPSAnR0VUX01PVklFX0JZX0lEX0ZBSUwnO1xuIiwiaW1wb3J0IHtcbiAgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MsXG4gIEdFVF9NT1ZJRV9CWV9JRF9GQUlMLFxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaGVhZGVyUmVkdWNlciA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ubW92aWU7XG4gICAgY2FzZSBHRVRfTU9WSUVfQllfSURfRkFJTDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJSZWR1Y2VyO1xuIiwiaW1wb3J0IHtcbiAgTE9BRF9NT1ZJRVNfU1VDQ0NFU1MsXG4gIEFERF9NT1ZJRV9TVUNDRVNTLFxuICBVUERBVEVfTU9WSUVfRkFJTCxcbiAgREVMRVRFX01PVklFX0ZBSUwsXG4gIExPQURfTU9WSUVTX0ZBSUwsXG4gIEFERF9NT1ZJRV9GQUlMLFxuICBVUERBVEVfTU9WSUVfU1VDQ0VTUyxcbiAgREVMRVRFX01PVklFX1NVQ0NFU1MsXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBtb3ZpZXNSZWR1Y2VyID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEX01PVklFU19TVUNDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ubW92aWVzO1xuICAgIGNhc2UgQUREX01PVklFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ubW92aWVdO1xuICAgIGNhc2UgVVBEQVRFX01PVklFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gc3RhdGUubWFwKChtb3ZpZSkgPT4ge1xuICAgICAgICBpZiAobW92aWUuaWQgPT09IGFjdGlvbi5tb3ZpZS5pZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5hY3Rpb24ubW92aWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92aWU7XG4gICAgICB9KTtcbiAgICBjYXNlIERFTEVURV9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5maWx0ZXIoKG1vdmllKSA9PiBtb3ZpZS5pZCAhPT0gYWN0aW9uLmlkKV07XG4gICAgY2FzZSBMT0FEX01PVklFU19GQUlMOlxuICAgIGNhc2UgQUREX01PVklFX0ZBSUw6XG4gICAgY2FzZSBVUERBVEVfTU9WSUVfRkFJTDpcbiAgICBjYXNlIERFTEVURV9NT1ZJRV9GQUlMOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmllc1JlZHVjZXI7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IE1vdmllc1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvTW92aWVzU2VydmljZSc7XG5cbmltcG9ydCB7IGdldE1vdmllU3VjY2VzcywgZ2V0TW92aWVGYWlsIH0gZnJvbSAnLi9hY3Rpb25zL2hlYWRlcic7XG5pbXBvcnQge1xuICBsb2FkTW92aWVzU3VjY2VzcyxcbiAgbG9hZE1vdmllc0ZhaWwsXG4gIGFkZE1vdmllU3VjY2VzcyxcbiAgYWRkTW92aWVGYWlsLFxuICB1cGRhdGVNb3ZpZVN1Y2Nlc3MsXG4gIHVwZGF0ZU1vdmllRmFpbCxcbiAgZGVsZXRlTW92aWVTdWNjZXNzLFxuICBkZWxldGVNb3ZpZUZhaWwsXG59IGZyb20gJy4vYWN0aW9ucy9tb3ZpZXMnO1xuaW1wb3J0IHtcbiAgTE9BRF9NT1ZJRVMsXG4gIEFERF9NT1ZJRSxcbiAgREVMRVRFX01PVklFLFxuICBVUERBVEVfTU9WSUUsXG4gIEdFVF9NT1ZJRV9CWV9JRCxcbn0gZnJvbSAnLi9hY3Rpb25zL3R5cGVzJztcblxuZnVuY3Rpb24qIGdldEFsbE1vdmllcyh7IGZpbHRlciwgc29ydCwgcXVlcnkgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vdmllcyA9IHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5mZXRjaE1vdmllcywgZmlsdGVyLCBzb3J0LCBxdWVyeSk7XG4gICAgeWllbGQgcHV0KGxvYWRNb3ZpZXNTdWNjZXNzKG1vdmllcy5kYXRhKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQobG9hZE1vdmllc0ZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGdldE1vdmllKHsgbW92aWVJZCB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbW92aWUgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuZ2V0TW92aWVCeUlkLCBtb3ZpZUlkKTtcbiAgICB5aWVsZCBwdXQoZ2V0TW92aWVTdWNjZXNzKG1vdmllKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoZ2V0TW92aWVGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5mdW5jdGlvbiogYWRkTW92aWUoeyBtb3ZpZSB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYWRkZWRNb3ZpZSA9IHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5hZGRNb3ZpZSwgbW92aWUpO1xuICAgIHlpZWxkIHB1dChhZGRNb3ZpZVN1Y2Nlc3MoYWRkZWRNb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGFkZE1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogdXBkYXRlTW92aWUoeyBtb3ZpZSB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLnVwZGF0ZU1vdmllLCBtb3ZpZSk7XG4gICAgeWllbGQgcHV0KHVwZGF0ZU1vdmllU3VjY2Vzcyhtb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KHVwZGF0ZU1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZGVsZXRlTW92aWUoeyBpZCB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmRlbGV0ZU1vdmllLCBpZCk7XG4gICAgeWllbGQgcHV0KGRlbGV0ZU1vdmllU3VjY2VzcyhpZCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGRlbGV0ZU1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogbW92aWVzU2FnYXMoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX01PVklFUywgZ2V0QWxsTW92aWVzKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KEFERF9NT1ZJRSwgYWRkTW92aWUpO1xuICB5aWVsZCB0YWtlRXZlcnkoVVBEQVRFX01PVklFLCB1cGRhdGVNb3ZpZSk7XG4gIHlpZWxkIHRha2VFdmVyeShERUxFVEVfTU9WSUUsIGRlbGV0ZU1vdmllKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KEdFVF9NT1ZJRV9CWV9JRCwgZ2V0TW92aWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtb3ZpZXNTYWdhcztcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcblxuaW1wb3J0IGhlYWRlclJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9oZWFkZXInO1xuaW1wb3J0IG1vdmllc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9tb3ZpZXMnO1xuaW1wb3J0IG1vdmllc1NhZ2FzIGZyb20gJy4vc2FnYXMnO1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICBjb21iaW5lUmVkdWNlcnMoeyBtb3ZpZXM6IG1vdmllc1JlZHVjZXIsIG1vdmllOiBoZWFkZXJSZWR1Y2VyIH0pLFxuICBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpXG4pO1xuc2FnYU1pZGRsZXdhcmUucnVuKG1vdmllc1NhZ2FzKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9