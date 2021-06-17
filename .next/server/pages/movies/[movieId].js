(function() {
var exports = {};
exports.id = "pages/movies/[movieId]";
exports.ids = ["pages/movies/[movieId]"];
exports.modules = {

/***/ "./src/components/body/Body.js":
/*!*************************************!*\
  !*** ./src/components/body/Body.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSessionStorage */ "./src/hooks/useSessionStorage.js");
/* harmony import */ var _error_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/ErrorBoundary */ "./src/components/error/ErrorBoundary.js");
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./body.module.scss */ "./src/components/body/body.module.scss");
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_body_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _GenresFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GenresFilter */ "./src/components/body/GenresFilter.js");
/* harmony import */ var _movieList_MovieList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movieList/MovieList */ "./src/components/body/movieList/MovieList.js");
/* harmony import */ var _MoviesSorter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MoviesSorter */ "./src/components/body/MoviesSorter.js");












var Body = function Body(_ref) {
  var movies = _ref.movies,
      loadMovies = _ref.loadMovies;

  var _useSessionStorage = (0,_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_5__.default)('filter'),
      _useSessionStorage2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useSessionStorage, 2),
      currentFilter = _useSessionStorage2[0],
      setCurrentFilter = _useSessionStorage2[1];

  var _useSessionStorage3 = (0,_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_5__.default)('sort'),
      _useSessionStorage4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useSessionStorage3, 2),
      currentSort = _useSessionStorage4[0],
      setCurrentSort = _useSessionStorage4[1];

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
      query = _useRouter.query;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    loadMovies(currentFilter, currentSort, query.search);
  }, [currentFilter, currentSort, query.search, loadMovies]);

  var onFilterClick = function onFilterClick(genre) {
    setCurrentFilter(genre);
  };

  var onSortChange = function onSortChange(sort) {
    setCurrentSort(sort);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
    className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_10___default().body),
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_10___default().submenu)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_GenresFilter__WEBPACK_IMPORTED_MODULE_7__.default, {
    onFilterClick: onFilterClick,
    selectedFilter: currentFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MoviesSorter__WEBPACK_IMPORTED_MODULE_9__.default, {
    onSortChange: onSortChange,
    selectedSort: currentSort
  })), !(movies !== null && movies !== void 0 && movies.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_10___default()["no-movies"])
  }, "No Movies Found")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_error_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_movieList_MovieList__WEBPACK_IMPORTED_MODULE_8__.default, {
    movies: movies
  })));
};

Body.propTypes = {
  movies: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    poster_path: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    release_date: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    genres: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)),
    vote_average: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    tagline: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    vote_count: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    overview: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    budget: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    revenue: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    runtime: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })).isRequired,
  loadMovies: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./src/components/body/GenresFilter.js":
/*!*********************************************!*\
  !*** ./src/components/body/GenresFilter.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedFilter),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["genres-filter"])
  }, genres.map(function (genre) {
    var activeClass = "".concat(genre === selected ? 'item-active' : 'item');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
      key: genre,
      type: "button",
      onClick: function onClick() {
        onFilterClick(genre);
        setSelected(genre);
      },
      className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[activeClass]
    }, genre);
  }));
};

GenresFilter.propTypes = {
  onFilterClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  selectedFilter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (GenresFilter);

/***/ }),

/***/ "./src/components/body/MoviesSorter.js":
/*!*********************************************!*\
  !*** ./src/components/body/MoviesSorter.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body.module.scss */ "./src/components/body/body.module.scss");
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_body_module_scss__WEBPACK_IMPORTED_MODULE_2__);







var MoviesSorter = function MoviesSorter(_ref) {
  var onSortChange = _ref.onSortChange,
      selectedSort = _ref.selectedSort;

  if (!selectedSort) {
    onSortChange('release_date');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sort)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sort by "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["sort-form"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4__.default, {
    labelId: "simple-select",
    id: "simple-select",
    defaultValue: selectedSort,
    onChange: function onChange(event) {
      return onSortChange(event.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__.default, {
    value: "vote_average"
  }, "Rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__.default, {
    value: "release_date"
  }, "Release date"))));
};

MoviesSorter.propTypes = {
  onSortChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  selectedSort: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (MoviesSorter);

/***/ }),

/***/ "./src/components/body/index.js":
/*!**************************************!*\
  !*** ./src/components/body/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  loadMovies: _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__.loadMovies
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_Body__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ }),

/***/ "./src/components/body/movieList/DeleteMovieDialog.js":
/*!************************************************************!*\
  !*** ./src/components/body/movieList/DeleteMovieDialog.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);











var DeleteMovieDialog = function DeleteMovieDialog(_ref) {
  var open = _ref.open,
      movieId = _ref.movieId,
      onClose = _ref.onClose,
      onDelete = _ref.onDelete;

  var onCloseDeleteDialog = function onCloseDeleteDialog() {
    onClose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__.default, {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: open,
    onClose: onCloseDeleteDialog,
    maxWidth: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    "aria-label": "close",
    onClick: onCloseDeleteDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__.default, {
    id: "alert-dialog-title"
  }, "Delete Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: "dialog-form-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__.default, {
    id: "alert-dialog-description"
  }, "Are you sure you want to delete this movie?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
    onClick: function onClick() {
      return onDelete(movieId);
    },
    color: "primary",
    size: "large"
  }, "Confirm")));
};

DeleteMovieDialog.propTypes = {
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  movieId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteMovieDialog);

/***/ }),

/***/ "./src/components/body/movieList/MovieList.js":
/*!****************************************************!*\
  !*** ./src/components/body/movieList/MovieList.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["movie-list"])
  }, movies === null || movies === void 0 ? void 0 : movies.map(function (movie) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_movieCard__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: movie === null || movie === void 0 ? void 0 : movie.id,
      movie: movie
    });
  }));
};

MovieList.propTypes = {
  movies: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    poster_path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    release_date: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    genres: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
    vote_average: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    tagline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    vote_count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    overview: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    budget: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    revenue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    runtime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MovieList);

/***/ }),

/***/ "./src/components/body/movieList/UpdateMovieDialog.js":
/*!************************************************************!*\
  !*** ./src/components/body/movieList/UpdateMovieDialog.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/components/constants.js");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies.module.scss */ "./src/components/body/movieList/movies.module.scss");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_movies_module_scss__WEBPACK_IMPORTED_MODULE_7__);
















var UpdateMovieDialog = function UpdateMovieDialog(_ref) {
  var movie = _ref.movie,
      open = _ref.open,
      onUpdate = _ref.onUpdate,
      onClose = _ref.onClose;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((movie === null || movie === void 0 ? void 0 : movie.genres) || []),
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

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
    initialValues: {
      id: movie === null || movie === void 0 ? void 0 : movie.id,
      title: movie === null || movie === void 0 ? void 0 : movie.title,
      release_date: movie === null || movie === void 0 ? void 0 : movie.release_date,
      poster_path: movie === null || movie === void 0 ? void 0 : movie.poster_path,
      overview: movie === null || movie === void 0 ? void 0 : movie.overview,
      runtime: movie === null || movie === void 0 ? void 0 : movie.runtime,
      genres: genres
    },
    validationSchema: _constants__WEBPACK_IMPORTED_MODULE_5__.validationSchema,
    values: {
      genres: genres
    },
    onSubmit: function onSubmit(fields) {
      onUpdate(fields);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.FormikProvider, {
    value: formik
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__.default, {
    disableEscapeKeyDown: true,
    open: open,
    onClose: onCloseEditDialog,
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[".MuiPaper-root.MuiMenu-paper.MuiPopover-paper"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
    "aria-label": "close",
    onClick: onCloseEditDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__.default, null, "Edit Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10__.default, {
    className: "dialog-form-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field-name"])
  }, "Movie ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field-name"]),
    style: {
      color: 'white'
    }
  }, movie === null || movie === void 0 ? void 0 : movie.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field-name"])
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.TITLE,
    type: "text",
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field"])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.TITLE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field-name"])
  }, "Release Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.RELEASE_DATE,
    type: "date",
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field"])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.RELEASE_DATE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field-name"])
  }, "Movie URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.POSTER_PATH,
    type: "text",
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field"])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.POSTER_PATH,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field-name"])
  }, "Genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_11__.default, {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.GENRES,
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field"]),
    value: genres,
    onChange: function onChange(event) {
      return onChangeGenres(event.target.value, formik.setFieldValue);
    },
    multiple: true
  }, _constants__WEBPACK_IMPORTED_MODULE_5__.genresArray.map(function (genre) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__.default, {
      key: genre,
      value: genre
    }, genre);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.GENRES,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field-name"])
  }, "Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    as: "textarea",
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.OVERVIEW,
    "aria-label": "empty textarea",
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field"])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.OVERVIEW,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field-name"])
  }, "Runtime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.RUNTIME,
    type: "number",
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["edit-field"])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.RUNTIME,
    component: "div",
    className: "error"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
    onClick: onCloseEditDialog,
    color: "secondary",
    size: "large"
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
    color: "primary",
    size: "large",
    type: "submit"
  }, "Save")))));
};

UpdateMovieDialog.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    poster_path: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    release_date: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    genres: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)),
    vote_average: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    tagline: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    url: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    vote_count: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    overview: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    budget: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    revenue: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    runtime: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  }).isRequired,
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
  onUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (UpdateMovieDialog);

/***/ }),

/***/ "./src/components/body/movieList/movieCard/MovieCard.js":
/*!**************************************************************!*\
  !*** ./src/components/body/movieList/movieCard/MovieCard.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DeleteMovieDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DeleteMovieDialog */ "./src/components/body/movieList/DeleteMovieDialog.js");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../movies.module.scss */ "./src/components/body/movieList/movies.module.scss");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_movies_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UpdateMovieDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UpdateMovieDialog */ "./src/components/body/movieList/UpdateMovieDialog.js");












var MovieCard = function MovieCard(_ref) {
  var _movie$release_date, _movie$genres;

  var movie = _ref.movie,
      updateMovie = _ref.updateMovie,
      deleteMovie = _ref.deleteMovie;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      openDelete = _useState4[0],
      setOpenDelete = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["movie-card"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/movies/".concat(movie === null || movie === void 0 ? void 0 : movie.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: movie === null || movie === void 0 ? void 0 : movie.poster_path,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["movie-info"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["info-first-row"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title)
  }, movie === null || movie === void 0 ? void 0 : movie.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["movie-release-year"])
  }, movie === null || movie === void 0 ? void 0 : (_movie$release_date = movie.release_date) === null || _movie$release_date === void 0 ? void 0 : _movie$release_date.split('-')[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default().genre)
  }, movie === null || movie === void 0 ? void 0 : (_movie$genres = movie.genres) === null || _movie$genres === void 0 ? void 0 : _movie$genres.join(', '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: (_movies_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["card-menu-icon"]),
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_2___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__.default, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__.default, {
    onClick: onEditMenuItemClick,
    className: "card-menu-item"
  }, "edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__.default, {
    onClick: onDeleteMenuItemClick,
    className: "card-menu-item"
  }, "delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UpdateMovieDialog__WEBPACK_IMPORTED_MODULE_6__.default, {
    open: openEdit,
    movie: movie,
    onUpdate: onUpdateMovie,
    onClose: function onClose() {
      return setOpenEdit(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_DeleteMovieDialog__WEBPACK_IMPORTED_MODULE_5__.default, {
    open: openDelete,
    movieId: movie === null || movie === void 0 ? void 0 : movie.id,
    onDelete: onDeleteMovie,
    onClose: function onClose() {
      return setOpenDelete(false);
    }
  })));
};

MovieCard.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    poster_path: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    release_date: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    genres: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)),
    vote_average: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    tagline: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    vote_count: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    overview: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    budget: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    revenue: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    runtime: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  }).isRequired,
  updateMovie: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  deleteMovie: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (MovieCard);

/***/ }),

/***/ "./src/components/body/movieList/movieCard/index.js":
/*!**********************************************************!*\
  !*** ./src/components/body/movieList/movieCard/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/actions/movies */ "./src/store/actions/movies.js");
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieCard */ "./src/components/body/movieList/movieCard/MovieCard.js");



var mapDispatchToProps = {
  updateMovie: _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__.updateMovie,
  deleteMovie: _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__.deleteMovie
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(null, mapDispatchToProps)(_MovieCard__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ }),

/***/ "./src/components/constants.js":
/*!*************************************!*\
  !*** ./src/components/constants.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOVIE_FIELDS": function() { return /* binding */ MOVIE_FIELDS; },
/* harmony export */   "genresArray": function() { return /* binding */ genresArray; },
/* harmony export */   "validationSchema": function() { return /* binding */ validationSchema; }
/* harmony export */ });
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
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  title: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('Title is required'),
  poster_path: yup__WEBPACK_IMPORTED_MODULE_0__.string().url().required('Poster url is required'),
  release_date: yup__WEBPACK_IMPORTED_MODULE_0__.string(),
  overview: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('Overview is required'),
  runtime: yup__WEBPACK_IMPORTED_MODULE_0__.number().required('Runtime is required'),
  genres: yup__WEBPACK_IMPORTED_MODULE_0__.array().min(1).required('Minimum one genre should be selected')
});

/***/ }),

/***/ "./src/components/error/ErrorBoundary.js":
/*!***********************************************!*\
  !*** ./src/components/error/ErrorBoundary.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h1", null, "Something went wrong (");
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
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.module.scss */ "./src/components/footer/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);




var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer),
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logo.png",
    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["logo-footer"]),
    alt: "logo"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header/AddMovieDialog.js":
/*!*************************************************!*\
  !*** ./src/components/header/AddMovieDialog.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/components/constants.js");















var AddMovieDialog = function AddMovieDialog(_ref) {
  var open = _ref.open,
      onAdd = _ref.onAdd,
      onClose = _ref.onClose;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
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

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
    initialValues: {
      title: '',
      release_date: '',
      poster_path: '',
      genres: genres,
      overview: '',
      runtime: ''
    },
    validationSchema: _constants__WEBPACK_IMPORTED_MODULE_5__.validationSchema,
    values: {
      genres: genres
    },
    onSubmit: function onSubmit(values) {
      onAdd(values);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.FormikProvider, {
    value: formik
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__.default, {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: open,
    onClose: onCloseAddDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
    "aria-label": "close",
    onClick: onCloseAddDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
    title: "add-movie",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__.default, {
    id: "alert-dialog-title"
  }, "Add Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: "dialog-form-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "edit-field-name"
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.TITLE,
    placeholder: "Movie Title",
    className: "edit-field",
    title: "title",
    "data-testid": "title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.TITLE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "edit-field-name"
  }, "Release Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    type: "date",
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.RELEASE_DATE,
    placeholder: "Select Date",
    className: "edit-field",
    title: "release_date",
    "data-testid": "release_date"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.RELEASE_DATE,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "edit-field-name"
  }, "Movie URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.POSTER_PATH,
    placeholder: "Movie URL here",
    className: "edit-field",
    title: "poster_path",
    "data-testid": "poster_path"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.POSTER_PATH,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "edit-field-name"
  }, "Genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__.default, {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.GENRES,
    className: "edit-field",
    value: genres,
    onChange: function onChange(event) {
      return onChangeGenres(event.target.value, formik.setFieldValue);
    },
    multiple: true,
    title: "genres",
    "data-testid": "genres"
  }, _constants__WEBPACK_IMPORTED_MODULE_5__.genresArray.map(function (genre) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__.default, {
      key: genre,
      value: genre
    }, genre);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.GENRES,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "edit-field-name"
  }, "Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    as: "textarea",
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.OVERVIEW,
    placeholder: "Overview Here",
    className: "edit-field",
    title: "overview",
    "data-testid": "overview"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.OVERVIEW,
    component: "div",
    className: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "edit-field-name"
  }, "Runtime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
    type: "number",
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.RUNTIME,
    placeholder: "Runtime Here",
    className: "edit-field",
    title: "runtime",
    "data-testid": "runtime"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
    name: _constants__WEBPACK_IMPORTED_MODULE_5__.MOVIE_FIELDS.RUNTIME,
    component: "div",
    className: "error"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
    onClick: onCloseAddDialog,
    color: "secondary",
    size: "large",
    title: "reset"
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
    type: "submit",
    color: "primary",
    size: "large",
    "data-testid": "submit"
  }, "Submit")))));
};

AddMovieDialog.propTypes = {
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  onAdd: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (AddMovieDialog);

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AddMovieDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddMovieDialog */ "./src/components/header/AddMovieDialog.js");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header.module.scss */ "./src/components/header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _movieDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movieDetails */ "./src/components/header/movieDetails/index.js");
/* harmony import */ var _searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchBar/SearchBar */ "./src/components/header/searchBar/SearchBar.js");














var Header = function Header(_ref) {
  var addMovie = _ref.addMovie;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      openAdd = _useState2[0],
      setOpenAdd = _useState2[1];

  var onAddMovieClick = function onAddMovieClick() {
    setOpenAdd(true);
  };

  var onAddMovie = function onAddMovie(movie) {
    addMovie(movie);
    setOpenAdd(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
    fixed: true
  }, (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)().pathname.includes('movieId') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().subheader)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: "/images/logo.png",
    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().logo),
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default()), {
    fontSize: "large"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_movieDetails__WEBPACK_IMPORTED_MODULE_8__.default, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().subheader)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: "/images/logo.png",
    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().logo),
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
    variant: "contained",
    size: "large",
    onClick: onAddMovieClick,
    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default()["button-add-movie"])
  }, "+ Add Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_AddMovieDialog__WEBPACK_IMPORTED_MODULE_7__.default, {
    open: openAdd,
    onAdd: onAddMovie,
    onClose: function onClose() {
      return setOpenAdd(false);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_9__.default, null)));
};

Header.propTypes = {
  addMovie: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/movies */ "./src/store/actions/movies.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/header/Header.js");



var mapDispatchToProps = {
  addMovie: _store_actions_movies__WEBPACK_IMPORTED_MODULE_1__.addMovie
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(null, mapDispatchToProps)(_Header__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ }),

/***/ "./src/components/header/movieDetails/MovieDetails.js":
/*!************************************************************!*\
  !*** ./src/components/header/movieDetails/MovieDetails.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movieDetails.module.scss */ "./src/components/header/movieDetails/movieDetails.module.scss");
/* harmony import */ var _movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3__);





var MovieDetails = function MovieDetails(_ref) {
  var _movie$release_date;

  var movie = _ref.movie,
      getMovie = _ref.getMovie;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var movieId = router.query.movieId;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getMovie(Number(movieId));
  }, [movieId, getMovie]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["movie-details"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: movie === null || movie === void 0 ? void 0 : movie.poster_path,
    alt: "",
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().poster)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().info)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["first-row"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title)
  }, movie === null || movie === void 0 ? void 0 : movie.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rating)
  }, movie === null || movie === void 0 ? void 0 : movie.vote_average)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tagline)
  }, movie === null || movie === void 0 ? void 0 : movie.tagline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["third-row"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["release-date"])
  }, movie === null || movie === void 0 ? void 0 : (_movie$release_date = movie.release_date) === null || _movie$release_date === void 0 ? void 0 : _movie$release_date.split('-')[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().runtime)
  }, movie === null || movie === void 0 ? void 0 : movie.runtime, " min")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_movieDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().overview)
  }, movie === null || movie === void 0 ? void 0 : movie.overview)));
};

MovieDetails.defaultProps = {
  movie: null
};
MovieDetails.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    poster_path: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    release_date: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    genres: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)),
    vote_average: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    tagline: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    vote_count: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    overview: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    budget: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    revenue: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    runtime: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
  }),
  getMovie: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (MovieDetails);

/***/ }),

/***/ "./src/components/header/movieDetails/index.js":
/*!*****************************************************!*\
  !*** ./src/components/header/movieDetails/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  getMovie: _store_actions_header__WEBPACK_IMPORTED_MODULE_1__.getMovie
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_MovieDetails__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ }),

/***/ "./src/components/header/searchBar/SearchBar.js":
/*!******************************************************!*\
  !*** ./src/components/header/searchBar/SearchBar.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _searchBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchBar.module.scss */ "./src/components/header/searchBar/searchBar.module.scss");
/* harmony import */ var _searchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_searchBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);






var SearchBar = function SearchBar() {
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var onSearchMovies = function onSearchMovies(query) {
    router.push("/movies?search=".concat(query));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_searchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["search-bar"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: (_searchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title)
  }, "find your movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      query: ''
    },
    onSubmit: function onSubmit(fields) {
      onSearchMovies(fields.query);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    type: "search",
    variant: "filled",
    color: "secondary",
    id: (_searchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["search-input"]),
    name: "query"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "contained",
    type: "submit"
  }, "Search"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/hooks/useSessionStorage.js":
/*!****************************************!*\
  !*** ./src/hooks/useSessionStorage.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var useSessionStorage = function useSessionStorage(storageKey) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( false ? 0 : null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/body */ "./src/components/body/index.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/store */ "./src/store/store.js");







var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _store_store__WEBPACK_IMPORTED_MODULE_5__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_body__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_3__.default, null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMovie": function() { return /* binding */ getMovie; },
/* harmony export */   "getMovieSuccess": function() { return /* binding */ getMovieSuccess; },
/* harmony export */   "getMovieFail": function() { return /* binding */ getMovieFail; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/actions/types.js");

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

/***/ }),

/***/ "./src/store/actions/movies.js":
/*!*************************************!*\
  !*** ./src/store/actions/movies.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ }),

/***/ "./src/store/actions/types.js":
/*!************************************!*\
  !*** ./src/store/actions/types.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/components/body/body.module.scss":
/*!**********************************************!*\
  !*** ./src/components/body/body.module.scss ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "./src/components/body/movieList/movies.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/body/movieList/movies.module.scss ***!
  \**********************************************************/
/***/ (function(module) {

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

/***/ "./src/components/footer/footer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/footer/footer.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "footer_footer__2j_Fr",
	"logo-footer": "footer_logo-footer__1jAf5"
};


/***/ }),

/***/ "./src/components/header/header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/header/header.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"header": "header_header__2pLiX",
	"subheader": "header_subheader__5Ww61",
	"logo": "header_logo__24fwD",
	"button-add-movie": "header_button-add-movie__28c5Z",
	"MuiIconButton-root": "header_MuiIconButton-root__MaE5s"
};


/***/ }),

/***/ "./src/components/header/movieDetails/movieDetails.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/header/movieDetails/movieDetails.module.scss ***!
  \*********************************************************************/
/***/ (function(module) {

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

/***/ "./src/components/header/searchBar/searchBar.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/header/searchBar/searchBar.module.scss ***!
  \***************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"search-bar": "searchBar_search-bar__3I7dR",
	"title": "searchBar_title__2E-8I",
	"search-input": "searchBar_search-input__2o5fb"
};


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Close");;

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/MoreVert");;

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Search");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

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

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_node_modules_babel_runtime_helpers_classCallCheck_js-node_modules_n-b54ff8","vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-1530b4","vendors-node_modules_next_link_js","vendors-node_modules_babel_runtime_helpers_classCallCheck_js-node_modules_babel_runtime_helpe-c168e6"], function() { return __webpack_exec__("./src/pages/movies/[movieId].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9ib2R5L0JvZHkuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvYm9keS9HZW5yZXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvYm9keS9Nb3ZpZXNTb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvYm9keS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9ib2R5L21vdmllTGlzdC9EZWxldGVNb3ZpZURpYWxvZy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9ib2R5L21vdmllTGlzdC9Nb3ZpZUxpc3QuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvVXBkYXRlTW92aWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvbW92aWVDYXJkL01vdmllQ2FyZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9ib2R5L21vdmllTGlzdC9tb3ZpZUNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9jb21wb25lbnRzL2Vycm9yL0Vycm9yQm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvQWRkTW92aWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vdmllRGV0YWlscy9Nb3ZpZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vdmllRGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc2VhcmNoQmFyL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvaG9va3MvdXNlU2Vzc2lvblN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL3BhZ2VzL21vdmllcy9bbW92aWVJZF0uanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL3NlcnZpY2VzL01vdmllc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL3N0b3JlL2FjdGlvbnMvaGVhZGVyLmpzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9zdG9yZS9hY3Rpb25zL21vdmllcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvc3RvcmUvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvc3RvcmUvcmVkdWNlcnMvaGVhZGVyLmpzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL3N0b3JlL3NhZ2FzLmpzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9ib2R5L2JvZHkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvbW92aWVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbW92aWVEZXRhaWxzL21vdmllRGV0YWlscy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc2VhcmNoQmFyL3NlYXJjaEJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS91dGlsc1wiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwieXVwXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2lnbm9yZWR8QzpcXHByb2plY3RzXFxyZWFjdC10cmFpbmluZ3NcXHJlYWN0LW1vdmllc1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkJvZHkiLCJtb3ZpZXMiLCJsb2FkTW92aWVzIiwidXNlU2Vzc2lvblN0b3JhZ2UiLCJjdXJyZW50RmlsdGVyIiwic2V0Q3VycmVudEZpbHRlciIsImN1cnJlbnRTb3J0Iiwic2V0Q3VycmVudFNvcnQiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZUVmZmVjdCIsInNlYXJjaCIsIm9uRmlsdGVyQ2xpY2siLCJnZW5yZSIsIm9uU29ydENoYW5nZSIsInNvcnQiLCJzdHlsZXMiLCJzdWJtZW51IiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaWQiLCJ0aXRsZSIsInBvc3Rlcl9wYXRoIiwicmVsZWFzZV9kYXRlIiwiZ2VucmVzIiwidm90ZV9hdmVyYWdlIiwidGFnbGluZSIsInZvdGVfY291bnQiLCJvdmVydmlldyIsImJ1ZGdldCIsInJldmVudWUiLCJydW50aW1lIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIkdlbnJlc0ZpbHRlciIsInNlbGVjdGVkRmlsdGVyIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibWFwIiwiYWN0aXZlQ2xhc3MiLCJNb3ZpZXNTb3J0ZXIiLCJzZWxlY3RlZFNvcnQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0IiwiRGVsZXRlTW92aWVEaWFsb2ciLCJvcGVuIiwibW92aWVJZCIsIm9uQ2xvc2UiLCJvbkRlbGV0ZSIsIm9uQ2xvc2VEZWxldGVEaWFsb2ciLCJNb3ZpZUxpc3QiLCJtb3ZpZSIsIlVwZGF0ZU1vdmllRGlhbG9nIiwib25VcGRhdGUiLCJzZXRHZW5yZXMiLCJvbkNsb3NlRWRpdERpYWxvZyIsIm9uQ2hhbmdlR2VucmVzIiwic2V0RmllbGRWYWx1ZSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwidmFsdWVzIiwib25TdWJtaXQiLCJmaWVsZHMiLCJjb2xvciIsIk1PVklFX0ZJRUxEUyIsImdlbnJlc0FycmF5IiwidXJsIiwiTW92aWVDYXJkIiwidXBkYXRlTW92aWUiLCJkZWxldGVNb3ZpZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJvcGVuRGVsZXRlIiwic2V0T3BlbkRlbGV0ZSIsIm9wZW5FZGl0Iiwic2V0T3BlbkVkaXQiLCJoYW5kbGVDbGljayIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJvbkVkaXRNZW51SXRlbUNsaWNrIiwib25EZWxldGVNZW51SXRlbUNsaWNrIiwib25EZWxldGVNb3ZpZSIsIm9uVXBkYXRlTW92aWUiLCJtIiwic3BsaXQiLCJqb2luIiwiQm9vbGVhbiIsIlRJVExFIiwiUkVMRUFTRV9EQVRFIiwiUE9TVEVSX1BBVEgiLCJHRU5SRVMiLCJPVkVSVklFVyIsIlJVTlRJTUUiLCJ5dXAiLCJyZXF1aXJlZCIsIm1pbiIsIkVycm9yQm91bmRhcnkiLCJwcm9wcyIsImhhc0Vycm9yIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJGb290ZXIiLCJBZGRNb3ZpZURpYWxvZyIsIm9uQWRkIiwib25DbG9zZUFkZERpYWxvZyIsImhhbmRsZVN1Ym1pdCIsIkhlYWRlciIsImFkZE1vdmllIiwib3BlbkFkZCIsInNldE9wZW5BZGQiLCJvbkFkZE1vdmllQ2xpY2siLCJvbkFkZE1vdmllIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsInN1YmhlYWRlciIsIk1vdmllRGV0YWlscyIsImdldE1vdmllIiwicm91dGVyIiwiTnVtYmVyIiwicG9zdGVyIiwiaW5mbyIsInJhdGluZyIsImRlZmF1bHRQcm9wcyIsIlNlYXJjaEJhciIsIm9uU2VhcmNoTW92aWVzIiwicHVzaCIsInN0b3JhZ2VLZXkiLCJzZXNzaW9uU3RvcmFnZSIsInNldFZhbHVlIiwic2V0SXRlbSIsIkFwcCIsInN0b3JlIiwiTW92aWVzU2VydmljZSIsImZpbHRlciIsImZldGNoIiwiYnVpbGRVcmwiLCJ0aGVuIiwicmVzIiwianNvbiIsImFwaVVSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJHRVRfTU9WSUVfQllfSUQiLCJnZXRNb3ZpZVN1Y2Nlc3MiLCJHRVRfTU9WSUVfQllfSURfU1VDQ0VTUyIsImdldE1vdmllRmFpbCIsIm1lc3NhZ2UiLCJHRVRfTU9WSUVfQllfSURfRkFJTCIsIkxPQURfTU9WSUVTIiwibG9hZE1vdmllc1N1Y2Nlc3MiLCJMT0FEX01PVklFU19TVUNDQ0VTUyIsImxvYWRNb3ZpZXNGYWlsIiwiTE9BRF9NT1ZJRVNfRkFJTCIsIkFERF9NT1ZJRSIsImFkZE1vdmllU3VjY2VzcyIsIkFERF9NT1ZJRV9TVUNDRVNTIiwiYWRkTW92aWVGYWlsIiwiQUREX01PVklFX0ZBSUwiLCJVUERBVEVfTU9WSUUiLCJ1cGRhdGVNb3ZpZVN1Y2Nlc3MiLCJVUERBVEVfTU9WSUVfU1VDQ0VTUyIsInVwZGF0ZU1vdmllRmFpbCIsIlVQREFURV9NT1ZJRV9GQUlMIiwiREVMRVRFX01PVklFIiwiZGVsZXRlTW92aWVTdWNjZXNzIiwiREVMRVRFX01PVklFX1NVQ0NFU1MiLCJkZWxldGVNb3ZpZUZhaWwiLCJERUxFVEVfTU9WSUVfRkFJTCIsImhlYWRlclJlZHVjZXIiLCJhY3Rpb24iLCJtb3ZpZXNSZWR1Y2VyIiwiZ2V0QWxsTW92aWVzIiwibW92aWVzU2FnYXMiLCJjYWxsIiwicHV0IiwiZGF0YSIsImFkZGVkTW92aWUiLCJ0YWtlRXZlcnkiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvbW92aWVzL1ttb3ZpZUlkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB1c2VTZXNzaW9uU3RvcmFnZSBmcm9tICcuLi8uLi9ob29rcy91c2VTZXNzaW9uU3RvcmFnZSc7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9lcnJvci9FcnJvckJvdW5kYXJ5JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEdlbnJlc0ZpbHRlciBmcm9tICcuL0dlbnJlc0ZpbHRlcic7XG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vbW92aWVMaXN0L01vdmllTGlzdCc7XG5pbXBvcnQgTW92aWVzU29ydGVyIGZyb20gJy4vTW92aWVzU29ydGVyJztcblxuY29uc3QgQm9keSA9ICh7IG1vdmllcywgbG9hZE1vdmllcyB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50RmlsdGVyLCBzZXRDdXJyZW50RmlsdGVyXSA9IHVzZVNlc3Npb25TdG9yYWdlKCdmaWx0ZXInKTtcbiAgY29uc3QgW2N1cnJlbnRTb3J0LCBzZXRDdXJyZW50U29ydF0gPSB1c2VTZXNzaW9uU3RvcmFnZSgnc29ydCcpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRNb3ZpZXMoY3VycmVudEZpbHRlciwgY3VycmVudFNvcnQsIHF1ZXJ5LnNlYXJjaCk7XG4gIH0sIFtjdXJyZW50RmlsdGVyLCBjdXJyZW50U29ydCwgcXVlcnkuc2VhcmNoLCBsb2FkTW92aWVzXSk7XG5cbiAgY29uc3Qgb25GaWx0ZXJDbGljayA9IChnZW5yZSkgPT4ge1xuICAgIHNldEN1cnJlbnRGaWx0ZXIoZ2VucmUpO1xuICB9O1xuXG4gIGNvbnN0IG9uU29ydENoYW5nZSA9IChzb3J0KSA9PiB7XG4gICAgc2V0Q3VycmVudFNvcnQoc29ydCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9IGZpeGVkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtZW51fT5cbiAgICAgICAgPEdlbnJlc0ZpbHRlclxuICAgICAgICAgIG9uRmlsdGVyQ2xpY2s9e29uRmlsdGVyQ2xpY2t9XG4gICAgICAgICAgc2VsZWN0ZWRGaWx0ZXI9e2N1cnJlbnRGaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxNb3ZpZXNTb3J0ZXIgb25Tb3J0Q2hhbmdlPXtvblNvcnRDaGFuZ2V9IHNlbGVjdGVkU29ydD17Y3VycmVudFNvcnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHshbW92aWVzPy5sZW5ndGggPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ25vLW1vdmllcyddfT5ObyBNb3ZpZXMgRm91bmQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e21vdmllc30gLz5cbiAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkJvZHkucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBidWRnZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KVxuICApLmlzUmVxdWlyZWQsXG4gIGxvYWRNb3ZpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYm9keS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IGdlbnJlcyA9IFsnQWxsJywgJ0FkdmVudHVyZScsICdDb21lZHknLCAnRHJhbWEnLCAnRmFudGFzeSddO1xuXG5jb25zdCBHZW5yZXNGaWx0ZXIgPSAoeyBvbkZpbHRlckNsaWNrLCBzZWxlY3RlZEZpbHRlciB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoc2VsZWN0ZWRGaWx0ZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZ2VucmVzLWZpbHRlciddfT5cbiAgICAgIHtnZW5yZXMubWFwKChnZW5yZSkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVDbGFzcyA9IGAke2dlbnJlID09PSBzZWxlY3RlZCA/ICdpdGVtLWFjdGl2ZScgOiAnaXRlbSd9YDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2dlbnJlfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uRmlsdGVyQ2xpY2soZ2VucmUpO1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZChnZW5yZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYWN0aXZlQ2xhc3NdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR2VucmVzRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25GaWx0ZXJDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRGaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlc0ZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBNb3ZpZXNTb3J0ZXIgPSAoeyBvblNvcnRDaGFuZ2UsIHNlbGVjdGVkU29ydCB9KSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTb3J0KSB7XG4gICAgb25Tb3J0Q2hhbmdlKCdyZWxlYXNlX2RhdGUnKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29ydH0+XG4gICAgICA8cD5Tb3J0IGJ5IDwvcD5cbiAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlc1snc29ydC1mb3JtJ119PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbGFiZWxJZD1cInNpbXBsZS1zZWxlY3RcIlxuICAgICAgICAgIGlkPVwic2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWxlY3RlZFNvcnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25Tb3J0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJ2b3RlX2F2ZXJhZ2VcIj5SYXRpbmc8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInJlbGVhc2VfZGF0ZVwiPlJlbGVhc2UgZGF0ZTwvTWVudUl0ZW0+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllc1NvcnRlci5wcm9wVHlwZXMgPSB7XG4gIG9uU29ydENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRTb3J0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNTb3J0ZXI7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBsb2FkTW92aWVzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9tb3ZpZXMnO1xuXG5pbXBvcnQgQm9keSBmcm9tICcuL0JvZHknO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7IG1vdmllczogc3RhdGUubW92aWVzIH0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRNb3ZpZXMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb2R5KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRGVsZXRlTW92aWVEaWFsb2cgPSAoeyBvcGVuLCBtb3ZpZUlkLCBvbkNsb3NlLCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGNvbnN0IG9uQ2xvc2VEZWxldGVEaWFsb2cgPSAoKSA9PiB7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgZGlzYWJsZUJhY2tkcm9wQ2xpY2tcbiAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duXG4gICAgICBvcGVuPXtvcGVufVxuICAgICAgb25DbG9zZT17b25DbG9zZURlbGV0ZURpYWxvZ31cbiAgICAgIG1heFdpZHRoPVwibGdcIlxuICAgID5cbiAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VEZWxldGVEaWFsb2d9PlxuICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj5EZWxldGUgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwiZGlhbG9nLWZvcm0tY29udGVudFwiPlxuICAgICAgICA8RGlhbG9nQ29udGVudFRleHQgaWQ9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbW92aWU/XG4gICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShtb3ZpZUlkKX0gY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgQ29uZmlybVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn07XG5cbkRlbGV0ZU1vdmllRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1vdmllSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZU1vdmllRGlhbG9nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL21vdmllQ2FyZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVMaXN0ID0gKHsgbW92aWVzIH0pID0+IChcbiAgPHVsIGNsYXNzTmFtZT17c3R5bGVzWydtb3ZpZS1saXN0J119PlxuICAgIHttb3ZpZXM/Lm1hcCgobW92aWUpID0+IChcbiAgICAgIDxNb3ZpZUNhcmQga2V5PXttb3ZpZT8uaWR9IG1vdmllPXttb3ZpZX0gLz5cbiAgICApKX1cbiAgPC91bD5cbik7XG5cbk1vdmllTGlzdC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgcG9zdGVyX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgICAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBvdmVydmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBydW50aW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pXG4gICkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrUHJvdmlkZXIsIEVycm9yTWVzc2FnZSwgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdlbnJlc0FycmF5LCB2YWxpZGF0aW9uU2NoZW1hLCBNT1ZJRV9GSUVMRFMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgVXBkYXRlTW92aWVEaWFsb2cgPSAoeyBtb3ZpZSwgb3Blbiwgb25VcGRhdGUsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbZ2VucmVzLCBzZXRHZW5yZXNdID0gdXNlU3RhdGUobW92aWU/LmdlbnJlcyB8fCBbXSk7XG4gIGNvbnN0IG9uQ2xvc2VFZGl0RGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUdlbnJlcyA9ICh2YWx1ZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIHNldEdlbnJlcyh2YWx1ZSk7XG4gICAgc2V0RmllbGRWYWx1ZSgnZ2VucmVzJywgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgaWQ6IG1vdmllPy5pZCxcbiAgICAgIHRpdGxlOiBtb3ZpZT8udGl0bGUsXG4gICAgICByZWxlYXNlX2RhdGU6IG1vdmllPy5yZWxlYXNlX2RhdGUsXG4gICAgICBwb3N0ZXJfcGF0aDogbW92aWU/LnBvc3Rlcl9wYXRoLFxuICAgICAgb3ZlcnZpZXc6IG1vdmllPy5vdmVydmlldyxcbiAgICAgIHJ1bnRpbWU6IG1vdmllPy5ydW50aW1lLFxuICAgICAgZ2VucmVzLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIG9uU3VibWl0OiAoZmllbGRzKSA9PiB7XG4gICAgICBvblVwZGF0ZShmaWVsZHMpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1Byb3ZpZGVyIHZhbHVlPXtmb3JtaWt9PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBkaXNhYmxlRXNjYXBlS2V5RG93blxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlRWRpdERpYWxvZ31cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJy5NdWlQYXBlci1yb290Lk11aU1lbnUtcGFwZXIuTXVpUG9wb3Zlci1wYXBlciddfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlRWRpdERpYWxvZ30+XG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxEaWFsb2dUaXRsZT5FZGl0IE1vdmllPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJkaWFsb2ctZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119Pk1vdmllIElEPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgICAgICAge21vdmllPy5pZH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+VGl0bGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlRJVExFfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PlJlbGVhc2UgRGF0ZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUkVMRUFTRV9EQVRFfVxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUkVMRUFTRV9EQVRFfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5Nb3ZpZSBVUkw8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUE9TVEVSX1BBVEh9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PkdlbnJlPC9wPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAgIHZhbHVlPXtnZW5yZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VHZW5yZXMoZXZlbnQudGFyZ2V0LnZhbHVlLCBmb3JtaWsuc2V0RmllbGRWYWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzQXJyYXkubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2dlbnJlfSB2YWx1ZT17Z2VucmV9PlxuICAgICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119Pk92ZXJ2aWV3PC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJlbXB0eSB0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PlJ1bnRpbWU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlRWRpdERpYWxvZ30gY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9Gb3JtaWtQcm92aWRlcj5cbiAgKTtcbn07XG5cblVwZGF0ZU1vdmllRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uVXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlTW92aWVEaWFsb2c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBEZWxldGVNb3ZpZURpYWxvZyBmcm9tICcuLi9EZWxldGVNb3ZpZURpYWxvZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL21vdmllcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVXBkYXRlTW92aWVEaWFsb2cgZnJvbSAnLi4vVXBkYXRlTW92aWVEaWFsb2cnO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSAoeyBtb3ZpZSwgdXBkYXRlTW92aWUsIGRlbGV0ZU1vdmllIH0pID0+IHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29wZW5EZWxldGUsIHNldE9wZW5EZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbkVkaXQsIHNldE9wZW5FZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZS5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICBjb25zdCBvbkVkaXRNZW51SXRlbUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgc2V0T3BlbkVkaXQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGVNZW51SXRlbUNsaWNrID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgc2V0T3BlbkRlbGV0ZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZU1vdmllID0gKG1vdmllSWQpID0+IHtcbiAgICBkZWxldGVNb3ZpZShtb3ZpZUlkKTtcbiAgICBzZXRPcGVuRGVsZXRlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZU1vdmllID0gKG0pID0+IHtcbiAgICB1cGRhdGVNb3ZpZShtKTtcbiAgICBzZXRPcGVuRWRpdChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbJ21vdmllLWNhcmQnXX0+XG4gICAgICA8TGluayBocmVmPXtgL21vdmllcy8ke21vdmllPy5pZH1gfT5cbiAgICAgICAgPGltZyBzcmM9e21vdmllPy5wb3N0ZXJfcGF0aH0gYWx0PVwiXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vdmllLWluZm8nXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2luZm8tZmlyc3Qtcm93J119PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bW92aWU/LnRpdGxlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snbW92aWUtcmVsZWFzZS15ZWFyJ119PlxuICAgICAgICAgICAge21vdmllPy5yZWxlYXNlX2RhdGU/LnNwbGl0KCctJylbMF19XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZ2VucmV9Pnttb3ZpZT8uZ2VucmVzPy5qb2luKCcsICcpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2NhcmQtbWVudS1pY29uJ119XG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxNZW51XG4gICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e29uRWRpdE1lbnVJdGVtQ2xpY2t9IGNsYXNzTmFtZT1cImNhcmQtbWVudS1pdGVtXCI+XG4gICAgICAgICAgZWRpdFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17b25EZWxldGVNZW51SXRlbUNsaWNrfSBjbGFzc05hbWU9XCJjYXJkLW1lbnUtaXRlbVwiPlxuICAgICAgICAgIGRlbGV0ZVxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8VXBkYXRlTW92aWVEaWFsb2dcbiAgICAgICAgICBvcGVuPXtvcGVuRWRpdH1cbiAgICAgICAgICBtb3ZpZT17bW92aWV9XG4gICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlTW92aWV9XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbkVkaXQoZmFsc2UpfVxuICAgICAgICAvPlxuICAgICAgICA8RGVsZXRlTW92aWVEaWFsb2dcbiAgICAgICAgICBvcGVuPXtvcGVuRGVsZXRlfVxuICAgICAgICAgIG1vdmllSWQ9e21vdmllPy5pZH1cbiAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGVNb3ZpZX1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuRGVsZXRlKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvTWVudT5cbiAgICA8L2xpPlxuICApO1xufTtcblxuTW92aWVDYXJkLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldmVudWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcnVudGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSkuaXNSZXF1aXJlZCxcbiAgdXBkYXRlTW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRlbGV0ZU1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZGVsZXRlTW92aWUsIHVwZGF0ZU1vdmllIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9tb3ZpZXMnO1xuXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vTW92aWVDYXJkJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICB1cGRhdGVNb3ZpZSxcbiAgZGVsZXRlTW92aWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoTW92aWVDYXJkKTtcbiIsImltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xuXG5leHBvcnQgY29uc3QgTU9WSUVfRklFTERTID0ge1xuICBUSVRMRTogJ3RpdGxlJyxcbiAgUkVMRUFTRV9EQVRFOiAncmVsZWFzZV9kYXRlJyxcbiAgUE9TVEVSX1BBVEg6ICdwb3N0ZXJfcGF0aCcsXG4gIEdFTlJFUzogJ2dlbnJlcycsXG4gIE9WRVJWSUVXOiAnb3ZlcnZpZXcnLFxuICBSVU5USU1FOiAncnVudGltZScsXG59O1xuXG5leHBvcnQgY29uc3QgZ2VucmVzQXJyYXkgPSBbXG4gICdBY3Rpb24nLFxuICAnQWR2ZW50dXJlJyxcbiAgJ0FuaW1hdGlvbicsXG4gICdDb21lZHknLFxuICAnRHJhbWEnLFxuICAnRmFtaWx5JyxcbiAgJ0ZhbnRhc3knLFxuICAnU2NpZW5jZSBGaWN0aW9uJyxcbl07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCh7XG4gIHRpdGxlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ1RpdGxlIGlzIHJlcXVpcmVkJyksXG4gIHBvc3Rlcl9wYXRoOiB5dXAuc3RyaW5nKCkudXJsKCkucmVxdWlyZWQoJ1Bvc3RlciB1cmwgaXMgcmVxdWlyZWQnKSxcbiAgcmVsZWFzZV9kYXRlOiB5dXAuc3RyaW5nKCksXG4gIG92ZXJ2aWV3OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ092ZXJ2aWV3IGlzIHJlcXVpcmVkJyksXG4gIHJ1bnRpbWU6IHl1cC5udW1iZXIoKS5yZXF1aXJlZCgnUnVudGltZSBpcyByZXF1aXJlZCcpLFxuICBnZW5yZXM6IHl1cC5hcnJheSgpLm1pbigxKS5yZXF1aXJlZCgnTWluaW11bSBvbmUgZ2VucmUgc2hvdWxkIGJlIHNlbGVjdGVkJyksXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoKSB7XG4gICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKCkge31cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgIHJldHVybiA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmcgKDwvaDE+O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0gZml4ZWQ+XG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ28tZm9vdGVyJ119IGFsdD1cImxvZ29cIiAvPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrUHJvdmlkZXIsIEVycm9yTWVzc2FnZSwgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdlbnJlc0FycmF5LCB2YWxpZGF0aW9uU2NoZW1hLCBNT1ZJRV9GSUVMRFMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBBZGRNb3ZpZURpYWxvZyA9ICh7IG9wZW4sIG9uQWRkLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBvbkNsb3NlQWRkRGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUdlbnJlcyA9ICh2YWx1ZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIHNldEdlbnJlcyh2YWx1ZSk7XG4gICAgc2V0RmllbGRWYWx1ZSgnZ2VucmVzJywgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgcmVsZWFzZV9kYXRlOiAnJyxcbiAgICAgIHBvc3Rlcl9wYXRoOiAnJyxcbiAgICAgIGdlbnJlcyxcbiAgICAgIG92ZXJ2aWV3OiAnJyxcbiAgICAgIHJ1bnRpbWU6ICcnLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XG4gICAgICBvbkFkZCh2YWx1ZXMpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1Byb3ZpZGVyIHZhbHVlPXtmb3JtaWt9PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBkaXNhYmxlQmFja2Ryb3BDbGlja1xuICAgICAgICBkaXNhYmxlRXNjYXBlS2V5RG93blxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlQWRkRGlhbG9nfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlQWRkRGlhbG9nfT5cbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEZvcm0gdGl0bGU9XCJhZGQtbW92aWVcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+QWRkIE1vdmllPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJkaWFsb2ctZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5UaXRsZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3ZpZSBUaXRsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5SZWxlYXNlIERhdGU8L3A+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUkVMRUFTRV9EQVRFfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBEYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicmVsZWFzZV9kYXRlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJyZWxlYXNlX2RhdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVkaXQtZmllbGQtbmFtZVwiPk1vdmllIFVSTDwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3ZpZSBVUkwgaGVyZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmllbGRcIlxuICAgICAgICAgICAgICB0aXRsZT1cInBvc3Rlcl9wYXRoXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJwb3N0ZXJfcGF0aFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUE9TVEVSX1BBVEh9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5HZW5yZTwvcD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2dlbnJlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUdlbnJlcyhldmVudC50YXJnZXQudmFsdWUsIGZvcm1pay5zZXRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgIHRpdGxlPVwiZ2VucmVzXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJnZW5yZXNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzQXJyYXkubWFwKChnZW5yZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2dlbnJlfSB2YWx1ZT17Z2VucmV9PlxuICAgICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIG5hbWU9e01PVklFX0ZJRUxEUy5HRU5SRVN9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZGl0LWZpZWxkLW5hbWVcIj5PdmVydmlldzwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk92ZXJ2aWV3IEhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJvdmVydmlld1wiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwib3ZlcnZpZXdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLk9WRVJWSUVXfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZC1uYW1lXCI+UnVudGltZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbmFtZT17TU9WSUVfRklFTERTLlJVTlRJTUV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUnVudGltZSBIZXJlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1maWVsZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwicnVudGltZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwicnVudGltZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2VBZGREaWFsb2d9XG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJyZXNldFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwic3VibWl0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvRm9ybWlrUHJvdmlkZXI+XG4gICk7XG59O1xuXG5BZGRNb3ZpZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQWRkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTW92aWVEaWFsb2c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEFkZE1vdmllRGlhbG9nIGZyb20gJy4vQWRkTW92aWVEaWFsb2cnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTW92aWVEZXRhaWxzIGZyb20gJy4vbW92aWVEZXRhaWxzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2hCYXIvU2VhcmNoQmFyJztcblxuY29uc3QgSGVhZGVyID0gKHsgYWRkTW92aWUgfSkgPT4ge1xuICBjb25zdCBbb3BlbkFkZCwgc2V0T3BlbkFkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25BZGRNb3ZpZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW5BZGQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25BZGRNb3ZpZSA9IChtb3ZpZSkgPT4ge1xuICAgIGFkZE1vdmllKG1vdmllKTtcbiAgICBzZXRPcGVuQWRkKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0gZml4ZWQ+XG4gICAgICB7dXNlUm91dGVyKCkucGF0aG5hbWUuaW5jbHVkZXMoJ21vdmllSWQnKSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YmhlYWRlcn0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGZvbnRTaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE1vdmllRGV0YWlscyAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFkZE1vdmllQ2xpY2t9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydidXR0b24tYWRkLW1vdmllJ119XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICsgQWRkIE1vdmllXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxBZGRNb3ZpZURpYWxvZ1xuICAgICAgICAgICAgICBvcGVuPXtvcGVuQWRkfVxuICAgICAgICAgICAgICBvbkFkZD17b25BZGRNb3ZpZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbkFkZChmYWxzZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgYWRkTW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBhZGRNb3ZpZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvbW92aWVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYWRkTW92aWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb3ZpZURldGFpbHMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBNb3ZpZURldGFpbHMgPSAoeyBtb3ZpZSwgZ2V0TW92aWUgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBtb3ZpZUlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNb3ZpZShOdW1iZXIobW92aWVJZCkpO1xuICB9LCBbbW92aWVJZCwgZ2V0TW92aWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vdmllLWRldGFpbHMnXX0+XG4gICAgICA8aW1nIHNyYz17bW92aWU/LnBvc3Rlcl9wYXRofSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0ZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydmaXJzdC1yb3cnXX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bW92aWU/LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9Pnttb3ZpZT8udm90ZV9hdmVyYWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdsaW5lfT57bW92aWU/LnRhZ2xpbmV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RoaXJkLXJvdyddfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydyZWxlYXNlLWRhdGUnXX0+XG4gICAgICAgICAgICB7bW92aWU/LnJlbGVhc2VfZGF0ZT8uc3BsaXQoJy0nKVswXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJ1bnRpbWV9Pnttb3ZpZT8ucnVudGltZX0gbWluPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT57bW92aWU/Lm92ZXJ2aWV3fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZURldGFpbHMuZGVmYXVsdFByb3BzID0ge1xuICBtb3ZpZTogbnVsbCxcbn07XG5cbk1vdmllRGV0YWlscy5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwb3N0ZXJfcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICBnZXRNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllRGV0YWlscztcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldE1vdmllIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9oZWFkZXInO1xuXG5pbXBvcnQgTW92aWVEZXRhaWxzIGZyb20gJy4vTW92aWVEZXRhaWxzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyBtb3ZpZTogc3RhdGUubW92aWUgfSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZ2V0TW92aWUsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTW92aWVEZXRhaWxzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2VhcmNoQmFyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgU2VhcmNoQmFyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25TZWFyY2hNb3ZpZXMgPSAocXVlcnkpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL21vdmllcz9zZWFyY2g9JHtxdWVyeX1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3NlYXJjaC1iYXInXX0+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+ZmluZCB5b3VyIG1vdmllPC9wPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICB9fVxuICAgICAgICBvblN1Ym1pdD17KGZpZWxkcykgPT4ge1xuICAgICAgICAgIG9uU2VhcmNoTW92aWVzKGZpZWxkcy5xdWVyeSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGlkPXtzdHlsZXNbJ3NlYXJjaC1pbnB1dCddfVxuICAgICAgICAgICAgbmFtZT1cInF1ZXJ5XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVNlc3Npb25TdG9yYWdlID0gKHN0b3JhZ2VLZXkpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICBwcm9jZXNzLmJyb3dzZXIgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIDogbnVsbFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIHZhbHVlKTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgc3RvcmFnZUtleV0pO1xuXG4gIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlc3Npb25TdG9yYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBCb2R5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxCb2R5IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImNsYXNzIE1vdmllc1NlcnZpY2Uge1xuICBhcGlVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL21vdmllcy8nO1xuXG4gIGZldGNoTW92aWVzID0gKGZpbHRlciwgc29ydCwgcXVlcnkpID0+XG4gICAgZmV0Y2godGhpcy5idWlsZFVybChmaWx0ZXIsIHNvcnQsIHF1ZXJ5KSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBnZXRNb3ZpZUJ5SWQgPSAobW92aWVJZCkgPT5cbiAgICBmZXRjaCh0aGlzLmFwaVVSTCArIG1vdmllSWQpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgYWRkTW92aWUgPSAobW92aWUpID0+XG4gICAgZmV0Y2godGhpcy5hcGlVUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vdmllKSxcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIHVwZGF0ZU1vdmllID0gKG1vdmllKSA9PlxuICAgIGZldGNoKHRoaXMuYXBpVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vdmllKSxcbiAgICB9KTtcblxuICBkZWxldGVNb3ZpZSA9IChpZCkgPT4gZmV0Y2godGhpcy5hcGlVUkwgKyBpZCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuXG4gIGJ1aWxkVXJsID0gKGZpbHRlciwgc29ydCwgcXVlcnkpID0+IHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5hcGlVUkx9P3NvcnRCeT0ke3NvcnR9JnNvcnRPcmRlcj1kZXNjYDtcbiAgICBpZiAoZmlsdGVyICYmIGZpbHRlciAhPT0gJ0FsbCcpIHtcbiAgICAgIHVybCArPSBgP2ZpbHRlcj0ke2ZpbHRlcn1gO1xuICAgIH1cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHVybCArPSBgJnNlYXJjaD0ke3F1ZXJ5fSZzZWFyY2hCeT10aXRsZWA7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNb3ZpZXNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQge1xuICBHRVRfTU9WSUVfQllfSUQsXG4gIEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTLFxuICBHRVRfTU9WSUVfQllfSURfRkFJTCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZSA9IChtb3ZpZUlkKSA9PiAoe1xuICB0eXBlOiBHRVRfTU9WSUVfQllfSUQsXG4gIG1vdmllSWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllU3VjY2VzcyA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogR0VUX01PVklFX0JZX0lEX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcbiIsImltcG9ydCB7XG4gIExPQURfTU9WSUVTLFxuICBBRERfTU9WSUUsXG4gIFVQREFURV9NT1ZJRSxcbiAgREVMRVRFX01PVklFLFxuICBMT0FEX01PVklFU19TVUNDQ0VTUyxcbiAgTE9BRF9NT1ZJRVNfRkFJTCxcbiAgQUREX01PVklFX1NVQ0NFU1MsXG4gIEFERF9NT1ZJRV9GQUlMLFxuICBVUERBVEVfTU9WSUVfU1VDQ0VTUyxcbiAgVVBEQVRFX01PVklFX0ZBSUwsXG4gIERFTEVURV9NT1ZJRV9TVUNDRVNTLFxuICBERUxFVEVfTU9WSUVfRkFJTCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkTW92aWVzID0gKGZpbHRlciwgc29ydCwgcXVlcnkpID0+ICh7XG4gIHR5cGU6IExPQURfTU9WSUVTLFxuICBmaWx0ZXIsXG4gIHNvcnQsXG4gIHF1ZXJ5LFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkTW92aWVzU3VjY2VzcyA9IChtb3ZpZXMpID0+ICh7XG4gIHR5cGU6IExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBtb3ZpZXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvYWRNb3ZpZXNGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IExPQURfTU9WSUVTX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1vdmllID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBBRERfTU9WSUUsXG4gIG1vdmllLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRNb3ZpZVN1Y2Nlc3MgPSAobW92aWUpID0+ICh7XG4gIHR5cGU6IEFERF9NT1ZJRV9TVUNDRVNTLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkTW92aWVGYWlsID0gKG1lc3NhZ2UpID0+ICh7XG4gIHR5cGU6IEFERF9NT1ZJRV9GQUlMLFxuICBtZXNzYWdlLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZSA9IChtb3ZpZSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX01PVklFLFxuICBtb3ZpZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWVTdWNjZXNzID0gKG1vdmllKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfTU9WSUVfU1VDQ0VTUyxcbiAgbW92aWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllRmFpbCA9IChtZXNzYWdlKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfTU9WSUVfRkFJTCxcbiAgbWVzc2FnZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWUgPSAoaWQpID0+ICh7XG4gIHR5cGU6IERFTEVURV9NT1ZJRSxcbiAgaWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllU3VjY2VzcyA9IChpZCkgPT4gKHtcbiAgdHlwZTogREVMRVRFX01PVklFX1NVQ0NFU1MsXG4gIGlkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZUZhaWwgPSAobWVzc2FnZSkgPT4gKHtcbiAgdHlwZTogREVMRVRFX01PVklFX0ZBSUwsXG4gIG1lc3NhZ2UsXG59KTtcbiIsImV4cG9ydCBjb25zdCBMT0FEX01PVklFUyA9ICdMT0FEX01PVklFUyc7XG5leHBvcnQgY29uc3QgTE9BRF9NT1ZJRVNfU1VDQ0NFU1MgPSAnTE9BRF9NT1ZJRVNfU1VDQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfTU9WSUVTX0ZBSUwgPSAnTE9BRF9NT1ZJRVNfRkFJTCc7XG5leHBvcnQgY29uc3QgQUREX01PVklFID0gJ0FERF9NT1ZJRSc7XG5leHBvcnQgY29uc3QgQUREX01PVklFX1NVQ0NFU1MgPSAnQUREX01PVklFX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRV9GQUlMID0gJ0FERF9NT1ZJRV9GQUlMJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUUgPSAnVVBEQVRFX01PVklFJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUVfU1VDQ0VTUyA9ICdVUERBVEVfTU9WSUVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFX0ZBSUwgPSAnVVBEQVRFX01PVklFX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRSA9ICdERUxFVEVfTU9WSUUnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRV9TVUNDRVNTID0gJ0RFTEVURV9NT1ZJRV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9WSUVfRkFJTCA9ICdERUxFVEVfTU9WSUVfRkFJTCc7XG5leHBvcnQgY29uc3QgR0VUX01PVklFX0JZX0lEID0gJ0dFVF9NT1ZJRV9CWV9JRCc7XG5leHBvcnQgY29uc3QgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MgPSAnR0VUX01PVklFX0JZX0lEX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9CWV9JRF9GQUlMID0gJ0dFVF9NT1ZJRV9CWV9JRF9GQUlMJztcbiIsImltcG9ydCB7XG4gIEdFVF9NT1ZJRV9CWV9JRF9TVUNDRVNTLFxuICBHRVRfTU9WSUVfQllfSURfRkFJTCxcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGhlYWRlclJlZHVjZXIgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0VUX01PVklFX0JZX0lEX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLm1vdmllO1xuICAgIGNhc2UgR0VUX01PVklFX0JZX0lEX0ZBSUw6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyUmVkdWNlcjtcbiIsImltcG9ydCB7XG4gIExPQURfTU9WSUVTX1NVQ0NDRVNTLFxuICBBRERfTU9WSUVfU1VDQ0VTUyxcbiAgVVBEQVRFX01PVklFX0ZBSUwsXG4gIERFTEVURV9NT1ZJRV9GQUlMLFxuICBMT0FEX01PVklFU19GQUlMLFxuICBBRERfTU9WSUVfRkFJTCxcbiAgVVBEQVRFX01PVklFX1NVQ0NFU1MsXG4gIERFTEVURV9NT1ZJRV9TVUNDRVNTLFxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgbW92aWVzUmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRF9NT1ZJRVNfU1VDQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLm1vdmllcztcbiAgICBjYXNlIEFERF9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLm1vdmllXTtcbiAgICBjYXNlIFVQREFURV9NT1ZJRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgobW92aWUpID0+IHtcbiAgICAgICAgaWYgKG1vdmllLmlkID09PSBhY3Rpb24ubW92aWUuaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYWN0aW9uLm1vdmllLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmllO1xuICAgICAgfSk7XG4gICAgY2FzZSBERUxFVEVfTU9WSUVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUuaWQgIT09IGFjdGlvbi5pZCldO1xuICAgIGNhc2UgTE9BRF9NT1ZJRVNfRkFJTDpcbiAgICBjYXNlIEFERF9NT1ZJRV9GQUlMOlxuICAgIGNhc2UgVVBEQVRFX01PVklFX0ZBSUw6XG4gICAgY2FzZSBERUxFVEVfTU9WSUVfRkFJTDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3ZpZXNSZWR1Y2VyO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCBNb3ZpZXNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL01vdmllc1NlcnZpY2UnO1xuXG5pbXBvcnQgeyBnZXRNb3ZpZVN1Y2Nlc3MsIGdldE1vdmllRmFpbCB9IGZyb20gJy4vYWN0aW9ucy9oZWFkZXInO1xuaW1wb3J0IHtcbiAgbG9hZE1vdmllc1N1Y2Nlc3MsXG4gIGxvYWRNb3ZpZXNGYWlsLFxuICBhZGRNb3ZpZVN1Y2Nlc3MsXG4gIGFkZE1vdmllRmFpbCxcbiAgdXBkYXRlTW92aWVTdWNjZXNzLFxuICB1cGRhdGVNb3ZpZUZhaWwsXG4gIGRlbGV0ZU1vdmllU3VjY2VzcyxcbiAgZGVsZXRlTW92aWVGYWlsLFxufSBmcm9tICcuL2FjdGlvbnMvbW92aWVzJztcbmltcG9ydCB7XG4gIExPQURfTU9WSUVTLFxuICBBRERfTU9WSUUsXG4gIERFTEVURV9NT1ZJRSxcbiAgVVBEQVRFX01PVklFLFxuICBHRVRfTU9WSUVfQllfSUQsXG59IGZyb20gJy4vYWN0aW9ucy90eXBlcyc7XG5cbmZ1bmN0aW9uKiBnZXRBbGxNb3ZpZXMoeyBmaWx0ZXIsIHNvcnQsIHF1ZXJ5IH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb3ZpZXMgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuZmV0Y2hNb3ZpZXMsIGZpbHRlciwgc29ydCwgcXVlcnkpO1xuICAgIHlpZWxkIHB1dChsb2FkTW92aWVzU3VjY2Vzcyhtb3ZpZXMuZGF0YSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGxvYWRNb3ZpZXNGYWlsKGUubWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBnZXRNb3ZpZSh7IG1vdmllSWQgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vdmllID0geWllbGQgY2FsbChNb3ZpZXNTZXJ2aWNlLmdldE1vdmllQnlJZCwgbW92aWVJZCk7XG4gICAgeWllbGQgcHV0KGdldE1vdmllU3VjY2Vzcyhtb3ZpZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KGdldE1vdmllRmFpbChlLm1lc3NhZ2UpKTtcbiAgfVxufVxuZnVuY3Rpb24qIGFkZE1vdmllKHsgbW92aWUgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IGFkZGVkTW92aWUgPSB5aWVsZCBjYWxsKE1vdmllc1NlcnZpY2UuYWRkTW92aWUsIG1vdmllKTtcbiAgICB5aWVsZCBwdXQoYWRkTW92aWVTdWNjZXNzKGFkZGVkTW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChhZGRNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHVwZGF0ZU1vdmllKHsgbW92aWUgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS51cGRhdGVNb3ZpZSwgbW92aWUpO1xuICAgIHlpZWxkIHB1dCh1cGRhdGVNb3ZpZVN1Y2Nlc3MobW92aWUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dCh1cGRhdGVNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGRlbGV0ZU1vdmllKHsgaWQgfSkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwoTW92aWVzU2VydmljZS5kZWxldGVNb3ZpZSwgaWQpO1xuICAgIHlpZWxkIHB1dChkZWxldGVNb3ZpZVN1Y2Nlc3MoaWQpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChkZWxldGVNb3ZpZUZhaWwoZS5tZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIG1vdmllc1NhZ2FzKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9NT1ZJRVMsIGdldEFsbE1vdmllcyk7XG4gIHlpZWxkIHRha2VFdmVyeShBRERfTU9WSUUsIGFkZE1vdmllKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KFVQREFURV9NT1ZJRSwgdXBkYXRlTW92aWUpO1xuICB5aWVsZCB0YWtlRXZlcnkoREVMRVRFX01PVklFLCBkZWxldGVNb3ZpZSk7XG4gIHlpZWxkIHRha2VFdmVyeShHRVRfTU9WSUVfQllfSUQsIGdldE1vdmllKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW92aWVzU2FnYXM7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5cbmltcG9ydCBoZWFkZXJSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvaGVhZGVyJztcbmltcG9ydCBtb3ZpZXNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvbW92aWVzJztcbmltcG9ydCBtb3ZpZXNTYWdhcyBmcm9tICcuL3NhZ2FzJztcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgY29tYmluZVJlZHVjZXJzKHsgbW92aWVzOiBtb3ZpZXNSZWR1Y2VyLCBtb3ZpZTogaGVhZGVyUmVkdWNlciB9KSxcbiAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKVxuKTtcbnNhZ2FNaWRkbGV3YXJlLnJ1bihtb3ZpZXNTYWdhcyk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm9keVwiOiBcImJvZHlfYm9keV9fMVNyN2NcIixcblx0XCJzdWJtZW51XCI6IFwiYm9keV9zdWJtZW51X18zX2N6dlwiLFxuXHRcInNvcnRcIjogXCJib2R5X3NvcnRfXzJRZlotXCIsXG5cdFwiTXVpRm9ybUNvbnRyb2wtcm9vdFwiOiBcImJvZHlfTXVpRm9ybUNvbnRyb2wtcm9vdF9fMk00VUJcIixcblx0XCJzb3J0Rm9ybVwiOiBcImJvZHlfc29ydEZvcm1fXzE5U1N3XCIsXG5cdFwiTXVpU2VsZWN0LXNlbGVjdFwiOiBcImJvZHlfTXVpU2VsZWN0LXNlbGVjdF9fSGFseElcIixcblx0XCJNdWlTZWxlY3QtaWNvblwiOiBcImJvZHlfTXVpU2VsZWN0LWljb25fX1ZHOG01XCIsXG5cdFwiTXVpSW5wdXQtdW5kZXJsaW5lXCI6IFwiYm9keV9NdWlJbnB1dC11bmRlcmxpbmVfXzFnUkUyXCIsXG5cdFwiZ2VucmVzLWZpbHRlclwiOiBcImJvZHlfZ2VucmVzLWZpbHRlcl9fMzBvbGZcIixcblx0XCJpdGVtXCI6IFwiYm9keV9pdGVtX18xc0QxQ1wiLFxuXHRcIml0ZW0tYWN0aXZlXCI6IFwiYm9keV9pdGVtLWFjdGl2ZV9fMmN4Q2tcIixcblx0XCJtb3ZpZXMtY291bnRlclwiOiBcImJvZHlfbW92aWVzLWNvdW50ZXJfX3hlNHdtXCIsXG5cdFwibm8tbW92aWVzXCI6IFwiYm9keV9uby1tb3ZpZXNfXzNwVkdwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb3ZpZS1saXN0XCI6IFwibW92aWVzX21vdmllLWxpc3RfXzNvLWhfXCIsXG5cdFwibW92aWUtY2FyZFwiOiBcIm1vdmllc19tb3ZpZS1jYXJkX19wSkFqcFwiLFxuXHRcImNhcmQtbWVudS1pY29uXCI6IFwibW92aWVzX2NhcmQtbWVudS1pY29uX18xUWR2TlwiLFxuXHRcIm1vdmllLWluZm9cIjogXCJtb3ZpZXNfbW92aWUtaW5mb19fM3pyNmNcIixcblx0XCJ0aXRsZVwiOiBcIm1vdmllc190aXRsZV9fOHNvQXNcIixcblx0XCJpbmZvLWZpcnN0LXJvd1wiOiBcIm1vdmllc19pbmZvLWZpcnN0LXJvd19fM25WeHlcIixcblx0XCJtb3ZpZS1yZWxlYXNlLXllYXJcIjogXCJtb3ZpZXNfbW92aWUtcmVsZWFzZS15ZWFyX18yNkxjMVwiLFxuXHRcImdlbnJlXCI6IFwibW92aWVzX2dlbnJlX18yeTR2cFwiLFxuXHRcIk11aVBhcGVyLXJvb3RcIjogXCJtb3ZpZXNfTXVpUGFwZXItcm9vdF9fMUFRbG1cIixcblx0XCJNdWlNZW51LXBhcGVyXCI6IFwibW92aWVzX011aU1lbnUtcGFwZXJfX29oaHh1XCIsXG5cdFwiTXVpUG9wb3Zlci1wYXBlclwiOiBcIm1vdmllc19NdWlQb3BvdmVyLXBhcGVyX18yWnUwTVwiLFxuXHRcIk11aUJ1dHRvbkJhc2Utcm9vdFwiOiBcIm1vdmllc19NdWlCdXR0b25CYXNlLXJvb3RfX1puTi0zXCIsXG5cdFwiTXVpTGlzdEl0ZW0tcm9vdFwiOiBcIm1vdmllc19NdWlMaXN0SXRlbS1yb290X18zektKcFwiLFxuXHRcIk11aU1lbnVJdGVtLXJvb3RcIjogXCJtb3ZpZXNfTXVpTWVudUl0ZW0tcm9vdF9fMXEzRTRcIixcblx0XCJjYXJkLW1lbnUtaXRlbVwiOiBcIm1vdmllc19jYXJkLW1lbnUtaXRlbV9fM251V2lcIixcblx0XCJNdWlEaWFsb2ctcGFwZXJcIjogXCJtb3ZpZXNfTXVpRGlhbG9nLXBhcGVyX19zdlBlUVwiLFxuXHRcIk11aUlucHV0LXVuZGVybGluZVwiOiBcIm1vdmllc19NdWlJbnB1dC11bmRlcmxpbmVfXzF3T1U4XCIsXG5cdFwiZGlhbG9nLWZvcm0tY29udGVudFwiOiBcIm1vdmllc19kaWFsb2ctZm9ybS1jb250ZW50X18xaUtmNlwiLFxuXHRcImVkaXQtZmllbGQtbmFtZVwiOiBcIm1vdmllc19lZGl0LWZpZWxkLW5hbWVfXzJtVDJsXCIsXG5cdFwiZWRpdC1maWVsZFwiOiBcIm1vdmllc19lZGl0LWZpZWxkX18yRGlNT1wiLFxuXHRcIk11aVNlbGVjdC1pY29uXCI6IFwibW92aWVzX011aVNlbGVjdC1pY29uX191WEpWbVwiLFxuXHRcImVycm9yXCI6IFwibW92aWVzX2Vycm9yX18xNldCa1wiLFxuXHRcIk11aUljb25CdXR0b24tcm9vdFwiOiBcIm1vdmllc19NdWlJY29uQnV0dG9uLXJvb3RfXzIzQ0NHXCIsXG5cdFwiTXVpVHlwb2dyYXBoeS1oNlwiOiBcIm1vdmllc19NdWlUeXBvZ3JhcGh5LWg2X19JVk9JNVwiLFxuXHRcIk11aVR5cG9ncmFwaHktY29sb3JUZXh0U2Vjb25kYXJ5XCI6IFwibW92aWVzX011aVR5cG9ncmFwaHktY29sb3JUZXh0U2Vjb25kYXJ5X18xVkwxUlwiLFxuXHRcIk11aURpYWxvZ0FjdGlvbnMtc3BhY2luZ1wiOiBcIm1vdmllc19NdWlEaWFsb2dBY3Rpb25zLXNwYWNpbmdfXzF1MFVxXCIsXG5cdFwiTXVpQnV0dG9uLXRleHRQcmltYXJ5XCI6IFwibW92aWVzX011aUJ1dHRvbi10ZXh0UHJpbWFyeV9fSjVSeVBcIixcblx0XCJNdWlCdXR0b24tdGV4dFNlY29uZGFyeVwiOiBcIm1vdmllc19NdWlCdXR0b24tdGV4dFNlY29uZGFyeV9fMm1nVklcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9mb290ZXJfXzJqX0ZyXCIsXG5cdFwibG9nby1mb290ZXJcIjogXCJmb290ZXJfbG9nby1mb290ZXJfXzFqQWY1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18ycExpWFwiLFxuXHRcInN1YmhlYWRlclwiOiBcImhlYWRlcl9zdWJoZWFkZXJfXzVXdzYxXCIsXG5cdFwibG9nb1wiOiBcImhlYWRlcl9sb2dvX18yNGZ3RFwiLFxuXHRcImJ1dHRvbi1hZGQtbW92aWVcIjogXCJoZWFkZXJfYnV0dG9uLWFkZC1tb3ZpZV9fMjhjNVpcIixcblx0XCJNdWlJY29uQnV0dG9uLXJvb3RcIjogXCJoZWFkZXJfTXVpSWNvbkJ1dHRvbi1yb290X19NYUU1c1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW92aWUtZGV0YWlsc1wiOiBcIm1vdmllRGV0YWlsc19tb3ZpZS1kZXRhaWxzX183Z3NOYlwiLFxuXHRcInBvc3RlclwiOiBcIm1vdmllRGV0YWlsc19wb3N0ZXJfXzFFZFZuXCIsXG5cdFwiaW5mb1wiOiBcIm1vdmllRGV0YWlsc19pbmZvX18yelBkOVwiLFxuXHRcImZpcnN0LXJvd1wiOiBcIm1vdmllRGV0YWlsc19maXJzdC1yb3dfX3VpMmZ4XCIsXG5cdFwidGl0bGVcIjogXCJtb3ZpZURldGFpbHNfdGl0bGVfX09ocC1qXCIsXG5cdFwicmF0aW5nXCI6IFwibW92aWVEZXRhaWxzX3JhdGluZ19fa0pxbEtcIixcblx0XCJ0aGlyZC1yb3dcIjogXCJtb3ZpZURldGFpbHNfdGhpcmQtcm93X18ySUt5ZlwiLFxuXHRcInJlbGVhc2UtZGF0ZVwiOiBcIm1vdmllRGV0YWlsc19yZWxlYXNlLWRhdGVfXzI5M2NzXCIsXG5cdFwicnVudGltZVwiOiBcIm1vdmllRGV0YWlsc19ydW50aW1lX18zZWJfZVwiLFxuXHRcImRhcmtcIjogXCJtb3ZpZURldGFpbHNfZGFya19fdUZkTUZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaC1iYXJcIjogXCJzZWFyY2hCYXJfc2VhcmNoLWJhcl9fM0k3ZFJcIixcblx0XCJ0aXRsZVwiOiBcInNlYXJjaEJhcl90aXRsZV9fMkUtOElcIixcblx0XCJzZWFyY2gtaW5wdXRcIjogXCJzZWFyY2hCYXJfc2VhcmNoLWlucHV0X18ybzVmYlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=