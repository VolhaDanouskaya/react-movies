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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_movieList_MovieList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    movies: movies
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/",
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
    to: "/movies"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/movies"
  }, !(movies !== null && movies !== void 0 && movies.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _body_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['no-movies']
  }, "No Movies Found")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_error_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
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
    var activeClass = "".concat(genre === selected ? 'item-active' : 'item');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      key: genre,
      type: "button",
      onClick: function onClick() {
        onFilterClick(genre);
        setSelected(genre);
      },
      className: _body_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[activeClass]
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
	"item-active": "body_item-active__2cxCk",
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
	"logo-footer": "footer_logo-footer__1jAf5"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib2R5L0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9HZW5yZXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9Nb3ZpZXNTb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9ib2R5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvRGVsZXRlTW92aWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvTW92aWVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L1VwZGF0ZU1vdmllRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllQ2FyZC9Nb3ZpZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvbW92aWVDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvRXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9BZGRNb3ZpZURpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvTW92aWVEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vdmllRGV0YWlscy9tb3ZpZURldGFpbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9zZWFyY2hCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VTZXNzaW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnZW5vdGZvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9Nb3ZpZXNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvbW92aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zYWdhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiQm9keSIsIm1vdmllcyIsImxvYWRNb3ZpZXMiLCJ1c2VTZXNzaW9uU3RvcmFnZSIsImN1cnJlbnRGaWx0ZXIiLCJzZXRDdXJyZW50RmlsdGVyIiwiY3VycmVudFNvcnQiLCJzZXRDdXJyZW50U29ydCIsInNlYXJjaFF1ZXJ5IiwidXNlTG9jYXRpb24iLCJzZWFyY2giLCJxdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsInVzZUVmZmVjdCIsIm9uRmlsdGVyQ2xpY2siLCJnZW5yZSIsIm9uU29ydENoYW5nZSIsInNvcnQiLCJzdHlsZXMiLCJib2R5Iiwic3VibWVudSIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsImlkIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwic3RyaW5nIiwicG9zdGVyX3BhdGgiLCJyZWxlYXNlX2RhdGUiLCJnZW5yZXMiLCJ2b3RlX2F2ZXJhZ2UiLCJ0YWdsaW5lIiwidm90ZV9jb3VudCIsIm92ZXJ2aWV3IiwiYnVkZ2V0IiwicmV2ZW51ZSIsInJ1bnRpbWUiLCJmdW5jIiwiR2VucmVzRmlsdGVyIiwic2VsZWN0ZWRGaWx0ZXIiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJtYXAiLCJhY3RpdmVDbGFzcyIsIk1vdmllc1NvcnRlciIsInNlbGVjdGVkU29ydCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiLCJEZWxldGVNb3ZpZURpYWxvZyIsIm9wZW4iLCJtb3ZpZUlkIiwib25DbG9zZSIsIm9uRGVsZXRlIiwib25DbG9zZURlbGV0ZURpYWxvZyIsImJvb2wiLCJNb3ZpZUxpc3QiLCJtb3ZpZSIsIlVwZGF0ZU1vdmllRGlhbG9nIiwib25VcGRhdGUiLCJzZXRHZW5yZXMiLCJvbkNsb3NlRWRpdERpYWxvZyIsIm9uQ2hhbmdlR2VucmVzIiwic2V0RmllbGRWYWx1ZSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwidmFsdWVzIiwib25TdWJtaXQiLCJmaWVsZHMiLCJjb2xvciIsIk1PVklFX0ZJRUxEUyIsIlRJVExFIiwiUkVMRUFTRV9EQVRFIiwiUE9TVEVSX1BBVEgiLCJHRU5SRVMiLCJnZW5yZXNBcnJheSIsIk9WRVJWSUVXIiwiUlVOVElNRSIsInVybCIsIk1vdmllQ2FyZCIsInVwZGF0ZU1vdmllIiwiZGVsZXRlTW92aWUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwib3BlbkRlbGV0ZSIsInNldE9wZW5EZWxldGUiLCJvcGVuRWRpdCIsInNldE9wZW5FZGl0IiwiaGFuZGxlQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwib25FZGl0TWVudUl0ZW1DbGljayIsIm9uRGVsZXRlTWVudUl0ZW1DbGljayIsIm9uRGVsZXRlTW92aWUiLCJvblVwZGF0ZU1vdmllIiwibSIsInNwbGl0Iiwiam9pbiIsIkJvb2xlYW4iLCJ5dXAiLCJyZXF1aXJlZCIsIm1pbiIsIkVycm9yQm91bmRhcnkiLCJwcm9wcyIsImhhc0Vycm9yIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJQYWdlTm90Rm91bmQiLCJlcnJvclBhZ2UiLCJsb2dvIiwiZXJyb3JDb250ZW50IiwiZXJyb3IiLCJob21lTGluayIsIkZvb3RlciIsImZvb3RlciIsIkFkZE1vdmllRGlhbG9nIiwib25BZGQiLCJvbkNsb3NlQWRkRGlhbG9nIiwiaGFuZGxlU3VibWl0IiwiSGVhZGVyIiwiYWRkTW92aWUiLCJvcGVuQWRkIiwic2V0T3BlbkFkZCIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaXNTZXJ2ZXIiLCJvbkFkZE1vdmllQ2xpY2siLCJvbkFkZE1vdmllIiwiaGVhZGVyIiwic3ViaGVhZGVyIiwicHVzaCIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJNb3ZpZURldGFpbHMiLCJnZXRNb3ZpZSIsInVzZVBhcmFtcyIsIk51bWJlciIsInBvc3RlciIsImluZm8iLCJyYXRpbmciLCJkZWZhdWx0UHJvcHMiLCJTZWFyY2hCYXIiLCJvblNlYXJjaE1vdmllcyIsIkxheW91dCIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImFycmF5Iiwic3RvcmFnZUtleSIsInNlc3Npb25TdG9yYWdlIiwic2V0VmFsdWUiLCJzZXRJdGVtIiwiQXBwIiwic3RvcmUiLCJNb3ZpZXNTZXJ2aWNlIiwiZmlsdGVyIiwiZmV0Y2giLCJidWlsZFVybCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYXBpVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiR0VUX01PVklFX0JZX0lEIiwiZ2V0TW92aWVTdWNjZXNzIiwiR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MiLCJnZXRNb3ZpZUZhaWwiLCJtZXNzYWdlIiwiR0VUX01PVklFX0JZX0lEX0ZBSUwiLCJMT0FEX01PVklFUyIsImxvYWRNb3ZpZXNTdWNjZXNzIiwiTE9BRF9NT1ZJRVNfU1VDQ0NFU1MiLCJsb2FkTW92aWVzRmFpbCIsIkxPQURfTU9WSUVTX0ZBSUwiLCJBRERfTU9WSUUiLCJhZGRNb3ZpZVN1Y2Nlc3MiLCJBRERfTU9WSUVfU1VDQ0VTUyIsImFkZE1vdmllRmFpbCIsIkFERF9NT1ZJRV9GQUlMIiwiVVBEQVRFX01PVklFIiwidXBkYXRlTW92aWVTdWNjZXNzIiwiVVBEQVRFX01PVklFX1NVQ0NFU1MiLCJ1cGRhdGVNb3ZpZUZhaWwiLCJVUERBVEVfTU9WSUVfRkFJTCIsIkRFTEVURV9NT1ZJRSIsImRlbGV0ZU1vdmllU3VjY2VzcyIsIkRFTEVURV9NT1ZJRV9TVUNDRVNTIiwiZGVsZXRlTW92aWVGYWlsIiwiREVMRVRFX01PVklFX0ZBSUwiLCJoZWFkZXJSZWR1Y2VyIiwiYWN0aW9uIiwibW92aWVzUmVkdWNlciIsImdldEFsbE1vdmllcyIsIm1vdmllc1NhZ2FzIiwiY2FsbCIsImZldGNoTW92aWVzIiwicHV0IiwiZGF0YSIsImdldE1vdmllQnlJZCIsImFkZGVkTW92aWUiLCJ0YWtlRXZlcnkiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FB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RUFBM0M7QUFDQSxJQUFNckQsS0FBSyxHQUFHc0QseURBQVcsQ0FDdkJDLDZEQUFlLENBQUM7QUFBRTVOLFFBQU0sRUFBRStNLHdEQUFWO0FBQXlCN0ksT0FBSyxFQUFFMkksd0RBQWFBO0FBQTdDLENBQUQsQ0FEUSxFQUV2QmdCLDZEQUFlLENBQUNKLGNBQUQsQ0FGUSxDQUF6QjtBQUlBQSxjQUFjLENBQUNLLEdBQWYsQ0FBbUJiLDhDQUFuQjtBQUVlNUMsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNkQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy80MDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy80MDQuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB1c2VTZXNzaW9uU3RvcmFnZSBmcm9tICcuLi8uLi9ob29rcy91c2VTZXNzaW9uU3RvcmFnZSc7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9lcnJvci9FcnJvckJvdW5kYXJ5JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEdlbnJlc0ZpbHRlciBmcm9tICcuL0dlbnJlc0ZpbHRlcic7XG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vbW92aWVMaXN0L01vdmllTGlzdCc7XG5pbXBvcnQgTW92aWVzU29ydGVyIGZyb20gJy4vTW92aWVzU29ydGVyJztcblxuY29uc3QgQm9keSA9ICh7IG1vdmllcywgbG9hZE1vdmllcyB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50RmlsdGVyLCBzZXRDdXJyZW50RmlsdGVyXSA9IHVzZVNlc3Npb25TdG9yYWdlKCdmaWx0ZXInKTtcbiAgY29uc3QgW2N1cnJlbnRTb3J0LCBzZXRDdXJyZW50U29ydF0gPSB1c2VTZXNzaW9uU3RvcmFnZSgnc29ydCcpO1xuICBjb25zdCBzZWFyY2hRdWVyeSA9IHVzZUxvY2F0aW9uKCkuc2VhcmNoO1xuICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUXVlcnkpLmdldCgnc2VhcmNoJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkTW92aWVzKGN1cnJlbnRGaWx0ZXIsIGN1cnJlbnRTb3J0LCBxdWVyeSk7XG4gIH0sIFtjdXJyZW50RmlsdGVyLCBjdXJyZW50U29ydCwgcXVlcnksIGxvYWRNb3ZpZXNdKTtcblxuICBjb25zdCBvbkZpbHRlckNsaWNrID0gKGdlbnJlKSA9PiB7XG4gICAgc2V0Q3VycmVudEZpbHRlcihnZW5yZSk7XG4gIH07XG5cbiAgY29uc3Qgb25Tb3J0Q2hhbmdlID0gKHNvcnQpID0+IHtcbiAgICBzZXRDdXJyZW50U29ydChzb3J0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0gZml4ZWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1lbnV9PlxuICAgICAgICA8R2VucmVzRmlsdGVyIG9uRmlsdGVyQ2xpY2s9e29uRmlsdGVyQ2xpY2t9IHNlbGVjdGVkRmlsdGVyPXtjdXJyZW50RmlsdGVyfSAvPlxuICAgICAgICA8TW92aWVzU29ydGVyIG9uU29ydENoYW5nZT17b25Tb3J0Q2hhbmdlfSBzZWxlY3RlZFNvcnQ9e2N1cnJlbnRTb3J0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TW92aWVMaXN0IG1vdmllcz17bW92aWVzfSAvPlxuXG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdD5cbiAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvbW92aWVzXCIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbW92aWVzXCI+XG4gICAgICAgICAgeyFtb3ZpZXM/Lmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWyduby1tb3ZpZXMnXX0+Tm8gTW92aWVzIEZvdW5kPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5PjwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIj5cbiAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvcGFnZW5vdGZvdW5kXCIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQm9keS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pLFxuICApLmlzUmVxdWlyZWQsXG4gIGxvYWRNb3ZpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYm9keS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IGdlbnJlcyA9IFsnQWxsJywgJ0FkdmVudHVyZScsICdDb21lZHknLCAnRHJhbWEnLCAnRmFudGFzeSddO1xuXG5jb25zdCBHZW5yZXNGaWx0ZXIgPSAoeyBvbkZpbHRlckNsaWNrLCBzZWxlY3RlZEZpbHRlciB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoc2VsZWN0ZWRGaWx0ZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZ2VucmVzLWZpbHRlciddfT5cbiAgICAgIHtnZW5yZXMubWFwKChnZW5yZSkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVDbGFzcyA9IGAke2dlbnJlID09PSBzZWxlY3RlZCA/ICdpdGVtLWFjdGl2ZScgOiAnaXRlbSd9YDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2dlbnJlfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uRmlsdGVyQ2xpY2soZ2VucmUpO1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZChnZW5yZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYWN0aXZlQ2xhc3NdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR2VucmVzRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25GaWx0ZXJDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRGaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlc0ZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBNb3ZpZXNTb3J0ZXIgPSAoeyBvblNvcnRDaGFuZ2UsIHNlbGVjdGVkU29ydCB9KSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTb3J0KSB7XG4gICAgb25Tb3J0Q2hhbmdlKCdyZWxlYXNlX2RhdGUnKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29ydH0+XG4gICAgICA8cD5Tb3J0IGJ5IDwvcD5cbiAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlc1snc29ydC1mb3JtJ119PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbGFiZWxJZD1cInNpbXBsZS1zZWxlY3RcIlxuICAgICAgICAgIGlkPVwic2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWxlY3RlZFNvcnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25Tb3J0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJ2b3RlX2F2ZXJhZ2VcIj5SYXRpbmc8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInJlbGVhc2VfZGF0ZVwiPlJlbGVhc2UgZGF0ZTwvTWVudUl0ZW0+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllc1NvcnRlci5wcm9wVHlwZXMgPSB7XG4gIG9uU29ydENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRTb3J0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNTb3J0ZXI7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib2R5XCI6IFwiYm9keV9ib2R5X18xU3I3Y1wiLFxuXHRcInN1Ym1lbnVcIjogXCJib2R5X3N1Ym1lbnVfXzNfY3p2XCIsXG5cdFwic29ydFwiOiBcImJvZHlfc29ydF9fMlFmWi1cIixcblx0XCJNdWlGb3JtQ29udHJvbC1yb290XCI6IFwiYm9keV9NdWlGb3JtQ29udHJvbC1yb290X18yTTRVQlwiLFxuXHRcInNvcnRGb3JtXCI6IFwiYm9keV9zb3J0Rm9ybV9fMTlTU3dcIixcblx0XCJNdWlTZWxlY3Qtc2VsZWN0XCI6IFwiYm9keV9NdWlTZWxlY3Qtc2VsZWN0X19IYWx4SVwiLFxuXHRcIk11aVNlbGVjdC1pY29uXCI6IFwiYm9keV9NdWlTZWxlY3QtaWNvbl9fVkc4bTVcIixcblx0XCJNdWlJbnB1dC11bmRlcmxpbmVcIjogXCJib2R5X011aUlucHV0LXVuZGVybGluZV9fMWdSRTJcIixcblx0XCJnZW5yZXMtZmlsdGVyXCI6IFwiYm9keV9nZW5yZXMtZmlsdGVyX18zMG9sZlwiLFxuXHRcIml0ZW1cIjogXCJib2R5X2l0ZW1fXzFzRDFDXCIsXG5cdFwiaXRlbS1hY3RpdmVcIjogXCJib2R5X2l0ZW0tYWN0aXZlX18yY3hDa1wiLFxuXHRcIm1vdmllcy1jb3VudGVyXCI6IFwiYm9keV9tb3ZpZXMtY291bnRlcl9feGU0d21cIixcblx0XCJuby1tb3ZpZXNcIjogXCJib2R5X25vLW1vdmllc19fM3BWR3BcIlxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGxvYWRNb3ZpZXMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL21vdmllcyc7XG5cbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgbW92aWVzOiBzdGF0ZS5tb3ZpZXMgfSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZE1vdmllcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJvZHkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBEZWxldGVNb3ZpZURpYWxvZyA9ICh7IG9wZW4sIG1vdmllSWQsIG9uQ2xvc2UsIG9uRGVsZXRlIH0pID0+IHtcbiAgY29uc3Qgb25DbG9zZURlbGV0ZURpYWxvZyA9ICgpID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIGRpc2FibGVCYWNrZHJvcENsaWNrIGRpc2FibGVFc2NhcGVLZXlEb3duIG9wZW49e29wZW59IG9uQ2xvc2U9e29uQ2xvc2VEZWxldGVEaWFsb2d9IG1heFdpZHRoPVwibGdcIj5cbiAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VEZWxldGVEaWFsb2d9PlxuICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj5EZWxldGUgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwiZGlhbG9nLWZvcm0tY29udGVudFwiPlxuICAgICAgICA8RGlhbG9nQ29udGVudFRleHQgaWQ9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbW92aWU/PC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKG1vdmllSWQpfSBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICBDb25maXJtXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgIDwvRGlhbG9nPlxuICApO1xufTtcblxuRGVsZXRlTW92aWVEaWFsb2cucHJvcFR5cGVzID0ge1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbW92aWVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlTW92aWVEaWFsb2c7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vbW92aWVDYXJkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb3ZpZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBNb3ZpZUxpc3QgPSAoeyBtb3ZpZXMgfSkgPT4gKFxuICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbJ21vdmllLWxpc3QnXX0+XG4gICAge21vdmllcz8ubWFwKChtb3ZpZSkgPT4gKFxuICAgICAgPE1vdmllQ2FyZCBrZXk9e21vdmllPy5pZH0gbW92aWU9e21vdmllfSAvPlxuICAgICkpfVxuICA8L3VsPlxuKTtcblxuTW92aWVMaXN0LnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBwb3N0ZXJfcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgfSksXG4gICkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrUHJvdmlkZXIsIEVycm9yTWVzc2FnZSwgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdlbnJlc0FycmF5LCB2YWxpZGF0aW9uU2NoZW1hLCBNT1ZJRV9GSUVMRFMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgVXBkYXRlTW92aWVEaWFsb2cgPSAoeyBtb3ZpZSwgb3Blbiwgb25VcGRhdGUsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbZ2VucmVzLCBzZXRHZW5yZXNdID0gdXNlU3RhdGUobW92aWU/LmdlbnJlcyB8fCBbXSk7XG4gIGNvbnN0IG9uQ2xvc2VFZGl0RGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUdlbnJlcyA9ICh2YWx1ZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIHNldEdlbnJlcyh2YWx1ZSk7XG4gICAgc2V0RmllbGRWYWx1ZSgnZ2VucmVzJywgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgaWQ6IG1vdmllPy5pZCxcbiAgICAgIHRpdGxlOiBtb3ZpZT8udGl0bGUsXG4gICAgICByZWxlYXNlX2RhdGU6IG1vdmllPy5yZWxlYXNlX2RhdGUsXG4gICAgICBwb3N0ZXJfcGF0aDogbW92aWU/LnBvc3Rlcl9wYXRoLFxuICAgICAgb3ZlcnZpZXc6IG1vdmllPy5vdmVydmlldyxcbiAgICAgIHJ1bnRpbWU6IG1vdmllPy5ydW50aW1lLFxuICAgICAgZ2VucmVzLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIG9uU3VibWl0OiAoZmllbGRzKSA9PiB7XG4gICAgICBvblVwZGF0ZShmaWVsZHMpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1Byb3ZpZGVyIHZhbHVlPXtmb3JtaWt9PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBkaXNhYmxlRXNjYXBlS2V5RG93blxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlRWRpdERpYWxvZ31cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJy5NdWlQYXBlci1yb290Lk11aU1lbnUtcGFwZXIuTXVpUG9wb3Zlci1wYXBlciddfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlRWRpdERpYWxvZ30+XG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxEaWFsb2dUaXRsZT5FZGl0IE1vdmllPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJkaWFsb2ctZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119Pk1vdmllIElEPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgICAgICAge21vdmllPy5pZH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+VGl0bGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlRJVExFfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PlJlbGVhc2UgRGF0ZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUkVMRUFTRV9EQVRFfVxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUkVMRUFTRV9EQVRFfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5Nb3ZpZSBVUkw8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUE9TVEVSX1BBVEh9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PkdlbnJlPC9wPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAgIHZhbHVlPXtnZW5yZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VHZW5yZXMoZXZlbnQudGFyZ2V0LnZhbHVlLCBmb3JtaWsuc2V0RmllbGRWYWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzQXJyYXkubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2dlbnJlfSB2YWx1ZT17Z2VucmV9PlxuICAgICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119Pk92ZXJ2aWV3PC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJlbXB0eSB0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PlJ1bnRpbWU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlRWRpdERpYWxvZ30gY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9Gb3JtaWtQcm92aWRlcj5cbiAgKTtcbn07XG5cblVwZGF0ZU1vdmllRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uVXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlTW92aWVEaWFsb2c7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBEZWxldGVNb3ZpZURpYWxvZyBmcm9tICcuLi9EZWxldGVNb3ZpZURpYWxvZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL21vdmllcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVXBkYXRlTW92aWVEaWFsb2cgZnJvbSAnLi4vVXBkYXRlTW92aWVEaWFsb2cnO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSAoeyBtb3ZpZSwgdXBkYXRlTW92aWUsIGRlbGV0ZU1vdmllIH0pID0+IHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29wZW5EZWxldGUsIHNldE9wZW5EZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbkVkaXQsIHNldE9wZW5FZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZS5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICBjb25zdCBvbkVkaXRNZW51SXRlbUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgc2V0T3BlbkVkaXQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGVNZW51SXRlbUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgc2V0T3BlbkRlbGV0ZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZU1vdmllID0gKG1vdmllSWQpID0+IHtcbiAgICBkZWxldGVNb3ZpZShtb3ZpZUlkKTtcbiAgICBzZXRPcGVuRGVsZXRlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZU1vdmllID0gKG0pID0+IHtcbiAgICB1cGRhdGVNb3ZpZShtKTtcbiAgICBzZXRPcGVuRWRpdChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbJ21vdmllLWNhcmQnXX0+XG4gICAgICA8TGluayB0bz17YC9tb3ZpZXMvJHttb3ZpZT8uaWR9YH0+XG4gICAgICAgIDxpbWcgc3JjPXttb3ZpZT8ucG9zdGVyX3BhdGh9IGFsdD1cIlwiIC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb3ZpZS1pbmZvJ119PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydpbmZvLWZpcnN0LXJvdyddfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e21vdmllPy50aXRsZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ21vdmllLXJlbGVhc2UteWVhciddfT57bW92aWU/LnJlbGVhc2VfZGF0ZT8uc3BsaXQoJy0nKVswXX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZX0+e21vdmllPy5nZW5yZXM/LmpvaW4oJywgJyl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snY2FyZC1tZW51LWljb24nXX1cbiAgICAgICAgYXJpYS1jb250cm9scz1cInNpbXBsZS1tZW51XCJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgID5cbiAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPE1lbnUgaWQ9XCJzaW1wbGUtbWVudVwiIGFuY2hvckVsPXthbmNob3JFbH0ga2VlcE1vdW50ZWQgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e29uRWRpdE1lbnVJdGVtQ2xpY2t9IGNsYXNzTmFtZT1cImNhcmQtbWVudS1pdGVtXCI+XG4gICAgICAgICAgZWRpdFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17b25EZWxldGVNZW51SXRlbUNsaWNrfSBjbGFzc05hbWU9XCJjYXJkLW1lbnUtaXRlbVwiPlxuICAgICAgICAgIGRlbGV0ZVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8VXBkYXRlTW92aWVEaWFsb2cgb3Blbj17b3BlbkVkaXR9IG1vdmllPXttb3ZpZX0gb25VcGRhdGU9e29uVXBkYXRlTW92aWV9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5FZGl0KGZhbHNlKX0gLz5cbiAgICAgICAgPERlbGV0ZU1vdmllRGlhbG9nXG4gICAgICAgICAgb3Blbj17b3BlbkRlbGV0ZX1cbiAgICAgICAgICBtb3ZpZUlkPXttb3ZpZT8uaWR9XG4gICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlTW92aWV9XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbkRlbGV0ZShmYWxzZSl9XG4gICAgICAgIC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbk1vdmllQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwb3N0ZXJfcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZU1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZWxldGVNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGRlbGV0ZU1vdmllLCB1cGRhdGVNb3ZpZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvbW92aWVzJztcblxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCc7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgdXBkYXRlTW92aWUsXG4gIGRlbGV0ZU1vdmllLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vdmllQ2FyZCk7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb3ZpZS1saXN0XCI6IFwibW92aWVzX21vdmllLWxpc3RfXzNvLWhfXCIsXG5cdFwibW92aWUtY2FyZFwiOiBcIm1vdmllc19tb3ZpZS1jYXJkX19wSkFqcFwiLFxuXHRcImNhcmQtbWVudS1pY29uXCI6IFwibW92aWVzX2NhcmQtbWVudS1pY29uX18xUWR2TlwiLFxuXHRcIm1vdmllLWluZm9cIjogXCJtb3ZpZXNfbW92aWUtaW5mb19fM3pyNmNcIixcblx0XCJ0aXRsZVwiOiBcIm1vdmllc190aXRsZV9fOHNvQXNcIixcblx0XCJpbmZvLWZpcnN0LXJvd1wiOiBcIm1vdmllc19pbmZvLWZpcnN0LXJvd19fM25WeHlcIixcblx0XCJtb3ZpZS1yZWxlYXNlLXllYXJcIjogXCJtb3ZpZXNfbW92aWUtcmVsZWFzZS15ZWFyX18yNkxjMVwiLFxuXHRcImdlbnJlXCI6IFwibW92aWVzX2dlbnJlX18yeTR2cFwiLFxuXHRcIk11aVBhcGVyLXJvb3RcIjogXCJtb3ZpZXNfTXVpUGFwZXItcm9vdF9fMUFRbG1cIixcblx0XCJNdWlNZW51LXBhcGVyXCI6IFwibW92aWVzX011aU1lbnUtcGFwZXJfX29oaHh1XCIsXG5cdFwiTXVpUG9wb3Zlci1wYXBlclwiOiBcIm1vdmllc19NdWlQb3BvdmVyLXBhcGVyX18yWnUwTVwiLFxuXHRcIk11aUJ1dHRvbkJhc2Utcm9vdFwiOiBcIm1vdmllc19NdWlCdXR0b25CYXNlLXJvb3RfX1puTi0zXCIsXG5cdFwiTXVpTGlzdEl0ZW0tcm9vdFwiOiBcIm1vdmllc19NdWlMaXN0SXRlbS1yb290X18zektKcFwiLFxuXHRcIk11aU1lbnVJdGVtLXJvb3RcIjogXCJtb3ZpZXNfTXVpTWVudUl0ZW0tcm9vdF9fMXEzRTRcIixcblx0XCJjYXJkLW1lbnUtaXRlbVwiOiBcIm1vdmllc19jYXJkLW1lbnUtaXRlbV9fM251V2lcIixcblx0XCJNdWlEaWFsb2ctcGFwZXJcIjogXCJtb3ZpZXNfTXVpRGlhbG9nLXBhcGVyX19zdlBlUVwiLFxuXHRcIk11aUlucHV0LXVuZGVybGluZVwiOiBcIm1vdmllc19NdWlJbnB1dC11bmRlcmxpbmVfXzF3T1U4XCIsXG5cdFwiZGlhbG9nLWZvcm0tY29udGVudFwiOiBcIm1vdmllc19kaWFsb2ctZm9ybS1jb250ZW50X18xaUtmNlwiLFxuXHRcImVkaXQtZmllbGQtbmFtZVwiOiBcIm1vdmllc19lZGl0LWZpZWxkLW5hbWVfXzJtVDJsXCIsXG5cdFwiZWRpdC1maWVsZFwiOiBcIm1vdmllc19lZGl0LWZpZWxkX18yRGlNT1wiLFxuXHRcIk11aVNlbGVjdC1pY29uXCI6IFwibW92aWVzX011aVNlbGVjdC1pY29uX191WEpWbVwiLFxuXHRcImVycm9yXCI6IFwibW92aWVzX2Vycm9yX18xNldCa1wiLFxuXHRcIk11aUljb25CdXR0b24tcm9vdFwiOiBcIm1vdmllc19NdWlJY29uQnV0dG9uLXJvb3RfXzIzQ0NHXCIsXG5cdFwiTXVpVHlwb2dyYXBoeS1oNlwiOiBcIm1vdmllc19NdWlUeXBvZ3JhcGh5LWg2X19JVk9JNVwiLFxuXHRcIk11aVR5cG9ncmFwaHktY29sb3JUZXh0U2Vjb25kYXJ5XCI6IFwibW92aWVzX011aVR5cG9ncmFwaHktY29sb3JUZXh0U2Vjb25kYXJ5X18xVkwxUlwiLFxuXHRcIk11aURpYWxvZ0FjdGlvbnMtc3BhY2luZ1wiOiBcIm1vdmllc19NdWlEaWFsb2dBY3Rpb25zLXNwYWNpbmdfXzF1MFVxXCIsXG5cdFwiTXVpQnV0dG9uLXRleHRQcmltYXJ5XCI6IFwibW92aWVzX011aUJ1dHRvbi10ZXh0UHJpbWFyeV9fSjVSeVBcIixcblx0XCJNdWlCdXR0b24tdGV4dFNlY29uZGFyeVwiOiBcIm1vdmllc19NdWlCdXR0b24tdGV4dFNlY29uZGFyeV9fMm1nVklcIlxufTtcbiIsImltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xuXG5leHBvcnQgY29uc3QgTU9WSUVfRklFTERTID0ge1xuICBUSVRMRTogJ3RpdGxlJyxcbiAgUkVMRUFTRV9EQVRFOiAncmVsZWFzZV9kYXRlJyxcbiAgUE9TVEVSX1BBVEg6ICdwb3N0ZXJfcGF0aCcsXG4gIEdFTlJFUzogJ2dlbnJlcycsXG4gIE9WRVJWSUVXOiAnb3ZlcnZpZXcnLFxuICBSVU5USU1FOiAncnVudGltZScsXG59O1xuXG5leHBvcnQgY29uc3QgZ2VucmVzQXJyYXkgPSBbXG4gICdBY3Rpb24nLFxuICAnQWR2ZW50dXJlJyxcbiAgJ0FuaW1hdGlvbicsXG4gICdDb21lZHknLFxuICAnRHJhbWEnLFxuICAnRmFtaWx5JyxcbiAgJ0ZhbnRhc3knLFxuICAnU2NpZW5jZSBGaWN0aW9uJyxcbl07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCh7XG4gIHRpdGxlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ1RpdGxlIGlzIHJlcXVpcmVkJyksXG4gIHBvc3Rlcl9wYXRoOiB5dXAuc3RyaW5nKCkudXJsKCkucmVxdWlyZWQoJ1Bvc3RlciB1cmwgaXMgcmVxdWlyZWQnKSxcbiAgcmVsZWFzZV9kYXRlOiB5dXAuc3RyaW5nKCksXG4gIG92ZXJ2aWV3OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ092ZXJ2aWV3IGlzIHJlcXVpcmVkJyksXG4gIHJ1bnRpbWU6IHl1cC5udW1iZXIoKS5yZXF1aXJlZCgnUnVudGltZSBpcyByZXF1aXJlZCcpLFxuICBnZW5yZXM6IHl1cC5hcnJheSgpLm1pbigxKS5yZXF1aXJlZCgnTWluaW11bSBvbmUgZ2VucmUgc2hvdWxkIGJlIHNlbGVjdGVkJyksXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoKSB7XG4gICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKCkge31cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgIHJldHVybiA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmcgKDwvaDE+O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9Gb290ZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXJyb3IubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBQYWdlTm90Rm91bmQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5lcnJvclBhZ2V9IGZpeGVkPlxuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yQ29udGVudH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5QYWdlIE5vdCBGb3VuZDwvcD5cbiAgICAgICAgPExpbmsgdG89XCIvbW92aWVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZUxpbmt9IHRpdGxlPVwibGlua1RvSG9tZVwiPlxuICAgICAgICAgIEdvIEJhY2sgVG8gSG9tZVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Rm9vdGVyIC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdEZvdW5kO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXJyb3JQYWdlXCI6IFwiZXJyb3JfZXJyb3JQYWdlX18zQVd5b1wiLFxuXHRcImxvZ29cIjogXCJlcnJvcl9sb2dvX19tSXowbVwiLFxuXHRcImVycm9yQ29udGVudFwiOiBcImVycm9yX2Vycm9yQ29udGVudF9fMXY2RmtcIixcblx0XCJlcnJvclwiOiBcImVycm9yX2Vycm9yX18ydXBPalwiLFxuXHRcImhvbWVMaW5rXCI6IFwiZXJyb3JfaG9tZUxpbmtfXzNvV0czXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfSBmaXhlZD5cbiAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlc1snbG9nby1mb290ZXInXX0gYWx0PVwibG9nb1wiIC8+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX2Zvb3Rlcl9fMmpfRnJcIixcblx0XCJsb2dvLWZvb3RlclwiOiBcImZvb3Rlcl9sb2dvLWZvb3Rlcl9fMWpBZjVcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrUHJvdmlkZXIsIEVycm9yTWVzc2FnZSwgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdlbnJlc0FycmF5LCB2YWxpZGF0aW9uU2NoZW1hLCBNT1ZJRV9GSUVMRFMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBBZGRNb3ZpZURpYWxvZyA9ICh7IG9wZW4sIG9uQWRkLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBvbkNsb3NlQWRkRGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUdlbnJlcyA9ICh2YWx1ZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIHNldEdlbnJlcyh2YWx1ZSk7XG4gICAgc2V0RmllbGRWYWx1ZSgnZ2VucmVzJywgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgcmVsZWFzZV9kYXRlOiAnJyxcbiAgICAgIHBvc3Rlcl9wYXRoOiAnJyxcbiAgICAgIGdlbnJlcyxcbiAgICAgIG92ZXJ2aWV3OiAnJyxcbiAgICAgIHJ1bnRpbWU6ICcnLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XG4gICAgICBvbkFkZCh2YWx1ZXMpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1Byb3ZpZGVyIHZhbHVlPXtmb3JtaWt9PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBkaXNhYmxlQmFja2Ryb3BDbGlja1xuICAgICAgICBkaXNhYmxlRXNjYXBlS2V5RG93blxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlQWRkRGlhbG9nfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlQWRkRGlhbG9nfT5cbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEZvcm0gdGl0bGU9XCJhZGQtbW92aWVcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+QWRkIE1vdmllPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJkaWFsb2ctZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5UaXRsZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3ZpZSBUaXRsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5SZWxlYXNlIERhdGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUkVMRUFTRV9EQVRFfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBEYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicmVsZWFzZV9kYXRlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJyZWxlYXNlX2RhdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPk1vdmllIFVSTDwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3ZpZSBVUkwgaGVyZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInBvc3Rlcl9wYXRoXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJwb3N0ZXJfcGF0aFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUE9TVEVSX1BBVEh9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5HZW5yZTwvcD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2dlbnJlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUdlbnJlcyhldmVudC50YXJnZXQudmFsdWUsIGZvcm1pay5zZXRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgIHRpdGxlPVwiZ2VucmVzXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJnZW5yZXNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzQXJyYXkubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2dlbnJlfSB2YWx1ZT17Z2VucmV9PlxuICAgICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5PdmVydmlldzwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk92ZXJ2aWV3IEhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJvdmVydmlld1wiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwib3ZlcnZpZXdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+UnVudGltZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUnVudGltZSBIZXJlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicnVudGltZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwicnVudGltZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2VBZGREaWFsb2d9XG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJyZXNldFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwic3VibWl0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvRm9ybWlrUHJvdmlkZXI+XG4gICk7XG59O1xuXG5BZGRNb3ZpZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQWRkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTW92aWVEaWFsb2c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQWRkTW92aWVEaWFsb2cgZnJvbSAnLi9BZGRNb3ZpZURpYWxvZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBNb3ZpZURldGFpbHMgZnJvbSAnLi9tb3ZpZURldGFpbHMnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL3NlYXJjaEJhci9TZWFyY2hCYXInO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBhZGRNb3ZpZSB9KSA9PiB7XG4gIGNvbnN0IFtvcGVuQWRkLCBzZXRPcGVuQWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcblxuICBjb25zdCBvbkFkZE1vdmllQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0T3BlbkFkZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkFkZE1vdmllID0gKG1vdmllKSA9PiB7XG4gICAgYWRkTW92aWUobW92aWUpO1xuICAgIHNldE9wZW5BZGQoZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfSBmaXhlZD5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllcy86bW92aWVJZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGVyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvJyl9PlxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aXNTZXJ2ZXIgPyAoXG4gICAgICAgICAgICB1c2VSb3V0ZXIoKS5wYXRobmFtZS5pbmNsdWRlcygnbW92aWVJZCcpID8gKFxuICAgICAgICAgICAgICA8TW92aWVEZXRhaWxzIC8+XG4gICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TW92aWVEZXRhaWxzIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFkZE1vdmllQ2xpY2t9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydidXR0b24tYWRkLW1vdmllJ119XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICsgQWRkIE1vdmllXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxBZGRNb3ZpZURpYWxvZ1xuICAgICAgICAgICAgICBvcGVuPXtvcGVuQWRkfVxuICAgICAgICAgICAgICBvbkFkZD17b25BZGRNb3ZpZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbkFkZChmYWxzZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc1NlcnZlciA/IChcbiAgICAgICAgICAgIHVzZVJvdXRlcigpLnBhdGhuYW1lLmluY2x1ZGVzKCdtb3ZpZUlkJykgPyBudWxsIDogKFxuICAgICAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBhZGRNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfXzJwTGlYXCIsXG5cdFwic3ViaGVhZGVyXCI6IFwiaGVhZGVyX3N1YmhlYWRlcl9fNVd3NjFcIixcblx0XCJsb2dvXCI6IFwiaGVhZGVyX2xvZ29fXzI0ZndEXCIsXG5cdFwiYnV0dG9uLWFkZC1tb3ZpZVwiOiBcImhlYWRlcl9idXR0b24tYWRkLW1vdmllX18yOGM1WlwiLFxuXHRcIk11aUljb25CdXR0b24tcm9vdFwiOiBcImhlYWRlcl9NdWlJY29uQnV0dG9uLXJvb3RfX01hRTVzXCJcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBhZGRNb3ZpZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvbW92aWVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYWRkTW92aWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vdmllRGV0YWlscy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IE1vdmllRGV0YWlscyA9ICh7IG1vdmllLCBnZXRNb3ZpZSB9KSA9PiB7XG4gIGNvbnN0IHsgbW92aWVJZCB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNb3ZpZShOdW1iZXIobW92aWVJZCkpO1xuICB9LCBbbW92aWVJZCwgZ2V0TW92aWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vdmllLWRldGFpbHMnXX0+XG4gICAgICA8aW1nIHNyYz17bW92aWU/LnBvc3Rlcl9wYXRofSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0ZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydmaXJzdC1yb3cnXX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bW92aWU/LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9Pnttb3ZpZT8udm90ZV9hdmVyYWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdsaW5lfT57bW92aWU/LnRhZ2xpbmV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RoaXJkLXJvdyddfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydyZWxlYXNlLWRhdGUnXX0+e21vdmllPy5yZWxlYXNlX2RhdGU/LnNwbGl0KCctJylbMF19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ydW50aW1lfT57bW92aWU/LnJ1bnRpbWV9IG1pbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+e21vdmllPy5vdmVydmlld308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVEZXRhaWxzLmRlZmF1bHRQcm9wcyA9IHtcbiAgbW92aWU6IG51bGwsXG59O1xuXG5Nb3ZpZURldGFpbHMucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgZ2V0TW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZURldGFpbHM7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRNb3ZpZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvaGVhZGVyJztcblxuaW1wb3J0IE1vdmllRGV0YWlscyBmcm9tICcuL01vdmllRGV0YWlscyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgbW92aWU6IHN0YXRlLm1vdmllIH0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldE1vdmllLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vdmllRGV0YWlscyk7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb3ZpZS1kZXRhaWxzXCI6IFwibW92aWVEZXRhaWxzX21vdmllLWRldGFpbHNfXzdnc05iXCIsXG5cdFwicG9zdGVyXCI6IFwibW92aWVEZXRhaWxzX3Bvc3Rlcl9fMUVkVm5cIixcblx0XCJpbmZvXCI6IFwibW92aWVEZXRhaWxzX2luZm9fXzJ6UGQ5XCIsXG5cdFwiZmlyc3Qtcm93XCI6IFwibW92aWVEZXRhaWxzX2ZpcnN0LXJvd19fdWkyZnhcIixcblx0XCJ0aXRsZVwiOiBcIm1vdmllRGV0YWlsc190aXRsZV9fT2hwLWpcIixcblx0XCJyYXRpbmdcIjogXCJtb3ZpZURldGFpbHNfcmF0aW5nX19rSnFsS1wiLFxuXHRcInRoaXJkLXJvd1wiOiBcIm1vdmllRGV0YWlsc190aGlyZC1yb3dfXzJJS3lmXCIsXG5cdFwicmVsZWFzZS1kYXRlXCI6IFwibW92aWVEZXRhaWxzX3JlbGVhc2UtZGF0ZV9fMjkzY3NcIixcblx0XCJydW50aW1lXCI6IFwibW92aWVEZXRhaWxzX3J1bnRpbWVfXzNlYl9lXCIsXG5cdFwiZGFya1wiOiBcIm1vdmllRGV0YWlsc19kYXJrX191RmRNRlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zZWFyY2hCYXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3Qgb25TZWFyY2hNb3ZpZXMgPSAocXVlcnkpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goYC9tb3ZpZXM/c2VhcmNoPSR7cXVlcnl9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydzZWFyY2gtYmFyJ119PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PmZpbmQgeW91ciBtb3ZpZTwvcD5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9eyhmaWVsZHMpID0+IHtcbiAgICAgICAgICBvblNlYXJjaE1vdmllcyhmaWVsZHMucXVlcnkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8RmllbGQgdHlwZT1cInNlYXJjaFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIGlkPXtzdHlsZXNbJ3NlYXJjaC1pbnB1dCddfSBuYW1lPVwicXVlcnlcIiAvPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaC1iYXJcIjogXCJzZWFyY2hCYXJfc2VhcmNoLWJhcl9fM0k3ZFJcIixcblx0XCJ0aXRsZVwiOiBcInNlYXJjaEJhcl90aXRsZV9fMkUtOElcIixcblx0XCJzZWFyY2gtaW5wdXRcIjogXCJzZWFyY2hCYXJfc2VhcmNoLWlucHV0X18ybzVmYlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbWFpbi1sYXlvdXQnXX0+e2NoaWxkcmVufTwvZGl2PlxuKTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluLWxheW91dFwiOiBcImxheW91dF9tYWluLWxheW91dF9feDhzbUhcIlxufTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVNlc3Npb25TdG9yYWdlID0gKHN0b3JhZ2VLZXkpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICBwcm9jZXNzLmJyb3dzZXIgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIDogbnVsbFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIHZhbHVlKTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgc3RvcmFnZUtleV0pO1xuXG4gIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlc3Npb25TdG9yYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZSwgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9ib2R5JztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhdGljUm91dGVyPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxQYWdlTm90Rm91bmQgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BhZ2Vub3Rmb3VuZFwiPlxuICAgICAgICAgICAgPFBhZ2VOb3RGb3VuZCAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICA8Qm9keSAvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiY2xhc3MgTW92aWVzU2VydmljZSB7XG4gIGFwaVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvbW92aWVzLyc7XG5cbiAgZmV0Y2hNb3ZpZXMgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT5cbiAgICBmZXRjaCh0aGlzLmJ1aWxkVXJsKGZpbHRlciwgc29ydCwgcXVlcnkpKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGdldE1vdmllQnlJZCA9IChtb3ZpZUlkKSA9PlxuICAgIGZldGNoKHRoaXMuYXBpVVJMICsgbW92aWVJZCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBhZGRNb3ZpZSA9IChtb3ZpZSkgPT5cbiAgICBmZXRjaCh0aGlzLmFwaVVSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobW92aWUpLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgdXBkYXRlTW92aWUgPSAobW92aWUpID0+XG4gICAgZmV0Y2godGhpcy5hcGlVUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobW92aWUpLFxuICAgIH0pO1xuXG4gIGRlbGV0ZU1vdmllID0gKGlkKSA9PiBmZXRjaCh0aGlzLmFwaVVSTCArIGlkLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG5cbiAgYnVpbGRVcmwgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT4ge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLmFwaVVSTH0/c29ydEJ5PSR7c29ydH0mc29ydE9yZGVyPWRlc2NgO1xuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9PSAnQWxsJykge1xuICAgICAgdXJsICs9IGA/ZmlsdGVyPSR7ZmlsdGVyfWA7XG4gICAgfVxuICAgIGlmIChxdWVyeSkge1xuICAgICAgdXJsICs9IGAmc2VhcmNoPSR7cXVlcnl9JnNlYXJjaEJ5PXRpdGxlYDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vdmllc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7XG4gIEdFVF9NT1ZJRV9CWV9JRCxcbiAgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MsXG4gIEdFVF9NT1ZJRV9CWV9JRF9GQUlMLFxufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllID0gKG1vdmllSWQpID0+ICh7XG4gIHR5cGU6IEdFVF9NT1ZJRV9CWV9JRCxcbiAgbW92aWVJZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVTdWNjZXNzID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBHRVRfTU9WSUVfQllfSURfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgTE9BRF9NT1ZJRVMsXG4gIEFERF9NT1ZJRSxcbiAgVVBEQVRFX01PVklFLFxuICBERUxFVEVfTU9WSUUsXG4gIExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBMT0FEX01PVklFU19GQUlMLFxuICBBRERfTU9WSUVfU1VDQ0VTUyxcbiAgQUREX01PVklFX0ZBSUwsXG4gIFVQREFURV9NT1ZJRV9TVUNDRVNTLFxuICBVUERBVEVfTU9WSUVfRkFJTCxcbiAgREVMRVRFX01PVklFX1NVQ0NFU1MsXG4gIERFTEVURV9NT1ZJRV9GQUlMLFxufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGxvYWRNb3ZpZXMgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT4gKHtcbiAgdHlwZTogTE9BRF9NT1ZJRVMsXG4gIGZpbHRlcixcbiAgc29ydCxcbiAgcXVlcnksXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvYWRNb3ZpZXNTdWNjZXNzID0gKG1vdmllcykgPT4gKHtcbiAgdHlwZTogTE9BRF9NT1ZJRVNfU1VDQ0NFU1MsXG4gIG1vdmllcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9hZE1vdmllc0ZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogTE9BRF9NT1ZJRVNfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkTW92aWUgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IEFERF9NT1ZJRSxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1vdmllU3VjY2VzcyA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogQUREX01PVklFX1NVQ0NFU1MsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogQUREX01PVklFX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfTU9WSUUsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZVN1Y2Nlc3MgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IFVQREFURV9NT1ZJRV9TVUNDRVNTLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IFVQREFURV9NT1ZJRV9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZSA9IChpZCkgPT4gKHtcbiAgdHlwZTogREVMRVRFX01PVklFLFxuICBpZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWVTdWNjZXNzID0gKGlkKSA9PiAoe1xuICB0eXBlOiBERUxFVEVfTU9WSUVfU1VDQ0VTUyxcbiAgaWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBERUxFVEVfTU9WSUVfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IExPQURfTU9WSUVTID0gJ0xPQURfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBMT0FEX01PVklFU19TVUNDQ0VTUyA9ICdMT0FEX01PVklFU19TVUNDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9NT1ZJRVNfRkFJTCA9ICdMT0FEX01PVklFU19GQUlMJztcbmV4cG9ydCBjb25zdCBBRERfTU9WSUUgPSAnQUREX01PVklFJztcbmV4cG9ydCBjb25zdCBBRERfTU9WSUVfU1VDQ0VTUyA9ICdBRERfTU9WSUVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX01PVklFX0ZBSUwgPSAnQUREX01PVklFX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9NT1ZJRSA9ICdVUERBVEVfTU9WSUUnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9NT1ZJRV9TVUNDRVNTID0gJ1VQREFURV9NT1ZJRV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUVfRkFJTCA9ICdVUERBVEVfTU9WSUVfRkFJTCc7XG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFID0gJ0RFTEVURV9NT1ZJRSc7XG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFX1NVQ0NFU1MgPSAnREVMRVRFX01PVklFX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRV9GQUlMID0gJ0RFTEVURV9NT1ZJRV9GQUlMJztcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfQllfSUQgPSAnR0VUX01PVklFX0JZX0lEJztcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyA9ICdHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgR0VUX01PVklFX0JZX0lEX0ZBSUwgPSAnR0VUX01PVklFX0JZX0lEX0ZBSUwnO1xuIiwiaW1wb3J0IHtcbiAgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MsXG4gIEdFVF9NT1ZJRV9CWV9JRF9GQUlMLFxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaGVhZGVyUmVkdWNlciA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ubW92aWU7XG4gICAgY2FzZSBHRVRfTU9WSUVfQllfSURfRkFJTDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJSZWR1Y2VyO1xuIiwiaW1wb3J0IHtcbiAgTE9BRF9NT1ZJRVNfU1VDQ0NFU1MsXG4gIEFERF9NT1ZJRV9TVUNDRVNTLFxuICBVUERBVEVfTU9WSUVfRkFJTCxcbiAgREVMRVRFX01PVklFX0ZBSUwsXG4gIExPQURfTU9WSUVTX0ZBSUwsXG4gIEFERF9NT1ZJRV9GQUlMLFxuICBVUERBVEVfTU9WSUVfU1VDQ0VTUyxcbiAgREVMRVRFX01PVklFX1NVQ0NFU1MsXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBtb3ZpZXNSZWR1Y2VyID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEX01PVklFU19TVUNDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ubW92aWVzO1xuICAgIGNhc2UgQUREX01PVklFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ubW92aWVdO1xuICAgIGNhc2UgVVBEQVRFX01PVklFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gc3RhdGUubWFwKChtb3ZpZSkgPT4ge1xuICAgICAgICBpZiAobW92aWUuaWQgPT09IGFjdGlvbi5tb3ZpZS5pZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5hY3Rpb24ubW92aWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92aWU7XG4gICAgICB9KTtcbiAgICBjYXNlIERFTEVURV9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5maWx0ZXIoKG1vdmllKSA9PiBtb3ZpZS5pZCAhPT0gYWN0aW9uLmlkKV07XG4gICAgY2FzZSBMT0FEX01PVklFU19GQUlMOlxuICAgIGNhc2UgQUREX01PVklFX0ZBSUw6XG4gICAgY2FzZSBVUERBVEVfTU9WSUVfRkFJTDpcbiAgICBjYXNlIERFTEVURV9NT1ZJRV9GQUlMOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmllc1JlZHVjZXI7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IE1vdmllc1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvTW92aWVzU2VydmljZSc7XG5cbmltcG9ydCB7IGdldE1vdmllU3VjY2VzcywgZ2V0TW92aWVGYWlsIH0gZnJvbSAnLi9hY3Rpb25zL2hlYWRlcic7XG5pbXBvcnQge1xuICBsb2FkTW92aWVzU3VjY2VzcyxcbiAgbG9hZE1vdmllc0ZhaWwsXG4gIGFkZE1vdmllU3VjY2VzcyxcbiAgYWRkTW92aWVGYWlsLFxuICB1cGRhdGVNb3ZpZVN1Y2Nlc3MsXG4gIHVwZGF0ZU1vdmllRmFpbCxcbiAgZGVsZXRlTW92aWVTdWNjZXNzLFxuICBkZWxldGVNb3ZpZUZhaWwsXG59IGZyb20gJy4vYWN0aW9ucy9tb3ZpZXMnO1xuaW1wb3J0IHtcbiAgTE9BRF9NT1ZJRVMsXG4gIEFERF9NT1ZJRSxcbiAgREVMRVRFX01PVklFLFxuICBVUERBVEVfTU9WSUUsXG4gIEdFVF9NT1ZJRV9CWV9JRCxcbn0gZnJvbSAnLi9hY3Rpb25zL3R5cGVzJztcblxuZnVuY3Rpb24qIGdldEFsbE1vdmllcyh7IGZpbHRlciwgc29ydCwgcXVlcnkgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vdmllcyA9IHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5mZXRjaE1vdmllcywgZmlsdGVyLCBzb3J0LCBxdWVyeSk7XG4gICAgeWllbGQgcHV0KGxvYWRNb3ZpZXNTdWNjZXNzKG1vdmllcy5kYXRhKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQobG9hZE1vdmllc0ZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGdldE1vdmllKHsgbW92aWVJZCB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbW92aWUgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuZ2V0TW92aWVCeUlkLCBtb3ZpZUlkKTtcbiAgICB5aWVsZCBwdXQoZ2V0TW92aWVTdWNjZXNzKG1vdmllKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoZ2V0TW92aWVGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5mdW5jdGlvbiogYWRkTW92aWUoeyBtb3ZpZSB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYWRkZWRNb3ZpZSA9IHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5hZGRNb3ZpZSwgbW92aWUpO1xuICAgIHlpZWxkIHB1dChhZGRNb3ZpZVN1Y2Nlc3MoYWRkZWRNb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGFkZE1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogdXBkYXRlTW92aWUoeyBtb3ZpZSB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLnVwZGF0ZU1vdmllLCBtb3ZpZSk7XG4gICAgeWllbGQgcHV0KHVwZGF0ZU1vdmllU3VjY2Vzcyhtb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KHVwZGF0ZU1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZGVsZXRlTW92aWUoeyBpZCB9KSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmRlbGV0ZU1vdmllLCBpZCk7XG4gICAgeWllbGQgcHV0KGRlbGV0ZU1vdmllU3VjY2VzcyhpZCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGRlbGV0ZU1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogbW92aWVzU2FnYXMoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX01PVklFUywgZ2V0QWxsTW92aWVzKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KEFERF9NT1ZJRSwgYWRkTW92aWUpO1xuICB5aWVsZCB0YWtlRXZlcnkoVVBEQVRFX01PVklFLCB1cGRhdGVNb3ZpZSk7XG4gIHlpZWxkIHRha2VFdmVyeShERUxFVEVfTU9WSUUsIGRlbGV0ZU1vdmllKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KEdFVF9NT1ZJRV9CWV9JRCwgZ2V0TW92aWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtb3ZpZXNTYWdhcztcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcblxuaW1wb3J0IGhlYWRlclJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9oZWFkZXInO1xuaW1wb3J0IG1vdmllc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9tb3ZpZXMnO1xuaW1wb3J0IG1vdmllc1NhZ2FzIGZyb20gJy4vc2FnYXMnO1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICBjb21iaW5lUmVkdWNlcnMoeyBtb3ZpZXM6IG1vdmllc1JlZHVjZXIsIG1vdmllOiBoZWFkZXJSZWR1Y2VyIH0pLFxuICBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpXG4pO1xuc2FnYU1pZGRsZXdhcmUucnVuKG1vdmllc1NhZ2FzKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9