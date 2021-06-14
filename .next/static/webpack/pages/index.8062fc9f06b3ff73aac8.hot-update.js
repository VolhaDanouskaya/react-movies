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
    className: "subheader"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJhZGRNb3ZpZSIsInVzZVN0YXRlIiwib3BlbkFkZCIsInNldE9wZW5BZGQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsIm9uQWRkTW92aWVDbGljayIsIm9uQWRkTW92aWUiLCJtb3ZpZSIsInN0eWxlcyIsImhlYWRlciIsInN1YmhlYWRlciIsImxvZ29Gb290ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUE7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUUvQixNQUFNQyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QkgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCUixZQUFRLENBQUNRLEtBQUQsQ0FBUjtBQUNBTCxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSwyREFBQywyREFBRDtBQUFXLGFBQVMsRUFBRU0sMkRBQU0sQ0FBQ0MsTUFBN0I7QUFBcUMsU0FBSztBQUExQyxrQkFDRSwyREFBQyx1REFBRCxxQkFDRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQztBQUFaLGtCQUNFO0FBQUssYUFBUyxFQUFFRCwyREFBTSxDQUFDRTtBQUF2QixrQkFDRSwyREFBQyxpREFBRDtBQUFPLE9BQUcsRUFBQyx5QkFBWDtBQUFxQyxhQUFTLEVBQUVGLDJEQUFNLENBQUNHLFVBQXZEO0FBQW1FLFNBQUssRUFBQyxLQUF6RTtBQUErRSxVQUFNLEVBQUM7QUFBdEYsSUFERixlQUVFLDJEQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFFO0FBQUEsYUFBTVIsT0FBTyxDQUFDUyxJQUFSLENBQWEsR0FBYixDQUFOO0FBQUE7QUFBckIsa0JBQ0UsMkRBQUMsZ0VBQUQ7QUFBWSxZQUFRLEVBQUM7QUFBckIsSUFERixDQUZGLENBREYsZUFPRSwyREFBQyxzREFBRCxPQVBGLENBREYsZUFVRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQztBQUFaLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsMkRBQUMsaURBQUQ7QUFBTyxPQUFHLEVBQUMseUJBQVg7QUFBcUMsYUFBUyxFQUFFSiwyREFBTSxDQUFDRyxVQUF2RDtBQUFtRSxTQUFLLEVBQUMsS0FBekU7QUFBK0UsVUFBTSxFQUFDO0FBQXRGLElBREYsZUFFRSwyREFBQyxnRUFBRDtBQUFRLE1BQUUsRUFBQyxrQkFBWDtBQUE4QixXQUFPLEVBQUMsV0FBdEM7QUFBa0QsUUFBSSxFQUFDLE9BQXZEO0FBQStELFdBQU8sRUFBRU47QUFBeEUsbUJBRkYsZUFLRSwyREFBQyx1REFBRDtBQUFnQixRQUFJLEVBQUVKLE9BQXRCO0FBQStCLFNBQUssRUFBRUssVUFBdEM7QUFBa0QsV0FBTyxFQUFFO0FBQUEsYUFBTUosVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQTtBQUEzRCxJQUxGLENBREYsZUFRRSwyREFBQyw2REFBRCxPQVJGLENBVkYsQ0FERixDQURGO0FBeUJELENBdENEOztHQUFNSixNO1VBRVlNLDJEOzs7S0FGWk4sTTtBQXdDTkEsTUFBTSxDQUFDZSxTQUFQLEdBQW1CO0FBQ2pCZCxVQUFRLEVBQUVlLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEUixDQUFuQjtBQUllbEIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODA2MmZjOWYwNmIzZmY3M2FhYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBBZGRNb3ZpZURpYWxvZyBmcm9tICcuL0FkZE1vdmllRGlhbG9nJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IE1vdmllRGV0YWlscyBmcm9tICcuL21vdmllRGV0YWlscyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vc2VhcmNoQmFyL1NlYXJjaEJhcic7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGFkZE1vdmllIH0pID0+IHtcbiAgY29uc3QgW29wZW5BZGQsIHNldE9wZW5BZGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGNvbnN0IG9uQWRkTW92aWVDbGljayA9ICgpID0+IHtcbiAgICBzZXRPcGVuQWRkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uQWRkTW92aWUgPSAobW92aWUpID0+IHtcbiAgICBhZGRNb3ZpZShtb3ZpZSk7XG4gICAgc2V0T3BlbkFkZChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0gZml4ZWQ+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZXMvOm1vdmllSWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YmhlYWRlcn0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3B1YmxpYy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvRm9vdGVyfSB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnLycpfT5cbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gZm9udFNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE1vdmllRGV0YWlscyAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9wdWJsaWMvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0Zvb3Rlcn0gd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCI1MFwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGlkPVwiYnV0dG9uLWFkZC1tb3ZpZVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtvbkFkZE1vdmllQ2xpY2t9PlxuICAgICAgICAgICAgICArIEFkZCBNb3ZpZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QWRkTW92aWVEaWFsb2cgb3Blbj17b3BlbkFkZH0gb25BZGQ9e29uQWRkTW92aWV9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5BZGQoZmFsc2UpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgYWRkTW92aWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9