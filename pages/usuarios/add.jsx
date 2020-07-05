import { useState } from "react";
import { useDispatch } from "react-redux";
import InputForm from "../../components/InputForm";
import { useRouter } from "next/router";



export default ()=>{
    const dispatch = useDispatch();
    const [value,setValue] = useState({
        nombre:'',
        apPat:'',
        apMat:''
    });
    const router = useRouter();
    
    const sendNuevoUsuario = async ()=>{
        const {nombre, apPat,apMat} = value;
        console.log('usuario: ',value);
        const res = fetch('/api/usuario/addUsuario',
        {
            method:'POST',
            body:JSON.stringify({nombre, apPat,apMat,puesto:0})
        });
        console.log('res: ',res)
        const response = await (await res).json();
        console.log('JSON',response);
        router.back();
    }

    
    return (<div style={{textAlign:'center'}}>
        <h3>Nuevo usuario:</h3>
        <InputForm
            value={value.nombre}
            name='Nombre'
            event={e=>setValue({...value,nombre:e})}
        />
        <InputForm     
            value={value.apPat}
            name='ap paterno'
            event={e=>setValue({...value,apPat:e})}
        />
        <InputForm 
          value={value.apMat}
          name='ap Materno'
          event={e=>setValue({...value,apMat:e})}
        />
        <br />
        <button onClick={sendNuevoUsuario}>enviar Nuevo usuario.</button>
    </div>)
}
