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
    const [statusDelete,setDelete] = useState(true);
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
        const res = await fetch(`/api/usuario/delete/${id}`,{
            method:'POST',body:JSON.stringify({id})
        });
        const valor = await res.json();
        console.log(valor);   
        alert(valor.message);
        if(!valor.error){    
            router.back();
        }
    }


    useEffect(()=>{
        obtenerUsuario()
    },[]);

    return (<div style={{textAlign:'center'}}>
        <h3>Borrar Usuario : # <b>{id}</b></h3>

        <InputForm
            value={value.nombre}
            name='Nombre'
        />
        <InputForm    
            value={value.apPat}
            name='ap paterno'
        />
        <InputForm 
            value={value.apMat}
            name='ap Materno'
        />
        <br/>
        <div style={{padding:20}} >
            <input 
                style={{margin:10}}
                type='checkbox'
                checked={!statusDelete} 
                onChange={()=>setDelete(!statusDelete)}
            />
            <label>Borrar el Usuario?</label>
        </div>
        <br />
        <button disabled={statusDelete} onClick={sendEditUsuario}>Borrar usuario.</button>
        
    </div>)
}