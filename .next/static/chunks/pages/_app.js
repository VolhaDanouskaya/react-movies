(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/components/layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Layout.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.scss */ "./src/components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);




var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["main-layout"])
  }, children);
};

_c = Layout;
Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./src/components/layout/Layout.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _store_store__WEBPACK_IMPORTED_MODULE_4__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, pageProps)));
};

_c = MyApp;
MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/services/MoviesService.js":
/*!***************************************!*\
  !*** ./src/services/MoviesService.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var MoviesService = function MoviesService() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, MoviesService);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "apiURL", 'http://localhost:4000/movies/');

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "fetchMovies", function (filter, sort, query) {
    return fetch(_this.buildUrl(filter, sort, query)).then(function (res) {
      return res.json();
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "getMovieById", function (movieId) {
    return fetch(_this.apiURL + movieId).then(function (res) {
      return res.json();
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "addMovie", function (movie) {
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

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "updateMovie", function (movie) {
    return fetch(_this.apiURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "deleteMovie", function (id) {
    return fetch(_this.apiURL + id, {
      method: 'DELETE'
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "buildUrl", function (filter, sort, query) {
    var url = "".concat(_this.apiURL, "?sortBy=").concat(sort, "&sortOrder=desc");

    if (filter && filter !== 'All') {
      url += "&filter=".concat(filter);
    }

    if (query) {
      url += "&search=".concat(query, "&searchBy=title");
    }

    return url;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new MoviesService());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/actions/header.js":
/*!*************************************!*\
  !*** ./src/store/actions/header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMovie": function() { return /* binding */ getMovie; },
/* harmony export */   "getMovieSuccess": function() { return /* binding */ getMovieSuccess; },
/* harmony export */   "getMovieFail": function() { return /* binding */ getMovieFail; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/actions/types.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var getMovie = function getMovie(movieId) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_BY_ID,
    movieId: movieId
  };
};
var getMovieSuccess = function getMovieSuccess(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_BY_ID_SUCCESS,
    movie: movie
  };
};
var getMovieFail = function getMovieFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_BY_ID_FAIL,
    message: message
  };
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/actions/movies.js":
/*!*************************************!*\
  !*** ./src/store/actions/movies.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMovies": function() { return /* binding */ loadMovies; },
/* harmony export */   "loadMoviesSuccess": function() { return /* binding */ loadMoviesSuccess; },
/* harmony export */   "loadMoviesFail": function() { return /* binding */ loadMoviesFail; },
/* harmony export */   "addMovie": function() { return /* binding */ addMovie; },
/* harmony export */   "addMovieSuccess": function() { return /* binding */ addMovieSuccess; },
/* harmony export */   "addMovieFail": function() { return /* binding */ addMovieFail; },
/* harmony export */   "updateMovie": function() { return /* binding */ updateMovie; },
/* harmony export */   "updateMovieSuccess": function() { return /* binding */ updateMovieSuccess; },
/* harmony export */   "updateMovieFail": function() { return /* binding */ updateMovieFail; },
/* harmony export */   "deleteMovie": function() { return /* binding */ deleteMovie; },
/* harmony export */   "deleteMovieSuccess": function() { return /* binding */ deleteMovieSuccess; },
/* harmony export */   "deleteMovieFail": function() { return /* binding */ deleteMovieFail; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/actions/types.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var loadMovies = function loadMovies(filter, sort, query) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.LOAD_MOVIES,
    filter: filter,
    sort: sort,
    query: query
  };
};
var loadMoviesSuccess = function loadMoviesSuccess(movies) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.LOAD_MOVIES_SUCCCESS,
    movies: movies
  };
};
var loadMoviesFail = function loadMoviesFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.LOAD_MOVIES_FAIL,
    message: message
  };
};
var addMovie = function addMovie(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.ADD_MOVIE,
    movie: movie
  };
};
var addMovieSuccess = function addMovieSuccess(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.ADD_MOVIE_SUCCESS,
    movie: movie
  };
};
var addMovieFail = function addMovieFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.ADD_MOVIE_FAIL,
    message: message
  };
};
var updateMovie = function updateMovie(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_MOVIE,
    movie: movie
  };
};
var updateMovieSuccess = function updateMovieSuccess(movie) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_MOVIE_SUCCESS,
    movie: movie
  };
};
var updateMovieFail = function updateMovieFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_MOVIE_FAIL,
    message: message
  };
};
var deleteMovie = function deleteMovie(id) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.DELETE_MOVIE,
    id: id
  };
};
var deleteMovieSuccess = function deleteMovieSuccess(id) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.DELETE_MOVIE_SUCCESS,
    id: id
  };
};
var deleteMovieFail = function deleteMovieFail(message) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.DELETE_MOVIE_FAIL,
    message: message
  };
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/actions/types.js":
/*!************************************!*\
  !*** ./src/store/actions/types.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOAD_MOVIES": function() { return /* binding */ LOAD_MOVIES; },
/* harmony export */   "LOAD_MOVIES_SUCCCESS": function() { return /* binding */ LOAD_MOVIES_SUCCCESS; },
/* harmony export */   "LOAD_MOVIES_FAIL": function() { return /* binding */ LOAD_MOVIES_FAIL; },
/* harmony export */   "ADD_MOVIE": function() { return /* binding */ ADD_MOVIE; },
/* harmony export */   "ADD_MOVIE_SUCCESS": function() { return /* binding */ ADD_MOVIE_SUCCESS; },
/* harmony export */   "ADD_MOVIE_FAIL": function() { return /* binding */ ADD_MOVIE_FAIL; },
/* harmony export */   "UPDATE_MOVIE": function() { return /* binding */ UPDATE_MOVIE; },
/* harmony export */   "UPDATE_MOVIE_SUCCESS": function() { return /* binding */ UPDATE_MOVIE_SUCCESS; },
/* harmony export */   "UPDATE_MOVIE_FAIL": function() { return /* binding */ UPDATE_MOVIE_FAIL; },
/* harmony export */   "DELETE_MOVIE": function() { return /* binding */ DELETE_MOVIE; },
/* harmony export */   "DELETE_MOVIE_SUCCESS": function() { return /* binding */ DELETE_MOVIE_SUCCESS; },
/* harmony export */   "DELETE_MOVIE_FAIL": function() { return /* binding */ DELETE_MOVIE_FAIL; },
/* harmony export */   "GET_MOVIE_BY_ID": function() { return /* binding */ GET_MOVIE_BY_ID; },
/* harmony export */   "GET_MOVIE_BY_ID_SUCCESS": function() { return /* binding */ GET_MOVIE_BY_ID_SUCCESS; },
/* harmony export */   "GET_MOVIE_BY_ID_FAIL": function() { return /* binding */ GET_MOVIE_BY_ID_FAIL; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/reducers/header.js":
/*!**************************************!*\
  !*** ./src/store/reducers/header.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/store/actions/types.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var headerReducer = function headerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_BY_ID_SUCCESS:
      return action.movie;

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_BY_ID_FAIL:
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (headerReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/reducers/movies.js":
/*!**************************************!*\
  !*** ./src/store/reducers/movies.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/types */ "./src/store/actions/types.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var moviesReducer = function moviesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.LOAD_MOVIES_SUCCCESS:
      return action.movies;

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.ADD_MOVIE_SUCCESS:
      return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state), [action.movie]);

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.UPDATE_MOVIE_SUCCESS:
      return state.map(function (movie) {
        if (movie.id === action.movie.id) {
          return _objectSpread({}, action.movie);
        }

        return movie;
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.DELETE_MOVIE_SUCCESS:
      return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state.filter(function (movie) {
        return movie.id !== action.id;
      }));

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.LOAD_MOVIES_FAIL:
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.ADD_MOVIE_FAIL:
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.UPDATE_MOVIE_FAIL:
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.DELETE_MOVIE_FAIL:
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (moviesReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/sagas.js":
/*!****************************!*\
  !*** ./src/store/sagas.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _services_MoviesService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/MoviesService */ "./src/services/MoviesService.js");
/* harmony import */ var _actions_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/header */ "./src/store/actions/header.js");
/* harmony import */ var _actions_movies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/movies */ "./src/store/actions/movies.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/types */ "./src/store/actions/types.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(getAllMovies),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(getMovie),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(addMovie),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(updateMovie),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(deleteMovie),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(moviesSagas);

// eslint-disable-next-line import/no-extraneous-dependencies







function getAllMovies(_ref) {
  var filter, sort, query, movies;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function getAllMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          filter = _ref.filter, sort = _ref.sort, query = _ref.query;
          _context.prev = 1;
          _context.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__.default.fetchMovies, filter, sort, query);

        case 4:
          movies = _context.sent;
          _context.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_movies__WEBPACK_IMPORTED_MODULE_5__.loadMoviesSuccess)(movies.data));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_movies__WEBPACK_IMPORTED_MODULE_5__.loadMoviesFail)(_context.t0.message));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}

function getMovie(_ref2) {
  var movieId, movie;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function getMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          movieId = _ref2.movieId;
          _context2.prev = 1;
          _context2.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__.default.getMovieById, movieId);

        case 4:
          movie = _context2.sent;
          _context2.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_header__WEBPACK_IMPORTED_MODULE_4__.getMovieSuccess)(movie));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_header__WEBPACK_IMPORTED_MODULE_4__.getMovieFail)(_context2.t0.message));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}

function addMovie(_ref3) {
  var movie, addedMovie;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function addMovie$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          movie = _ref3.movie;
          _context3.prev = 1;
          _context3.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__.default.addMovie, movie);

        case 4:
          addedMovie = _context3.sent;
          _context3.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_movies__WEBPACK_IMPORTED_MODULE_5__.addMovieSuccess)(addedMovie));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_movies__WEBPACK_IMPORTED_MODULE_5__.addMovieFail)(_context3.t0.message));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
}

function updateMovie(_ref4) {
  var movie;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function updateMovie$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          movie = _ref4.movie;
          _context4.prev = 1;
          _context4.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__.default.updateMovie, movie);

        case 4:
          _context4.next = 6;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_movies__WEBPACK_IMPORTED_MODULE_5__.updateMovieSuccess)(movie));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 12;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_movies__WEBPACK_IMPORTED_MODULE_5__.updateMovieFail)(_context4.t0.message));

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 8]]);
}

function deleteMovie(_ref5) {
  var id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function deleteMovie$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = _ref5.id;
          _context5.prev = 1;
          _context5.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(_services_MoviesService__WEBPACK_IMPORTED_MODULE_3__.default.deleteMovie, id);

        case 4:
          _context5.next = 6;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_movies__WEBPACK_IMPORTED_MODULE_5__.deleteMovieSuccess)(id));

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          _context5.next = 12;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)((0,_actions_movies__WEBPACK_IMPORTED_MODULE_5__.deleteMovieFail)(_context5.t0.message));

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[1, 8]]);
}

function moviesSagas() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function moviesSagas$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(_actions_types__WEBPACK_IMPORTED_MODULE_6__.LOAD_MOVIES, getAllMovies);

        case 2:
          _context6.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(_actions_types__WEBPACK_IMPORTED_MODULE_6__.ADD_MOVIE, addMovie);

        case 4:
          _context6.next = 6;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(_actions_types__WEBPACK_IMPORTED_MODULE_6__.UPDATE_MOVIE, updateMovie);

        case 6:
          _context6.next = 8;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(_actions_types__WEBPACK_IMPORTED_MODULE_6__.DELETE_MOVIE, deleteMovie);

        case 8:
          _context6.next = 10;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(_actions_types__WEBPACK_IMPORTED_MODULE_6__.GET_MOVIE_BY_ID, getMovie);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

/* harmony default export */ __webpack_exports__["default"] = (moviesSagas);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _reducers_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/header */ "./src/store/reducers/header.js");
/* harmony import */ var _reducers_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/movies */ "./src/store/reducers/movies.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./src/store/sagas.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_0__.default)();
var store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
  movies: _reducers_movies__WEBPACK_IMPORTED_MODULE_2__.default,
  movie: _reducers_header__WEBPACK_IMPORTED_MODULE_1__.default
}), (0,redux__WEBPACK_IMPORTED_MODULE_4__.applyMiddleware)(sagaMiddleware));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__.default);
/* harmony default export */ __webpack_exports__["default"] = (store);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/io-6de156f3.js":
/*!***********************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/io-6de156f3.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ apply; },
/* harmony export */   "A": function() { return /* binding */ ALL; },
/* harmony export */   "B": function() { return /* binding */ logError; },
/* harmony export */   "C": function() { return /* binding */ CALL; },
/* harmony export */   "D": function() { return /* binding */ wrapSagaDispatch; },
/* harmony export */   "E": function() { return /* binding */ identity; },
/* harmony export */   "F": function() { return /* binding */ FORK; },
/* harmony export */   "G": function() { return /* binding */ GET_CONTEXT; },
/* harmony export */   "H": function() { return /* binding */ buffers; },
/* harmony export */   "I": function() { return /* binding */ detach; },
/* harmony export */   "J": function() { return /* binding */ JOIN; },
/* harmony export */   "K": function() { return /* binding */ take; },
/* harmony export */   "L": function() { return /* binding */ fork; },
/* harmony export */   "M": function() { return /* binding */ cancel; },
/* harmony export */   "N": function() { return /* binding */ call; },
/* harmony export */   "O": function() { return /* binding */ actionChannel; },
/* harmony export */   "P": function() { return /* binding */ PUT; },
/* harmony export */   "Q": function() { return /* binding */ sliding; },
/* harmony export */   "R": function() { return /* binding */ RACE; },
/* harmony export */   "S": function() { return /* binding */ SELECT; },
/* harmony export */   "T": function() { return /* binding */ TAKE; },
/* harmony export */   "U": function() { return /* binding */ delay; },
/* harmony export */   "V": function() { return /* binding */ race; },
/* harmony export */   "W": function() { return /* binding */ effectTypes; },
/* harmony export */   "X": function() { return /* binding */ takeMaybe; },
/* harmony export */   "Y": function() { return /* binding */ put; },
/* harmony export */   "Z": function() { return /* binding */ putResolve; },
/* harmony export */   "_": function() { return /* binding */ all; },
/* harmony export */   "a": function() { return /* binding */ CPS; },
/* harmony export */   "a0": function() { return /* binding */ cps; },
/* harmony export */   "a1": function() { return /* binding */ spawn; },
/* harmony export */   "a2": function() { return /* binding */ join; },
/* harmony export */   "a3": function() { return /* binding */ select; },
/* harmony export */   "a4": function() { return /* binding */ cancelled; },
/* harmony export */   "a5": function() { return /* binding */ flush; },
/* harmony export */   "a6": function() { return /* binding */ getContext; },
/* harmony export */   "a7": function() { return /* binding */ setContext; },
/* harmony export */   "b": function() { return /* binding */ CANCEL; },
/* harmony export */   "c": function() { return /* binding */ check; },
/* harmony export */   "d": function() { return /* binding */ ACTION_CHANNEL; },
/* harmony export */   "e": function() { return /* binding */ expanding; },
/* harmony export */   "f": function() { return /* binding */ CANCELLED; },
/* harmony export */   "g": function() { return /* binding */ FLUSH; },
/* harmony export */   "h": function() { return /* binding */ SET_CONTEXT; },
/* harmony export */   "i": function() { return /* binding */ internalErr; },
/* harmony export */   "j": function() { return /* binding */ getMetaInfo; },
/* harmony export */   "k": function() { return /* binding */ kTrue; },
/* harmony export */   "l": function() { return /* binding */ createAllStyleChildCallbacks; },
/* harmony export */   "m": function() { return /* binding */ createEmptyArray; },
/* harmony export */   "n": function() { return /* binding */ none; },
/* harmony export */   "o": function() { return /* binding */ once; },
/* harmony export */   "p": function() { return /* binding */ assignWithSymbols; },
/* harmony export */   "q": function() { return /* binding */ makeIterator; },
/* harmony export */   "r": function() { return /* binding */ remove; },
/* harmony export */   "s": function() { return /* binding */ shouldComplete; },
/* harmony export */   "t": function() { return /* binding */ noop; },
/* harmony export */   "u": function() { return /* binding */ flatMap; },
/* harmony export */   "v": function() { return /* binding */ getLocation; },
/* harmony export */   "w": function() { return /* binding */ createSetContextWarning; },
/* harmony export */   "x": function() { return /* binding */ asyncIteratorSymbol; },
/* harmony export */   "y": function() { return /* binding */ shouldCancel; },
/* harmony export */   "z": function() { return /* binding */ shouldTerminate; }
/* harmony export */ });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");





var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue =
/*#__PURE__*/
konst(true);

var noop = function noop() {};

if ( true && typeof Proxy !== 'undefined') {
  noop =
  /*#__PURE__*/
  new Proxy(noop, {
    set: function set() {
      throw internalErr('There was an attempt to assign a property to internal `noop` function.');
    }
  });
}
var identity = function identity(v) {
  return v;
};
var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols(target, source) {
  (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)(target, source);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap(mapper, arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    fn();
  };
}

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }

  if (name === void 0) {
    name = 'iterator';
  }

  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;

  /*eslint-disable no-console*/
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n"; // creates empty, but not-holey array

var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    if (true) {
      check(action, function (ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }

    return dispatch(Object.defineProperty(action, _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.SAGA_ACTION, {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TERMINATE;
};
var shouldCancel = function shouldCancel(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TASK_CANCEL;
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;

  if (true) {
    check(totalCount, function (c) {
      return c > 0;
    }, 'createAllStyleChildCallbacks: get an empty array or object');
  }

  var completedCount = 0;
  var completed;
  var results = (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.array)(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};

  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }

  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };

    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });

  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };

  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.SAGA_LOCATION];
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};

function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var none = function none() {
  return zeroBuffer;
};
var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});

var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var effectTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});

var TEST_HINT = '\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)';

var makeEffect = function makeEffect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.IO] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};

var isForkEffect = function isForkEffect(eff) {
  return (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.effect)(eff) && eff.type === FORK;
};

var detach = function detach(eff) {
  if (true) {
    check(eff, isForkEffect, 'detach(eff): argument must be a fork effect');
  }

  return makeEffect(FORK, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.pattern)(patternOrChannel)) {
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.multicast)(patternOrChannel) && (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef)(multicastPattern) && (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.pattern)(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.channel)(patternOrChannel)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }

  if (true) {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel$1, action) {
  if (true) {
    if (arguments.length > 1) {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, 'put(channel, action): argument channel is undefined');
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.channel, "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, 'put(channel, action): argument action is undefined');
    } else {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, 'put(action): argument action is undefined');
    }
  }

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.undef)(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }

  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}
var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
} // this match getFnCallDescriptor logic

var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, effectName + ": argument fn is undefined or null");

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.func)(fnDescriptor)) {
    return;
  }

  var context = null;
  var fn;

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.array)(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.object)(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.func, effectName + ": argument fn is not function");
    return;
  }

  if (context && (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.string)(fn)) {
    check(context[fn], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.func, effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }

  check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.func, effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};

function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.func)(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.array)(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }

    if (context && (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.string)(fn) && (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.func)(context[fn])) {
      fn = context[fn];
    }
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};

function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var arg0 = typeof args[0] === 'number' ? args[0] : 'ms';
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor('call', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  var fnDescriptor = [context, fn];

  if (true) {
    validateFnDescriptor('apply', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  if (true) {
    validateFnDescriptor('cps', fnDescriptor);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  if (true) {
    validateFnDescriptor('fork', fnDescriptor);
    check(fnDescriptor, function (arg) {
      return !(0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.effect)(arg);
    }, 'fork: argument must not be an effect');
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  if (true) {
    validateFnDescriptor('spawn', fnDescriptor);
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  if (true) {
    if (arguments.length > 1) {
      throw new Error('join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.');
    }

    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.array)(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.task, "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.task, "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.SELF_CANCELLATION;
  }

  if (true) {
    if (arguments.length > 1) {
      throw new Error('cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.');
    }

    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.array)(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.task, "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.SELF_CANCELLATION && (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef)(taskOrTasks)) {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.task, "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(CANCEL, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, 'select(selector, [...]): argument selector is undefined');
    check(selector, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.func, "select(selector, [...]): argument " + selector + " is not a function");
  }

  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/

function actionChannel(pattern$1, buffer$1) {
  if (true) {
    check(pattern$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.pattern, 'actionChannel(pattern,...): argument pattern is not valid');

    if (arguments.length > 1) {
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.buffer, "actionChannel(pattern, buffer): argument " + buffer$1 + " is not a valid buffer");
    }
  }

  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel$1) {
  if (true) {
    check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.channel, "flush(channel): argument " + channel$1 + " is not valid channel");
  }

  return makeEffect(FLUSH, channel$1);
}
function getContext(prop) {
  if (true) {
    check(prop, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.string, "getContext(prop): argument " + prop + " is not a string");
  }

  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    check(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.object, createSetContextWarning(null, props));
  }

  return makeEffect(SET_CONTEXT, props);
}
var delay =
/*#__PURE__*/
call.bind(null, _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__.default);




/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CANCEL": function() { return /* reexport safe */ _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.CANCEL; },
/* harmony export */   "SAGA_LOCATION": function() { return /* reexport safe */ _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.SAGA_LOCATION; },
/* harmony export */   "buffers": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.H; },
/* harmony export */   "detach": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.I; },
/* harmony export */   "END": function() { return /* binding */ END; },
/* harmony export */   "channel": function() { return /* binding */ channel; },
/* harmony export */   "eventChannel": function() { return /* binding */ eventChannel; },
/* harmony export */   "isEnd": function() { return /* binding */ isEnd; },
/* harmony export */   "multicastChannel": function() { return /* binding */ multicastChannel; },
/* harmony export */   "runSaga": function() { return /* binding */ runSaga; },
/* harmony export */   "stdChannel": function() { return /* binding */ stdChannel; }
/* harmony export */ });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./io-6de156f3.js */ "./node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_saga_deferred__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux-saga/deferred */ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");











var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/

var semaphore = 0;
/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/

function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}
/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/


function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}
/**
 * Puts the scheduler in a `suspended` state and executes a task immediately.
 */

function immediately(task) {
  try {
    suspend();
    return task();
  } finally {
    flush();
  }
}
/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/

function suspend() {
  semaphore++;
}
/**
  Puts the scheduler in a `released` state.
**/


function release() {
  semaphore--;
}
/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/


function flush() {
  release();
  var task;

  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

var array = function array(patterns) {
  return function (input) {
    return patterns.some(function (p) {
      return matcher(p)(input);
    });
  };
};
var predicate = function predicate(_predicate) {
  return function (input) {
    return _predicate(input);
  };
};
var string = function string(pattern) {
  return function (input) {
    return input.type === String(pattern);
  };
};
var symbol = function symbol(pattern) {
  return function (input) {
    return input.type === pattern;
  };
};
var wildcard = function wildcard() {
  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.k;
};
function matcher(pattern) {
  // prettier-ignore
  var matcherCreator = pattern === '*' ? wildcard : (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.string)(pattern) ? string : (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.array)(pattern) ? array : (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.stringableFunc)(pattern) ? string : (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func)(pattern) ? predicate : (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.symbol)(pattern) ? symbol : null;

  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern);
  }

  return matcherCreator(pattern);
}

var END = {
  type: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_END_TYPE
};
var isEnd = function isEnd(a) {
  return a && a.type === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_END_TYPE;
};
var CLOSED_CHANNEL_WITH_TAKERS = 'Cannot have a closed channel with pending takers';
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
function channel(buffer$1) {
  if (buffer$1 === void 0) {
    buffer$1 = (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.e)();
  }

  var closed = false;
  var takers = [];

  if (true) {
    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.buffer, INVALID_BUFFER);
  }

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.i)(CLOSED_CHANNEL_WITH_TAKERS);
    }

    if (takers.length && !buffer$1.isEmpty()) {
      throw (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.i)('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    if (true) {
      checkForbiddenStates();
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.notUndef, UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (takers.length === 0) {
      return buffer$1.put(input);
    }

    var cb = takers.shift();
    cb(input);
  }

  function take(cb) {
    if (true) {
      checkForbiddenStates();
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func, "channel.take's callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
    } else if (!buffer$1.isEmpty()) {
      cb(buffer$1.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.r)(takers, cb);
      };
    }
  }

  function flush(cb) {
    if (true) {
      checkForbiddenStates();
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func, "channel.flush' callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer$1.flush());
  }

  function close() {
    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      return;
    }

    closed = true;
    var arr = takers;
    takers = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      var taker = arr[i];
      taker(END);
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close
  };
}
function eventChannel(subscribe, buffer) {
  if (buffer === void 0) {
    buffer = (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.n)();
  }

  var closed = false;
  var unsubscribe;
  var chan = channel(buffer);

  var close = function close() {
    if (closed) {
      return;
    }

    closed = true;

    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func)(unsubscribe)) {
      unsubscribe();
    }

    chan.close();
  };

  unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }

    chan.put(input);
  });

  if (true) {
    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(unsubscribe, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func, 'in eventChannel: subscribe should return a function to unsubscribe');
  }

  unsubscribe = (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.o)(unsubscribe);

  if (closed) {
    unsubscribe();
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}
function multicastChannel() {
  var _ref;

  var closed = false;
  var currentTakers = [];
  var nextTakers = currentTakers;

  function checkForbiddenStates() {
    if (closed && nextTakers.length) {
      throw (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.i)(CLOSED_CHANNEL_WITH_TAKERS);
    }
  }

  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
    if (nextTakers !== currentTakers) {
      return;
    }

    nextTakers = currentTakers.slice();
  };

  var close = function close() {
    if (true) {
      checkForbiddenStates();
    }

    closed = true;
    var takers = currentTakers = nextTakers;
    nextTakers = [];
    takers.forEach(function (taker) {
      taker(END);
    });
  };

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.MULTICAST] = true, _ref.put = function put(input) {
    if (true) {
      checkForbiddenStates();
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.notUndef, UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (isEnd(input)) {
      close();
      return;
    }

    var takers = currentTakers = nextTakers;

    for (var i = 0, len = takers.length; i < len; i++) {
      var taker = takers[i];

      if (taker[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.MATCH](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher) {
    if (matcher === void 0) {
      matcher = wildcard;
    }

    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      cb(END);
      return;
    }

    cb[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.MATCH] = matcher;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.o)(function () {
      ensureCanMutateNextTakers();
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.r)(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}
function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;

  chan.put = function (input) {
    if (input[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.SAGA_ACTION]) {
      put(input);
      return;
    }

    asap(function () {
      put(input);
    });
  };

  return chan;
}

var RUNNING = 0;
var CANCELLED = 1;
var ABORTED = 2;
var DONE = 3;

function resolvePromise(promise, cb) {
  var cancelPromise = promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.CANCEL];

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func)(cancelPromise)) {
    cb.cancel = cancelPromise;
  }

  promise.then(cb, function (error) {
    cb(error, true);
  });
}

var current = 0;
var nextSagaId = (function () {
  return ++current;
});

var _effectRunnerMap;

function getIteratorMetaInfo(iterator, fn) {
  if (iterator.isSagaIterator) {
    return {
      name: iterator.meta.name
    };
  }

  return (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.j)(fn);
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  // catch synchronous failures; see #152 and #441
  try {
    var result = fn.apply(context, args); // i.e. a generator function returns an iterator

    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.iterator)(result)) {
      return result;
    }

    var resolved = false;

    var next = function next(arg) {
      if (!resolved) {
        resolved = true; // Only promises returned from fork will be interpreted. See #1573

        return {
          value: result,
          done: !(0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.promise)(result)
        };
      } else {
        return {
          value: arg,
          done: true
        };
      }
    };

    return (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.q)(next);
  } catch (err) {
    // do not bubble up synchronous failures for detached forks
    // instead create a failed task. See #152 and #441
    return (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.q)(function () {
      throw err;
    });
  }
}

function runPutEffect(env, _ref2, cb) {
  var channel = _ref2.channel,
      action = _ref2.action,
      resolve = _ref2.resolve;

  /**
   Schedule the put in case another saga is holding a lock.
   The put will be executed atomically. ie nested puts will execute after
   this put has terminated.
   **/
  asap(function () {
    var result;

    try {
      result = (channel ? channel.put : env.dispatch)(action);
    } catch (error) {
      cb(error, true);
      return;
    }

    if (resolve && (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.promise)(result)) {
      resolvePromise(result, cb);
    } else {
      cb(result);
    }
  }); // Put effects are non cancellables
}

function runTakeEffect(env, _ref3, cb) {
  var _ref3$channel = _ref3.channel,
      channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
      pattern = _ref3.pattern,
      maybe = _ref3.maybe;

  var takeCb = function takeCb(input) {
    if (input instanceof Error) {
      cb(input, true);
      return;
    }

    if (isEnd(input) && !maybe) {
      cb(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TERMINATE);
      return;
    }

    cb(input);
  };

  try {
    channel.take(takeCb, (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.notUndef)(pattern) ? matcher(pattern) : null);
  } catch (err) {
    cb(err, true);
    return;
  }

  cb.cancel = takeCb.cancel;
}

function runCallEffect(env, _ref4, cb, _ref5) {
  var context = _ref4.context,
      fn = _ref4.fn,
      args = _ref4.args;
  var task = _ref5.task;

  // catch synchronous failures; see #152
  try {
    var result = fn.apply(context, args);

    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.promise)(result)) {
      resolvePromise(result, cb);
      return;
    }

    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.iterator)(result)) {
      // resolve iterator
      proc(env, result, task.context, current, (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.j)(fn),
      /* isRoot */
      false, cb);
      return;
    }

    cb(result);
  } catch (error) {
    cb(error, true);
  }
}

function runCPSEffect(env, _ref6, cb) {
  var context = _ref6.context,
      fn = _ref6.fn,
      args = _ref6.args;

  // CPS (ie node style functions) can define their own cancellation logic
  // by setting cancel field on the cb
  // catch synchronous failures; see #152
  try {
    var cpsCb = function cpsCb(err, res) {
      if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.undef)(err)) {
        cb(res);
      } else {
        cb(err, true);
      }
    };

    fn.apply(context, args.concat(cpsCb));

    if (cpsCb.cancel) {
      cb.cancel = cpsCb.cancel;
    }
  } catch (error) {
    cb(error, true);
  }
}

function runForkEffect(env, _ref7, cb, _ref8) {
  var context = _ref7.context,
      fn = _ref7.fn,
      args = _ref7.args,
      detached = _ref7.detached;
  var parent = _ref8.task;
  var taskIterator = createTaskIterator({
    context: context,
    fn: fn,
    args: args
  });
  var meta = getIteratorMetaInfo(taskIterator, fn);
  immediately(function () {
    var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);

    if (detached) {
      cb(child);
    } else {
      if (child.isRunning()) {
        parent.queue.addTask(child);
        cb(child);
      } else if (child.isAborted()) {
        parent.queue.abort(child.error());
      } else {
        cb(child);
      }
    }
  }); // Fork effects are non cancellables
}

function runJoinEffect(env, taskOrTasks, cb, _ref9) {
  var task = _ref9.task;

  var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
    if (taskToJoin.isRunning()) {
      var joiner = {
        task: task,
        cb: cb
      };

      cb.cancel = function () {
        if (taskToJoin.isRunning()) (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.r)(taskToJoin.joiners, joiner);
      };

      taskToJoin.joiners.push(joiner);
    } else {
      if (taskToJoin.isAborted()) {
        cb(taskToJoin.error(), true);
      } else {
        cb(taskToJoin.result());
      }
    }
  };

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.array)(taskOrTasks)) {
    if (taskOrTasks.length === 0) {
      cb([]);
      return;
    }

    var childCallbacks = (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.l)(taskOrTasks, cb);
    taskOrTasks.forEach(function (t, i) {
      joinSingleTask(t, childCallbacks[i]);
    });
  } else {
    joinSingleTask(taskOrTasks, cb);
  }
}

function cancelSingleTask(taskToCancel) {
  if (taskToCancel.isRunning()) {
    taskToCancel.cancel();
  }
}

function runCancelEffect(env, taskOrTasks, cb, _ref10) {
  var task = _ref10.task;

  if (taskOrTasks === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.SELF_CANCELLATION) {
    cancelSingleTask(task);
  } else if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.array)(taskOrTasks)) {
    taskOrTasks.forEach(cancelSingleTask);
  } else {
    cancelSingleTask(taskOrTasks);
  }

  cb(); // cancel effects are non cancellables
}

function runAllEffect(env, effects, cb, _ref11) {
  var digestEffect = _ref11.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);

  if (keys.length === 0) {
    cb((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.array)(effects) ? [] : {});
    return;
  }

  var childCallbacks = (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.l)(effects, cb);
  keys.forEach(function (key) {
    digestEffect(effects[key], effectId, childCallbacks[key], key);
  });
}

function runRaceEffect(env, effects, cb, _ref12) {
  var digestEffect = _ref12.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  var response = (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.array)(effects) ? (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.m)(keys.length) : {};
  var childCbs = {};
  var completed = false;
  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.s)(res)) {
        // Race Auto cancellation
        cb.cancel();
        cb(res, isErr);
      } else {
        cb.cancel();
        completed = true;
        response[key] = res;
        cb(response);
      }
    };

    chCbAtKey.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
    childCbs[key] = chCbAtKey;
  });

  cb.cancel = function () {
    // prevents unnecessary cancellation
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCbs[key].cancel();
      });
    }
  };

  keys.forEach(function (key) {
    if (completed) {
      return;
    }

    digestEffect(effects[key], effectId, childCbs[key], key);
  });
}

function runSelectEffect(env, _ref13, cb) {
  var selector = _ref13.selector,
      args = _ref13.args;

  try {
    var state = selector.apply(void 0, [env.getState()].concat(args));
    cb(state);
  } catch (error) {
    cb(error, true);
  }
}

function runChannelEffect(env, _ref14, cb) {
  var pattern = _ref14.pattern,
      buffer = _ref14.buffer;
  var chan = channel(buffer);
  var match = matcher(pattern);

  var taker = function taker(action) {
    if (!isEnd(action)) {
      env.channel.take(taker, match);
    }

    chan.put(action);
  };

  var close = chan.close;

  chan.close = function () {
    taker.cancel();
    close();
  };

  env.channel.take(taker, match);
  cb(chan);
}

function runCancelledEffect(env, data, cb, _ref15) {
  var task = _ref15.task;
  cb(task.isCancelled());
}

function runFlushEffect(env, channel, cb) {
  channel.flush(cb);
}

function runGetContextEffect(env, prop, cb, _ref16) {
  var task = _ref16.task;
  cb(task.context[prop]);
}

function runSetContextEffect(env, props, cb, _ref17) {
  var task = _ref17.task;
  (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.p)(task.context, props);
  cb();
}

var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.T] = runTakeEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.P] = runPutEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.A] = runAllEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.R] = runRaceEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.C] = runCallEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.a] = runCPSEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.F] = runForkEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.J] = runJoinEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.b] = runCancelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.S] = runSelectEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.d] = runChannelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.f] = runCancelledEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.g] = runFlushEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.G] = runGetContextEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.h] = runSetContextEffect, _effectRunnerMap);

/**
 Used to track a parent task and its forks
 In the fork model, forked tasks are attached by default to their parent
 We model this using the concept of Parent task && main Task
 main task is the main flow of the current Generator, the parent tasks is the
 aggregation of the main tasks + all its forked tasks.
 Thus the whole model represents an execution tree with multiple branches (vs the
 linear execution tree in sequential (non parallel) programming)

 A parent tasks has the following semantics
 - It completes if all its forks either complete or all cancelled
 - If it's cancelled, all forks are cancelled as well
 - It aborts if any uncaught error bubbles up from forks
 - If it completes, the return value is the one returned by the main task
 **/

function forkQueue(mainTask, onAbort, cont) {
  var tasks = [];
  var result;
  var completed = false;
  addTask(mainTask);

  var getTasks = function getTasks() {
    return tasks;
  };

  function abort(err) {
    onAbort();
    cancelAll();
    cont(err, true);
  }

  function addTask(task) {
    tasks.push(task);

    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.r)(tasks, task);
      task.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;

      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }

        if (!tasks.length) {
          completed = true;
          cont(result);
        }
      }
    };
  }

  function cancelAll() {
    if (completed) {
      return;
    }

    completed = true;
    tasks.forEach(function (t) {
      t.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: getTasks
  };
}

// there can be only a single saga error created at any given moment

function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}

function effectLocationAsString(effect) {
  var location = (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.v)(effect);

  if (location) {
    var code = location.code,
        fileName = location.fileName,
        lineNumber = location.lineNumber;
    var source = code + "  " + formatLocation(fileName, lineNumber);
    return source;
  }

  return '';
}

function sagaLocationAsString(sagaMeta) {
  var name = sagaMeta.name,
      location = sagaMeta.location;

  if (location) {
    return name + "  " + formatLocation(location.fileName, location.lineNumber);
  }

  return name;
}

function cancelledTasksAsString(sagaStack) {
  var cancelledTasks = (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.u)(function (i) {
    return i.cancelledTasks;
  }, sagaStack);

  if (!cancelledTasks.length) {
    return '';
  }

  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
}

var crashedEffect = null;
var sagaStack = [];
var addSagaFrame = function addSagaFrame(frame) {
  frame.crashedEffect = crashedEffect;
  sagaStack.push(frame);
};
var clear = function clear() {
  crashedEffect = null;
  sagaStack.length = 0;
}; // this sets crashed effect for the soon-to-be-reported saga frame
// this slightly streatches the singleton nature of this module into wrong direction
// as it's even less obvious what's the data flow here, but it is what it is for now

var setCrashedEffect = function setCrashedEffect(effect) {
  crashedEffect = effect;
};
/**
  @returns {string}

  @example
  The above error occurred in task errorInPutSaga {pathToFile}
  when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
      created by fetchSaga {pathToFile}
      created by rootSaga {pathToFile}
*/

var toString = function toString() {
  var firstSaga = sagaStack[0],
      otherSagas = sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
  return [errorMessage].concat(otherSagas.map(function (s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(sagaStack)]).join('\n');
};

function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
  var _task;

  if (cont === void 0) {
    cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
  }

  var status = RUNNING;
  var taskResult;
  var taskError;
  var deferredEnd = null;
  var cancelledDueToErrorTasks = [];
  var context = Object.create(parentContext);
  var queue = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue.getTasks().map(function (t) {
      return t.meta.name;
    }));
  }, end);
  /**
   This may be called by a parent generator to trigger/propagate cancellation
   cancel all pending tasks (including the main task), then end the current task.
    Cancellation propagates down to the whole execution tree held by this Parent task
   It's also propagated to all joiners of this task and their execution tree/joiners
    Cancellation is noop for terminated/Cancelled tasks tasks
   **/

  function cancel() {
    if (status === RUNNING) {
      // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
      // effects in the iterator's finally block will still be executed
      status = CANCELLED;
      queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

      end(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TASK_CANCEL, false);
    }
  }

  function end(result, isErr) {
    if (!isErr) {
      // The status here may be RUNNING or CANCELLED
      // If the status is CANCELLED, then we do not need to change it here
      if (result === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TASK_CANCEL) {
        status = CANCELLED;
      } else if (status !== CANCELLED) {
        status = DONE;
      }

      taskResult = result;
      deferredEnd && deferredEnd.resolve(result);
    } else {
      status = ABORTED;
      addSagaFrame({
        meta: meta,
        cancelledTasks: cancelledDueToErrorTasks
      });

      if (task.isRoot) {
        var sagaStack = toString(); // we've dumped the saga stack to string and are passing it to user's code
        // we know that it won't be needed anymore and we need to clear it

        clear();
        env.onError(result, {
          sagaStack: sagaStack
        });
      }

      taskError = result;
      deferredEnd && deferredEnd.reject(result);
    }

    task.cont(result, isErr);
    task.joiners.forEach(function (joiner) {
      joiner.cb(result, isErr);
    });
    task.joiners = null;
  }

  function setContext(props) {
    if (true) {
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.object, (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.w)('task', props));
    }

    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.p)(context, props);
  }

  function toPromise() {
    if (deferredEnd) {
      return deferredEnd.promise;
    }

    deferredEnd = (0,_redux_saga_deferred__WEBPACK_IMPORTED_MODULE_5__.default)();

    if (status === ABORTED) {
      deferredEnd.reject(taskError);
    } else if (status !== RUNNING) {
      deferredEnd.resolve(taskResult);
    }

    return deferredEnd.promise;
  }

  var task = (_task = {}, _task[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TASK] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
    return status === RUNNING;
  }, _task.isCancelled = function isCancelled() {
    return status === CANCELLED || status === RUNNING && mainTask.status === CANCELLED;
  }, _task.isAborted = function isAborted() {
    return status === ABORTED;
  }, _task.result = function result() {
    return taskResult;
  }, _task.error = function error() {
    return taskError;
  }, _task);
  return task;
}

function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
  if ( true && iterator$1[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.x]) {
    throw new Error("redux-saga doesn't support async generators, please use only regular ones");
  }

  var finalRunEffect = env.finalizeRunEffect(runEffect);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/

  next.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
  /** Creates a main task to track the main flow */

  var mainTask = {
    meta: meta,
    cancel: cancelMain,
    status: RUNNING
  };
  /**
   Creates a new task descriptor for this generator.
   A task is the aggregation of it's mainTask and all it's forked tasks.
   **/

  var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
  var executingContext = {
    task: task,
    digestEffect: digestEffect
  };
  /**
    cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
  **/

  function cancelMain() {
    if (mainTask.status === RUNNING) {
      mainTask.status = CANCELLED;
      next(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TASK_CANCEL);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/


  if (cont) {
    cont.cancel = task.cancel;
  } // kicks up the generator


  next(); // then return the task descriptor to the caller

  return task;
  /**
   * This is the generator driver
   * It's a recursive async/continuation function which calls itself
   * until the generator terminates or throws
   * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
   * @param {boolean} isErr - the flag shows if effect finished with an error
   *
   * receives either (command | effect result, false) or (any thrown thing, true)
   */

  function next(arg, isErr) {
    try {
      var result;

      if (isErr) {
        result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

        clear();
      } else if ((0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.y)(arg)) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.status = CANCELLED;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/

        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/

        result = (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func)(iterator$1.return) ? iterator$1.return(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TASK_CANCEL) : {
          done: true,
          value: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TASK_CANCEL
        };
      } else if ((0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.z)(arg)) {
        // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = (0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func)(iterator$1.return) ? iterator$1.return() : {
          done: true
        };
      } else {
        result = iterator$1.next(arg);
      }

      if (!result.done) {
        digestEffect(result.value, parentEffectId, next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        if (mainTask.status !== CANCELLED) {
          mainTask.status = DONE;
        }

        mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.status === CANCELLED) {
        throw error;
      }

      mainTask.status = ABORTED;
      mainTask.cont(error, true);
    }
  }

  function runEffect(effect, effectId, currCb) {
    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.promise)(effect)) {
      resolvePromise(effect, currCb);
    } else if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.iterator)(effect)) {
      // resolve iterator
      proc(env, effect, task.context, effectId, meta,
      /* isRoot */
      false, currCb);
    } else if (effect && effect[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.IO]) {
      var effectRunner = effectRunnerMap[effect.type];
      effectRunner(env, effect.payload, currCb, executingContext);
    } else {
      // anything else returned as is
      currCb(effect);
    }
  }

  function digestEffect(effect, parentEffectId, cb, label) {
    if (label === void 0) {
      label = '';
    }

    var effectId = nextSagaId();
    env.sagaMonitor && env.sagaMonitor.effectTriggered({
      effectId: effectId,
      parentEffectId: parentEffectId,
      label: label,
      effect: effect
    });
    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/

    var effectSettled; // Completion callback passed to the appropriate effect runner

    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t; // defensive measure

      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res);
        } else {
          env.sagaMonitor.effectResolved(effectId, res);
        }
      }

      if (isErr) {
        setCrashedEffect(effect);
      }

      cb(res, isErr);
    } // tracks down the current cancel


    currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t; // setup cancellation logic on the parent cb

    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      currCb.cancel(); // propagates cancel downward

      currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t; // defensive measure

      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
    };

    finalRunEffect(effect, effectId, currCb);
  }
}

var RUN_SAGA_SIGNATURE = 'runSaga(options, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
function runSaga(_ref, saga) {
  var _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      sagaMonitor = _ref.sagaMonitor,
      effectMiddlewares = _ref.effectMiddlewares,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.B : _ref$onError;

  if (true) {
    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(saga, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func, NON_GENERATOR_ERR);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator$1 = saga.apply(void 0, args);

  if (true) {
    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(iterator$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.iterator, NON_GENERATOR_ERR);
  }

  var effectId = nextSagaId();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.t;
    sagaMonitor.rootSagaStarted({
      effectId: effectId,
      saga: saga,
      args: args
    });
  }

  if (true) {
    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.notUndef)(dispatch)) {
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(dispatch, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func, 'dispatch must be a function');
    }

    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.notUndef)(getState)) {
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(getState, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func, 'getState must be a function');
    }

    if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.notUndef)(effectMiddlewares)) {
      var MIDDLEWARE_TYPE_ERROR = 'effectMiddlewares must be an array of functions';
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(effectMiddlewares, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.array, MIDDLEWARE_TYPE_ERROR);
      effectMiddlewares.forEach(function (effectMiddleware) {
        return (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(effectMiddleware, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func, MIDDLEWARE_TYPE_ERROR);
      });
    }

    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(onError, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.func, 'onError passed to the redux-saga is not a function!');
  }

  var finalizeRunEffect;

  if (effectMiddlewares) {
    var middleware = redux__WEBPACK_IMPORTED_MODULE_7__.compose.apply(void 0, effectMiddlewares);

    finalizeRunEffect = function finalizeRunEffect(runEffect) {
      return function (effect, effectId, currCb) {
        var plainRunEffect = function plainRunEffect(eff) {
          return runEffect(eff, effectId, currCb);
        };

        return middleware(plainRunEffect)(effect);
      };
    };
  } else {
    finalizeRunEffect = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.E;
  }

  var env = {
    channel: channel,
    dispatch: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.D)(dispatch),
    getState: getState,
    sagaMonitor: sagaMonitor,
    onError: onError,
    finalizeRunEffect: finalizeRunEffect
  };
  return immediately(function () {
    var task = proc(env, iterator$1, context, effectId, (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.j)(saga),
    /* isRoot */
    true, undefined);

    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }

    return task;
  });
}

function sagaMiddlewareFactory(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      sagaMonitor = _ref.sagaMonitor,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["context", "channel", "sagaMonitor"]);

  var boundRunSaga;

  if (true) {
    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(channel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.channel, 'options.channel passed to the Saga middleware is not a channel');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
    boundRunSaga = runSaga.bind(null, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, options, {
      context: context,
      channel: channel,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor
    }));
    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }

        var result = next(action); // hit reducers

        channel.put(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    if ( true && !boundRunSaga) {
      throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
    }

    return boundRunSaga.apply(void 0, arguments);
  };

  sagaMiddleware.setContext = function (props) {
    if (true) {
      (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.c)(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__.object, (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.w)('sagaMiddleware', props));
    }

    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__.p)(context, props);
  };

  return sagaMiddleware;
}

/* harmony default export */ __webpack_exports__["default"] = (sagaMiddlewareFactory);



/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionChannel": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.O; },
/* harmony export */   "all": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__._; },
/* harmony export */   "apply": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.$; },
/* harmony export */   "call": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.N; },
/* harmony export */   "cancel": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.M; },
/* harmony export */   "cancelled": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.a4; },
/* harmony export */   "cps": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.a0; },
/* harmony export */   "delay": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.U; },
/* harmony export */   "effectTypes": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.W; },
/* harmony export */   "flush": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.a5; },
/* harmony export */   "fork": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L; },
/* harmony export */   "getContext": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.a6; },
/* harmony export */   "join": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.a2; },
/* harmony export */   "put": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.Y; },
/* harmony export */   "putResolve": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.Z; },
/* harmony export */   "race": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.V; },
/* harmony export */   "select": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.a3; },
/* harmony export */   "setContext": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.a7; },
/* harmony export */   "spawn": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.a1; },
/* harmony export */   "take": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.K; },
/* harmony export */   "takeMaybe": function() { return /* reexport safe */ _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.X; },
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "retry": function() { return /* binding */ retry$1; },
/* harmony export */   "takeEvery": function() { return /* binding */ takeEvery$1; },
/* harmony export */   "takeLatest": function() { return /* binding */ takeLatest$1; },
/* harmony export */   "takeLeading": function() { return /* binding */ takeLeading$1; },
/* harmony export */   "throttle": function() { return /* binding */ throttle$1; }
/* harmony export */ });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./io-6de156f3.js */ "./node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");







var done = function done(value) {
  return {
    done: true,
    value: value
  };
};

var qEnd = {};
function safeName(patternOrChannel) {
  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.channel)(patternOrChannel)) {
    return 'channel';
  }

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.stringableFunc)(patternOrChannel)) {
    return String(patternOrChannel);
  }

  if ((0,_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.func)(patternOrChannel)) {
    return patternOrChannel.name;
  }

  return String(patternOrChannel);
}
function fsmIterator(fsm, startState, name) {
  var stateUpdater,
      errorState,
      effect,
      nextState = startState;

  function next(arg, error) {
    if (nextState === qEnd) {
      return done(arg);
    }

    if (error && !errorState) {
      nextState = qEnd;
      throw error;
    } else {
      stateUpdater && stateUpdater(arg);
      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
      nextState = currentState.nextState;
      effect = currentState.effect;
      stateUpdater = currentState.stateUpdater;
      errorState = currentState.errorState;
      return nextState === qEnd ? done(arg) : effect;
    }
  }

  return (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.q)(next, function (error) {
    return next(null, error);
  }, name);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.K)(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L.apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yFork(action)
      };
    }
  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.K)(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L.apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.M)(task)
    };
  };

  var task, action;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return task ? {
        nextState: 'q3',
        effect: yCancel(task)
      } : {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    },
    q3: function q3() {
      return {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    }
  }, 'q1', "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLeading(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.K)(patternOrChannel)
  };

  var yCall = function yCall(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.N.apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action;

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yCall(action)
      };
    }
  }, 'q1', "takeLeading(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, channel;
  var yActionChannel = {
    done: false,
    value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.O)(pattern, (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.Q)(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.K)(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L.apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.U)(delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yActionChannel,
        stateUpdater: setChannel
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yTake(),
        stateUpdater: setAction
      };
    },
    q3: function q3() {
      return {
        nextState: 'q4',
        effect: yFork(action)
      };
    },
    q4: function q4() {
      return {
        nextState: 'q2',
        effect: yDelay
      };
    }
  }, 'q1', "throttle(" + safeName(pattern) + ", " + worker.name + ")");
}

function retry(maxTries, delayLength, fn) {
  var counter = maxTries;

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var yCall = {
    done: false,
    value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.N.apply(void 0, [fn].concat(args))
  };
  var yDelay = {
    done: false,
    value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.U)(delayLength)
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yCall,
        errorState: 'q10'
      };
    },
    q2: function q2() {
      return {
        nextState: qEnd
      };
    },
    q10: function q10(error) {
      counter -= 1;

      if (counter <= 0) {
        throw error;
      }

      return {
        nextState: 'q1',
        effect: yDelay
      };
    }
  }, 'q1', "retry(" + fn.name + ")");
}

function debounceHelper(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, raceOutput;
  var yTake = {
    done: false,
    value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.K)(patternOrChannel)
  };
  var yRace = {
    done: false,
    value: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.V)({
      action: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.K)(patternOrChannel),
      debounce: (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.U)(delayLength)
    })
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L.apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yNoop = function yNoop(value) {
    return {
      done: false,
      value: value
    };
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setRaceOutput = function setRaceOutput(ro) {
    return raceOutput = ro;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yRace,
        stateUpdater: setRaceOutput
      };
    },
    q3: function q3() {
      return raceOutput.debounce ? {
        nextState: 'q1',
        effect: yFork(action)
      } : {
        nextState: 'q2',
        effect: yNoop(raceOutput.action),
        stateUpdater: setAction
      };
    }
  }, 'q1', "debounce(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

var validateTakeEffect = function validateTakeEffect(fn, patternOrChannel, worker) {
  (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.c)(patternOrChannel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, fn.name + " requires a pattern or channel");
  (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.c)(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, fn.name + " requires a saga parameter");
};

function takeEvery$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeEvery$1, patternOrChannel, worker);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L.apply(void 0, [takeEvery, patternOrChannel, worker].concat(args));
}
function takeLatest$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLatest$1, patternOrChannel, worker);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L.apply(void 0, [takeLatest, patternOrChannel, worker].concat(args));
}
function takeLeading$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLeading$1, patternOrChannel, worker);
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L.apply(void 0, [takeLeading, patternOrChannel, worker].concat(args));
}
function throttle$1(ms, pattern, worker) {
  if (true) {
    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.c)(pattern, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, 'throttle requires a pattern');
    (0,_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.c)(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__.notUndef, 'throttle requires a saga parameter');
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L.apply(void 0, [throttle, ms, pattern, worker].concat(args));
}
function retry$1(maxTries, delayLength, worker) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.N.apply(void 0, [retry, maxTries, delayLength, worker].concat(args));
}
function debounce(delayLength, pattern, worker) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__.L.apply(void 0, [debounceHelper, delayLength, pattern, worker].concat(args));
}




/***/ }),

/***/ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayOfDeferred": function() { return /* binding */ arrayOfDeferred; }
/* harmony export */ });
function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (deferred);



/***/ }),

/***/ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }

  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, ms, val);
  });

  promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.CANCEL] = function () {
    clearTimeout(timeoutId);
  };

  return promise;
}

/* harmony default export */ __webpack_exports__["default"] = (delayP);


/***/ }),

/***/ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "array": function() { return /* binding */ array; },
/* harmony export */   "buffer": function() { return /* binding */ buffer; },
/* harmony export */   "channel": function() { return /* binding */ channel; },
/* harmony export */   "effect": function() { return /* binding */ effect; },
/* harmony export */   "func": function() { return /* binding */ func; },
/* harmony export */   "iterable": function() { return /* binding */ iterable; },
/* harmony export */   "iterator": function() { return /* binding */ iterator; },
/* harmony export */   "multicast": function() { return /* binding */ multicast; },
/* harmony export */   "notUndef": function() { return /* binding */ notUndef; },
/* harmony export */   "number": function() { return /* binding */ number; },
/* harmony export */   "object": function() { return /* binding */ object; },
/* harmony export */   "observable": function() { return /* binding */ observable; },
/* harmony export */   "pattern": function() { return /* binding */ pattern; },
/* harmony export */   "promise": function() { return /* binding */ promise; },
/* harmony export */   "sagaAction": function() { return /* binding */ sagaAction; },
/* harmony export */   "string": function() { return /* binding */ string; },
/* harmony export */   "stringableFunc": function() { return /* binding */ stringableFunc; },
/* harmony export */   "symbol": function() { return /* binding */ symbol; },
/* harmony export */   "task": function() { return /* binding */ task; },
/* harmony export */   "undef": function() { return /* binding */ undef; }
/* harmony export */ });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var number = function number(n) {
  return typeof n === 'number';
};
var string = function string(s) {
  return typeof s === 'string';
};
var array = Array.isArray;
var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};
var promise = function promise(p) {
  return p && func(p.then);
};
var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};
var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};
var task = function task(t) {
  return t && t[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.TASK];
};
var sagaAction = function sagaAction(a) {
  return Boolean(a && a[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.SAGA_ACTION]);
};
var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};
var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern));
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};
var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast(ch) {
  return channel(ch) && ch[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.MULTICAST];
};
var effect = function effect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__.IO];
};




/***/ }),

/***/ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CANCEL": function() { return /* binding */ CANCEL; },
/* harmony export */   "CHANNEL_END_TYPE": function() { return /* binding */ CHANNEL_END_TYPE; },
/* harmony export */   "IO": function() { return /* binding */ IO; },
/* harmony export */   "MATCH": function() { return /* binding */ MATCH; },
/* harmony export */   "MULTICAST": function() { return /* binding */ MULTICAST; },
/* harmony export */   "SAGA_ACTION": function() { return /* binding */ SAGA_ACTION; },
/* harmony export */   "SAGA_LOCATION": function() { return /* binding */ SAGA_LOCATION; },
/* harmony export */   "SELF_CANCELLATION": function() { return /* binding */ SELF_CANCELLATION; },
/* harmony export */   "TASK": function() { return /* binding */ TASK; },
/* harmony export */   "TASK_CANCEL": function() { return /* binding */ TASK_CANCEL; },
/* harmony export */   "TERMINATE": function() { return /* binding */ TERMINATE; }
/* harmony export */ });
var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};

var CANCEL =
/*#__PURE__*/
createSymbol('CANCEL_PROMISE');
var CHANNEL_END_TYPE =
/*#__PURE__*/
createSymbol('CHANNEL_END');
var IO =
/*#__PURE__*/
createSymbol('IO');
var MATCH =
/*#__PURE__*/
createSymbol('MATCH');
var MULTICAST =
/*#__PURE__*/
createSymbol('MULTICAST');
var SAGA_ACTION =
/*#__PURE__*/
createSymbol('SAGA_ACTION');
var SELF_CANCELLATION =
/*#__PURE__*/
createSymbol('SELF_CANCELLATION');
var TASK =
/*#__PURE__*/
createSymbol('TASK');
var TASK_CANCEL =
/*#__PURE__*/
createSymbol('TASK_CANCEL');
var TERMINATE =
/*#__PURE__*/
createSymbol('TERMINATE');
var SAGA_LOCATION =
/*#__PURE__*/
createSymbol('LOCATION');




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
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
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
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

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./src/pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./src/components/layout/layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/layout/layout.module.scss ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./layout.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/layout/layout.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./layout.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/layout/layout.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./layout.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/layout/layout.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/layout/layout.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/layout/layout.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".layout_main-layout__x8smH {\n  display: flex;\n  flex-direction: column;\n  background-color: #555555;\n  color: #a9a9a9;\n  font-family: Arial, Helvetica, sans-serif;\n}", "",{"version":3,"sources":["webpack://layout.module.scss"],"names":[],"mappings":"AAKA;EACE,aAAA;EACA,sBAAA;EACA,yBALK;EAML,cATM;EAUN,yCAAA;AAJF","sourcesContent":["$white: #a9a9a9;\n$black: #232323;\n$pink: #f65261;\n$grey: #555555;\n\n.main-layout {\n  display: flex;\n  flex-direction: column;\n  background-color: $grey;\n  color: $white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main-layout": "layout_main-layout__x8smH"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
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
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
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
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
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
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
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
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
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
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
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

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
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
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        if (has(propValue, key)) {
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
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
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
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
    switch (typeof propValue) {
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

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
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
    var propType = typeof propValue;
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
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

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

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactReduxContext": function() { return /* binding */ ReactReduxContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");






function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__.default(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return store.getState();
  }, [store]);
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      subscribe: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
      dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
      getState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
    }),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ connectAdvanced; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__.ReactReduxContext : _ref2$context,
      connectOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["reactReduxForwardedRef"]);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__.default(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var lastWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var renderIsScheduled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default().memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConnect": function() { return /* binding */ createConnect; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__.default : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__.default : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__.default : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__.default : _ref3$areMergedPropsE,
        extraOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whenMapDispatchToPropsIsFunction": function() { return /* binding */ whenMapDispatchToPropsIsFunction; },
/* harmony export */   "whenMapDispatchToPropsIsMissing": function() { return /* binding */ whenMapDispatchToPropsIsMissing; },
/* harmony export */   "whenMapDispatchToPropsIsObject": function() { return /* binding */ whenMapDispatchToPropsIsObject; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function (dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whenMapStateToPropsIsFunction": function() { return /* binding */ whenMapStateToPropsIsFunction; },
/* harmony export */   "whenMapStateToPropsIsMissing": function() { return /* binding */ whenMapStateToPropsIsMissing; }
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMergeProps": function() { return /* binding */ defaultMergeProps; },
/* harmony export */   "wrapMergePropsFunc": function() { return /* binding */ wrapMergePropsFunc; },
/* harmony export */   "whenMergePropsIsFunction": function() { return /* binding */ whenMergePropsIsFunction; },
/* harmony export */   "whenMergePropsIsOmitted": function() { return /* binding */ whenMergePropsIsOmitted; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "impureFinalPropsSelectorFactory": function() { return /* binding */ impureFinalPropsSelectorFactory; },
/* harmony export */   "pureFinalPropsSelectorFactory": function() { return /* binding */ pureFinalPropsSelectorFactory; },
/* harmony export */   "default": function() { return /* binding */ finalPropsSelectorFactory; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ verifySubselectors; }
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__.default)("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapMapToPropsConstant": function() { return /* binding */ wrapMapToPropsConstant; },
/* harmony export */   "getDependsOnOwnProps": function() { return /* binding */ getDependsOnOwnProps; },
/* harmony export */   "wrapMapToPropsFunc": function() { return /* binding */ wrapMapToPropsFunc; }
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__.default)(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDispatchHook": function() { return /* binding */ createDispatchHook; },
/* harmony export */   "useDispatch": function() { return /* binding */ useDispatch; }
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext;
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useReduxContext": function() { return /* binding */ useReduxContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelectorHook": function() { return /* binding */ createSelectorHook; },
/* harmony export */   "useSelector": function() { return /* binding */ useSelector; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.default(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestStoreState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelectedState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector(storeState); // ensure latest selected state is reused so that a custom equality function can result in identical references

      if (latestSelectedState.current === undefined || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    function checkForUpdates() {
      try {
        var _newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = _newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelector");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStoreHook": function() { return /* binding */ createStoreHook; },
/* harmony export */   "useStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": function() { return /* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "connectAdvanced": function() { return /* reexport safe */ _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "ReactReduxContext": function() { return /* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext; },
/* harmony export */   "connect": function() { return /* reexport safe */ _connect_connect__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "batch": function() { return /* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__.unstable_batchedUpdates; },
/* harmony export */   "useDispatch": function() { return /* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.useDispatch; },
/* harmony export */   "createDispatchHook": function() { return /* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.createDispatchHook; },
/* harmony export */   "useSelector": function() { return /* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector; },
/* harmony export */   "createSelectorHook": function() { return /* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.createSelectorHook; },
/* harmony export */   "useStore": function() { return /* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.useStore; },
/* harmony export */   "createStoreHook": function() { return /* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.createStoreHook; },
/* harmony export */   "shallowEqual": function() { return /* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__.default; }
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");










(0,_utils_batch__WEBPACK_IMPORTED_MODULE_7__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__.unstable_batchedUpdates);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Subscription; }
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setBatch": function() { return /* binding */ setBatch; },
/* harmony export */   "getBatch": function() { return /* binding */ getBatch; }
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isPlainObject; }
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": function() { return /* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ shallowEqual; }
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": function() { return /* binding */ useIsomorphicLayoutEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ verifyPlainObject; }
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__.default)(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__.default)(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ warning; }
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core */ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/* harmony default export */ __webpack_exports__["default"] = (_redux_saga_core__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": function() { return /* binding */ ActionTypes; },
/* harmony export */   "applyMiddleware": function() { return /* binding */ applyMiddleware; },
/* harmony export */   "bindActionCreators": function() { return /* binding */ bindActionCreators; },
/* harmony export */   "combineReducers": function() { return /* binding */ combineReducers; },
/* harmony export */   "compose": function() { return /* binding */ compose; },
/* harmony export */   "createStore": function() { return /* binding */ createStore; }
/* harmony export */ });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__.default] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__.default] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof __webpack_require__.g !== 'undefined') {
  root = __webpack_require__.g;
} else if (true) {
  root = module;
} else {}

var result = (0,_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__.default)(root);
/* harmony default export */ __webpack_exports__["default"] = (result);


/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ symbolObservablePonyfill; }
/* harmony export */ });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL01vdmllc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hY3Rpb25zL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2FjdGlvbnMvbW92aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL21vdmllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NhZ2FzLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9jb3JlL2Rpc3QvaW8tNmRlMTU2ZjMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9jb3JlL2Rpc3QvcmVkdXgtc2FnYS1jb3JlLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2NvcmUvZGlzdC9yZWR1eC1zYWdhLWVmZmVjdHMuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvZGVmZXJyZWQvZGlzdC9yZWR1eC1zYWdhLWRlZmVycmVkLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2RlbGF5LXAvZGlzdC9yZWR1eC1zYWdhLWRlbGF5LXAuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvaXMvZGlzdC9yZWR1eC1zYWdhLWlzLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL3N5bWJvbHMvZGlzdC9yZWR1eC1zYWdhLXN5bWJvbHMuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLnNjc3M/Yjk2NyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvY29ubmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWFwRGlzcGF0Y2hUb1Byb3BzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21lcmdlUHJvcHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvdmVyaWZ5U3Vic2VsZWN0b3JzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZURpc3BhdGNoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlUmVkdXhDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VTdG9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvYmF0Y2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvcmVhY3RCYXRjaGVkVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2Rpc3QvcmVkdXgtc2FnYS1jb3JlLW5wbS1wcm94eS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2Rpc3QvcmVkdXgtc2FnYS1lZmZlY3RzLW5wbS1wcm94eS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvcG9ueWZpbGwuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsIk1vdmllc1NlcnZpY2UiLCJmaWx0ZXIiLCJzb3J0IiwicXVlcnkiLCJmZXRjaCIsImJ1aWxkVXJsIiwidGhlbiIsInJlcyIsImpzb24iLCJtb3ZpZUlkIiwiYXBpVVJMIiwibW92aWUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInVybCIsImdldE1vdmllIiwidHlwZSIsIkdFVF9NT1ZJRV9CWV9JRCIsImdldE1vdmllU3VjY2VzcyIsIkdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTIiwiZ2V0TW92aWVGYWlsIiwibWVzc2FnZSIsIkdFVF9NT1ZJRV9CWV9JRF9GQUlMIiwibG9hZE1vdmllcyIsIkxPQURfTU9WSUVTIiwibG9hZE1vdmllc1N1Y2Nlc3MiLCJtb3ZpZXMiLCJMT0FEX01PVklFU19TVUNDQ0VTUyIsImxvYWRNb3ZpZXNGYWlsIiwiTE9BRF9NT1ZJRVNfRkFJTCIsImFkZE1vdmllIiwiQUREX01PVklFIiwiYWRkTW92aWVTdWNjZXNzIiwiQUREX01PVklFX1NVQ0NFU1MiLCJhZGRNb3ZpZUZhaWwiLCJBRERfTU9WSUVfRkFJTCIsInVwZGF0ZU1vdmllIiwiVVBEQVRFX01PVklFIiwidXBkYXRlTW92aWVTdWNjZXNzIiwiVVBEQVRFX01PVklFX1NVQ0NFU1MiLCJ1cGRhdGVNb3ZpZUZhaWwiLCJVUERBVEVfTU9WSUVfRkFJTCIsImRlbGV0ZU1vdmllIiwiREVMRVRFX01PVklFIiwiZGVsZXRlTW92aWVTdWNjZXNzIiwiREVMRVRFX01PVklFX1NVQ0NFU1MiLCJkZWxldGVNb3ZpZUZhaWwiLCJERUxFVEVfTU9WSUVfRkFJTCIsImhlYWRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm1vdmllc1JlZHVjZXIiLCJtYXAiLCJnZXRBbGxNb3ZpZXMiLCJtb3ZpZXNTYWdhcyIsImNhbGwiLCJwdXQiLCJkYXRhIiwiYWRkZWRNb3ZpZSIsInRha2VFdmVyeSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFDdEM7QUFDZixpQ0FBaUMsNkRBQWdCO0FBQ2pELEM7Ozs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnVEO0FBQ0o7QUFDc0I7QUFDbEI7QUFDeEM7QUFDZixTQUFTLDhEQUFpQixTQUFTLDREQUFlLFNBQVMsdUVBQTBCLFNBQVMsOERBQWlCO0FBQy9HLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUQ7QUFDdEM7QUFDZjtBQUNBLG9DQUFvQyw2REFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNG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QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QXNFLGFBQWE7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQSw0RUFBNEUsYUFBYTtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSxLQUFxQztBQUN6QztBQUNBOztBQUVnSTs7Ozs7Ozs7Ozs7Ozs7O0FDdHBCaEk7QUFDcUM7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDLGlCQUFpQixxQkFBTTtBQUN4QixTQUFTLHFCQUFNO0FBQ2YsQ0FBQyxVQUFVLElBQTZCO0FBQ3hDO0FBQ0EsQ0FBQyxNQUFNLEVBRU47O0FBRUQsYUFBYSxxREFBUTtBQUNyQiwrREFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQlA7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtYWluLWxheW91dCddfT57Y2hpbGRyZW59PC9kaXY+XG4pO1xuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJztcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJjbGFzcyBNb3ZpZXNTZXJ2aWNlIHtcbiAgYXBpVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9tb3ZpZXMvJztcblxuICBmZXRjaE1vdmllcyA9IChmaWx0ZXIsIHNvcnQsIHF1ZXJ5KSA9PiBmZXRjaCh0aGlzLmJ1aWxkVXJsKGZpbHRlciwgc29ydCwgcXVlcnkpKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGdldE1vdmllQnlJZCA9IChtb3ZpZUlkKSA9PiBmZXRjaCh0aGlzLmFwaVVSTCArIG1vdmllSWQpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgYWRkTW92aWUgPSAobW92aWUpID0+XG4gICAgZmV0Y2godGhpcy5hcGlVUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vdmllKSxcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIHVwZGF0ZU1vdmllID0gKG1vdmllKSA9PlxuICAgIGZldGNoKHRoaXMuYXBpVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vdmllKSxcbiAgICB9KTtcblxuICBkZWxldGVNb3ZpZSA9IChpZCkgPT4gZmV0Y2godGhpcy5hcGlVUkwgKyBpZCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuXG4gIGJ1aWxkVXJsID0gKGZpbHRlciwgc29ydCwgcXVlcnkpID0+IHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5hcGlVUkx9P3NvcnRCeT0ke3NvcnR9JnNvcnRPcmRlcj1kZXNjYDtcbiAgICBpZiAoZmlsdGVyICYmIGZpbHRlciAhPT0gJ0FsbCcpIHtcbiAgICAgIHVybCArPSBgJmZpbHRlcj0ke2ZpbHRlcn1gO1xuICAgIH1cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHVybCArPSBgJnNlYXJjaD0ke3F1ZXJ5fSZzZWFyY2hCeT10aXRsZWA7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNb3ZpZXNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQge1xuICBHRVRfTU9WSUVfQllfSUQsXG4gIEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTLFxuICBHRVRfTU9WSUVfQllfSURfRkFJTCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZSA9IChtb3ZpZUlkKSA9PiAoe1xuICB0eXBlOiBHRVRfTU9WSUVfQllfSUQsXG4gIG1vdmllSWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllU3VjY2VzcyA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogR0VUX01PVklFX0JZX0lEX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcbiIsImltcG9ydCB7XG4gIExPQURfTU9WSUVTLFxuICBBRERfTU9WSUUsXG4gIFVQREFURV9NT1ZJRSxcbiAgREVMRVRFX01PVklFLFxuICBMT0FEX01PVklFU19TVUNDQ0VTUyxcbiAgTE9BRF9NT1ZJRVNfRkFJTCxcbiAgQUREX01PVklFX1NVQ0NFU1MsXG4gIEFERF9NT1ZJRV9GQUlMLFxuICBVUERBVEVfTU9WSUVfU1VDQ0VTUyxcbiAgVVBEQVRFX01PVklFX0ZBSUwsXG4gIERFTEVURV9NT1ZJRV9TVUNDRVNTLFxuICBERUxFVEVfTU9WSUVfRkFJTCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkTW92aWVzID0gKGZpbHRlciwgc29ydCwgcXVlcnkpID0+ICh7XG4gIHR5cGU6IExPQURfTU9WSUVTLFxuICBmaWx0ZXIsXG4gIHNvcnQsXG4gIHF1ZXJ5LFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkTW92aWVzU3VjY2VzcyA9IChtb3ZpZXMpID0+ICh7XG4gIHR5cGU6IExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBtb3ZpZXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvYWRNb3ZpZXNGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IExPQURfTU9WSUVTX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1vdmllID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBBRERfTU9WSUUsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRNb3ZpZVN1Y2Nlc3MgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IEFERF9NT1ZJRV9TVUNDRVNTLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkTW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IEFERF9NT1ZJRV9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZSA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX01PVklFLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWVTdWNjZXNzID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfTU9WSUVfU1VDQ0VTUyxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfTU9WSUVfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWUgPSAoaWQpID0+ICh7XG4gIHR5cGU6IERFTEVURV9NT1ZJRSxcbiAgaWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllU3VjY2VzcyA9IChpZCkgPT4gKHtcbiAgdHlwZTogREVMRVRFX01PVklFX1NVQ0NFU1MsXG4gIGlkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogREVMRVRFX01PVklFX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcbiIsImV4cG9ydCBjb25zdCBMT0FEX01PVklFUyA9ICdMT0FEX01PVklFUyc7XG5leHBvcnQgY29uc3QgTE9BRF9NT1ZJRVNfU1VDQ0NFU1MgPSAnTE9BRF9NT1ZJRVNfU1VDQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfTU9WSUVTX0ZBSUwgPSAnTE9BRF9NT1ZJRVNfRkFJTCc7XG5leHBvcnQgY29uc3QgQUREX01PVklFID0gJ0FERF9NT1ZJRSc7XG5leHBvcnQgY29uc3QgQUREX01PVklFX1NVQ0NFU1MgPSAnQUREX01PVklFX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRV9GQUlMID0gJ0FERF9NT1ZJRV9GQUlMJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUUgPSAnVVBEQVRFX01PVklFJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUVfU1VDQ0VTUyA9ICdVUERBVEVfTU9WSUVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFX0ZBSUwgPSAnVVBEQVRFX01PVklFX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRSA9ICdERUxFVEVfTU9WSUUnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRV9TVUNDRVNTID0gJ0RFTEVURV9NT1ZJRV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9WSUVfRkFJTCA9ICdERUxFVEVfTU9WSUVfRkFJTCc7XG5leHBvcnQgY29uc3QgR0VUX01PVklFX0JZX0lEID0gJ0dFVF9NT1ZJRV9CWV9JRCc7XG5leHBvcnQgY29uc3QgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MgPSAnR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9CWV9JRF9GQUlMID0gJ0dFVF9NT1ZJRV9CWV9JRF9GQUlMJztcbiIsImltcG9ydCB7XG4gIEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTLFxuICBHRVRfTU9WSUVfQllfSURfRkFJTCxcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGhlYWRlclJlZHVjZXIgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLm1vdmllO1xuICAgIGNhc2UgR0VUX01PVklFX0JZX0lEX0ZBSUw6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyUmVkdWNlcjtcbiIsImltcG9ydCB7XG4gIExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBBRERfTU9WSUVfU1VDQ0VTUyxcbiAgVVBEQVRFX01PVklFX0ZBSUwsXG4gIERFTEVURV9NT1ZJRV9GQUlMLFxuICBMT0FEX01PVklFU19GQUlMLFxuICBBRERfTU9WSUVfRkFJTCxcbiAgVVBEQVRFX01PVklFX1NVQ0NFU1MsXG4gIERFTEVURV9NT1ZJRV9TVUNDRVNTLFxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgbW92aWVzUmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRF9NT1ZJRVNfU1VDQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLm1vdmllcztcbiAgICBjYXNlIEFERF9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLm1vdmllXTtcbiAgICBjYXNlIFVQREFURV9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgobW92aWUpID0+IHtcbiAgICAgICAgaWYgKG1vdmllLmlkID09PSBhY3Rpb24ubW92aWUuaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYWN0aW9uLm1vdmllLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmllO1xuICAgICAgfSk7XG4gICAgY2FzZSBERUxFVEVfTU9WSUVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUuaWQgIT09IGFjdGlvbi5pZCldO1xuICAgIGNhc2UgTE9BRF9NT1ZJRVNfRkFJTDpcbiAgICBjYXNlIEFERF9NT1ZJRV9GQUlMOlxuICAgIGNhc2UgVVBEQVRFX01PVklFX0ZBSUw6XG4gICAgY2FzZSBERUxFVEVfTU9WSUVfRkFJTDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3ZpZXNSZWR1Y2VyO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCBNb3ZpZXNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL01vdmllc1NlcnZpY2UnO1xuXG5pbXBvcnQgeyBnZXRNb3ZpZVN1Y2Nlc3MsIGdldE1vdmllRmFpbCB9IGZyb20gJy4vYWN0aW9ucy9oZWFkZXInO1xuaW1wb3J0IHtcbiAgbG9hZE1vdmllc1N1Y2Nlc3MsXG4gIGxvYWRNb3ZpZXNGYWlsLFxuICBhZGRNb3ZpZVN1Y2Nlc3MsXG4gIGFkZE1vdmllRmFpbCxcbiAgdXBkYXRlTW92aWVTdWNjZXNzLFxuICB1cGRhdGVNb3ZpZUZhaWwsXG4gIGRlbGV0ZU1vdmllU3VjY2VzcyxcbiAgZGVsZXRlTW92aWVGYWlsLFxufSBmcm9tICcuL2FjdGlvbnMvbW92aWVzJztcbmltcG9ydCB7XG4gIExPQURfTU9WSUVTLFxuICBBRERfTU9WSUUsXG4gIERFTEVURV9NT1ZJRSxcbiAgVVBEQVRFX01PVklFLFxuICBHRVRfTU9WSUVfQllfSUQsXG59IGZyb20gJy4vYWN0aW9ucy90eXBlcyc7XG5cbmZ1bmN0aW9uKiBnZXRBbGxNb3ZpZXMoeyBmaWx0ZXIsIHNvcnQsIHF1ZXJ5IH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb3ZpZXMgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuZmV0Y2hNb3ZpZXMsIGZpbHRlciwgc29ydCwgcXVlcnkpO1xuICAgIHlpZWxkIHB1dChsb2FkTW92aWVzU3VjY2Vzcyhtb3ZpZXMuZGF0YSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGxvYWRNb3ZpZXNGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBnZXRNb3ZpZSh7IG1vdmllSWQgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vdmllID0geWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmdldE1vdmllQnlJZCwgbW92aWVJZCk7XG4gICAgeWllbGQgcHV0KGdldE1vdmllU3VjY2Vzcyhtb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGdldE1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuZnVuY3Rpb24qIGFkZE1vdmllKHsgbW92aWUgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IGFkZGVkTW92aWUgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuYWRkTW92aWUsIG1vdmllKTtcbiAgICB5aWVsZCBwdXQoYWRkTW92aWVTdWNjZXNzKGFkZGVkTW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChhZGRNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHVwZGF0ZU1vdmllKHsgbW92aWUgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS51cGRhdGVNb3ZpZSwgbW92aWUpO1xuICAgIHlpZWxkIHB1dCh1cGRhdGVNb3ZpZVN1Y2Nlc3MobW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dCh1cGRhdGVNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGRlbGV0ZU1vdmllKHsgaWQgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5kZWxldGVNb3ZpZSwgaWQpO1xuICAgIHlpZWxkIHB1dChkZWxldGVNb3ZpZVN1Y2Nlc3MoaWQpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChkZWxldGVNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIG1vdmllc1NhZ2FzKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9NT1ZJRVMsIGdldEFsbE1vdmllcyk7XG4gIHlpZWxkIHRha2VFdmVyeShBRERfTU9WSUUsIGFkZE1vdmllKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KFVQREFURV9NT1ZJRSwgdXBkYXRlTW92aWUpO1xuICB5aWVsZCB0YWtlRXZlcnkoREVMRVRFX01PVklFLCBkZWxldGVNb3ZpZSk7XG4gIHlpZWxkIHRha2VFdmVyeShHRVRfTU9WSUVfQllfSUQsIGdldE1vdmllKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW92aWVzU2FnYXM7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5cbmltcG9ydCBoZWFkZXJSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvaGVhZGVyJztcbmltcG9ydCBtb3ZpZXNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvbW92aWVzJztcbmltcG9ydCBtb3ZpZXNTYWdhcyBmcm9tICcuL3NhZ2FzJztcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgY29tYmluZVJlZHVjZXJzKHsgbW92aWVzOiBtb3ZpZXNSZWR1Y2VyLCBtb3ZpZTogaGVhZGVyUmVkdWNlciB9KSxcbiAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKVxuKTtcbnNhZ2FNaWRkbGV3YXJlLnJ1bihtb3ZpZXNTYWdhcyk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IHsgVEFTS19DQU5DRUwsIFRFUk1JTkFURSwgU0FHQV9MT0NBVElPTiwgU0FHQV9BQ1RJT04sIElPLCBTRUxGX0NBTkNFTExBVElPTiB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHsgYXJyYXksIG5vdFVuZGVmLCBwYXR0ZXJuLCBtdWx0aWNhc3QsIGNoYW5uZWwsIHVuZGVmLCBlZmZlY3QsIHRhc2ssIGZ1bmMsIGJ1ZmZlciwgc3RyaW5nLCBvYmplY3QgfSBmcm9tICdAcmVkdXgtc2FnYS9pcyc7XG5pbXBvcnQgZGVsYXlQIGZyb20gJ0ByZWR1eC1zYWdhL2RlbGF5LXAnO1xuXG52YXIga29uc3QgPSBmdW5jdGlvbiBrb25zdCh2KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xudmFyIGtUcnVlID1cbi8qI19fUFVSRV9fKi9cbmtvbnN0KHRydWUpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xuICBub29wID1cbiAgLyojX19QVVJFX18qL1xuICBuZXcgUHJveHkobm9vcCwge1xuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoJ1RoZXJlIHdhcyBhbiBhdHRlbXB0IHRvIGFzc2lnbiBhIHByb3BlcnR5IHRvIGludGVybmFsIGBub29wYCBmdW5jdGlvbi4nKTtcbiAgICB9XG4gIH0pO1xufVxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkodikge1xuICByZXR1cm4gdjtcbn07XG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gaGFzU3ltYm9sICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgOiAnQEBhc3luY0l0ZXJhdG9yJztcbmZ1bmN0aW9uIGNoZWNrKHZhbHVlLCBwcmVkaWNhdGUsIGVycm9yKSB7XG4gIGlmICghcHJlZGljYXRlKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cbn1cbnZhciBhc3NpZ25XaXRoU3ltYm9scyA9IGZ1bmN0aW9uIGFzc2lnbldpdGhTeW1ib2xzKHRhcmdldCwgc291cmNlKSB7XG4gIF9leHRlbmRzKHRhcmdldCwgc291cmNlKTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICB0YXJnZXRbc10gPSBzb3VyY2Vbc107XG4gICAgfSk7XG4gIH1cbn07XG52YXIgZmxhdE1hcCA9IGZ1bmN0aW9uIGZsYXRNYXAobWFwcGVyLCBhcnIpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIChfcmVmID0gW10pLmNvbmNhdC5hcHBseShfcmVmLCBhcnIubWFwKG1hcHBlcikpO1xufTtcbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuXG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuZnVuY3Rpb24gb25jZShmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgZm4oKTtcbiAgfTtcbn1cblxudmFyIGtUaHJvdyA9IGZ1bmN0aW9uIGtUaHJvdyhlcnIpIHtcbiAgdGhyb3cgZXJyO1xufTtcblxudmFyIGtSZXR1cm4gPSBmdW5jdGlvbiBrUmV0dXJuKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGRvbmU6IHRydWVcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIG1ha2VJdGVyYXRvcihuZXh0LCB0aHJvLCBuYW1lKSB7XG4gIGlmICh0aHJvID09PSB2b2lkIDApIHtcbiAgICB0aHJvID0ga1Rocm93O1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgIG5hbWUgPSAnaXRlcmF0b3InO1xuICB9XG5cbiAgdmFyIGl0ZXJhdG9yID0ge1xuICAgIG1ldGE6IHtcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9LFxuICAgIG5leHQ6IG5leHQsXG4gICAgdGhyb3c6IHRocm8sXG4gICAgcmV0dXJuOiBrUmV0dXJuLFxuICAgIGlzU2FnYUl0ZXJhdG9yOiB0cnVlXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IsIF9yZWYyKSB7XG4gIHZhciBzYWdhU3RhY2sgPSBfcmVmMi5zYWdhU3RhY2s7XG5cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlKi9cbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIGNvbnNvbGUuZXJyb3Ioc2FnYVN0YWNrKTtcbn1cbnZhciBpbnRlcm5hbEVyciA9IGZ1bmN0aW9uIGludGVybmFsRXJyKGVycikge1xuICByZXR1cm4gbmV3IEVycm9yKFwiXFxuICByZWR1eC1zYWdhOiBFcnJvciBjaGVja2luZyBob29rcyBkZXRlY3RlZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUuIFRoaXMgaXMgbGlrZWx5IGEgYnVnXFxuICBpbiByZWR1eC1zYWdhIGNvZGUgYW5kIG5vdCB5b3Vycy4gVGhhbmtzIGZvciByZXBvcnRpbmcgdGhpcyBpbiB0aGUgcHJvamVjdCdzIGdpdGh1YiByZXBvLlxcbiAgRXJyb3I6IFwiICsgZXJyICsgXCJcXG5cIik7XG59O1xudmFyIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nID0gZnVuY3Rpb24gY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcoY3R4LCBwcm9wcykge1xuICByZXR1cm4gKGN0eCA/IGN0eCArICcuJyA6ICcnKSArIFwic2V0Q29udGV4dChwcm9wcyk6IGFyZ3VtZW50IFwiICsgcHJvcHMgKyBcIiBpcyBub3QgYSBwbGFpbiBvYmplY3RcIjtcbn07XG52YXIgRlJPWkVOX0FDVElPTl9FUlJPUiA9IFwiWW91IGNhbid0IHB1dCAoYS5rLmEuIGRpc3BhdGNoIGZyb20gc2FnYSkgZnJvemVuIGFjdGlvbnMuXFxuV2UgaGF2ZSB0byBkZWZpbmUgYSBzcGVjaWFsIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5IG9uIHRob3NlIGFjdGlvbnMgZm9yIHNjaGVkdWxpbmcgcHVycG9zZXMuXFxuT3RoZXJ3aXNlIHlvdSB3b3VsZG4ndCBiZSBhYmxlIHRvIGNvbW11bmljYXRlIHByb3Blcmx5IGJldHdlZW4gc2FnYXMgJiBvdGhlciBzdWJzY3JpYmVycyAoYWN0aW9uIG9yZGVyaW5nIHdvdWxkIGJlY29tZSBmYXIgbGVzcyBwcmVkaWN0YWJsZSkuXFxuSWYgeW91IGFyZSB1c2luZyByZWR1eCBhbmQgeW91IGNhcmUgYWJvdXQgdGhpcyBiZWhhdmlvdXIgKGZyb3plbiBhY3Rpb25zKSxcXG50aGVuIHlvdSBtaWdodCB3YW50IHRvIHN3aXRjaCB0byBmcmVlemluZyBhY3Rpb25zIGluIGEgbWlkZGxld2FyZSByYXRoZXIgdGhhbiBpbiBhY3Rpb24gY3JlYXRvci5cXG5FeGFtcGxlIGltcGxlbWVudGF0aW9uOlxcblxcbmNvbnN0IGZyZWV6ZUFjdGlvbnMgPSBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiBuZXh0KE9iamVjdC5mcmVlemUoYWN0aW9uKSlcXG5cIjsgLy8gY3JlYXRlcyBlbXB0eSwgYnV0IG5vdC1ob2xleSBhcnJheVxuXG52YXIgY3JlYXRlRW1wdHlBcnJheSA9IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5QXJyYXkobikge1xuICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KG4pKTtcbn07XG52YXIgd3JhcFNhZ2FEaXNwYXRjaCA9IGZ1bmN0aW9uIHdyYXBTYWdhRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2soYWN0aW9uLCBmdW5jdGlvbiAoYWMpIHtcbiAgICAgICAgcmV0dXJuICFPYmplY3QuaXNGcm96ZW4oYWMpO1xuICAgICAgfSwgRlJPWkVOX0FDVElPTl9FUlJPUik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3BhdGNoKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY3Rpb24sIFNBR0FfQUNUSU9OLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgc2hvdWxkVGVybWluYXRlID0gZnVuY3Rpb24gc2hvdWxkVGVybWluYXRlKHJlcykge1xuICByZXR1cm4gcmVzID09PSBURVJNSU5BVEU7XG59O1xudmFyIHNob3VsZENhbmNlbCA9IGZ1bmN0aW9uIHNob3VsZENhbmNlbChyZXMpIHtcbiAgcmV0dXJuIHJlcyA9PT0gVEFTS19DQU5DRUw7XG59O1xudmFyIHNob3VsZENvbXBsZXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcGxldGUocmVzKSB7XG4gIHJldHVybiBzaG91bGRUZXJtaW5hdGUocmVzKSB8fCBzaG91bGRDYW5jZWwocmVzKTtcbn07XG5mdW5jdGlvbiBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzKHNoYXBlLCBwYXJlbnRDYWxsYmFjaykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNoYXBlKTtcbiAgdmFyIHRvdGFsQ291bnQgPSBrZXlzLmxlbmd0aDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHRvdGFsQ291bnQsIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYyA+IDA7XG4gICAgfSwgJ2NyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3M6IGdldCBhbiBlbXB0eSBhcnJheSBvciBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciBjb21wbGV0ZWRDb3VudCA9IDA7XG4gIHZhciBjb21wbGV0ZWQ7XG4gIHZhciByZXN1bHRzID0gYXJyYXkoc2hhcGUpID8gY3JlYXRlRW1wdHlBcnJheSh0b3RhbENvdW50KSA6IHt9O1xuICB2YXIgY2hpbGRDYWxsYmFja3MgPSB7fTtcblxuICBmdW5jdGlvbiBjaGVja0VuZCgpIHtcbiAgICBpZiAoY29tcGxldGVkQ291bnQgPT09IHRvdGFsQ291bnQpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBwYXJlbnRDYWxsYmFjayhyZXN1bHRzKTtcbiAgICB9XG4gIH1cblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaENiQXRLZXkgPSBmdW5jdGlvbiBjaENiQXRLZXkocmVzLCBpc0Vycikge1xuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VyciB8fCBzaG91bGRDb21wbGV0ZShyZXMpKSB7XG4gICAgICAgIHBhcmVudENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgICBwYXJlbnRDYWxsYmFjayhyZXMsIGlzRXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNba2V5XSA9IHJlcztcbiAgICAgICAgY29tcGxldGVkQ291bnQrKztcbiAgICAgICAgY2hlY2tFbmQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hDYkF0S2V5LmNhbmNlbCA9IG5vb3A7XG4gICAgY2hpbGRDYWxsYmFja3Nba2V5XSA9IGNoQ2JBdEtleTtcbiAgfSk7XG5cbiAgcGFyZW50Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY29tcGxldGVkKSB7XG4gICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ2FsbGJhY2tzW2tleV0uY2FuY2VsKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNoaWxkQ2FsbGJhY2tzO1xufVxuZnVuY3Rpb24gZ2V0TWV0YUluZm8oZm4pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmbi5uYW1lIHx8ICdhbm9ueW1vdXMnLFxuICAgIGxvY2F0aW9uOiBnZXRMb2NhdGlvbihmbilcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGluc3RydW1lbnRlZCkge1xuICByZXR1cm4gaW5zdHJ1bWVudGVkW1NBR0FfTE9DQVRJT05dO1xufVxuXG52YXIgQlVGRkVSX09WRVJGTE9XID0gXCJDaGFubmVsJ3MgQnVmZmVyIG92ZXJmbG93IVwiO1xudmFyIE9OX09WRVJGTE9XX1RIUk9XID0gMTtcbnZhciBPTl9PVkVSRkxPV19EUk9QID0gMjtcbnZhciBPTl9PVkVSRkxPV19TTElERSA9IDM7XG52YXIgT05fT1ZFUkZMT1dfRVhQQU5EID0gNDtcbnZhciB6ZXJvQnVmZmVyID0ge1xuICBpc0VtcHR5OiBrVHJ1ZSxcbiAgcHV0OiBub29wLFxuICB0YWtlOiBub29wXG59O1xuXG5mdW5jdGlvbiByaW5nQnVmZmVyKGxpbWl0LCBvdmVyZmxvd0FjdGlvbikge1xuICBpZiAobGltaXQgPT09IHZvaWQgMCkge1xuICAgIGxpbWl0ID0gMTA7XG4gIH1cblxuICB2YXIgYXJyID0gbmV3IEFycmF5KGxpbWl0KTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBwdXNoSW5kZXggPSAwO1xuICB2YXIgcG9wSW5kZXggPSAwO1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChpdCkge1xuICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgcHVzaEluZGV4ID0gKHB1c2hJbmRleCArIDEpICUgbGltaXQ7XG4gICAgbGVuZ3RoKys7XG4gIH07XG5cbiAgdmFyIHRha2UgPSBmdW5jdGlvbiB0YWtlKCkge1xuICAgIGlmIChsZW5ndGggIT0gMCkge1xuICAgICAgdmFyIGl0ID0gYXJyW3BvcEluZGV4XTtcbiAgICAgIGFycltwb3BJbmRleF0gPSBudWxsO1xuICAgICAgbGVuZ3RoLS07XG4gICAgICBwb3BJbmRleCA9IChwb3BJbmRleCArIDEpICUgbGltaXQ7XG4gICAgICByZXR1cm4gaXQ7XG4gICAgfVxuICB9O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgaXRlbXMucHVzaCh0YWtlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoID09IDA7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChpdCkge1xuICAgICAgaWYgKGxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHB1c2goaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRvdWJsZWRMaW1pdDtcblxuICAgICAgICBzd2l0Y2ggKG92ZXJmbG93QWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19USFJPVzpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihCVUZGRVJfT1ZFUkZMT1cpO1xuXG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19TTElERTpcbiAgICAgICAgICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gcHVzaEluZGV4O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX0VYUEFORDpcbiAgICAgICAgICAgIGRvdWJsZWRMaW1pdCA9IDIgKiBsaW1pdDtcbiAgICAgICAgICAgIGFyciA9IGZsdXNoKCk7XG4gICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcHVzaEluZGV4ID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gMDtcbiAgICAgICAgICAgIGFyci5sZW5ndGggPSBkb3VibGVkTGltaXQ7XG4gICAgICAgICAgICBsaW1pdCA9IGRvdWJsZWRMaW1pdDtcbiAgICAgICAgICAgIHB1c2goaXQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OiAvLyBEUk9QXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFrZTogdGFrZSxcbiAgICBmbHVzaDogZmx1c2hcbiAgfTtcbn1cblxudmFyIG5vbmUgPSBmdW5jdGlvbiBub25lKCkge1xuICByZXR1cm4gemVyb0J1ZmZlcjtcbn07XG52YXIgZml4ZWQgPSBmdW5jdGlvbiBmaXhlZChsaW1pdCkge1xuICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfVEhST1cpO1xufTtcbnZhciBkcm9wcGluZyA9IGZ1bmN0aW9uIGRyb3BwaW5nKGxpbWl0KSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19EUk9QKTtcbn07XG52YXIgc2xpZGluZyA9IGZ1bmN0aW9uIHNsaWRpbmcobGltaXQpIHtcbiAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX1NMSURFKTtcbn07XG52YXIgZXhwYW5kaW5nID0gZnVuY3Rpb24gZXhwYW5kaW5nKGluaXRpYWxTaXplKSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGluaXRpYWxTaXplLCBPTl9PVkVSRkxPV19FWFBBTkQpO1xufTtcblxudmFyIGJ1ZmZlcnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgbm9uZTogbm9uZSxcbiAgZml4ZWQ6IGZpeGVkLFxuICBkcm9wcGluZzogZHJvcHBpbmcsXG4gIHNsaWRpbmc6IHNsaWRpbmcsXG4gIGV4cGFuZGluZzogZXhwYW5kaW5nXG59KTtcblxudmFyIFRBS0UgPSAnVEFLRSc7XG52YXIgUFVUID0gJ1BVVCc7XG52YXIgQUxMID0gJ0FMTCc7XG52YXIgUkFDRSA9ICdSQUNFJztcbnZhciBDQUxMID0gJ0NBTEwnO1xudmFyIENQUyA9ICdDUFMnO1xudmFyIEZPUksgPSAnRk9SSyc7XG52YXIgSk9JTiA9ICdKT0lOJztcbnZhciBDQU5DRUwgPSAnQ0FOQ0VMJztcbnZhciBTRUxFQ1QgPSAnU0VMRUNUJztcbnZhciBBQ1RJT05fQ0hBTk5FTCA9ICdBQ1RJT05fQ0hBTk5FTCc7XG52YXIgQ0FOQ0VMTEVEID0gJ0NBTkNFTExFRCc7XG52YXIgRkxVU0ggPSAnRkxVU0gnO1xudmFyIEdFVF9DT05URVhUID0gJ0dFVF9DT05URVhUJztcbnZhciBTRVRfQ09OVEVYVCA9ICdTRVRfQ09OVEVYVCc7XG5cbnZhciBlZmZlY3RUeXBlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBUQUtFOiBUQUtFLFxuICBQVVQ6IFBVVCxcbiAgQUxMOiBBTEwsXG4gIFJBQ0U6IFJBQ0UsXG4gIENBTEw6IENBTEwsXG4gIENQUzogQ1BTLFxuICBGT1JLOiBGT1JLLFxuICBKT0lOOiBKT0lOLFxuICBDQU5DRUw6IENBTkNFTCxcbiAgU0VMRUNUOiBTRUxFQ1QsXG4gIEFDVElPTl9DSEFOTkVMOiBBQ1RJT05fQ0hBTk5FTCxcbiAgQ0FOQ0VMTEVEOiBDQU5DRUxMRUQsXG4gIEZMVVNIOiBGTFVTSCxcbiAgR0VUX0NPTlRFWFQ6IEdFVF9DT05URVhULFxuICBTRVRfQ09OVEVYVDogU0VUX0NPTlRFWFRcbn0pO1xuXG52YXIgVEVTVF9ISU5UID0gJ1xcbihISU5UOiBpZiB5b3UgYXJlIGdldHRpbmcgdGhlc2UgZXJyb3JzIGluIHRlc3RzLCBjb25zaWRlciB1c2luZyBjcmVhdGVNb2NrVGFzayBmcm9tIEByZWR1eC1zYWdhL3Rlc3RpbmctdXRpbHMpJztcblxudmFyIG1ha2VFZmZlY3QgPSBmdW5jdGlvbiBtYWtlRWZmZWN0KHR5cGUsIHBheWxvYWQpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltJT10gPSB0cnVlLCBfcmVmLmNvbWJpbmF0b3IgPSBmYWxzZSwgX3JlZi50eXBlID0gdHlwZSwgX3JlZi5wYXlsb2FkID0gcGF5bG9hZCwgX3JlZjtcbn07XG5cbnZhciBpc0ZvcmtFZmZlY3QgPSBmdW5jdGlvbiBpc0ZvcmtFZmZlY3QoZWZmKSB7XG4gIHJldHVybiBlZmZlY3QoZWZmKSAmJiBlZmYudHlwZSA9PT0gRk9SSztcbn07XG5cbnZhciBkZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goZWZmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soZWZmLCBpc0ZvcmtFZmZlY3QsICdkZXRhY2goZWZmKTogYXJndW1lbnQgbXVzdCBiZSBhIGZvcmsgZWZmZWN0Jyk7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChGT1JLLCBfZXh0ZW5kcyh7fSwgZWZmLnBheWxvYWQsIHtcbiAgICBkZXRhY2hlZDogdHJ1ZVxuICB9KSk7XG59O1xuZnVuY3Rpb24gdGFrZShwYXR0ZXJuT3JDaGFubmVsLCBtdWx0aWNhc3RQYXR0ZXJuKSB7XG4gIGlmIChwYXR0ZXJuT3JDaGFubmVsID09PSB2b2lkIDApIHtcbiAgICBwYXR0ZXJuT3JDaGFubmVsID0gJyonO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNoZWNrKGFyZ3VtZW50c1swXSwgbm90VW5kZWYsICd0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBwYXR0ZXJuT3JDaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgaWYgKHBhdHRlcm4ocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gbWFrZUVmZmVjdChUQUtFLCB7XG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuT3JDaGFubmVsXG4gICAgfSk7XG4gIH1cblxuICBpZiAobXVsdGljYXN0KHBhdHRlcm5PckNoYW5uZWwpICYmIG5vdFVuZGVmKG11bHRpY2FzdFBhdHRlcm4pICYmIHBhdHRlcm4obXVsdGljYXN0UGF0dGVybikpIHtcbiAgICByZXR1cm4gbWFrZUVmZmVjdChUQUtFLCB7XG4gICAgICBjaGFubmVsOiBwYXR0ZXJuT3JDaGFubmVsLFxuICAgICAgcGF0dGVybjogbXVsdGljYXN0UGF0dGVyblxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gbWFrZUVmZmVjdChUQUtFLCB7XG4gICAgICBjaGFubmVsOiBwYXR0ZXJuT3JDaGFubmVsXG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcInRha2UocGF0dGVybk9yQ2hhbm5lbCk6IGFyZ3VtZW50IFwiICsgcGF0dGVybk9yQ2hhbm5lbCArIFwiIGlzIG5vdCB2YWxpZCBjaGFubmVsIG9yIGEgdmFsaWQgcGF0dGVyblwiKTtcbiAgfVxufVxudmFyIHRha2VNYXliZSA9IGZ1bmN0aW9uIHRha2VNYXliZSgpIHtcbiAgdmFyIGVmZiA9IHRha2UuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICBlZmYucGF5bG9hZC5tYXliZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuZnVuY3Rpb24gcHV0KGNoYW5uZWwkMSwgYWN0aW9uKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBjaGVjayhjaGFubmVsJDEsIG5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGNoYW5uZWwgaXMgdW5kZWZpbmVkJyk7XG4gICAgICBjaGVjayhjaGFubmVsJDEsIGNoYW5uZWwsIFwicHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IFwiICsgY2hhbm5lbCQxICsgXCIgaXMgbm90IGEgdmFsaWQgY2hhbm5lbFwiKTtcbiAgICAgIGNoZWNrKGFjdGlvbiwgbm90VW5kZWYsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgYWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVjayhjaGFubmVsJDEsIG5vdFVuZGVmLCAncHV0KGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAodW5kZWYoYWN0aW9uKSkge1xuICAgIGFjdGlvbiA9IGNoYW5uZWwkMTsgLy8gYHVuZGVmaW5lZGAgaW5zdGVhZCBvZiBgbnVsbGAgdG8gbWFrZSBkZWZhdWx0IHBhcmFtZXRlciB3b3JrXG5cbiAgICBjaGFubmVsJDEgPSB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChQVVQsIHtcbiAgICBjaGFubmVsOiBjaGFubmVsJDEsXG4gICAgYWN0aW9uOiBhY3Rpb25cbiAgfSk7XG59XG52YXIgcHV0UmVzb2x2ZSA9IGZ1bmN0aW9uIHB1dFJlc29sdmUoKSB7XG4gIHZhciBlZmYgPSBwdXQuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICBlZmYucGF5bG9hZC5yZXNvbHZlID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn07XG5mdW5jdGlvbiBhbGwoZWZmZWN0cykge1xuICB2YXIgZWZmID0gbWFrZUVmZmVjdChBTEwsIGVmZmVjdHMpO1xuICBlZmYuY29tYmluYXRvciA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59XG5mdW5jdGlvbiByYWNlKGVmZmVjdHMpIHtcbiAgdmFyIGVmZiA9IG1ha2VFZmZlY3QoUkFDRSwgZWZmZWN0cyk7XG4gIGVmZi5jb21iaW5hdG9yID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn0gLy8gdGhpcyBtYXRjaCBnZXRGbkNhbGxEZXNjcmlwdG9yIGxvZ2ljXG5cbnZhciB2YWxpZGF0ZUZuRGVzY3JpcHRvciA9IGZ1bmN0aW9uIHZhbGlkYXRlRm5EZXNjcmlwdG9yKGVmZmVjdE5hbWUsIGZuRGVzY3JpcHRvcikge1xuICBjaGVjayhmbkRlc2NyaXB0b3IsIG5vdFVuZGVmLCBlZmZlY3ROYW1lICsgXCI6IGFyZ3VtZW50IGZuIGlzIHVuZGVmaW5lZCBvciBudWxsXCIpO1xuXG4gIGlmIChmdW5jKGZuRGVzY3JpcHRvcikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29udGV4dCA9IG51bGw7XG4gIHZhciBmbjtcblxuICBpZiAoYXJyYXkoZm5EZXNjcmlwdG9yKSkge1xuICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3JbMF07XG4gICAgZm4gPSBmbkRlc2NyaXB0b3JbMV07XG4gICAgY2hlY2soZm4sIG5vdFVuZGVmLCBlZmZlY3ROYW1lICsgXCI6IGFyZ3VtZW50IG9mIHR5cGUgW2NvbnRleHQsIGZuXSBoYXMgdW5kZWZpbmVkIG9yIG51bGwgYGZuYFwiKTtcbiAgfSBlbHNlIGlmIChvYmplY3QoZm5EZXNjcmlwdG9yKSkge1xuICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3IuY29udGV4dDtcbiAgICBmbiA9IGZuRGVzY3JpcHRvci5mbjtcbiAgICBjaGVjayhmbiwgbm90VW5kZWYsIGVmZmVjdE5hbWUgKyBcIjogYXJndW1lbnQgb2YgdHlwZSB7Y29udGV4dCwgZm59IGhhcyB1bmRlZmluZWQgb3IgbnVsbCBgZm5gXCIpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrKGZuRGVzY3JpcHRvciwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBmbiBpcyBub3QgZnVuY3Rpb25cIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbnRleHQgJiYgc3RyaW5nKGZuKSkge1xuICAgIGNoZWNrKGNvbnRleHRbZm5dLCBmdW5jLCBlZmZlY3ROYW1lICsgXCI6IGNvbnRleHQgYXJndW1lbnRzIGhhcyBubyBzdWNoIG1ldGhvZCAtIFxcXCJcIiArIGZuICsgXCJcXFwiXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNoZWNrKGZuLCBmdW5jLCBlZmZlY3ROYW1lICsgXCI6IHVucGFja2VkIGZuIGFyZ3VtZW50IChmcm9tIFtjb250ZXh0LCBmbl0gb3Ige2NvbnRleHQsIGZufSkgaXMgbm90IGEgZnVuY3Rpb25cIik7XG59O1xuXG5mdW5jdGlvbiBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykge1xuICB2YXIgY29udGV4dCA9IG51bGw7XG4gIHZhciBmbjtcblxuICBpZiAoZnVuYyhmbkRlc2NyaXB0b3IpKSB7XG4gICAgZm4gPSBmbkRlc2NyaXB0b3I7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGFycmF5KGZuRGVzY3JpcHRvcikpIHtcbiAgICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3JbMF07XG4gICAgICBmbiA9IGZuRGVzY3JpcHRvclsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dCA9IGZuRGVzY3JpcHRvci5jb250ZXh0O1xuICAgICAgZm4gPSBmbkRlc2NyaXB0b3IuZm47XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgc3RyaW5nKGZuKSAmJiBmdW5jKGNvbnRleHRbZm5dKSkge1xuICAgICAgZm4gPSBjb250ZXh0W2ZuXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgZm46IGZuLFxuICAgIGFyZ3M6IGFyZ3NcbiAgfTtcbn1cblxudmFyIGlzTm90RGVsYXlFZmZlY3QgPSBmdW5jdGlvbiBpc05vdERlbGF5RWZmZWN0KGZuKSB7XG4gIHJldHVybiBmbiAhPT0gZGVsYXk7XG59O1xuXG5mdW5jdGlvbiBjYWxsKGZuRGVzY3JpcHRvcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBhcmcwID0gdHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInID8gYXJnc1swXSA6ICdtcyc7XG4gICAgY2hlY2soZm5EZXNjcmlwdG9yLCBpc05vdERlbGF5RWZmZWN0LCBcImluc3RlYWQgb2Ygd3JpdGluZyBgeWllbGQgY2FsbChkZWxheSwgXCIgKyBhcmcwICsgXCIpYCB3aGVyZSBkZWxheSBpcyBhbiBlZmZlY3QgZnJvbSBgcmVkdXgtc2FnYS9lZmZlY3RzYCB5b3Ugc2hvdWxkIHdyaXRlIGB5aWVsZCBkZWxheShcIiArIGFyZzAgKyBcIilgXCIpO1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdjYWxsJywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2NyaXB0b3IoZm5EZXNjcmlwdG9yLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBhcHBseShjb250ZXh0LCBmbiwgYXJncykge1xuICBpZiAoYXJncyA9PT0gdm9pZCAwKSB7XG4gICAgYXJncyA9IFtdO1xuICB9XG5cbiAgdmFyIGZuRGVzY3JpcHRvciA9IFtjb250ZXh0LCBmbl07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignYXBwbHknLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ0FMTCwgZ2V0Rm5DYWxsRGVzY3JpcHRvcihbY29udGV4dCwgZm5dLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBjcHMoZm5EZXNjcmlwdG9yKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ2NwcycsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChDUFMsIGdldEZuQ2FsbERlc2NyaXB0b3IoZm5EZXNjcmlwdG9yLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBmb3JrKGZuRGVzY3JpcHRvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdmb3JrJywgZm5EZXNjcmlwdG9yKTtcbiAgICBjaGVjayhmbkRlc2NyaXB0b3IsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiAhZWZmZWN0KGFyZyk7XG4gICAgfSwgJ2Zvcms6IGFyZ3VtZW50IG11c3Qgbm90IGJlIGFuIGVmZmVjdCcpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoRk9SSywgZ2V0Rm5DYWxsRGVzY3JpcHRvcihmbkRlc2NyaXB0b3IsIGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHNwYXduKGZuRGVzY3JpcHRvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdzcGF3bicsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICByZXR1cm4gZGV0YWNoKGZvcmsuYXBwbHkodm9pZCAwLCBbZm5EZXNjcmlwdG9yXS5jb25jYXQoYXJncykpKTtcbn1cbmZ1bmN0aW9uIGpvaW4odGFza09yVGFza3MpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignam9pbiguLi50YXNrcykgaXMgbm90IHN1cHBvcnRlZCBhbnkgbW9yZS4gUGxlYXNlIHVzZSBqb2luKFsuLi50YXNrc10pIHRvIGpvaW4gbXVsdGlwbGUgdGFza3MuJyk7XG4gICAgfVxuXG4gICAgaWYgKGFycmF5KHRhc2tPclRhc2tzKSkge1xuICAgICAgdGFza09yVGFza3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBjaGVjayh0LCB0YXNrLCBcImpvaW4oWy4uLnRhc2tzXSk6IGFyZ3VtZW50IFwiICsgdCArIFwiIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0IFwiICsgVEVTVF9ISU5UKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVjayh0YXNrT3JUYXNrcywgdGFzaywgXCJqb2luKHRhc2spOiBhcmd1bWVudCBcIiArIHRhc2tPclRhc2tzICsgXCIgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgXCIgKyBURVNUX0hJTlQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEpPSU4sIHRhc2tPclRhc2tzKTtcbn1cbmZ1bmN0aW9uIGNhbmNlbCh0YXNrT3JUYXNrcykge1xuICBpZiAodGFza09yVGFza3MgPT09IHZvaWQgMCkge1xuICAgIHRhc2tPclRhc2tzID0gU0VMRl9DQU5DRUxMQVRJT047XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5jZWwoLi4udGFza3MpIGlzIG5vdCBzdXBwb3J0ZWQgYW55IG1vcmUuIFBsZWFzZSB1c2UgY2FuY2VsKFsuLi50YXNrc10pIHRvIGNhbmNlbCBtdWx0aXBsZSB0YXNrcy4nKTtcbiAgICB9XG5cbiAgICBpZiAoYXJyYXkodGFza09yVGFza3MpKSB7XG4gICAgICB0YXNrT3JUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGNoZWNrKHQsIHRhc2ssIFwiY2FuY2VsKFsuLi50YXNrc10pOiBhcmd1bWVudCBcIiArIHQgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhc2tPclRhc2tzICE9PSBTRUxGX0NBTkNFTExBVElPTiAmJiBub3RVbmRlZih0YXNrT3JUYXNrcykpIHtcbiAgICAgIGNoZWNrKHRhc2tPclRhc2tzLCB0YXNrLCBcImNhbmNlbCh0YXNrKTogYXJndW1lbnQgXCIgKyB0YXNrT3JUYXNrcyArIFwiIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0IFwiICsgVEVTVF9ISU5UKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChDQU5DRUwsIHRhc2tPclRhc2tzKTtcbn1cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBpZiAoc2VsZWN0b3IgPT09IHZvaWQgMCkge1xuICAgIHNlbGVjdG9yID0gaWRlbnRpdHk7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUgPiAxID8gX2xlbjUgLSAxIDogMCksIF9rZXk1ID0gMTsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIGFyZ3NbX2tleTUgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2hlY2soYXJndW1lbnRzWzBdLCBub3RVbmRlZiwgJ3NlbGVjdChzZWxlY3RvciwgWy4uLl0pOiBhcmd1bWVudCBzZWxlY3RvciBpcyB1bmRlZmluZWQnKTtcbiAgICBjaGVjayhzZWxlY3RvciwgZnVuYywgXCJzZWxlY3Qoc2VsZWN0b3IsIFsuLi5dKTogYXJndW1lbnQgXCIgKyBzZWxlY3RvciArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoU0VMRUNULCB7XG4gICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgIGFyZ3M6IGFyZ3NcbiAgfSk7XG59XG4vKipcbiAgY2hhbm5lbChwYXR0ZXJuLCBbYnVmZmVyXSkgICAgPT4gY3JlYXRlcyBhIHByb3h5IGNoYW5uZWwgZm9yIHN0b3JlIGFjdGlvbnNcbioqL1xuXG5mdW5jdGlvbiBhY3Rpb25DaGFubmVsKHBhdHRlcm4kMSwgYnVmZmVyJDEpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhwYXR0ZXJuJDEsIHBhdHRlcm4sICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sLi4uKTogYXJndW1lbnQgcGF0dGVybiBpcyBub3QgdmFsaWQnKTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY2hlY2soYnVmZmVyJDEsIG5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCBidWZmZXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgICBjaGVjayhidWZmZXIkMSwgYnVmZmVyLCBcImFjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKTogYXJndW1lbnQgXCIgKyBidWZmZXIkMSArIFwiIGlzIG5vdCBhIHZhbGlkIGJ1ZmZlclwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChBQ1RJT05fQ0hBTk5FTCwge1xuICAgIHBhdHRlcm46IHBhdHRlcm4kMSxcbiAgICBidWZmZXI6IGJ1ZmZlciQxXG4gIH0pO1xufVxuZnVuY3Rpb24gY2FuY2VsbGVkKCkge1xuICByZXR1cm4gbWFrZUVmZmVjdChDQU5DRUxMRUQsIHt9KTtcbn1cbmZ1bmN0aW9uIGZsdXNoKGNoYW5uZWwkMSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKGNoYW5uZWwkMSwgY2hhbm5lbCwgXCJmbHVzaChjaGFubmVsKTogYXJndW1lbnQgXCIgKyBjaGFubmVsJDEgKyBcIiBpcyBub3QgdmFsaWQgY2hhbm5lbFwiKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEZMVVNILCBjaGFubmVsJDEpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dChwcm9wKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socHJvcCwgc3RyaW5nLCBcImdldENvbnRleHQocHJvcCk6IGFyZ3VtZW50IFwiICsgcHJvcCArIFwiIGlzIG5vdCBhIHN0cmluZ1wiKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEdFVF9DT05URVhULCBwcm9wKTtcbn1cbmZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhwcm9wcywgb2JqZWN0LCBjcmVhdGVTZXRDb250ZXh0V2FybmluZyhudWxsLCBwcm9wcykpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoU0VUX0NPTlRFWFQsIHByb3BzKTtcbn1cbnZhciBkZWxheSA9XG4vKiNfX1BVUkVfXyovXG5jYWxsLmJpbmQobnVsbCwgZGVsYXlQKTtcblxuZXhwb3J0IHsgYXBwbHkgYXMgJCwgQUxMIGFzIEEsIGxvZ0Vycm9yIGFzIEIsIENBTEwgYXMgQywgd3JhcFNhZ2FEaXNwYXRjaCBhcyBELCBpZGVudGl0eSBhcyBFLCBGT1JLIGFzIEYsIEdFVF9DT05URVhUIGFzIEcsIGJ1ZmZlcnMgYXMgSCwgZGV0YWNoIGFzIEksIEpPSU4gYXMgSiwgdGFrZSBhcyBLLCBmb3JrIGFzIEwsIGNhbmNlbCBhcyBNLCBjYWxsIGFzIE4sIGFjdGlvbkNoYW5uZWwgYXMgTywgUFVUIGFzIFAsIHNsaWRpbmcgYXMgUSwgUkFDRSBhcyBSLCBTRUxFQ1QgYXMgUywgVEFLRSBhcyBULCBkZWxheSBhcyBVLCByYWNlIGFzIFYsIGVmZmVjdFR5cGVzIGFzIFcsIHRha2VNYXliZSBhcyBYLCBwdXQgYXMgWSwgcHV0UmVzb2x2ZSBhcyBaLCBhbGwgYXMgXywgQ1BTIGFzIGEsIGNwcyBhcyBhMCwgc3Bhd24gYXMgYTEsIGpvaW4gYXMgYTIsIHNlbGVjdCBhcyBhMywgY2FuY2VsbGVkIGFzIGE0LCBmbHVzaCBhcyBhNSwgZ2V0Q29udGV4dCBhcyBhNiwgc2V0Q29udGV4dCBhcyBhNywgQ0FOQ0VMIGFzIGIsIGNoZWNrIGFzIGMsIEFDVElPTl9DSEFOTkVMIGFzIGQsIGV4cGFuZGluZyBhcyBlLCBDQU5DRUxMRUQgYXMgZiwgRkxVU0ggYXMgZywgU0VUX0NPTlRFWFQgYXMgaCwgaW50ZXJuYWxFcnIgYXMgaSwgZ2V0TWV0YUluZm8gYXMgaiwga1RydWUgYXMgaywgY3JlYXRlQWxsU3R5bGVDaGlsZENhbGxiYWNrcyBhcyBsLCBjcmVhdGVFbXB0eUFycmF5IGFzIG0sIG5vbmUgYXMgbiwgb25jZSBhcyBvLCBhc3NpZ25XaXRoU3ltYm9scyBhcyBwLCBtYWtlSXRlcmF0b3IgYXMgcSwgcmVtb3ZlIGFzIHIsIHNob3VsZENvbXBsZXRlIGFzIHMsIG5vb3AgYXMgdCwgZmxhdE1hcCBhcyB1LCBnZXRMb2NhdGlvbiBhcyB2LCBjcmVhdGVTZXRDb250ZXh0V2FybmluZyBhcyB3LCBhc3luY0l0ZXJhdG9yU3ltYm9sIGFzIHgsIHNob3VsZENhbmNlbCBhcyB5LCBzaG91bGRUZXJtaW5hdGUgYXMgeiB9O1xuIiwiaW1wb3J0IHsgQ0hBTk5FTF9FTkRfVFlQRSwgTVVMVElDQVNULCBNQVRDSCwgU0FHQV9BQ1RJT04sIENBTkNFTCwgU0VMRl9DQU5DRUxMQVRJT04sIFRFUk1JTkFURSwgVEFTSywgVEFTS19DQU5DRUwsIElPIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5leHBvcnQgeyBDQU5DRUwsIFNBR0FfTE9DQVRJT04gfSBmcm9tICdAcmVkdXgtc2FnYS9zeW1ib2xzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCB7IHN0cmluZyBhcyBzdHJpbmckMSwgYXJyYXkgYXMgYXJyYXkkMSwgc3RyaW5nYWJsZUZ1bmMsIGZ1bmMsIHN5bWJvbCBhcyBzeW1ib2wkMSwgYnVmZmVyLCBub3RVbmRlZiwgcHJvbWlzZSwgaXRlcmF0b3IsIHVuZGVmLCBvYmplY3QsIGNoYW5uZWwgYXMgY2hhbm5lbCQxIH0gZnJvbSAnQHJlZHV4LXNhZ2EvaXMnO1xuaW1wb3J0IHsgayBhcyBrVHJ1ZSwgZSBhcyBleHBhbmRpbmcsIGMgYXMgY2hlY2ssIG8gYXMgb25jZSwgciBhcyByZW1vdmUsIG4gYXMgbm9uZSwgaSBhcyBpbnRlcm5hbEVyciwgVCBhcyBUQUtFLCBQIGFzIFBVVCwgQSBhcyBBTEwsIFIgYXMgUkFDRSwgQyBhcyBDQUxMLCBhIGFzIENQUywgRiBhcyBGT1JLLCBKIGFzIEpPSU4sIGIgYXMgQ0FOQ0VMJDEsIFMgYXMgU0VMRUNULCBkIGFzIEFDVElPTl9DSEFOTkVMLCBmIGFzIENBTkNFTExFRCQxLCBnIGFzIEZMVVNILCBHIGFzIEdFVF9DT05URVhULCBoIGFzIFNFVF9DT05URVhULCBqIGFzIGdldE1ldGFJbmZvLCBsIGFzIGNyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3MsIG0gYXMgY3JlYXRlRW1wdHlBcnJheSwgcCBhcyBhc3NpZ25XaXRoU3ltYm9scywgcSBhcyBtYWtlSXRlcmF0b3IsIHMgYXMgc2hvdWxkQ29tcGxldGUsIHQgYXMgbm9vcCwgdSBhcyBmbGF0TWFwLCB2IGFzIGdldExvY2F0aW9uLCB3IGFzIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nLCB4IGFzIGFzeW5jSXRlcmF0b3JTeW1ib2wsIHkgYXMgc2hvdWxkQ2FuY2VsLCB6IGFzIHNob3VsZFRlcm1pbmF0ZSwgQiBhcyBsb2dFcnJvciwgRCBhcyB3cmFwU2FnYURpc3BhdGNoLCBFIGFzIGlkZW50aXR5IH0gZnJvbSAnLi9pby02ZGUxNTZmMy5qcyc7XG5leHBvcnQgeyBIIGFzIGJ1ZmZlcnMsIEkgYXMgZGV0YWNoIH0gZnJvbSAnLi9pby02ZGUxNTZmMy5qcyc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGRlZmVycmVkIGZyb20gJ0ByZWR1eC1zYWdhL2RlZmVycmVkJztcbmltcG9ydCAnQHJlZHV4LXNhZ2EvZGVsYXktcCc7XG5cbnZhciBxdWV1ZSA9IFtdO1xuLyoqXG4gIFZhcmlhYmxlIHRvIGhvbGQgYSBjb3VudGluZyBzZW1hcGhvcmVcbiAgLSBJbmNyZW1lbnRpbmcgYWRkcyBhIGxvY2sgYW5kIHB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGBzdXNwZW5kZWRgIHN0YXRlIChpZiBpdCdzIG5vdFxuICAgIGFscmVhZHkgc3VzcGVuZGVkKVxuICAtIERlY3JlbWVudGluZyByZWxlYXNlcyBhIGxvY2suIFplcm8gbG9ja3MgcHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHJlbGVhc2VkYCBzdGF0ZS4gVGhpc1xuICAgIHRyaWdnZXJzIGZsdXNoaW5nIHRoZSBxdWV1ZWQgdGFza3MuXG4qKi9cblxudmFyIHNlbWFwaG9yZSA9IDA7XG4vKipcbiAgRXhlY3V0ZXMgYSB0YXNrICdhdG9taWNhbGx5Jy4gVGFza3Mgc2NoZWR1bGVkIGR1cmluZyB0aGlzIGV4ZWN1dGlvbiB3aWxsIGJlIHF1ZXVlZFxuICBhbmQgZmx1c2hlZCBhZnRlciB0aGlzIHRhc2sgaGFzIGZpbmlzaGVkIChhc3N1bWluZyB0aGUgc2NoZWR1bGVyIGVuZHVwIGluIGEgcmVsZWFzZWRcbiAgc3RhdGUpLlxuKiovXG5cbmZ1bmN0aW9uIGV4ZWModGFzaykge1xuICB0cnkge1xuICAgIHN1c3BlbmQoKTtcbiAgICB0YXNrKCk7XG4gIH0gZmluYWxseSB7XG4gICAgcmVsZWFzZSgpO1xuICB9XG59XG4vKipcbiAgRXhlY3V0ZXMgb3IgcXVldWVzIGEgdGFzayBkZXBlbmRpbmcgb24gdGhlIHN0YXRlIG9mIHRoZSBzY2hlZHVsZXIgKGBzdXNwZW5kZWRgIG9yIGByZWxlYXNlZGApXG4qKi9cblxuXG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgcXVldWUucHVzaCh0YXNrKTtcblxuICBpZiAoIXNlbWFwaG9yZSkge1xuICAgIHN1c3BlbmQoKTtcbiAgICBmbHVzaCgpO1xuICB9XG59XG4vKipcbiAqIFB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGBzdXNwZW5kZWRgIHN0YXRlIGFuZCBleGVjdXRlcyBhIHRhc2sgaW1tZWRpYXRlbHkuXG4gKi9cblxuZnVuY3Rpb24gaW1tZWRpYXRlbHkodGFzaykge1xuICB0cnkge1xuICAgIHN1c3BlbmQoKTtcbiAgICByZXR1cm4gdGFzaygpO1xuICB9IGZpbmFsbHkge1xuICAgIGZsdXNoKCk7XG4gIH1cbn1cbi8qKlxuICBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZS4gU2NoZWR1bGVkIHRhc2tzIHdpbGwgYmUgcXVldWVkIHVudGlsIHRoZVxuICBzY2hlZHVsZXIgaXMgcmVsZWFzZWQuXG4qKi9cblxuZnVuY3Rpb24gc3VzcGVuZCgpIHtcbiAgc2VtYXBob3JlKys7XG59XG4vKipcbiAgUHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHJlbGVhc2VkYCBzdGF0ZS5cbioqL1xuXG5cbmZ1bmN0aW9uIHJlbGVhc2UoKSB7XG4gIHNlbWFwaG9yZS0tO1xufVxuLyoqXG4gIFJlbGVhc2VzIHRoZSBjdXJyZW50IGxvY2suIEV4ZWN1dGVzIGFsbCBxdWV1ZWQgdGFza3MgaWYgdGhlIHNjaGVkdWxlciBpcyBpbiB0aGUgcmVsZWFzZWQgc3RhdGUuXG4qKi9cblxuXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgcmVsZWFzZSgpO1xuICB2YXIgdGFzaztcblxuICB3aGlsZSAoIXNlbWFwaG9yZSAmJiAodGFzayA9IHF1ZXVlLnNoaWZ0KCkpICE9PSB1bmRlZmluZWQpIHtcbiAgICBleGVjKHRhc2spO1xuICB9XG59XG5cbnZhciBhcnJheSA9IGZ1bmN0aW9uIGFycmF5KHBhdHRlcm5zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gcGF0dGVybnMuc29tZShmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIG1hdGNoZXIocCkoaW5wdXQpO1xuICAgIH0pO1xuICB9O1xufTtcbnZhciBwcmVkaWNhdGUgPSBmdW5jdGlvbiBwcmVkaWNhdGUoX3ByZWRpY2F0ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIF9wcmVkaWNhdGUoaW5wdXQpO1xuICB9O1xufTtcbnZhciBzdHJpbmcgPSBmdW5jdGlvbiBzdHJpbmcocGF0dGVybikge1xuICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IFN0cmluZyhwYXR0ZXJuKTtcbiAgfTtcbn07XG52YXIgc3ltYm9sID0gZnVuY3Rpb24gc3ltYm9sKHBhdHRlcm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC50eXBlID09PSBwYXR0ZXJuO1xuICB9O1xufTtcbnZhciB3aWxkY2FyZCA9IGZ1bmN0aW9uIHdpbGRjYXJkKCkge1xuICByZXR1cm4ga1RydWU7XG59O1xuZnVuY3Rpb24gbWF0Y2hlcihwYXR0ZXJuKSB7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICB2YXIgbWF0Y2hlckNyZWF0b3IgPSBwYXR0ZXJuID09PSAnKicgPyB3aWxkY2FyZCA6IHN0cmluZyQxKHBhdHRlcm4pID8gc3RyaW5nIDogYXJyYXkkMShwYXR0ZXJuKSA/IGFycmF5IDogc3RyaW5nYWJsZUZ1bmMocGF0dGVybikgPyBzdHJpbmcgOiBmdW5jKHBhdHRlcm4pID8gcHJlZGljYXRlIDogc3ltYm9sJDEocGF0dGVybikgPyBzeW1ib2wgOiBudWxsO1xuXG4gIGlmIChtYXRjaGVyQ3JlYXRvciA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgcGF0dGVybjogXCIgKyBwYXR0ZXJuKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVyQ3JlYXRvcihwYXR0ZXJuKTtcbn1cblxudmFyIEVORCA9IHtcbiAgdHlwZTogQ0hBTk5FTF9FTkRfVFlQRVxufTtcbnZhciBpc0VuZCA9IGZ1bmN0aW9uIGlzRW5kKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS50eXBlID09PSBDSEFOTkVMX0VORF9UWVBFO1xufTtcbnZhciBDTE9TRURfQ0hBTk5FTF9XSVRIX1RBS0VSUyA9ICdDYW5ub3QgaGF2ZSBhIGNsb3NlZCBjaGFubmVsIHdpdGggcGVuZGluZyB0YWtlcnMnO1xudmFyIElOVkFMSURfQlVGRkVSID0gJ2ludmFsaWQgYnVmZmVyIHBhc3NlZCB0byBjaGFubmVsIGZhY3RvcnkgZnVuY3Rpb24nO1xudmFyIFVOREVGSU5FRF9JTlBVVF9FUlJPUiA9IFwiU2FnYSBvciBjaGFubmVsIHdhcyBwcm92aWRlZCB3aXRoIGFuIHVuZGVmaW5lZCBhY3Rpb25cXG5IaW50czpcXG4gIC0gY2hlY2sgdGhhdCB5b3VyIEFjdGlvbiBDcmVhdG9yIHJldHVybnMgYSBub24tdW5kZWZpbmVkIHZhbHVlXFxuICAtIGlmIHRoZSBTYWdhIHdhcyBzdGFydGVkIHVzaW5nIHJ1blNhZ2EsIGNoZWNrIHRoYXQgeW91ciBzdWJzY3JpYmUgc291cmNlIHByb3ZpZGVzIHRoZSBhY3Rpb24gdG8gaXRzIGxpc3RlbmVyc1wiO1xuZnVuY3Rpb24gY2hhbm5lbChidWZmZXIkMSkge1xuICBpZiAoYnVmZmVyJDEgPT09IHZvaWQgMCkge1xuICAgIGJ1ZmZlciQxID0gZXhwYW5kaW5nKCk7XG4gIH1cblxuICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gIHZhciB0YWtlcnMgPSBbXTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKGJ1ZmZlciQxLCBidWZmZXIsIElOVkFMSURfQlVGRkVSKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCkge1xuICAgIGlmIChjbG9zZWQgJiYgdGFrZXJzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoQ0xPU0VEX0NIQU5ORUxfV0lUSF9UQUtFUlMpO1xuICAgIH1cblxuICAgIGlmICh0YWtlcnMubGVuZ3RoICYmICFidWZmZXIkMS5pc0VtcHR5KCkpIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyKCdDYW5ub3QgaGF2ZSBwZW5kaW5nIHRha2VycyB3aXRoIG5vbiBlbXB0eSBidWZmZXInKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwdXQoaW5wdXQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICAgIGNoZWNrKGlucHV0LCBub3RVbmRlZiwgVU5ERUZJTkVEX0lOUFVUX0VSUk9SKTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRha2Vycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBidWZmZXIkMS5wdXQoaW5wdXQpO1xuICAgIH1cblxuICAgIHZhciBjYiA9IHRha2Vycy5zaGlmdCgpO1xuICAgIGNiKGlucHV0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRha2UoY2IpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICAgIGNoZWNrKGNiLCBmdW5jLCBcImNoYW5uZWwudGFrZSdzIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkICYmIGJ1ZmZlciQxLmlzRW1wdHkoKSkge1xuICAgICAgY2IoRU5EKTtcbiAgICB9IGVsc2UgaWYgKCFidWZmZXIkMS5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKGJ1ZmZlciQxLnRha2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRha2Vycy5wdXNoKGNiKTtcblxuICAgICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmUodGFrZXJzLCBjYik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKGNiKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgICBjaGVjayhjYiwgZnVuYywgXCJjaGFubmVsLmZsdXNoJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCAmJiBidWZmZXIkMS5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKEVORCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2IoYnVmZmVyJDEuZmx1c2goKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xvc2VkID0gdHJ1ZTtcbiAgICB2YXIgYXJyID0gdGFrZXJzO1xuICAgIHRha2VycyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIHRha2VyID0gYXJyW2ldO1xuICAgICAgdGFrZXIoRU5EKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRha2U6IHRha2UsXG4gICAgcHV0OiBwdXQsXG4gICAgZmx1c2g6IGZsdXNoLFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufVxuZnVuY3Rpb24gZXZlbnRDaGFubmVsKHN1YnNjcmliZSwgYnVmZmVyKSB7XG4gIGlmIChidWZmZXIgPT09IHZvaWQgMCkge1xuICAgIGJ1ZmZlciA9IG5vbmUoKTtcbiAgfVxuXG4gIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgdmFyIHVuc3Vic2NyaWJlO1xuICB2YXIgY2hhbiA9IGNoYW5uZWwoYnVmZmVyKTtcblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoY2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xvc2VkID0gdHJ1ZTtcblxuICAgIGlmIChmdW5jKHVuc3Vic2NyaWJlKSkge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBjaGFuLmNsb3NlKCk7XG4gIH07XG5cbiAgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlzRW5kKGlucHV0KSkge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjaGFuLnB1dChpbnB1dCk7XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2sodW5zdWJzY3JpYmUsIGZ1bmMsICdpbiBldmVudENoYW5uZWw6IHN1YnNjcmliZSBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24gdG8gdW5zdWJzY3JpYmUnKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlID0gb25jZSh1bnN1YnNjcmliZSk7XG5cbiAgaWYgKGNsb3NlZCkge1xuICAgIHVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRha2U6IGNoYW4udGFrZSxcbiAgICBmbHVzaDogY2hhbi5mbHVzaCxcbiAgICBjbG9zZTogY2xvc2VcbiAgfTtcbn1cbmZ1bmN0aW9uIG11bHRpY2FzdENoYW5uZWwoKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgdmFyIGN1cnJlbnRUYWtlcnMgPSBbXTtcbiAgdmFyIG5leHRUYWtlcnMgPSBjdXJyZW50VGFrZXJzO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCkge1xuICAgIGlmIChjbG9zZWQgJiYgbmV4dFRha2Vycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyKENMT1NFRF9DSEFOTkVMX1dJVEhfVEFLRVJTKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZW5zdXJlQ2FuTXV0YXRlTmV4dFRha2VycyA9IGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRUYWtlcnMoKSB7XG4gICAgaWYgKG5leHRUYWtlcnMgIT09IGN1cnJlbnRUYWtlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0VGFrZXJzID0gY3VycmVudFRha2Vycy5zbGljZSgpO1xuICB9O1xuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgIH1cblxuICAgIGNsb3NlZCA9IHRydWU7XG4gICAgdmFyIHRha2VycyA9IGN1cnJlbnRUYWtlcnMgPSBuZXh0VGFrZXJzO1xuICAgIG5leHRUYWtlcnMgPSBbXTtcbiAgICB0YWtlcnMuZm9yRWFjaChmdW5jdGlvbiAodGFrZXIpIHtcbiAgICAgIHRha2VyKEVORCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltNVUxUSUNBU1RdID0gdHJ1ZSwgX3JlZi5wdXQgPSBmdW5jdGlvbiBwdXQoaW5wdXQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICAgIGNoZWNrKGlucHV0LCBub3RVbmRlZiwgVU5ERUZJTkVEX0lOUFVUX0VSUk9SKTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzRW5kKGlucHV0KSkge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFrZXJzID0gY3VycmVudFRha2VycyA9IG5leHRUYWtlcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGFrZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgdGFrZXIgPSB0YWtlcnNbaV07XG5cbiAgICAgIGlmICh0YWtlcltNQVRDSF0oaW5wdXQpKSB7XG4gICAgICAgIHRha2VyLmNhbmNlbCgpO1xuICAgICAgICB0YWtlcihpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBfcmVmLnRha2UgPSBmdW5jdGlvbiB0YWtlKGNiLCBtYXRjaGVyKSB7XG4gICAgaWYgKG1hdGNoZXIgPT09IHZvaWQgMCkge1xuICAgICAgbWF0Y2hlciA9IHdpbGRjYXJkO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgIH1cblxuICAgIGlmIChjbG9zZWQpIHtcbiAgICAgIGNiKEVORCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2JbTUFUQ0hdID0gbWF0Y2hlcjtcbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0VGFrZXJzKCk7XG4gICAgbmV4dFRha2Vycy5wdXNoKGNiKTtcbiAgICBjYi5jYW5jZWwgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRUYWtlcnMoKTtcbiAgICAgIHJlbW92ZShuZXh0VGFrZXJzLCBjYik7XG4gICAgfSk7XG4gIH0sIF9yZWYuY2xvc2UgPSBjbG9zZSwgX3JlZjtcbn1cbmZ1bmN0aW9uIHN0ZENoYW5uZWwoKSB7XG4gIHZhciBjaGFuID0gbXVsdGljYXN0Q2hhbm5lbCgpO1xuICB2YXIgcHV0ID0gY2hhbi5wdXQ7XG5cbiAgY2hhbi5wdXQgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXRbU0FHQV9BQ1RJT05dKSB7XG4gICAgICBwdXQoaW5wdXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcHV0KGlucHV0KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gY2hhbjtcbn1cblxudmFyIFJVTk5JTkcgPSAwO1xudmFyIENBTkNFTExFRCA9IDE7XG52YXIgQUJPUlRFRCA9IDI7XG52YXIgRE9ORSA9IDM7XG5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGNiKSB7XG4gIHZhciBjYW5jZWxQcm9taXNlID0gcHJvbWlzZVtDQU5DRUxdO1xuXG4gIGlmIChmdW5jKGNhbmNlbFByb21pc2UpKSB7XG4gICAgY2IuY2FuY2VsID0gY2FuY2VsUHJvbWlzZTtcbiAgfVxuXG4gIHByb21pc2UudGhlbihjYiwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgY2IoZXJyb3IsIHRydWUpO1xuICB9KTtcbn1cblxudmFyIGN1cnJlbnQgPSAwO1xudmFyIG5leHRTYWdhSWQgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKytjdXJyZW50O1xufSk7XG5cbnZhciBfZWZmZWN0UnVubmVyTWFwO1xuXG5mdW5jdGlvbiBnZXRJdGVyYXRvck1ldGFJbmZvKGl0ZXJhdG9yLCBmbikge1xuICBpZiAoaXRlcmF0b3IuaXNTYWdhSXRlcmF0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogaXRlcmF0b3IubWV0YS5uYW1lXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBnZXRNZXRhSW5mbyhmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVyYXRvcihfcmVmKSB7XG4gIHZhciBjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgZm4gPSBfcmVmLmZuLFxuICAgICAgYXJncyA9IF9yZWYuYXJncztcblxuICAvLyBjYXRjaCBzeW5jaHJvbm91cyBmYWlsdXJlczsgc2VlICMxNTIgYW5kICM0NDFcbiAgdHJ5IHtcbiAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7IC8vIGkuZS4gYSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJucyBhbiBpdGVyYXRvclxuXG4gICAgaWYgKGl0ZXJhdG9yKHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdmFyIHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQoYXJnKSB7XG4gICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTsgLy8gT25seSBwcm9taXNlcyByZXR1cm5lZCBmcm9tIGZvcmsgd2lsbCBiZSBpbnRlcnByZXRlZC4gU2VlICMxNTczXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogcmVzdWx0LFxuICAgICAgICAgIGRvbmU6ICFwcm9taXNlKHJlc3VsdClcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGFyZyxcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtYWtlSXRlcmF0b3IobmV4dCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGRvIG5vdCBidWJibGUgdXAgc3luY2hyb25vdXMgZmFpbHVyZXMgZm9yIGRldGFjaGVkIGZvcmtzXG4gICAgLy8gaW5zdGVhZCBjcmVhdGUgYSBmYWlsZWQgdGFzay4gU2VlICMxNTIgYW5kICM0NDFcbiAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5QdXRFZmZlY3QoZW52LCBfcmVmMiwgY2IpIHtcbiAgdmFyIGNoYW5uZWwgPSBfcmVmMi5jaGFubmVsLFxuICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uLFxuICAgICAgcmVzb2x2ZSA9IF9yZWYyLnJlc29sdmU7XG5cbiAgLyoqXG4gICBTY2hlZHVsZSB0aGUgcHV0IGluIGNhc2UgYW5vdGhlciBzYWdhIGlzIGhvbGRpbmcgYSBsb2NrLlxuICAgVGhlIHB1dCB3aWxsIGJlIGV4ZWN1dGVkIGF0b21pY2FsbHkuIGllIG5lc3RlZCBwdXRzIHdpbGwgZXhlY3V0ZSBhZnRlclxuICAgdGhpcyBwdXQgaGFzIHRlcm1pbmF0ZWQuXG4gICAqKi9cbiAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAoY2hhbm5lbCA/IGNoYW5uZWwucHV0IDogZW52LmRpc3BhdGNoKShhY3Rpb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjYihlcnJvciwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlc29sdmUgJiYgcHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZShyZXN1bHQsIGNiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2IocmVzdWx0KTtcbiAgICB9XG4gIH0pOyAvLyBQdXQgZWZmZWN0cyBhcmUgbm9uIGNhbmNlbGxhYmxlc1xufVxuXG5mdW5jdGlvbiBydW5UYWtlRWZmZWN0KGVudiwgX3JlZjMsIGNiKSB7XG4gIHZhciBfcmVmMyRjaGFubmVsID0gX3JlZjMuY2hhbm5lbCxcbiAgICAgIGNoYW5uZWwgPSBfcmVmMyRjaGFubmVsID09PSB2b2lkIDAgPyBlbnYuY2hhbm5lbCA6IF9yZWYzJGNoYW5uZWwsXG4gICAgICBwYXR0ZXJuID0gX3JlZjMucGF0dGVybixcbiAgICAgIG1heWJlID0gX3JlZjMubWF5YmU7XG5cbiAgdmFyIHRha2VDYiA9IGZ1bmN0aW9uIHRha2VDYihpbnB1dCkge1xuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBjYihpbnB1dCwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzRW5kKGlucHV0KSAmJiAhbWF5YmUpIHtcbiAgICAgIGNiKFRFUk1JTkFURSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2IoaW5wdXQpO1xuICB9O1xuXG4gIHRyeSB7XG4gICAgY2hhbm5lbC50YWtlKHRha2VDYiwgbm90VW5kZWYocGF0dGVybikgPyBtYXRjaGVyKHBhdHRlcm4pIDogbnVsbCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNiKGVyciwgdHJ1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2IuY2FuY2VsID0gdGFrZUNiLmNhbmNlbDtcbn1cblxuZnVuY3Rpb24gcnVuQ2FsbEVmZmVjdChlbnYsIF9yZWY0LCBjYiwgX3JlZjUpIHtcbiAgdmFyIGNvbnRleHQgPSBfcmVmNC5jb250ZXh0LFxuICAgICAgZm4gPSBfcmVmNC5mbixcbiAgICAgIGFyZ3MgPSBfcmVmNC5hcmdzO1xuICB2YXIgdGFzayA9IF9yZWY1LnRhc2s7XG5cbiAgLy8gY2F0Y2ggc3luY2hyb25vdXMgZmFpbHVyZXM7IHNlZSAjMTUyXG4gIHRyeSB7XG4gICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXG4gICAgaWYgKHByb21pc2UocmVzdWx0KSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UocmVzdWx0LCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGl0ZXJhdG9yKHJlc3VsdCkpIHtcbiAgICAgIC8vIHJlc29sdmUgaXRlcmF0b3JcbiAgICAgIHByb2MoZW52LCByZXN1bHQsIHRhc2suY29udGV4dCwgY3VycmVudCwgZ2V0TWV0YUluZm8oZm4pLFxuICAgICAgLyogaXNSb290ICovXG4gICAgICBmYWxzZSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNiKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2IoZXJyb3IsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkNQU0VmZmVjdChlbnYsIF9yZWY2LCBjYikge1xuICB2YXIgY29udGV4dCA9IF9yZWY2LmNvbnRleHQsXG4gICAgICBmbiA9IF9yZWY2LmZuLFxuICAgICAgYXJncyA9IF9yZWY2LmFyZ3M7XG5cbiAgLy8gQ1BTIChpZSBub2RlIHN0eWxlIGZ1bmN0aW9ucykgY2FuIGRlZmluZSB0aGVpciBvd24gY2FuY2VsbGF0aW9uIGxvZ2ljXG4gIC8vIGJ5IHNldHRpbmcgY2FuY2VsIGZpZWxkIG9uIHRoZSBjYlxuICAvLyBjYXRjaCBzeW5jaHJvbm91cyBmYWlsdXJlczsgc2VlICMxNTJcbiAgdHJ5IHtcbiAgICB2YXIgY3BzQ2IgPSBmdW5jdGlvbiBjcHNDYihlcnIsIHJlcykge1xuICAgICAgaWYgKHVuZGVmKGVycikpIHtcbiAgICAgICAgY2IocmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiKGVyciwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KGNwc0NiKSk7XG5cbiAgICBpZiAoY3BzQ2IuY2FuY2VsKSB7XG4gICAgICBjYi5jYW5jZWwgPSBjcHNDYi5jYW5jZWw7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNiKGVycm9yLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5Gb3JrRWZmZWN0KGVudiwgX3JlZjcsIGNiLCBfcmVmOCkge1xuICB2YXIgY29udGV4dCA9IF9yZWY3LmNvbnRleHQsXG4gICAgICBmbiA9IF9yZWY3LmZuLFxuICAgICAgYXJncyA9IF9yZWY3LmFyZ3MsXG4gICAgICBkZXRhY2hlZCA9IF9yZWY3LmRldGFjaGVkO1xuICB2YXIgcGFyZW50ID0gX3JlZjgudGFzaztcbiAgdmFyIHRhc2tJdGVyYXRvciA9IGNyZWF0ZVRhc2tJdGVyYXRvcih7XG4gICAgY29udGV4dDogY29udGV4dCxcbiAgICBmbjogZm4sXG4gICAgYXJnczogYXJnc1xuICB9KTtcbiAgdmFyIG1ldGEgPSBnZXRJdGVyYXRvck1ldGFJbmZvKHRhc2tJdGVyYXRvciwgZm4pO1xuICBpbW1lZGlhdGVseShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoaWxkID0gcHJvYyhlbnYsIHRhc2tJdGVyYXRvciwgcGFyZW50LmNvbnRleHQsIGN1cnJlbnQsIG1ldGEsIGRldGFjaGVkLCB1bmRlZmluZWQpO1xuXG4gICAgaWYgKGRldGFjaGVkKSB7XG4gICAgICBjYihjaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjaGlsZC5pc1J1bm5pbmcoKSkge1xuICAgICAgICBwYXJlbnQucXVldWUuYWRkVGFzayhjaGlsZCk7XG4gICAgICAgIGNiKGNoaWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaXNBYm9ydGVkKCkpIHtcbiAgICAgICAgcGFyZW50LnF1ZXVlLmFib3J0KGNoaWxkLmVycm9yKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIEZvcmsgZWZmZWN0cyBhcmUgbm9uIGNhbmNlbGxhYmxlc1xufVxuXG5mdW5jdGlvbiBydW5Kb2luRWZmZWN0KGVudiwgdGFza09yVGFza3MsIGNiLCBfcmVmOSkge1xuICB2YXIgdGFzayA9IF9yZWY5LnRhc2s7XG5cbiAgdmFyIGpvaW5TaW5nbGVUYXNrID0gZnVuY3Rpb24gam9pblNpbmdsZVRhc2sodGFza1RvSm9pbiwgY2IpIHtcbiAgICBpZiAodGFza1RvSm9pbi5pc1J1bm5pbmcoKSkge1xuICAgICAgdmFyIGpvaW5lciA9IHtcbiAgICAgICAgdGFzazogdGFzayxcbiAgICAgICAgY2I6IGNiXG4gICAgICB9O1xuXG4gICAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0YXNrVG9Kb2luLmlzUnVubmluZygpKSByZW1vdmUodGFza1RvSm9pbi5qb2luZXJzLCBqb2luZXIpO1xuICAgICAgfTtcblxuICAgICAgdGFza1RvSm9pbi5qb2luZXJzLnB1c2goam9pbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRhc2tUb0pvaW4uaXNBYm9ydGVkKCkpIHtcbiAgICAgICAgY2IodGFza1RvSm9pbi5lcnJvcigpLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiKHRhc2tUb0pvaW4ucmVzdWx0KCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAoYXJyYXkkMSh0YXNrT3JUYXNrcykpIHtcbiAgICBpZiAodGFza09yVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBjYihbXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkQ2FsbGJhY2tzID0gY3JlYXRlQWxsU3R5bGVDaGlsZENhbGxiYWNrcyh0YXNrT3JUYXNrcywgY2IpO1xuICAgIHRhc2tPclRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgIGpvaW5TaW5nbGVUYXNrKHQsIGNoaWxkQ2FsbGJhY2tzW2ldKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBqb2luU2luZ2xlVGFzayh0YXNrT3JUYXNrcywgY2IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFNpbmdsZVRhc2sodGFza1RvQ2FuY2VsKSB7XG4gIGlmICh0YXNrVG9DYW5jZWwuaXNSdW5uaW5nKCkpIHtcbiAgICB0YXNrVG9DYW5jZWwuY2FuY2VsKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuQ2FuY2VsRWZmZWN0KGVudiwgdGFza09yVGFza3MsIGNiLCBfcmVmMTApIHtcbiAgdmFyIHRhc2sgPSBfcmVmMTAudGFzaztcblxuICBpZiAodGFza09yVGFza3MgPT09IFNFTEZfQ0FOQ0VMTEFUSU9OKSB7XG4gICAgY2FuY2VsU2luZ2xlVGFzayh0YXNrKTtcbiAgfSBlbHNlIGlmIChhcnJheSQxKHRhc2tPclRhc2tzKSkge1xuICAgIHRhc2tPclRhc2tzLmZvckVhY2goY2FuY2VsU2luZ2xlVGFzayk7XG4gIH0gZWxzZSB7XG4gICAgY2FuY2VsU2luZ2xlVGFzayh0YXNrT3JUYXNrcyk7XG4gIH1cblxuICBjYigpOyAvLyBjYW5jZWwgZWZmZWN0cyBhcmUgbm9uIGNhbmNlbGxhYmxlc1xufVxuXG5mdW5jdGlvbiBydW5BbGxFZmZlY3QoZW52LCBlZmZlY3RzLCBjYiwgX3JlZjExKSB7XG4gIHZhciBkaWdlc3RFZmZlY3QgPSBfcmVmMTEuZGlnZXN0RWZmZWN0O1xuICB2YXIgZWZmZWN0SWQgPSBjdXJyZW50O1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVmZmVjdHMpO1xuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNiKGFycmF5JDEoZWZmZWN0cykgPyBbXSA6IHt9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2hpbGRDYWxsYmFja3MgPSBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzKGVmZmVjdHMsIGNiKTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkaWdlc3RFZmZlY3QoZWZmZWN0c1trZXldLCBlZmZlY3RJZCwgY2hpbGRDYWxsYmFja3Nba2V5XSwga2V5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJ1blJhY2VFZmZlY3QoZW52LCBlZmZlY3RzLCBjYiwgX3JlZjEyKSB7XG4gIHZhciBkaWdlc3RFZmZlY3QgPSBfcmVmMTIuZGlnZXN0RWZmZWN0O1xuICB2YXIgZWZmZWN0SWQgPSBjdXJyZW50O1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVmZmVjdHMpO1xuICB2YXIgcmVzcG9uc2UgPSBhcnJheSQxKGVmZmVjdHMpID8gY3JlYXRlRW1wdHlBcnJheShrZXlzLmxlbmd0aCkgOiB7fTtcbiAgdmFyIGNoaWxkQ2JzID0ge307XG4gIHZhciBjb21wbGV0ZWQgPSBmYWxzZTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hDYkF0S2V5ID0gZnVuY3Rpb24gY2hDYkF0S2V5KHJlcywgaXNFcnIpIHtcbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNFcnIgfHwgc2hvdWxkQ29tcGxldGUocmVzKSkge1xuICAgICAgICAvLyBSYWNlIEF1dG8gY2FuY2VsbGF0aW9uXG4gICAgICAgIGNiLmNhbmNlbCgpO1xuICAgICAgICBjYihyZXMsIGlzRXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiLmNhbmNlbCgpO1xuICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICByZXNwb25zZVtrZXldID0gcmVzO1xuICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoQ2JBdEtleS5jYW5jZWwgPSBub29wO1xuICAgIGNoaWxkQ2JzW2tleV0gPSBjaENiQXRLZXk7XG4gIH0pO1xuXG4gIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBwcmV2ZW50cyB1bm5lY2Vzc2FyeSBjYW5jZWxsYXRpb25cbiAgICBpZiAoIWNvbXBsZXRlZCkge1xuICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBjaGlsZENic1trZXldLmNhbmNlbCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpZ2VzdEVmZmVjdChlZmZlY3RzW2tleV0sIGVmZmVjdElkLCBjaGlsZENic1trZXldLCBrZXkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcnVuU2VsZWN0RWZmZWN0KGVudiwgX3JlZjEzLCBjYikge1xuICB2YXIgc2VsZWN0b3IgPSBfcmVmMTMuc2VsZWN0b3IsXG4gICAgICBhcmdzID0gX3JlZjEzLmFyZ3M7XG5cbiAgdHJ5IHtcbiAgICB2YXIgc3RhdGUgPSBzZWxlY3Rvci5hcHBseSh2b2lkIDAsIFtlbnYuZ2V0U3RhdGUoKV0uY29uY2F0KGFyZ3MpKTtcbiAgICBjYihzdGF0ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2IoZXJyb3IsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkNoYW5uZWxFZmZlY3QoZW52LCBfcmVmMTQsIGNiKSB7XG4gIHZhciBwYXR0ZXJuID0gX3JlZjE0LnBhdHRlcm4sXG4gICAgICBidWZmZXIgPSBfcmVmMTQuYnVmZmVyO1xuICB2YXIgY2hhbiA9IGNoYW5uZWwoYnVmZmVyKTtcbiAgdmFyIG1hdGNoID0gbWF0Y2hlcihwYXR0ZXJuKTtcblxuICB2YXIgdGFrZXIgPSBmdW5jdGlvbiB0YWtlcihhY3Rpb24pIHtcbiAgICBpZiAoIWlzRW5kKGFjdGlvbikpIHtcbiAgICAgIGVudi5jaGFubmVsLnRha2UodGFrZXIsIG1hdGNoKTtcbiAgICB9XG5cbiAgICBjaGFuLnB1dChhY3Rpb24pO1xuICB9O1xuXG4gIHZhciBjbG9zZSA9IGNoYW4uY2xvc2U7XG5cbiAgY2hhbi5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0YWtlci5jYW5jZWwoKTtcbiAgICBjbG9zZSgpO1xuICB9O1xuXG4gIGVudi5jaGFubmVsLnRha2UodGFrZXIsIG1hdGNoKTtcbiAgY2IoY2hhbik7XG59XG5cbmZ1bmN0aW9uIHJ1bkNhbmNlbGxlZEVmZmVjdChlbnYsIGRhdGEsIGNiLCBfcmVmMTUpIHtcbiAgdmFyIHRhc2sgPSBfcmVmMTUudGFzaztcbiAgY2IodGFzay5pc0NhbmNlbGxlZCgpKTtcbn1cblxuZnVuY3Rpb24gcnVuRmx1c2hFZmZlY3QoZW52LCBjaGFubmVsLCBjYikge1xuICBjaGFubmVsLmZsdXNoKGNiKTtcbn1cblxuZnVuY3Rpb24gcnVuR2V0Q29udGV4dEVmZmVjdChlbnYsIHByb3AsIGNiLCBfcmVmMTYpIHtcbiAgdmFyIHRhc2sgPSBfcmVmMTYudGFzaztcbiAgY2IodGFzay5jb250ZXh0W3Byb3BdKTtcbn1cblxuZnVuY3Rpb24gcnVuU2V0Q29udGV4dEVmZmVjdChlbnYsIHByb3BzLCBjYiwgX3JlZjE3KSB7XG4gIHZhciB0YXNrID0gX3JlZjE3LnRhc2s7XG4gIGFzc2lnbldpdGhTeW1ib2xzKHRhc2suY29udGV4dCwgcHJvcHMpO1xuICBjYigpO1xufVxuXG52YXIgZWZmZWN0UnVubmVyTWFwID0gKF9lZmZlY3RSdW5uZXJNYXAgPSB7fSwgX2VmZmVjdFJ1bm5lck1hcFtUQUtFXSA9IHJ1blRha2VFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbUFVUXSA9IHJ1blB1dEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtBTExdID0gcnVuQWxsRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW1JBQ0VdID0gcnVuUmFjZUVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtDQUxMXSA9IHJ1bkNhbGxFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbQ1BTXSA9IHJ1bkNQU0VmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtGT1JLXSA9IHJ1bkZvcmtFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbSk9JTl0gPSBydW5Kb2luRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0NBTkNFTCQxXSA9IHJ1bkNhbmNlbEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtTRUxFQ1RdID0gcnVuU2VsZWN0RWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0FDVElPTl9DSEFOTkVMXSA9IHJ1bkNoYW5uZWxFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbQ0FOQ0VMTEVEJDFdID0gcnVuQ2FuY2VsbGVkRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0ZMVVNIXSA9IHJ1bkZsdXNoRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0dFVF9DT05URVhUXSA9IHJ1bkdldENvbnRleHRFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbU0VUX0NPTlRFWFRdID0gcnVuU2V0Q29udGV4dEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcCk7XG5cbi8qKlxuIFVzZWQgdG8gdHJhY2sgYSBwYXJlbnQgdGFzayBhbmQgaXRzIGZvcmtzXG4gSW4gdGhlIGZvcmsgbW9kZWwsIGZvcmtlZCB0YXNrcyBhcmUgYXR0YWNoZWQgYnkgZGVmYXVsdCB0byB0aGVpciBwYXJlbnRcbiBXZSBtb2RlbCB0aGlzIHVzaW5nIHRoZSBjb25jZXB0IG9mIFBhcmVudCB0YXNrICYmIG1haW4gVGFza1xuIG1haW4gdGFzayBpcyB0aGUgbWFpbiBmbG93IG9mIHRoZSBjdXJyZW50IEdlbmVyYXRvciwgdGhlIHBhcmVudCB0YXNrcyBpcyB0aGVcbiBhZ2dyZWdhdGlvbiBvZiB0aGUgbWFpbiB0YXNrcyArIGFsbCBpdHMgZm9ya2VkIHRhc2tzLlxuIFRodXMgdGhlIHdob2xlIG1vZGVsIHJlcHJlc2VudHMgYW4gZXhlY3V0aW9uIHRyZWUgd2l0aCBtdWx0aXBsZSBicmFuY2hlcyAodnMgdGhlXG4gbGluZWFyIGV4ZWN1dGlvbiB0cmVlIGluIHNlcXVlbnRpYWwgKG5vbiBwYXJhbGxlbCkgcHJvZ3JhbW1pbmcpXG5cbiBBIHBhcmVudCB0YXNrcyBoYXMgdGhlIGZvbGxvd2luZyBzZW1hbnRpY3NcbiAtIEl0IGNvbXBsZXRlcyBpZiBhbGwgaXRzIGZvcmtzIGVpdGhlciBjb21wbGV0ZSBvciBhbGwgY2FuY2VsbGVkXG4gLSBJZiBpdCdzIGNhbmNlbGxlZCwgYWxsIGZvcmtzIGFyZSBjYW5jZWxsZWQgYXMgd2VsbFxuIC0gSXQgYWJvcnRzIGlmIGFueSB1bmNhdWdodCBlcnJvciBidWJibGVzIHVwIGZyb20gZm9ya3NcbiAtIElmIGl0IGNvbXBsZXRlcywgdGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgb25lIHJldHVybmVkIGJ5IHRoZSBtYWluIHRhc2tcbiAqKi9cblxuZnVuY3Rpb24gZm9ya1F1ZXVlKG1haW5UYXNrLCBvbkFib3J0LCBjb250KSB7XG4gIHZhciB0YXNrcyA9IFtdO1xuICB2YXIgcmVzdWx0O1xuICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gIGFkZFRhc2sobWFpblRhc2spO1xuXG4gIHZhciBnZXRUYXNrcyA9IGZ1bmN0aW9uIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrcztcbiAgfTtcblxuICBmdW5jdGlvbiBhYm9ydChlcnIpIHtcbiAgICBvbkFib3J0KCk7XG4gICAgY2FuY2VsQWxsKCk7XG4gICAgY29udChlcnIsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcblxuICAgIHRhc2suY29udCA9IGZ1bmN0aW9uIChyZXMsIGlzRXJyKSB7XG4gICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVtb3ZlKHRhc2tzLCB0YXNrKTtcbiAgICAgIHRhc2suY29udCA9IG5vb3A7XG5cbiAgICAgIGlmIChpc0Vycikge1xuICAgICAgICBhYm9ydChyZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRhc2sgPT09IG1haW5UYXNrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XG4gICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGFza3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5jb250ID0gbm9vcDtcbiAgICAgIHQuY2FuY2VsKCk7XG4gICAgfSk7XG4gICAgdGFza3MgPSBbXTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkVGFzazogYWRkVGFzayxcbiAgICBjYW5jZWxBbGw6IGNhbmNlbEFsbCxcbiAgICBhYm9ydDogYWJvcnQsXG4gICAgZ2V0VGFza3M6IGdldFRhc2tzXG4gIH07XG59XG5cbi8vIHRoZXJlIGNhbiBiZSBvbmx5IGEgc2luZ2xlIHNhZ2EgZXJyb3IgY3JlYXRlZCBhdCBhbnkgZ2l2ZW4gbW9tZW50XG5cbmZ1bmN0aW9uIGZvcm1hdExvY2F0aW9uKGZpbGVOYW1lLCBsaW5lTnVtYmVyKSB7XG4gIHJldHVybiBmaWxlTmFtZSArIFwiP1wiICsgbGluZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gZWZmZWN0TG9jYXRpb25Bc1N0cmluZyhlZmZlY3QpIHtcbiAgdmFyIGxvY2F0aW9uID0gZ2V0TG9jYXRpb24oZWZmZWN0KTtcblxuICBpZiAobG9jYXRpb24pIHtcbiAgICB2YXIgY29kZSA9IGxvY2F0aW9uLmNvZGUsXG4gICAgICAgIGZpbGVOYW1lID0gbG9jYXRpb24uZmlsZU5hbWUsXG4gICAgICAgIGxpbmVOdW1iZXIgPSBsb2NhdGlvbi5saW5lTnVtYmVyO1xuICAgIHZhciBzb3VyY2UgPSBjb2RlICsgXCIgIFwiICsgZm9ybWF0TG9jYXRpb24oZmlsZU5hbWUsIGxpbmVOdW1iZXIpO1xuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHNhZ2FMb2NhdGlvbkFzU3RyaW5nKHNhZ2FNZXRhKSB7XG4gIHZhciBuYW1lID0gc2FnYU1ldGEubmFtZSxcbiAgICAgIGxvY2F0aW9uID0gc2FnYU1ldGEubG9jYXRpb247XG5cbiAgaWYgKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIG5hbWUgKyBcIiAgXCIgKyBmb3JtYXRMb2NhdGlvbihsb2NhdGlvbi5maWxlTmFtZSwgbG9jYXRpb24ubGluZU51bWJlcik7XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsbGVkVGFza3NBc1N0cmluZyhzYWdhU3RhY2spIHtcbiAgdmFyIGNhbmNlbGxlZFRhc2tzID0gZmxhdE1hcChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpLmNhbmNlbGxlZFRhc2tzO1xuICB9LCBzYWdhU3RhY2spO1xuXG4gIGlmICghY2FuY2VsbGVkVGFza3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIFsnVGFza3MgY2FuY2VsbGVkIGR1ZSB0byBlcnJvcjonXS5jb25jYXQoY2FuY2VsbGVkVGFza3MpLmpvaW4oJ1xcbicpO1xufVxuXG52YXIgY3Jhc2hlZEVmZmVjdCA9IG51bGw7XG52YXIgc2FnYVN0YWNrID0gW107XG52YXIgYWRkU2FnYUZyYW1lID0gZnVuY3Rpb24gYWRkU2FnYUZyYW1lKGZyYW1lKSB7XG4gIGZyYW1lLmNyYXNoZWRFZmZlY3QgPSBjcmFzaGVkRWZmZWN0O1xuICBzYWdhU3RhY2sucHVzaChmcmFtZSk7XG59O1xudmFyIGNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGNyYXNoZWRFZmZlY3QgPSBudWxsO1xuICBzYWdhU3RhY2subGVuZ3RoID0gMDtcbn07IC8vIHRoaXMgc2V0cyBjcmFzaGVkIGVmZmVjdCBmb3IgdGhlIHNvb24tdG8tYmUtcmVwb3J0ZWQgc2FnYSBmcmFtZVxuLy8gdGhpcyBzbGlnaHRseSBzdHJlYXRjaGVzIHRoZSBzaW5nbGV0b24gbmF0dXJlIG9mIHRoaXMgbW9kdWxlIGludG8gd3JvbmcgZGlyZWN0aW9uXG4vLyBhcyBpdCdzIGV2ZW4gbGVzcyBvYnZpb3VzIHdoYXQncyB0aGUgZGF0YSBmbG93IGhlcmUsIGJ1dCBpdCBpcyB3aGF0IGl0IGlzIGZvciBub3dcblxudmFyIHNldENyYXNoZWRFZmZlY3QgPSBmdW5jdGlvbiBzZXRDcmFzaGVkRWZmZWN0KGVmZmVjdCkge1xuICBjcmFzaGVkRWZmZWN0ID0gZWZmZWN0O1xufTtcbi8qKlxuICBAcmV0dXJucyB7c3RyaW5nfVxuXG4gIEBleGFtcGxlXG4gIFRoZSBhYm92ZSBlcnJvciBvY2N1cnJlZCBpbiB0YXNrIGVycm9ySW5QdXRTYWdhIHtwYXRoVG9GaWxlfVxuICB3aGVuIGV4ZWN1dGluZyBlZmZlY3QgcHV0KHt0eXBlOiAnUkVEVUNFUl9BQ1RJT05fRVJST1JfSU5fUFVUJ30pIHtwYXRoVG9GaWxlfVxuICAgICAgY3JlYXRlZCBieSBmZXRjaFNhZ2Ege3BhdGhUb0ZpbGV9XG4gICAgICBjcmVhdGVkIGJ5IHJvb3RTYWdhIHtwYXRoVG9GaWxlfVxuKi9cblxudmFyIHRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHZhciBmaXJzdFNhZ2EgPSBzYWdhU3RhY2tbMF0sXG4gICAgICBvdGhlclNhZ2FzID0gc2FnYVN0YWNrLnNsaWNlKDEpO1xuICB2YXIgY3Jhc2hlZEVmZmVjdExvY2F0aW9uID0gZmlyc3RTYWdhLmNyYXNoZWRFZmZlY3QgPyBlZmZlY3RMb2NhdGlvbkFzU3RyaW5nKGZpcnN0U2FnYS5jcmFzaGVkRWZmZWN0KSA6IG51bGw7XG4gIHZhciBlcnJvck1lc3NhZ2UgPSBcIlRoZSBhYm92ZSBlcnJvciBvY2N1cnJlZCBpbiB0YXNrIFwiICsgc2FnYUxvY2F0aW9uQXNTdHJpbmcoZmlyc3RTYWdhLm1ldGEpICsgKGNyYXNoZWRFZmZlY3RMb2NhdGlvbiA/IFwiIFxcbiB3aGVuIGV4ZWN1dGluZyBlZmZlY3QgXCIgKyBjcmFzaGVkRWZmZWN0TG9jYXRpb24gOiAnJyk7XG4gIHJldHVybiBbZXJyb3JNZXNzYWdlXS5jb25jYXQob3RoZXJTYWdhcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gXCIgICAgY3JlYXRlZCBieSBcIiArIHNhZ2FMb2NhdGlvbkFzU3RyaW5nKHMubWV0YSk7XG4gIH0pLCBbY2FuY2VsbGVkVGFza3NBc1N0cmluZyhzYWdhU3RhY2spXSkuam9pbignXFxuJyk7XG59O1xuXG5mdW5jdGlvbiBuZXdUYXNrKGVudiwgbWFpblRhc2ssIHBhcmVudENvbnRleHQsIHBhcmVudEVmZmVjdElkLCBtZXRhLCBpc1Jvb3QsIGNvbnQpIHtcbiAgdmFyIF90YXNrO1xuXG4gIGlmIChjb250ID09PSB2b2lkIDApIHtcbiAgICBjb250ID0gbm9vcDtcbiAgfVxuXG4gIHZhciBzdGF0dXMgPSBSVU5OSU5HO1xuICB2YXIgdGFza1Jlc3VsdDtcbiAgdmFyIHRhc2tFcnJvcjtcbiAgdmFyIGRlZmVycmVkRW5kID0gbnVsbDtcbiAgdmFyIGNhbmNlbGxlZER1ZVRvRXJyb3JUYXNrcyA9IFtdO1xuICB2YXIgY29udGV4dCA9IE9iamVjdC5jcmVhdGUocGFyZW50Q29udGV4dCk7XG4gIHZhciBxdWV1ZSA9IGZvcmtRdWV1ZShtYWluVGFzaywgZnVuY3Rpb24gb25BYm9ydCgpIHtcbiAgICBjYW5jZWxsZWREdWVUb0Vycm9yVGFza3MucHVzaC5hcHBseShjYW5jZWxsZWREdWVUb0Vycm9yVGFza3MsIHF1ZXVlLmdldFRhc2tzKCkubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5tZXRhLm5hbWU7XG4gICAgfSkpO1xuICB9LCBlbmQpO1xuICAvKipcbiAgIFRoaXMgbWF5IGJlIGNhbGxlZCBieSBhIHBhcmVudCBnZW5lcmF0b3IgdG8gdHJpZ2dlci9wcm9wYWdhdGUgY2FuY2VsbGF0aW9uXG4gICBjYW5jZWwgYWxsIHBlbmRpbmcgdGFza3MgKGluY2x1ZGluZyB0aGUgbWFpbiB0YXNrKSwgdGhlbiBlbmQgdGhlIGN1cnJlbnQgdGFzay5cbiAgICBDYW5jZWxsYXRpb24gcHJvcGFnYXRlcyBkb3duIHRvIHRoZSB3aG9sZSBleGVjdXRpb24gdHJlZSBoZWxkIGJ5IHRoaXMgUGFyZW50IHRhc2tcbiAgIEl0J3MgYWxzbyBwcm9wYWdhdGVkIHRvIGFsbCBqb2luZXJzIG9mIHRoaXMgdGFzayBhbmQgdGhlaXIgZXhlY3V0aW9uIHRyZWUvam9pbmVyc1xuICAgIENhbmNlbGxhdGlvbiBpcyBub29wIGZvciB0ZXJtaW5hdGVkL0NhbmNlbGxlZCB0YXNrcyB0YXNrc1xuICAgKiovXG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmIChzdGF0dXMgPT09IFJVTk5JTkcpIHtcbiAgICAgIC8vIFNldHRpbmcgc3RhdHVzIHRvIENBTkNFTExFRCBkb2VzIG5vdCBuZWNlc3NhcmlseSBtZWFuIHRoYXQgdGhlIHRhc2svaXRlcmF0b3JzIGFyZSBzdG9wcGVkXG4gICAgICAvLyBlZmZlY3RzIGluIHRoZSBpdGVyYXRvcidzIGZpbmFsbHkgYmxvY2sgd2lsbCBzdGlsbCBiZSBleGVjdXRlZFxuICAgICAgc3RhdHVzID0gQ0FOQ0VMTEVEO1xuICAgICAgcXVldWUuY2FuY2VsQWxsKCk7IC8vIEVuZGluZyB3aXRoIGEgVEFTS19DQU5DRUwgd2lsbCBwcm9wYWdhdGUgdGhlIENhbmNlbGxhdGlvbiB0byBhbGwgam9pbmVyc1xuXG4gICAgICBlbmQoVEFTS19DQU5DRUwsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmQocmVzdWx0LCBpc0Vycikge1xuICAgIGlmICghaXNFcnIpIHtcbiAgICAgIC8vIFRoZSBzdGF0dXMgaGVyZSBtYXkgYmUgUlVOTklORyBvciBDQU5DRUxMRURcbiAgICAgIC8vIElmIHRoZSBzdGF0dXMgaXMgQ0FOQ0VMTEVELCB0aGVuIHdlIGRvIG5vdCBuZWVkIHRvIGNoYW5nZSBpdCBoZXJlXG4gICAgICBpZiAocmVzdWx0ID09PSBUQVNLX0NBTkNFTCkge1xuICAgICAgICBzdGF0dXMgPSBDQU5DRUxMRUQ7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyAhPT0gQ0FOQ0VMTEVEKSB7XG4gICAgICAgIHN0YXR1cyA9IERPTkU7XG4gICAgICB9XG5cbiAgICAgIHRhc2tSZXN1bHQgPSByZXN1bHQ7XG4gICAgICBkZWZlcnJlZEVuZCAmJiBkZWZlcnJlZEVuZC5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXR1cyA9IEFCT1JURUQ7XG4gICAgICBhZGRTYWdhRnJhbWUoe1xuICAgICAgICBtZXRhOiBtZXRhLFxuICAgICAgICBjYW5jZWxsZWRUYXNrczogY2FuY2VsbGVkRHVlVG9FcnJvclRhc2tzXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRhc2suaXNSb290KSB7XG4gICAgICAgIHZhciBzYWdhU3RhY2sgPSB0b1N0cmluZygpOyAvLyB3ZSd2ZSBkdW1wZWQgdGhlIHNhZ2Egc3RhY2sgdG8gc3RyaW5nIGFuZCBhcmUgcGFzc2luZyBpdCB0byB1c2VyJ3MgY29kZVxuICAgICAgICAvLyB3ZSBrbm93IHRoYXQgaXQgd29uJ3QgYmUgbmVlZGVkIGFueW1vcmUgYW5kIHdlIG5lZWQgdG8gY2xlYXIgaXRcblxuICAgICAgICBjbGVhcigpO1xuICAgICAgICBlbnYub25FcnJvcihyZXN1bHQsIHtcbiAgICAgICAgICBzYWdhU3RhY2s6IHNhZ2FTdGFja1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGFza0Vycm9yID0gcmVzdWx0O1xuICAgICAgZGVmZXJyZWRFbmQgJiYgZGVmZXJyZWRFbmQucmVqZWN0KHJlc3VsdCk7XG4gICAgfVxuXG4gICAgdGFzay5jb250KHJlc3VsdCwgaXNFcnIpO1xuICAgIHRhc2suam9pbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChqb2luZXIpIHtcbiAgICAgIGpvaW5lci5jYihyZXN1bHQsIGlzRXJyKTtcbiAgICB9KTtcbiAgICB0YXNrLmpvaW5lcnMgPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q29udGV4dChwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVjayhwcm9wcywgb2JqZWN0LCBjcmVhdGVTZXRDb250ZXh0V2FybmluZygndGFzaycsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgYXNzaWduV2l0aFN5bWJvbHMoY29udGV4dCwgcHJvcHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9Qcm9taXNlKCkge1xuICAgIGlmIChkZWZlcnJlZEVuZCkge1xuICAgICAgcmV0dXJuIGRlZmVycmVkRW5kLnByb21pc2U7XG4gICAgfVxuXG4gICAgZGVmZXJyZWRFbmQgPSBkZWZlcnJlZCgpO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gQUJPUlRFRCkge1xuICAgICAgZGVmZXJyZWRFbmQucmVqZWN0KHRhc2tFcnJvcik7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgIT09IFJVTk5JTkcpIHtcbiAgICAgIGRlZmVycmVkRW5kLnJlc29sdmUodGFza1Jlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmVycmVkRW5kLnByb21pc2U7XG4gIH1cblxuICB2YXIgdGFzayA9IChfdGFzayA9IHt9LCBfdGFza1tUQVNLXSA9IHRydWUsIF90YXNrLmlkID0gcGFyZW50RWZmZWN0SWQsIF90YXNrLm1ldGEgPSBtZXRhLCBfdGFzay5pc1Jvb3QgPSBpc1Jvb3QsIF90YXNrLmNvbnRleHQgPSBjb250ZXh0LCBfdGFzay5qb2luZXJzID0gW10sIF90YXNrLnF1ZXVlID0gcXVldWUsIF90YXNrLmNhbmNlbCA9IGNhbmNlbCwgX3Rhc2suY29udCA9IGNvbnQsIF90YXNrLmVuZCA9IGVuZCwgX3Rhc2suc2V0Q29udGV4dCA9IHNldENvbnRleHQsIF90YXNrLnRvUHJvbWlzZSA9IHRvUHJvbWlzZSwgX3Rhc2suaXNSdW5uaW5nID0gZnVuY3Rpb24gaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiBzdGF0dXMgPT09IFJVTk5JTkc7XG4gIH0sIF90YXNrLmlzQ2FuY2VsbGVkID0gZnVuY3Rpb24gaXNDYW5jZWxsZWQoKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA9PT0gQ0FOQ0VMTEVEIHx8IHN0YXR1cyA9PT0gUlVOTklORyAmJiBtYWluVGFzay5zdGF0dXMgPT09IENBTkNFTExFRDtcbiAgfSwgX3Rhc2suaXNBYm9ydGVkID0gZnVuY3Rpb24gaXNBYm9ydGVkKCkge1xuICAgIHJldHVybiBzdGF0dXMgPT09IEFCT1JURUQ7XG4gIH0sIF90YXNrLnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGFza1Jlc3VsdDtcbiAgfSwgX3Rhc2suZXJyb3IgPSBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICByZXR1cm4gdGFza0Vycm9yO1xuICB9LCBfdGFzayk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBwcm9jKGVudiwgaXRlcmF0b3IkMSwgcGFyZW50Q29udGV4dCwgcGFyZW50RWZmZWN0SWQsIG1ldGEsIGlzUm9vdCwgY29udCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpdGVyYXRvciQxW2FzeW5jSXRlcmF0b3JTeW1ib2xdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwicmVkdXgtc2FnYSBkb2Vzbid0IHN1cHBvcnQgYXN5bmMgZ2VuZXJhdG9ycywgcGxlYXNlIHVzZSBvbmx5IHJlZ3VsYXIgb25lc1wiKTtcbiAgfVxuXG4gIHZhciBmaW5hbFJ1bkVmZmVjdCA9IGVudi5maW5hbGl6ZVJ1bkVmZmVjdChydW5FZmZlY3QpO1xuICAvKipcbiAgICBUcmFja3MgdGhlIGN1cnJlbnQgZWZmZWN0IGNhbmNlbGxhdGlvblxuICAgIEVhY2ggdGltZSB0aGUgZ2VuZXJhdG9yIHByb2dyZXNzZXMuIGNhbGxpbmcgcnVuRWZmZWN0IHdpbGwgc2V0IGEgbmV3IHZhbHVlXG4gICAgb24gaXQuIEl0IGFsbG93cyBwcm9wYWdhdGluZyBjYW5jZWxsYXRpb24gdG8gY2hpbGQgZWZmZWN0c1xuICAqKi9cblxuICBuZXh0LmNhbmNlbCA9IG5vb3A7XG4gIC8qKiBDcmVhdGVzIGEgbWFpbiB0YXNrIHRvIHRyYWNrIHRoZSBtYWluIGZsb3cgKi9cblxuICB2YXIgbWFpblRhc2sgPSB7XG4gICAgbWV0YTogbWV0YSxcbiAgICBjYW5jZWw6IGNhbmNlbE1haW4sXG4gICAgc3RhdHVzOiBSVU5OSU5HXG4gIH07XG4gIC8qKlxuICAgQ3JlYXRlcyBhIG5ldyB0YXNrIGRlc2NyaXB0b3IgZm9yIHRoaXMgZ2VuZXJhdG9yLlxuICAgQSB0YXNrIGlzIHRoZSBhZ2dyZWdhdGlvbiBvZiBpdCdzIG1haW5UYXNrIGFuZCBhbGwgaXQncyBmb3JrZWQgdGFza3MuXG4gICAqKi9cblxuICB2YXIgdGFzayA9IG5ld1Rhc2soZW52LCBtYWluVGFzaywgcGFyZW50Q29udGV4dCwgcGFyZW50RWZmZWN0SWQsIG1ldGEsIGlzUm9vdCwgY29udCk7XG4gIHZhciBleGVjdXRpbmdDb250ZXh0ID0ge1xuICAgIHRhc2s6IHRhc2ssXG4gICAgZGlnZXN0RWZmZWN0OiBkaWdlc3RFZmZlY3RcbiAgfTtcbiAgLyoqXG4gICAgY2FuY2VsbGF0aW9uIG9mIHRoZSBtYWluIHRhc2suIFdlJ2xsIHNpbXBseSByZXN1bWUgdGhlIEdlbmVyYXRvciB3aXRoIGEgVEFTS19DQU5DRUxcbiAgKiovXG5cbiAgZnVuY3Rpb24gY2FuY2VsTWFpbigpIHtcbiAgICBpZiAobWFpblRhc2suc3RhdHVzID09PSBSVU5OSU5HKSB7XG4gICAgICBtYWluVGFzay5zdGF0dXMgPSBDQU5DRUxMRUQ7XG4gICAgICBuZXh0KFRBU0tfQ0FOQ0VMKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAgYXR0YWNoZXMgY2FuY2VsbGF0aW9uIGxvZ2ljIHRvIHRoaXMgdGFzaydzIGNvbnRpbnVhdGlvblxuICAgIHRoaXMgd2lsbCBwZXJtaXQgY2FuY2VsbGF0aW9uIHRvIHByb3BhZ2F0ZSBkb3duIHRoZSBjYWxsIGNoYWluXG4gICoqL1xuXG5cbiAgaWYgKGNvbnQpIHtcbiAgICBjb250LmNhbmNlbCA9IHRhc2suY2FuY2VsO1xuICB9IC8vIGtpY2tzIHVwIHRoZSBnZW5lcmF0b3JcblxuXG4gIG5leHQoKTsgLy8gdGhlbiByZXR1cm4gdGhlIHRhc2sgZGVzY3JpcHRvciB0byB0aGUgY2FsbGVyXG5cbiAgcmV0dXJuIHRhc2s7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBnZW5lcmF0b3IgZHJpdmVyXG4gICAqIEl0J3MgYSByZWN1cnNpdmUgYXN5bmMvY29udGludWF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNhbGxzIGl0c2VsZlxuICAgKiB1bnRpbCB0aGUgZ2VuZXJhdG9yIHRlcm1pbmF0ZXMgb3IgdGhyb3dzXG4gICAqIEBwYXJhbSB7aW50ZXJuYWwgY29tbWFuZHMoVEFTS19DQU5DRUwgfCBURVJNSU5BVEUpIHwgYW55fSBhcmcgLSB2YWx1ZSwgZ2VuZXJhdG9yIHdpbGwgYmUgcmVzdW1lZCB3aXRoLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRXJyIC0gdGhlIGZsYWcgc2hvd3MgaWYgZWZmZWN0IGZpbmlzaGVkIHdpdGggYW4gZXJyb3JcbiAgICpcbiAgICogcmVjZWl2ZXMgZWl0aGVyIChjb21tYW5kIHwgZWZmZWN0IHJlc3VsdCwgZmFsc2UpIG9yIChhbnkgdGhyb3duIHRoaW5nLCB0cnVlKVxuICAgKi9cblxuICBmdW5jdGlvbiBuZXh0KGFyZywgaXNFcnIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgaWYgKGlzRXJyKSB7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yJDEudGhyb3coYXJnKTsgLy8gdXNlciBoYW5kbGVkIHRoZSBlcnJvciwgd2UgY2FuIGNsZWFyIGJvb2trZXB0IHZhbHVlc1xuXG4gICAgICAgIGNsZWFyKCk7XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZENhbmNlbChhcmcpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgIGdldHRpbmcgVEFTS19DQU5DRUwgYXV0b21hdGljYWxseSBjYW5jZWxzIHRoZSBtYWluIHRhc2tcbiAgICAgICAgICBXZSBjYW4gZ2V0IHRoaXMgdmFsdWUgaGVyZVxuICAgICAgICAgICAtIEJ5IGNhbmNlbGxpbmcgdGhlIHBhcmVudCB0YXNrIG1hbnVhbGx5XG4gICAgICAgICAgLSBCeSBqb2luaW5nIGEgQ2FuY2VsbGVkIHRhc2tcbiAgICAgICAgKiovXG4gICAgICAgIG1haW5UYXNrLnN0YXR1cyA9IENBTkNFTExFRDtcbiAgICAgICAgLyoqXG4gICAgICAgICAgQ2FuY2VscyB0aGUgY3VycmVudCBlZmZlY3Q7IHRoaXMgd2lsbCBwcm9wYWdhdGUgdGhlIGNhbmNlbGxhdGlvbiBkb3duIHRvIGFueSBjYWxsZWQgdGFza3NcbiAgICAgICAgKiovXG5cbiAgICAgICAgbmV4dC5jYW5jZWwoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAgSWYgdGhpcyBHZW5lcmF0b3IgaGFzIGEgYHJldHVybmAgbWV0aG9kIHRoZW4gaW52b2tlcyBpdFxuICAgICAgICAgIFRoaXMgd2lsbCBqdW1wIHRvIHRoZSBmaW5hbGx5IGJsb2NrXG4gICAgICAgICoqL1xuXG4gICAgICAgIHJlc3VsdCA9IGZ1bmMoaXRlcmF0b3IkMS5yZXR1cm4pID8gaXRlcmF0b3IkMS5yZXR1cm4oVEFTS19DQU5DRUwpIDoge1xuICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IFRBU0tfQ0FOQ0VMXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZFRlcm1pbmF0ZShhcmcpKSB7XG4gICAgICAgIC8vIFdlIGdldCBURVJNSU5BVEUgZmxhZywgaS5lLiBieSB0YWtpbmcgZnJvbSBhIGNoYW5uZWwgdGhhdCBlbmRlZCB1c2luZyBgdGFrZWAgKGFuZCBub3QgYHRha2VtYCB1c2VkIHRvIHRyYXAgRW5kIG9mIGNoYW5uZWxzKVxuICAgICAgICByZXN1bHQgPSBmdW5jKGl0ZXJhdG9yJDEucmV0dXJuKSA/IGl0ZXJhdG9yJDEucmV0dXJuKCkgOiB7XG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IkMS5uZXh0KGFyZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgZGlnZXN0RWZmZWN0KHJlc3VsdC52YWx1ZSwgcGFyZW50RWZmZWN0SWQsIG5leHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAgVGhpcyBHZW5lcmF0b3IgaGFzIGVuZGVkLCB0ZXJtaW5hdGUgdGhlIG1haW4gdGFzayBhbmQgbm90aWZ5IHRoZSBmb3JrIHF1ZXVlXG4gICAgICAgICoqL1xuICAgICAgICBpZiAobWFpblRhc2suc3RhdHVzICE9PSBDQU5DRUxMRUQpIHtcbiAgICAgICAgICBtYWluVGFzay5zdGF0dXMgPSBET05FO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpblRhc2suY29udChyZXN1bHQudmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAobWFpblRhc2suc3RhdHVzID09PSBDQU5DRUxMRUQpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIG1haW5UYXNrLnN0YXR1cyA9IEFCT1JURUQ7XG4gICAgICBtYWluVGFzay5jb250KGVycm9yLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBydW5FZmZlY3QoZWZmZWN0LCBlZmZlY3RJZCwgY3VyckNiKSB7XG4gICAgLyoqXG4gICAgICBlYWNoIGVmZmVjdCBydW5uZXIgbXVzdCBhdHRhY2ggaXRzIG93biBsb2dpYyBvZiBjYW5jZWxsYXRpb24gdG8gdGhlIHByb3ZpZGVkIGNhbGxiYWNrXG4gICAgICBpdCBhbGxvd3MgdGhpcyBnZW5lcmF0b3IgdG8gcHJvcGFnYXRlIGNhbmNlbGxhdGlvbiBkb3dud2FyZC5cbiAgICAgICBBVFRFTlRJT04hIGVmZmVjdCBydW5uZXJzIG11c3Qgc2V0dXAgdGhlIGNhbmNlbCBsb2dpYyBieSBzZXR0aW5nIGNiLmNhbmNlbCA9IFtjYW5jZWxNZXRob2RdXG4gICAgICBBbmQgdGhlIHNldHVwIG11c3Qgb2NjdXIgYmVmb3JlIGNhbGxpbmcgdGhlIGNhbGxiYWNrXG4gICAgICAgVGhpcyBpcyBhIHNvcnQgb2YgaW52ZXJzaW9uIG9mIGNvbnRyb2w6IGNhbGxlZCBhc3luYyBmdW5jdGlvbnMgYXJlIHJlc3BvbnNpYmxlXG4gICAgICBvZiBjb21wbGV0aW5nIHRoZSBmbG93IGJ5IGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNvbnRpbnVhdGlvbjsgd2hpbGUgY2FsbGVyIGZ1bmN0aW9uc1xuICAgICAgYXJlIHJlc3BvbnNpYmxlIGZvciBhYm9ydGluZyB0aGUgY3VycmVudCBmbG93IGJ5IGNhbGxpbmcgdGhlIGF0dGFjaGVkIGNhbmNlbCBmdW5jdGlvblxuICAgICAgIExpYnJhcnkgdXNlcnMgY2FuIGF0dGFjaCB0aGVpciBvd24gY2FuY2VsbGF0aW9uIGxvZ2ljIHRvIHByb21pc2VzIGJ5IGRlZmluaW5nIGFcbiAgICAgIHByb21pc2VbQ0FOQ0VMXSBtZXRob2QgaW4gdGhlaXIgcmV0dXJuZWQgcHJvbWlzZXNcbiAgICAgIEFUVEVOVElPTiEgY2FsbGluZyBjYW5jZWwgbXVzdCBoYXZlIG5vIGVmZmVjdCBvbiBhbiBhbHJlYWR5IGNvbXBsZXRlZCBvciBjYW5jZWxsZWQgZWZmZWN0XG4gICAgKiovXG4gICAgaWYgKHByb21pc2UoZWZmZWN0KSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UoZWZmZWN0LCBjdXJyQ2IpO1xuICAgIH0gZWxzZSBpZiAoaXRlcmF0b3IoZWZmZWN0KSkge1xuICAgICAgLy8gcmVzb2x2ZSBpdGVyYXRvclxuICAgICAgcHJvYyhlbnYsIGVmZmVjdCwgdGFzay5jb250ZXh0LCBlZmZlY3RJZCwgbWV0YSxcbiAgICAgIC8qIGlzUm9vdCAqL1xuICAgICAgZmFsc2UsIGN1cnJDYik7XG4gICAgfSBlbHNlIGlmIChlZmZlY3QgJiYgZWZmZWN0W0lPXSkge1xuICAgICAgdmFyIGVmZmVjdFJ1bm5lciA9IGVmZmVjdFJ1bm5lck1hcFtlZmZlY3QudHlwZV07XG4gICAgICBlZmZlY3RSdW5uZXIoZW52LCBlZmZlY3QucGF5bG9hZCwgY3VyckNiLCBleGVjdXRpbmdDb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSByZXR1cm5lZCBhcyBpc1xuICAgICAgY3VyckNiKGVmZmVjdCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlnZXN0RWZmZWN0KGVmZmVjdCwgcGFyZW50RWZmZWN0SWQsIGNiLCBsYWJlbCkge1xuICAgIGlmIChsYWJlbCA9PT0gdm9pZCAwKSB7XG4gICAgICBsYWJlbCA9ICcnO1xuICAgIH1cblxuICAgIHZhciBlZmZlY3RJZCA9IG5leHRTYWdhSWQoKTtcbiAgICBlbnYuc2FnYU1vbml0b3IgJiYgZW52LnNhZ2FNb25pdG9yLmVmZmVjdFRyaWdnZXJlZCh7XG4gICAgICBlZmZlY3RJZDogZWZmZWN0SWQsXG4gICAgICBwYXJlbnRFZmZlY3RJZDogcGFyZW50RWZmZWN0SWQsXG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICBlZmZlY3Q6IGVmZmVjdFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAgY29tcGxldGlvbiBjYWxsYmFjayBhbmQgY2FuY2VsIGNhbGxiYWNrIGFyZSBtdXR1YWxseSBleGNsdXNpdmVcbiAgICAgIFdlIGNhbid0IGNhbmNlbCBhbiBhbHJlYWR5IGNvbXBsZXRlZCBlZmZlY3RcbiAgICAgIEFuZCBXZSBjYW4ndCBjb21wbGV0ZSBhbiBhbHJlYWR5IGNhbmNlbGxlZCBlZmZlY3RJZFxuICAgICoqL1xuXG4gICAgdmFyIGVmZmVjdFNldHRsZWQ7IC8vIENvbXBsZXRpb24gY2FsbGJhY2sgcGFzc2VkIHRvIHRoZSBhcHByb3ByaWF0ZSBlZmZlY3QgcnVubmVyXG5cbiAgICBmdW5jdGlvbiBjdXJyQ2IocmVzLCBpc0Vycikge1xuICAgICAgaWYgKGVmZmVjdFNldHRsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlZmZlY3RTZXR0bGVkID0gdHJ1ZTtcbiAgICAgIGNiLmNhbmNlbCA9IG5vb3A7IC8vIGRlZmVuc2l2ZSBtZWFzdXJlXG5cbiAgICAgIGlmIChlbnYuc2FnYU1vbml0b3IpIHtcbiAgICAgICAgaWYgKGlzRXJyKSB7XG4gICAgICAgICAgZW52LnNhZ2FNb25pdG9yLmVmZmVjdFJlamVjdGVkKGVmZmVjdElkLCByZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudi5zYWdhTW9uaXRvci5lZmZlY3RSZXNvbHZlZChlZmZlY3RJZCwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNFcnIpIHtcbiAgICAgICAgc2V0Q3Jhc2hlZEVmZmVjdChlZmZlY3QpO1xuICAgICAgfVxuXG4gICAgICBjYihyZXMsIGlzRXJyKTtcbiAgICB9IC8vIHRyYWNrcyBkb3duIHRoZSBjdXJyZW50IGNhbmNlbFxuXG5cbiAgICBjdXJyQ2IuY2FuY2VsID0gbm9vcDsgLy8gc2V0dXAgY2FuY2VsbGF0aW9uIGxvZ2ljIG9uIHRoZSBwYXJlbnQgY2JcblxuICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHByZXZlbnRzIGNhbmNlbGxpbmcgYW4gYWxyZWFkeSBjb21wbGV0ZWQgZWZmZWN0XG4gICAgICBpZiAoZWZmZWN0U2V0dGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVmZmVjdFNldHRsZWQgPSB0cnVlO1xuICAgICAgY3VyckNiLmNhbmNlbCgpOyAvLyBwcm9wYWdhdGVzIGNhbmNlbCBkb3dud2FyZFxuXG4gICAgICBjdXJyQ2IuY2FuY2VsID0gbm9vcDsgLy8gZGVmZW5zaXZlIG1lYXN1cmVcblxuICAgICAgZW52LnNhZ2FNb25pdG9yICYmIGVudi5zYWdhTW9uaXRvci5lZmZlY3RDYW5jZWxsZWQoZWZmZWN0SWQpO1xuICAgIH07XG5cbiAgICBmaW5hbFJ1bkVmZmVjdChlZmZlY3QsIGVmZmVjdElkLCBjdXJyQ2IpO1xuICB9XG59XG5cbnZhciBSVU5fU0FHQV9TSUdOQVRVUkUgPSAncnVuU2FnYShvcHRpb25zLCBzYWdhLCAuLi5hcmdzKSc7XG52YXIgTk9OX0dFTkVSQVRPUl9FUlIgPSBSVU5fU0FHQV9TSUdOQVRVUkUgKyBcIjogc2FnYSBhcmd1bWVudCBtdXN0IGJlIGEgR2VuZXJhdG9yIGZ1bmN0aW9uIVwiO1xuZnVuY3Rpb24gcnVuU2FnYShfcmVmLCBzYWdhKSB7XG4gIHZhciBfcmVmJGNoYW5uZWwgPSBfcmVmLmNoYW5uZWwsXG4gICAgICBjaGFubmVsID0gX3JlZiRjaGFubmVsID09PSB2b2lkIDAgPyBzdGRDaGFubmVsKCkgOiBfcmVmJGNoYW5uZWwsXG4gICAgICBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2gsXG4gICAgICBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGUsXG4gICAgICBfcmVmJGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgICBjb250ZXh0ID0gX3JlZiRjb250ZXh0ID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkY29udGV4dCxcbiAgICAgIHNhZ2FNb25pdG9yID0gX3JlZi5zYWdhTW9uaXRvcixcbiAgICAgIGVmZmVjdE1pZGRsZXdhcmVzID0gX3JlZi5lZmZlY3RNaWRkbGV3YXJlcyxcbiAgICAgIF9yZWYkb25FcnJvciA9IF9yZWYub25FcnJvcixcbiAgICAgIG9uRXJyb3IgPSBfcmVmJG9uRXJyb3IgPT09IHZvaWQgMCA/IGxvZ0Vycm9yIDogX3JlZiRvbkVycm9yO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soc2FnYSwgZnVuYywgTk9OX0dFTkVSQVRPUl9FUlIpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGl0ZXJhdG9yJDEgPSBzYWdhLmFwcGx5KHZvaWQgMCwgYXJncyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhpdGVyYXRvciQxLCBpdGVyYXRvciwgTk9OX0dFTkVSQVRPUl9FUlIpO1xuICB9XG5cbiAgdmFyIGVmZmVjdElkID0gbmV4dFNhZ2FJZCgpO1xuXG4gIGlmIChzYWdhTW9uaXRvcikge1xuICAgIC8vIG1vbml0b3JzIGFyZSBleHBlY3RlZCB0byBoYXZlIGEgY2VydGFpbiBpbnRlcmZhY2UsIGxldCdzIGZpbGwtaW4gYW55IG1pc3Npbmcgb25lc1xuICAgIHNhZ2FNb25pdG9yLnJvb3RTYWdhU3RhcnRlZCA9IHNhZ2FNb25pdG9yLnJvb3RTYWdhU3RhcnRlZCB8fCBub29wO1xuICAgIHNhZ2FNb25pdG9yLmVmZmVjdFRyaWdnZXJlZCA9IHNhZ2FNb25pdG9yLmVmZmVjdFRyaWdnZXJlZCB8fCBub29wO1xuICAgIHNhZ2FNb25pdG9yLmVmZmVjdFJlc29sdmVkID0gc2FnYU1vbml0b3IuZWZmZWN0UmVzb2x2ZWQgfHwgbm9vcDtcbiAgICBzYWdhTW9uaXRvci5lZmZlY3RSZWplY3RlZCA9IHNhZ2FNb25pdG9yLmVmZmVjdFJlamVjdGVkIHx8IG5vb3A7XG4gICAgc2FnYU1vbml0b3IuZWZmZWN0Q2FuY2VsbGVkID0gc2FnYU1vbml0b3IuZWZmZWN0Q2FuY2VsbGVkIHx8IG5vb3A7XG4gICAgc2FnYU1vbml0b3IuYWN0aW9uRGlzcGF0Y2hlZCA9IHNhZ2FNb25pdG9yLmFjdGlvbkRpc3BhdGNoZWQgfHwgbm9vcDtcbiAgICBzYWdhTW9uaXRvci5yb290U2FnYVN0YXJ0ZWQoe1xuICAgICAgZWZmZWN0SWQ6IGVmZmVjdElkLFxuICAgICAgc2FnYTogc2FnYSxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKG5vdFVuZGVmKGRpc3BhdGNoKSkge1xuICAgICAgY2hlY2soZGlzcGF0Y2gsIGZ1bmMsICdkaXNwYXRjaCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAobm90VW5kZWYoZ2V0U3RhdGUpKSB7XG4gICAgICBjaGVjayhnZXRTdGF0ZSwgZnVuYywgJ2dldFN0YXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChub3RVbmRlZihlZmZlY3RNaWRkbGV3YXJlcykpIHtcbiAgICAgIHZhciBNSURETEVXQVJFX1RZUEVfRVJST1IgPSAnZWZmZWN0TWlkZGxld2FyZXMgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnO1xuICAgICAgY2hlY2soZWZmZWN0TWlkZGxld2FyZXMsIGFycmF5JDEsIE1JRERMRVdBUkVfVFlQRV9FUlJPUik7XG4gICAgICBlZmZlY3RNaWRkbGV3YXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChlZmZlY3RNaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBjaGVjayhlZmZlY3RNaWRkbGV3YXJlLCBmdW5jLCBNSURETEVXQVJFX1RZUEVfRVJST1IpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2sob25FcnJvciwgZnVuYywgJ29uRXJyb3IgcGFzc2VkIHRvIHRoZSByZWR1eC1zYWdhIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICB9XG5cbiAgdmFyIGZpbmFsaXplUnVuRWZmZWN0O1xuXG4gIGlmIChlZmZlY3RNaWRkbGV3YXJlcykge1xuICAgIHZhciBtaWRkbGV3YXJlID0gY29tcG9zZS5hcHBseSh2b2lkIDAsIGVmZmVjdE1pZGRsZXdhcmVzKTtcblxuICAgIGZpbmFsaXplUnVuRWZmZWN0ID0gZnVuY3Rpb24gZmluYWxpemVSdW5FZmZlY3QocnVuRWZmZWN0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVmZmVjdCwgZWZmZWN0SWQsIGN1cnJDYikge1xuICAgICAgICB2YXIgcGxhaW5SdW5FZmZlY3QgPSBmdW5jdGlvbiBwbGFpblJ1bkVmZmVjdChlZmYpIHtcbiAgICAgICAgICByZXR1cm4gcnVuRWZmZWN0KGVmZiwgZWZmZWN0SWQsIGN1cnJDYik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUocGxhaW5SdW5FZmZlY3QpKGVmZmVjdCk7XG4gICAgICB9O1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZmluYWxpemVSdW5FZmZlY3QgPSBpZGVudGl0eTtcbiAgfVxuXG4gIHZhciBlbnYgPSB7XG4gICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICBkaXNwYXRjaDogd3JhcFNhZ2FEaXNwYXRjaChkaXNwYXRjaCksXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHNhZ2FNb25pdG9yOiBzYWdhTW9uaXRvcixcbiAgICBvbkVycm9yOiBvbkVycm9yLFxuICAgIGZpbmFsaXplUnVuRWZmZWN0OiBmaW5hbGl6ZVJ1bkVmZmVjdFxuICB9O1xuICByZXR1cm4gaW1tZWRpYXRlbHkoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0YXNrID0gcHJvYyhlbnYsIGl0ZXJhdG9yJDEsIGNvbnRleHQsIGVmZmVjdElkLCBnZXRNZXRhSW5mbyhzYWdhKSxcbiAgICAvKiBpc1Jvb3QgKi9cbiAgICB0cnVlLCB1bmRlZmluZWQpO1xuXG4gICAgaWYgKHNhZ2FNb25pdG9yKSB7XG4gICAgICBzYWdhTW9uaXRvci5lZmZlY3RSZXNvbHZlZChlZmZlY3RJZCwgdGFzayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2s7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzYWdhTWlkZGxld2FyZUZhY3RvcnkoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIF9yZWYkY29udGV4dCA9IF9yZWYuY29udGV4dCxcbiAgICAgIGNvbnRleHQgPSBfcmVmJGNvbnRleHQgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRjb250ZXh0LFxuICAgICAgX3JlZiRjaGFubmVsID0gX3JlZi5jaGFubmVsLFxuICAgICAgY2hhbm5lbCA9IF9yZWYkY2hhbm5lbCA9PT0gdm9pZCAwID8gc3RkQ2hhbm5lbCgpIDogX3JlZiRjaGFubmVsLFxuICAgICAgc2FnYU1vbml0b3IgPSBfcmVmLnNhZ2FNb25pdG9yLFxuICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImNvbnRleHRcIiwgXCJjaGFubmVsXCIsIFwic2FnYU1vbml0b3JcIl0pO1xuXG4gIHZhciBib3VuZFJ1blNhZ2E7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhjaGFubmVsLCBjaGFubmVsJDEsICdvcHRpb25zLmNoYW5uZWwgcGFzc2VkIHRvIHRoZSBTYWdhIG1pZGRsZXdhcmUgaXMgbm90IGEgY2hhbm5lbCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2FnYU1pZGRsZXdhcmUoX3JlZjIpIHtcbiAgICB2YXIgZ2V0U3RhdGUgPSBfcmVmMi5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2ggPSBfcmVmMi5kaXNwYXRjaDtcbiAgICBib3VuZFJ1blNhZ2EgPSBydW5TYWdhLmJpbmQobnVsbCwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgICAgc2FnYU1vbml0b3I6IHNhZ2FNb25pdG9yXG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKHNhZ2FNb25pdG9yICYmIHNhZ2FNb25pdG9yLmFjdGlvbkRpc3BhdGNoZWQpIHtcbiAgICAgICAgICBzYWdhTW9uaXRvci5hY3Rpb25EaXNwYXRjaGVkKGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV4dChhY3Rpb24pOyAvLyBoaXQgcmVkdWNlcnNcblxuICAgICAgICBjaGFubmVsLnB1dChhY3Rpb24pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgc2FnYU1pZGRsZXdhcmUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFib3VuZFJ1blNhZ2EpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQmVmb3JlIHJ1bm5pbmcgYSBTYWdhLCB5b3UgbXVzdCBtb3VudCB0aGUgU2FnYSBtaWRkbGV3YXJlIG9uIHRoZSBTdG9yZSB1c2luZyBhcHBseU1pZGRsZXdhcmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmRSdW5TYWdhLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfTtcblxuICBzYWdhTWlkZGxld2FyZS5zZXRDb250ZXh0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrKHByb3BzLCBvYmplY3QsIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKCdzYWdhTWlkZGxld2FyZScsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgYXNzaWduV2l0aFN5bWJvbHMoY29udGV4dCwgcHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBzYWdhTWlkZGxld2FyZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FnYU1pZGRsZXdhcmVGYWN0b3J5O1xuZXhwb3J0IHsgRU5ELCBjaGFubmVsLCBldmVudENoYW5uZWwsIGlzRW5kLCBtdWx0aWNhc3RDaGFubmVsLCBydW5TYWdhLCBzdGRDaGFubmVsIH07XG4iLCJpbXBvcnQgJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IGNoYW5uZWwsIHN0cmluZ2FibGVGdW5jLCBmdW5jLCBub3RVbmRlZiB9IGZyb20gJ0ByZWR1eC1zYWdhL2lzJztcbmltcG9ydCB7IHEgYXMgbWFrZUl0ZXJhdG9yLCBLIGFzIHRha2UsIEwgYXMgZm9yaywgTSBhcyBjYW5jZWwsIE4gYXMgY2FsbCwgTyBhcyBhY3Rpb25DaGFubmVsLCBRIGFzIHNsaWRpbmcsIFUgYXMgZGVsYXksIFYgYXMgcmFjZSwgYyBhcyBjaGVjayB9IGZyb20gJy4vaW8tNmRlMTU2ZjMuanMnO1xuZXhwb3J0IHsgTyBhcyBhY3Rpb25DaGFubmVsLCBfIGFzIGFsbCwgJCBhcyBhcHBseSwgTiBhcyBjYWxsLCBNIGFzIGNhbmNlbCwgYTQgYXMgY2FuY2VsbGVkLCBhMCBhcyBjcHMsIFUgYXMgZGVsYXksIFcgYXMgZWZmZWN0VHlwZXMsIGE1IGFzIGZsdXNoLCBMIGFzIGZvcmssIGE2IGFzIGdldENvbnRleHQsIGEyIGFzIGpvaW4sIFkgYXMgcHV0LCBaIGFzIHB1dFJlc29sdmUsIFYgYXMgcmFjZSwgYTMgYXMgc2VsZWN0LCBhNyBhcyBzZXRDb250ZXh0LCBhMSBhcyBzcGF3biwgSyBhcyB0YWtlLCBYIGFzIHRha2VNYXliZSB9IGZyb20gJy4vaW8tNmRlMTU2ZjMuanMnO1xuaW1wb3J0ICdAcmVkdXgtc2FnYS9kZWxheS1wJztcblxudmFyIGRvbmUgPSBmdW5jdGlvbiBkb25lKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZG9uZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cbnZhciBxRW5kID0ge307XG5mdW5jdGlvbiBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSB7XG4gIGlmIChjaGFubmVsKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuICdjaGFubmVsJztcbiAgfVxuXG4gIGlmIChzdHJpbmdhYmxlRnVuYyhwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCk7XG4gIH1cblxuICBpZiAoZnVuYyhwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBwYXR0ZXJuT3JDaGFubmVsLm5hbWU7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwpO1xufVxuZnVuY3Rpb24gZnNtSXRlcmF0b3IoZnNtLCBzdGFydFN0YXRlLCBuYW1lKSB7XG4gIHZhciBzdGF0ZVVwZGF0ZXIsXG4gICAgICBlcnJvclN0YXRlLFxuICAgICAgZWZmZWN0LFxuICAgICAgbmV4dFN0YXRlID0gc3RhcnRTdGF0ZTtcblxuICBmdW5jdGlvbiBuZXh0KGFyZywgZXJyb3IpIHtcbiAgICBpZiAobmV4dFN0YXRlID09PSBxRW5kKSB7XG4gICAgICByZXR1cm4gZG9uZShhcmcpO1xuICAgIH1cblxuICAgIGlmIChlcnJvciAmJiAhZXJyb3JTdGF0ZSkge1xuICAgICAgbmV4dFN0YXRlID0gcUVuZDtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZVVwZGF0ZXIgJiYgc3RhdGVVcGRhdGVyKGFyZyk7XG4gICAgICB2YXIgY3VycmVudFN0YXRlID0gZXJyb3IgPyBmc21bZXJyb3JTdGF0ZV0oZXJyb3IpIDogZnNtW25leHRTdGF0ZV0oKTtcbiAgICAgIG5leHRTdGF0ZSA9IGN1cnJlbnRTdGF0ZS5uZXh0U3RhdGU7XG4gICAgICBlZmZlY3QgPSBjdXJyZW50U3RhdGUuZWZmZWN0O1xuICAgICAgc3RhdGVVcGRhdGVyID0gY3VycmVudFN0YXRlLnN0YXRlVXBkYXRlcjtcbiAgICAgIGVycm9yU3RhdGUgPSBjdXJyZW50U3RhdGUuZXJyb3JTdGF0ZTtcbiAgICAgIHJldHVybiBuZXh0U3RhdGUgPT09IHFFbmQgPyBkb25lKGFyZykgOiBlZmZlY3Q7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VJdGVyYXRvcihuZXh0LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChudWxsLCBlcnJvcik7XG4gIH0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiB0YWtlRXZlcnkocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKVxuICB9O1xuXG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZvcmsuYXBwbHkodm9pZCAwLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgYWN0aW9uLFxuICAgICAgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pXG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJ0YWtlRXZlcnkoXCIgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiB0YWtlTGF0ZXN0KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbClcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHlDYW5jZWwgPSBmdW5jdGlvbiB5Q2FuY2VsKHRhc2spIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogY2FuY2VsKHRhc2spXG4gICAgfTtcbiAgfTtcblxuICB2YXIgdGFzaywgYWN0aW9uO1xuXG4gIHZhciBzZXRUYXNrID0gZnVuY3Rpb24gc2V0VGFzayh0KSB7XG4gICAgcmV0dXJuIHRhc2sgPSB0O1xuICB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeVRha2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHRhc2sgPyB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EzJyxcbiAgICAgICAgZWZmZWN0OiB5Q2FuY2VsKHRhc2spXG4gICAgICB9IDoge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRUYXNrXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlGb3JrKGFjdGlvbiksXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0VGFza1xuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGFrZUxhdGVzdChcIiArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIHRha2VMZWFkaW5nKHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbClcbiAgfTtcblxuICB2YXIgeUNhbGwgPSBmdW5jdGlvbiB5Q2FsbChhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBjYWxsLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGFjdGlvbjtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Q2FsbChhY3Rpb24pXG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJ0YWtlTGVhZGluZyhcIiArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGFjdGlvbiwgY2hhbm5lbDtcbiAgdmFyIHlBY3Rpb25DaGFubmVsID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBhY3Rpb25DaGFubmVsKHBhdHRlcm4sIHNsaWRpbmcoMSkpXG4gIH07XG5cbiAgdmFyIHlUYWtlID0gZnVuY3Rpb24geVRha2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHRha2UoY2hhbm5lbClcbiAgICB9O1xuICB9O1xuXG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZvcmsuYXBwbHkodm9pZCAwLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgeURlbGF5ID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBkZWxheShkZWxheUxlbmd0aClcbiAgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHZhciBzZXRDaGFubmVsID0gZnVuY3Rpb24gc2V0Q2hhbm5lbChjaCkge1xuICAgIHJldHVybiBjaGFubmVsID0gY2g7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeUFjdGlvbkNoYW5uZWwsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0Q2hhbm5lbFxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EzJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSgpLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3E0JyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTQ6IGZ1bmN0aW9uIHE0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlEZWxheVxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGhyb3R0bGUoXCIgKyBzYWZlTmFtZShwYXR0ZXJuKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiByZXRyeShtYXhUcmllcywgZGVsYXlMZW5ndGgsIGZuKSB7XG4gIHZhciBjb3VudGVyID0gbWF4VHJpZXM7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlDYWxsID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBjYWxsLmFwcGx5KHZvaWQgMCwgW2ZuXS5jb25jYXQoYXJncykpXG4gIH07XG4gIHZhciB5RGVsYXkgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IGRlbGF5KGRlbGF5TGVuZ3RoKVxuICB9O1xuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5Q2FsbCxcbiAgICAgICAgZXJyb3JTdGF0ZTogJ3ExMCdcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6IHFFbmRcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMTA6IGZ1bmN0aW9uIHExMChlcnJvcikge1xuICAgICAgY291bnRlciAtPSAxO1xuXG4gICAgICBpZiAoY291bnRlciA8PSAwKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeURlbGF5XG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJyZXRyeShcIiArIGZuLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlSGVscGVyKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGFjdGlvbiwgcmFjZU91dHB1dDtcbiAgdmFyIHlUYWtlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpXG4gIH07XG4gIHZhciB5UmFjZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogcmFjZSh7XG4gICAgICBhY3Rpb246IHRha2UocGF0dGVybk9yQ2hhbm5lbCksXG4gICAgICBkZWJvdW5jZTogZGVsYXkoZGVsYXlMZW5ndGgpXG4gICAgfSlcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHlOb29wID0gZnVuY3Rpb24geU5vb3AodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgdmFyIHNldFJhY2VPdXRwdXQgPSBmdW5jdGlvbiBzZXRSYWNlT3V0cHV0KHJvKSB7XG4gICAgcmV0dXJuIHJhY2VPdXRwdXQgPSBybztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMycsXG4gICAgICAgIGVmZmVjdDogeVJhY2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0UmFjZU91dHB1dFxuICAgICAgfTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiByYWNlT3V0cHV0LmRlYm91bmNlID8ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKVxuICAgICAgfSA6IHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlOb29wKHJhY2VPdXRwdXQuYWN0aW9uKSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcImRlYm91bmNlKFwiICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyBcIiwgXCIgKyB3b3JrZXIubmFtZSArIFwiKVwiKTtcbn1cblxudmFyIHZhbGlkYXRlVGFrZUVmZmVjdCA9IGZ1bmN0aW9uIHZhbGlkYXRlVGFrZUVmZmVjdChmbiwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGNoZWNrKHBhdHRlcm5PckNoYW5uZWwsIG5vdFVuZGVmLCBmbi5uYW1lICsgXCIgcmVxdWlyZXMgYSBwYXR0ZXJuIG9yIGNoYW5uZWxcIik7XG4gIGNoZWNrKHdvcmtlciwgbm90VW5kZWYsIGZuLm5hbWUgKyBcIiByZXF1aXJlcyBhIHNhZ2EgcGFyYW1ldGVyXCIpO1xufTtcblxuZnVuY3Rpb24gdGFrZUV2ZXJ5JDEocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVUYWtlRWZmZWN0KHRha2VFdmVyeSQxLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbdGFrZUV2ZXJ5LCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiB0YWtlTGF0ZXN0JDEocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVUYWtlRWZmZWN0KHRha2VMYXRlc3QkMSwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW3Rha2VMYXRlc3QsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHRha2VMZWFkaW5nJDEocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVUYWtlRWZmZWN0KHRha2VMZWFkaW5nJDEsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAyID8gX2xlbjMgLSAyIDogMCksIF9rZXkzID0gMjsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTMgLSAyXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh2b2lkIDAsIFt0YWtlTGVhZGluZywgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuZnVuY3Rpb24gdGhyb3R0bGUkMShtcywgcGF0dGVybiwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socGF0dGVybiwgbm90VW5kZWYsICd0aHJvdHRsZSByZXF1aXJlcyBhIHBhdHRlcm4nKTtcbiAgICBjaGVjayh3b3JrZXIsIG5vdFVuZGVmLCAndGhyb3R0bGUgcmVxdWlyZXMgYSBzYWdhIHBhcmFtZXRlcicpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMyA/IF9sZW40IC0gMyA6IDApLCBfa2V5NCA9IDM7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gM10gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbdGhyb3R0bGUsIG1zLCBwYXR0ZXJuLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiByZXRyeSQxKG1heFRyaWVzLCBkZWxheUxlbmd0aCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSA+IDMgPyBfbGVuNSAtIDMgOiAwKSwgX2tleTUgPSAzOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NSAtIDNdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIHJldHVybiBjYWxsLmFwcGx5KHZvaWQgMCwgW3JldHJ5LCBtYXhUcmllcywgZGVsYXlMZW5ndGgsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIGRlYm91bmNlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42ID4gMyA/IF9sZW42IC0gMyA6IDApLCBfa2V5NiA9IDM7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBhcmdzW19rZXk2IC0gM10gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbZGVib3VuY2VIZWxwZXIsIGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5cbmV4cG9ydCB7IGRlYm91bmNlLCByZXRyeSQxIGFzIHJldHJ5LCB0YWtlRXZlcnkkMSBhcyB0YWtlRXZlcnksIHRha2VMYXRlc3QkMSBhcyB0YWtlTGF0ZXN0LCB0YWtlTGVhZGluZyQxIGFzIHRha2VMZWFkaW5nLCB0aHJvdHRsZSQxIGFzIHRocm90dGxlIH07XG4iLCJmdW5jdGlvbiBkZWZlcnJlZCgpIHtcbiAgdmFyIGRlZiA9IHt9O1xuICBkZWYucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZGVmLnJlamVjdCA9IHJlamVjdDtcbiAgfSk7XG4gIHJldHVybiBkZWY7XG59XG5mdW5jdGlvbiBhcnJheU9mRGVmZXJyZWQobGVuZ3RoKSB7XG4gIHZhciBhcnIgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyLnB1c2goZGVmZXJyZWQoKSk7XG4gIH1cblxuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZlcnJlZDtcbmV4cG9ydCB7IGFycmF5T2ZEZWZlcnJlZCB9O1xuIiwiaW1wb3J0IHsgQ0FOQ0VMIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5cbmZ1bmN0aW9uIGRlbGF5UChtcywgdmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMCkge1xuICAgIHZhbCA9IHRydWU7XG4gIH1cblxuICB2YXIgdGltZW91dElkO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChyZXNvbHZlLCBtcywgdmFsKTtcbiAgfSk7XG5cbiAgcHJvbWlzZVtDQU5DRUxdID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9O1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxheVA7XG4iLCJpbXBvcnQgeyBUQVNLLCBTQUdBX0FDVElPTiwgTVVMVElDQVNULCBJTyB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuXG52YXIgdW5kZWYgPSBmdW5jdGlvbiB1bmRlZih2KSB7XG4gIHJldHVybiB2ID09PSBudWxsIHx8IHYgPT09IHVuZGVmaW5lZDtcbn07XG52YXIgbm90VW5kZWYgPSBmdW5jdGlvbiBub3RVbmRlZih2KSB7XG4gIHJldHVybiB2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZDtcbn07XG52YXIgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoZikge1xuICByZXR1cm4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbic7XG59O1xudmFyIG51bWJlciA9IGZ1bmN0aW9uIG51bWJlcihuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcic7XG59O1xudmFyIHN0cmluZyA9IGZ1bmN0aW9uIHN0cmluZyhzKSB7XG4gIHJldHVybiB0eXBlb2YgcyA9PT0gJ3N0cmluZyc7XG59O1xudmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBvYmplY3QgPSBmdW5jdGlvbiBvYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogJiYgIWFycmF5KG9iaikgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xudmFyIHByb21pc2UgPSBmdW5jdGlvbiBwcm9taXNlKHApIHtcbiAgcmV0dXJuIHAgJiYgZnVuYyhwLnRoZW4pO1xufTtcbnZhciBpdGVyYXRvciA9IGZ1bmN0aW9uIGl0ZXJhdG9yKGl0KSB7XG4gIHJldHVybiBpdCAmJiBmdW5jKGl0Lm5leHQpICYmIGZ1bmMoaXQudGhyb3cpO1xufTtcbnZhciBpdGVyYWJsZSA9IGZ1bmN0aW9uIGl0ZXJhYmxlKGl0KSB7XG4gIHJldHVybiBpdCAmJiBmdW5jKFN5bWJvbCkgPyBmdW5jKGl0W1N5bWJvbC5pdGVyYXRvcl0pIDogYXJyYXkoaXQpO1xufTtcbnZhciB0YXNrID0gZnVuY3Rpb24gdGFzayh0KSB7XG4gIHJldHVybiB0ICYmIHRbVEFTS107XG59O1xudmFyIHNhZ2FBY3Rpb24gPSBmdW5jdGlvbiBzYWdhQWN0aW9uKGEpIHtcbiAgcmV0dXJuIEJvb2xlYW4oYSAmJiBhW1NBR0FfQUNUSU9OXSk7XG59O1xudmFyIG9ic2VydmFibGUgPSBmdW5jdGlvbiBvYnNlcnZhYmxlKG9iKSB7XG4gIHJldHVybiBvYiAmJiBmdW5jKG9iLnN1YnNjcmliZSk7XG59O1xudmFyIGJ1ZmZlciA9IGZ1bmN0aW9uIGJ1ZmZlcihidWYpIHtcbiAgcmV0dXJuIGJ1ZiAmJiBmdW5jKGJ1Zi5pc0VtcHR5KSAmJiBmdW5jKGJ1Zi50YWtlKSAmJiBmdW5jKGJ1Zi5wdXQpO1xufTtcbnZhciBwYXR0ZXJuID0gZnVuY3Rpb24gcGF0dGVybihwYXQpIHtcbiAgcmV0dXJuIHBhdCAmJiAoc3RyaW5nKHBhdCkgfHwgc3ltYm9sKHBhdCkgfHwgZnVuYyhwYXQpIHx8IGFycmF5KHBhdCkgJiYgcGF0LmV2ZXJ5KHBhdHRlcm4pKTtcbn07XG52YXIgY2hhbm5lbCA9IGZ1bmN0aW9uIGNoYW5uZWwoY2gpIHtcbiAgcmV0dXJuIGNoICYmIGZ1bmMoY2gudGFrZSkgJiYgZnVuYyhjaC5jbG9zZSk7XG59O1xudmFyIHN0cmluZ2FibGVGdW5jID0gZnVuY3Rpb24gc3RyaW5nYWJsZUZ1bmMoZikge1xuICByZXR1cm4gZnVuYyhmKSAmJiBmLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpO1xufTtcbnZhciBzeW1ib2wgPSBmdW5jdGlvbiBzeW1ib2woc3ltKSB7XG4gIHJldHVybiBCb29sZWFuKHN5bSkgJiYgdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBzeW0uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBzeW0gIT09IFN5bWJvbC5wcm90b3R5cGU7XG59O1xudmFyIG11bHRpY2FzdCA9IGZ1bmN0aW9uIG11bHRpY2FzdChjaCkge1xuICByZXR1cm4gY2hhbm5lbChjaCkgJiYgY2hbTVVMVElDQVNUXTtcbn07XG52YXIgZWZmZWN0ID0gZnVuY3Rpb24gZWZmZWN0KGVmZikge1xuICByZXR1cm4gZWZmICYmIGVmZltJT107XG59O1xuXG5leHBvcnQgeyBhcnJheSwgYnVmZmVyLCBjaGFubmVsLCBlZmZlY3QsIGZ1bmMsIGl0ZXJhYmxlLCBpdGVyYXRvciwgbXVsdGljYXN0LCBub3RVbmRlZiwgbnVtYmVyLCBvYmplY3QsIG9ic2VydmFibGUsIHBhdHRlcm4sIHByb21pc2UsIHNhZ2FBY3Rpb24sIHN0cmluZywgc3RyaW5nYWJsZUZ1bmMsIHN5bWJvbCwgdGFzaywgdW5kZWYgfTtcbiIsInZhciBjcmVhdGVTeW1ib2wgPSBmdW5jdGlvbiBjcmVhdGVTeW1ib2wobmFtZSkge1xuICByZXR1cm4gXCJAQHJlZHV4LXNhZ2EvXCIgKyBuYW1lO1xufTtcblxudmFyIENBTkNFTCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0NBTkNFTF9QUk9NSVNFJyk7XG52YXIgQ0hBTk5FTF9FTkRfVFlQRSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0NIQU5ORUxfRU5EJyk7XG52YXIgSU8gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdJTycpO1xudmFyIE1BVENIID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnTUFUQ0gnKTtcbnZhciBNVUxUSUNBU1QgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdNVUxUSUNBU1QnKTtcbnZhciBTQUdBX0FDVElPTiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1NBR0FfQUNUSU9OJyk7XG52YXIgU0VMRl9DQU5DRUxMQVRJT04gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdTRUxGX0NBTkNFTExBVElPTicpO1xudmFyIFRBU0sgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdUQVNLJyk7XG52YXIgVEFTS19DQU5DRUwgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdUQVNLX0NBTkNFTCcpO1xudmFyIFRFUk1JTkFURSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1RFUk1JTkFURScpO1xudmFyIFNBR0FfTE9DQVRJT04gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdMT0NBVElPTicpO1xuXG5leHBvcnQgeyBDQU5DRUwsIENIQU5ORUxfRU5EX1RZUEUsIElPLCBNQVRDSCwgTVVMVElDQVNULCBTQUdBX0FDVElPTiwgU0FHQV9MT0NBVElPTiwgU0VMRl9DQU5DRUxMQVRJT04sIFRBU0ssIFRBU0tfQ0FOQ0VMLCBURVJNSU5BVEUgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL2xheW91dC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL2xheW91dC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9sYXlvdXQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxheW91dF9tYWluLWxheW91dF9feDhzbUgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1O1xcbiAgY29sb3I6ICNhOWE5YTk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2xheW91dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUxLO0VBTUwsY0FUTTtFQVVOLHlDQUFBO0FBSkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHdoaXRlOiAjYTlhOWE5O1xcbiRibGFjazogIzIzMjMyMztcXG4kcGluazogI2Y2NTI2MTtcXG4kZ3JleTogIzU1NTU1NTtcXG5cXG4ubWFpbi1sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpbi1sYXlvdXRcIjogXCJsYXlvdXRfbWFpbi1sYXlvdXRfX3g4c21IXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIFJlYWN0UmVkdXhDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlYWN0UmVkdXhDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1JlYWN0UmVkdXgnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFJlZHV4Q29udGV4dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi4vdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5cbmZ1bmN0aW9uIFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIHN0b3JlID0gX3JlZi5zdG9yZSxcbiAgICAgIGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICB9O1xuICB9LCBbc3RvcmVdKTtcbiAgdmFyIHByZXZpb3VzU3RhdGUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgfSwgW3N0b3JlXSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcblxuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIHZhciBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gIH0sIGNoaWxkcmVuKTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAgIHN0b3JlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBnZXRTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLFxuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnlcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVJlZiwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50VHlwZSwgaXNDb250ZXh0Q29uc3VtZXIgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi4vdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7IC8vIERlZmluZSBzb21lIGNvbnN0YW50IGFycmF5cyBqdXN0IHRvIGF2b2lkIHJlLWNyZWF0aW5nIHRoZXNlXG5cbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcblxudmFyIHN0cmluZ2lmeUNvbXBvbmVudCA9IGZ1bmN0aW9uIHN0cmluZ2lmeUNvbXBvbmVudChDb21wKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuXG5mdW5jdGlvbiBzdG9yZVN0YXRlVXBkYXRlc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICB2YXIgdXBkYXRlQ291bnQgPSBzdGF0ZVsxXTtcbiAgcmV0dXJuIFthY3Rpb24ucGF5bG9hZCwgdXBkYXRlQ291bnQgKyAxXTtcbn1cblxuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZWZmZWN0RnVuYy5hcHBseSh2b2lkIDAsIGVmZmVjdEFyZ3MpO1xuICB9LCBkZXBlbmRlbmNpZXMpO1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBhY3R1YWxDaGlsZFByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIC8vIFdlIHdhbnQgdG8gY2FwdHVyZSB0aGUgd3JhcHBlciBwcm9wcyBhbmQgY2hpbGQgcHJvcHMgd2UgdXNlZCBmb3IgbGF0ZXIgY29tcGFyaXNvbnNcbiAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlOyAvLyBJZiB0aGUgcmVuZGVyIHdhcyBmcm9tIGEgc3RvcmUgdXBkYXRlLCBjbGVhciBvdXQgdGhhdCByZWZlcmVuY2UgYW5kIGNhc2NhZGUgdGhlIHN1YnNjcmliZXIgdXBkYXRlXG5cbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaCkge1xuICAvLyBJZiB3ZSdyZSBub3Qgc3Vic2NyaWJlZCB0byB0aGUgc3RvcmUsIG5vdGhpbmcgdG8gZG8gaGVyZVxuICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuOyAvLyBDYXB0dXJlIHZhbHVlcyBmb3IgY2hlY2tpbmcgaWYgYW5kIHdoZW4gdGhpcyBjb21wb25lbnQgdW5tb3VudHNcblxuICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgdmFyIGxhc3RUaHJvd25FcnJvciA9IG51bGw7IC8vIFdlJ2xsIHJ1biB0aGlzIGNhbGxiYWNrIGV2ZXJ5IHRpbWUgYSBzdG9yZSBzdWJzY3JpcHRpb24gdXBkYXRlIHByb3BhZ2F0ZXMgdG8gdGhpcyBjb21wb25lbnRcblxuICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgLy8gRG9uJ3QgcnVuIHN0YWxlIGxpc3RlbmVycy5cbiAgICAgIC8vIFJlZHV4IGRvZXNuJ3QgZ3VhcmFudGVlIHVuc3Vic2NyaXB0aW9ucyBoYXBwZW4gdW50aWwgbmV4dCBkaXNwYXRjaC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEFjdHVhbGx5IHJ1biB0aGUgc2VsZWN0b3Igd2l0aCB0aGUgbW9zdCByZWNlbnQgc3RvcmUgc3RhdGUgYW5kIHdyYXBwZXIgcHJvcHNcbiAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmVcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IobGF0ZXN0U3RvcmVTdGF0ZSwgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cblxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfSAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgaGF2ZW4ndCBjaGFuZ2VkLCBub3RoaW5nIHRvIGRvIGhlcmUgLSBjYXNjYWRlIHRoZSBzdWJzY3JpcHRpb24gdXBkYXRlXG5cblxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTYXZlIHJlZmVyZW5jZXMgdG8gdGhlIG5ldyBjaGlsZCBwcm9wcy4gIE5vdGUgdGhhdCB3ZSB0cmFjayB0aGUgXCJjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZVwiXG4gICAgICAvLyBhcyBhIHJlZiBpbnN0ZWFkIG9mIGEgdXNlU3RhdGUvdXNlUmVkdWNlciBiZWNhdXNlIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIGlmIHRoYXQgdmFsdWUgaGFzXG4gICAgICAvLyBiZWVuIHByb2Nlc3NlZC4gIElmIHRoaXMgd2VudCBpbnRvIHVzZVN0YXRlL3VzZVJlZHVjZXIsIHdlIGNvdWxkbid0IGNsZWFyIG91dCB0aGUgdmFsdWUgd2l0aG91dFxuICAgICAgLy8gZm9yY2luZyBhbm90aGVyIHJlLXJlbmRlciwgd2hpY2ggd2UgZG9uJ3Qgd2FudC5cbiAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlOyAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgX2RpZF8gY2hhbmdlIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IpLCB0aGlzIHdyYXBwZXIgY29tcG9uZW50IG5lZWRzIHRvIHJlLXJlbmRlclxuXG4gICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NUT1JFX1VQREFURUQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTsgLy8gQWN0dWFsbHkgc3Vic2NyaWJlIHRvIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3RvciAob3Igc3RvcmUpXG5cblxuICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpOyAvLyBQdWxsIGRhdGEgZnJvbSB0aGUgc3RvcmUgYWZ0ZXIgZmlyc3QgcmVuZGVyIGluIGNhc2UgdGhlIHN0b3JlIGhhc1xuICAvLyBjaGFuZ2VkIHNpbmNlIHdlIGJlZ2FuLlxuXG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuXG4gIHZhciB1bnN1YnNjcmliZVdyYXBwZXIgPSBmdW5jdGlvbiB1bnN1YnNjcmliZVdyYXBwZXIoKSB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcblxuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB3ZSBjYXVnaHQgYW4gZXJyb3IgZHVlIHRvIGEgYmFkIG1hcFN0YXRlIGZ1bmN0aW9uLCBidXQgdGhlXG4gICAgICAvLyBwYXJlbnQgcmUtcmVuZGVyZWQgd2l0aG91dCB0aGlzIGNvbXBvbmVudCBhbmQgd2UncmUgYWJvdXQgdG8gdW5tb3VudC5cbiAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiBhcyBsb25nIGFzIHdlIGRvIHRvcC1kb3duIHN1YnNjcmlwdGlvbnMgY29ycmVjdGx5LCBidXRcbiAgICAgIC8vIGlmIHdlIGV2ZXIgZG8gdGhvc2Ugd3JvbmcsIHRoaXMgdGhyb3cgd2lsbCBzdXJmYWNlIHRoZSBlcnJvciBpbiBvdXIgdGVzdHMuXG4gICAgICAvLyBJbiB0aGF0IGNhc2UsIHRocm93IHRoZSBlcnJvciBmcm9tIGhlcmUgc28gaXQgZG9lc24ndCBnZXQgbG9zdC5cbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVuc3Vic2NyaWJlV3JhcHBlcjtcbn1cblxudmFyIGluaXRTdGF0ZVVwZGF0ZXMgPSBmdW5jdGlvbiBpbml0U3RhdGVVcGRhdGVzKCkge1xuICByZXR1cm4gW251bGwsIDBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29ubmVjdEFkdmFuY2VkKFxuLypcclxuICBzZWxlY3RvckZhY3RvcnkgaXMgYSBmdW5jIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHJldHVybmluZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gdXNlZCB0b1xyXG4gIGNvbXB1dGUgbmV3IHByb3BzIGZyb20gc3RhdGUsIHByb3BzLCBhbmQgZGlzcGF0Y2guIEZvciBleGFtcGxlOlxyXG4gICAgICBleHBvcnQgZGVmYXVsdCBjb25uZWN0QWR2YW5jZWQoKGRpc3BhdGNoLCBvcHRpb25zKSA9PiAoc3RhdGUsIHByb3BzKSA9PiAoe1xyXG4gICAgICB0aGluZzogc3RhdGUudGhpbmdzW3Byb3BzLnRoaW5nSWRdLFxyXG4gICAgICBzYXZlVGhpbmc6IGZpZWxkcyA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zYXZlVGhpbmcocHJvcHMudGhpbmdJZCwgZmllbGRzKSksXHJcbiAgICB9KSkoWW91ckNvbXBvbmVudClcclxuICAgIEFjY2VzcyB0byBkaXNwYXRjaCBpcyBwcm92aWRlZCB0byB0aGUgZmFjdG9yeSBzbyBzZWxlY3RvckZhY3RvcmllcyBjYW4gYmluZCBhY3Rpb25DcmVhdG9yc1xyXG4gIG91dHNpZGUgb2YgdGhlaXIgc2VsZWN0b3IgYXMgYW4gb3B0aW1pemF0aW9uLiBPcHRpb25zIHBhc3NlZCB0byBjb25uZWN0QWR2YW5jZWQgYXJlIHBhc3NlZCB0b1xyXG4gIHRoZSBzZWxlY3RvckZhY3RvcnksIGFsb25nIHdpdGggZGlzcGxheU5hbWUgYW5kIFdyYXBwZWRDb21wb25lbnQsIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXHJcbiAgICBOb3RlIHRoYXQgc2VsZWN0b3JGYWN0b3J5IGlzIHJlc3BvbnNpYmxlIGZvciBhbGwgY2FjaGluZy9tZW1vaXphdGlvbiBvZiBpbmJvdW5kIGFuZCBvdXRib3VuZFxyXG4gIHByb3BzLiBEbyBub3QgdXNlIGNvbm5lY3RBZHZhbmNlZCBkaXJlY3RseSB3aXRob3V0IG1lbW9pemluZyByZXN1bHRzIGJldHdlZW4gY2FsbHMgdG8geW91clxyXG4gIHNlbGVjdG9yLCBvdGhlcndpc2UgdGhlIENvbm5lY3QgY29tcG9uZW50IHdpbGwgcmUtcmVuZGVyIG9uIGV2ZXJ5IHN0YXRlIG9yIHByb3BzIGNoYW5nZS5cclxuKi9cbnNlbGVjdG9yRmFjdG9yeSwgLy8gb3B0aW9ucyBvYmplY3Q6XG5fcmVmKSB7XG4gIGlmIChfcmVmID09PSB2b2lkIDApIHtcbiAgICBfcmVmID0ge307XG4gIH1cblxuICB2YXIgX3JlZjIgPSBfcmVmLFxuICAgICAgX3JlZjIkZ2V0RGlzcGxheU5hbWUgPSBfcmVmMi5nZXREaXNwbGF5TmFtZSxcbiAgICAgIGdldERpc3BsYXlOYW1lID0gX3JlZjIkZ2V0RGlzcGxheU5hbWUgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIFwiQ29ubmVjdEFkdmFuY2VkKFwiICsgbmFtZSArIFwiKVwiO1xuICB9IDogX3JlZjIkZ2V0RGlzcGxheU5hbWUsXG4gICAgICBfcmVmMiRtZXRob2ROYW1lID0gX3JlZjIubWV0aG9kTmFtZSxcbiAgICAgIG1ldGhvZE5hbWUgPSBfcmVmMiRtZXRob2ROYW1lID09PSB2b2lkIDAgPyAnY29ubmVjdEFkdmFuY2VkJyA6IF9yZWYyJG1ldGhvZE5hbWUsXG4gICAgICBfcmVmMiRyZW5kZXJDb3VudFByb3AgPSBfcmVmMi5yZW5kZXJDb3VudFByb3AsXG4gICAgICByZW5kZXJDb3VudFByb3AgPSBfcmVmMiRyZW5kZXJDb3VudFByb3AgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYyJHJlbmRlckNvdW50UHJvcCxcbiAgICAgIF9yZWYyJHNob3VsZEhhbmRsZVN0YSA9IF9yZWYyLnNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IF9yZWYyJHNob3VsZEhhbmRsZVN0YSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYyJHNob3VsZEhhbmRsZVN0YSxcbiAgICAgIF9yZWYyJHN0b3JlS2V5ID0gX3JlZjIuc3RvcmVLZXksXG4gICAgICBzdG9yZUtleSA9IF9yZWYyJHN0b3JlS2V5ID09PSB2b2lkIDAgPyAnc3RvcmUnIDogX3JlZjIkc3RvcmVLZXksXG4gICAgICBfcmVmMiR3aXRoUmVmID0gX3JlZjIud2l0aFJlZixcbiAgICAgIHdpdGhSZWYgPSBfcmVmMiR3aXRoUmVmID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHdpdGhSZWYsXG4gICAgICBfcmVmMiRmb3J3YXJkUmVmID0gX3JlZjIuZm9yd2FyZFJlZixcbiAgICAgIGZvcndhcmRSZWYgPSBfcmVmMiRmb3J3YXJkUmVmID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGZvcndhcmRSZWYsXG4gICAgICBfcmVmMiRjb250ZXh0ID0gX3JlZjIuY29udGV4dCxcbiAgICAgIGNvbnRleHQgPSBfcmVmMiRjb250ZXh0ID09PSB2b2lkIDAgPyBSZWFjdFJlZHV4Q29udGV4dCA6IF9yZWYyJGNvbnRleHQsXG4gICAgICBjb25uZWN0T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJnZXREaXNwbGF5TmFtZVwiLCBcIm1ldGhvZE5hbWVcIiwgXCJyZW5kZXJDb3VudFByb3BcIiwgXCJzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXNcIiwgXCJzdG9yZUtleVwiLCBcIndpdGhSZWZcIiwgXCJmb3J3YXJkUmVmXCIsIFwiY29udGV4dFwiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAocmVuZGVyQ291bnRQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJlbmRlckNvdW50UHJvcCBpcyByZW1vdmVkLiByZW5kZXIgY291bnRpbmcgaXMgYnVpbHQgaW50byB0aGUgbGF0ZXN0IFJlYWN0IERldiBUb29scyBwcm9maWxpbmcgZXh0ZW5zaW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh3aXRoUmVmKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpdGhSZWYgaXMgcmVtb3ZlZC4gVG8gYWNjZXNzIHRoZSB3cmFwcGVkIGluc3RhbmNlLCB1c2UgYSByZWYgb24gdGhlIGNvbm5lY3RlZCBjb21wb25lbnQnKTtcbiAgICB9XG5cbiAgICB2YXIgY3VzdG9tU3RvcmVXYXJuaW5nTWVzc2FnZSA9ICdUbyB1c2UgYSBjdXN0b20gUmVkdXggc3RvcmUgZm9yIHNwZWNpZmljIGNvbXBvbmVudHMsIGNyZWF0ZSBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHdpdGggJyArIFwiUmVhY3QuY3JlYXRlQ29udGV4dCgpLCBhbmQgcGFzcyB0aGUgY29udGV4dCBvYmplY3QgdG8gUmVhY3QgUmVkdXgncyBQcm92aWRlciBhbmQgc3BlY2lmaWMgY29tcG9uZW50c1wiICsgJyBsaWtlOiA8UHJvdmlkZXIgY29udGV4dD17TXlDb250ZXh0fT48Q29ubmVjdGVkQ29tcG9uZW50IGNvbnRleHQ9e015Q29udGV4dH0gLz48L1Byb3ZpZGVyPi4gJyArICdZb3UgbWF5IGFsc28gcGFzcyBhIHtjb250ZXh0IDogTXlDb250ZXh0fSBvcHRpb24gdG8gY29ubmVjdCc7XG5cbiAgICBpZiAoc3RvcmVLZXkgIT09ICdzdG9yZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc3RvcmVLZXkgaGFzIGJlZW4gcmVtb3ZlZCBhbmQgZG9lcyBub3QgZG8gYW55dGhpbmcuICcgKyBjdXN0b21TdG9yZVdhcm5pbmdNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgQ29udGV4dCA9IGNvbnRleHQ7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwV2l0aENvbm5lY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc1ZhbGlkRWxlbWVudFR5cGUoV3JhcHBlZENvbXBvbmVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IFwiICsgKG1ldGhvZE5hbWUgKyBcIi4gSW5zdGVhZCByZWNlaXZlZCBcIiArIHN0cmluZ2lmeUNvbXBvbmVudChXcmFwcGVkQ29tcG9uZW50KSkpO1xuICAgIH1cblxuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKHdyYXBwZWRDb21wb25lbnROYW1lKTtcblxuICAgIHZhciBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0gX2V4dGVuZHMoe30sIGNvbm5lY3RPcHRpb25zLCB7XG4gICAgICBnZXREaXNwbGF5TmFtZTogZ2V0RGlzcGxheU5hbWUsXG4gICAgICBtZXRob2ROYW1lOiBtZXRob2ROYW1lLFxuICAgICAgcmVuZGVyQ291bnRQcm9wOiByZW5kZXJDb3VudFByb3AsXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHN0b3JlS2V5OiBzdG9yZUtleSxcbiAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcbiAgICAgIHdyYXBwZWRDb21wb25lbnROYW1lOiB3cmFwcGVkQ29tcG9uZW50TmFtZSxcbiAgICAgIFdyYXBwZWRDb21wb25lbnQ6IFdyYXBwZWRDb21wb25lbnRcbiAgICB9KTtcblxuICAgIHZhciBwdXJlID0gY29ubmVjdE9wdGlvbnMucHVyZTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkU2VsZWN0b3Ioc3RvcmUpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvckZhY3Rvcnkoc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgIH0gLy8gSWYgd2UgYXJlbid0IHJ1bm5pbmcgaW4gXCJwdXJlXCIgbW9kZSwgd2UgZG9uJ3Qgd2FudCB0byBtZW1vaXplIHZhbHVlcy5cbiAgICAvLyBUbyBhdm9pZCBjb25kaXRpb25hbGx5IGNhbGxpbmcgaG9va3MsIHdlIGZhbGwgYmFjayB0byBhIHRpbnkgd3JhcHBlclxuICAgIC8vIHRoYXQganVzdCBleGVjdXRlcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgaW1tZWRpYXRlbHkuXG5cblxuICAgIHZhciB1c2VQdXJlT25seU1lbW8gPSBwdXJlID8gdXNlTWVtbyA6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERpc3Rpbmd1aXNoIGJldHdlZW4gYWN0dWFsIFwiZGF0YVwiIHByb3BzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIHdyYXBwZXIgY29tcG9uZW50LFxuICAgICAgICAvLyBhbmQgdmFsdWVzIG5lZWRlZCB0byBjb250cm9sIGJlaGF2aW9yIChmb3J3YXJkZWQgcmVmcywgYWx0ZXJuYXRlIGNvbnRleHQgaW5zdGFuY2VzKS5cbiAgICAgICAgLy8gVG8gbWFpbnRhaW4gdGhlIHdyYXBwZXJQcm9wcyBvYmplY3QgcmVmZXJlbmNlLCBtZW1vaXplIHRoaXMgZGVzdHJ1Y3R1cmluZy5cbiAgICAgICAgdmFyIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYgPSBwcm9wcy5yZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgd3JhcHBlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcInJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcIl0pO1xuXG4gICAgICAgIHJldHVybiBbcHJvcHMuY29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXTtcbiAgICAgIH0sIFtwcm9wc10pLFxuICAgICAgICAgIHByb3BzQ29udGV4dCA9IF91c2VNZW1vWzBdLFxuICAgICAgICAgIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYgPSBfdXNlTWVtb1sxXSxcbiAgICAgICAgICB3cmFwcGVyUHJvcHMgPSBfdXNlTWVtb1syXTtcblxuICAgICAgdmFyIENvbnRleHRUb1VzZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBVc2VycyBtYXkgb3B0aW9uYWxseSBwYXNzIGluIGEgY3VzdG9tIGNvbnRleHQgaW5zdGFuY2UgdG8gdXNlIGluc3RlYWQgb2Ygb3VyIFJlYWN0UmVkdXhDb250ZXh0LlxuICAgICAgICAvLyBNZW1vaXplIHRoZSBjaGVjayB0aGF0IGRldGVybWluZXMgd2hpY2ggY29udGV4dCBpbnN0YW5jZSB3ZSBzaG91bGQgdXNlLlxuICAgICAgICByZXR1cm4gcHJvcHNDb250ZXh0ICYmIHByb3BzQ29udGV4dC5Db25zdW1lciAmJiBpc0NvbnRleHRDb25zdW1lciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHNDb250ZXh0LkNvbnN1bWVyLCBudWxsKSkgPyBwcm9wc0NvbnRleHQgOiBDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pOyAvLyBSZXRyaWV2ZSB0aGUgc3RvcmUgYW5kIGFuY2VzdG9yIHN1YnNjcmlwdGlvbiB2aWEgY29udGV4dCwgaWYgYXZhaWxhYmxlXG5cbiAgICAgIHZhciBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KENvbnRleHRUb1VzZSk7IC8vIFRoZSBzdG9yZSBfbXVzdF8gZXhpc3QgYXMgZWl0aGVyIGEgcHJvcCBvciBpbiBjb250ZXh0LlxuICAgICAgLy8gV2UnbGwgY2hlY2sgdG8gc2VlIGlmIGl0IF9sb29rc18gbGlrZSBhIFJlZHV4IHN0b3JlIGZpcnN0LlxuICAgICAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gcGFzcyB0aHJvdWdoIGEgYHN0b3JlYCBwcm9wIHRoYXQgaXMganVzdCBhIHBsYWluIHZhbHVlLlxuXG4gICAgICB2YXIgZGlkU3RvcmVDb21lRnJvbVByb3BzID0gQm9vbGVhbihwcm9wcy5zdG9yZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5nZXRTdGF0ZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5kaXNwYXRjaCk7XG4gICAgICB2YXIgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBcXFwic3RvcmVcXFwiIGluIHRoZSBjb250ZXh0IG9mIFwiICsgKFwiXFxcIlwiICsgZGlzcGxheU5hbWUgKyBcIlxcXCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIFwiKSArIFwib3IgcGFzcyBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHByb3ZpZGVyIHRvIDxQcm92aWRlcj4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIFwiICsgKFwiUmVhY3QgY29udGV4dCBjb25zdW1lciB0byBcIiArIGRpc3BsYXlOYW1lICsgXCIgaW4gY29ubmVjdCBvcHRpb25zLlwiKSk7XG4gICAgICB9IC8vIEJhc2VkIG9uIHRoZSBwcmV2aW91cyBjaGVjaywgb25lIG9mIHRoZXNlIG11c3QgYmUgdHJ1ZVxuXG5cbiAgICAgIHZhciBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgdmFyIGNoaWxkUHJvcHNTZWxlY3RvciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUaGUgY2hpbGQgcHJvcHMgc2VsZWN0b3IgbmVlZHMgdGhlIHN0b3JlIHJlZmVyZW5jZSBhcyBhbiBpbnB1dC5cbiAgICAgICAgLy8gUmUtY3JlYXRlIHRoaXMgc2VsZWN0b3Igd2hlbmV2ZXIgdGhlIHN0b3JlIGNoYW5nZXMuXG4gICAgICAgIHJldHVybiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuXG4gICAgICB2YXIgX3VzZU1lbW8yID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZOyAvLyBUaGlzIFN1YnNjcmlwdGlvbidzIHNvdXJjZSBzaG91bGQgbWF0Y2ggd2hlcmUgc3RvcmUgY2FtZSBmcm9tOiBwcm9wcyB2cy4gY29udGV4dC4gQSBjb21wb25lbnRcbiAgICAgICAgLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxuXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHN0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBudWxsIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvbik7IC8vIGBub3RpZnlOZXN0ZWRTdWJzYCBpcyBkdXBsaWNhdGVkIHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCBpblxuICAgICAgICAvLyB0aGUgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcCwgd2hlcmUgYHN1YnNjcmlwdGlvbmAgd2lsbCB0aGVuIGJlIG51bGwuIFRoaXMgY2FuXG4gICAgICAgIC8vIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3MgbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRoYXQgaGF2ZSBiZWVuIHVuc3Vic2NyaWJlZCBpbiB0aGUgIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AuXG5cbiAgICAgICAgdmFyIG5vdGlmeU5lc3RlZFN1YnMgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKSxcbiAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdXNlTWVtbzJbMF0sXG4gICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyA9IF91c2VNZW1vMlsxXTsgLy8gRGV0ZXJtaW5lIHdoYXQge3N0b3JlLCBzdWJzY3JpcHRpb259IHZhbHVlIHNob3VsZCBiZSBwdXQgaW50byBuZXN0ZWQgY29udGV4dCwgaWYgbmVjZXNzYXJ5LFxuICAgICAgLy8gYW5kIG1lbW9pemUgdGhhdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBjb250ZXh0IHVwZGF0ZXMuXG5cblxuICAgICAgdmFyIG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIC8vIFRoaXMgY29tcG9uZW50IGlzIGRpcmVjdGx5IHN1YnNjcmliZWQgdG8gYSBzdG9yZSBmcm9tIHByb3BzLlxuICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgZGVzY2VuZGFudHMgcmVhZGluZyBmcm9tIHRoaXMgc3RvcmUgLSBwYXNzIGRvd24gd2hhdGV2ZXJcbiAgICAgICAgICAvLyB0aGUgZXhpc3RpbmcgY29udGV4dCB2YWx1ZSBpcyBmcm9tIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3Rvci5cbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSwgcHV0IHRoaXMgY29tcG9uZW50J3Mgc3Vic2NyaXB0aW9uIGluc3RhbmNlIGludG8gY29udGV4dCwgc28gdGhhdFxuICAgICAgICAvLyBjb25uZWN0ZWQgZGVzY2VuZGFudHMgd29uJ3QgdXBkYXRlIHVudGlsIGFmdGVyIHRoaXMgY29tcG9uZW50IGlzIGRvbmVcblxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dFZhbHVlLCB7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pOyAvLyBXZSBuZWVkIHRvIGZvcmNlIHRoaXMgd3JhcHBlciBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW5ldmVyIGEgUmVkdXggc3RvcmUgdXBkYXRlXG4gICAgICAvLyBjYXVzZXMgYSBjaGFuZ2UgdG8gdGhlIGNhbGN1bGF0ZWQgY2hpbGQgY29tcG9uZW50IHByb3BzIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IgaW4gbWFwU3RhdGUpXG5cbiAgICAgIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoc3RvcmVTdGF0ZVVwZGF0ZXNSZWR1Y2VyLCBFTVBUWV9BUlJBWSwgaW5pdFN0YXRlVXBkYXRlcyksXG4gICAgICAgICAgX3VzZVJlZHVjZXIkID0gX3VzZVJlZHVjZXJbMF0sXG4gICAgICAgICAgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCA9IF91c2VSZWR1Y2VyJFswXSxcbiAgICAgICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07IC8vIFByb3BhZ2F0ZSBhbnkgbWFwU3RhdGUvbWFwRGlzcGF0Y2ggZXJyb3JzIHVwd2FyZHNcblxuXG4gICAgICBpZiAocHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCAmJiBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHRocm93IHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQuZXJyb3I7XG4gICAgICB9IC8vIFNldCB1cCByZWZzIHRvIGNvb3JkaW5hdGUgdmFsdWVzIGJldHdlZW4gdGhlIHN1YnNjcmlwdGlvbiBlZmZlY3QgYW5kIHRoZSByZW5kZXIgbG9naWNcblxuXG4gICAgICB2YXIgbGFzdENoaWxkUHJvcHMgPSB1c2VSZWYoKTtcbiAgICAgIHZhciBsYXN0V3JhcHBlclByb3BzID0gdXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICB2YXIgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IHVzZVJlZigpO1xuICAgICAgdmFyIHJlbmRlcklzU2NoZWR1bGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgIHZhciBhY3R1YWxDaGlsZFByb3BzID0gdXNlUHVyZU9ubHlNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHJpY2t5IGxvZ2ljIGhlcmU6XG4gICAgICAgIC8vIC0gVGhpcyByZW5kZXIgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgYSBSZWR1eCBzdG9yZSB1cGRhdGUgdGhhdCBwcm9kdWNlZCBuZXcgY2hpbGQgcHJvcHNcbiAgICAgICAgLy8gLSBIb3dldmVyLCB3ZSBtYXkgaGF2ZSBnb3R0ZW4gbmV3IHdyYXBwZXIgcHJvcHMgYWZ0ZXIgdGhhdFxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5ldyBjaGlsZCBwcm9wcywgYW5kIHRoZSBzYW1lIHdyYXBwZXIgcHJvcHMsIHdlIGtub3cgd2Ugc2hvdWxkIHVzZSB0aGUgbmV3IGNoaWxkIHByb3BzIGFzLWlzLlxuICAgICAgICAvLyBCdXQsIGlmIHdlIGhhdmUgbmV3IHdyYXBwZXIgcHJvcHMsIHRob3NlIG1pZ2h0IGNoYW5nZSB0aGUgY2hpbGQgcHJvcHMsIHNvIHdlIGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhpbmdzLlxuICAgICAgICAvLyBTbywgd2UnbGwgdXNlIHRoZSBjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZSBvbmx5IGlmIHRoZSB3cmFwcGVyIHByb3BzIGFyZSB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuXG4gICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICB9IC8vIFRPRE8gV2UncmUgcmVhZGluZyB0aGUgc3RvcmUgZGlyZWN0bHkgaW4gcmVuZGVyKCkgaGVyZS4gQmFkIGlkZWE/XG4gICAgICAgIC8vIFRoaXMgd2lsbCBsaWtlbHkgY2F1c2UgQmFkIFRoaW5ncyAoVE0pIHRvIGhhcHBlbiBpbiBDb25jdXJyZW50IE1vZGUuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyB0aGlzIGJlY2F1c2Ugb24gcmVuZGVycyBfbm90XyBjYXVzZWQgYnkgc3RvcmUgdXBkYXRlcywgd2UgbmVlZCB0aGUgbGF0ZXN0IHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmUuXG5cblxuICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICB9LCBbc3RvcmUsIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQsIHdyYXBwZXJQcm9wc10pOyAvLyBXZSBuZWVkIHRoaXMgdG8gZXhlY3V0ZSBzeW5jaHJvbm91c2x5IGV2ZXJ5IHRpbWUgd2UgcmUtcmVuZGVyLiBIb3dldmVyLCBSZWFjdCB3YXJuc1xuICAgICAgLy8gYWJvdXQgdXNlTGF5b3V0RWZmZWN0IGluIFNTUiwgc28gd2UgdHJ5IHRvIGRldGVjdCBlbnZpcm9ubWVudCBhbmQgZmFsbCBiYWNrIHRvXG4gICAgICAvLyBqdXN0IHVzZUVmZmVjdCBpbnN0ZWFkIHRvIGF2b2lkIHRoZSB3YXJuaW5nLCBzaW5jZSBuZWl0aGVyIHdpbGwgcnVuIGFueXdheS5cblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgYWN0dWFsQ2hpbGRQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vic10pOyAvLyBPdXIgcmUtc3Vic2NyaWJlIGxvZ2ljIG9ubHkgcnVucyB3aGVuIHRoZSBzdG9yZS9zdWJzY3JpcHRpb24gc2V0dXAgY2hhbmdlc1xuXG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3Moc3Vic2NyaWJlVXBkYXRlcywgW3Nob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2hdLCBbc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yXSk7IC8vIE5vdyB0aGF0IGFsbCB0aGF0J3MgZG9uZSwgd2UgY2FuIGZpbmFsbHkgdHJ5IHRvIGFjdHVhbGx5IHJlbmRlciB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgbWVtb2l6ZSB0aGUgZWxlbWVudHMgZm9yIHRoZSByZW5kZXJlZCBjaGlsZCBjb21wb25lbnQgYXMgYW4gb3B0aW1pemF0aW9uLlxuXG4gICAgICB2YXIgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgYWN0dWFsQ2hpbGRQcm9wcywge1xuICAgICAgICAgIHJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZlxuICAgICAgICB9KSk7XG4gICAgICB9LCBbcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pOyAvLyBJZiBSZWFjdCBzZWVzIHRoZSBleGFjdCBzYW1lIGVsZW1lbnQgcmVmZXJlbmNlIGFzIGxhc3QgdGltZSwgaXQgYmFpbHMgb3V0IG9mIHJlLXJlbmRlcmluZ1xuICAgICAgLy8gdGhhdCBjaGlsZCwgc2FtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBSZWFjdC5tZW1vKCkgb3IgcmV0dXJuZWQgZmFsc2UgZnJvbSBzaG91bGRDb21wb25lbnRVcGRhdGUuXG5cbiAgICAgIHZhciByZW5kZXJlZENoaWxkID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICAvLyBJZiB0aGlzIGNvbXBvbmVudCBpcyBzdWJzY3JpYmVkIHRvIHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdG8gcGFzcyBpdHMgb3duXG4gICAgICAgICAgLy8gc3Vic2NyaXB0aW9uIGluc3RhbmNlIGRvd24gdG8gb3VyIGRlc2NlbmRhbnRzLiBUaGF0IG1lYW5zIHJlbmRlcmluZyB0aGUgc2FtZVxuICAgICAgICAgIC8vIENvbnRleHQgaW5zdGFuY2UsIGFuZCBwdXR0aW5nIGEgZGlmZmVyZW50IHZhbHVlIGludG8gdGhlIGNvbnRleHQuXG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwge1xuICAgICAgICAgICAgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWVcbiAgICAgICAgICB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfSAvLyBJZiB3ZSdyZSBpbiBcInB1cmVcIiBtb2RlLCBlbnN1cmUgb3VyIHdyYXBwZXIgY29tcG9uZW50IG9ubHkgcmUtcmVuZGVycyB3aGVuIGluY29taW5nIHByb3BzIGhhdmUgY2hhbmdlZC5cblxuXG4gICAgdmFyIENvbm5lY3QgPSBwdXJlID8gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pIDogQ29ubmVjdEZ1bmN0aW9uO1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIHZhciBmb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICAgIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIGhvaXN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBob2lzdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuLi91dGlscy9zaGFsbG93RXF1YWwnO1xuaW1wb3J0IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBEaXNwYXRjaFRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBTdGF0ZVRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIGZyb20gJy4vbWVyZ2VQcm9wcyc7XG5pbXBvcnQgZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuL3NlbGVjdG9yRmFjdG9yeSc7XG4vKlxyXG4gIGNvbm5lY3QgaXMgYSBmYWNhZGUgb3ZlciBjb25uZWN0QWR2YW5jZWQuIEl0IHR1cm5zIGl0cyBhcmdzIGludG8gYSBjb21wYXRpYmxlXHJcbiAgc2VsZWN0b3JGYWN0b3J5LCB3aGljaCBoYXMgdGhlIHNpZ25hdHVyZTpcclxuXHJcbiAgICAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgPT4gbmV4dEZpbmFsUHJvcHNcclxuICBcclxuICBjb25uZWN0IHBhc3NlcyBpdHMgYXJncyB0byBjb25uZWN0QWR2YW5jZWQgYXMgb3B0aW9ucywgd2hpY2ggd2lsbCBpbiB0dXJuIHBhc3MgdGhlbSB0b1xyXG4gIHNlbGVjdG9yRmFjdG9yeSBlYWNoIHRpbWUgYSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSBpcyBpbnN0YW50aWF0ZWQgb3IgaG90IHJlbG9hZGVkLlxyXG5cclxuICBzZWxlY3RvckZhY3RvcnkgcmV0dXJucyBhIGZpbmFsIHByb3BzIHNlbGVjdG9yIGZyb20gaXRzIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLCBtZXJnZVByb3BzLFxyXG4gIG1lcmdlUHJvcHNGYWN0b3JpZXMsIGFuZCBwdXJlIGFyZ3MuXHJcblxyXG4gIFRoZSByZXN1bHRpbmcgZmluYWwgcHJvcHMgc2VsZWN0b3IgaXMgY2FsbGVkIGJ5IHRoZSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSB3aGVuZXZlclxyXG4gIGl0IHJlY2VpdmVzIG5ldyBwcm9wcyBvciBzdG9yZSBzdGF0ZS5cclxuICovXG5cbmZ1bmN0aW9uIG1hdGNoKGFyZywgZmFjdG9yaWVzLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSBmYWN0b3JpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFjdG9yaWVzW2ldKGFyZyk7XG4gICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIG9mIHR5cGUgXCIgKyB0eXBlb2YgYXJnICsgXCIgZm9yIFwiICsgbmFtZSArIFwiIGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgXCIgKyBvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lICsgXCIuXCIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufSAvLyBjcmVhdGVDb25uZWN0IHdpdGggZGVmYXVsdCBhcmdzIGJ1aWxkcyB0aGUgJ29mZmljaWFsJyBjb25uZWN0IGJlaGF2aW9yLiBDYWxsaW5nIGl0IHdpdGhcbi8vIGRpZmZlcmVudCBvcHRpb25zIG9wZW5zIHVwIHNvbWUgdGVzdGluZyBhbmQgZXh0ZW5zaWJpbGl0eSBzY2VuYXJpb3NcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29ubmVjdChfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRjb25uZWN0SE9DID0gX3JlZi5jb25uZWN0SE9DLFxuICAgICAgY29ubmVjdEhPQyA9IF9yZWYkY29ubmVjdEhPQyA9PT0gdm9pZCAwID8gY29ubmVjdEFkdmFuY2VkIDogX3JlZiRjb25uZWN0SE9DLFxuICAgICAgX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID0gX3JlZi5tYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YgPT09IHZvaWQgMCA/IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YsXG4gICAgICBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPSBfcmVmLm1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyA9PT0gdm9pZCAwID8gZGVmYXVsdE1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyxcbiAgICAgIF9yZWYkbWVyZ2VQcm9wc0ZhY3RvciA9IF9yZWYubWVyZ2VQcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1lcmdlUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPT09IHZvaWQgMCA/IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIDogX3JlZiRtZXJnZVByb3BzRmFjdG9yLFxuICAgICAgX3JlZiRzZWxlY3RvckZhY3RvcnkgPSBfcmVmLnNlbGVjdG9yRmFjdG9yeSxcbiAgICAgIHNlbGVjdG9yRmFjdG9yeSA9IF9yZWYkc2VsZWN0b3JGYWN0b3J5ID09PSB2b2lkIDAgPyBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IDogX3JlZiRzZWxlY3RvckZhY3Rvcnk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIF9yZWYyKSB7XG4gICAgaWYgKF9yZWYyID09PSB2b2lkIDApIHtcbiAgICAgIF9yZWYyID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9yZWYzID0gX3JlZjIsXG4gICAgICAgIF9yZWYzJHB1cmUgPSBfcmVmMy5wdXJlLFxuICAgICAgICBwdXJlID0gX3JlZjMkcHVyZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYzJHB1cmUsXG4gICAgICAgIF9yZWYzJGFyZVN0YXRlc0VxdWFsID0gX3JlZjMuYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIGFyZVN0YXRlc0VxdWFsID0gX3JlZjMkYXJlU3RhdGVzRXF1YWwgPT09IHZvaWQgMCA/IHN0cmljdEVxdWFsIDogX3JlZjMkYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIF9yZWYzJGFyZU93blByb3BzRXF1YSA9IF9yZWYzLmFyZU93blByb3BzRXF1YWwsXG4gICAgICAgIGFyZU93blByb3BzRXF1YWwgPSBfcmVmMyRhcmVPd25Qcm9wc0VxdWEgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZU93blByb3BzRXF1YSxcbiAgICAgICAgX3JlZjMkYXJlU3RhdGVQcm9wc0VxID0gX3JlZjMuYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBfcmVmMyRhcmVTdGF0ZVByb3BzRXEgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZVN0YXRlUHJvcHNFcSxcbiAgICAgICAgX3JlZjMkYXJlTWVyZ2VkUHJvcHNFID0gX3JlZjMuYXJlTWVyZ2VkUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYzJGFyZU1lcmdlZFByb3BzRSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlTWVyZ2VkUHJvcHNFLFxuICAgICAgICBleHRyYU9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wicHVyZVwiLCBcImFyZVN0YXRlc0VxdWFsXCIsIFwiYXJlT3duUHJvcHNFcXVhbFwiLCBcImFyZVN0YXRlUHJvcHNFcXVhbFwiLCBcImFyZU1lcmdlZFByb3BzRXF1YWxcIl0pO1xuXG4gICAgdmFyIGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXRjaChtYXBTdGF0ZVRvUHJvcHMsIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgJ21hcFN0YXRlVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWF0Y2gobWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKTtcbiAgICB2YXIgaW5pdE1lcmdlUHJvcHMgPSBtYXRjaChtZXJnZVByb3BzLCBtZXJnZVByb3BzRmFjdG9yaWVzLCAnbWVyZ2VQcm9wcycpO1xuICAgIHJldHVybiBjb25uZWN0SE9DKHNlbGVjdG9yRmFjdG9yeSwgX2V4dGVuZHMoe1xuICAgICAgLy8gdXNlZCBpbiBlcnJvciBtZXNzYWdlc1xuICAgICAgbWV0aG9kTmFtZTogJ2Nvbm5lY3QnLFxuICAgICAgLy8gdXNlZCB0byBjb21wdXRlIENvbm5lY3QncyBkaXNwbGF5TmFtZSBmcm9tIHRoZSB3cmFwcGVkIGNvbXBvbmVudCdzIGRpc3BsYXlOYW1lLlxuICAgICAgZ2V0RGlzcGxheU5hbWU6IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29ubmVjdChcIiArIG5hbWUgKyBcIilcIjtcbiAgICAgIH0sXG4gICAgICAvLyBpZiBtYXBTdGF0ZVRvUHJvcHMgaXMgZmFsc3ksIHRoZSBDb25uZWN0IGNvbXBvbmVudCBkb2Vzbid0IHN1YnNjcmliZSB0byBzdG9yZSBzdGF0ZSBjaGFuZ2VzXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKSxcbiAgICAgIC8vIHBhc3NlZCB0aHJvdWdoIHRvIHNlbGVjdG9yRmFjdG9yeVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wczogaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHM6IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wczogaW5pdE1lcmdlUHJvcHMsXG4gICAgICBwdXJlOiBwdXJlLFxuICAgICAgYXJlU3RhdGVzRXF1YWw6IGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbDogYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbDogYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbDogYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH0sIGV4dHJhT3B0aW9ucykpO1xuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL2NyZWF0ZUNvbm5lY3QoKTsiLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbihtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZyhtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICB9O1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3QobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHMgJiYgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gJ29iamVjdCcgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaCk7XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3RdOyIsImltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcFN0YXRlVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZGVmYXVsdCBbd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24sIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmddOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHZlcmlmeVBsYWluT2JqZWN0IGZyb20gJy4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG93blByb3BzLCBzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdE1lcmdlUHJvcHNQcm94eShkaXNwYXRjaCwgX3JlZikge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IF9yZWYuZGlzcGxheU5hbWUsXG4gICAgICAgIHB1cmUgPSBfcmVmLnB1cmUsXG4gICAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBfcmVmLmFyZU1lcmdlZFByb3BzRXF1YWw7XG4gICAgdmFyIGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICB2YXIgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgdmFyIG5leHRNZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuXG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIXB1cmUgfHwgIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzUnVuT25jZSA9IHRydWU7XG4gICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgdmVyaWZ5UGxhaW5PYmplY3QobWVyZ2VkUHJvcHMsIGRpc3BsYXlOYW1lLCAnbWVyZ2VQcm9wcycpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gICAgfTtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24obWVyZ2VQcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1lcmdlUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc09taXR0ZWQobWVyZ2VQcm9wcykge1xuICByZXR1cm4gIW1lcmdlUHJvcHMgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNZXJnZVByb3BzO1xuICB9IDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NZXJnZVByb3BzSXNGdW5jdGlvbiwgd2hlbk1lcmdlUHJvcHNJc09taXR0ZWRdOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IHZlcmlmeVN1YnNlbGVjdG9ycyBmcm9tICcuL3ZlcmlmeVN1YnNlbGVjdG9ycyc7XG5leHBvcnQgZnVuY3Rpb24gaW1wdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvcihzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4gbWVyZ2VQcm9wcyhtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSwgbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyksIG93blByb3BzKTtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIF9yZWYpIHtcbiAgdmFyIGFyZVN0YXRlc0VxdWFsID0gX3JlZi5hcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWwgPSBfcmVmLmFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBfcmVmLmFyZVN0YXRlUHJvcHNFcXVhbDtcbiAgdmFyIGhhc1J1bkF0TGVhc3RPbmNlID0gZmFsc2U7XG4gIHZhciBzdGF0ZTtcbiAgdmFyIG93blByb3BzO1xuICB2YXIgc3RhdGVQcm9wcztcbiAgdmFyIGRpc3BhdGNoUHJvcHM7XG4gIHZhciBtZXJnZWRQcm9wcztcblxuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCkge1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgdmFyIG5leHRTdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgdmFyIHN0YXRlUHJvcHNDaGFuZ2VkID0gIWFyZVN0YXRlUHJvcHNFcXVhbChuZXh0U3RhdGVQcm9wcywgc3RhdGVQcm9wcyk7XG4gICAgc3RhdGVQcm9wcyA9IG5leHRTdGF0ZVByb3BzO1xuICAgIGlmIChzdGF0ZVByb3BzQ2hhbmdlZCkgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICB2YXIgcHJvcHNDaGFuZ2VkID0gIWFyZU93blByb3BzRXF1YWwobmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgdmFyIHN0YXRlQ2hhbmdlZCA9ICFhcmVTdGF0ZXNFcXVhbChuZXh0U3RhdGUsIHN0YXRlKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcbiAgICBpZiAocHJvcHNDaGFuZ2VkICYmIHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKTtcbiAgICBpZiAocHJvcHNDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3UHJvcHMoKTtcbiAgICBpZiAoc3RhdGVDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3U3RhdGUoKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvcihuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHJldHVybiBoYXNSdW5BdExlYXN0T25jZSA/IGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgOiBoYW5kbGVGaXJzdENhbGwobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpO1xuICB9O1xufSAvLyBUT0RPOiBBZGQgbW9yZSBjb21tZW50c1xuLy8gSWYgcHVyZSBpcyB0cnVlLCB0aGUgc2VsZWN0b3IgcmV0dXJuZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHdpbGwgbWVtb2l6ZSBpdHMgcmVzdWx0cyxcbi8vIGFsbG93aW5nIGNvbm5lY3RBZHZhbmNlZCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZSB0byByZXR1cm4gZmFsc2UgaWYgZmluYWxcbi8vIHByb3BzIGhhdmUgbm90IGNoYW5nZWQuIElmIGZhbHNlLCB0aGUgc2VsZWN0b3Igd2lsbCBhbHdheXMgcmV0dXJuIGEgbmV3XG4vLyBvYmplY3QgYW5kIHNob3VsZENvbXBvbmVudFVwZGF0ZSB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCwgX3JlZjIpIHtcbiAgdmFyIGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBfcmVmMi5pbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IF9yZWYyLmluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyA9IF9yZWYyLmluaXRNZXJnZVByb3BzLFxuICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJpbml0TWFwU3RhdGVUb1Byb3BzXCIsIFwiaW5pdE1hcERpc3BhdGNoVG9Qcm9wc1wiLCBcImluaXRNZXJnZVByb3BzXCJdKTtcblxuICB2YXIgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgdmFyIG1lcmdlUHJvcHMgPSBpbml0TWVyZ2VQcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIG9wdGlvbnMuZGlzcGxheU5hbWUpO1xuICB9XG5cbiAgdmFyIHNlbGVjdG9yRmFjdG9yeSA9IG9wdGlvbnMucHVyZSA/IHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5IDogaW1wdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeTtcbiAgcmV0dXJuIHNlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIG9wdGlvbnMpO1xufSIsImltcG9ydCB3YXJuaW5nIGZyb20gJy4uL3V0aWxzL3dhcm5pbmcnO1xuXG5mdW5jdGlvbiB2ZXJpZnkoc2VsZWN0b3IsIG1ldGhvZE5hbWUsIGRpc3BsYXlOYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHZhbHVlIGZvciBcIiArIG1ldGhvZE5hbWUgKyBcIiBpbiBcIiArIGRpc3BsYXlOYW1lICsgXCIuXCIpO1xuICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09ICdtYXBTdGF0ZVRvUHJvcHMnIHx8IG1ldGhvZE5hbWUgPT09ICdtYXBEaXNwYXRjaFRvUHJvcHMnKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2VsZWN0b3IsICdkZXBlbmRzT25Pd25Qcm9wcycpKSB7XG4gICAgICB3YXJuaW5nKFwiVGhlIHNlbGVjdG9yIGZvciBcIiArIG1ldGhvZE5hbWUgKyBcIiBvZiBcIiArIGRpc3BsYXlOYW1lICsgXCIgZGlkIG5vdCBzcGVjaWZ5IGEgdmFsdWUgZm9yIGRlcGVuZHNPbk93blByb3BzLlwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2ZXJpZnkobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgJ21lcmdlUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG59IiwiaW1wb3J0IHZlcmlmeVBsYWluT2JqZWN0IGZyb20gJy4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCwgb3B0aW9ucykge1xuICAgIHZhciBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuXG4gICAgY29uc3RhbnRTZWxlY3Rvci5kZXBlbmRzT25Pd25Qcm9wcyA9IGZhbHNlO1xuICAgIHJldHVybiBjb25zdGFudFNlbGVjdG9yO1xuICB9O1xufSAvLyBkZXBlbmRzT25Pd25Qcm9wcyBpcyB1c2VkIGJ5IGNyZWF0ZU1hcFRvUHJvcHNQcm94eSB0byBkZXRlcm1pbmUgd2hldGhlciB0byBwYXNzIHByb3BzIGFzIGFyZ3Ncbi8vIHRvIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuIEl0IGlzIGFsc28gdXNlZCBieSBtYWtlUHVyZVByb3BzU2VsZWN0b3IgdG8gZGV0ZXJtaW5lXG4vLyB3aGV0aGVyIG1hcFRvUHJvcHMgbmVlZHMgdG8gYmUgaW52b2tlZCB3aGVuIHByb3BzIGhhdmUgY2hhbmdlZC5cbi8vXG4vLyBBIGxlbmd0aCBvZiBvbmUgc2lnbmFscyB0aGF0IG1hcFRvUHJvcHMgZG9lcyBub3QgZGVwZW5kIG9uIHByb3BzIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnQuXG4vLyBBIGxlbmd0aCBvZiB6ZXJvIGlzIGFzc3VtZWQgdG8gbWVhbiBtYXBUb1Byb3BzIGlzIGdldHRpbmcgYXJncyB2aWEgYXJndW1lbnRzIG9yIC4uLmFyZ3MgYW5kXG4vLyB0aGVyZWZvcmUgbm90IHJlcG9ydGluZyBpdHMgbGVuZ3RoIGFjY3VyYXRlbHkuLlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcykge1xuICByZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gbnVsbCAmJiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzICE9PSB1bmRlZmluZWQgPyBCb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIDogbWFwVG9Qcm9wcy5sZW5ndGggIT09IDE7XG59IC8vIFVzZWQgYnkgd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24gYW5kIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLFxuLy8gdGhpcyBmdW5jdGlvbiB3cmFwcyBtYXBUb1Byb3BzIGluIGEgcHJveHkgZnVuY3Rpb24gd2hpY2ggZG9lcyBzZXZlcmFsIHRoaW5nczpcbi8vXG4vLyAgKiBEZXRlY3RzIHdoZXRoZXIgdGhlIG1hcFRvUHJvcHMgZnVuY3Rpb24gYmVpbmcgY2FsbGVkIGRlcGVuZHMgb24gcHJvcHMsIHdoaWNoXG4vLyAgICBpcyB1c2VkIGJ5IHNlbGVjdG9yRmFjdG9yeSB0byBkZWNpZGUgaWYgaXQgc2hvdWxkIHJlaW52b2tlIG9uIHByb3BzIGNoYW5nZXMuXG4vL1xuLy8gICogT24gZmlyc3QgY2FsbCwgaGFuZGxlcyBtYXBUb1Byb3BzIGlmIHJldHVybnMgYW5vdGhlciBmdW5jdGlvbiwgYW5kIHRyZWF0cyB0aGF0XG4vLyAgICBuZXcgZnVuY3Rpb24gYXMgdGhlIHRydWUgbWFwVG9Qcm9wcyBmb3Igc3Vic2VxdWVudCBjYWxscy5cbi8vXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCB2ZXJpZmllcyB0aGUgZmlyc3QgcmVzdWx0IGlzIGEgcGxhaW4gb2JqZWN0LCBpbiBvcmRlciB0byB3YXJuXG4vLyAgICB0aGUgZGV2ZWxvcGVyIHRoYXQgdGhlaXIgbWFwVG9Qcm9wcyBmdW5jdGlvbiBpcyBub3QgcmV0dXJuaW5nIGEgdmFsaWQgcmVzdWx0LlxuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBUb1Byb3BzLCBtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0UHJveHlTZWxlY3RvcihkaXNwYXRjaCwgX3JlZikge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IF9yZWYuZGlzcGxheU5hbWU7XG5cbiAgICB2YXIgcHJveHkgPSBmdW5jdGlvbiBtYXBUb1Byb3BzUHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcmV0dXJuIHByb3h5LmRlcGVuZHNPbk93blByb3BzID8gcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSA6IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoKTtcbiAgICB9OyAvLyBhbGxvdyBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5IHRvIGdldCBvd25Qcm9wc1xuXG5cbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG5cbiAgICBwcm94eS5tYXBUb1Byb3BzID0gZnVuY3Rpb24gZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICBwcm94eS5tYXBUb1Byb3BzID0gbWFwVG9Qcm9wcztcbiAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcyk7XG4gICAgICB2YXIgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm94eS5tYXBUb1Byb3BzID0gcHJvcHM7XG4gICAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMocHJvcHMpO1xuICAgICAgICBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgdmVyaWZ5UGxhaW5PYmplY3QocHJvcHMsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xufSIsImltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCB7IHVzZVN0b3JlIGFzIHVzZURlZmF1bHRTdG9yZSwgY3JlYXRlU3RvcmVIb29rIH0gZnJvbSAnLi91c2VTdG9yZSc7XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZURpc3BhdGNoYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQ7XG4gIH1cblxuICB2YXIgdXNlU3RvcmUgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZURpc3BhdGNoKCkge1xuICAgIHZhciBzdG9yZSA9IHVzZVN0b3JlKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xufVxuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IGBkaXNwYXRjaGAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl8ZnVuY3Rpb259IHJlZHV4IHN0b3JlJ3MgYGRpc3BhdGNoYCBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IENvdW50ZXJDb21wb25lbnQgPSAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAqICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAqICAgY29uc3QgaW5jcmVhc2VDb3VudGVyID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnaW5jcmVhc2UtY291bnRlcicgfSksIFtdKVxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8ZGl2PlxyXG4gKiAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxyXG4gKiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlYXNlQ291bnRlcn0+SW5jcmVhc2UgY291bnRlcjwvYnV0dG9uPlxyXG4gKiAgICAgPC9kaXY+XHJcbiAqICAgKVxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgdmFyIHVzZURpc3BhdGNoID0gLyojX19QVVJFX18qL2NyZWF0ZURpc3BhdGNoSG9vaygpOyIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgdmFsdWUgb2YgdGhlIGBSZWFjdFJlZHV4Q29udGV4dGAuIFRoaXMgaXMgYSBsb3ctbGV2ZWxcclxuICogaG9vayB0aGF0IHlvdSBzaG91bGQgdXN1YWxseSBub3QgbmVlZCB0byBjYWxsIGRpcmVjdGx5LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgdmFsdWUgb2YgdGhlIGBSZWFjdFJlZHV4Q29udGV4dGBcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VSZWR1eENvbnRleHQgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IENvdW50ZXJDb21wb25lbnQgPSAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAqICAgY29uc3QgeyBzdG9yZSB9ID0gdXNlUmVkdXhDb250ZXh0KClcclxuICogICByZXR1cm4gPGRpdj57c3RvcmUuZ2V0U3RhdGUoKX08L2Rpdj5cclxuICogfVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHV4Q29udGV4dCgpIHtcbiAgdmFyIGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoUmVhY3RSZWR1eENvbnRleHQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb250ZXh0VmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPicpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbn0iLCJpbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VSZWYsIHVzZU1lbW8sIHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWR1eENvbnRleHQgYXMgdXNlRGVmYXVsdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vdXNlUmVkdXhDb250ZXh0JztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vdXRpbHMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICcuLi91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcblxudmFyIHJlZkVxdWFsaXR5ID0gZnVuY3Rpb24gcmVmRXF1YWxpdHkoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIHVzZVNlbGVjdG9yV2l0aFN0b3JlQW5kU3Vic2NyaXB0aW9uKHNlbGVjdG9yLCBlcXVhbGl0eUZuLCBzdG9yZSwgY29udGV4dFN1Yikge1xuICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMgKyAxO1xuICB9LCAwKSxcbiAgICAgIGZvcmNlUmVuZGVyID0gX3VzZVJlZHVjZXJbMV07XG5cbiAgdmFyIHN1YnNjcmlwdGlvbiA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKHN0b3JlLCBjb250ZXh0U3ViKTtcbiAgfSwgW3N0b3JlLCBjb250ZXh0U3ViXSk7XG4gIHZhciBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTZWxlY3RvciA9IHVzZVJlZigpO1xuICB2YXIgbGF0ZXN0U3RvcmVTdGF0ZSA9IHVzZVJlZigpO1xuICB2YXIgbGF0ZXN0U2VsZWN0ZWRTdGF0ZSA9IHVzZVJlZigpO1xuICB2YXIgc3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIHZhciBzZWxlY3RlZFN0YXRlO1xuXG4gIHRyeSB7XG4gICAgaWYgKHNlbGVjdG9yICE9PSBsYXRlc3RTZWxlY3Rvci5jdXJyZW50IHx8IHN0b3JlU3RhdGUgIT09IGxhdGVzdFN0b3JlU3RhdGUuY3VycmVudCB8fCBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuZXdTZWxlY3RlZFN0YXRlID0gc2VsZWN0b3Ioc3RvcmVTdGF0ZSk7IC8vIGVuc3VyZSBsYXRlc3Qgc2VsZWN0ZWQgc3RhdGUgaXMgcmV1c2VkIHNvIHRoYXQgYSBjdXN0b20gZXF1YWxpdHkgZnVuY3Rpb24gY2FuIHJlc3VsdCBpbiBpZGVudGljYWwgcmVmZXJlbmNlc1xuXG4gICAgICBpZiAobGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50ID09PSB1bmRlZmluZWQgfHwgIWVxdWFsaXR5Rm4obmV3U2VsZWN0ZWRTdGF0ZSwgbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50KSkge1xuICAgICAgICBzZWxlY3RlZFN0YXRlID0gbmV3U2VsZWN0ZWRTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkU3RhdGUgPSBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkU3RhdGUgPSBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQ7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICBlcnIubWVzc2FnZSArPSBcIlxcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XFxuXCIgKyBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQuc3RhY2sgKyBcIlxcblxcblwiO1xuICAgIH1cblxuICAgIHRocm93IGVycjtcbiAgfVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGxhdGVzdFNlbGVjdG9yLmN1cnJlbnQgPSBzZWxlY3RvcjtcbiAgICBsYXRlc3RTdG9yZVN0YXRlLmN1cnJlbnQgPSBzdG9yZVN0YXRlO1xuICAgIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCA9IHNlbGVjdGVkU3RhdGU7XG4gICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICB9KTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIF9uZXdTZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0b3IuY3VycmVudChzdG9yZS5nZXRTdGF0ZSgpKTtcblxuICAgICAgICBpZiAoZXF1YWxpdHlGbihfbmV3U2VsZWN0ZWRTdGF0ZSwgbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCA9IF9uZXdTZWxlY3RlZFN0YXRlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHdlIGlnbm9yZSBhbGwgZXJyb3JzIGhlcmUsIHNpbmNlIHdoZW4gdGhlIGNvbXBvbmVudFxuICAgICAgICAvLyBpcyByZS1yZW5kZXJlZCwgdGhlIHNlbGVjdG9ycyBhcmUgY2FsbGVkIGFnYWluLCBhbmRcbiAgICAgICAgLy8gd2lsbCB0aHJvdyBhZ2FpbiwgaWYgbmVpdGhlciBwcm9wcyBub3Igc3RvcmUgc3RhdGVcbiAgICAgICAgLy8gY2hhbmdlZFxuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSBlcnI7XG4gICAgICB9XG5cbiAgICAgIGZvcmNlUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzdWJzY3JpcHRpb25dKTtcbiAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG59XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlU2VsZWN0b3JgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTZWxlY3RvcihzZWxlY3RvciwgZXF1YWxpdHlGbikge1xuICAgIGlmIChlcXVhbGl0eUZuID09PSB2b2lkIDApIHtcbiAgICAgIGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc2VsZWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgX3VzZVJlZHV4Q29udGV4dCA9IHVzZVJlZHV4Q29udGV4dCgpLFxuICAgICAgICBzdG9yZSA9IF91c2VSZWR1eENvbnRleHQuc3RvcmUsXG4gICAgICAgIGNvbnRleHRTdWIgPSBfdXNlUmVkdXhDb250ZXh0LnN1YnNjcmlwdGlvbjtcblxuICAgIHZhciBzZWxlY3RlZFN0YXRlID0gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKTtcbiAgICB1c2VEZWJ1Z1ZhbHVlKHNlbGVjdGVkU3RhdGUpO1xuICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICB9O1xufVxuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlJ3Mgc3RhdGUuIFRoaXMgaG9vayB0YWtlcyBhIHNlbGVjdG9yIGZ1bmN0aW9uXHJcbiAqIGFzIGFuIGFyZ3VtZW50LiBUaGUgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIHN0b3JlIHN0YXRlLlxyXG4gKlxyXG4gKiBUaGlzIGhvb2sgdGFrZXMgYW4gb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyaXNvbiBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlclxyXG4gKiB0aGF0IGFsbG93cyB5b3UgdG8gY3VzdG9taXplIHRoZSB3YXkgdGhlIHNlbGVjdGVkIHN0YXRlIGlzIGNvbXBhcmVkIHRvIGRldGVybWluZVxyXG4gKiB3aGV0aGVyIHRoZSBjb21wb25lbnQgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbGVjdG9yIHRoZSBzZWxlY3RvciBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gZXF1YWxpdHlGbiB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5XHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSBzZWxlY3RlZCBzdGF0ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IGNvdW50ZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb3VudGVyKVxyXG4gKiAgIHJldHVybiA8ZGl2Pntjb3VudGVyfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgdmFyIHVzZVNlbGVjdG9yID0gLyojX19QVVJFX18qL2NyZWF0ZVNlbGVjdG9ySG9vaygpOyIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSZWR1eENvbnRleHQgYXMgdXNlRGVmYXVsdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vdXNlUmVkdXhDb250ZXh0Jztcbi8qKlxyXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlU3RvcmVgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbnRleHR9IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VTdG9yZWAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTdG9yZSgpIHtcbiAgICB2YXIgX3VzZVJlZHV4Q29udGV4dCA9IHVzZVJlZHV4Q29udGV4dCgpLFxuICAgICAgICBzdG9yZSA9IF91c2VSZWR1eENvbnRleHQuc3RvcmU7XG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggc3RvcmUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSByZWR1eCBzdG9yZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBFeGFtcGxlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgdmFyIHVzZVN0b3JlID0gLyojX19QVVJFX18qL2NyZWF0ZVN0b3JlSG9vaygpOyIsImltcG9ydCBQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJvdmlkZXInO1xuaW1wb3J0IGNvbm5lY3RBZHZhbmNlZCBmcm9tICcuL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIGNyZWF0ZURpc3BhdGNoSG9vayB9IGZyb20gJy4vaG9va3MvdXNlRGlzcGF0Y2gnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9ySG9vayB9IGZyb20gJy4vaG9va3MvdXNlU2VsZWN0b3InO1xuaW1wb3J0IHsgdXNlU3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vaG9va3MvdXNlU3RvcmUnO1xuaW1wb3J0IHsgc2V0QmF0Y2ggfSBmcm9tICcuL3V0aWxzL2JhdGNoJztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIGFzIGJhdGNoIH0gZnJvbSAnLi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi91dGlscy9zaGFsbG93RXF1YWwnO1xuc2V0QmF0Y2goYmF0Y2gpO1xuZXhwb3J0IHsgUHJvdmlkZXIsIGNvbm5lY3RBZHZhbmNlZCwgUmVhY3RSZWR1eENvbnRleHQsIGNvbm5lY3QsIGJhdGNoLCB1c2VEaXNwYXRjaCwgY3JlYXRlRGlzcGF0Y2hIb29rLCB1c2VTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3JIb29rLCB1c2VTdG9yZSwgY3JlYXRlU3RvcmVIb29rLCBzaGFsbG93RXF1YWwgfTsiLCJpbXBvcnQgeyBnZXRCYXRjaCB9IGZyb20gJy4vYmF0Y2gnOyAvLyBlbmNhcHN1bGF0ZXMgdGhlIHN1YnNjcmlwdGlvbiBsb2dpYyBmb3IgY29ubmVjdGluZyBhIGNvbXBvbmVudCB0byB0aGUgcmVkdXggc3RvcmUsIGFzXG4vLyB3ZWxsIGFzIG5lc3Rpbmcgc3Vic2NyaXB0aW9ucyBvZiBkZXNjZW5kYW50IGNvbXBvbmVudHMsIHNvIHRoYXQgd2UgY2FuIGVuc3VyZSB0aGVcbi8vIGFuY2VzdG9yIGNvbXBvbmVudHMgcmUtcmVuZGVyIGJlZm9yZSBkZXNjZW5kYW50c1xuXG52YXIgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoKSB7fVxufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICB2YXIgYmF0Y2ggPSBnZXRCYXRjaCgpO1xuICB2YXIgZmlyc3QgPSBudWxsO1xuICB2YXIgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgbGFzdCA9IG51bGw7XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgIGJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZmlyc3Q7XG5cbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICB2YXIgbGlzdGVuZXIgPSBmaXJzdDtcblxuICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGFzdCA9IHtcbiAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICBwcmV2OiBsYXN0XG4gICAgICB9O1xuXG4gICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBTdWJzY3JpcHRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdWJzY3JpcHRpb24oc3RvcmUsIHBhcmVudFN1Yikge1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLnBhcmVudFN1YiA9IHBhcmVudFN1YjtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyID0gdGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3Vic2NyaXB0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkTmVzdGVkU3ViID0gZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdGhpcy50cnlTdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5TmVzdGVkU3VicyA9IGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMubm90aWZ5KCk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUNoYW5nZVdyYXBwZXIgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmICh0aGlzLm9uU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaXNTdWJzY3JpYmVkID0gZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMudW5zdWJzY3JpYmUpO1xuICB9O1xuXG4gIF9wcm90by50cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5wYXJlbnRTdWIgPyB0aGlzLnBhcmVudFN1Yi5hZGROZXN0ZWRTdWIodGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHRoaXMuc3RvcmUuc3Vic2NyaWJlKHRoaXMuaGFuZGxlQ2hhbmdlV3JhcHBlcik7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udHJ5VW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpO1xuXG5leHBvcnQgeyBTdWJzY3JpcHRpb24gYXMgZGVmYXVsdCB9OyIsIi8vIERlZmF1bHQgdG8gYSBkdW1teSBcImJhdGNoXCIgaW1wbGVtZW50YXRpb24gdGhhdCBqdXN0IHJ1bnMgdGhlIGNhbGxiYWNrXG5mdW5jdGlvbiBkZWZhdWx0Tm9vcEJhdGNoKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKCk7XG59XG5cbnZhciBiYXRjaCA9IGRlZmF1bHROb29wQmF0Y2g7IC8vIEFsbG93IGluamVjdGluZyBhbm90aGVyIGJhdGNoaW5nIGZ1bmN0aW9uIGxhdGVyXG5cbmV4cG9ydCB2YXIgc2V0QmF0Y2ggPSBmdW5jdGlvbiBzZXRCYXRjaChuZXdCYXRjaCkge1xuICByZXR1cm4gYmF0Y2ggPSBuZXdCYXRjaDtcbn07IC8vIFN1cHBseSBhIGdldHRlciBqdXN0IHRvIHNraXAgZGVhbGluZyB3aXRoIEVTTSBiaW5kaW5nc1xuXG5leHBvcnQgdmFyIGdldEJhdGNoID0gZnVuY3Rpb24gZ2V0QmF0Y2goKSB7XG4gIHJldHVybiBiYXRjaDtcbn07IiwiLyoqXHJcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHJldHVybiB0cnVlO1xuICB2YXIgYmFzZVByb3RvID0gcHJvdG87XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cblxuICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuZXhwb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tICdyZWFjdC1kb20nOyIsImZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7IC8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLiBXZSBuZWVkIHVzZUxheW91dEVmZmVjdCB0byBlbnN1cmUgdGhlIHN0b3JlXG4vLyBzdWJzY3JpcHRpb24gY2FsbGJhY2sgYWx3YXlzIGhhcyB0aGUgc2VsZWN0b3IgZnJvbSB0aGUgbGF0ZXN0IHJlbmRlciBjb21taXRcbi8vIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGEgc3RvcmUgdXBkYXRlIG1heSBoYXBwZW4gYmV0d2VlbiByZW5kZXIgYW5kIHRoZSBlZmZlY3QsXG4vLyB3aGljaCBtYXkgY2F1c2UgbWlzc2VkIHVwZGF0ZXM7IHdlIGFsc28gbXVzdCBlbnN1cmUgdGhlIHN0b3JlIHN1YnNjcmlwdGlvblxuLy8gaXMgY3JlYXRlZCBzeW5jaHJvbm91c2x5LCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IG9jY3VyIGJlZm9yZSB0aGVcbi8vIHN1YnNjcmlwdGlvbiBpcyBjcmVhdGVkIGFuZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUgbWF5IGJlIG9ic2VydmVkXG5cbmV4cG9ydCB2YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7IiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnLi9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vd2FybmluZyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcobWV0aG9kTmFtZSArIFwiKCkgaW4gXCIgKyBkaXNwbGF5TmFtZSArIFwiIG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkIFwiICsgdmFsdWUgKyBcIi5cIik7XG4gIH1cbn0iLCIvKipcclxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG5cbn0iLCJpbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmVfX2RlZmF1bHQgZnJvbSAnQHJlZHV4LXNhZ2EvY29yZSc7XG5leHBvcnQgKiBmcm9tICdAcmVkdXgtc2FnYS9jb3JlJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlX19kZWZhdWx0O1xuIiwiZXhwb3J0ICogZnJvbSAnQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzJztcbiIsImltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xufTtcblxudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBcIkBAcmVkdXgvSU5JVFwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046IGZ1bmN0aW9uIFBST0JFX1VOS05PV05fQUNUSU9OKCkge1xuICAgIHJldHVybiBcIkBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05cIiArIHJhbmRvbVN0cmluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gb2JqO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byAnICsgJ2NyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtICcgKyAndG9nZXRoZXIgdG8gYSBzaW5nbGUgZnVuY3Rpb24uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgKiBuZXh0TGlzdGVuZXJzIGFzIGEgdGVtcG9yYXJ5IGxpc3Qgd2hpbGUgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAqIHN1YnNjcmliZS91bnN1YnNjcmliZSBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiAnICsgJ1Bhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSAnICsgJ2NvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgY3VycmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7IC8vIFRoaXMgYWN0aW9uIGhhcyBhIHNpbWlsaWFyIGVmZmVjdCB0byBBY3Rpb25UeXBlcy5JTklULlxuICAgIC8vIEFueSByZWR1Y2VycyB0aGF0IGV4aXN0ZWQgaW4gYm90aCB0aGUgbmV3IGFuZCBvbGQgcm9vdFJlZHVjZXJcbiAgICAvLyB3aWxsIHJlY2VpdmUgdGhlIHByZXZpb3VzIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAgIC8vIHRoZSBuZXcgc3RhdGUgdHJlZSB3aXRoIGFueSByZWxldmFudCBkYXRhIGZyb20gdGhlIG9sZCBvbmUuXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRVBMQUNFXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH0gLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG5cblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICB9KTtcbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG59XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uRGVzY3JpcHRpb24gPSBhY3Rpb25UeXBlICYmIFwiYWN0aW9uIFxcXCJcIiArIFN0cmluZyhhY3Rpb25UeXBlKSArIFwiXFxcIlwiIHx8ICdhbiBhY3Rpb24nO1xuICByZXR1cm4gXCJHaXZlbiBcIiArIGFjdGlvbkRlc2NyaXB0aW9uICsgXCIsIHJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZC4gXCIgKyBcIlRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gXCIgKyBcIklmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gXCJUaGUgXCIgKyBhcmd1bWVudE5hbWUgKyBcIiBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFxcXCJcIiArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgXCJcXFwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIFwiICsgKFwia2V5czogXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCJcIik7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gXCIgKyBcIklmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBcIiArIFwiZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBcIiArIFwibm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgXCIgKyBcInlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSBcIiArIEFjdGlvblR5cGVzLklOSVQgKyBcIiBvciBvdGhlciBhY3Rpb25zIGluIFxcXCJyZWR1eC8qXFxcIiBcIikgKyBcIm5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIFwiICsgXCJjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBcIiArIFwiaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIFwiICsgXCJhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5cIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoXCJObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpOyAvLyBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHdhcm4gYWJvdXQgdGhlIHNhbWVcbiAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuXG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhzdGF0ZSkubGVuZ3RoO1xuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGFuIGFjdGlvbiBjcmVhdG9yIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBkaXNwYXRjaCB3cmFwcGVkIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCBcIiArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyBcIi4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gIH1cblxuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkpO1xuICB9XG5cbiAgaWYgKGVudW1lcmFibGVPbmx5KSBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gJyArICdPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKlxuICogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuICogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuICovXG5cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBzZXR0aW5nIG1vZGUgdG8gcHJvZHVjdGlvbiBpbiB3ZWJwYWNrIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmNlcHRzL21vZGUvKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IEFjdGlvblR5cGVzIGFzIF9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXMsIGFwcGx5TWlkZGxld2FyZSwgYmluZEFjdGlvbkNyZWF0b3JzLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH07XG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbC5qcyc7XG5cbnZhciByb290O1xuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSBwb255ZmlsbChyb290KTtcbmV4cG9ydCBkZWZhdWx0IHJlc3VsdDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9