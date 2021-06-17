(function() {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./src/components/error/PageNotFound.js":
/*!**********************************************!*\
  !*** ./src/components/error/PageNotFound.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.module.scss */ "./src/components/error/error.module.scss");
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_error_module_scss__WEBPACK_IMPORTED_MODULE_4__);






var PageNotFound = function PageNotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
    className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_4___default().errorPage),
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logo.png",
    className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_4___default().errorContent)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_4___default().error)
  }, "Page Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/",
    className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_4___default().homeLink),
    title: "linkToHome"
  }, "Go Back To Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_3__.default, null));
};

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

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

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_error_PageNotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/error/PageNotFound */ "./src/components/error/PageNotFound.js");

/* harmony default export */ __webpack_exports__["default"] = (_components_error_PageNotFound__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/components/error/error.module.scss":
/*!************************************************!*\
  !*** ./src/components/error/error.module.scss ***!
  \************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"errorPage": "error_errorPage__3AWyo",
	"logo": "error_logo__mIz0m",
	"errorContent": "error_errorContent__1v6Fk",
	"error": "error_error__2upOj",
	"homeLink": "error_homeLink__3oWG3"
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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("regenerator-runtime");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_node_modules_babel_runtime_helpers_classCallCheck_js-node_modules_n-b54ff8","vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-1530b4","vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./src/pages/404.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvY29tcG9uZW50cy9lcnJvci9QYWdlTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvLi9zcmMvcGFnZXMvNDA0LmpzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9jb21wb25lbnRzL2Vycm9yL2Vycm9yLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LW1vdmllcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3JlYWN0LW1vdmllcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9yZWFjdC1tb3ZpZXMvZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtbW92aWVzL2lnbm9yZWR8QzpcXHByb2plY3RzXFxyZWFjdC10cmFpbmluZ3NcXHJlYWN0LW1vdmllc1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlBhZ2VOb3RGb3VuZCIsInN0eWxlcyIsImVycm9yQ29udGVudCIsImVycm9yIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxzQkFDbkIsdUlBQ0UsMkRBQUMsd0RBQUQ7QUFBVyxhQUFTLEVBQUVDLHFFQUF0QjtBQUF3QyxTQUFLO0FBQTdDLGtCQUNFO0FBQUssT0FBRyxFQUFDLGtCQUFUO0FBQTRCLGFBQVMsRUFBRUEsZ0VBQXZDO0FBQW9ELE9BQUcsRUFBQztBQUF4RCxJQURGLGVBRUU7QUFBSyxhQUFTLEVBQUVBLHdFQUFtQkM7QUFBbkMsa0JBQ0U7QUFBRyxhQUFTLEVBQUVELGlFQUFZRTtBQUExQixzQkFERixlQUVFLDJEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxhQUFTLEVBQUVGLG9FQUExQjtBQUEyQyxTQUFLLEVBQUM7QUFBakQsdUJBRkYsQ0FGRixDQURGLGVBVUUsMkRBQUMsbURBQUQsT0FWRixDQURtQjtBQUFBLENBQXJCOztBQWVBLCtEQUFlRCxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxzQkFDYiwyREFBQyx3REFBRDtBQUFXLGFBQVMsRUFBRUgsbUVBQXRCO0FBQXFDLFNBQUs7QUFBMUMsa0JBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsYUFBUyxFQUFFQSwyRUFBdkM7QUFBOEQsT0FBRyxFQUFDO0FBQWxFLElBREYsQ0FEYTtBQUFBLENBQWY7O0FBTUEsK0RBQWVHLE1BQWYsRTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUEsK0RBQWVKLG1FQUFmLEU7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLCtDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy80MDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9Gb290ZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXJyb3IubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBQYWdlTm90Rm91bmQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5lcnJvclBhZ2V9IGZpeGVkPlxuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yQ29udGVudH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5QYWdlIE5vdCBGb3VuZDwvcD5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5ob21lTGlua30gdGl0bGU9XCJsaW5rVG9Ib21lXCI+XG4gICAgICAgICAgR28gQmFjayBUbyBIb21lXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxGb290ZXIgLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTm90Rm91bmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfSBmaXhlZD5cbiAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlc1snbG9nby1mb290ZXInXX0gYWx0PVwibG9nb1wiIC8+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL2Vycm9yL1BhZ2VOb3RGb3VuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVycm9yUGFnZVwiOiBcImVycm9yX2Vycm9yUGFnZV9fM0FXeW9cIixcblx0XCJsb2dvXCI6IFwiZXJyb3JfbG9nb19fbUl6MG1cIixcblx0XCJlcnJvckNvbnRlbnRcIjogXCJlcnJvcl9lcnJvckNvbnRlbnRfXzF2NkZrXCIsXG5cdFwiZXJyb3JcIjogXCJlcnJvcl9lcnJvcl9fMnVwT2pcIixcblx0XCJob21lTGlua1wiOiBcImVycm9yX2hvbWVMaW5rX18zb1dHM1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX2Zvb3Rlcl9fMmpfRnJcIixcblx0XCJsb2dvLWZvb3RlclwiOiBcImZvb3Rlcl9sb2dvLWZvb3Rlcl9fMWpBZjVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=