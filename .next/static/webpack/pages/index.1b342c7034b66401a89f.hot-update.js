webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _AddMovieDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddMovieDialog */ "./src/components/header/AddMovieDialog.js");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header.module.scss */ "./src/components/header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _movieDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movieDetails */ "./src/components/header/movieDetails/index.js");
/* harmony import */ var _searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./searchBar/SearchBar */ "./src/components/header/searchBar/SearchBar.js");


var _s = $RefreshSig$();














var Header = function Header(_ref) {
  _s();

  var addMovie = _ref.addMovie;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      openAdd = _useState2[0],
      setOpenAdd = _useState2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
    src: "/public/images/logo.png",
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.logoFooter,
    width: "150",
    height: "50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return history.push('/');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "large"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_movieDetails__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.subheader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
    src: "/public/images/logo.png",
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.logoFooter,
    width: "150",
    height: "50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], null))));
};

_s(Header, "vqu2xpZWCR/cLptal+kLrAD0YbU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"]];
});

_c = Header;
Header.propTypes = {
  addMovie: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJhZGRNb3ZpZSIsInVzZVN0YXRlIiwib3BlbkFkZCIsInNldE9wZW5BZGQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsIm9uQWRkTW92aWVDbGljayIsIm9uQWRkTW92aWUiLCJtb3ZpZSIsInN0eWxlcyIsImhlYWRlciIsInN1YmhlYWRlciIsImxvZ29Gb290ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUE7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUUvQixNQUFNQyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QkgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCUixZQUFRLENBQUNRLEtBQUQsQ0FBUjtBQUNBTCxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSwyREFBQywyREFBRDtBQUFXLGFBQVMsRUFBRU0sMkRBQU0sQ0FBQ0MsTUFBN0I7QUFBcUMsU0FBSztBQUExQyxrQkFDRSwyREFBQyx1REFBRCxxQkFDRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQztBQUFaLGtCQUNFO0FBQUssYUFBUyxFQUFFRCwyREFBTSxDQUFDRTtBQUF2QixrQkFDRSwyREFBQyxpREFBRDtBQUFPLE9BQUcsRUFBQyx5QkFBWDtBQUFxQyxhQUFTLEVBQUVGLDJEQUFNLENBQUNHLFVBQXZEO0FBQW1FLFNBQUssRUFBQyxLQUF6RTtBQUErRSxVQUFNLEVBQUM7QUFBdEYsSUFERixlQUVFLDJEQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFFO0FBQUEsYUFBTVIsT0FBTyxDQUFDUyxJQUFSLENBQWEsR0FBYixDQUFOO0FBQUE7QUFBckIsa0JBQ0UsMkRBQUMsZ0VBQUQ7QUFBWSxZQUFRLEVBQUM7QUFBckIsSUFERixDQUZGLENBREYsZUFPRSwyREFBQyxzREFBRCxPQVBGLENBREYsZUFVRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQztBQUFaLGtCQUNFO0FBQUssYUFBUyxFQUFFSiwyREFBTSxDQUFDRTtBQUF2QixrQkFDRSwyREFBQyxpREFBRDtBQUFPLE9BQUcsRUFBQyx5QkFBWDtBQUFxQyxhQUFTLEVBQUVGLDJEQUFNLENBQUNHLFVBQXZEO0FBQW1FLFNBQUssRUFBQyxLQUF6RTtBQUErRSxVQUFNLEVBQUM7QUFBdEYsSUFERixlQUVFLDJEQUFDLGdFQUFEO0FBQVEsTUFBRSxFQUFDLGtCQUFYO0FBQThCLFdBQU8sRUFBQyxXQUF0QztBQUFrRCxRQUFJLEVBQUMsT0FBdkQ7QUFBK0QsV0FBTyxFQUFFTjtBQUF4RSxtQkFGRixlQUtFLDJEQUFDLHVEQUFEO0FBQWdCLFFBQUksRUFBRUosT0FBdEI7QUFBK0IsU0FBSyxFQUFFSyxVQUF0QztBQUFrRCxXQUFPLEVBQUU7QUFBQSxhQUFNSixVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBO0FBQTNELElBTEYsQ0FERixlQVFFLDJEQUFDLDZEQUFELE9BUkYsQ0FWRixDQURGLENBREY7QUF5QkQsQ0F0Q0Q7O0dBQU1KLE07VUFFWU0sMkQ7OztLQUZaTixNO0FBd0NOQSxNQUFNLENBQUNlLFNBQVAsR0FBbUI7QUFDakJkLFVBQVEsRUFBRWUsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURSLENBQW5CO0FBSWVsQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYjM0MmM3MDM0YjY2NDAxYTg5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEFkZE1vdmllRGlhbG9nIGZyb20gJy4vQWRkTW92aWVEaWFsb2cnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTW92aWVEZXRhaWxzIGZyb20gJy4vbW92aWVEZXRhaWxzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2hCYXIvU2VhcmNoQmFyJztcblxuY29uc3QgSGVhZGVyID0gKHsgYWRkTW92aWUgfSkgPT4ge1xuICBjb25zdCBbb3BlbkFkZCwgc2V0T3BlbkFkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3Qgb25BZGRNb3ZpZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW5BZGQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25BZGRNb3ZpZSA9IChtb3ZpZSkgPT4ge1xuICAgIGFkZE1vdmllKG1vdmllKTtcbiAgICBzZXRPcGVuQWRkKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfSBmaXhlZD5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllcy86bW92aWVJZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGVyfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcHVibGljL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ29Gb290ZXJ9IHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvJyl9PlxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TW92aWVEZXRhaWxzIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGVyfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcHVibGljL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ29Gb290ZXJ9IHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImJ1dHRvbi1hZGQtbW92aWVcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCIgb25DbGljaz17b25BZGRNb3ZpZUNsaWNrfT5cbiAgICAgICAgICAgICAgKyBBZGQgTW92aWVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEFkZE1vdmllRGlhbG9nIG9wZW49e29wZW5BZGR9IG9uQWRkPXtvbkFkZE1vdmllfSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuQWRkKGZhbHNlKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGFkZE1vdmllOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==