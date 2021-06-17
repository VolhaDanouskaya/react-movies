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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib2R5L0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9HZW5yZXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9Nb3ZpZXNTb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9ib2R5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvRGVsZXRlTW92aWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvTW92aWVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L1VwZGF0ZU1vdmllRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllQ2FyZC9Nb3ZpZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvbW92aWVDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JvZHkvbW92aWVMaXN0L21vdmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvRXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9BZGRNb3ZpZURpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvTW92aWVEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb3ZpZURldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vdmllRGV0YWlscy9tb3ZpZURldGFpbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9zZWFyY2hCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VTZXNzaW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbW92aWVzL1ttb3ZpZUlkXS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvTW92aWVzU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvbW92aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL21vdmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc2FnYXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIkJvZHkiLCJtb3ZpZXMiLCJsb2FkTW92aWVzIiwidXNlU2Vzc2lvblN0b3JhZ2UiLCJjdXJyZW50RmlsdGVyIiwic2V0Q3VycmVudEZpbHRlciIsImN1cnJlbnRTb3J0Iiwic2V0Q3VycmVudFNvcnQiLCJzZWFyY2hRdWVyeSIsInVzZUxvY2F0aW9uIiwic2VhcmNoIiwicXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJ1c2VFZmZlY3QiLCJvbkZpbHRlckNsaWNrIiwiZ2VucmUiLCJvblNvcnRDaGFuZ2UiLCJzb3J0Iiwic3R5bGVzIiwiYm9keSIsInN1Ym1lbnUiLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJpZCIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJ0aXRsZSIsInN0cmluZyIsInBvc3Rlcl9wYXRoIiwicmVsZWFzZV9kYXRlIiwiZ2VucmVzIiwidm90ZV9hdmVyYWdlIiwidGFnbGluZSIsInZvdGVfY291bnQiLCJvdmVydmlldyIsImJ1ZGdldCIsInJldmVudWUiLCJydW50aW1lIiwiZnVuYyIsIkdlbnJlc0ZpbHRlciIsInNlbGVjdGVkRmlsdGVyIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibWFwIiwiYWN0aXZlQ2xhc3MiLCJNb3ZpZXNTb3J0ZXIiLCJzZWxlY3RlZFNvcnQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0IiwiRGVsZXRlTW92aWVEaWFsb2ciLCJvcGVuIiwibW92aWVJZCIsIm9uQ2xvc2UiLCJvbkRlbGV0ZSIsIm9uQ2xvc2VEZWxldGVEaWFsb2ciLCJib29sIiwiTW92aWVMaXN0IiwibW92aWUiLCJVcGRhdGVNb3ZpZURpYWxvZyIsIm9uVXBkYXRlIiwic2V0R2VucmVzIiwib25DbG9zZUVkaXREaWFsb2ciLCJvbkNoYW5nZUdlbnJlcyIsInNldEZpZWxkVmFsdWUiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsInZhbHVlcyIsIm9uU3VibWl0IiwiZmllbGRzIiwiY29sb3IiLCJNT1ZJRV9GSUVMRFMiLCJUSVRMRSIsIlJFTEVBU0VfREFURSIsIlBPU1RFUl9QQVRIIiwiR0VOUkVTIiwiZ2VucmVzQXJyYXkiLCJPVkVSVklFVyIsIlJVTlRJTUUiLCJ1cmwiLCJNb3ZpZUNhcmQiLCJ1cGRhdGVNb3ZpZSIsImRlbGV0ZU1vdmllIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm9wZW5EZWxldGUiLCJzZXRPcGVuRGVsZXRlIiwib3BlbkVkaXQiLCJzZXRPcGVuRWRpdCIsImhhbmRsZUNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsIm9uRWRpdE1lbnVJdGVtQ2xpY2siLCJvbkRlbGV0ZU1lbnVJdGVtQ2xpY2siLCJvbkRlbGV0ZU1vdmllIiwib25VcGRhdGVNb3ZpZSIsIm0iLCJzcGxpdCIsImpvaW4iLCJCb29sZWFuIiwieXVwIiwicmVxdWlyZWQiLCJtaW4iLCJFcnJvckJvdW5kYXJ5IiwicHJvcHMiLCJoYXNFcnJvciIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiUGFnZU5vdEZvdW5kIiwiZXJyb3JQYWdlIiwibG9nbyIsImVycm9yQ29udGVudCIsImVycm9yIiwiaG9tZUxpbmsiLCJGb290ZXIiLCJmb290ZXIiLCJBZGRNb3ZpZURpYWxvZyIsIm9uQWRkIiwib25DbG9zZUFkZERpYWxvZyIsImhhbmRsZVN1Ym1pdCIsIkhlYWRlciIsImFkZE1vdmllIiwib3BlbkFkZCIsInNldE9wZW5BZGQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImlzU2VydmVyIiwib25BZGRNb3ZpZUNsaWNrIiwib25BZGRNb3ZpZSIsImhlYWRlciIsInN1YmhlYWRlciIsInB1c2giLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiTW92aWVEZXRhaWxzIiwiZ2V0TW92aWUiLCJ1c2VQYXJhbXMiLCJOdW1iZXIiLCJwb3N0ZXIiLCJpbmZvIiwicmF0aW5nIiwiZGVmYXVsdFByb3BzIiwiU2VhcmNoQmFyIiwib25TZWFyY2hNb3ZpZXMiLCJMYXlvdXQiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJhcnJheSIsInN0b3JhZ2VLZXkiLCJzZXNzaW9uU3RvcmFnZSIsInNldFZhbHVlIiwic2V0SXRlbSIsIkFwcCIsInN0b3JlIiwiTW92aWVzU2VydmljZSIsImZpbHRlciIsImZldGNoIiwiYnVpbGRVcmwiLCJ0aGVuIiwicmVzIiwianNvbiIsImFwaVVSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsIkdFVF9NT1ZJRV9CWV9JRCIsImdldE1vdmllU3VjY2VzcyIsIkdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTIiwiZ2V0TW92aWVGYWlsIiwibWVzc2FnZSIsIkdFVF9NT1ZJRV9CWV9JRF9GQUlMIiwiTE9BRF9NT1ZJRVMiLCJsb2FkTW92aWVzU3VjY2VzcyIsIkxPQURfTU9WSUVTX1NVQ0NDRVNTIiwibG9hZE1vdmllc0ZhaWwiLCJMT0FEX01PVklFU19GQUlMIiwiQUREX01PVklFIiwiYWRkTW92aWVTdWNjZXNzIiwiQUREX01PVklFX1NVQ0NFU1MiLCJhZGRNb3ZpZUZhaWwiLCJBRERfTU9WSUVfRkFJTCIsIlVQREFURV9NT1ZJRSIsInVwZGF0ZU1vdmllU3VjY2VzcyIsIlVQREFURV9NT1ZJRV9TVUNDRVNTIiwidXBkYXRlTW92aWVGYWlsIiwiVVBEQVRFX01PVklFX0ZBSUwiLCJERUxFVEVfTU9WSUUiLCJkZWxldGVNb3ZpZVN1Y2Nlc3MiLCJERUxFVEVfTU9WSUVfU1VDQ0VTUyIsImRlbGV0ZU1vdmllRmFpbCIsIkRFTEVURV9NT1ZJRV9GQUlMIiwiaGVhZGVyUmVkdWNlciIsImFjdGlvbiIsIm1vdmllc1JlZHVjZXIiLCJnZXRBbGxNb3ZpZXMiLCJtb3ZpZXNTYWdhcyIsImNhbGwiLCJmZXRjaE1vdmllcyIsInB1dCIsImRhdGEiLCJnZXRNb3ZpZUJ5SWQiLCJhZGRlZE1vdmllIiwidGFrZUV2ZXJ5Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FB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O0FDOUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTVEsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxJQUFNckQsS0FBSyxHQUFHc0QseURBQVcsQ0FDdkJDLDZEQUFlLENBQUM7QUFBRTVOLFFBQU0sRUFBRStNLHdEQUFWO0FBQXlCN0ksT0FBSyxFQUFFMkksd0RBQWFBO0FBQTdDLENBQUQsQ0FEUSxFQUV2QmdCLDZEQUFlLENBQUNKLGNBQUQsQ0FGUSxDQUF6QjtBQUlBQSxjQUFjLENBQUNLLEdBQWYsQ0FBbUJiLDhDQUFuQjtBQUVlNUMsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNkQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9tb3ZpZXMvW21vdmllSWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvbW92aWVzL1ttb3ZpZUlkXS5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHVzZVNlc3Npb25TdG9yYWdlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVNlc3Npb25TdG9yYWdlJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uL2Vycm9yL0Vycm9yQm91bmRhcnknO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYm9keS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgR2VucmVzRmlsdGVyIGZyb20gJy4vR2VucmVzRmlsdGVyJztcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9tb3ZpZUxpc3QvTW92aWVMaXN0JztcbmltcG9ydCBNb3ZpZXNTb3J0ZXIgZnJvbSAnLi9Nb3ZpZXNTb3J0ZXInO1xuXG5jb25zdCBCb2R5ID0gKHsgbW92aWVzLCBsb2FkTW92aWVzIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRGaWx0ZXIsIHNldEN1cnJlbnRGaWx0ZXJdID0gdXNlU2Vzc2lvblN0b3JhZ2UoJ2ZpbHRlcicpO1xuICBjb25zdCBbY3VycmVudFNvcnQsIHNldEN1cnJlbnRTb3J0XSA9IHVzZVNlc3Npb25TdG9yYWdlKCdzb3J0Jyk7XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdXNlTG9jYXRpb24oKS5zZWFyY2g7XG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hRdWVyeSkuZ2V0KCdzZWFyY2gnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRNb3ZpZXMoY3VycmVudEZpbHRlciwgY3VycmVudFNvcnQsIHF1ZXJ5KTtcbiAgfSwgW2N1cnJlbnRGaWx0ZXIsIGN1cnJlbnRTb3J0LCBxdWVyeSwgbG9hZE1vdmllc10pO1xuXG4gIGNvbnN0IG9uRmlsdGVyQ2xpY2sgPSAoZ2VucmUpID0+IHtcbiAgICBzZXRDdXJyZW50RmlsdGVyKGdlbnJlKTtcbiAgfTtcblxuICBjb25zdCBvblNvcnRDaGFuZ2UgPSAoc29ydCkgPT4ge1xuICAgIHNldEN1cnJlbnRTb3J0KHNvcnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fSBmaXhlZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWVudX0+XG4gICAgICAgIDxHZW5yZXNGaWx0ZXIgb25GaWx0ZXJDbGljaz17b25GaWx0ZXJDbGlja30gc2VsZWN0ZWRGaWx0ZXI9e2N1cnJlbnRGaWx0ZXJ9IC8+XG4gICAgICAgIDxNb3ZpZXNTb3J0ZXIgb25Tb3J0Q2hhbmdlPXtvblNvcnRDaGFuZ2V9IHNlbGVjdGVkU29ydD17Y3VycmVudFNvcnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0PlxuICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9tb3ZpZXNcIiAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZXNcIj5cbiAgICAgICAgICB7IW1vdmllcz8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ25vLW1vdmllcyddfT5ObyBNb3ZpZXMgRm91bmQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IC8+XG4gICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCI+XG4gICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL3BhZ2Vub3Rmb3VuZFwiIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkJvZHkucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KSxcbiAgKS5pc1JlcXVpcmVkLFxuICBsb2FkTW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBnZW5yZXMgPSBbJ0FsbCcsICdBZHZlbnR1cmUnLCAnQ29tZWR5JywgJ0RyYW1hJywgJ0ZhbnRhc3knXTtcblxuY29uc3QgR2VucmVzRmlsdGVyID0gKHsgb25GaWx0ZXJDbGljaywgc2VsZWN0ZWRGaWx0ZXIgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHNlbGVjdGVkRmlsdGVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2dlbnJlcy1maWx0ZXInXX0+XG4gICAgICB7Z2VucmVzLm1hcCgoZ2VucmUpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBgJHtnZW5yZSA9PT0gc2VsZWN0ZWQgPyAnaXRlbS1hY3RpdmUnIDogJ2l0ZW0nfWA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtnZW5yZX1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkZpbHRlckNsaWNrKGdlbnJlKTtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoZ2VucmUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2FjdGl2ZUNsYXNzXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkdlbnJlc0ZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIG9uRmlsdGVyQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkRmlsdGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZW5yZXNGaWx0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ib2R5Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVzU29ydGVyID0gKHsgb25Tb3J0Q2hhbmdlLCBzZWxlY3RlZFNvcnQgfSkgPT4ge1xuICBpZiAoIXNlbGVjdGVkU29ydCkge1xuICAgIG9uU29ydENoYW5nZSgncmVsZWFzZV9kYXRlJyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvcnR9PlxuICAgICAgPHA+U29ydCBieSA8L3A+XG4gICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZXNbJ3NvcnQtZm9ybSddfT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIGxhYmVsSWQ9XCJzaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICBpZD1cInNpbXBsZS1zZWxlY3RcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VsZWN0ZWRTb3J0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uU29ydENoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwidm90ZV9hdmVyYWdlXCI+UmF0aW5nPC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJyZWxlYXNlX2RhdGVcIj5SZWxlYXNlIGRhdGU8L01lbnVJdGVtPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZXNTb3J0ZXIucHJvcFR5cGVzID0ge1xuICBvblNvcnRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkU29ydDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzU29ydGVyO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm9keVwiOiBcImJvZHlfYm9keV9fMVNyN2NcIixcblx0XCJzdWJtZW51XCI6IFwiYm9keV9zdWJtZW51X18zX2N6dlwiLFxuXHRcInNvcnRcIjogXCJib2R5X3NvcnRfXzJRZlotXCIsXG5cdFwiTXVpRm9ybUNvbnRyb2wtcm9vdFwiOiBcImJvZHlfTXVpRm9ybUNvbnRyb2wtcm9vdF9fMk00VUJcIixcblx0XCJzb3J0Rm9ybVwiOiBcImJvZHlfc29ydEZvcm1fXzE5U1N3XCIsXG5cdFwiTXVpU2VsZWN0LXNlbGVjdFwiOiBcImJvZHlfTXVpU2VsZWN0LXNlbGVjdF9fSGFseElcIixcblx0XCJNdWlTZWxlY3QtaWNvblwiOiBcImJvZHlfTXVpU2VsZWN0LWljb25fX1ZHOG01XCIsXG5cdFwiTXVpSW5wdXQtdW5kZXJsaW5lXCI6IFwiYm9keV9NdWlJbnB1dC11bmRlcmxpbmVfXzFnUkUyXCIsXG5cdFwiZ2VucmVzLWZpbHRlclwiOiBcImJvZHlfZ2VucmVzLWZpbHRlcl9fMzBvbGZcIixcblx0XCJpdGVtXCI6IFwiYm9keV9pdGVtX18xc0QxQ1wiLFxuXHRcIml0ZW0tYWN0aXZlXCI6IFwiYm9keV9pdGVtLWFjdGl2ZV9fMmN4Q2tcIixcblx0XCJtb3ZpZXMtY291bnRlclwiOiBcImJvZHlfbW92aWVzLWNvdW50ZXJfX3hlNHdtXCIsXG5cdFwibm8tbW92aWVzXCI6IFwiYm9keV9uby1tb3ZpZXNfXzNwVkdwXCJcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBsb2FkTW92aWVzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9tb3ZpZXMnO1xuXG5pbXBvcnQgQm9keSBmcm9tICcuL0JvZHknO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7IG1vdmllczogc3RhdGUubW92aWVzIH0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRNb3ZpZXMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb2R5KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRGVsZXRlTW92aWVEaWFsb2cgPSAoeyBvcGVuLCBtb3ZpZUlkLCBvbkNsb3NlLCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGNvbnN0IG9uQ2xvc2VEZWxldGVEaWFsb2cgPSAoKSA9PiB7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgZGlzYWJsZUJhY2tkcm9wQ2xpY2tcbiAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duXG4gICAgICBvcGVuPXtvcGVufVxuICAgICAgb25DbG9zZT17b25DbG9zZURlbGV0ZURpYWxvZ31cbiAgICAgIG1heFdpZHRoPVwibGdcIlxuICAgID5cbiAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VEZWxldGVEaWFsb2d9PlxuICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj5EZWxldGUgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwiZGlhbG9nLWZvcm0tY29udGVudFwiPlxuICAgICAgICA8RGlhbG9nQ29udGVudFRleHQgaWQ9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbW92aWU/XG4gICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShtb3ZpZUlkKX0gY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgQ29uZmlybVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn07XG5cbkRlbGV0ZU1vdmllRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1vdmllSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZU1vdmllRGlhbG9nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL21vdmllQ2FyZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVMaXN0ID0gKHsgbW92aWVzIH0pID0+IChcbiAgPHVsIGNsYXNzTmFtZT17c3R5bGVzWydtb3ZpZS1saXN0J119PlxuICAgIHttb3ZpZXM/Lm1hcCgobW92aWUpID0+IChcbiAgICAgIDxNb3ZpZUNhcmQga2V5PXttb3ZpZT8uaWR9IG1vdmllPXttb3ZpZX0gLz5cbiAgICApKX1cbiAgPC91bD5cbik7XG5cbk1vdmllTGlzdC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pLFxuICApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IHsgRmllbGQsIEZvcm0sIEZvcm1pa1Byb3ZpZGVyLCBFcnJvck1lc3NhZ2UsIHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZW5yZXNBcnJheSwgdmFsaWRhdGlvblNjaGVtYSwgTU9WSUVfRklFTERTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vdmllcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFVwZGF0ZU1vdmllRGlhbG9nID0gKHsgbW92aWUsIG9wZW4sIG9uVXBkYXRlLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKG1vdmllPy5nZW5yZXMgfHwgW10pO1xuICBjb25zdCBvbkNsb3NlRWRpdERpYWxvZyA9ICgpID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VHZW5yZXMgPSAodmFsdWUsIHNldEZpZWxkVmFsdWUpID0+IHtcbiAgICBzZXRHZW5yZXModmFsdWUpO1xuICAgIHNldEZpZWxkVmFsdWUoJ2dlbnJlcycsIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIGlkOiBtb3ZpZT8uaWQsXG4gICAgICB0aXRsZTogbW92aWU/LnRpdGxlLFxuICAgICAgcmVsZWFzZV9kYXRlOiBtb3ZpZT8ucmVsZWFzZV9kYXRlLFxuICAgICAgcG9zdGVyX3BhdGg6IG1vdmllPy5wb3N0ZXJfcGF0aCxcbiAgICAgIG92ZXJ2aWV3OiBtb3ZpZT8ub3ZlcnZpZXcsXG4gICAgICBydW50aW1lOiBtb3ZpZT8ucnVudGltZSxcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWEsXG4gICAgdmFsdWVzOiB7XG4gICAgICBnZW5yZXMsXG4gICAgfSxcbiAgICBvblN1Ym1pdDogKGZpZWxkcykgPT4ge1xuICAgICAgb25VcGRhdGUoZmllbGRzKTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtaWtQcm92aWRlciB2YWx1ZT17Zm9ybWlrfT5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgZGlzYWJsZUVzY2FwZUtleURvd25cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17b25DbG9zZUVkaXREaWFsb2d9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWycuTXVpUGFwZXItcm9vdC5NdWlNZW51LXBhcGVyLk11aVBvcG92ZXItcGFwZXInXX1cbiAgICAgID5cbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNsb3NlXCIgb25DbGljaz17b25DbG9zZUVkaXREaWFsb2d9PlxuICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8RGlhbG9nVGl0bGU+RWRpdCBNb3ZpZTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwiZGlhbG9nLWZvcm0tY29udGVudFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5Nb3ZpZSBJRDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgIHttb3ZpZT8uaWR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PlRpdGxlPC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlRJVExFfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5SZWxlYXNlIERhdGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX1cbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+TW92aWUgVVJMPC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5HZW5yZTwvcD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgICB2YWx1ZT17Z2VucmVzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlR2VucmVzKGV2ZW50LnRhcmdldC52YWx1ZSwgZm9ybWlrLnNldEZpZWxkVmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dlbnJlc0FycmF5Lm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtnZW5yZX0gdmFsdWU9e2dlbnJlfT5cbiAgICAgICAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5PdmVydmlldzwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZW1wdHkgdGV4dGFyZWFcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5SdW50aW1lPC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SVU5USU1FfVxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQnXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SVU5USU1FfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZUVkaXREaWFsb2d9IGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvRm9ybWlrUHJvdmlkZXI+XG4gICk7XG59O1xuXG5VcGRhdGVNb3ZpZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwb3N0ZXJfcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KS5pc1JlcXVpcmVkLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvblVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZU1vdmllRGlhbG9nO1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgRGVsZXRlTW92aWVEaWFsb2cgZnJvbSAnLi4vRGVsZXRlTW92aWVEaWFsb2cnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9tb3ZpZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFVwZGF0ZU1vdmllRGlhbG9nIGZyb20gJy4uL1VwZGF0ZU1vdmllRGlhbG9nJztcblxuY29uc3QgTW92aWVDYXJkID0gKHsgbW92aWUsIHVwZGF0ZU1vdmllLCBkZWxldGVNb3ZpZSB9KSA9PiB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtvcGVuRGVsZXRlLCBzZXRPcGVuRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wZW5FZGl0LCBzZXRPcGVuRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHNldEFuY2hvckVsKGUuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgY29uc3Qgb25FZGl0TWVudUl0ZW1DbGljayA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpO1xuICAgIHNldE9wZW5FZGl0KHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlTWVudUl0ZW1DbGljayA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpO1xuICAgIHNldE9wZW5EZWxldGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGVNb3ZpZSA9IChtb3ZpZUlkKSA9PiB7XG4gICAgZGVsZXRlTW92aWUobW92aWVJZCk7XG4gICAgc2V0T3BlbkRlbGV0ZShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgb25VcGRhdGVNb3ZpZSA9IChtKSA9PiB7XG4gICAgdXBkYXRlTW92aWUobSk7XG4gICAgc2V0T3BlbkVkaXQoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzWydtb3ZpZS1jYXJkJ119PlxuICAgICAgPExpbmsgdG89e2AvbW92aWVzLyR7bW92aWU/LmlkfWB9PlxuICAgICAgICA8aW1nIHNyYz17bW92aWU/LnBvc3Rlcl9wYXRofSBhbHQ9XCJcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW92aWUtaW5mbyddfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaW5mby1maXJzdC1yb3cnXX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnttb3ZpZT8udGl0bGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydtb3ZpZS1yZWxlYXNlLXllYXInXX0+e21vdmllPy5yZWxlYXNlX2RhdGU/LnNwbGl0KCctJylbMF19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZ2VucmV9Pnttb3ZpZT8uZ2VucmVzPy5qb2luKCcsICcpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2NhcmQtbWVudS1pY29uJ119XG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxNZW51IGlkPVwic2ltcGxlLW1lbnVcIiBhbmNob3JFbD17YW5jaG9yRWx9IGtlZXBNb3VudGVkIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtvbkVkaXRNZW51SXRlbUNsaWNrfSBjbGFzc05hbWU9XCJjYXJkLW1lbnUtaXRlbVwiPlxuICAgICAgICAgIGVkaXRcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e29uRGVsZXRlTWVudUl0ZW1DbGlja30gY2xhc3NOYW1lPVwiY2FyZC1tZW51LWl0ZW1cIj5cbiAgICAgICAgICBkZWxldGVcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPFVwZGF0ZU1vdmllRGlhbG9nIG9wZW49e29wZW5FZGl0fSBtb3ZpZT17bW92aWV9IG9uVXBkYXRlPXtvblVwZGF0ZU1vdmllfSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuRWRpdChmYWxzZSl9IC8+XG4gICAgICAgIDxEZWxldGVNb3ZpZURpYWxvZ1xuICAgICAgICAgIG9wZW49e29wZW5EZWxldGV9XG4gICAgICAgICAgbW92aWVJZD17bW92aWU/LmlkfVxuICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZU1vdmllfVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW5EZWxldGUoZmFsc2UpfVxuICAgICAgICAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5Nb3ZpZUNhcmQucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmV2ZW51ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KS5pc1JlcXVpcmVkLFxuICB1cGRhdGVNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGVsZXRlTW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBkZWxldGVNb3ZpZSwgdXBkYXRlTW92aWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21vdmllcyc7XG5cbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9Nb3ZpZUNhcmQnO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHVwZGF0ZU1vdmllLFxuICBkZWxldGVNb3ZpZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb3ZpZUNhcmQpO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW92aWUtbGlzdFwiOiBcIm1vdmllc19tb3ZpZS1saXN0X18zby1oX1wiLFxuXHRcIm1vdmllLWNhcmRcIjogXCJtb3ZpZXNfbW92aWUtY2FyZF9fcEpBanBcIixcblx0XCJjYXJkLW1lbnUtaWNvblwiOiBcIm1vdmllc19jYXJkLW1lbnUtaWNvbl9fMVFkdk5cIixcblx0XCJtb3ZpZS1pbmZvXCI6IFwibW92aWVzX21vdmllLWluZm9fXzN6cjZjXCIsXG5cdFwidGl0bGVcIjogXCJtb3ZpZXNfdGl0bGVfXzhzb0FzXCIsXG5cdFwiaW5mby1maXJzdC1yb3dcIjogXCJtb3ZpZXNfaW5mby1maXJzdC1yb3dfXzNuVnh5XCIsXG5cdFwibW92aWUtcmVsZWFzZS15ZWFyXCI6IFwibW92aWVzX21vdmllLXJlbGVhc2UteWVhcl9fMjZMYzFcIixcblx0XCJnZW5yZVwiOiBcIm1vdmllc19nZW5yZV9fMnk0dnBcIixcblx0XCJNdWlQYXBlci1yb290XCI6IFwibW92aWVzX011aVBhcGVyLXJvb3RfXzFBUWxtXCIsXG5cdFwiTXVpTWVudS1wYXBlclwiOiBcIm1vdmllc19NdWlNZW51LXBhcGVyX19vaGh4dVwiLFxuXHRcIk11aVBvcG92ZXItcGFwZXJcIjogXCJtb3ZpZXNfTXVpUG9wb3Zlci1wYXBlcl9fMlp1ME1cIixcblx0XCJNdWlCdXR0b25CYXNlLXJvb3RcIjogXCJtb3ZpZXNfTXVpQnV0dG9uQmFzZS1yb290X19abk4tM1wiLFxuXHRcIk11aUxpc3RJdGVtLXJvb3RcIjogXCJtb3ZpZXNfTXVpTGlzdEl0ZW0tcm9vdF9fM3pLSnBcIixcblx0XCJNdWlNZW51SXRlbS1yb290XCI6IFwibW92aWVzX011aU1lbnVJdGVtLXJvb3RfXzFxM0U0XCIsXG5cdFwiY2FyZC1tZW51LWl0ZW1cIjogXCJtb3ZpZXNfY2FyZC1tZW51LWl0ZW1fXzNudVdpXCIsXG5cdFwiTXVpRGlhbG9nLXBhcGVyXCI6IFwibW92aWVzX011aURpYWxvZy1wYXBlcl9fc3ZQZVFcIixcblx0XCJNdWlJbnB1dC11bmRlcmxpbmVcIjogXCJtb3ZpZXNfTXVpSW5wdXQtdW5kZXJsaW5lX18xd09VOFwiLFxuXHRcImRpYWxvZy1mb3JtLWNvbnRlbnRcIjogXCJtb3ZpZXNfZGlhbG9nLWZvcm0tY29udGVudF9fMWlLZjZcIixcblx0XCJlZGl0LWZpZWxkLW5hbWVcIjogXCJtb3ZpZXNfZWRpdC1maWVsZC1uYW1lX18ybVQybFwiLFxuXHRcImVkaXQtZmllbGRcIjogXCJtb3ZpZXNfZWRpdC1maWVsZF9fMkRpTU9cIixcblx0XCJNdWlTZWxlY3QtaWNvblwiOiBcIm1vdmllc19NdWlTZWxlY3QtaWNvbl9fdVhKVm1cIixcblx0XCJlcnJvclwiOiBcIm1vdmllc19lcnJvcl9fMTZXQmtcIixcblx0XCJNdWlJY29uQnV0dG9uLXJvb3RcIjogXCJtb3ZpZXNfTXVpSWNvbkJ1dHRvbi1yb290X18yM0NDR1wiLFxuXHRcIk11aVR5cG9ncmFwaHktaDZcIjogXCJtb3ZpZXNfTXVpVHlwb2dyYXBoeS1oNl9fSVZPSTVcIixcblx0XCJNdWlUeXBvZ3JhcGh5LWNvbG9yVGV4dFNlY29uZGFyeVwiOiBcIm1vdmllc19NdWlUeXBvZ3JhcGh5LWNvbG9yVGV4dFNlY29uZGFyeV9fMVZMMVJcIixcblx0XCJNdWlEaWFsb2dBY3Rpb25zLXNwYWNpbmdcIjogXCJtb3ZpZXNfTXVpRGlhbG9nQWN0aW9ucy1zcGFjaW5nX18xdTBVcVwiLFxuXHRcIk11aUJ1dHRvbi10ZXh0UHJpbWFyeVwiOiBcIm1vdmllc19NdWlCdXR0b24tdGV4dFByaW1hcnlfX0o1UnlQXCIsXG5cdFwiTXVpQnV0dG9uLXRleHRTZWNvbmRhcnlcIjogXCJtb3ZpZXNfTXVpQnV0dG9uLXRleHRTZWNvbmRhcnlfXzJtZ1ZJXCJcbn07XG4iLCJpbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcblxuZXhwb3J0IGNvbnN0IE1PVklFX0ZJRUxEUyA9IHtcbiAgVElUTEU6ICd0aXRsZScsXG4gIFJFTEVBU0VfREFURTogJ3JlbGVhc2VfZGF0ZScsXG4gIFBPU1RFUl9QQVRIOiAncG9zdGVyX3BhdGgnLFxuICBHRU5SRVM6ICdnZW5yZXMnLFxuICBPVkVSVklFVzogJ292ZXJ2aWV3JyxcbiAgUlVOVElNRTogJ3J1bnRpbWUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdlbnJlc0FycmF5ID0gW1xuICAnQWN0aW9uJyxcbiAgJ0FkdmVudHVyZScsXG4gICdBbmltYXRpb24nLFxuICAnQ29tZWR5JyxcbiAgJ0RyYW1hJyxcbiAgJ0ZhbWlseScsXG4gICdGYW50YXN5JyxcbiAgJ1NjaWVuY2UgRmljdGlvbicsXG5dO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xuICB0aXRsZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdUaXRsZSBpcyByZXF1aXJlZCcpLFxuICBwb3N0ZXJfcGF0aDogeXVwLnN0cmluZygpLnVybCgpLnJlcXVpcmVkKCdQb3N0ZXIgdXJsIGlzIHJlcXVpcmVkJyksXG4gIHJlbGVhc2VfZGF0ZTogeXVwLnN0cmluZygpLFxuICBvdmVydmlldzogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdPdmVydmlldyBpcyByZXF1aXJlZCcpLFxuICBydW50aW1lOiB5dXAubnVtYmVyKCkucmVxdWlyZWQoJ1J1bnRpbWUgaXMgcmVxdWlyZWQnKSxcbiAgZ2VucmVzOiB5dXAuYXJyYXkoKS5taW4oMSkucmVxdWlyZWQoJ01pbmltdW0gb25lIGdlbnJlIHNob3VsZCBiZSBzZWxlY3RlZCcpLFxufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKCkge1xuICAgIHJldHVybiB7IGhhc0Vycm9yOiB0cnVlIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaCgpIHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nICg8L2gxPjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXIvRm9vdGVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vycm9yLm1vZHVsZS5zY3NzJztcblxuY29uc3QgUGFnZU5vdEZvdW5kID0gKCkgPT4gKFxuICA8PlxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JQYWdlfSBmaXhlZD5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvckNvbnRlbnR9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+UGFnZSBOb3QgRm91bmQ8L3A+XG4gICAgICAgIDxMaW5rIHRvPVwiL21vdmllc1wiIGNsYXNzTmFtZT17c3R5bGVzLmhvbWVMaW5rfSB0aXRsZT1cImxpbmtUb0hvbWVcIj5cbiAgICAgICAgICBHbyBCYWNrIFRvIEhvbWVcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICAgPEZvb3RlciAvPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVycm9yUGFnZVwiOiBcImVycm9yX2Vycm9yUGFnZV9fM0FXeW9cIixcblx0XCJsb2dvXCI6IFwiZXJyb3JfbG9nb19fbUl6MG1cIixcblx0XCJlcnJvckNvbnRlbnRcIjogXCJlcnJvcl9lcnJvckNvbnRlbnRfXzF2NkZrXCIsXG5cdFwiZXJyb3JcIjogXCJlcnJvcl9lcnJvcl9fMnVwT2pcIixcblx0XCJob21lTGlua1wiOiBcImVycm9yX2hvbWVMaW5rX18zb1dHM1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0gZml4ZWQ+XG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ28tZm9vdGVyJ119IGFsdD1cImxvZ29cIiAvPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9mb290ZXJfXzJqX0ZyXCIsXG5cdFwibG9nb0Zvb3RlclwiOiBcImZvb3Rlcl9sb2dvRm9vdGVyX18yaks4ZVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCB7IEZpZWxkLCBGb3JtLCBGb3JtaWtQcm92aWRlciwgRXJyb3JNZXNzYWdlLCB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgZ2VucmVzQXJyYXksIHZhbGlkYXRpb25TY2hlbWEsIE1PVklFX0ZJRUxEUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IEFkZE1vdmllRGlhbG9nID0gKHsgb3Blbiwgb25BZGQsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbZ2VucmVzLCBzZXRHZW5yZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IG9uQ2xvc2VBZGREaWFsb2cgPSAoKSA9PiB7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlR2VucmVzID0gKHZhbHVlLCBzZXRGaWVsZFZhbHVlKSA9PiB7XG4gICAgc2V0R2VucmVzKHZhbHVlKTtcbiAgICBzZXRGaWVsZFZhbHVlKCdnZW5yZXMnLCB2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICByZWxlYXNlX2RhdGU6ICcnLFxuICAgICAgcG9zdGVyX3BhdGg6ICcnLFxuICAgICAgZ2VucmVzLFxuICAgICAgb3ZlcnZpZXc6ICcnLFxuICAgICAgcnVudGltZTogJycsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxuICAgIHZhbHVlczoge1xuICAgICAgZ2VucmVzLFxuICAgIH0sXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcbiAgICAgIG9uQWRkKHZhbHVlcyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrUHJvdmlkZXIgdmFsdWU9e2Zvcm1pa30+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIGRpc2FibGVCYWNrZHJvcENsaWNrXG4gICAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VBZGREaWFsb2d9XG4gICAgICA+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VBZGREaWFsb2d9PlxuICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8Rm9ybSB0aXRsZT1cImFkZC1tb3ZpZVwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj5BZGQgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cImRpYWxvZy1mb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPlRpdGxlPC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlRJVExFfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vdmllIFRpdGxlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwidGl0bGVcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInRpdGxlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPlJlbGVhc2UgRGF0ZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SRUxFQVNFX0RBVEV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IERhdGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJyZWxlYXNlX2RhdGVcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInJlbGVhc2VfZGF0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUkVMRUFTRV9EQVRFfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+TW92aWUgVVJMPC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vdmllIFVSTCBoZXJlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicG9zdGVyX3BhdGhcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInBvc3Rlcl9wYXRoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPkdlbnJlPC9wPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Z2VucmVzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlR2VucmVzKGV2ZW50LnRhcmdldC52YWx1ZSwgZm9ybWlrLnNldEZpZWxkVmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgdGl0bGU9XCJnZW5yZXNcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImdlbnJlc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZW5yZXNBcnJheS5tYXAoKGdlbnJlKSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Z2VucmV9IHZhbHVlPXtnZW5yZX0+XG4gICAgICAgICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLkdFTlJFU31cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPk92ZXJ2aWV3PC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3ZlcnZpZXcgSGVyZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIm92ZXJ2aWV3XCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJvdmVydmlld1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5SdW50aW1lPC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSdW50aW1lIEhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJydW50aW1lXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJydW50aW1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5SVU5USU1FfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZUFkZERpYWxvZ31cbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICB0aXRsZT1cInJlc2V0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9Gb3JtaWtQcm92aWRlcj5cbiAgKTtcbn07XG5cbkFkZE1vdmllRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25BZGQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRNb3ZpZURpYWxvZztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBBZGRNb3ZpZURpYWxvZyBmcm9tICcuL0FkZE1vdmllRGlhbG9nJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IE1vdmllRGV0YWlscyBmcm9tICcuL21vdmllRGV0YWlscyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vc2VhcmNoQmFyL1NlYXJjaEJhcic7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGFkZE1vdmllIH0pID0+IHtcbiAgY29uc3QgW29wZW5BZGQsIHNldE9wZW5BZGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG4gIGNvbnN0IG9uQWRkTW92aWVDbGljayA9ICgpID0+IHtcbiAgICBzZXRPcGVuQWRkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uQWRkTW92aWUgPSAobW92aWUpID0+IHtcbiAgICBhZGRNb3ZpZShtb3ZpZSk7XG4gICAgc2V0T3BlbkFkZChmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IGZpeGVkPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbW92aWVzLzptb3ZpZUlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goJy8nKX0+XG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIGZvbnRTaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc1NlcnZlciA/IChcbiAgICAgICAgICAgIHVzZVJvdXRlcigpLnBhdGhuYW1lLmluY2x1ZGVzKCdtb3ZpZUlkJykgPyAoXG4gICAgICAgICAgICAgIDxNb3ZpZURldGFpbHMgLz5cbiAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxNb3ZpZURldGFpbHMgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YmhlYWRlcn0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQWRkTW92aWVDbGlja31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2J1dHRvbi1hZGQtbW92aWUnXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgKyBBZGQgTW92aWVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEFkZE1vdmllRGlhbG9nXG4gICAgICAgICAgICAgIG9wZW49e29wZW5BZGR9XG4gICAgICAgICAgICAgIG9uQWRkPXtvbkFkZE1vdmllfVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuQWRkKGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzU2VydmVyID8gKFxuICAgICAgICAgICAgdXNlUm91dGVyKCkucGF0aG5hbWUuaW5jbHVkZXMoJ21vdmllSWQnKSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGFkZE1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyX2hlYWRlcl9fMnBMaVhcIixcblx0XCJzdWJoZWFkZXJcIjogXCJoZWFkZXJfc3ViaGVhZGVyX181V3c2MVwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fMjRmd0RcIixcblx0XCJidXR0b24tYWRkLW1vdmllXCI6IFwiaGVhZGVyX2J1dHRvbi1hZGQtbW92aWVfXzI4YzVaXCIsXG5cdFwiTXVpSWNvbkJ1dHRvbi1yb290XCI6IFwiaGVhZGVyX011aUljb25CdXR0b24tcm9vdF9fTWFFNXNcIlxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGFkZE1vdmllIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9tb3ZpZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBhZGRNb3ZpZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVEZXRhaWxzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVEZXRhaWxzID0gKHsgbW92aWUsIGdldE1vdmllIH0pID0+IHtcbiAgY29uc3QgeyBtb3ZpZUlkIH0gPSB1c2VQYXJhbXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1vdmllKE51bWJlcihtb3ZpZUlkKSk7XG4gIH0sIFttb3ZpZUlkLCBnZXRNb3ZpZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW92aWUtZGV0YWlscyddfT5cbiAgICAgIDxpbWcgc3JjPXttb3ZpZT8ucG9zdGVyX3BhdGh9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLnBvc3Rlcn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2ZpcnN0LXJvdyddfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnttb3ZpZT8udGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ30+e21vdmllPy52b3RlX2F2ZXJhZ2V9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ2xpbmV9Pnttb3ZpZT8udGFnbGluZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGhpcmQtcm93J119PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3JlbGVhc2UtZGF0ZSddfT57bW92aWU/LnJlbGVhc2VfZGF0ZT8uc3BsaXQoJy0nKVswXX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJ1bnRpbWV9Pnttb3ZpZT8ucnVudGltZX0gbWluPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT57bW92aWU/Lm92ZXJ2aWV3fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZURldGFpbHMuZGVmYXVsdFByb3BzID0ge1xuICBtb3ZpZTogbnVsbCxcbn07XG5cbk1vdmllRGV0YWlscy5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwb3N0ZXJfcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICBnZXRNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllRGV0YWlscztcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldE1vdmllIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9oZWFkZXInO1xuXG5pbXBvcnQgTW92aWVEZXRhaWxzIGZyb20gJy4vTW92aWVEZXRhaWxzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyBtb3ZpZTogc3RhdGUubW92aWUgfSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZ2V0TW92aWUsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTW92aWVEZXRhaWxzKTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vdmllLWRldGFpbHNcIjogXCJtb3ZpZURldGFpbHNfbW92aWUtZGV0YWlsc19fN2dzTmJcIixcblx0XCJwb3N0ZXJcIjogXCJtb3ZpZURldGFpbHNfcG9zdGVyX18xRWRWblwiLFxuXHRcImluZm9cIjogXCJtb3ZpZURldGFpbHNfaW5mb19fMnpQZDlcIixcblx0XCJmaXJzdC1yb3dcIjogXCJtb3ZpZURldGFpbHNfZmlyc3Qtcm93X191aTJmeFwiLFxuXHRcInRpdGxlXCI6IFwibW92aWVEZXRhaWxzX3RpdGxlX19PaHAtalwiLFxuXHRcInJhdGluZ1wiOiBcIm1vdmllRGV0YWlsc19yYXRpbmdfX2tKcWxLXCIsXG5cdFwidGhpcmQtcm93XCI6IFwibW92aWVEZXRhaWxzX3RoaXJkLXJvd19fMklLeWZcIixcblx0XCJyZWxlYXNlLWRhdGVcIjogXCJtb3ZpZURldGFpbHNfcmVsZWFzZS1kYXRlX18yOTNjc1wiLFxuXHRcInJ1bnRpbWVcIjogXCJtb3ZpZURldGFpbHNfcnVudGltZV9fM2ViX2VcIixcblx0XCJkYXJrXCI6IFwibW92aWVEZXRhaWxzX2RhcmtfX3VGZE1GXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlYXJjaEJhci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBvblNlYXJjaE1vdmllcyA9IChxdWVyeSkgPT4ge1xuICAgIGhpc3RvcnkucHVzaChgL21vdmllcz9zZWFyY2g9JHtxdWVyeX1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3NlYXJjaC1iYXInXX0+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+ZmluZCB5b3VyIG1vdmllPC9wPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICB9fVxuICAgICAgICBvblN1Ym1pdD17KGZpZWxkcykgPT4ge1xuICAgICAgICAgIG9uU2VhcmNoTW92aWVzKGZpZWxkcy5xdWVyeSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxGaWVsZCB0eXBlPVwic2VhcmNoXCIgdmFyaWFudD1cImZpbGxlZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgaWQ9e3N0eWxlc1snc2VhcmNoLWlucHV0J119IG5hbWU9XCJxdWVyeVwiIC8+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoLWJhclwiOiBcInNlYXJjaEJhcl9zZWFyY2gtYmFyX18zSTdkUlwiLFxuXHRcInRpdGxlXCI6IFwic2VhcmNoQmFyX3RpdGxlX18yRS04SVwiLFxuXHRcInNlYXJjaC1pbnB1dFwiOiBcInNlYXJjaEJhcl9zZWFyY2gtaW5wdXRfXzJvNWZiXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtYWluLWxheW91dCddfT57Y2hpbGRyZW59PC9kaXY+XG4pO1xuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW4tbGF5b3V0XCI6IFwibGF5b3V0X21haW4tbGF5b3V0X194OHNtSFwiXG59O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlU2Vzc2lvblN0b3JhZ2UgPSAoc3RvcmFnZUtleSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFxuICAgIHByb2Nlc3MuYnJvd3NlciA/IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkgOiBudWxsXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSwgW3ZhbHVlLCBzdG9yYWdlS2V5XSk7XG5cbiAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU2Vzc2lvblN0b3JhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlLCBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQm9keSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JvZHknO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Vycm9yL1BhZ2VOb3RGb3VuZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGF0aWNSb3V0ZXI+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8Qm9keSAvPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wYWdlbm90Zm91bmRcIj5cbiAgICAgICAgICAgIDxQYWdlTm90Rm91bmQgLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgPEJvZHkgLz5cbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImNsYXNzIE1vdmllc1NlcnZpY2Uge1xuICBhcGlVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL21vdmllcy8nO1xuXG4gIGZldGNoTW92aWVzID0gKGZpbHRlciwgc29ydCwgcXVlcnkpID0+XG4gICAgZmV0Y2godGhpcy5idWlsZFVybChmaWx0ZXIsIHNvcnQsIHF1ZXJ5KSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBnZXRNb3ZpZUJ5SWQgPSAobW92aWVJZCkgPT5cbiAgICBmZXRjaCh0aGlzLmFwaVVSTCArIG1vdmllSWQpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgYWRkTW92aWUgPSAobW92aWUpID0+XG4gICAgZmV0Y2godGhpcy5hcGlVUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vdmllKSxcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIHVwZGF0ZU1vdmllID0gKG1vdmllKSA9PlxuICAgIGZldGNoKHRoaXMuYXBpVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vdmllKSxcbiAgICB9KTtcblxuICBkZWxldGVNb3ZpZSA9IChpZCkgPT4gZmV0Y2godGhpcy5hcGlVUkwgKyBpZCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuXG4gIGJ1aWxkVXJsID0gKGZpbHRlciwgc29ydCwgcXVlcnkpID0+IHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5hcGlVUkx9P3NvcnRCeT0ke3NvcnR9JnNvcnRPcmRlcj1kZXNjYDtcbiAgICBpZiAoZmlsdGVyICYmIGZpbHRlciAhPT0gJ0FsbCcpIHtcbiAgICAgIHVybCArPSBgP2ZpbHRlcj0ke2ZpbHRlcn1gO1xuICAgIH1cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHVybCArPSBgJnNlYXJjaD0ke3F1ZXJ5fSZzZWFyY2hCeT10aXRsZWA7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNb3ZpZXNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQge1xuICBHRVRfTU9WSUVfQllfSUQsXG4gIEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTLFxuICBHRVRfTU9WSUVfQllfSURfRkFJTCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZSA9IChtb3ZpZUlkKSA9PiAoe1xuICB0eXBlOiBHRVRfTU9WSUVfQllfSUQsXG4gIG1vdmllSWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllU3VjY2VzcyA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogR0VUX01PVklFX0JZX0lEX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcbiIsImltcG9ydCB7XG4gIExPQURfTU9WSUVTLFxuICBBRERfTU9WSUUsXG4gIFVQREFURV9NT1ZJRSxcbiAgREVMRVRFX01PVklFLFxuICBMT0FEX01PVklFU19TVUNDQ0VTUyxcbiAgTE9BRF9NT1ZJRVNfRkFJTCxcbiAgQUREX01PVklFX1NVQ0NFU1MsXG4gIEFERF9NT1ZJRV9GQUlMLFxuICBVUERBVEVfTU9WSUVfU1VDQ0VTUyxcbiAgVVBEQVRFX01PVklFX0ZBSUwsXG4gIERFTEVURV9NT1ZJRV9TVUNDRVNTLFxuICBERUxFVEVfTU9WSUVfRkFJTCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkTW92aWVzID0gKGZpbHRlciwgc29ydCwgcXVlcnkpID0+ICh7XG4gIHR5cGU6IExPQURfTU9WSUVTLFxuICBmaWx0ZXIsXG4gIHNvcnQsXG4gIHF1ZXJ5LFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkTW92aWVzU3VjY2VzcyA9IChtb3ZpZXMpID0+ICh7XG4gIHR5cGU6IExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBtb3ZpZXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvYWRNb3ZpZXNGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IExPQURfTU9WSUVTX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1vdmllID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBBRERfTU9WSUUsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRNb3ZpZVN1Y2Nlc3MgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IEFERF9NT1ZJRV9TVUNDRVNTLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkTW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IEFERF9NT1ZJRV9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZSA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX01PVklFLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWVTdWNjZXNzID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfTU9WSUVfU1VDQ0VTUyxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfTU9WSUVfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWUgPSAoaWQpID0+ICh7XG4gIHR5cGU6IERFTEVURV9NT1ZJRSxcbiAgaWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllU3VjY2VzcyA9IChpZCkgPT4gKHtcbiAgdHlwZTogREVMRVRFX01PVklFX1NVQ0NFU1MsXG4gIGlkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogREVMRVRFX01PVklFX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcbiIsImV4cG9ydCBjb25zdCBMT0FEX01PVklFUyA9ICdMT0FEX01PVklFUyc7XG5leHBvcnQgY29uc3QgTE9BRF9NT1ZJRVNfU1VDQ0NFU1MgPSAnTE9BRF9NT1ZJRVNfU1VDQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfTU9WSUVTX0ZBSUwgPSAnTE9BRF9NT1ZJRVNfRkFJTCc7XG5leHBvcnQgY29uc3QgQUREX01PVklFID0gJ0FERF9NT1ZJRSc7XG5leHBvcnQgY29uc3QgQUREX01PVklFX1NVQ0NFU1MgPSAnQUREX01PVklFX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRV9GQUlMID0gJ0FERF9NT1ZJRV9GQUlMJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUUgPSAnVVBEQVRFX01PVklFJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUVfU1VDQ0VTUyA9ICdVUERBVEVfTU9WSUVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFX0ZBSUwgPSAnVVBEQVRFX01PVklFX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRSA9ICdERUxFVEVfTU9WSUUnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRV9TVUNDRVNTID0gJ0RFTEVURV9NT1ZJRV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9WSUVfRkFJTCA9ICdERUxFVEVfTU9WSUVfRkFJTCc7XG5leHBvcnQgY29uc3QgR0VUX01PVklFX0JZX0lEID0gJ0dFVF9NT1ZJRV9CWV9JRCc7XG5leHBvcnQgY29uc3QgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MgPSAnR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9CWV9JRF9GQUlMID0gJ0dFVF9NT1ZJRV9CWV9JRF9GQUlMJztcbiIsImltcG9ydCB7XG4gIEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTLFxuICBHRVRfTU9WSUVfQllfSURfRkFJTCxcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGhlYWRlclJlZHVjZXIgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLm1vdmllO1xuICAgIGNhc2UgR0VUX01PVklFX0JZX0lEX0ZBSUw6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyUmVkdWNlcjtcbiIsImltcG9ydCB7XG4gIExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBBRERfTU9WSUVfU1VDQ0VTUyxcbiAgVVBEQVRFX01PVklFX0ZBSUwsXG4gIERFTEVURV9NT1ZJRV9GQUlMLFxuICBMT0FEX01PVklFU19GQUlMLFxuICBBRERfTU9WSUVfRkFJTCxcbiAgVVBEQVRFX01PVklFX1NVQ0NFU1MsXG4gIERFTEVURV9NT1ZJRV9TVUNDRVNTLFxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgbW92aWVzUmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRF9NT1ZJRVNfU1VDQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLm1vdmllcztcbiAgICBjYXNlIEFERF9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLm1vdmllXTtcbiAgICBjYXNlIFVQREFURV9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgobW92aWUpID0+IHtcbiAgICAgICAgaWYgKG1vdmllLmlkID09PSBhY3Rpb24ubW92aWUuaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYWN0aW9uLm1vdmllLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmllO1xuICAgICAgfSk7XG4gICAgY2FzZSBERUxFVEVfTU9WSUVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUuaWQgIT09IGFjdGlvbi5pZCldO1xuICAgIGNhc2UgTE9BRF9NT1ZJRVNfRkFJTDpcbiAgICBjYXNlIEFERF9NT1ZJRV9GQUlMOlxuICAgIGNhc2UgVVBEQVRFX01PVklFX0ZBSUw6XG4gICAgY2FzZSBERUxFVEVfTU9WSUVfRkFJTDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3ZpZXNSZWR1Y2VyO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCBNb3ZpZXNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL01vdmllc1NlcnZpY2UnO1xuXG5pbXBvcnQgeyBnZXRNb3ZpZVN1Y2Nlc3MsIGdldE1vdmllRmFpbCB9IGZyb20gJy4vYWN0aW9ucy9oZWFkZXInO1xuaW1wb3J0IHtcbiAgbG9hZE1vdmllc1N1Y2Nlc3MsXG4gIGxvYWRNb3ZpZXNGYWlsLFxuICBhZGRNb3ZpZVN1Y2Nlc3MsXG4gIGFkZE1vdmllRmFpbCxcbiAgdXBkYXRlTW92aWVTdWNjZXNzLFxuICB1cGRhdGVNb3ZpZUZhaWwsXG4gIGRlbGV0ZU1vdmllU3VjY2VzcyxcbiAgZGVsZXRlTW92aWVGYWlsLFxufSBmcm9tICcuL2FjdGlvbnMvbW92aWVzJztcbmltcG9ydCB7XG4gIExPQURfTU9WSUVTLFxuICBBRERfTU9WSUUsXG4gIERFTEVURV9NT1ZJRSxcbiAgVVBEQVRFX01PVklFLFxuICBHRVRfTU9WSUVfQllfSUQsXG59IGZyb20gJy4vYWN0aW9ucy90eXBlcyc7XG5cbmZ1bmN0aW9uKiBnZXRBbGxNb3ZpZXMoeyBmaWx0ZXIsIHNvcnQsIHF1ZXJ5IH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb3ZpZXMgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuZmV0Y2hNb3ZpZXMsIGZpbHRlciwgc29ydCwgcXVlcnkpO1xuICAgIHlpZWxkIHB1dChsb2FkTW92aWVzU3VjY2Vzcyhtb3ZpZXMuZGF0YSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGxvYWRNb3ZpZXNGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBnZXRNb3ZpZSh7IG1vdmllSWQgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vdmllID0geWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmdldE1vdmllQnlJZCwgbW92aWVJZCk7XG4gICAgeWllbGQgcHV0KGdldE1vdmllU3VjY2Vzcyhtb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGdldE1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuZnVuY3Rpb24qIGFkZE1vdmllKHsgbW92aWUgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IGFkZGVkTW92aWUgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuYWRkTW92aWUsIG1vdmllKTtcbiAgICB5aWVsZCBwdXQoYWRkTW92aWVTdWNjZXNzKGFkZGVkTW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChhZGRNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHVwZGF0ZU1vdmllKHsgbW92aWUgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS51cGRhdGVNb3ZpZSwgbW92aWUpO1xuICAgIHlpZWxkIHB1dCh1cGRhdGVNb3ZpZVN1Y2Nlc3MobW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dCh1cGRhdGVNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGRlbGV0ZU1vdmllKHsgaWQgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5kZWxldGVNb3ZpZSwgaWQpO1xuICAgIHlpZWxkIHB1dChkZWxldGVNb3ZpZVN1Y2Nlc3MoaWQpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChkZWxldGVNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIG1vdmllc1NhZ2FzKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9NT1ZJRVMsIGdldEFsbE1vdmllcyk7XG4gIHlpZWxkIHRha2VFdmVyeShBRERfTU9WSUUsIGFkZE1vdmllKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KFVQREFURV9NT1ZJRSwgdXBkYXRlTW92aWUpO1xuICB5aWVsZCB0YWtlRXZlcnkoREVMRVRFX01PVklFLCBkZWxldGVNb3ZpZSk7XG4gIHlpZWxkIHRha2VFdmVyeShHRVRfTU9WSUVfQllfSUQsIGdldE1vdmllKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW92aWVzU2FnYXM7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5cbmltcG9ydCBoZWFkZXJSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvaGVhZGVyJztcbmltcG9ydCBtb3ZpZXNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvbW92aWVzJztcbmltcG9ydCBtb3ZpZXNTYWdhcyBmcm9tICcuL3NhZ2FzJztcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgY29tYmluZVJlZHVjZXJzKHsgbW92aWVzOiBtb3ZpZXNSZWR1Y2VyLCBtb3ZpZTogaGVhZGVyUmVkdWNlciB9KSxcbiAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKVxuKTtcbnNhZ2FNaWRkbGV3YXJlLnJ1bihtb3ZpZXNTYWdhcyk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==