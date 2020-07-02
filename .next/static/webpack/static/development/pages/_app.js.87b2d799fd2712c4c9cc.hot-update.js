webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/usuario.js":
/*!***********************************!*\
  !*** ./store/reducers/usuario.js ***!
  \***********************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  id: 0,\n  nombre: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var actions = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (actions.type) {\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"ADD_USER\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        usuario: {\n          id: actions.id,\n          nombre: actions.nombre\n        }\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"REMOVE_USER\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        usuario: {\n          id: initialState.id,\n          nombre: initialState.nombre\n        }\n      });\n\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c3VhcmlvLmpzP2U4OTIiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaWQiLCJub21icmUiLCJzdGF0ZSIsImFjdGlvbnMiLCJ0eXBlIiwidHlwZXMiLCJ1c3VhcmlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLElBQUUsRUFBQyxDQURxQjtBQUV4QkMsUUFBTSxFQUFDO0FBRmlCLENBQXJCO0FBS08sMkVBQStCO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF2QkgsWUFBdUI7QUFBQSxNQUFWSSxPQUFVOztBQUN6QyxVQUFRQSxPQUFPLENBQUNDLElBQWhCO0FBQ0ksU0FBS0MsK0NBQUw7QUFDSSw2Q0FDT0gsS0FEUDtBQUVJSSxlQUFPLEVBQUM7QUFDSk4sWUFBRSxFQUFDRyxPQUFPLENBQUNILEVBRFA7QUFFSkMsZ0JBQU0sRUFBQ0UsT0FBTyxDQUFDRjtBQUZYO0FBRlo7O0FBT0osU0FBS0ksa0RBQUw7QUFDSSw2Q0FDT0gsS0FEUDtBQUVJSSxlQUFPLEVBQUM7QUFDSk4sWUFBRSxFQUFDRCxZQUFZLENBQUNDLEVBRFo7QUFFSkMsZ0JBQU0sRUFBQ0YsWUFBWSxDQUFDRTtBQUZoQjtBQUZaOztBQU9KO0FBQ0ksYUFBT0MsS0FBUDtBQWxCUjtBQXFCSCxDQXRCRCIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL3VzdWFyaW8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaWQ6MCxcbiAgICBub21icmU6Jydcbn1cblxuZXhwb3J0IGRlZmF1bHQoc3RhdGU9IGluaXRpYWxTdGF0ZSxhY3Rpb25zKT0+e1xuICAgIHN3aXRjaCAoYWN0aW9ucy50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86e1xuICAgICAgICAgICAgICAgICAgICBpZDphY3Rpb25zLmlkLFxuICAgICAgICAgICAgICAgICAgICBub21icmU6YWN0aW9ucy5ub21icmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICBjYXNlIHR5cGVzLlJFTU9WRV9VU0VSOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86eyBcbiAgICAgICAgICAgICAgICAgICAgaWQ6aW5pdGlhbFN0YXRlLmlkLFxuICAgICAgICAgICAgICAgICAgICBub21icmU6aW5pdGlhbFN0YXRlLm5vbWJyZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/usuario.js\n");

/***/ })

})