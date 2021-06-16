webpackHotUpdate_N_E("pages/movies/[movieId]",{

/***/ "./src/components/body/movieList/UpdateMovieDialog.js":
/*!************************************************************!*\
  !*** ./src/components/body/movieList/UpdateMovieDialog.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./src/components/constants.js");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movies.module.scss */ "./src/components/body/movieList/movies.module.scss");
/* harmony import */ var _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_movies_module_scss__WEBPACK_IMPORTED_MODULE_14__);


var _s = $RefreshSig$();
















var UpdateMovieDialog = function UpdateMovieDialog(_ref) {
  _s();

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disableEscapeKeyDown: true,
    open: open,
    onClose: onCloseEditDialog,
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['MuiPaper-root MuiMenu-paper MuiPopover-paper']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "aria-label": "close",
    onClick: onCloseEditDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Edit Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, "Genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "text",
    name: _constants__WEBPACK_IMPORTED_MODULE_13__["MOVIE_FIELDS"].GENRES,
    className: _movies_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['edit-field'],
    value: genres,
    onChange: function onChange(event) {
      return onChangeGenres(event.target.value, formik.setFieldValue);
    },
    multiple: true
  }, _constants__WEBPACK_IMPORTED_MODULE_13__["genresArray"].map(function (genre) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onCloseEditDialog,
    color: "secondary",
    size: "large"
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "primary",
    size: "large",
    type: "submit"
  }, "Save")))));
};

_s(UpdateMovieDialog, "raB5fvfx9OZrpYLLfLCsmtbLsag=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_11__["useFormik"]];
});

_c = UpdateMovieDialog;
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

var _c;

$RefreshReg$(_c, "UpdateMovieDialog");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9keS9tb3ZpZUxpc3QvVXBkYXRlTW92aWVEaWFsb2cuanMiXSwibmFtZXMiOlsiVXBkYXRlTW92aWVEaWFsb2ciLCJtb3ZpZSIsIm9wZW4iLCJvblVwZGF0ZSIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImdlbnJlcyIsInNldEdlbnJlcyIsIm9uQ2xvc2VFZGl0RGlhbG9nIiwib25DaGFuZ2VHZW5yZXMiLCJ2YWx1ZSIsInNldEZpZWxkVmFsdWUiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiaWQiLCJ0aXRsZSIsInJlbGVhc2VfZGF0ZSIsInBvc3Rlcl9wYXRoIiwib3ZlcnZpZXciLCJydW50aW1lIiwidmFsaWRhdGlvblNjaGVtYSIsInZhbHVlcyIsIm9uU3VibWl0IiwiZmllbGRzIiwic3R5bGVzIiwiY29sb3IiLCJNT1ZJRV9GSUVMRFMiLCJUSVRMRSIsIlJFTEVBU0VfREFURSIsIlBPU1RFUl9QQVRIIiwiR0VOUkVTIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZW5yZXNBcnJheSIsIm1hcCIsImdlbnJlIiwiT1ZFUlZJRVciLCJSVU5USU1FIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYXJyYXlPZiIsInZvdGVfYXZlcmFnZSIsInRhZ2xpbmUiLCJ1cmwiLCJ2b3RlX2NvdW50IiwiYnVkZ2V0IiwicmV2ZW51ZSIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUF3QztBQUFBOztBQUFBLE1BQXJDQyxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxN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QWxCSSxDQUE5QjtBQXFCZTNDLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vdmllcy9bbW92aWVJZF0uYTZhOTg2MjFhYjU5YmI0Y2VmYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrUHJvdmlkZXIsIEVycm9yTWVzc2FnZSwgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdlbnJlc0FycmF5LCB2YWxpZGF0aW9uU2NoZW1hLCBNT1ZJRV9GSUVMRFMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW92aWVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgVXBkYXRlTW92aWVEaWFsb2cgPSAoeyBtb3ZpZSwgb3Blbiwgb25VcGRhdGUsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbZ2VucmVzLCBzZXRHZW5yZXNdID0gdXNlU3RhdGUobW92aWU/LmdlbnJlcyB8fCBbXSk7XG4gIGNvbnN0IG9uQ2xvc2VFZGl0RGlhbG9nID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUdlbnJlcyA9ICh2YWx1ZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIHNldEdlbnJlcyh2YWx1ZSk7XG4gICAgc2V0RmllbGRWYWx1ZSgnZ2VucmVzJywgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgaWQ6IG1vdmllPy5pZCxcbiAgICAgIHRpdGxlOiBtb3ZpZT8udGl0bGUsXG4gICAgICByZWxlYXNlX2RhdGU6IG1vdmllPy5yZWxlYXNlX2RhdGUsXG4gICAgICBwb3N0ZXJfcGF0aDogbW92aWU/LnBvc3Rlcl9wYXRoLFxuICAgICAgb3ZlcnZpZXc6IG1vdmllPy5vdmVydmlldyxcbiAgICAgIHJ1bnRpbWU6IG1vdmllPy5ydW50aW1lLFxuICAgICAgZ2VucmVzLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICB9LFxuICAgIG9uU3VibWl0OiAoZmllbGRzKSA9PiB7XG4gICAgICBvblVwZGF0ZShmaWVsZHMpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1Byb3ZpZGVyIHZhbHVlPXtmb3JtaWt9PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBkaXNhYmxlRXNjYXBlS2V5RG93blxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlRWRpdERpYWxvZ31cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ011aVBhcGVyLXJvb3QgTXVpTWVudS1wYXBlciBNdWlQb3BvdmVyLXBhcGVyJ119XG4gICAgICA+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2VFZGl0RGlhbG9nfT5cbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlPkVkaXQgTW92aWU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17c3R5bGVzWydkaWFsb2ctZm9ybS1jb250ZW50J119PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5Nb3ZpZSBJRDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgIHttb3ZpZT8uaWR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119PlRpdGxlPC9wPlxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9e01PVklFX0ZJRUxEUy5USVRMRX0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfSAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtNT1ZJRV9GSUVMRFMuVElUTEV9IGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImVycm9yXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+UmVsZWFzZSBEYXRlPC9wPlxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9e01PVklFX0ZJRUxEUy5SRUxFQVNFX0RBVEV9IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQnXX0gLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT17TU9WSUVfRklFTERTLlJFTEVBU0VfREFURX0gY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiZXJyb3JcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5Nb3ZpZSBVUkw8L3A+XG4gICAgICAgICAgICA8RmllbGQgbmFtZT17TU9WSUVfRklFTERTLlBPU1RFUl9QQVRIfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119IC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9e01PVklFX0ZJRUxEUy5QT1NURVJfUEFUSH0gY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiZXJyb3JcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtZmllbGQtbmFtZSddfT5HZW5yZTwvcD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZCddfVxuICAgICAgICAgICAgICB2YWx1ZT17Z2VucmVzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZUdlbnJlcyhldmVudC50YXJnZXQudmFsdWUsIGZvcm1pay5zZXRGaWVsZFZhbHVlKX1cbiAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dlbnJlc0FycmF5Lm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtnZW5yZX0gdmFsdWU9e2dlbnJlfT5cbiAgICAgICAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtNT1ZJRV9GSUVMRFMuR0VOUkVTfSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJlcnJvclwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1maWVsZC1uYW1lJ119Pk92ZXJ2aWV3PC9wPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJlbXB0eSB0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtNT1ZJRV9GSUVMRFMuT1ZFUlZJRVd9IGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImVycm9yXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkLW5hbWUnXX0+UnVudGltZTwvcD5cbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPXtNT1ZJRV9GSUVMRFMuUlVOVElNRX0gdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT17c3R5bGVzWydlZGl0LWZpZWxkJ119IC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9e01PVklFX0ZJRUxEUy5SVU5USU1FfSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJlcnJvclwiIC8+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlRWRpdERpYWxvZ30gY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9Gb3JtaWtQcm92aWRlcj5cbiAgKTtcbn07XG5cblVwZGF0ZU1vdmllRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBvc3Rlcl9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG92ZXJ2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1ZGdldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZlbnVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJ1bnRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uVXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlTW92aWVEaWFsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9