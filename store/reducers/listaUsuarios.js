import * as types from "../types";

export default (state=[],actions) =>{
    switch (actions.type) {
        case types.GET_USUARIOS:
            return actions.usuarios;
        default:
            return state;
    }
} 

