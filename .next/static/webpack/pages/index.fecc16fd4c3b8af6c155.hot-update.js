webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/body/MoviesSorter.js":
/*!*********************************************!*\
  !*** ./src/components/body/MoviesSorter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sort by "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "sort-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelId: "simple-select",
    id: "simple-select",
    defaultValue: selectedSort,
    onChange: function onChange(event) {
      return onSortChange(event.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "vote_average"
  }, "Rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "release_date"
  }, "Release date"))));
};

_c = MoviesSorter;
MoviesSorter.propTypes = {
  onSortChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  selectedSort: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MoviesSorter);

var _c;

$RefreshReg$(_c, "MoviesSorter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9keS9Nb3ZpZXNTb3J0ZXIuanMiXSwibmFtZXMiOlsiTW92aWVzU29ydGVyIiwib25Tb3J0Q2hhbmdlIiwic2VsZWN0ZWRTb3J0Iiwic3R5bGVzIiwic29ydCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQW9DO0FBQUEsTUFBakNDLFlBQWlDLFFBQWpDQSxZQUFpQztBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQ3ZELE1BQUksQ0FBQ0EsWUFBTCxFQUFtQjtBQUNqQkQsZ0JBQVksQ0FBQyxjQUFELENBQVo7QUFDRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsd0RBQU0sQ0FBQ0M7QUFBdkIsa0JBQ0UsaUZBREYsZUFFRSwyREFBQyxxRUFBRDtBQUFhLGFBQVMsRUFBQztBQUF2QixrQkFDRSwyREFBQyxnRUFBRDtBQUNFLFdBQU8sRUFBQyxlQURWO0FBRUUsTUFBRSxFQUFDLGVBRkw7QUFHRSxnQkFBWSxFQUFFRixZQUhoQjtBQUlFLFlBQVEsRUFBRSxrQkFBQ0csS0FBRDtBQUFBLGFBQVdKLFlBQVksQ0FBQ0ksS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBdkI7QUFBQTtBQUpaLGtCQU1FLDJEQUFDLGtFQUFEO0FBQVUsU0FBSyxFQUFDO0FBQWhCLGNBTkYsZUFPRSwyREFBQyxrRUFBRDtBQUFVLFNBQUssRUFBQztBQUFoQixvQkFQRixDQURGLENBRkYsQ0FERjtBQWdCRCxDQXBCRDs7S0FBTVAsWTtBQXNCTkEsWUFBWSxDQUFDUSxTQUFiLEdBQXlCO0FBQ3ZCUCxjQUFZLEVBQUVRLGlEQUFTLENBQUNDLElBQVYsQ0FBZUMsVUFETjtBQUV2QlQsY0FBWSxFQUFFTyxpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZSLENBQXpCO0FBS2VYLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlY2MxNmZkNGMzYjhhZjZjMTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ib2R5Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgTW92aWVzU29ydGVyID0gKHsgb25Tb3J0Q2hhbmdlLCBzZWxlY3RlZFNvcnQgfSkgPT4ge1xuICBpZiAoIXNlbGVjdGVkU29ydCkge1xuICAgIG9uU29ydENoYW5nZSgncmVsZWFzZV9kYXRlJyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvcnR9PlxuICAgICAgPHA+U29ydCBieSA8L3A+XG4gICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwic29ydC1mb3JtXCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBsYWJlbElkPVwic2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgaWQ9XCJzaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlbGVjdGVkU29ydH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvblNvcnRDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInZvdGVfYXZlcmFnZVwiPlJhdGluZzwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwicmVsZWFzZV9kYXRlXCI+UmVsZWFzZSBkYXRlPC9NZW51SXRlbT5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVzU29ydGVyLnByb3BUeXBlcyA9IHtcbiAgb25Tb3J0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZFNvcnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllc1NvcnRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=