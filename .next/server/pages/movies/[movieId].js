module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/movies/[movieId].js");
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
    onClose: onCloseEditDialog,
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['.MuiPaper-root.MuiMenu-paper.MuiPopover-paper']
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

/***/ "./src/pages/movies/[movieId].js":
/*!***************************************!*\
  !*** ./src/pages/movies/[movieId].js ***!
  \***************************************/
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
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/body */ "./src/components/body/index.js");
/* harmony import */ var _components_error_PageNotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/error/PageNotFound */ "./src/components/error/PageNotFound.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/Layout */ "./src/components/layout/Layout.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/store */ "./src/store/store.js");









var isServer = true;

var App = function App() {
  if (isServer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: _store_store__WEBPACK_IMPORTED_MODULE_8__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_body__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib2R5L0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9HZW5yZXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9Nb3ZpZXNTb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9ib2R5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvRGVsZXRlTW92aWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvTW92aWVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L1VwZGF0ZU1vdmllRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllQ2FyZC9Nb3ZpZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvbW92aWVDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvRXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9BZGRNb3ZpZURpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvTW92aWVEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vdmllRGV0YWlscy9tb3ZpZURldGFpbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9zZWFyY2hCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VTZXNzaW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbW92aWVzL1ttb3ZpZUlkXS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvTW92aWVzU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvbW92aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL21vdmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc2FnYXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIkJvZHkiLCJtb3ZpZXMiLCJsb2FkTW92aWVzIiwidXNlU2Vzc2lvblN0b3JhZ2UiLCJjdXJyZW50RmlsdGVyIiwic2V0Q3VycmVudEZpbHRlciIsImN1cnJlbnRTb3J0Iiwic2V0Q3VycmVudFNvcnQiLCJzZWFyY2hRdWVyeSIsInVzZUxvY2F0aW9uIiwic2VhcmNoIiwicXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJ1c2VFZmZlY3QiLCJvbkZpbHRlckNsaWNrIiwiZ2VucmUiLCJvblNvcnRDaGFuZ2UiLCJzb3J0Iiwic3R5bGVzIiwiYm9keSIsInN1Ym1lbnUiLCJsZW5ndGgiLCJub01vdmllcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsImlkIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwic3RyaW5nIiwicG9zdGVyX3BhdGgiLCJyZWxlYXNlX2RhdGUiLCJnZW5yZXMiLCJ2b3RlX2F2ZXJhZ2UiLCJ0YWdsaW5lIiwidm90ZV9jb3VudCIsIm92ZXJ2aWV3IiwiYnVkZ2V0IiwicmV2ZW51ZSIsInJ1bnRpbWUiLCJmdW5jIiwiR2VucmVzRmlsdGVyIiwic2VsZWN0ZWRGaWx0ZXIiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJnZW5yZXNGaWx0ZXIiLCJtYXAiLCJpdGVtIiwiTW92aWVzU29ydGVyIiwic2VsZWN0ZWRTb3J0Iiwic29ydEZvcm0iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0IiwiRGVsZXRlTW92aWVEaWFsb2ciLCJvcGVuIiwibW92aWVJZCIsIm9uQ2xvc2UiLCJvbkRlbGV0ZSIsIm9uQ2xvc2VEZWxldGVEaWFsb2ciLCJib29sIiwiTW92aWVMaXN0IiwibW92aWVMaXN0IiwibW92aWUiLCJVcGRhdGVNb3ZpZURpYWxvZyIsIm9uVXBkYXRlIiwic2V0R2VucmVzIiwib25DbG9zZUVkaXREaWFsb2ciLCJvbkNoYW5nZUdlbnJlcyIsInNldEZpZWxkVmFsdWUiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsInZhbHVlcyIsIm9uU3VibWl0IiwiZmllbGRzIiwiY29sb3IiLCJNT1ZJRV9GSUVMRFMiLCJUSVRMRSIsIlJFTEVBU0VfREFURSIsIlBPU1RFUl9QQVRIIiwiR0VOUkVTIiwiZ2VucmVzQXJyYXkiLCJPVkVSVklFVyIsIlJVTlRJTUUiLCJ1cmwiLCJNb3ZpZUNhcmQiLCJ1cGRhdGVNb3ZpZSIsImRlbGV0ZU1vdmllIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm9wZW5EZWxldGUiLCJzZXRPcGVuRGVsZXRlIiwib3BlbkVkaXQiLCJzZXRPcGVuRWRpdCIsImhhbmRsZUNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsIm9uRWRpdE1lbnVJdGVtQ2xpY2siLCJvbkRlbGV0ZU1lbnVJdGVtQ2xpY2siLCJvbkRlbGV0ZU1vdmllIiwib25VcGRhdGVNb3ZpZSIsIm0iLCJtb3ZpZUNhcmQiLCJtb3ZpZUluZm8iLCJpbmZvRmlyc3RSb3ciLCJtb3ZpZVJlbGVhc2VZZWFyIiwic3BsaXQiLCJqb2luIiwiY2FyZE1lbnVJY29uIiwiQm9vbGVhbiIsInl1cCIsInJlcXVpcmVkIiwibWluIiwiRXJyb3JCb3VuZGFyeSIsInByb3BzIiwiaGFzRXJyb3IiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlBhZ2VOb3RGb3VuZCIsImVycm9yUGFnZSIsImxvZ28iLCJlcnJvckNvbnRlbnQiLCJlcnJvciIsImhvbWVMaW5rIiwiRm9vdGVyIiwiZm9vdGVyIiwibG9nb0Zvb3RlciIsIkFkZE1vdmllRGlhbG9nIiwib25BZGQiLCJvbkNsb3NlQWRkRGlhbG9nIiwiaGFuZGxlU3VibWl0IiwiSGVhZGVyIiwiYWRkTW92aWUiLCJvcGVuQWRkIiwic2V0T3BlbkFkZCIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaXNTZXJ2ZXIiLCJvbkFkZE1vdmllQ2xpY2siLCJvbkFkZE1vdmllIiwiaGVhZGVyIiwic3ViaGVhZGVyIiwicHVzaCIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJNb3ZpZURldGFpbHMiLCJnZXRNb3ZpZSIsInVzZVBhcmFtcyIsIk51bWJlciIsIm1vdmllRGV0YWlscyIsInBvc3RlciIsImluZm8iLCJmaXJzdFJvdyIsInJhdGluZyIsInRoaXJkUm93IiwicmVsZWFzZURhdGUiLCJkZWZhdWx0UHJvcHMiLCJTZWFyY2hCYXIiLCJvblNlYXJjaE1vdmllcyIsInNlYXJjaEJhciIsInNlYXJjaElucHV0IiwiTGF5b3V0IiwibWFpbmxheW91dCIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImFycmF5Iiwic3RvcmFnZUtleSIsInNlc3Npb25TdG9yYWdlIiwic2V0VmFsdWUiLCJzZXRJdGVtIiwiQXBwIiwic3RvcmUiLCJNb3ZpZXNTZXJ2aWNlIiwiZmlsdGVyIiwiZmV0Y2giLCJidWlsZFVybCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYXBpVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiR0VUX01PVklFX0JZX0lEIiwiZ2V0TW92aWVTdWNjZXNzIiwiR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MiLCJnZXRNb3ZpZUZhaWwiLCJtZXNzYWdlIiwiR0VUX01PVklFX0JZX0lEX0ZBSUwiLCJMT0FEX01PVklFUyIsImxvYWRNb3ZpZXNTdWNjZXNzIiwiTE9BRF9NT1ZJRVNfU1VDQ0NFU1MiLCJsb2FkTW92aWVzRmFpbCIsIkxPQURfTU9WSUVTX0ZBSUwiLCJBRERfTU9WSUUiLCJhZGRNb3ZpZVN1Y2Nlc3MiLCJBRERfTU9WSUVfU1VDQ0VTUyIsImFkZE1vdmllRmFpbCIsIkFERF9NT1ZJRV9GQUlMIiwiVVBEQVRFX01PVklFIiwidXBkYXRlTW92aWVTdWNjZXNzIiwiVVBEQVRFX01PVklFX1NVQ0NFU1MiLCJ1cGRhdGVNb3ZpZUZhaWwiLCJVUERBVEVfTU9WSUVfRkFJTCIsIkRFTEVURV9NT1ZJRSIsImRlbGV0ZU1vdmllU3VjY2VzcyIsIkRFTEVURV9NT1ZJRV9TVUNDRVNTIiwiZGVsZXRlTW92aWVGYWlsIiwiREVMRVRFX01PVklFX0ZBSUwiLCJoZWFkZXJSZWR1Y2VyIiwiYWN0aW9uIiwibW92aWVzUmVkdWNlciIsImdldEFsbE1vdmllcyIsIm1vdmllc1NhZ2FzIiwiY2FsbCIsImZldGNoTW92aWVzIiwicHV0IiwiZGF0YSIsImdldE1vdmllQnlJZCIsImFkZGVkTW92aWUiLCJ0YWtlRXZlcnkiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL21vdmllcy9bbW92aWVJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9tb3ZpZXMvW21vdmllSWRdLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIFJlZGlyZWN0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgdXNlU2Vzc2lvblN0b3JhZ2UgZnJvbSAnLi4vLi4vaG9va3MvdXNlU2Vzc2lvblN0b3JhZ2UnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vZXJyb3IvRXJyb3JCb3VuZGFyeSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ib2R5Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBHZW5yZXNGaWx0ZXIgZnJvbSAnLi9HZW5yZXNGaWx0ZXInO1xuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL21vdmllTGlzdC9Nb3ZpZUxpc3QnO1xuaW1wb3J0IE1vdmllc1NvcnRlciBmcm9tICcuL01vdmllc1NvcnRlcic7XG5cbmNvbnN0IEJvZHkgPSAoeyBtb3ZpZXMsIGxvYWRNb3ZpZXMgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudEZpbHRlciwgc2V0Q3VycmVudEZpbHRlcl0gPSB1c2VTZXNzaW9uU3RvcmFnZSgnZmlsdGVyJyk7XG4gIGNvbnN0IFtjdXJyZW50U29ydCwgc2V0Q3VycmVudFNvcnRdID0gdXNlU2Vzc2lvblN0b3JhZ2UoJ3NvcnQnKTtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSB1c2VMb2NhdGlvbigpLnNlYXJjaDtcbiAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFF1ZXJ5KS5nZXQoJ3NlYXJjaCcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZE1vdmllcyhjdXJyZW50RmlsdGVyLCBjdXJyZW50U29ydCwgcXVlcnkpO1xuICB9LCBbY3VycmVudEZpbHRlciwgY3VycmVudFNvcnQsIHF1ZXJ5LCBsb2FkTW92aWVzXSk7XG5cbiAgY29uc3Qgb25GaWx0ZXJDbGljayA9IChnZW5yZSkgPT4ge1xuICAgIHNldEN1cnJlbnRGaWx0ZXIoZ2VucmUpO1xuICB9O1xuXG4gIGNvbnN0IG9uU29ydENoYW5nZSA9IChzb3J0KSA9PiB7XG4gICAgc2V0Q3VycmVudFNvcnQoc29ydCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9IGZpeGVkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtZW51fT5cbiAgICAgICAgPEdlbnJlc0ZpbHRlciBvbkZpbHRlckNsaWNrPXtvbkZpbHRlckNsaWNrfSBzZWxlY3RlZEZpbHRlcj17Y3VycmVudEZpbHRlcn0gLz5cbiAgICAgICAgPE1vdmllc1NvcnRlciBvblNvcnRDaGFuZ2U9e29uU29ydENoYW5nZX0gc2VsZWN0ZWRTb3J0PXtjdXJyZW50U29ydH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3Q+XG4gICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL21vdmllc1wiIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllc1wiPlxuICAgICAgICAgIHshbW92aWVzPy5sZW5ndGggPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub01vdmllc30+Tm8gTW92aWVzIEZvdW5kPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17bW92aWVzfSAvPlxuICAgICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiPlxuICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9wYWdlbm90Zm91bmRcIiAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Cb2R5LnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBwb3N0ZXJfcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgfSksXG4gICkuaXNSZXF1aXJlZCxcbiAgbG9hZE1vdmllczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ib2R5Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgZ2VucmVzID0gWydBbGwnLCAnQWR2ZW50dXJlJywgJ0NvbWVkeScsICdEcmFtYScsICdGYW50YXN5J107XG5cbmNvbnN0IEdlbnJlc0ZpbHRlciA9ICh7IG9uRmlsdGVyQ2xpY2ssIHNlbGVjdGVkRmlsdGVyIH0pID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShzZWxlY3RlZEZpbHRlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdlbnJlc0ZpbHRlcn0+XG4gICAgICB7Z2VucmVzLm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGtleT17Z2VucmV9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb25GaWx0ZXJDbGljayhnZW5yZSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZChnZW5yZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfVxuICAgICAgICA+XG4gICAgICAgICAge2dlbnJlfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR2VucmVzRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25GaWx0ZXJDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRGaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlc0ZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBNb3ZpZXNTb3J0ZXIgPSAoeyBvblNvcnRDaGFuZ2UsIHNlbGVjdGVkU29ydCB9KSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTb3J0KSB7XG4gICAgb25Tb3J0Q2hhbmdlKCdyZWxlYXNlX2RhdGUnKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29ydH0+XG4gICAgICA8cD5Tb3J0IGJ5IDwvcD5cbiAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlcy5zb3J0Rm9ybX0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBsYWJlbElkPVwic2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgaWQ9XCJzaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlbGVjdGVkU29ydH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvblNvcnRDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInZvdGVfYXZlcmFnZVwiPlJhdGluZzwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwicmVsZWFzZV9kYXRlXCI+UmVsZWFzZSBkYXRlPC9NZW51SXRlbT5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVzU29ydGVyLnByb3BUeXBlcyA9IHtcbiAgb25Tb3J0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZFNvcnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllc1NvcnRlcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJib2R5X2JvZHlfXzFTcjdjXCIsXG5cdFwic3VibWVudVwiOiBcImJvZHlfc3VibWVudV9fM19jenZcIixcblx0XCJzb3J0XCI6IFwiYm9keV9zb3J0X18yUWZaLVwiLFxuXHRcIk11aUZvcm1Db250cm9sLXJvb3RcIjogXCJib2R5X011aUZvcm1Db250cm9sLXJvb3RfXzJNNFVCXCIsXG5cdFwic29ydEZvcm1cIjogXCJib2R5X3NvcnRGb3JtX18xOVNTd1wiLFxuXHRcIk11aVNlbGVjdC1zZWxlY3RcIjogXCJib2R5X011aVNlbGVjdC1zZWxlY3RfX0hhbHhJXCIsXG5cdFwiTXVpU2VsZWN0LWljb25cIjogXCJib2R5X011aVNlbGVjdC1pY29uX19WRzhtNVwiLFxuXHRcIk11aUlucHV0LXVuZGVybGluZVwiOiBcImJvZHlfTXVpSW5wdXQtdW5kZXJsaW5lX18xZ1JFMlwiLFxuXHRcImdlbnJlc0ZpbHRlclwiOiBcImJvZHlfZ2VucmVzRmlsdGVyX18xazJMcVwiLFxuXHRcIml0ZW1cIjogXCJib2R5X2l0ZW1fXzFzRDFDXCIsXG5cdFwiYWN0aXZlXCI6IFwiYm9keV9hY3RpdmVfX3IwcXR1XCIsXG5cdFwibW92aWVzLWNvdW50ZXJcIjogXCJib2R5X21vdmllcy1jb3VudGVyX194ZTR3bVwiLFxuXHRcIm5vTW92aWVzXCI6IFwiYm9keV9ub01vdmllc19fMlQxUDVcIlxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGxvYWRNb3ZpZXMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL21vdmllcyc7XG5cbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgbW92aWVzOiBzdGF0ZS5tb3ZpZXMgfSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZE1vdmllcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJvZHkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBEZWxldGVNb3ZpZURpYWxvZyA9ICh7IG9wZW4sIG1vdmllSWQsIG9uQ2xvc2UsIG9uRGVsZXRlIH0pID0+IHtcbiAgY29uc3Qgb25DbG9zZURlbGV0ZURpYWxvZyA9ICgpID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICBkaXNhYmxlQmFja2Ryb3BDbGlja1xuICAgICAgZGlzYWJsZUVzY2FwZUtleURvd25cbiAgICAgIG9wZW49e29wZW59XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlRGVsZXRlRGlhbG9nfVxuICAgICAgbWF4V2lkdGg9XCJsZ1wiXG4gICAgPlxuICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNsb3NlXCIgb25DbGljaz17b25DbG9zZURlbGV0ZURpYWxvZ30+XG4gICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPkRlbGV0ZSBNb3ZpZTwvRGlhbG9nVGl0bGU+XG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJkaWFsb2ctZm9ybS1jb250ZW50XCI+XG4gICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBtb3ZpZT9cbiAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKG1vdmllSWQpfSBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICBDb25maXJtXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgIDwvRGlhbG9nPlxuICApO1xufTtcblxuRGVsZXRlTW92aWVEaWFsb2cucHJvcFR5cGVzID0ge1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbW92aWVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlTW92aWVEaWFsb2c7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vbW92aWVDYXJkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb3ZpZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBNb3ZpZUxpc3QgPSAoeyBtb3ZpZXMgfSkgPT4gKFxuICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVMaXN0fT5cbiAgICB7bW92aWVzPy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICA8TW92aWVDYXJkIGtleT17bW92aWU/LmlkfSBtb3ZpZT17bW92aWV9IC8+XG4gICAgKSl9XG4gIDwvdWw+XG4pO1xuXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KSxcbiAgKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCB7IEZpZWxkLCBGb3JtLCBGb3JtaWtQcm92aWRlciwgRXJyb3JNZXNzYWdlLCB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgZ2VucmVzQXJyYXksIHZhbGlkYXRpb25TY2hlbWEsIE1PVklFX0ZJRUxEUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb3ZpZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBVcGRhdGVNb3ZpZURpYWxvZyA9ICh7IG1vdmllLCBvcGVuLCBvblVwZGF0ZSwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtnZW5yZXMsIHNldEdlbnJlc10gPSB1c2VTdGF0ZShtb3ZpZT8uZ2VucmVzIHx8IFtdKTtcbiAgY29uc3Qgb25DbG9zZUVkaXREaWFsb2cgPSAoKSA9PiB7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlR2VucmVzID0gKHZhbHVlLCBzZXRGaWVsZFZhbHVlKSA9PiB7XG4gICAgc2V0R2VucmVzKHZhbHVlKTtcbiAgICBzZXRGaWVsZFZhbHVlKCdnZW5yZXMnLCB2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBpZDogbW92aWU/LmlkLFxuICAgICAgdGl0bGU6IG1vdmllPy50aXRsZSxcbiAgICAgIHJlbGVhc2VfZGF0ZTogbW92aWU/LnJlbGVhc2VfZGF0ZSxcbiAgICAgIHBvc3Rlcl9wYXRoOiBtb3ZpZT8ucG9zdGVyX3BhdGgsXG4gICAgICBvdmVydmlldzogbW92aWU/Lm92ZXJ2aWV3LFxuICAgICAgcnVudGltZTogbW92aWU/LnJ1bnRpbWUsXG4gICAgICBnZW5yZXMsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxuICAgIHZhbHVlczoge1xuICAgICAgZ2VucmVzLFxuICAgIH0sXG4gICAgb25TdWJtaXQ6IChmaWVsZHMpID0+IHtcbiAgICAgIG9uVXBkYXRlKGZpZWxkcyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrUHJvdmlkZXIgdmFsdWU9e2Zvcm1pa30+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VFZGl0RGlhbG9nfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snLk11aVBhcGVyLXJvb3QuTXVpTWVudS1wYXBlci5NdWlQb3BvdmVyLXBhcGVyJ119XG4gICAgICA+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VFZGl0RGlhbG9nfT5cbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlPkVkaXQgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17c3R5bGVzWydkaWFsb2ctZm9ybS1jb250ZW50J119PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5Nb3ZpZSBJRDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgIHttb3ZpZT8uaWR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PlRpdGxlPC9wPlxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfSAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9IGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImVycm9yXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+UmVsZWFzZSBEYXRlPC9wPlxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9e01PVklFX0ZJRUxEUy5SRUxFQVNFX0RBVEV9IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQnXX0gLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX0gY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiZXJyb3JcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5Nb3ZpZSBVUkw8L3A+XG4gICAgICAgICAgICA8RmllbGQgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119IC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH0gY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiZXJyb3JcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5HZW5yZTwvcD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgICB2YWx1ZT17Z2VucmVzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZUdlbnJlcyhldmVudC50YXJnZXQudmFsdWUsIGZvcm1pay5zZXRGaWVsZFZhbHVlKX1cbiAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dlbnJlc0FycmF5Lm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtnZW5yZX0gdmFsdWU9e2dlbnJlfT5cbiAgICAgICAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJlcnJvclwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119Pk92ZXJ2aWV3PC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJlbXB0eSB0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9IGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImVycm9yXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+UnVudGltZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX0gdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119IC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9e01PVklFX0ZJRUxEUy5SVU5USU1FfSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJlcnJvclwiIC8+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlRWRpdERpYWxvZ30gY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9Gb3JtaWtQcm92aWRlcj5cbiAgKTtcbn07XG5cblVwZGF0ZU1vdmllRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uVXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlTW92aWVEaWFsb2c7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBEZWxldGVNb3ZpZURpYWxvZyBmcm9tICcuLi9EZWxldGVNb3ZpZURpYWxvZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL21vdmllcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVXBkYXRlTW92aWVEaWFsb2cgZnJvbSAnLi4vVXBkYXRlTW92aWVEaWFsb2cnO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSAoeyBtb3ZpZSwgdXBkYXRlTW92aWUsIGRlbGV0ZU1vdmllIH0pID0+IHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29wZW5EZWxldGUsIHNldE9wZW5EZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbkVkaXQsIHNldE9wZW5FZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZS5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICBjb25zdCBvbkVkaXRNZW51SXRlbUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgc2V0T3BlbkVkaXQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGVNZW51SXRlbUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgc2V0T3BlbkRlbGV0ZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZU1vdmllID0gKG1vdmllSWQpID0+IHtcbiAgICBkZWxldGVNb3ZpZShtb3ZpZUlkKTtcbiAgICBzZXRPcGVuRGVsZXRlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZU1vdmllID0gKG0pID0+IHtcbiAgICB1cGRhdGVNb3ZpZShtKTtcbiAgICBzZXRPcGVuRWRpdChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVDYXJkfT5cbiAgICAgIDxMaW5rIHRvPXtgL21vdmllcy8ke21vdmllPy5pZH1gfT5cbiAgICAgICAgPGltZyBzcmM9e21vdmllPy5wb3N0ZXJfcGF0aH0gYWx0PVwiXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVJbmZvfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvRmlyc3RSb3d9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bW92aWU/LnRpdGxlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZVJlbGVhc2VZZWFyfT57bW92aWU/LnJlbGVhc2VfZGF0ZT8uc3BsaXQoJy0nKVswXX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZX0+e21vdmllPy5nZW5yZXM/LmpvaW4oJywgJyl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkTWVudUljb259XG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxNZW51IGlkPVwic2ltcGxlLW1lbnVcIiBhbmNob3JFbD17YW5jaG9yRWx9IGtlZXBNb3VudGVkIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtvbkVkaXRNZW51SXRlbUNsaWNrfSBjbGFzc05hbWU9XCJjYXJkLW1lbnUtaXRlbVwiPlxuICAgICAgICAgIGVkaXRcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e29uRGVsZXRlTWVudUl0ZW1DbGlja30gY2xhc3NOYW1lPVwiY2FyZC1tZW51LWl0ZW1cIj5cbiAgICAgICAgICBkZWxldGVcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPFVwZGF0ZU1vdmllRGlhbG9nIG9wZW49e29wZW5FZGl0fSBtb3ZpZT17bW92aWV9IG9uVXBkYXRlPXtvblVwZGF0ZU1vdmllfSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuRWRpdChmYWxzZSl9IC8+XG4gICAgICAgIDxEZWxldGVNb3ZpZURpYWxvZ1xuICAgICAgICAgIG9wZW49e29wZW5EZWxldGV9XG4gICAgICAgICAgbW92aWVJZD17bW92aWU/LmlkfVxuICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZU1vdmllfVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW5EZWxldGUoZmFsc2UpfVxuICAgICAgICAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5Nb3ZpZUNhcmQucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KS5pc1JlcXVpcmVkLFxuICB1cGRhdGVNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGVsZXRlTW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBkZWxldGVNb3ZpZSwgdXBkYXRlTW92aWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21vdmllcyc7XG5cbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9Nb3ZpZUNhcmQnO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHVwZGF0ZU1vdmllLFxuICBkZWxldGVNb3ZpZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb3ZpZUNhcmQpO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW92aWVMaXN0XCI6IFwibW92aWVzX21vdmllTGlzdF9fMmprcGdcIixcblx0XCJtb3ZpZUNhcmRcIjogXCJtb3ZpZXNfbW92aWVDYXJkX18xZ2VQRlwiLFxuXHRcImNhcmRNZW51SWNvblwiOiBcIm1vdmllc19jYXJkTWVudUljb25fXzJSb05iXCIsXG5cdFwibW92aWVJbmZvXCI6IFwibW92aWVzX21vdmllSW5mb19fMXJOMXdcIixcblx0XCJ0aXRsZVwiOiBcIm1vdmllc190aXRsZV9fOHNvQXNcIixcblx0XCJpbmZvRmlyc3RSb3dcIjogXCJtb3ZpZXNfaW5mb0ZpcnN0Um93X18zbVhfRVwiLFxuXHRcIm1vdmllUmVsZWFzZVllYXJcIjogXCJtb3ZpZXNfbW92aWVSZWxlYXNlWWVhcl9fM014U29cIixcblx0XCJnZW5yZVwiOiBcIm1vdmllc19nZW5yZV9fMnk0dnBcIixcblx0XCJNdWlQYXBlci1yb290XCI6IFwibW92aWVzX011aVBhcGVyLXJvb3RfXzFBUWxtXCIsXG5cdFwiTXVpTWVudS1wYXBlclwiOiBcIm1vdmllc19NdWlNZW51LXBhcGVyX19vaGh4dVwiLFxuXHRcIk11aVBvcG92ZXItcGFwZXJcIjogXCJtb3ZpZXNfTXVpUG9wb3Zlci1wYXBlcl9fMlp1ME1cIixcblx0XCJNdWlCdXR0b25CYXNlLXJvb3RcIjogXCJtb3ZpZXNfTXVpQnV0dG9uQmFzZS1yb290X19abk4tM1wiLFxuXHRcIk11aUxpc3RJdGVtLXJvb3RcIjogXCJtb3ZpZXNfTXVpTGlzdEl0ZW0tcm9vdF9fM3pLSnBcIixcblx0XCJNdWlNZW51SXRlbS1yb290XCI6IFwibW92aWVzX011aU1lbnVJdGVtLXJvb3RfXzFxM0U0XCIsXG5cdFwiY2FyZC1tZW51LWl0ZW1cIjogXCJtb3ZpZXNfY2FyZC1tZW51LWl0ZW1fXzNudVdpXCIsXG5cdFwiTXVpRGlhbG9nLXBhcGVyXCI6IFwibW92aWVzX011aURpYWxvZy1wYXBlcl9fc3ZQZVFcIixcblx0XCJNdWlJbnB1dC11bmRlcmxpbmVcIjogXCJtb3ZpZXNfTXVpSW5wdXQtdW5kZXJsaW5lX18xd09VOFwiLFxuXHRcImRpYWxvZy1mb3JtLWNvbnRlbnRcIjogXCJtb3ZpZXNfZGlhbG9nLWZvcm0tY29udGVudF9fMWlLZjZcIixcblx0XCJlZGl0LWZpZWxkLW5hbWVcIjogXCJtb3ZpZXNfZWRpdC1maWVsZC1uYW1lX18ybVQybFwiLFxuXHRcImVkaXQtZmllbGRcIjogXCJtb3ZpZXNfZWRpdC1maWVsZF9fMkRpTU9cIixcblx0XCJNdWlTZWxlY3QtaWNvblwiOiBcIm1vdmllc19NdWlTZWxlY3QtaWNvbl9fdVhKVm1cIixcblx0XCJlcnJvclwiOiBcIm1vdmllc19lcnJvcl9fMTZXQmtcIixcblx0XCJNdWlJY29uQnV0dG9uLXJvb3RcIjogXCJtb3ZpZXNfTXVpSWNvbkJ1dHRvbi1yb290X18yM0NDR1wiLFxuXHRcIk11aVR5cG9ncmFwaHktaDZcIjogXCJtb3ZpZXNfTXVpVHlwb2dyYXBoeS1oNl9fSVZPSTVcIixcblx0XCJNdWlUeXBvZ3JhcGh5LWNvbG9yVGV4dFNlY29uZGFyeVwiOiBcIm1vdmllc19NdWlUeXBvZ3JhcGh5LWNvbG9yVGV4dFNlY29uZGFyeV9fMVZMMVJcIixcblx0XCJNdWlEaWFsb2dBY3Rpb25zLXNwYWNpbmdcIjogXCJtb3ZpZXNfTXVpRGlhbG9nQWN0aW9ucy1zcGFjaW5nX18xdTBVcVwiLFxuXHRcIk11aUJ1dHRvbi10ZXh0UHJpbWFyeVwiOiBcIm1vdmllc19NdWlCdXR0b24tdGV4dFByaW1hcnlfX0o1UnlQXCIsXG5cdFwiTXVpQnV0dG9uLXRleHRTZWNvbmRhcnlcIjogXCJtb3ZpZXNfTXVpQnV0dG9uLXRleHRTZWNvbmRhcnlfXzJtZ1ZJXCJcbn07XG4iLCJpbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcblxuZXhwb3J0IGNvbnN0IE1PVklFX0ZJRUxEUyA9IHtcbiAgVElUTEU6ICd0aXRsZScsXG4gIFJFTEVBU0VfREFURTogJ3JlbGVhc2VfZGF0ZScsXG4gIFBPU1RFUl9QQVRIOiAncG9zdGVyX3BhdGgnLFxuICBHRU5SRVM6ICdnZW5yZXMnLFxuICBPVkVSVklFVzogJ292ZXJ2aWV3JyxcbiAgUlVOVElNRTogJ3J1bnRpbWUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdlbnJlc0FycmF5ID0gW1xuICAnQWN0aW9uJyxcbiAgJ0FkdmVudHVyZScsXG4gICdBbmltYXRpb24nLFxuICAnQ29tZWR5JyxcbiAgJ0RyYW1hJyxcbiAgJ0ZhbWlseScsXG4gICdGYW50YXN5JyxcbiAgJ1NjaWVuY2UgRmljdGlvbicsXG5dO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xuICB0aXRsZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdUaXRsZSBpcyByZXF1aXJlZCcpLFxuICBwb3N0ZXJfcGF0aDogeXVwLnN0cmluZygpLnVybCgpLnJlcXVpcmVkKCdQb3N0ZXIgdXJsIGlzIHJlcXVpcmVkJyksXG4gIHJlbGVhc2VfZGF0ZTogeXVwLnN0cmluZygpLFxuICBvdmVydmlldzogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdPdmVydmlldyBpcyByZXF1aXJlZCcpLFxuICBydW50aW1lOiB5dXAubnVtYmVyKCkucmVxdWlyZWQoJ1J1bnRpbWUgaXMgcmVxdWlyZWQnKSxcbiAgZ2VucmVzOiB5dXAuYXJyYXkoKS5taW4oMSkucmVxdWlyZWQoJ01pbmltdW0gb25lIGdlbnJlIHNob3VsZCBiZSBzZWxlY3RlZCcpLFxufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKCkge1xuICAgIHJldHVybiB7IGhhc0Vycm9yOiB0cnVlIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaCgpIHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nICg8L2gxPjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvRm9vdGVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vycm9yLm1vZHVsZS5zY3NzJztcblxuY29uc3QgUGFnZU5vdEZvdW5kID0gKCkgPT4gKFxuICA8PlxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JQYWdlfSBmaXhlZD5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvckNvbnRlbnR9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+UGFnZSBOb3QgRm91bmQ8L3A+XG4gICAgICAgIDxMaW5rIHRvPVwiL21vdmllc1wiIGNsYXNzTmFtZT17c3R5bGVzLmhvbWVMaW5rfSB0aXRsZT1cImxpbmtUb0hvbWVcIj5cbiAgICAgICAgICBHbyBCYWNrIFRvIEhvbWVcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICAgPEZvb3RlciAvPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVycm9yUGFnZVwiOiBcImVycm9yX2Vycm9yUGFnZV9fM0FXeW9cIixcblx0XCJsb2dvXCI6IFwiZXJyb3JfbG9nb19fbUl6MG1cIixcblx0XCJlcnJvckNvbnRlbnRcIjogXCJlcnJvcl9lcnJvckNvbnRlbnRfXzF2NkZrXCIsXG5cdFwiZXJyb3JcIjogXCJlcnJvcl9lcnJvcl9fMnVwT2pcIixcblx0XCJob21lTGlua1wiOiBcImVycm9yX2hvbWVMaW5rX18zb1dHM1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0gZml4ZWQ+XG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0Zvb3Rlcn0gYWx0PVwibG9nb1wiIC8+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX2Zvb3Rlcl9fMmpfRnJcIixcblx0XCJsb2dvRm9vdGVyXCI6IFwiZm9vdGVyX2xvZ29Gb290ZXJfXzJqSzhlXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IHsgRmllbGQsIEZvcm0sIEZvcm1pa1Byb3ZpZGVyLCBFcnJvck1lc3NhZ2UsIHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZW5yZXNBcnJheSwgdmFsaWRhdGlvblNjaGVtYSwgTU9WSUVfRklFTERTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgQWRkTW92aWVEaWFsb2cgPSAoeyBvcGVuLCBvbkFkZCwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtnZW5yZXMsIHNldEdlbnJlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgb25DbG9zZUFkZERpYWxvZyA9ICgpID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VHZW5yZXMgPSAodmFsdWUsIHNldEZpZWxkVmFsdWUpID0+IHtcbiAgICBzZXRHZW5yZXModmFsdWUpO1xuICAgIHNldEZpZWxkVmFsdWUoJ2dlbnJlcycsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHJlbGVhc2VfZGF0ZTogJycsXG4gICAgICBwb3N0ZXJfcGF0aDogJycsXG4gICAgICBnZW5yZXMsXG4gICAgICBvdmVydmlldzogJycsXG4gICAgICBydW50aW1lOiAnJyxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWEsXG4gICAgdmFsdWVzOiB7XG4gICAgICBnZW5yZXMsXG4gICAgfSxcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xuICAgICAgb25BZGQodmFsdWVzKTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtaWtQcm92aWRlciB2YWx1ZT17Zm9ybWlrfT5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgZGlzYWJsZUJhY2tkcm9wQ2xpY2tcbiAgICAgICAgZGlzYWJsZUVzY2FwZUtleURvd25cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17b25DbG9zZUFkZERpYWxvZ31cbiAgICAgID5cbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNsb3NlXCIgb25DbGljaz17b25DbG9zZUFkZERpYWxvZ30+XG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxGb3JtIHRpdGxlPVwiYWRkLW1vdmllXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPkFkZCBNb3ZpZTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwiZGlhbG9nLWZvcm0tY29udGVudFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+VGl0bGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW92aWUgVGl0bGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlRJVExFfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+UmVsZWFzZSBEYXRlPC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgRGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInJlbGVhc2VfZGF0ZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwicmVsZWFzZV9kYXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SRUxFQVNFX0RBVEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5Nb3ZpZSBVUkw8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUE9TVEVSX1BBVEh9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW92aWUgVVJMIGhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJwb3N0ZXJfcGF0aFwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwicG9zdGVyX3BhdGhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+R2VucmU8L3A+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLkdFTlJFU31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtnZW5yZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VHZW5yZXMoZXZlbnQudGFyZ2V0LnZhbHVlLCBmb3JtaWsuc2V0RmllbGRWYWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICB0aXRsZT1cImdlbnJlc1wiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZ2VucmVzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dlbnJlc0FycmF5Lm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtnZW5yZX0gdmFsdWU9e2dlbnJlfT5cbiAgICAgICAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+T3ZlcnZpZXc8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5PVkVSVklFV31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPdmVydmlldyBIZXJlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwib3ZlcnZpZXdcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm92ZXJ2aWV3XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5PVkVSVklFV31cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPlJ1bnRpbWU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SVU5USU1FfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJ1bnRpbWUgSGVyZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInJ1bnRpbWVcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInJ1bnRpbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlQWRkRGlhbG9nfVxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicmVzZXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInN1Ym1pdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L0Zvcm1pa1Byb3ZpZGVyPlxuICApO1xufTtcblxuQWRkTW92aWVEaWFsb2cucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkFkZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE1vdmllRGlhbG9nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEFkZE1vdmllRGlhbG9nIGZyb20gJy4vQWRkTW92aWVEaWFsb2cnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTW92aWVEZXRhaWxzIGZyb20gJy4vbW92aWVEZXRhaWxzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2hCYXIvU2VhcmNoQmFyJztcblxuY29uc3QgSGVhZGVyID0gKHsgYWRkTW92aWUgfSkgPT4ge1xuICBjb25zdCBbb3BlbkFkZCwgc2V0T3BlbkFkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5cbiAgY29uc3Qgb25BZGRNb3ZpZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW5BZGQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25BZGRNb3ZpZSA9IChtb3ZpZSkgPT4ge1xuICAgIGFkZE1vdmllKG1vdmllKTtcbiAgICBzZXRPcGVuQWRkKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0gZml4ZWQ+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZXMvOm1vdmllSWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YmhlYWRlcn0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnLycpfT5cbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gZm9udFNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzU2VydmVyID8gdXNlUm91dGVyKCkucGF0aG5hbWUuaW5jbHVkZXMoJ21vdmllSWQnKSA/IDxNb3ZpZURldGFpbHMgLz4gOiBudWxsIDogPE1vdmllRGV0YWlscyAvPn1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGlkPVwiYnV0dG9uLWFkZC1tb3ZpZVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtvbkFkZE1vdmllQ2xpY2t9PlxuICAgICAgICAgICAgICArIEFkZCBNb3ZpZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QWRkTW92aWVEaWFsb2cgb3Blbj17b3BlbkFkZH0gb25BZGQ9e29uQWRkTW92aWV9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5BZGQoZmFsc2UpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc1NlcnZlciA/IHVzZVJvdXRlcigpLnBhdGhuYW1lLmluY2x1ZGVzKCdtb3ZpZUlkJykgPyBudWxsIDogPFNlYXJjaEJhciAvPiA6IDxTZWFyY2hCYXIgLz59XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGFkZE1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyX2hlYWRlcl9fMnBMaVhcIixcblx0XCJzdWJoZWFkZXJcIjogXCJoZWFkZXJfc3ViaGVhZGVyX181V3c2MVwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fMjRmd0RcIixcblx0XCJidXR0b24tYWRkLW1vdmllXCI6IFwiaGVhZGVyX2J1dHRvbi1hZGQtbW92aWVfXzI4YzVaXCIsXG5cdFwiTXVpSWNvbkJ1dHRvbi1yb290XCI6IFwiaGVhZGVyX011aUljb25CdXR0b24tcm9vdF9fTWFFNXNcIlxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGFkZE1vdmllIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9tb3ZpZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBhZGRNb3ZpZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVEZXRhaWxzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVEZXRhaWxzID0gKHsgbW92aWUsIGdldE1vdmllIH0pID0+IHtcbiAgY29uc3QgeyBtb3ZpZUlkIH0gPSB1c2VQYXJhbXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1vdmllKE51bWJlcihtb3ZpZUlkKSk7XG4gIH0sIFttb3ZpZUlkLCBnZXRNb3ZpZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZURldGFpbHN9PlxuICAgICAgPGltZyBzcmM9e21vdmllPy5wb3N0ZXJfcGF0aH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMucG9zdGVyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maXJzdFJvd30+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bW92aWU/LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9Pnttb3ZpZT8udm90ZV9hdmVyYWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdsaW5lfT57bW92aWU/LnRhZ2xpbmV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGhpcmRSb3d9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsZWFzZURhdGV9Pnttb3ZpZT8ucmVsZWFzZV9kYXRlPy5zcGxpdCgnLScpWzBdfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucnVudGltZX0+e21vdmllPy5ydW50aW1lfSBtaW48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9Pnttb3ZpZT8ub3ZlcnZpZXd9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllRGV0YWlscy5kZWZhdWx0UHJvcHMgPSB7XG4gIG1vdmllOiBudWxsLFxufTtcblxuTW92aWVEZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGdldE1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVEZXRhaWxzO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0TW92aWUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2hlYWRlcic7XG5cbmltcG9ydCBNb3ZpZURldGFpbHMgZnJvbSAnLi9Nb3ZpZURldGFpbHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7IG1vdmllOiBzdGF0ZS5tb3ZpZSB9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRNb3ZpZSxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb3ZpZURldGFpbHMpO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW92aWVEZXRhaWxzXCI6IFwibW92aWVEZXRhaWxzX21vdmllRGV0YWlsc19fMkZvS0FcIixcblx0XCJwb3N0ZXJcIjogXCJtb3ZpZURldGFpbHNfcG9zdGVyX18xRWRWblwiLFxuXHRcImluZm9cIjogXCJtb3ZpZURldGFpbHNfaW5mb19fMnpQZDlcIixcblx0XCJmaXJzdFJvd1wiOiBcIm1vdmllRGV0YWlsc19maXJzdFJvd19fMUVDbENcIixcblx0XCJ0aXRsZVwiOiBcIm1vdmllRGV0YWlsc190aXRsZV9fT2hwLWpcIixcblx0XCJyYXRpbmdcIjogXCJtb3ZpZURldGFpbHNfcmF0aW5nX19rSnFsS1wiLFxuXHRcInRoaXJkUm93XCI6IFwibW92aWVEZXRhaWxzX3RoaXJkUm93X18xWjFfV1wiLFxuXHRcInJlbGVhc2VEYXRlXCI6IFwibW92aWVEZXRhaWxzX3JlbGVhc2VEYXRlX18yUlgxR1wiLFxuXHRcInJ1bnRpbWVcIjogXCJtb3ZpZURldGFpbHNfcnVudGltZV9fM2ViX2VcIixcblx0XCJkYXJrXCI6IFwibW92aWVEZXRhaWxzX2RhcmtfX3VGZE1GXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlYXJjaEJhci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBvblNlYXJjaE1vdmllcyA9IChxdWVyeSkgPT4ge1xuICAgIGhpc3RvcnkucHVzaChgL21vdmllcz9zZWFyY2g9JHtxdWVyeX1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQmFyfT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5maW5kIHlvdXIgbW92aWU8L3A+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXsoZmllbGRzKSA9PiB7XG4gICAgICAgICAgb25TZWFyY2hNb3ZpZXMoZmllbGRzLnF1ZXJ5KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPEZpZWxkIHR5cGU9XCJzZWFyY2hcIiB2YXJpYW50PVwiZmlsbGVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBpZD17c3R5bGVzLnNlYXJjaElucHV0fSBuYW1lPVwicXVlcnlcIiAvPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaEJhclwiOiBcInNlYXJjaEJhcl9zZWFyY2hCYXJfXzFNQ2E3XCIsXG5cdFwidGl0bGVcIjogXCJzZWFyY2hCYXJfdGl0bGVfXzJFLThJXCIsXG5cdFwic2VhcmNoSW5wdXRcIjogXCJzZWFyY2hCYXJfc2VhcmNoSW5wdXRfXzNYdUJOXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbmxheW91dH0+e2NoaWxkcmVufTwvZGl2PjtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWlubGF5b3V0XCI6IFwibGF5b3V0X21haW5sYXlvdXRfXzF1T0t2XCJcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VTZXNzaW9uU3RvcmFnZSA9IChzdG9yYWdlS2V5KSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocHJvY2Vzcy5icm93c2VyID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSA6IG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIHZhbHVlKTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgc3RvcmFnZUtleV0pO1xuXG4gIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlc3Npb25TdG9yYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZSwgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEJvZHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ib2R5JztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnO1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhdGljUm91dGVyPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPEJvZHkgLz5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcGFnZW5vdGZvdW5kXCI+XG4gICAgICAgICAgICA8UGFnZU5vdEZvdW5kIC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgIDxCb2R5IC8+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJjbGFzcyBNb3ZpZXNTZXJ2aWNlIHtcbiAgYXBpVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9tb3ZpZXMvJztcblxuICBmZXRjaE1vdmllcyA9IChmaWx0ZXIsIHNvcnQsIHF1ZXJ5KSA9PlxuICAgIGZldGNoKHRoaXMuYnVpbGRVcmwoZmlsdGVyLCBzb3J0LCBxdWVyeSkpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgZ2V0TW92aWVCeUlkID0gKG1vdmllSWQpID0+XG4gICAgZmV0Y2godGhpcy5hcGlVUkwgKyBtb3ZpZUlkKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGFkZE1vdmllID0gKG1vdmllKSA9PlxuICAgIGZldGNoKHRoaXMuYXBpVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtb3ZpZSksXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICB1cGRhdGVNb3ZpZSA9IChtb3ZpZSkgPT5cbiAgICBmZXRjaCh0aGlzLmFwaVVSTCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtb3ZpZSksXG4gICAgfSk7XG5cbiAgZGVsZXRlTW92aWUgPSAoaWQpID0+IGZldGNoKHRoaXMuYXBpVVJMICsgaWQsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcblxuICBidWlsZFVybCA9IChmaWx0ZXIsIHNvcnQsIHF1ZXJ5KSA9PiB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuYXBpVVJMfT9zb3J0Qnk9JHtzb3J0fSZzb3J0T3JkZXI9ZGVzY2A7XG4gICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIgIT09ICdBbGwnKSB7XG4gICAgICB1cmwgKz0gYD9maWx0ZXI9JHtmaWx0ZXJ9YDtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICB1cmwgKz0gYCZzZWFyY2g9JHtxdWVyeX0mc2VhcmNoQnk9dGl0bGVgO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTW92aWVzU2VydmljZSgpO1xuIiwiaW1wb3J0IHtcbiAgR0VUX01PVklFX0JZX0lELFxuICBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyxcbiAgR0VUX01PVklFX0JZX0lEX0ZBSUwsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWUgPSAobW92aWVJZCkgPT4gKHtcbiAgdHlwZTogR0VUX01PVklFX0JZX0lELFxuICBtb3ZpZUlkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZVN1Y2Nlc3MgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IEdFVF9NT1ZJRV9CWV9JRF9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG4iLCJpbXBvcnQge1xuICBMT0FEX01PVklFUyxcbiAgQUREX01PVklFLFxuICBVUERBVEVfTU9WSUUsXG4gIERFTEVURV9NT1ZJRSxcbiAgTE9BRF9NT1ZJRVNfU1VDQ0NFU1MsXG4gIExPQURfTU9WSUVTX0ZBSUwsXG4gIEFERF9NT1ZJRV9TVUNDRVNTLFxuICBBRERfTU9WSUVfRkFJTCxcbiAgVVBEQVRFX01PVklFX1NVQ0NFU1MsXG4gIFVQREFURV9NT1ZJRV9GQUlMLFxuICBERUxFVEVfTU9WSUVfU1VDQ0VTUyxcbiAgREVMRVRFX01PVklFX0ZBSUwsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbG9hZE1vdmllcyA9IChmaWx0ZXIsIHNvcnQsIHF1ZXJ5KSA9PiAoe1xuICB0eXBlOiBMT0FEX01PVklFUyxcbiAgZmlsdGVyLFxuICBzb3J0LFxuICBxdWVyeSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9hZE1vdmllc1N1Y2Nlc3MgPSAobW92aWVzKSA9PiAoe1xuICB0eXBlOiBMT0FEX01PVklFU19TVUNDQ0VTUyxcbiAgbW92aWVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkTW92aWVzRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBMT0FEX01PVklFU19GQUlMLFxuICBtZXNzYWdlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRNb3ZpZSA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogQUREX01PVklFLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkTW92aWVTdWNjZXNzID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBBRERfTU9WSUVfU1VDQ0VTUyxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBBRERfTU9WSUVfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWUgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IFVQREFURV9NT1ZJRSxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllU3VjY2VzcyA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX01PVklFX1NVQ0NFU1MsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX01PVklFX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllID0gKGlkKSA9PiAoe1xuICB0eXBlOiBERUxFVEVfTU9WSUUsXG4gIGlkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZVN1Y2Nlc3MgPSAoaWQpID0+ICh7XG4gIHR5cGU6IERFTEVURV9NT1ZJRV9TVUNDRVNTLFxuICBpZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IERFTEVURV9NT1ZJRV9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG4iLCJleHBvcnQgY29uc3QgTE9BRF9NT1ZJRVMgPSAnTE9BRF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IExPQURfTU9WSUVTX1NVQ0NDRVNTID0gJ0xPQURfTU9WSUVTX1NVQ0NDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX01PVklFU19GQUlMID0gJ0xPQURfTU9WSUVTX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRSA9ICdBRERfTU9WSUUnO1xuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRV9TVUNDRVNTID0gJ0FERF9NT1ZJRV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfTU9WSUVfRkFJTCA9ICdBRERfTU9WSUVfRkFJTCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFID0gJ1VQREFURV9NT1ZJRSc7XG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFX1NVQ0NFU1MgPSAnVVBEQVRFX01PVklFX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9NT1ZJRV9GQUlMID0gJ1VQREFURV9NT1ZJRV9GQUlMJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9WSUUgPSAnREVMRVRFX01PVklFJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9WSUVfU1VDQ0VTUyA9ICdERUxFVEVfTU9WSUVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFX0ZBSUwgPSAnREVMRVRFX01PVklFX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9CWV9JRCA9ICdHRVRfTU9WSUVfQllfSUQnO1xuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTID0gJ0dFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfQllfSURfRkFJTCA9ICdHRVRfTU9WSUVfQllfSURfRkFJTCc7XG4iLCJpbXBvcnQge1xuICBHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyxcbiAgR0VUX01PVklFX0JZX0lEX0ZBSUwsXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBoZWFkZXJSZWR1Y2VyID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5tb3ZpZTtcbiAgICBjYXNlIEdFVF9NT1ZJRV9CWV9JRF9GQUlMOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlclJlZHVjZXI7XG4iLCJpbXBvcnQge1xuICBMT0FEX01PVklFU19TVUNDQ0VTUyxcbiAgQUREX01PVklFX1NVQ0NFU1MsXG4gIFVQREFURV9NT1ZJRV9GQUlMLFxuICBERUxFVEVfTU9WSUVfRkFJTCxcbiAgTE9BRF9NT1ZJRVNfRkFJTCxcbiAgQUREX01PVklFX0ZBSUwsXG4gIFVQREFURV9NT1ZJRV9TVUNDRVNTLFxuICBERUxFVEVfTU9WSUVfU1VDQ0VTUyxcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IG1vdmllc1JlZHVjZXIgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPQURfTU9WSUVTX1NVQ0NDRVNTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5tb3ZpZXM7XG4gICAgY2FzZSBBRERfTU9WSUVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5tb3ZpZV07XG4gICAgY2FzZSBVUERBVEVfTU9WSUVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoKG1vdmllKSA9PiB7XG4gICAgICAgIGlmIChtb3ZpZS5pZCA9PT0gYWN0aW9uLm1vdmllLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmFjdGlvbi5tb3ZpZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZpZTtcbiAgICAgIH0pO1xuICAgIGNhc2UgREVMRVRFX01PVklFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLmZpbHRlcigobW92aWUpID0+IG1vdmllLmlkICE9PSBhY3Rpb24uaWQpXTtcbiAgICBjYXNlIExPQURfTU9WSUVTX0ZBSUw6XG4gICAgY2FzZSBBRERfTU9WSUVfRkFJTDpcbiAgICBjYXNlIFVQREFURV9NT1ZJRV9GQUlMOlxuICAgIGNhc2UgREVMRVRFX01PVklFX0ZBSUw6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92aWVzUmVkdWNlcjtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcblxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgTW92aWVzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9Nb3ZpZXNTZXJ2aWNlJztcblxuaW1wb3J0IHsgZ2V0TW92aWVTdWNjZXNzLCBnZXRNb3ZpZUZhaWwgfSBmcm9tICcuL2FjdGlvbnMvaGVhZGVyJztcbmltcG9ydCB7XG4gIGxvYWRNb3ZpZXNTdWNjZXNzLFxuICBsb2FkTW92aWVzRmFpbCxcbiAgYWRkTW92aWVTdWNjZXNzLFxuICBhZGRNb3ZpZUZhaWwsXG4gIHVwZGF0ZU1vdmllU3VjY2VzcyxcbiAgdXBkYXRlTW92aWVGYWlsLFxuICBkZWxldGVNb3ZpZVN1Y2Nlc3MsXG4gIGRlbGV0ZU1vdmllRmFpbCxcbn0gZnJvbSAnLi9hY3Rpb25zL21vdmllcyc7XG5pbXBvcnQge1xuICBMT0FEX01PVklFUyxcbiAgQUREX01PVklFLFxuICBERUxFVEVfTU9WSUUsXG4gIFVQREFURV9NT1ZJRSxcbiAgR0VUX01PVklFX0JZX0lELFxufSBmcm9tICcuL2FjdGlvbnMvdHlwZXMnO1xuXG5mdW5jdGlvbiogZ2V0QWxsTW92aWVzKHsgZmlsdGVyLCBzb3J0LCBxdWVyeSB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbW92aWVzID0geWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmZldGNoTW92aWVzLCBmaWx0ZXIsIHNvcnQsIHF1ZXJ5KTtcbiAgICB5aWVsZCBwdXQobG9hZE1vdmllc1N1Y2Nlc3MobW92aWVzLmRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChsb2FkTW92aWVzRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZ2V0TW92aWUoeyBtb3ZpZUlkIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb3ZpZSA9IHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5nZXRNb3ZpZUJ5SWQsIG1vdmllSWQpO1xuICAgIHlpZWxkIHB1dChnZXRNb3ZpZVN1Y2Nlc3MobW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChnZXRNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiBhZGRNb3ZpZSh7IG1vdmllIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhZGRlZE1vdmllID0geWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmFkZE1vdmllLCBtb3ZpZSk7XG4gICAgeWllbGQgcHV0KGFkZE1vdmllU3VjY2VzcyhhZGRlZE1vdmllKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoYWRkTW92aWVGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB1cGRhdGVNb3ZpZSh7IG1vdmllIH0pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UudXBkYXRlTW92aWUsIG1vdmllKTtcbiAgICB5aWVsZCBwdXQodXBkYXRlTW92aWVTdWNjZXNzKG1vdmllKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQodXBkYXRlTW92aWVGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBkZWxldGVNb3ZpZSh7IGlkIH0pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuZGVsZXRlTW92aWUsIGlkKTtcbiAgICB5aWVsZCBwdXQoZGVsZXRlTW92aWVTdWNjZXNzKGlkKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoZGVsZXRlTW92aWVGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBtb3ZpZXNTYWdhcygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfTU9WSUVTLCBnZXRBbGxNb3ZpZXMpO1xuICB5aWVsZCB0YWtlRXZlcnkoQUREX01PVklFLCBhZGRNb3ZpZSk7XG4gIHlpZWxkIHRha2VFdmVyeShVUERBVEVfTU9WSUUsIHVwZGF0ZU1vdmllKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KERFTEVURV9NT1ZJRSwgZGVsZXRlTW92aWUpO1xuICB5aWVsZCB0YWtlRXZlcnkoR0VUX01PVklFX0JZX0lELCBnZXRNb3ZpZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmllc1NhZ2FzO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuXG5pbXBvcnQgaGVhZGVyUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2hlYWRlcic7XG5pbXBvcnQgbW92aWVzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL21vdmllcyc7XG5pbXBvcnQgbW92aWVzU2FnYXMgZnJvbSAnLi9zYWdhcyc7XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIGNvbWJpbmVSZWR1Y2Vycyh7IG1vdmllczogbW92aWVzUmVkdWNlciwgbW92aWU6IGhlYWRlclJlZHVjZXIgfSksXG4gIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSlcbik7XG5zYWdhTWlkZGxld2FyZS5ydW4obW92aWVzU2FnYXMpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=