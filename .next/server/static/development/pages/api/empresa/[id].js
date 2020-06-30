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

/***/ "./database/index.ts":
/*!***************************!*\
  !*** ./database/index.ts ***!
  \***************************/
/*! exports provided: select, insert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insert\", function() { return insert; });\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite */ \"sqlite\");\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dirDB = './database.sqlite';\nconst select = async () => ({\n  db: await sqlite__WEBPACK_IMPORTED_MODULE_0___default.a.open(dirDB),\n\n  async allEmpresar() {\n    try {\n      const empresas = (await this.db.all('SELECT * FROM Empresa').catch(() => [])) || [];\n      console.log(\"Empresas =>\", JSON.stringify(empresas, null, 2));\n      this.db.close();\n      return {\n        error: false,\n        data: empresas\n      };\n    } catch (e) {\n      return {\n        error: true,\n        message: e.toString()\n      };\n    }\n  },\n\n  async idEmpresa(id) {\n    const empresa = await this.db.get('SELECT * FROM Empresa where id=?', [id]);\n    return empresa;\n  }\n\n});\nconst insert = async () => ({\n  db: await sqlite__WEBPACK_IMPORTED_MODULE_0___default.a.open(dirDB),\n\n  async existTable() {\n    await this.db.run(`CREATE TABLE IF NOT EXISTS  Empresa (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            nombre TEXT,\n            telefono TEXT,\n            direccion TEXT\n        )`);\n    this.db.close();\n  },\n\n  async newEmpresa(nombre, telefono, direccion) {\n    this.existTable();\n    const res = await this.db.run('INSERT INTO Empresa (nombre, telefono, direccion) values(?,?,?)', [nombre, telefono, direccion]);\n    this.db.close();\n    console.log('listo', res);\n    return res;\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9pbmRleC50cz8wMWFlIl0sIm5hbWVzIjpbImRpckRCIiwic2VsZWN0IiwiZGIiLCJzcWxpdGUiLCJvcGVuIiwiYWxsRW1wcmVzYXIiLCJlbXByZXNhcyIsImFsbCIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbG9zZSIsImVycm9yIiwiZGF0YSIsImUiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJpZEVtcHJlc2EiLCJpZCIsImVtcHJlc2EiLCJnZXQiLCJpbnNlcnQiLCJleGlzdFRhYmxlIiwicnVuIiwibmV3RW1wcmVzYSIsIm5vbWJyZSIsInRlbGVmb25vIiwiZGlyZWNjaW9uIiwicmVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxLQUFLLEdBQUcsbUJBQWQ7QUFFTyxNQUFNQyxNQUFNLEdBQUcsYUFBVztBQUM3QkMsSUFBRSxFQUFHLE1BQU1DLDZDQUFNLENBQUNDLElBQVAsQ0FBWUosS0FBWixDQURrQjs7QUFFN0IsUUFBTUssV0FBTixHQUFtQjtBQUNmLFFBQUc7QUFDQyxZQUFNQyxRQUFRLEdBQUcsT0FBTSxLQUFLSixFQUFMLENBQVFLLEdBQVIsQ0FBWSx1QkFBWixFQUN0QkMsS0FEc0IsQ0FDaEIsTUFBSSxFQURZLENBQU4sS0FDQyxFQURsQjtBQUVBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sUUFBZixFQUF3QixJQUF4QixFQUE2QixDQUE3QixDQUEzQjtBQUNBLFdBQUtKLEVBQUwsQ0FBUVcsS0FBUjtBQUNBLGFBQU87QUFBQ0MsYUFBSyxFQUFDLEtBQVA7QUFBYUMsWUFBSSxFQUFDVDtBQUFsQixPQUFQO0FBQ0gsS0FORCxDQU1DLE9BQU1VLENBQU4sRUFBUTtBQUNMLGFBQU87QUFBQ0YsYUFBSyxFQUFDLElBQVA7QUFBWUcsZUFBTyxFQUFDRCxDQUFDLENBQUNFLFFBQUY7QUFBcEIsT0FBUDtBQUNIO0FBQ0osR0FaNEI7O0FBYTdCLFFBQU1DLFNBQU4sQ0FBZ0JDLEVBQWhCLEVBQTBCO0FBQ3RCLFVBQU1DLE9BQU8sR0FBSSxNQUFNLEtBQUtuQixFQUFMLENBQVFvQixHQUFSLENBQVksa0NBQVosRUFBK0MsQ0FBQ0YsRUFBRCxDQUEvQyxDQUF2QjtBQUNBLFdBQU9DLE9BQVA7QUFDSDs7QUFoQjRCLENBQVgsQ0FBZjtBQW1CQSxNQUFNRSxNQUFNLEdBQUcsYUFBYTtBQUMvQnJCLElBQUUsRUFBRyxNQUFNQyw2Q0FBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosQ0FEb0I7O0FBRS9CLFFBQU13QixVQUFOLEdBQWtCO0FBQ2QsVUFBTSxLQUFLdEIsRUFBTCxDQUFRdUIsR0FBUixDQUFhOzs7OztVQUFiLENBQU47QUFNQSxTQUFLdkIsRUFBTCxDQUFRVyxLQUFSO0FBQ0gsR0FWOEI7O0FBVy9CLFFBQU1hLFVBQU4sQ0FDSUMsTUFESixFQUVJQyxRQUZKLEVBR0lDLFNBSEosRUFJQztBQUNHLFNBQUtMLFVBQUw7QUFDQSxVQUFNTSxHQUFHLEdBQUcsTUFBTSxLQUFLNUIsRUFBTCxDQUFRdUIsR0FBUixDQUFZLGlFQUFaLEVBQThFLENBQUNFLE1BQUQsRUFBU0MsUUFBVCxFQUFtQkMsU0FBbkIsQ0FBOUUsQ0FBbEI7QUFDQSxTQUFLM0IsRUFBTCxDQUFRVyxLQUFSO0FBQ0FKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0JvQixHQUFwQjtBQUNBLFdBQU9BLEdBQVA7QUFDSDs7QUFyQjhCLENBQWIsQ0FBZiIsImZpbGUiOiIuL2RhdGFiYXNlL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNxbGl0ZSAgZnJvbSAnc3FsaXRlJztcblxuY29uc3QgZGlyREIgPSAnLi9kYXRhYmFzZS5zcWxpdGUnO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0ID0gYXN5bmMgKCk9Pih7XG4gICAgZGIgOiBhd2FpdCBzcWxpdGUub3BlbihkaXJEQiksXG4gICAgYXN5bmMgYWxsRW1wcmVzYXIoKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgZW1wcmVzYXMgPSBhd2FpdCB0aGlzLmRiLmFsbCgnU0VMRUNUICogRlJPTSBFbXByZXNhJylcbiAgICAgICAgICAgIC5jYXRjaCgoKT0+W10pIHx8IFtdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbXByZXNhcyA9PlwiLCBKU09OLnN0cmluZ2lmeShlbXByZXNhcyxudWxsLDIpKTtcbiAgICAgICAgICAgIHRoaXMuZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6ZmFsc2UsZGF0YTplbXByZXNhc307XG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6dHJ1ZSxtZXNzYWdlOmUudG9TdHJpbmcoKX07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGlkRW1wcmVzYShpZDpudW1iZXIpe1xuICAgICAgICBjb25zdCBlbXByZXNhID0gIGF3YWl0IHRoaXMuZGIuZ2V0KCdTRUxFQ1QgKiBGUk9NIEVtcHJlc2Egd2hlcmUgaWQ9PycsW2lkXSk7XG4gICAgICAgIHJldHVybiBlbXByZXNhO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgaW5zZXJ0ID0gYXN5bmMgKCkgPT4gKHtcbiAgICBkYiA6IGF3YWl0IHNxbGl0ZS5vcGVuKGRpckRCKSxcbiAgICBhc3luYyBleGlzdFRhYmxlKCl7XG4gICAgICAgIGF3YWl0IHRoaXMuZGIucnVuKGBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyAgRW1wcmVzYSAoXG4gICAgICAgICAgICBpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsXG4gICAgICAgICAgICBub21icmUgVEVYVCxcbiAgICAgICAgICAgIHRlbGVmb25vIFRFWFQsXG4gICAgICAgICAgICBkaXJlY2Npb24gVEVYVFxuICAgICAgICApYCk7XG4gICAgICAgIHRoaXMuZGIuY2xvc2UoKTtcbiAgICB9LFxuICAgIGFzeW5jIG5ld0VtcHJlc2EoXG4gICAgICAgIG5vbWJyZSAgICAgIDogU3RyaW5nLFxuICAgICAgICB0ZWxlZm9ubyAgICA6IFN0cmluZyxcbiAgICAgICAgZGlyZWNjaW9uICAgOiBTdHJpbmdcbiAgICApe1xuICAgICAgICB0aGlzLmV4aXN0VGFibGUoKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kYi5ydW4oJ0lOU0VSVCBJTlRPIEVtcHJlc2EgKG5vbWJyZSwgdGVsZWZvbm8sIGRpcmVjY2lvbikgdmFsdWVzKD8sPyw/KScsW25vbWJyZSwgdGVsZWZvbm8sIGRpcmVjY2lvbl0pO1xuICAgICAgICB0aGlzLmRiLmNsb3NlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsaXN0bycscmVzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./database/index.ts\n");

/***/ }),

/***/ "./pages/api/empresa/[id].ts":
/*!***********************************!*\
  !*** ./pages/api/empresa/[id].ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database */ \"./database/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    id\n  } = req.query;\n  const idEmpresa = parseInt(id.toString());\n  const empresa = await (await Object(_database__WEBPACK_IMPORTED_MODULE_0__[\"select\"])()).idEmpresa(idEmpresa);\n  res.json(empresa);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZW1wcmVzYS8udHM/NjkyNiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwiaWRFbXByZXNhIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsImVtcHJlc2EiLCJzZWxlY3QiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFFZSxzRUFBT0EsR0FBUCxFQUEwQkMsR0FBMUIsS0FBZ0Q7QUFFM0QsUUFBTTtBQUFFQztBQUFGLE1BQVNGLEdBQUcsQ0FBQ0csS0FBbkI7QUFDRSxRQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0gsRUFBRSxDQUFDSSxRQUFILEVBQUQsQ0FBMUI7QUFDQSxRQUFNQyxPQUFPLEdBQUksTUFBTSxDQUFDLE1BQU1DLHdEQUFNLEVBQWIsRUFBaUJKLFNBQWpCLENBQTJCQSxTQUEzQixDQUF2QjtBQUNGSCxLQUFHLENBQUNRLElBQUosQ0FBU0YsT0FBVDtBQUNILENBTkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZW1wcmVzYS9baWRdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTpOZXh0QXBpUmVxdWVzdCxyZXM6TmV4dEFwaVJlc3BvbnNlKT0+e1xuXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuICAgICAgY29uc3QgaWRFbXByZXNhID0gcGFyc2VJbnQoaWQudG9TdHJpbmcoKSk7XG4gICAgICBjb25zdCBlbXByZXNhID0gIGF3YWl0IChhd2FpdCBzZWxlY3QoKSkuaWRFbXByZXNhKGlkRW1wcmVzYSk7XG4gICAgcmVzLmpzb24oZW1wcmVzYSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/empresa/[id].ts\n");

/***/ }),

/***/ 4:
/*!*****************************************!*\
  !*** multi ./pages/api/empresa/[id].ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gael/development/web/backend/nextJS/api-tienda-web/pages/api/empresa/[id].ts */"./pages/api/empresa/[id].ts");


/***/ }),

/***/ "sqlite":
/*!*************************!*\
  !*** external "sqlite" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sqlite\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzcWxpdGVcIj8yNTgyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InNxbGl0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNxbGl0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///sqlite\n");

/***/ })

/******/ });