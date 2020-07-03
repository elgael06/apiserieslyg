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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/index.ts":
/*!***************************!*\
  !*** ./database/index.ts ***!
  \***************************/
/*! exports provided: dirDB, defaultDB, insert, select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dirDB\", function() { return dirDB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultDB\", function() { return defaultDB; });\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite */ \"sqlite\");\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert */ \"./database/insert.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insert\", function() { return _insert__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select */ \"./database/select.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return _select__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\nconst dirDB = './database.sqlite';\nconst defaultDB = async () => await sqlite__WEBPACK_IMPORTED_MODULE_0___default.a.open(dirDB);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9pbmRleC50cz8wMWFlIl0sIm5hbWVzIjpbImRpckRCIiwiZGVmYXVsdERCIiwic3FsaXRlIiwib3BlbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsS0FBSyxHQUFHLG1CQUFkO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFlBQVcsTUFBTUMsNkNBQU0sQ0FBQ0MsSUFBUCxDQUFZSCxLQUFaLENBQW5DO0FBRVAiLCJmaWxlIjoiLi9kYXRhYmFzZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcWxpdGUgIGZyb20gJ3NxbGl0ZSc7XG5cbmV4cG9ydCBjb25zdCBkaXJEQiA9ICcuL2RhdGFiYXNlLnNxbGl0ZSc7XG5leHBvcnQgY29uc3QgZGVmYXVsdERCID0gYXN5bmMgKCk9PiBhd2FpdCBzcWxpdGUub3BlbihkaXJEQik7XG5cbmV4cG9ydCAge2RlZmF1bHQgYXMgIGluc2VydH0gZnJvbSAnLi9pbnNlcnQnO1xuZXhwb3J0ICB7ZGVmYXVsdCBhcyAgc2VsZWN0fSBmcm9tICcuL3NlbGVjdCc7XG4gICAgXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/index.ts\n");

/***/ }),

/***/ "./database/insert.ts":
/*!****************************!*\
  !*** ./database/insert.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./database/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => ({\n  db: await Object(___WEBPACK_IMPORTED_MODULE_0__[\"defaultDB\"])(),\n\n  async existTable() {\n    //EMPRESAS\n    await this.db.run(`CREATE TABLE IF NOT EXISTS  Empresa (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            nombre TEXT,\n            telefono TEXT,\n            direccion TEXT\n        )`); //USUARIOS\n\n    await this.db.run(`CREATE TABLE IF NOT EXISTS  Usuarios (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            nombre TEXT,\n            apPaterno TEXT,\n            apMaterno TEXT,    \n            puesto int        \n        )`); //LOGIN\n\n    await this.db.run(`CREATE TABLE IF NOT EXISTS loginUser (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            idUsuario int,\n            password TEXT\n        )`); //REGISTRO\n\n    await this.db.run(`CREATE TABLE IF NOT EXISTS registroLogin (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            idUsuario int,\n            fecha date,\n            hora datetime\n        )`);\n  },\n\n  async newEmpresa(nombre, telefono, direccion) {\n    await this.existTable();\n    const res = await this.db.run('INSERT INTO Empresa (nombre, telefono, direccion) values(?,?,?)', [nombre, telefono, direccion]);\n    this.db.close();\n    console.log('listo', res);\n    return res;\n  },\n\n  async newUsuario(nombre, apPaterno, apMaterno, puesto) {\n    await this.existTable();\n    await this.db.run('INSERT INTO Usuarios (nombre, apPaterno, apMaterno, puesto) values(?,?,?,?)', [nombre, apMaterno, apPaterno, puesto]);\n    const id = await this.db.all('select * from Usuarios order by id desc LIMIT 1');\n    this.db.close();\n    console.log('listo', id);\n    return id;\n  },\n\n  async loginUser(idUsuario, password) {\n    const res = await this.db.run('INSERT INTO loginUser(idUsuario,password) VALUES(?,?)', [idUsuario, password]);\n    this.db.close();\n    console.log('ID', res.lastID);\n    return res;\n  }\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9pbnNlcnQudHM/NGNmOSJdLCJuYW1lcyI6WyJkYiIsImRlZmF1bHREQiIsImV4aXN0VGFibGUiLCJydW4iLCJuZXdFbXByZXNhIiwibm9tYnJlIiwidGVsZWZvbm8iLCJkaXJlY2Npb24iLCJyZXMiLCJjbG9zZSIsImNvbnNvbGUiLCJsb2ciLCJuZXdVc3VhcmlvIiwiYXBQYXRlcm5vIiwiYXBNYXRlcm5vIiwicHVlc3RvIiwiaWQiLCJhbGwiLCJsb2dpblVzZXIiLCJpZFVzdWFyaW8iLCJwYXNzd29yZCIsImxhc3RJRCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWUsNEVBQWE7QUFDeEJBLElBQUUsRUFBRSxNQUFNQyxtREFBUyxFQURLOztBQUV4QixRQUFNQyxVQUFOLEdBQWtCO0FBQ2Q7QUFDQSxVQUFNLEtBQUtGLEVBQUwsQ0FBUUcsR0FBUixDQUFhOzs7OztVQUFiLENBQU4sQ0FGYyxDQVFkOztBQUNBLFVBQU0sS0FBS0gsRUFBTCxDQUFRRyxHQUFSLENBQWE7Ozs7OztVQUFiLENBQU4sQ0FUYyxDQWdCZDs7QUFDQSxVQUFNLEtBQUtILEVBQUwsQ0FBUUcsR0FBUixDQUFhOzs7O1VBQWIsQ0FBTixDQWpCYyxDQXNCZDs7QUFDQSxVQUFNLEtBQUtILEVBQUwsQ0FBUUcsR0FBUixDQUFhOzs7OztVQUFiLENBQU47QUFNSCxHQS9CdUI7O0FBZ0N4QixRQUFNQyxVQUFOLENBQ0lDLE1BREosRUFFSUMsUUFGSixFQUdJQyxTQUhKLEVBSUM7QUFDRyxVQUFNLEtBQUtMLFVBQUwsRUFBTjtBQUNBLFVBQU1NLEdBQUcsR0FBRyxNQUFNLEtBQUtSLEVBQUwsQ0FBUUcsR0FBUixDQUFZLGlFQUFaLEVBQThFLENBQUNFLE1BQUQsRUFBU0MsUUFBVCxFQUFtQkMsU0FBbkIsQ0FBOUUsQ0FBbEI7QUFDQSxTQUFLUCxFQUFMLENBQVFTLEtBQVI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQkgsR0FBcEI7QUFDQSxXQUFPQSxHQUFQO0FBQ0gsR0ExQ3VCOztBQTJDeEIsUUFBTUksVUFBTixDQUNJUCxNQURKLEVBRUlRLFNBRkosRUFHSUMsU0FISixFQUlJQyxNQUpKLEVBS0M7QUFDRyxVQUFNLEtBQUtiLFVBQUwsRUFBTjtBQUNBLFVBQU0sS0FBS0YsRUFBTCxDQUFRRyxHQUFSLENBQVksNkVBQVosRUFDRixDQUFDRSxNQUFELEVBQVFTLFNBQVIsRUFBa0JELFNBQWxCLEVBQTRCRSxNQUE1QixDQURFLENBQU47QUFFQSxVQUFNQyxFQUFFLEdBQUcsTUFBTSxLQUFLaEIsRUFBTCxDQUFRaUIsR0FBUixDQUFZLGlEQUFaLENBQWpCO0FBQ0EsU0FBS2pCLEVBQUwsQ0FBUVMsS0FBUjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CSyxFQUFwQjtBQUNBLFdBQU9BLEVBQVA7QUFDSCxHQXhEdUI7O0FBeUR4QixRQUFNRSxTQUFOLENBQ0lDLFNBREosRUFFSUMsUUFGSixFQUlDO0FBQ0csVUFBTVosR0FBRyxHQUFHLE1BQU0sS0FBS1IsRUFBTCxDQUFRRyxHQUFSLENBQVksdURBQVosRUFBb0UsQ0FBQ2dCLFNBQUQsRUFBV0MsUUFBWCxDQUFwRSxDQUFsQjtBQUNBLFNBQUtwQixFQUFMLENBQVFTLEtBQVI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFpQkgsR0FBRyxDQUFDYSxNQUFyQjtBQUNBLFdBQU9iLEdBQVA7QUFFSDs7QUFuRXVCLENBQWIsQ0FBZiIsImZpbGUiOiIuL2RhdGFiYXNlL2luc2VydC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHREQiB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+ICh7XG4gICAgZGI6IGF3YWl0IGRlZmF1bHREQigpLFxuICAgIGFzeW5jIGV4aXN0VGFibGUoKXtcbiAgICAgICAgLy9FTVBSRVNBU1xuICAgICAgICBhd2FpdCB0aGlzLmRiLnJ1bihgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgIEVtcHJlc2EgKFxuICAgICAgICAgICAgaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULFxuICAgICAgICAgICAgbm9tYnJlIFRFWFQsXG4gICAgICAgICAgICB0ZWxlZm9ubyBURVhULFxuICAgICAgICAgICAgZGlyZWNjaW9uIFRFWFRcbiAgICAgICAgKWApO1xuICAgICAgICAvL1VTVUFSSU9TXG4gICAgICAgIGF3YWl0IHRoaXMuZGIucnVuKGBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyAgVXN1YXJpb3MgKFxuICAgICAgICAgICAgaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULFxuICAgICAgICAgICAgbm9tYnJlIFRFWFQsXG4gICAgICAgICAgICBhcFBhdGVybm8gVEVYVCxcbiAgICAgICAgICAgIGFwTWF0ZXJubyBURVhULCAgICBcbiAgICAgICAgICAgIHB1ZXN0byBpbnQgICAgICAgIFxuICAgICAgICApYCk7XG4gICAgICAgIC8vTE9HSU5cbiAgICAgICAgYXdhaXQgdGhpcy5kYi5ydW4oYENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGxvZ2luVXNlciAoXG4gICAgICAgICAgICBpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsXG4gICAgICAgICAgICBpZFVzdWFyaW8gaW50LFxuICAgICAgICAgICAgcGFzc3dvcmQgVEVYVFxuICAgICAgICApYCk7XG4gICAgICAgIC8vUkVHSVNUUk9cbiAgICAgICAgYXdhaXQgdGhpcy5kYi5ydW4oYENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHJlZ2lzdHJvTG9naW4gKFxuICAgICAgICAgICAgaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULFxuICAgICAgICAgICAgaWRVc3VhcmlvIGludCxcbiAgICAgICAgICAgIGZlY2hhIGRhdGUsXG4gICAgICAgICAgICBob3JhIGRhdGV0aW1lXG4gICAgICAgIClgKTtcbiAgICB9LFxuICAgIGFzeW5jIG5ld0VtcHJlc2EoXG4gICAgICAgIG5vbWJyZSAgICAgIDogU3RyaW5nLFxuICAgICAgICB0ZWxlZm9ubyAgICA6IFN0cmluZyxcbiAgICAgICAgZGlyZWNjaW9uICAgOiBTdHJpbmdcbiAgICApe1xuICAgICAgICBhd2FpdCB0aGlzLmV4aXN0VGFibGUoKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kYi5ydW4oJ0lOU0VSVCBJTlRPIEVtcHJlc2EgKG5vbWJyZSwgdGVsZWZvbm8sIGRpcmVjY2lvbikgdmFsdWVzKD8sPyw/KScsW25vbWJyZSwgdGVsZWZvbm8sIGRpcmVjY2lvbl0pO1xuICAgICAgICB0aGlzLmRiLmNsb3NlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsaXN0bycscmVzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LFxuICAgIGFzeW5jIG5ld1VzdWFyaW8oXG4gICAgICAgIG5vbWJyZTpTdHJpbmcsXG4gICAgICAgIGFwUGF0ZXJubzogU3RyaW5nLFxuICAgICAgICBhcE1hdGVybm86IFN0cmluZyxcbiAgICAgICAgcHVlc3RvOm51bWJlclxuICAgICl7XG4gICAgICAgIGF3YWl0IHRoaXMuZXhpc3RUYWJsZSgpO1xuICAgICAgICBhd2FpdCB0aGlzLmRiLnJ1bignSU5TRVJUIElOVE8gVXN1YXJpb3MgKG5vbWJyZSwgYXBQYXRlcm5vLCBhcE1hdGVybm8sIHB1ZXN0bykgdmFsdWVzKD8sPyw/LD8pJyxcbiAgICAgICAgICAgIFtub21icmUsYXBNYXRlcm5vLGFwUGF0ZXJubyxwdWVzdG9dKTtcbiAgICAgICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmRiLmFsbCgnc2VsZWN0ICogZnJvbSBVc3VhcmlvcyBvcmRlciBieSBpZCBkZXNjIExJTUlUIDEnKVxuICAgICAgICB0aGlzLmRiLmNsb3NlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsaXN0bycsaWQpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfSxcbiAgICBhc3luYyBsb2dpblVzZXIoXG4gICAgICAgIGlkVXN1YXJpbzpudW1iZXIsXG4gICAgICAgIHBhc3N3b3JkOnN0cmluZyxcblxuICAgICl7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZGIucnVuKCdJTlNFUlQgSU5UTyBsb2dpblVzZXIoaWRVc3VhcmlvLHBhc3N3b3JkKSBWQUxVRVMoPyw/KScsW2lkVXN1YXJpbyxwYXNzd29yZF0pO1xuICAgICAgICB0aGlzLmRiLmNsb3NlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJRCcscmVzLmxhc3RJRCk7XG4gICAgICAgIHJldHVybiByZXM7XG5cbiAgICB9XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./database/insert.ts\n");

/***/ }),

/***/ "./database/select.ts":
/*!****************************!*\
  !*** ./database/select.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./database/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => ({\n  db: await Object(___WEBPACK_IMPORTED_MODULE_0__[\"defaultDB\"])(),\n\n  //empresa\n  async allEmpresar() {\n    try {\n      const empresas = (await this.db.all('SELECT * FROM Empresa').catch(() => [])) || [];\n      console.log(\"Empresas =>\", JSON.stringify(empresas, null, 2));\n      this.db.close();\n      return {\n        error: false,\n        data: empresas\n      };\n    } catch (e) {\n      return {\n        error: true,\n        message: e.toString()\n      };\n    }\n  },\n\n  async idEmpresa(id) {\n    const empresa = await this.db.get('SELECT * FROM Empresa where id=?', [id]);\n    this.db.close();\n    return empresa || null;\n  },\n\n  //usuario\n  async allUsuario() {\n    try {\n      const usuarios = (await this.db.all('SELECT * FROM Usuarios').catch(() => [])) || [];\n      console.log(`usuarios => `, JSON.stringify(usuarios, null, 2));\n      this.db.close();\n      return {\n        error: false,\n        data: usuarios\n      };\n    } catch (e) {\n      return {\n        error: true,\n        message: e.toString()\n      };\n    }\n  },\n\n  async idUsuario(id) {\n    try {\n      const usuario = (await this.db.run('SELECT * FROM Usuarios where id=?', [id]).catch(() => [])) || [];\n      console.log(`usuarios => `, JSON.stringify(usuario, null, 2));\n      this.db.close();\n      return {\n        error: false,\n        data: usuario\n      };\n    } catch (e) {\n      return {\n        error: true,\n        message: e.toString()\n      };\n    }\n  }\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9zZWxlY3QudHM/Mjc1YSJdLCJuYW1lcyI6WyJkYiIsImRlZmF1bHREQiIsImFsbEVtcHJlc2FyIiwiZW1wcmVzYXMiLCJhbGwiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiY2xvc2UiLCJlcnJvciIsImRhdGEiLCJlIiwibWVzc2FnZSIsInRvU3RyaW5nIiwiaWRFbXByZXNhIiwiaWQiLCJlbXByZXNhIiwiZ2V0IiwiYWxsVXN1YXJpbyIsInVzdWFyaW9zIiwiaWRVc3VhcmlvIiwidXN1YXJpbyIsInJ1biJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWUsNEVBQVc7QUFDdEJBLElBQUUsRUFBRSxNQUFNQyxtREFBUyxFQURHOztBQUV0QjtBQUNBLFFBQU1DLFdBQU4sR0FBbUI7QUFDZixRQUFHO0FBQ0MsWUFBTUMsUUFBUSxHQUFHLE9BQU0sS0FBS0gsRUFBTCxDQUFRSSxHQUFSLENBQVksdUJBQVosRUFDbEJDLEtBRGtCLENBQ1osTUFBSSxFQURRLENBQU4sS0FDSyxFQUR0QjtBQUVBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sUUFBZixFQUF3QixJQUF4QixFQUE2QixDQUE3QixDQUEzQjtBQUNBLFdBQUtILEVBQUwsQ0FBUVUsS0FBUjtBQUNBLGFBQU87QUFBQ0MsYUFBSyxFQUFDLEtBQVA7QUFBYUMsWUFBSSxFQUFDVDtBQUFsQixPQUFQO0FBQ0gsS0FORCxDQU1DLE9BQU1VLENBQU4sRUFBUTtBQUNMLGFBQU87QUFBQ0YsYUFBSyxFQUFDLElBQVA7QUFBWUcsZUFBTyxFQUFDRCxDQUFDLENBQUNFLFFBQUY7QUFBcEIsT0FBUDtBQUNIO0FBQ0osR0FicUI7O0FBY3RCLFFBQU1DLFNBQU4sQ0FBZ0JDLEVBQWhCLEVBQTBCO0FBQ3RCLFVBQU1DLE9BQU8sR0FBSSxNQUFNLEtBQUtsQixFQUFMLENBQVFtQixHQUFSLENBQVksa0NBQVosRUFBK0MsQ0FBQ0YsRUFBRCxDQUEvQyxDQUF2QjtBQUNBLFNBQUtqQixFQUFMLENBQVFVLEtBQVI7QUFDQSxXQUFPUSxPQUFPLElBQUksSUFBbEI7QUFDSCxHQWxCcUI7O0FBbUJ0QjtBQUNBLFFBQU1FLFVBQU4sR0FBa0I7QUFDZCxRQUFHO0FBQ0MsWUFBTUMsUUFBUSxHQUFHLE9BQU0sS0FBS3JCLEVBQUwsQ0FBUUksR0FBUixDQUFZLHdCQUFaLEVBQ2xCQyxLQURrQixDQUNaLE1BQUksRUFEUSxDQUFOLEtBQ0ssRUFEdEI7QUFFQUMsYUFBTyxDQUFDQyxHQUFSLENBQWEsY0FBYixFQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVZLFFBQWYsRUFBd0IsSUFBeEIsRUFBNkIsQ0FBN0IsQ0FBNUI7QUFDQSxXQUFLckIsRUFBTCxDQUFRVSxLQUFSO0FBQ0EsYUFBTztBQUFDQyxhQUFLLEVBQUMsS0FBUDtBQUFhQyxZQUFJLEVBQUNTO0FBQWxCLE9BQVA7QUFFSCxLQVBELENBT0MsT0FBTVIsQ0FBTixFQUFRO0FBQ0wsYUFBTztBQUFDRixhQUFLLEVBQUMsSUFBUDtBQUFZRyxlQUFPLEVBQUNELENBQUMsQ0FBQ0UsUUFBRjtBQUFwQixPQUFQO0FBQ0g7QUFDSixHQS9CcUI7O0FBZ0N0QixRQUFNTyxTQUFOLENBQWdCTCxFQUFoQixFQUEwQjtBQUN0QixRQUFHO0FBQ0MsWUFBTU0sT0FBTyxHQUFHLE9BQU0sS0FBS3ZCLEVBQUwsQ0FBUXdCLEdBQVIsQ0FBWSxtQ0FBWixFQUFnRCxDQUFDUCxFQUFELENBQWhELEVBQ2pCWixLQURpQixDQUNYLE1BQUksRUFETyxDQUFOLEtBQ00sRUFEdEI7QUFFQUMsYUFBTyxDQUFDQyxHQUFSLENBQWEsY0FBYixFQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVjLE9BQWYsRUFBdUIsSUFBdkIsRUFBNEIsQ0FBNUIsQ0FBNUI7QUFDQSxXQUFLdkIsRUFBTCxDQUFRVSxLQUFSO0FBQ0EsYUFBTztBQUFDQyxhQUFLLEVBQUMsS0FBUDtBQUFhQyxZQUFJLEVBQUNXO0FBQWxCLE9BQVA7QUFDSCxLQU5ELENBTUMsT0FBTVYsQ0FBTixFQUFRO0FBQ0wsYUFBTztBQUFDRixhQUFLLEVBQUMsSUFBUDtBQUFZRyxlQUFPLEVBQUNELENBQUMsQ0FBQ0UsUUFBRjtBQUFwQixPQUFQO0FBQ0g7QUFDSjs7QUExQ3FCLENBQVgsQ0FBZiIsImZpbGUiOiIuL2RhdGFiYXNlL3NlbGVjdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHREQiB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpPT4oe1xuICAgIGRiOiBhd2FpdCBkZWZhdWx0REIoKSxcbiAgICAvL2VtcHJlc2FcbiAgICBhc3luYyBhbGxFbXByZXNhcigpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBlbXByZXNhcyA9IGF3YWl0IHRoaXMuZGIuYWxsKCdTRUxFQ1QgKiBGUk9NIEVtcHJlc2EnKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+W10pIHx8IFtdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbXByZXNhcyA9PlwiLCBKU09OLnN0cmluZ2lmeShlbXByZXNhcyxudWxsLDIpKTtcbiAgICAgICAgICAgIHRoaXMuZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6ZmFsc2UsZGF0YTplbXByZXNhc307XG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6dHJ1ZSxtZXNzYWdlOmUudG9TdHJpbmcoKX07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGlkRW1wcmVzYShpZDpudW1iZXIpe1xuICAgICAgICBjb25zdCBlbXByZXNhID0gIGF3YWl0IHRoaXMuZGIuZ2V0KCdTRUxFQ1QgKiBGUk9NIEVtcHJlc2Egd2hlcmUgaWQ9PycsW2lkXSk7XG4gICAgICAgIHRoaXMuZGIuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIGVtcHJlc2EgfHwgbnVsbDtcbiAgICB9LFxuICAgIC8vdXN1YXJpb1xuICAgIGFzeW5jIGFsbFVzdWFyaW8oKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgdXN1YXJpb3MgPSBhd2FpdCB0aGlzLmRiLmFsbCgnU0VMRUNUICogRlJPTSBVc3VhcmlvcycpXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT5bXSkgfHwgW107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdXN1YXJpb3MgPT4gYCwgSlNPTi5zdHJpbmdpZnkodXN1YXJpb3MsbnVsbCwyKSk7XG4gICAgICAgICAgICB0aGlzLmRiLmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yOmZhbHNlLGRhdGE6dXN1YXJpb3N9O1xuXG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6dHJ1ZSxtZXNzYWdlOmUudG9TdHJpbmcoKX07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGlkVXN1YXJpbyhpZDpudW1iZXIpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCB1c3VhcmlvID0gYXdhaXQgdGhpcy5kYi5ydW4oJ1NFTEVDVCAqIEZST00gVXN1YXJpb3Mgd2hlcmUgaWQ9PycsW2lkXSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PltdKSB8fCBbXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c3VhcmlvcyA9PiBgLCBKU09OLnN0cmluZ2lmeSh1c3VhcmlvLG51bGwsMikpO1xuICAgICAgICAgICAgdGhpcy5kYi5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcjpmYWxzZSxkYXRhOnVzdWFyaW99O1xuICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yOnRydWUsbWVzc2FnZTplLnRvU3RyaW5nKCl9O1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/select.ts\n");

/***/ }),

/***/ "./pages/api/usuario/addUsuario.ts":
/*!*****************************************!*\
  !*** ./pages/api/usuario/addUsuario.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database */ \"./database/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method == 'POST') {\n    const {\n      nombre,\n      apPat,\n      apMat,\n      puesto = 0\n    } = JSON.parse(req.body);\n    console.log('body :', req.body);\n    console.log('listo', nombre, apPat, apMat, puesto);\n    const value = await (await Object(_database__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])()).newUsuario(nombre, apPat, apMat, puesto);\n    res.json(_objectSpread({}, value));\n  } else res.json(\"metodo no accesible.\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXN1YXJpby9hZGRVc3VhcmlvLnRzP2I5YWIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwibm9tYnJlIiwiYXBQYXQiLCJhcE1hdCIsInB1ZXN0byIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJpbnNlcnQiLCJuZXdVc3VhcmlvIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQVNlLHNFQUFPQSxHQUFQLEVBQTBCQyxHQUExQixLQUFnRDtBQUMzRCxNQUFHRCxHQUFHLENBQUNFLE1BQUosSUFBWSxNQUFmLEVBQXNCO0FBQ2xCLFVBQU07QUFBQ0MsWUFBRDtBQUFTQyxXQUFUO0FBQWVDLFdBQWY7QUFBcUJDLFlBQU0sR0FBQztBQUE1QixRQUE4Q0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLEdBQUcsQ0FBQ1MsSUFBZixDQUFwRDtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXFCWCxHQUFHLENBQUNTLElBQXpCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0JSLE1BQXBCLEVBQTRCQyxLQUE1QixFQUFrQ0MsS0FBbEMsRUFBd0NDLE1BQXhDO0FBQ0EsVUFBTU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNQyx3REFBTSxFQUFiLEVBQWlCQyxVQUFqQixDQUE0QlgsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTBDQyxLQUExQyxFQUFnREMsTUFBaEQsQ0FBcEI7QUFDQUwsT0FBRyxDQUFDYyxJQUFKLG1CQUFjSCxLQUFkO0FBQ0gsR0FORCxNQVFJWCxHQUFHLENBQUNjLElBQUosQ0FBUyxzQkFBVDtBQUNQLENBVkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXN1YXJpby9hZGRVc3VhcmlvLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBpbnNlcnQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2VcIjtcblxuaW50ZXJmYWNlIG1vZGVsVXN1YXJpbyB7XG4gICAgbm9tYnJlOnN0cmluZywgXG4gICAgYXBQYXQ6c3RyaW5nLFxuICAgIGFwTWF0OnN0cmluZyxcbiAgICBwdWVzdG86bnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6TmV4dEFwaVJlcXVlc3QscmVzOk5leHRBcGlSZXNwb25zZSk9PntcbiAgICBpZihyZXEubWV0aG9kPT0nUE9TVCcpe1xuICAgICAgICBjb25zdCB7bm9tYnJlLCBhcFBhdCxhcE1hdCxwdWVzdG89MH06bW9kZWxVc3VhcmlvID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdib2R5IDonLHJlcS5ib2R5KVxuICAgICAgICBjb25zb2xlLmxvZygnbGlzdG8nLG5vbWJyZSwgYXBQYXQsYXBNYXQscHVlc3RvKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCAoYXdhaXQgaW5zZXJ0KCkpLm5ld1VzdWFyaW8obm9tYnJlLCBhcFBhdCxhcE1hdCxwdWVzdG8pO1xuICAgICAgICByZXMuanNvbiggey4uLnZhbHVlfSk7XG4gICAgfVxuICAgIGVsc2UgXG4gICAgICAgIHJlcy5qc29uKFwibWV0b2RvIG5vIGFjY2VzaWJsZS5cIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/usuario/addUsuario.ts\n");

/***/ }),

/***/ 5:
/*!***********************************************!*\
  !*** multi ./pages/api/usuario/addUsuario.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gael/development/web/backend/nextJS/api-tienda-web/pages/api/usuario/addUsuario.ts */"./pages/api/usuario/addUsuario.ts");


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