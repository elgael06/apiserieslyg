module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/ncD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Aa60");

/* harmony default export */ __webpack_exports__["a"] = (async () => ({
  db: await Object(___WEBPACK_IMPORTED_MODULE_0__[/* defaultDB */ "a"])(),

  //usuario
  async idUsuario(id) {
    try {
      await this.db.run('DELETE FROM Usuarios where id=?', [id]);
      this.db.close();
      return {
        error: false,
        message: `usuario #${id} eliminado...`
      };
    } catch (error) {
      return {
        error: true,
        message: `Error al eliminado usuario #${id} !!!`,
        messageError: error
      };
    }
  }

}));

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cfEe");


/***/ }),

/***/ "Aa60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ defaultDB; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ insert; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ database_select; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ update; });

// UNUSED EXPORTS: dirDB, delete

// EXTERNAL MODULE: external "sqlite"
var external_sqlite_ = __webpack_require__("oAu/");
var external_sqlite_default = /*#__PURE__*/__webpack_require__.n(external_sqlite_);

// CONCATENATED MODULE: ./database/insert.ts

/* harmony default export */ var insert = (async () => ({
  db: await defaultDB(),

  async existTable() {
    //EMPRESAS
    await this.db.run(`CREATE TABLE IF NOT EXISTS  Empresa (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            telefono TEXT,
            direccion TEXT
        )`); //USUARIOS

    await this.db.run(`CREATE TABLE IF NOT EXISTS  Usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            apPaterno TEXT,
            apMaterno TEXT,    
            puesto int        
        )`); //LOGIN

    await this.db.run(`CREATE TABLE IF NOT EXISTS loginUser (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario int,
            password TEXT
        )`); //REGISTRO

    await this.db.run(`CREATE TABLE IF NOT EXISTS registroLogin (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario int,
            fecha date,
            hora datetime
        )`);
  },

  async newEmpresa(nombre, telefono, direccion) {
    await this.existTable();
    const res = await this.db.run('INSERT INTO Empresa (nombre, telefono, direccion) values(?,?,?)', [nombre, telefono, direccion]);
    this.db.close();
    console.log('listo', res);
    return res;
  },

  async newUsuario(nombre, apPaterno, apMaterno, puesto) {
    await this.existTable();
    await this.db.run('INSERT INTO Usuarios (nombre, apPaterno, apMaterno, puesto) values(?,?,?,?)', [nombre, apMaterno, apPaterno, puesto]);
    const id = await this.db.all('select * from Usuarios order by id desc LIMIT 1');
    this.db.close();
    console.log('listo', id);
    return id;
  },

  async loginUser(idUsuario, password) {
    const res = await this.db.run('INSERT INTO loginUser(idUsuario,password) VALUES(?,?)', [idUsuario, password]);
    this.db.close();
    console.log('ID', res.lastID);
    return res;
  }

}));
// CONCATENATED MODULE: ./database/select.ts

/* harmony default export */ var database_select = (async () => ({
  db: await defaultDB(),

  //empresa
  async allEmpresar() {
    try {
      const empresas = (await this.db.all('SELECT * FROM Empresa').catch(() => [])) || [];
      this.db.close();
      return {
        error: false,
        data: empresas
      };
    } catch (e) {
      return {
        error: true,
        message: e.toString()
      };
    }
  },

  async idEmpresa(id) {
    const empresa = await this.db.get('SELECT * FROM Empresa where id=?', [id]);
    this.db.close();
    return empresa || null;
  },

  //usuario
  async allUsuario() {
    try {
      const usuarios = (await this.db.all('SELECT * FROM Usuarios').catch(() => [])) || [];
      this.db.close();
      return {
        error: false,
        data: usuarios
      };
    } catch (e) {
      return {
        error: true,
        message: e.toString()
      };
    }
  },

  async idUsuario(id) {
    try {
      const usuario = (await this.db.get('SELECT * FROM Usuarios where id=?', [id]).catch(() => [])) || [];
      this.db.close();
      return {
        error: false,
        data: usuario
      };
    } catch (e) {
      return {
        error: true,
        message: e.toString()
      };
    }
  }

}));
// CONCATENATED MODULE: ./database/update.ts

/* harmony default export */ var update = (async () => ({
  db: await defaultDB(),

  async updateUsuario(id, nombre, apPaterno, apMaterno, puesto) {
    try {
      await this.db.run(`UPDATE Usuarios 
                set nombre=?, 
                apPaterno=?, 
                apMaterno=?, 
                puesto=?
            where id=?`, [nombre, apPaterno, apMaterno, puesto, id]);
      return {
        status: true,
        message: `Exito: se actualizo el usuario # ${id} correctamente.`
      };
    } catch (err) {
      return {
        status: false,
        message: `Error al actualizar usuario # ${id}.`,
        error: err
      };
    }
  }

}));
// EXTERNAL MODULE: ./database/delete.ts
var database_delete = __webpack_require__("/ncD");

// CONCATENATED MODULE: ./database/index.ts

const dirDB = './database.sqlite';
const defaultDB = async () => await external_sqlite_default.a.open(dirDB);





/***/ }),

/***/ "cfEe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Aa60");

/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  if (req.method == 'POST') {
    const empresa = await (await Object(_database__WEBPACK_IMPORTED_MODULE_0__[/* select */ "c"])()).allEmpresar();
    res.json(empresa);
  } else res.json({
    message: "metodo no accesible."
  });
});

/***/ }),

/***/ "oAu/":
/***/ (function(module, exports) {

module.exports = require("sqlite");

/***/ })

/******/ });