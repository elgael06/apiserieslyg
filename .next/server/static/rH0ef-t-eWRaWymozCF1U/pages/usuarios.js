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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R28e");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "DH+K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_USUARIOS; });
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const GET_USUARIOS = 'GET_USUARIOS';

/***/ }),

/***/ "R28e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./store/types.js
var types = __webpack_require__("DH+K");

// CONCATENATED MODULE: ./store/actions/getUsuarios.js

/* harmony default export */ var getUsuarios = (() => async dispatch => {
  const res = await fetch('/api/usuario', {
    method: 'POST'
  });
  const data = await res.json();
  console.log(data);
  if (data.error) return;else return dispatch({
    type: types["b" /* GET_USUARIOS */],
    usuarios: data.data
  });
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./pages/usuarios/index.jsx

var __jsx = external_react_default.a.createElement;




/* harmony default export */ var usuarios = __webpack_exports__["default"] = (() => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    listaUsuarios
  } = Object(external_react_redux_["useSelector"])(state => state);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    getUsuarios()(dispatch);
  }, []);
  console.log(listaUsuarios);
  return __jsx("div", {
    style: {
      height: 300,
      textAlign: 'center'
    }
  }, __jsx("button", {
    onClick: () => router.push('/usuarios/add'),
    style: {
      float: 'right'
    }
  }, "agregar"), __jsx("h3", null, "Lista Usuarios:"), __jsx("div", {
    style: {
      border: '1px solid #bdbdbd',
      height: 300,
      width: 850,
      overflow: 'auto'
    }
  }, __jsx("table", {
    style: {
      width: '100%'
    }
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "ID"), __jsx("th", null, "Nombre"), __jsx("th", null, "Apeido pat."), __jsx("th", null, "Apeido mat."), __jsx("th", null, "Puesto"), __jsx("th", null, "Opcion"))), __jsx("tbody", null, listaUsuarios.map(e => __jsx("tr", {
    key: e.id
  }, __jsx("td", null, e.id), __jsx("td", null, e.nombre), __jsx("td", null, e.apPaterno), __jsx("td", null, e.apMaterno), __jsx("td", null, __jsx("select", {
    value: e.puesto,
    disabled: true
  }, __jsx("option", {
    value: "0"
  }, "none"), __jsx("option", {
    value: "1"
  }, "sistemas"), __jsx("option", {
    value: "2"
  }, "administracion"))), __jsx("td", null, __jsx("button", {
    onClick: () => router.push(`/usuarios/editar/${e.id}`)
  }, "Editar"), __jsx("button", {
    onClick: () => router.push(`/usuarios/borrar/${e.id}`)
  }, "Borrar"))))))));
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });