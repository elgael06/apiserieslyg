import * as types from '../types';

export const initialState = {
    id:1,
    nombre:'gael'
}

export default (state= initialState,actions)=>{
    switch (actions.type) {
        case types.ADD_USER:
            return {
                ...state,
                usuario:{
                    id:actions.id,
                    nombre:actions.nombre
                }
            } 
        case types.REMOVE_USER:
            return{
                ...state,
                usuario:{ 
                    id:initialState.id,
                    nombre:initialState.nombre
                }
            }
        default:
            return state;
    }

}



