module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/InputForm.jsx":
/*!****************************************!*\
  !*** ./pages/components/InputForm.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/gael/development/web/backend/nextJS/api-tienda-web/pages/components/InputForm.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst InputForm = ({\n  value = '',\n  event = e => e,\n  name = '',\n  disabled = false\n}) => __jsx(\"div\", {\n  style: {\n    margin: 10,\n    width: 200,\n    display: 'inline-block'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }\n}, __jsx(\"label\", {\n  style: {\n    display: 'block',\n    textAlign: 'start'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }\n}, name), __jsx(\"input\", {\n  disabled: disabled,\n  style: {\n    width: '100%'\n  },\n  onChange: e => event(e.target.value),\n  value: value,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL0lucHV0Rm9ybS5qc3g/MjY1NiJdLCJuYW1lcyI6WyJJbnB1dEZvcm0iLCJ2YWx1ZSIsImV2ZW50IiwiZSIsIm5hbWUiLCJkaXNhYmxlZCIsIm1hcmdpbiIsIndpZHRoIiwiZGlzcGxheSIsInRleHRBbGlnbiIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUNmQyxPQUFLLEdBQUUsRUFEUTtBQUVmQyxPQUFLLEdBQUVDLENBQUMsSUFBRUEsQ0FGSztBQUdmQyxNQUFJLEdBQUcsRUFIUTtBQUlmQyxVQUFRLEdBQUM7QUFKTSxDQUFELEtBS1o7QUFBSyxPQUFLLEVBQUU7QUFBQ0MsVUFBTSxFQUFDLEVBQVI7QUFBV0MsU0FBSyxFQUFDLEdBQWpCO0FBQXFCQyxXQUFPLEVBQUM7QUFBN0IsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0Y7QUFBTyxPQUFLLEVBQUU7QUFBQ0EsV0FBTyxFQUFDLE9BQVQ7QUFBaUJDLGFBQVMsRUFBQztBQUEzQixHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBb0RMLElBQXBELENBREUsRUFFRjtBQUNJLFVBQVEsRUFBRUMsUUFEZDtBQUVJLE9BQUssRUFBRTtBQUFDRSxTQUFLLEVBQUM7QUFBUCxHQUZYO0FBR0ksVUFBUSxFQUFFSixDQUFDLElBQUVELEtBQUssQ0FBQ0MsQ0FBQyxDQUFDTyxNQUFGLENBQVNULEtBQVYsQ0FIdEI7QUFJSSxPQUFLLEVBQUVBLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZFLENBTE47O0FBZWVELHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9JbnB1dEZvcm0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5wdXRGb3JtID0gKHtcbiAgICB2YWx1ZSA9JycsXG4gICAgZXZlbnQgPWU9PmUsXG4gICAgbmFtZSAgPScnLFxuICAgIGRpc2FibGVkPWZhbHNlXG59KSA9Pig8ZGl2IHN0eWxlPXt7bWFyZ2luOjEwLHdpZHRoOjIwMCxkaXNwbGF5OidpbmxpbmUtYmxvY2snfX0+XG4gICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTonYmxvY2snLHRleHRBbGlnbjonc3RhcnQnfX0+e25hbWV9PC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJ319XG4gICAgICAgIG9uQ2hhbmdlPXtlPT5ldmVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAvPlxuPC9kaXY+KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/InputForm.jsx\n");

/***/ }),

/***/ "./pages/usuarios/borrar/[id].jsx":
/*!****************************************!*\
  !*** ./pages/usuarios/borrar/[id].jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_InputForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/InputForm */ \"./pages/components/InputForm.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/gael/development/web/backend/nextJS/api-tienda-web/pages/usuarios/borrar/[id].jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const {\n    query: {\n      id\n    }\n  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    0: value,\n    1: setValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    nombre: '',\n    apPat: '',\n    apMat: ''\n  });\n  const {\n    0: statusDelete,\n    1: setDelete\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  const obtenerUsuario = async () => {\n    const res = await fetch(`/api/usuario/${id}`);\n    const data = await res.json();\n    const usuario = data.data;\n    console.log(data);\n    setValue({\n      nombre: usuario.nombre,\n      apPat: usuario.apPaterno,\n      apMat: usuario.apMaterno\n    });\n  };\n\n  const sendEditUsuario = async () => {\n    console.log(id);\n    const {\n      nombre,\n      apMat,\n      apPat\n    } = value;\n    const res = await fetch(`/api/usuario/delete/${id}`, {\n      method: 'POST',\n      body: JSON.stringify({\n        id\n      })\n    });\n    const valor = await res.json();\n    console.log(valor);\n    alert(valor.message);\n\n    if (!valor.error) {\n      router.back();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    obtenerUsuario();\n  }, []);\n  return __jsx(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"Borrar Usuario : # \", __jsx(\"b\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 32\n    }\n  }, id)), __jsx(_components_InputForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    disabled: true,\n    value: value.nombre,\n    name: \"Nombre\",\n    event: e => setValue(_objectSpread(_objectSpread({}, value), {}, {\n      nombre: e\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), __jsx(_components_InputForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    disabled: true,\n    value: value.apPat,\n    name: \"ap paterno\",\n    event: e => setValue(_objectSpread(_objectSpread({}, value), {}, {\n      apPat: e\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(_components_InputForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    disabled: true,\n    value: value.apMat,\n    name: \"ap Materno\",\n    event: e => setValue(_objectSpread(_objectSpread({}, value), {}, {\n      apMat: e\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      padding: 20\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    style: {\n      margin: 10\n    },\n    type: \"checkbox\",\n    checked: !statusDelete,\n    onChange: e => setDelete(!statusDelete),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }), __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, \"Decea borrar el Usuario?\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    disabled: statusDelete,\n    onClick: sendEditUsuario,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, \"Borrar usuario.\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c3Vhcmlvcy9ib3JyYXIvLmpzeD9hODA1Il0sIm5hbWVzIjpbInF1ZXJ5IiwiaWQiLCJ1c2VSb3V0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJub21icmUiLCJhcFBhdCIsImFwTWF0Iiwic3RhdHVzRGVsZXRlIiwic2V0RGVsZXRlIiwicm91dGVyIiwib2J0ZW5lclVzdWFyaW8iLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidXN1YXJpbyIsImNvbnNvbGUiLCJsb2ciLCJhcFBhdGVybm8iLCJhcE1hdGVybm8iLCJzZW5kRWRpdFVzdWFyaW8iLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbG9yIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJiYWNrIiwidXNlRWZmZWN0IiwidGV4dEFsaWduIiwiZSIsInBhZGRpbmciLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxxRUFBTTtBQUNqQixRQUFNO0FBQUVBLFNBQUssRUFBQztBQUFDQztBQUFEO0FBQVIsTUFBaUJDLDZEQUFTLEVBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1CQyxzREFBUSxDQUFDO0FBQzlCQyxVQUFNLEVBQUMsRUFEdUI7QUFFOUJDLFNBQUssRUFBQyxFQUZ3QjtBQUc5QkMsU0FBSyxFQUFDO0FBSHdCLEdBQUQsQ0FBakM7QUFLQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWNDO0FBQWQsTUFBMkJMLHNEQUFRLENBQUMsSUFBRCxDQUF6QztBQUNBLFFBQU1NLE1BQU0sR0FBR1QsNkRBQVMsRUFBeEI7O0FBRUEsUUFBTVUsY0FBYyxHQUFHLFlBQVc7QUFDOUIsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxnQkFBZWIsRUFBRyxFQUFwQixDQUF2QjtBQUNBLFVBQU1jLElBQUks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QUlJLFlBQVEsRUFBRXlCLENBQUMsSUFBRXhCLFNBQVMsQ0FBQyxDQUFDRCxZQUFGLENBSjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBUEosQ0F0QkksRUErQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CSSxFQWdDSjtBQUFRLFlBQVEsRUFBRUEsWUFBbEI7QUFBZ0MsV0FBTyxFQUFFYSxlQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhDSSxDQUFSO0FBbUNILENBaEZEIiwiZmlsZSI6Ii4vcGFnZXMvdXN1YXJpb3MvYm9ycmFyL1tpZF0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JbnB1dEZvcm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeTp7aWR9IH0gPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdmFsdWUsc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xuICAgICAgICBub21icmU6JycsXG4gICAgICAgIGFwUGF0OicnLFxuICAgICAgICBhcE1hdDonJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtzdGF0dXNEZWxldGUsc2V0RGVsZXRlXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3Qgb2J0ZW5lclVzdWFyaW8gPSBhc3luYyAoKSA9PntcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvdXN1YXJpby8ke2lkfWApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgY29uc3QgdXN1YXJpbyAgPSBkYXRhLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRWYWx1ZSh7XG4gICAgICAgICAgICBub21icmUgOiB1c3VhcmlvLm5vbWJyZSxcbiAgICAgICAgICAgIGFwUGF0ICA6IHVzdWFyaW8uYXBQYXRlcm5vLFxuICAgICAgICAgICAgYXBNYXQgIDogdXN1YXJpby5hcE1hdGVybm9cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZW5kRWRpdFVzdWFyaW8gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgY29uc3QgeyBub21icmUsYXBNYXQsYXBQYXQgfSA9IHZhbHVlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvdXN1YXJpby9kZWxldGUvJHtpZH1gLHtcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsYm9keTpKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB2YWxvciA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbG9yKTsgICBcbiAgICAgICAgYWxlcnQodmFsb3IubWVzc2FnZSk7XG4gICAgICAgIGlmKCF2YWxvci5lcnJvcil7ICAgIFxuICAgICAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIG9idGVuZXJVc3VhcmlvKClcbiAgICB9LFtdKTtcbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgPGgzPkJvcnJhciBVc3VhcmlvIDogIyA8Yj57aWR9PC9iPjwvaDM+XG5cbiAgICAgICAgPElucHV0Rm9ybVxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5ub21icmV9XG4gICAgICAgICAgICBuYW1lPSdOb21icmUnXG4gICAgICAgICAgICBldmVudD17ZT0+c2V0VmFsdWUoey4uLnZhbHVlLG5vbWJyZTplfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dEZvcm0gICAgXG4gICAgICAgICAgICBkaXNhYmxlZCBcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5hcFBhdH1cbiAgICAgICAgICAgIG5hbWU9J2FwIHBhdGVybm8nXG4gICAgICAgICAgICBldmVudD17ZT0+c2V0VmFsdWUoey4uLnZhbHVlLGFwUGF0OmV9KX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0Rm9ybSBcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUuYXBNYXR9XG4gICAgICAgICAgICBuYW1lPSdhcCBNYXRlcm5vJ1xuICAgICAgICAgICAgZXZlbnQ9e2U9PnNldFZhbHVlKHsuLi52YWx1ZSxhcE1hdDplfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjIwfX0gPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOjEwfX1cbiAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICBjaGVja2VkPXshc3RhdHVzRGVsZXRlfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+c2V0RGVsZXRlKCFzdGF0dXNEZWxldGUpfSBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWw+RGVjZWEgYm9ycmFyIGVsIFVzdWFyaW8/PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtzdGF0dXNEZWxldGV9IG9uQ2xpY2s9e3NlbmRFZGl0VXN1YXJpb30+Qm9ycmFyIHVzdWFyaW8uPC9idXR0b24+XG4gICAgICAgIFxuICAgIDwvZGl2Pilcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/usuarios/borrar/[id].jsx\n");

/***/ }),

/***/ 4:
/*!**********************************************!*\
  !*** multi ./pages/usuarios/borrar/[id].jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gael/development/web/backend/nextJS/api-tienda-web/pages/usuarios/borrar/[id].jsx */"./pages/usuarios/borrar/[id].jsx");


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

/***/ })

/******/ });