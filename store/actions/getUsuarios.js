import * as types from '../types';

export default ()=> async dispatch =>{
    const res   = await fetch('/api/usuario',{method:'POST'});
    const data = await res.json();
    console.log(data);
    if(data.error)
        return
    else
        return dispatch({
            type     : types.GET_USUARIOS,
            usuarios : data.data
        })
}