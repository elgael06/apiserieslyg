module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/delete.ts":
/*!****************************!*\
  !*** ./database/delete.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./database/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => ({\n  db: await Object(___WEBPACK_IMPORTED_MODULE_0__[\"defaultDB\"])(),\n\n  //usuario\n  async idUsuario(id) {\n    try {\n      await this.db.run('DELETE FROM Usuarios where id=?', [id]);\n      this.db.close();\n      return {\n        error: false,\n        message: `usuario #${id} eliminado...`\n      };\n    } catch (error) {\n      return {\n        error: true,\n        message: `Error al eliminado usuario #${id} !!!`,\n        messageError: error\n      };\n    }\n  }\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kZWxldGUudHM/ZmU3NyJdLCJuYW1lcyI6WyJkYiIsImRlZmF1bHREQiIsImlkVXN1YXJpbyIsImlkIiwicnVuIiwiY2xvc2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJtZXNzYWdlRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlLDRFQUFhO0FBQ3hCQSxJQUFFLEVBQUUsTUFBTUMsbURBQVMsRUFESzs7QUFFeEI7QUFDQSxRQUFNQyxTQUFOLENBQWdCQyxFQUFoQixFQUEwQjtBQUN0QixRQUFHO0FBQ0MsWUFBTSxLQUFLSCxFQUFMLENBQVFJLEdBQVIsQ0FBWSxpQ0FBWixFQUE4QyxDQUFDRCxFQUFELENBQTlDLENBQU47QUFDQSxXQUFLSCxFQUFMLENBQVFLLEtBQVI7QUFDQSxhQUFPO0FBQUNDLGFBQUssRUFBQyxLQUFQO0FBQWFDLGVBQU8sRUFBRSxZQUFXSixFQUFHO0FBQXBDLE9BQVA7QUFDSCxLQUpELENBSUMsT0FBTUcsS0FBTixFQUFZO0FBQ1QsYUFBTztBQUFDQSxhQUFLLEVBQUMsSUFBUDtBQUFZQyxlQUFPLEVBQUUsK0JBQThCSixFQUFHLE1BQXREO0FBQTRESyxvQkFBWSxFQUFDRjtBQUF6RSxPQUFQO0FBQ0g7QUFFSjs7QUFadUIsQ0FBYixDQUFmIiwiZmlsZSI6Ii4vZGF0YWJhc2UvZGVsZXRlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmYXVsdERCIH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4gKHtcbiAgICBkYjogYXdhaXQgZGVmYXVsdERCKCksXG4gICAgLy91c3VhcmlvXG4gICAgYXN5bmMgaWRVc3VhcmlvKGlkOm51bWJlcil7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGIucnVuKCdERUxFVEUgRlJPTSBVc3VhcmlvcyB3aGVyZSBpZD0/JyxbaWRdKTtcbiAgICAgICAgICAgIHRoaXMuZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6ZmFsc2UsbWVzc2FnZTpgdXN1YXJpbyAjJHtpZH0gZWxpbWluYWRvLi4uYH1cbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6dHJ1ZSxtZXNzYWdlOmBFcnJvciBhbCBlbGltaW5hZG8gdXN1YXJpbyAjJHtpZH0gISEhYCxtZXNzYWdlRXJyb3I6ZXJyb3J9XG4gICAgICAgIH1cblxuICAgIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/delete.ts\n");

/***/ }),

/***/ "./database/index.ts":
/*!***************************!*\
  !*** ./database/index.ts ***!
  \***************************/
/*! exports provided: dirDB, defaultDB, insert, select, update, delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dirDB\", function() { return dirDB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultDB\", function() { return defaultDB; });\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite */ \"sqlite\");\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert */ \"./database/insert.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insert\", function() { return _insert__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select */ \"./database/select.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return _select__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update */ \"./database/update.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return _update__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete */ \"./database/delete.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"delete\", function() { return _delete__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\nconst dirDB = './database.sqlite';\nconst defaultDB = async () => await sqlite__WEBPACK_IMPORTED_MODULE_0___default.a.open(dirDB);\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9pbmRleC50cz8wMWFlIl0sIm5hbWVzIjpbImRpckRCIiwiZGVmYXVsdERCIiwic3FsaXRlIiwib3BlbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsS0FBSyxHQUFHLG1CQUFkO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFlBQVcsTUFBTUMsNkNBQU0sQ0FBQ0MsSUFBUCxDQUFZSCxLQUFaLENBQW5DO0FBRVA7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vZGF0YWJhc2UvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3FsaXRlICBmcm9tICdzcWxpdGUnO1xuXG5leHBvcnQgY29uc3QgZGlyREIgPSAnLi9kYXRhYmFzZS5zcWxpdGUnO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHREQiA9IGFzeW5jICgpPT4gYXdhaXQgc3FsaXRlLm9wZW4oZGlyREIpO1xuXG5leHBvcnQgIHsgZGVmYXVsdCBhcyAgaW5zZXJ0IH0gZnJvbSAnLi9pbnNlcnQnO1xuZXhwb3J0ICB7IGRlZmF1bHQgYXMgIHNlbGVjdCB9IGZyb20gJy4vc2VsZWN0JztcbmV4cG9ydCAgeyBkZWZhdWx0IGFzICB1cGRhdGUgfSBmcm9tICcuL3VwZGF0ZSc7XG5leHBvcnQgIHsgZGVmYXVsdCBhcyAgZGVsZXRlIH0gZnJvbSAnLi9kZWxldGUnO1xuICAgIFxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./database/index.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./database/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => ({\n  db: await Object(___WEBPACK_IMPORTED_MODULE_0__[\"defaultDB\"])(),\n\n  //empresa\n  async allEmpresar() {\n    try {\n      const empresas = (await this.db.all('SELECT * FROM Empresa').catch(() => [])) || [];\n      this.db.close();\n      return {\n        error: false,\n        data: empresas\n      };\n    } catch (e) {\n      return {\n        error: true,\n        message: e.toString()\n      };\n    }\n  },\n\n  async idEmpresa(id) {\n    const empresa = await this.db.get('SELECT * FROM Empresa where id=?', [id]);\n    this.db.close();\n    return empresa || null;\n  },\n\n  //usuario\n  async allUsuario() {\n    try {\n      const usuarios = (await this.db.all('SELECT * FROM Usuarios').catch(() => [])) || [];\n      this.db.close();\n      return {\n        error: false,\n        data: usuarios\n      };\n    } catch (e) {\n      return {\n        error: true,\n        message: e.toString()\n      };\n    }\n  },\n\n  async idUsuario(id) {\n    try {\n      const usuario = (await this.db.get('SELECT * FROM Usuarios where id=?', [id]).catch(() => [])) || [];\n      this.db.close();\n      return {\n        error: false,\n        data: usuario\n      };\n    } catch (e) {\n      return {\n        error: true,\n        message: e.toString()\n      };\n    }\n  }\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9zZWxlY3QudHM/Mjc1YSJdLCJuYW1lcyI6WyJkYiIsImRlZmF1bHREQiIsImFsbEVtcHJlc2FyIiwiZW1wcmVzYXMiLCJhbGwiLCJjYXRjaCIsImNsb3NlIiwiZXJyb3IiLCJkYXRhIiwiZSIsIm1lc3NhZ2UiLCJ0b1N0cmluZyIsImlkRW1wcmVzYSIsImlkIiwiZW1wcmVzYSIsImdldCIsImFsbFVzdWFyaW8iLCJ1c3VhcmlvcyIsImlkVXN1YXJpbyIsInVzdWFyaW8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlLDRFQUFXO0FBQ3RCQSxJQUFFLEVBQUUsTUFBTUMsbURBQVMsRUFERzs7QUFFdEI7QUFDQSxRQUFNQyxXQUFOLEdBQW1CO0FBQ2YsUUFBRztBQUNDLFlBQU1DLFFBQVEsR0FBRyxPQUFNLEtBQUtILEVBQUwsQ0FBUUksR0FBUixDQUFZLHVCQUFaLEVBQ2xCQyxLQURrQixDQUNaLE1BQUksRUFEUSxDQUFOLEtBQ0ssRUFEdEI7QUFFQSxXQUFLTCxFQUFMLENBQVFNLEtBQVI7QUFDQSxhQUFPO0FBQUNDLGFBQUssRUFBQyxLQUFQO0FBQWFDLFlBQUksRUFBQ0w7QUFBbEIsT0FBUDtBQUNILEtBTEQsQ0FLQyxPQUFNTSxDQUFOLEVBQVE7QUFDTCxhQUFPO0FBQUNGLGFBQUssRUFBQyxJQUFQO0FBQVlHLGVBQU8sRUFBQ0QsQ0FBQyxDQUFDRSxRQUFGO0FBQXBCLE9BQVA7QUFDSDtBQUNKLEdBWnFCOztBQWF0QixRQUFNQyxTQUFOLENBQWdCQyxFQUFoQixFQUEwQjtBQUN0QixVQUFNQyxPQUFPLEdBQUksTUFBTSxLQUFLZCxFQUFMLENBQVFlLEdBQVIsQ0FBWSxrQ0FBWixFQUErQyxDQUFDRixFQUFELENBQS9DLENBQXZCO0FBQ0EsU0FBS2IsRUFBTCxDQUFRTSxLQUFSO0FBQ0EsV0FBT1EsT0FBTyxJQUFJLElBQWxCO0FBQ0gsR0FqQnFCOztBQWtCdEI7QUFDQSxRQUFNRSxVQUFOLEdBQWtCO0FBQ2QsUUFBRztBQUNDLFlBQU1DLFFBQVEsR0FBRyxPQUFNLEtBQUtqQixFQUFMLENBQVFJLEdBQVIsQ0FBWSx3QkFBWixFQUNsQkMsS0FEa0IsQ0FDWixNQUFJLEVBRFEsQ0FBTixLQUNLLEVBRHRCO0FBRUEsV0FBS0wsRUFBTCxDQUFRTSxLQUFSO0FBQ0EsYUFBTztBQUFDQyxhQUFLLEVBQUMsS0FBUDtBQUFhQyxZQUFJLEVBQUNTO0FBQWxCLE9BQVA7QUFFSCxLQU5ELENBTUMsT0FBTVIsQ0FBTixFQUFRO0FBQ0wsYUFBTztBQUFDRixhQUFLLEVBQUMsSUFBUDtBQUFZRyxlQUFPLEVBQUNELENBQUMsQ0FBQ0UsUUFBRjtBQUFwQixPQUFQO0FBQ0g7QUFDSixHQTdCcUI7O0FBOEJ0QixRQUFNTyxTQUFOLENBQWdCTCxFQUFoQixFQUEwQjtBQUN0QixRQUFHO0FBQ0MsWUFBTU0sT0FBTyxHQUFHLE9BQU0sS0FBS25CLEVBQUwsQ0FBUWUsR0FBUixDQUFZLG1DQUFaLEVBQWdELENBQUNGLEVBQUQsQ0FBaEQsRUFDakJSLEtBRGlCLENBQ1gsTUFBSSxFQURPLENBQU4sS0FDTSxFQUR0QjtBQUVBLFdBQUtMLEVBQUwsQ0FBUU0sS0FBUjtBQUNBLGFBQU87QUFBQ0MsYUFBSyxFQUFDLEtBQVA7QUFBYUMsWUFBSSxFQUFDVztBQUFsQixPQUFQO0FBQ0gsS0FMRCxDQUtDLE9BQU1WLENBQU4sRUFBUTtBQUNMLGFBQU87QUFBQ0YsYUFBSyxFQUFDLElBQVA7QUFBWUcsZUFBTyxFQUFDRCxDQUFDLENBQUNFLFFBQUY7QUFBcEIsT0FBUDtBQUNIO0FBQ0o7O0FBdkNxQixDQUFYLENBQWYiLCJmaWxlIjoiLi9kYXRhYmFzZS9zZWxlY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0REIgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKT0+KHtcbiAgICBkYjogYXdhaXQgZGVmYXVsdERCKCksXG4gICAgLy9lbXByZXNhXG4gICAgYXN5bmMgYWxsRW1wcmVzYXIoKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgZW1wcmVzYXMgPSBhd2FpdCB0aGlzLmRiLmFsbCgnU0VMRUNUICogRlJPTSBFbXByZXNhJylcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PltdKSB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6ZmFsc2UsZGF0YTplbXByZXNhc307XG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6dHJ1ZSxtZXNzYWdlOmUudG9TdHJpbmcoKX07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGlkRW1wcmVzYShpZDpudW1iZXIpe1xuICAgICAgICBjb25zdCBlbXByZXNhID0gIGF3YWl0IHRoaXMuZGIuZ2V0KCdTRUxFQ1QgKiBGUk9NIEVtcHJlc2Egd2hlcmUgaWQ9PycsW2lkXSk7XG4gICAgICAgIHRoaXMuZGIuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIGVtcHJlc2EgfHwgbnVsbDtcbiAgICB9LFxuICAgIC8vdXN1YXJpb1xuICAgIGFzeW5jIGFsbFVzdWFyaW8oKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgdXN1YXJpb3MgPSBhd2FpdCB0aGlzLmRiLmFsbCgnU0VMRUNUICogRlJPTSBVc3VhcmlvcycpXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT5bXSkgfHwgW107XG4gICAgICAgICAgICB0aGlzLmRiLmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yOmZhbHNlLGRhdGE6dXN1YXJpb3N9O1xuXG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6dHJ1ZSxtZXNzYWdlOmUudG9TdHJpbmcoKX07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGlkVXN1YXJpbyhpZDpudW1iZXIpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCB1c3VhcmlvID0gYXdhaXQgdGhpcy5kYi5nZXQoJ1NFTEVDVCAqIEZST00gVXN1YXJpb3Mgd2hlcmUgaWQ9PycsW2lkXSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PltdKSB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6ZmFsc2UsZGF0YTp1c3VhcmlvfTtcbiAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcjp0cnVlLG1lc3NhZ2U6ZS50b1N0cmluZygpfTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./database/select.ts\n");

/***/ }),

/***/ "./database/update.ts":
/*!****************************!*\
  !*** ./database/update.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./database/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => ({\n  db: await Object(___WEBPACK_IMPORTED_MODULE_0__[\"defaultDB\"])(),\n\n  async updateUsuario(id, nombre, apPaterno, apMaterno, puesto) {\n    try {\n      await this.db.run(`UPDATE Usuarios \n                set nombre=?, \n                apPaterno=?, \n                apMaterno=?, \n                puesto=?\n            where id=?`, [nombre, apPaterno, apMaterno, puesto, id]);\n      return {\n        status: true,\n        message: `Exito: se actualizo el usuario # ${id} correctamente.`\n      };\n    } catch (err) {\n      return {\n        status: false,\n        message: `Error al actualizar usuario # ${id}.`,\n        error: err\n      };\n    }\n  }\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS91cGRhdGUudHM/MzYyYSJdLCJuYW1lcyI6WyJkYiIsImRlZmF1bHREQiIsInVwZGF0ZVVzdWFyaW8iLCJpZCIsIm5vbWJyZSIsImFwUGF0ZXJubyIsImFwTWF0ZXJubyIsInB1ZXN0byIsInJ1biIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlcnIiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBRWUsNEVBQVc7QUFDdEJBLElBQUUsRUFBRSxNQUFNQyxtREFBUyxFQURHOztBQUV0QixRQUFNQyxhQUFOLENBQ0lDLEVBREosRUFFSUMsTUFGSixFQUdJQyxTQUhKLEVBSUlDLFNBSkosRUFLSUMsTUFMSixFQU1DO0FBQ0csUUFBRztBQUNDLFlBQU0sS0FBS1AsRUFBTCxDQUFRUSxHQUFSLENBQWE7Ozs7O3VCQUFiLEVBTUYsQ0FBQ0osTUFBRCxFQUFRQyxTQUFSLEVBQWtCQyxTQUFsQixFQUE0QkMsTUFBNUIsRUFBbUNKLEVBQW5DLENBTkUsQ0FBTjtBQU9BLGFBQU87QUFDSE0sY0FBTSxFQUFDLElBREo7QUFFSEMsZUFBTyxFQUFFLG9DQUFtQ1AsRUFBRztBQUY1QyxPQUFQO0FBSUgsS0FaRCxDQWFBLE9BQU1RLEdBQU4sRUFBVTtBQUNOLGFBQU87QUFDSEYsY0FBTSxFQUFDLEtBREo7QUFFSEMsZUFBTyxFQUFFLGlDQUFnQ1AsRUFBRyxHQUZ6QztBQUdIUyxhQUFLLEVBQUNEO0FBSEgsT0FBUDtBQUtIO0FBRUo7O0FBOUJxQixDQUFYLENBQWYiLCJmaWxlIjoiLi9kYXRhYmFzZS91cGRhdGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgZGVmYXVsdERCIH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCk9Pih7XG4gICAgZGI6IGF3YWl0IGRlZmF1bHREQigpLFxuICAgIGFzeW5jIHVwZGF0ZVVzdWFyaW8oXG4gICAgICAgIGlkOm51bWJlcixcbiAgICAgICAgbm9tYnJlOiBTdHJpbmcsXG4gICAgICAgIGFwUGF0ZXJubzpTdHJpbmcsXG4gICAgICAgIGFwTWF0ZXJubzogU3RyaW5nLFxuICAgICAgICBwdWVzdG86IG51bWJlclxuICAgICl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGIucnVuKGBVUERBVEUgVXN1YXJpb3MgXG4gICAgICAgICAgICAgICAgc2V0IG5vbWJyZT0/LCBcbiAgICAgICAgICAgICAgICBhcFBhdGVybm89PywgXG4gICAgICAgICAgICAgICAgYXBNYXRlcm5vPT8sIFxuICAgICAgICAgICAgICAgIHB1ZXN0bz0/XG4gICAgICAgICAgICB3aGVyZSBpZD0/YCxcbiAgICAgICAgICAgICAgICBbbm9tYnJlLGFwUGF0ZXJubyxhcE1hdGVybm8scHVlc3RvLGlkXSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czp0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6YEV4aXRvOiBzZSBhY3R1YWxpem8gZWwgdXN1YXJpbyAjICR7aWR9IGNvcnJlY3RhbWVudGUuYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpgRXJyb3IgYWwgYWN0dWFsaXphciB1c3VhcmlvICMgJHtpZH0uYCxcbiAgICAgICAgICAgICAgICBlcnJvcjplcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./database/update.ts\n");

/***/ }),

/***/ "./pages/api/usuario/delete/[id].ts":
/*!******************************************!*\
  !*** ./pages/api/usuario/delete/[id].ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../database */ \"./database/index.ts\");\n/* harmony import */ var _database_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/delete */ \"./database/delete.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const id = req.query['id'];\n  const mensaje = await (await Object(_database_delete__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()).idUsuario(parseInt(id.toString()));\n  res.json(mensaje);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXN1YXJpby9kZWxldGUvLnRzP2Q5NWEiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsIm1lbnNhamUiLCJfZGVsZXRlIiwiaWRVc3VhcmlvIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsImpzb24iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJZSxzRUFBT0EsR0FBUCxFQUEwQkMsR0FBMUIsS0FBZ0Q7QUFDM0QsUUFBTUMsRUFBRSxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVSxJQUFWLENBQVg7QUFFQSxRQUFNQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU1DLGdFQUFPLEVBQWQsRUFBa0JDLFNBQWxCLENBQTRCQyxRQUFRLENBQUNMLEVBQUUsQ0FBQ00sUUFBSCxFQUFELENBQXBDLENBQXRCO0FBQ0FQLEtBQUcsQ0FBQ1EsSUFBSixDQUFTTCxPQUFUO0FBQ0gsQ0FMRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c3VhcmlvL2RlbGV0ZS9baWRdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YWJhc2VcIjtcbmltcG9ydCBfZGVsZXRlIGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhYmFzZS9kZWxldGVcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6TmV4dEFwaVJlcXVlc3QscmVzOk5leHRBcGlSZXNwb25zZSk9PntcbiAgICBjb25zdCBpZCA9IHJlcS5xdWVyeVsnaWQnXTtcblxuICAgIGNvbnN0IG1lbnNhamUgPSBhd2FpdCAoYXdhaXQgX2RlbGV0ZSgpKS5pZFVzdWFyaW8ocGFyc2VJbnQoaWQudG9TdHJpbmcoKSkpO1xuICAgIHJlcy5qc29uKG1lbnNhamUpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/usuario/delete/[id].ts\n");

/***/ }),

/***/ 3:
/*!************************************************!*\
  !*** multi ./pages/api/usuario/delete/[id].ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gael/development/web/backend/nextJS/api-tienda-web/pages/api/usuario/delete/[id].ts */"./pages/api/usuario/delete/[id].ts");


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