webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/body/GenresFilter.js":
/*!*********************************************!*\
  !*** ./src/components/body/GenresFilter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body.module.scss */ "./src/components/body/body.module.scss");
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_body_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _s = $RefreshSig$();




var genres = ['All', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

var GenresFilter = function GenresFilter(_ref) {
  _s();

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
      className: "styles.item ".concat(genre === selected ? 'active' : '')
    }, genre);
  }));
};

_s(GenresFilter, "ezb6xqwGYkkmMa2hyBKiN6EqjN4=");

_c = GenresFilter;
GenresFilter.propTypes = {
  onFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  selectedFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (GenresFilter);

var _c;

$RefreshReg$(_c, "GenresFilter");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9keS9HZW5yZXNGaWx0ZXIuanMiXSwibmFtZXMiOlsiZ2VucmVzIiwiR2VucmVzRmlsdGVyIiwib25GaWx0ZXJDbGljayIsInNlbGVjdGVkRmlsdGVyIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic3R5bGVzIiwiZ2VucmVzRmlsdGVyIiwibWFwIiwiZ2VucmUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxLQUFELEVBQVEsV0FBUixFQUFxQixRQUFyQixFQUErQixPQUEvQixFQUF3QyxTQUF4QyxDQUFmOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXVDO0FBQUE7O0FBQUEsTUFBcENDLGFBQW9DLFFBQXBDQSxhQUFvQztBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7O0FBQUEsa0JBQzFCQyxzREFBUSxDQUFDRCxjQUFELENBRGtCO0FBQUE7QUFBQSxNQUNuREUsUUFEbUQ7QUFBQSxNQUN6Q0MsV0FEeUM7O0FBRzFELHNCQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDQztBQUF2QixLQUNHUixNQUFNLENBQUNTLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsd0JBQ1Y7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLGFBQU8sRUFBRSxtQkFBTTtBQUNiUixxQkFBYSxDQUFDUSxLQUFELENBQWI7QUFDQUosbUJBQVcsQ0FBQ0ksS0FBRCxDQUFYO0FBQ0QsT0FOSDtBQU9FLGVBQVMsd0JBQWlCQSxLQUFLLEtBQUtMLFFBQVYsR0FBcUIsUUFBckIsR0FBZ0MsRUFBakQ7QUFQWCxPQVNHSyxLQVRILENBRFU7QUFBQSxHQUFYLENBREgsQ0FERjtBQWlCRCxDQXBCRDs7R0FBTVQsWTs7S0FBQUEsWTtBQXNCTkEsWUFBWSxDQUFDVSxTQUFiLEdBQXlCO0FBQ3ZCVCxlQUFhLEVBQUVVLGlEQUFTLENBQUNDLElBQVYsQ0FBZUMsVUFEUDtBQUV2QlgsZ0JBQWMsRUFBRVMsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFGVixDQUF6QjtBQUtlYiwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNWFjMmQxNDNkZjU1NDdhNGNjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYm9keS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IGdlbnJlcyA9IFsnQWxsJywgJ0FkdmVudHVyZScsICdDb21lZHknLCAnRHJhbWEnLCAnRmFudGFzeSddO1xuXG5jb25zdCBHZW5yZXNGaWx0ZXIgPSAoeyBvbkZpbHRlckNsaWNrLCBzZWxlY3RlZEZpbHRlciB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoc2VsZWN0ZWRGaWx0ZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZXNGaWx0ZXJ9PlxuICAgICAge2dlbnJlcy5tYXAoKGdlbnJlKSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2dlbnJlfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uRmlsdGVyQ2xpY2soZ2VucmUpO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoZ2VucmUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtgc3R5bGVzLml0ZW0gJHtnZW5yZSA9PT0gc2VsZWN0ZWQgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7Z2VucmV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5HZW5yZXNGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBvbkZpbHRlckNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZEZpbHRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2VucmVzRmlsdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==