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
    className: "subheader"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJhZGRNb3ZpZSIsInVzZVN0YXRlIiwib3BlbkFkZCIsInNldE9wZW5BZGQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsIm9uQWRkTW92aWVDbGljayIsIm9uQWRkTW92aWUiLCJtb3ZpZSIsInN0eWxlcyIsImhlYWRlciIsImxvZ29Gb290ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUE7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUUvQixNQUFNQyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QkgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCUixZQUFRLENBQUNRLEtBQUQsQ0FBUjtBQUNBTCxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSwyREFBQywyREFBRDtBQUFXLGFBQVMsRUFBRU0sMkRBQU0sQ0FBQ0MsTUFBN0I7QUFBcUMsU0FBSztBQUExQyxrQkFDRSwyREFBQyx1REFBRCxxQkFDRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQztBQUFaLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsMkRBQUMsaURBQUQ7QUFBTyxPQUFHLEVBQUMseUJBQVg7QUFBcUMsYUFBUyxFQUFFRCwyREFBTSxDQUFDRSxVQUF2RDtBQUFtRSxTQUFLLEVBQUMsS0FBekU7QUFBK0UsVUFBTSxFQUFDO0FBQXRGLElBREYsZUFFRSwyREFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBRTtBQUFBLGFBQU1QLE9BQU8sQ0FBQ1EsSUFBUixDQUFhLEdBQWIsQ0FBTjtBQUFBO0FBQXJCLGtCQUNFLDJEQUFDLGdFQUFEO0FBQVksWUFBUSxFQUFDO0FBQXJCLElBREYsQ0FGRixDQURGLGVBT0UsMkRBQUMsc0RBQUQsT0FQRixDQURGLGVBVUUsMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUM7QUFBWixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLDJEQUFDLGlEQUFEO0FBQU8sT0FBRyxFQUFDLHlCQUFYO0FBQXFDLGFBQVMsRUFBRUgsMkRBQU0sQ0FBQ0UsVUFBdkQ7QUFBbUUsU0FBSyxFQUFDLEtBQXpFO0FBQStFLFVBQU0sRUFBQztBQUF0RixJQURGLGVBRUUsMkRBQUMsZ0VBQUQ7QUFBUSxNQUFFLEVBQUMsa0JBQVg7QUFBOEIsV0FBTyxFQUFDLFdBQXRDO0FBQWtELFFBQUksRUFBQyxPQUF2RDtBQUErRCxXQUFPLEVBQUVMO0FBQXhFLG1CQUZGLGVBS0UsMkRBQUMsdURBQUQ7QUFBZ0IsUUFBSSxFQUFFSixPQUF0QjtBQUErQixTQUFLLEVBQUVLLFVBQXRDO0FBQWtELFdBQU8sRUFBRTtBQUFBLGFBQU1KLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUE7QUFBM0QsSUFMRixDQURGLGVBUUUsMkRBQUMsNkRBQUQsT0FSRixDQVZGLENBREYsQ0FERjtBQXlCRCxDQXRDRDs7R0FBTUosTTtVQUVZTSwyRDs7O0tBRlpOLE07QUF3Q05BLE1BQU0sQ0FBQ2MsU0FBUCxHQUFtQjtBQUNqQmIsVUFBUSxFQUFFYyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBRFIsQ0FBbkI7QUFJZWpCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1NTQ1NzVmOGI5MTViYjhkOWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQWRkTW92aWVEaWFsb2cgZnJvbSAnLi9BZGRNb3ZpZURpYWxvZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBNb3ZpZURldGFpbHMgZnJvbSAnLi9tb3ZpZURldGFpbHMnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL3NlYXJjaEJhci9TZWFyY2hCYXInO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBhZGRNb3ZpZSB9KSA9PiB7XG4gIGNvbnN0IFtvcGVuQWRkLCBzZXRPcGVuQWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBvbkFkZE1vdmllQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0T3BlbkFkZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkFkZE1vdmllID0gKG1vdmllKSA9PiB7XG4gICAgYWRkTW92aWUobW92aWUpO1xuICAgIHNldE9wZW5BZGQoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IGZpeGVkPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbW92aWVzLzptb3ZpZUlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcHVibGljL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ29Gb290ZXJ9IHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvJyl9PlxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TW92aWVEZXRhaWxzIC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3B1YmxpYy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvRm9vdGVyfSB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJidXR0b24tYWRkLW1vdmllXCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJsYXJnZVwiIG9uQ2xpY2s9e29uQWRkTW92aWVDbGlja30+XG4gICAgICAgICAgICAgICsgQWRkIE1vdmllXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxBZGRNb3ZpZURpYWxvZyBvcGVuPXtvcGVuQWRkfSBvbkFkZD17b25BZGRNb3ZpZX0gb25DbG9zZT17KCkgPT4gc2V0T3BlbkFkZChmYWxzZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBhZGRNb3ZpZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=