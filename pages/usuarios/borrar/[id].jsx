import { useState, useEffect } from "react";
import InputForm from "../../../components/InputForm";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";

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
            <CheckBox 
                checked={false}
                
                color='primary'                                 
                onClick={()=>setDelete(!statusDelete)}
            >
            </CheckBox>
            <label onClick={()=>setDelete(!statusDelete)}>Borrar el Usuario?</label>
            <input 
                style={{margin:10}}
                type='checkbox'
                checked={!statusDelete} 
                onChange={()=>setDelete(!statusDelete)}
                value='Borrar el Usuario?'
            />
        </div>
        <br />
        <br />
        <Button  
            variant='contained' 
            color='secondary'
            disabled={statusDelete} 
            onClick={sendEditUsuario}>
            Borrar usuario.            
        </Button>    
        
    </div>)
}