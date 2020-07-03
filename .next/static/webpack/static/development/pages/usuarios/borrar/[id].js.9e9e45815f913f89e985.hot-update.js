webpackHotUpdate("static/development/pages/usuarios/borrar/[id].js",{

/***/ "./pages/usuarios/borrar/[id].jsx":
/*!****************************************!*\
  !*** ./pages/usuarios/borrar/[id].jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_InputForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/InputForm */ \"./pages/components/InputForm.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/gael/development/web/backend/nextJS/api-tienda-web/pages/usuarios/borrar/[id].jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])(),\n      id = _useRouter.query.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    nombre: '',\n    apPat: '',\n    apMat: ''\n  }),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      statusDelete = _useState2[0],\n      setDelete = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var obtenerUsuario = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var res, data, usuario;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"/api/usuario/\".concat(id));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              data = _context.sent;\n              usuario = data.data;\n              console.log(data);\n              setValue({\n                nombre: usuario.nombre,\n                apPat: usuario.apPaterno,\n                apMat: usuario.apMaterno\n              });\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function obtenerUsuario() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var sendEditUsuario = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      var nombre, apMat, apPat, res, valor;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log(id);\n              nombre = value.nombre, apMat = value.apMat, apPat = value.apPat;\n              _context2.next = 4;\n              return fetch(\"/api/usuario/delete/\".concat(id), {\n                method: 'POST',\n                body: JSON.stringify({\n                  id: id\n                })\n              });\n\n            case 4:\n              res = _context2.sent;\n              _context2.next = 7;\n              return res.json();\n\n            case 7:\n              valor = _context2.sent;\n              console.log(valor);\n              alert(valor.message);\n\n              if (!valor.error) {\n                router.back();\n              }\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function sendEditUsuario() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    obtenerUsuario();\n  }, []);\n  return __jsx(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"Borrar Usuario : # \", __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 32\n    }\n  }, id)), __jsx(_components_InputForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    disabled: true,\n    value: value.nombre,\n    name: \"Nombre\",\n    event: function event(e) {\n      return setValue(_objectSpread(_objectSpread({}, value), {}, {\n        nombre: e\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), __jsx(_components_InputForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    disabled: true,\n    value: value.apPat,\n    name: \"ap paterno\",\n    event: function event(e) {\n      return setValue(_objectSpread(_objectSpread({}, value), {}, {\n        apPat: e\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(_components_InputForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    disabled: true,\n    value: value.apMat,\n    name: \"ap Materno\",\n    event: function event(e) {\n      return setValue(_objectSpread(_objectSpread({}, value), {}, {\n        apMat: e\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"checked\",\n    checked: !statusDelete,\n    onChange: function onChange(e) {\n      return setDelete(!statusDelete);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    disabled: statusDelete,\n    onClick: sendEditUsuario,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, \"Borrar usuario.\"));\n}, \"gkmvrHcJ6fex1tmHTipeLgsy0iY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"], next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c3Vhcmlvcy9ib3JyYXIvLmpzeD9hODA1Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsIm5vbWJyZSIsImFwUGF0IiwiYXBNYXQiLCJ2YWx1ZSIsInNldFZhbHVlIiwic3RhdHVzRGVsZXRlIiwic2V0RGVsZXRlIiwicm91dGVyIiwib2J0ZW5lclVzdWFyaW8iLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwidXN1YXJpbyIsImNvbnNvbGUiLCJsb2ciLCJhcFBhdGVybm8iLCJhcE1hdGVybm8iLCJzZW5kRWRpdFVzdWFyaW8iLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbG9yIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJiYWNrIiwidXNlRWZmZWN0IiwidGV4dEFsaWduIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLDhFQUFNO0FBQUE7O0FBQUEsbUJBQ01BLDZEQUFTLEVBRGY7QUFBQSxNQUNGQyxFQURFLGNBQ1RDLEtBRFMsQ0FDRkQsRUFERTs7QUFBQSxrQkFFUUUsc0RBQVEsQ0FBQztBQUM5QkMsVUFBTSxFQUFDLEVBRHVCO0FBRTlCQyxTQUFLLEVBQUMsRUFGd0I7QUFHOUJDLFNBQUssRUFBQztBQUh3QixHQUFELENBRmhCO0FBQUEsTUFFVkMsS0FGVTtBQUFBLE1BRUpDLFFBRkk7O0FBQUEsbUJBT2dCTCxzREFBUSxDQUFDLElBQUQsQ0FQeEI7QUFBQSxNQU9WTSxZQVBVO0FBQUEsTUFPR0MsU0FQSDs7QUFRakIsTUFBTUMsTUFBTSxHQUFHWCw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNWSxjQUFjO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDREMsS0FBSyx3QkFBaUJaLEVBQWpCLEVBREo7O0FBQUE7QUFDYmEsaUJBRGE7QUFB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Q0FBS0QsS0FBTDtBQUFXRCxhQUFLLEVBQUM0QjtBQUFqQixTQUFWO0FBQUEsS0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkksRUFxQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSSxFQXNCSjtBQUNJLFFBQUksRUFBQyxTQURUO0FBRUksV0FBTyxFQUFFLENBQUN6QixZQUZkO0FBR0ksWUFBUSxFQUFFLGtCQUFBeUIsQ0FBQztBQUFBLGFBQUV4QixTQUFTLENBQUMsQ0FBQ0QsWUFBRixDQUFYO0FBQUEsS0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJJLEVBMkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkksRUE0Qko7QUFBUSxZQUFRLEVBQUVBLFlBQWxCO0FBQWdDLFdBQU8sRUFBRWEsZUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE1QkksQ0FBUjtBQStCSCxDQTVFRDtBQUFBLFVBQzJCdEIscURBRDNCLEVBUW1CQSxxREFSbkI7QUFBQSIsImZpbGUiOiIuL3BhZ2VzL3VzdWFyaW9zL2JvcnJhci9baWRdLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW5wdXRGb3JtXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnk6e2lkfSB9ID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3ZhbHVlLHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbm9tYnJlOicnLFxuICAgICAgICBhcFBhdDonJyxcbiAgICAgICAgYXBNYXQ6JydcbiAgICB9KTtcbiAgICBjb25zdCBbc3RhdHVzRGVsZXRlLHNldERlbGV0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IG9idGVuZXJVc3VhcmlvID0gYXN5bmMgKCkgPT57XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL3VzdWFyaW8vJHtpZH1gKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHVzdWFyaW8gID0gZGF0YS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0VmFsdWUoe1xuICAgICAgICAgICAgbm9tYnJlIDogdXN1YXJpby5ub21icmUsXG4gICAgICAgICAgICBhcFBhdCAgOiB1c3VhcmlvLmFwUGF0ZXJubyxcbiAgICAgICAgICAgIGFwTWF0ICA6IHVzdWFyaW8uYXBNYXRlcm5vXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VuZEVkaXRVc3VhcmlvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgIGNvbnN0IHsgbm9tYnJlLGFwTWF0LGFwUGF0IH0gPSB2YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL3VzdWFyaW8vZGVsZXRlLyR7aWR9YCx7XG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLGJvZHk6SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdmFsb3IgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWxvcik7ICAgXG4gICAgICAgIGFsZXJ0KHZhbG9yLm1lc3NhZ2UpO1xuICAgICAgICBpZighdmFsb3IuZXJyb3IpeyAgICBcbiAgICAgICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBvYnRlbmVyVXN1YXJpbygpXG4gICAgfSxbXSk7XG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgIDxoMz5Cb3JyYXIgVXN1YXJpbyA6ICMgPGI+e2lkfTwvYj48L2gzPlxuXG4gICAgICAgIDxJbnB1dEZvcm1cbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUubm9tYnJlfVxuICAgICAgICAgICAgbmFtZT0nTm9tYnJlJ1xuICAgICAgICAgICAgZXZlbnQ9e2U9PnNldFZhbHVlKHsuLi52YWx1ZSxub21icmU6ZX0pfVxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRGb3JtICAgIFxuICAgICAgICAgICAgZGlzYWJsZWQgXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUuYXBQYXR9XG4gICAgICAgICAgICBuYW1lPSdhcCBwYXRlcm5vJ1xuICAgICAgICAgICAgZXZlbnQ9e2U9PnNldFZhbHVlKHsuLi52YWx1ZSxhcFBhdDplfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dEZvcm0gXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmFwTWF0fVxuICAgICAgICAgICAgbmFtZT0nYXAgTWF0ZXJubydcbiAgICAgICAgICAgIGV2ZW50PXtlPT5zZXRWYWx1ZSh7Li4udmFsdWUsYXBNYXQ6ZX0pfVxuICAgICAgICAvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSdjaGVja2VkJ1xuICAgICAgICAgICAgY2hlY2tlZD17IXN0YXR1c0RlbGV0ZX0gXG4gICAgICAgICAgICBvbkNoYW5nZT17ZT0+c2V0RGVsZXRlKCFzdGF0dXNEZWxldGUpfSBcbiAgICAgICAgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3N0YXR1c0RlbGV0ZX0gb25DbGljaz17c2VuZEVkaXRVc3VhcmlvfT5Cb3JyYXIgdXN1YXJpby48L2J1dHRvbj5cbiAgICAgICAgXG4gICAgPC9kaXY+KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/usuarios/borrar/[id].jsx\n");

/***/ })

})