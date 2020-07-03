module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/usuarios/index.jsx":
/*!**********************************!*\
  !*** ./pages/usuarios/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_actions_getUsuarios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/getUsuarios */ \"./store/actions/getUsuarios.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/gael/development/web/backend/nextJS/api-tienda-web/pages/usuarios/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  const {\n    listaUsuarios\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    Object(_store_actions_getUsuarios__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()(dispatch);\n  }, []);\n  console.log(listaUsuarios);\n  return __jsx(\"div\", {\n    style: {\n      height: 300,\n      textAlign: 'center'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: () => router.push('/usuarios/add'),\n    style: {\n      float: 'right'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \"agregar\"), __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"Lista Usuarios:\"), __jsx(\"div\", {\n    style: {\n      border: '1px solid #bdbdbd',\n      height: 300,\n      width: 850,\n      overflow: 'auto'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"table\", {\n    style: {\n      width: '100%'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"thead\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, __jsx(\"tr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, __jsx(\"th\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 25\n    }\n  }, \"ID\"), __jsx(\"th\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 25\n    }\n  }, \"Nombre\"), __jsx(\"th\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 25\n    }\n  }, \"Apeido pat.\"), __jsx(\"th\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  }, \"Apeido mat.\"), __jsx(\"th\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 25\n    }\n  }, \"Puesto\"), __jsx(\"th\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 25\n    }\n  }, \"Opcion\"))), __jsx(\"tbody\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, listaUsuarios.map(e => __jsx(\"tr\", {\n    key: e.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 43\n    }\n  }, __jsx(\"td\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 25\n    }\n  }, e.id), __jsx(\"td\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 25\n    }\n  }, e.nombre), __jsx(\"td\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 25\n    }\n  }, e.apPaterno), __jsx(\"td\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 25\n    }\n  }, e.apMaterno), __jsx(\"td\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 25\n    }\n  }, __jsx(\"select\", {\n    value: e.puesto,\n    disabled: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 29\n    }\n  }, __jsx(\"option\", {\n    value: \"0\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 29\n    }\n  }, \"none\"), __jsx(\"option\", {\n    value: \"1\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 29\n    }\n  }, \"sistemas\"), __jsx(\"option\", {\n    value: \"2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 29\n    }\n  }, \"administracion\"))), __jsx(\"td\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 25\n    }\n  }, __jsx(\"button\", {\n    onClick: () => router.push(`/usuarios/editar/${e.id}`),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 29\n    }\n  }, \"Editar\"), __jsx(\"button\", {\n    onClick: () => router.push(`/usuarios/borrar/${e.id}`),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 29\n    }\n  }, \"Borrar\"))))))));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c3Vhcmlvcy9pbmRleC5qc3g/NDc2ZiJdLCJuYW1lcyI6WyJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibGlzdGFVc3VhcmlvcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJnZXRVc3VhcmlvcyIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJwdXNoIiwiZmxvYXQiLCJib3JkZXIiLCJ3aWR0aCIsIm92ZXJmbG93IiwibWFwIiwiZSIsImlkIiwibm9tYnJlIiwiYXBQYXRlcm5vIiwiYXBNYXRlcm5vIiwicHVlc3RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR2UscUVBQUk7QUFDZixRQUFNQSxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFDQztBQUFELE1BQWtCQywrREFBVyxDQUFDQyxLQUFLLElBQUVBLEtBQVIsQ0FBbkM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyw4RUFBVyxHQUFHUixRQUFILENBQVg7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixhQUFaO0FBRUEsU0FDQTtBQUFLLFNBQUssRUFBRTtBQUFDUyxZQUFNLEVBQUMsR0FBUjtBQUFZQyxlQUFTLEVBQUM7QUFBdEIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxXQUFPLEVBQUUsTUFBSVAsTUFBTSxDQUFDUSxJQUFQLENBQVksZUFBWixDQUFyQjtBQUFtRCxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFDO0FBQVAsS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixFQUdJO0FBQU0sU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBQyxtQkFBUjtBQUE0QkosWUFBTSxFQUFDLEdBQW5DO0FBQXVDSyxXQUFLLEVBQUMsR0FBN0M7QUFBaURDLGNBQVEsRUFBQztBQUExRCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFNBQUssRUFBRTtBQUFDRCxXQUFLLEVBQUM7QUFBUCxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLENBREosQ0FESixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2QsYUFBYSxDQUFDZ0IsR0FBZCxDQUFrQkMsQ0FBQyxJQUFFO0FBQUksT0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELENBQUMsQ0FBQ0MsRUFBUCxDQURrQixFQUVsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELENBQUMsQ0FBQ0UsTUFBUCxDQUZrQixFQUdsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtGLENBQUMsQ0FBQ0csU0FBUCxDQUhrQixFQUlsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtILENBQUMsQ0FBQ0ksU0FBUCxDQUprQixFQUtsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBUSxTQUFLLEVBQUVKLENBQUMsQ0FBQ0ssTUFBakI7QUFBMEIsWUFBUSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFFQTtBQUFRLFNBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsRUFHQTtBQUFRLFNBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEEsQ0FBSixDQUxrQixFQVdsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxXQUFPLEVBQUUsTUFBSW5CLE1BQU0sQ0FBQ1EsSUFBUCxDQUFhLG9CQUFtQk0sQ0FBQyxDQUFDQyxFQUFHLEVBQXJDLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQVEsV0FBTyxFQUFFLE1BQUlmLE1BQU0sQ0FBQ1EsSUFBUCxDQUFhLG9CQUFtQk0sQ0FBQyxDQUFDQyxFQUFHLEVBQXJDLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixDQVhrQixDQUFyQixDQURMLENBWEosQ0FESixDQUhKLENBREE7QUFxQ0gsQ0FoREQiLCJmaWxlIjoiLi9wYWdlcy91c3Vhcmlvcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0VXN1YXJpb3MgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ2V0VXN1YXJpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCAoKT0+e1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7bGlzdGFVc3Vhcmlvc30gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRVc3VhcmlvcygpKGRpc3BhdGNoKTtcbiAgICB9LCBbXSlcblxuICAgIGNvbnNvbGUubG9nKGxpc3RhVXN1YXJpb3MpO1xuXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6MzAwLHRleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnL3VzdWFyaW9zL2FkZCcpfSBzdHlsZT17e2Zsb2F0OidyaWdodCd9fT5hZ3JlZ2FyPC9idXR0b24+XG4gICAgICAgIDxoMz5MaXN0YSBVc3Vhcmlvczo8L2gzPlxuICAgICAgICA8ZGl2ICBzdHlsZT17e2JvcmRlcjonMXB4IHNvbGlkICNiZGJkYmQnLGhlaWdodDozMDAsd2lkdGg6ODUwLG92ZXJmbG93OidhdXRvJ319PlxuICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+SUQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5vbWJyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QXBlaWRvIHBhdC48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFwZWlkbyBtYXQuPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QdWVzdG88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk9wY2lvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YVVzdWFyaW9zLm1hcChlPT48dHIga2V5PXtlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZS5pZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlLm5vbWJyZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlLmFwUGF0ZXJub308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlLmFwTWF0ZXJub308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzZWxlY3QgdmFsdWU9e2UucHVlc3RvIH0gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMCc+bm9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzEnPnNpc3RlbWFzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMic+YWRtaW5pc3RyYWNpb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goYC91c3Vhcmlvcy9lZGl0YXIvJHtlLmlkfWApfSA+RWRpdGFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goYC91c3Vhcmlvcy9ib3JyYXIvJHtlLmlkfWApfSA+Qm9ycmFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPil9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/usuarios/index.jsx\n");

/***/ }),

/***/ "./store/actions/getUsuarios.js":
/*!**************************************!*\
  !*** ./store/actions/getUsuarios.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => async dispatch => {\n  const res = await fetch('/api/usuario', {\n    method: 'POST'\n  });\n  const data = await res.json();\n  console.log(data);\n  if (data.error) return;else return dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_USUARIOS\"],\n    usuarios: data.data\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2dldFVzdWFyaW9zLmpzPzNiMDkiXSwibmFtZXMiOlsiZGlzcGF0Y2giLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidHlwZSIsInR5cGVzIiwidXN1YXJpb3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlLHFFQUFLLE1BQU1BLFFBQU4sSUFBaUI7QUFDakMsUUFBTUMsR0FBRyxHQUFLLE1BQU1DLEtBQUssQ0FBQyxjQUFELEVBQWdCO0FBQUNDLFVBQU0sRUFBQztBQUFSLEdBQWhCLENBQXpCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1ILEdBQUcsQ0FBQ0ksSUFBSixFQUFuQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLE1BQUdBLElBQUksQ0FBQ0ksS0FBUixFQUNJLE9BREosS0FHSSxPQUFPUixRQUFRLENBQUM7QUFDWlMsUUFBSSxFQUFPQyxtREFEQztBQUVaQyxZQUFRLEVBQUdQLElBQUksQ0FBQ0E7QUFGSixHQUFELENBQWY7QUFJUCxDQVhEIiwiZmlsZSI6Ii4vc3RvcmUvYWN0aW9ucy9nZXRVc3Vhcmlvcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKCk9PiBhc3luYyBkaXNwYXRjaCA9PntcbiAgICBjb25zdCByZXMgICA9IGF3YWl0IGZldGNoKCcvYXBpL3VzdWFyaW8nLHttZXRob2Q6J1BPU1QnfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgaWYoZGF0YS5lcnJvcilcbiAgICAgICAgcmV0dXJuXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZSAgICAgOiB0eXBlcy5HRVRfVVNVQVJJT1MsXG4gICAgICAgICAgICB1c3VhcmlvcyA6IGRhdGEuZGF0YVxuICAgICAgICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/actions/getUsuarios.js\n");

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: ADD_USER, REMOVE_USER, GET_USUARIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_USER\", function() { return ADD_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_USER\", function() { return REMOVE_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_USUARIOS\", function() { return GET_USUARIOS; });\nconst ADD_USER = 'ADD_USER';\nconst REMOVE_USER = 'REMOVE_USER';\nconst GET_USUARIOS = 'GET_USUARIOS';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy5qcz8wYzdmIl0sIm5hbWVzIjpbIkFERF9VU0VSIiwiUkVNT1ZFX1VTRVIiLCJHRVRfVVNVQVJJT1MiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsUUFBUSxHQUFTLFVBQXZCO0FBQ0EsTUFBTUMsV0FBVyxHQUFNLGFBQXZCO0FBQ0EsTUFBTUMsWUFBWSxHQUFLLGNBQXZCIiwiZmlsZSI6Ii4vc3RvcmUvdHlwZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IEFERF9VU0VSICAgICAgID0gJ0FERF9VU0VSJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUiAgICA9ICdSRU1PVkVfVVNFUic7ICBcbmV4cG9ydCBjb25zdCBHRVRfVVNVQVJJT1MgICA9ICdHRVRfVVNVQVJJT1MnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/types.js\n");

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/usuarios/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gael/development/web/backend/nextJS/api-tienda-web/pages/usuarios/index.jsx */"./pages/usuarios/index.jsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ })

/******/ });