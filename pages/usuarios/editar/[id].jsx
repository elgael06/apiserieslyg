import { useState, useEffect } from "react";
import InputForm from "../../../components/InputForm";
import { useRouter } from "next/router";

export default () => {
    const { query:{id} } = useRouter();
    const [value,setValue] = useState({
        nombre:'',
        apPat:'',
        apMat:''
    });
    const router = useRouter();

    const obtenerUsuario = async () =>{
        const res = await fetch(`/api/usuario/${id}`);
        const data = await res.json();
        const usuario  = data.data;
        console.log(data);
        setValue({
            nombre : usuario.nombre,
            apPat  : usuario.apPaterno,
            apMat  : usuario.apMaterno

        });
    }

    const sendEditUsuario = async () => {
        console.log(id);
        const { nombre,apMat,apPat } = value;
        const res = await fetch('/api/usuario/update',{
            method:'POST',body:JSON.stringify(
            {
                id,
                nombre,
                apPaterno:apPat,
                apMaterno:apMat,
                puesto:0
            })
        });
        const valor = await res.json();
        console.log(valor);       
        alert(valor.message);
        router.back();
    }


    useEffect(()=>{
        obtenerUsuario()
    },[]);
    return (<div style={{textAlign:'center'}}>
        <h3>Editando Usuario : # <b>{id}</b></h3>

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
        <button onClick={sendEditUsuario}>enviar cambios usuario.</button>
        
    </div>)
}