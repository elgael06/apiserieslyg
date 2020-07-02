import * as types from '../types';

export const agregarUsuario = ({id,nombre}) =>{
    type:types.ADD_USER,
    id,
    nombre
}
export const removerUsiaro = () => {
    type:types.REMOVE_USER
}