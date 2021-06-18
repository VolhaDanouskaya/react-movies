(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Layout.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["main-layout"])
  }, children);
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./src/components/layout/Layout.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");






var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _store_store__WEBPACK_IMPORTED_MODULE_4__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, pageProps)));
};

MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/services/MoviesService.js":
/*!***************************************!*\
  !*** ./src/services/MoviesService.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
      url += "&filter=".concat(filter);
    }

    if (query) {
      url += "&search=".concat(query, "&searchBy=title");
    }

    return url;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new MoviesService());

/***/ }),

/***/ "./src/store/reducers/header.js":
/*!**************************************!*\
  !*** ./src/store/reducers/header.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/store/actions/types.js");


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

/***/ }),

/***/ "./src/store/reducers/movies.js":
/*!**************************************!*\
  !*** ./src/store/reducers/movies.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.LOAD_MOVIES_SUCCCESS:
      return action.movies;

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.ADD_MOVIE_SUCCESS:
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state), [action.movie]);

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.UPDATE_MOVIE_SUCCESS:
      return state.map(function (movie) {
        if (movie.id === action.movie.id) {
          return _objectSpread({}, action.movie);
        }

        return movie;
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.DELETE_MOVIE_SUCCESS:
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state.filter(function (movie) {
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

/***/ }),

/***/ "./src/store/sagas.js":
/*!****************************!*\
  !*** ./src/store/sagas.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  movies: _reducers_movies__WEBPACK_IMPORTED_MODULE_3__.default,
  movie: _reducers_header__WEBPACK_IMPORTED_MODULE_2__.default
}), (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(sagaMiddleware));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__.default);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/components/layout/layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/layout/layout.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"main-layout": "layout_main-layout__x8smH"
};


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("regenerator-runtime");;

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("regenerator-runtime/runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_classCallCheck_js-node_modules_babel_runtime_helpe-3f80a8","vendors-node_modules_babel_runtime_helpers_defineProperty_js-node_modules_babel_runtime_helpe-7251be","src_store_actions_header_js-src_store_actions_movies_js"], function() { return __webpack_exec__("./src/pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9zZXJ2aWNlcy9Nb3ZpZXNTZXJ2aWNlLmpzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL3N0b3JlL3JlZHVjZXJzL21vdmllcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvc3RvcmUvc2FnYXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsIk1vdmllc1NlcnZpY2UiLCJmaWx0ZXIiLCJzb3J0IiwicXVlcnkiLCJmZXRjaCIsImJ1aWxkVXJsIiwidGhlbiIsInJlcyIsImpzb24iLCJtb3ZpZUlkIiwiYXBpVVJMIiwibW92aWUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInVybCIsImhlYWRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyIsIkdFVF9NT1ZJRV9CWV9JRF9GQUlMIiwibW92aWVzUmVkdWNlciIsIkxPQURfTU9WSUVTX1NVQ0NDRVNTIiwibW92aWVzIiwiQUREX01PVklFX1NVQ0NFU1MiLCJVUERBVEVfTU9WSUVfU1VDQ0VTUyIsIm1hcCIsIkRFTEVURV9NT1ZJRV9TVUNDRVNTIiwiTE9BRF9NT1ZJRVNfRkFJTCIsIkFERF9NT1ZJRV9GQUlMIiwiVVBEQVRFX01PVklFX0ZBSUwiLCJERUxFVEVfTU9WSUVfRkFJTCIsImdldEFsbE1vdmllcyIsImdldE1vdmllIiwiYWRkTW92aWUiLCJ1cGRhdGVNb3ZpZSIsImRlbGV0ZU1vdmllIiwibW92aWVzU2FnYXMiLCJjYWxsIiwicHV0IiwibG9hZE1vdmllc1N1Y2Nlc3MiLCJkYXRhIiwibG9hZE1vdmllc0ZhaWwiLCJtZXNzYWdlIiwiZ2V0TW92aWVTdWNjZXNzIiwiZ2V0TW92aWVGYWlsIiwiYWRkZWRNb3ZpZSIsImFkZE1vdmllU3VjY2VzcyIsImFkZE1vdmllRmFpbCIsInVwZGF0ZU1vdmllU3VjY2VzcyIsInVwZGF0ZU1vdmllRmFpbCIsImRlbGV0ZU1vdmllU3VjY2VzcyIsImRlbGV0ZU1vdmllRmFpbCIsInRha2VFdmVyeSIsIkxPQURfTU9WSUVTIiwiQUREX01PVklFIiwiVVBEQVRFX01PVklFIiwiREVMRVRFX01PVklFIiwiR0VUX01PVklFX0JZX0lEIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLHNCQUNiO0FBQUssYUFBUyxFQUFFQywyRUFBTTtBQUF0QixLQUF3Q0QsUUFBeEMsQ0FEYTtBQUFBLENBQWY7O0FBSUFELE1BQU0sQ0FBQ0csU0FBUCxHQUFtQjtBQUNqQkYsVUFBUSxFQUFFRywyREFBQSxDQUFvQixDQUFDQSwwREFBRCxFQUFtQkEseURBQW5CLENBQXBCLEVBQXlEQztBQURsRCxDQUFuQjtBQUlBLCtEQUFlTCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE4QjtBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzFDLHNCQUNFLDJEQUFDLDhEQUFELHFCQUNFLDJEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFQyxpREFBS0E7QUFBdEIsa0JBQ0UsMkRBQUMsU0FBRCxFQUFlRCxTQUFmLENBREYsQ0FERixDQURGO0FBT0QsQ0FSRDs7QUFVQUYsS0FBSyxDQUFDSCxTQUFOLEdBQWtCO0FBQ2hCSSxXQUFTLEVBQUVILHNFQURLO0FBRWhCSSxXQUFTLEVBQUVKLGtFQUF3QkM7QUFGbkIsQ0FBbEI7QUFLQSwrREFBZUMsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdkJNSSxhOzs7OzsrRkFDSywrQjs7b0dBRUssVUFBQ0MsTUFBRCxFQUFTQyxJQUFULEVBQWVDLEtBQWY7QUFBQSxXQUF5QkMsS0FB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QyxzREFBZSxDQUFDO0FBQUV2QyxRQUFNLEVBQUVGLHFEQUFWO0FBQXlCZCxPQUFLLEVBQUVRLHFEQUFhQTtBQUE3QyxDQUFELENBRFEsRUFFdkJnRCxzREFBZSxDQUFDSixjQUFELENBRlEsQ0FBekI7QUFJQUEsY0FBYyxDQUFDSyxHQUFmLENBQW1CM0IsMkNBQW5CO0FBRUEsK0RBQWUxQyxLQUFmLEU7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEseUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21haW4tbGF5b3V0J119PntjaGlsZHJlbn08L2Rpdj5cbik7XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXldKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImNsYXNzIE1vdmllc1NlcnZpY2Uge1xuICBhcGlVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL21vdmllcy8nO1xuXG4gIGZldGNoTW92aWVzID0gKGZpbHRlciwgc29ydCwgcXVlcnkpID0+IGZldGNoKHRoaXMuYnVpbGRVcmwoZmlsdGVyLCBzb3J0LCBxdWVyeSkpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgZ2V0TW92aWVCeUlkID0gKG1vdmllSWQpID0+IGZldGNoKHRoaXMuYXBpVVJMICsgbW92aWVJZCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBhZGRNb3ZpZSA9IChtb3ZpZSkgPT5cbiAgICBmZXRjaCh0aGlzLmFwaVVSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobW92aWUpLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgdXBkYXRlTW92aWUgPSAobW92aWUpID0+XG4gICAgZmV0Y2godGhpcy5hcGlVUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobW92aWUpLFxuICAgIH0pO1xuXG4gIGRlbGV0ZU1vdmllID0gKGlkKSA9PiBmZXRjaCh0aGlzLmFwaVVSTCArIGlkLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG5cbiAgYnVpbGRVcmwgPSAoZmlsdGVyLCBzb3J0LCBxdWVyeSkgPT4ge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLmFwaVVSTH0/c29ydEJ5PSR7c29ydH0mc29ydE9yZGVyPWRlc2NgO1xuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9PSAnQWxsJykge1xuICAgICAgdXJsICs9IGAmZmlsdGVyPSR7ZmlsdGVyfWA7XG4gICAgfVxuICAgIGlmIChxdWVyeSkge1xuICAgICAgdXJsICs9IGAmc2VhcmNoPSR7cXVlcnl9JnNlYXJjaEJ5PXRpdGxlYDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vdmllc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7XG4gIEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTLFxuICBHRVRfTU9WSUVfQllfSURfRkFJTCxcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGhlYWRlclJlZHVjZXIgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLm1vdmllO1xuICAgIGNhc2UgR0VUX01PVklFX0JZX0lEX0ZBSUw6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyUmVkdWNlcjtcbiIsImltcG9ydCB7XG4gIExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBBRERfTU9WSUVfU1VDQ0VTUyxcbiAgVVBEQVRFX01PVklFX0ZBSUwsXG4gIERFTEVURV9NT1ZJRV9GQUlMLFxuICBMT0FEX01PVklFU19GQUlMLFxuICBBRERfTU9WSUVfRkFJTCxcbiAgVVBEQVRFX01PVklFX1NVQ0NFU1MsXG4gIERFTEVURV9NT1ZJRV9TVUNDRVNTLFxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgbW92aWVzUmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRF9NT1ZJRVNfU1VDQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLm1vdmllcztcbiAgICBjYXNlIEFERF9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLm1vdmllXTtcbiAgICBjYXNlIFVQREFURV9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgobW92aWUpID0+IHtcbiAgICAgICAgaWYgKG1vdmllLmlkID09PSBhY3Rpb24ubW92aWUuaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYWN0aW9uLm1vdmllLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmllO1xuICAgICAgfSk7XG4gICAgY2FzZSBERUxFVEVfTU9WSUVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUuaWQgIT09IGFjdGlvbi5pZCldO1xuICAgIGNhc2UgTE9BRF9NT1ZJRVNfRkFJTDpcbiAgICBjYXNlIEFERF9NT1ZJRV9GQUlMOlxuICAgIGNhc2UgVVBEQVRFX01PVklFX0ZBSUw6XG4gICAgY2FzZSBERUxFVEVfTU9WSUVfRkFJTDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3ZpZXNSZWR1Y2VyO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCBNb3ZpZXNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL01vdmllc1NlcnZpY2UnO1xuXG5pbXBvcnQgeyBnZXRNb3ZpZVN1Y2Nlc3MsIGdldE1vdmllRmFpbCB9IGZyb20gJy4vYWN0aW9ucy9oZWFkZXInO1xuaW1wb3J0IHtcbiAgbG9hZE1vdmllc1N1Y2Nlc3MsXG4gIGxvYWRNb3ZpZXNGYWlsLFxuICBhZGRNb3ZpZVN1Y2Nlc3MsXG4gIGFkZE1vdmllRmFpbCxcbiAgdXBkYXRlTW92aWVTdWNjZXNzLFxuICB1cGRhdGVNb3ZpZUZhaWwsXG4gIGRlbGV0ZU1vdmllU3VjY2VzcyxcbiAgZGVsZXRlTW92aWVGYWlsLFxufSBmcm9tICcuL2FjdGlvbnMvbW92aWVzJztcbmltcG9ydCB7XG4gIExPQURfTU9WSUVTLFxuICBBRERfTU9WSUUsXG4gIERFTEVURV9NT1ZJRSxcbiAgVVBEQVRFX01PVklFLFxuICBHRVRfTU9WSUVfQllfSUQsXG59IGZyb20gJy4vYWN0aW9ucy90eXBlcyc7XG5cbmZ1bmN0aW9uKiBnZXRBbGxNb3ZpZXMoeyBmaWx0ZXIsIHNvcnQsIHF1ZXJ5IH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb3ZpZXMgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuZmV0Y2hNb3ZpZXMsIGZpbHRlciwgc29ydCwgcXVlcnkpO1xuICAgIHlpZWxkIHB1dChsb2FkTW92aWVzU3VjY2Vzcyhtb3ZpZXMuZGF0YSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGxvYWRNb3ZpZXNGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBnZXRNb3ZpZSh7IG1vdmllSWQgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vdmllID0geWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmdldE1vdmllQnlJZCwgbW92aWVJZCk7XG4gICAgeWllbGQgcHV0KGdldE1vdmllU3VjY2Vzcyhtb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGdldE1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuZnVuY3Rpb24qIGFkZE1vdmllKHsgbW92aWUgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IGFkZGVkTW92aWUgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuYWRkTW92aWUsIG1vdmllKTtcbiAgICB5aWVsZCBwdXQoYWRkTW92aWVTdWNjZXNzKGFkZGVkTW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChhZGRNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHVwZGF0ZU1vdmllKHsgbW92aWUgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS51cGRhdGVNb3ZpZSwgbW92aWUpO1xuICAgIHlpZWxkIHB1dCh1cGRhdGVNb3ZpZVN1Y2Nlc3MobW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dCh1cGRhdGVNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGRlbGV0ZU1vdmllKHsgaWQgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5kZWxldGVNb3ZpZSwgaWQpO1xuICAgIHlpZWxkIHB1dChkZWxldGVNb3ZpZVN1Y2Nlc3MoaWQpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChkZWxldGVNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIG1vdmllc1NhZ2FzKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9NT1ZJRVMsIGdldEFsbE1vdmllcyk7XG4gIHlpZWxkIHRha2VFdmVyeShBRERfTU9WSUUsIGFkZE1vdmllKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KFVQREFURV9NT1ZJRSwgdXBkYXRlTW92aWUpO1xuICB5aWVsZCB0YWtlRXZlcnkoREVMRVRFX01PVklFLCBkZWxldGVNb3ZpZSk7XG4gIHlpZWxkIHRha2VFdmVyeShHRVRfTU9WSUVfQllfSUQsIGdldE1vdmllKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW92aWVzU2FnYXM7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5cbmltcG9ydCBoZWFkZXJSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvaGVhZGVyJztcbmltcG9ydCBtb3ZpZXNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvbW92aWVzJztcbmltcG9ydCBtb3ZpZXNTYWdhcyBmcm9tICcuL3NhZ2FzJztcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgY29tYmluZVJlZHVjZXJzKHsgbW92aWVzOiBtb3ZpZXNSZWR1Y2VyLCBtb3ZpZTogaGVhZGVyUmVkdWNlciB9KSxcbiAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKVxuKTtcbnNhZ2FNaWRkbGV3YXJlLnJ1bihtb3ZpZXNTYWdhcyk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpbi1sYXlvdXRcIjogXCJsYXlvdXRfbWFpbi1sYXlvdXRfX3g4c21IXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==