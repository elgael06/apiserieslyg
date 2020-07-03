import {combineReducers} from 'redux';
import usuario from './usuario';
import listaUsuarios from './listaUsuarios';

export default combineReducers({
    usuario,
    listaUsuarios,
});



