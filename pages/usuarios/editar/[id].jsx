import { useState, useEffect } from "react";
import InputForm from "../../../components/InputForm";
import { useRouter } from "next/router";
import { Button, Typography, InputAdornment, IconButton } from "@material-ui/core";
import { LockOpenRounded, Visibility,VisibilityOff, SendSharp } from '@material-ui/icons'

import '../../../styles/editar_usuario.css';

export default () => {
    const { query:{id} } = useRouter();    
    const [value,setValue] = useState({
        nombre:'',
        apPat:'',
        apMat:''
    });
    const [password,setPassword] = useState({
        value:'',
        confirm:'',
        visibleValue:false,
        visibleConfirm:false
    })
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
        <Typography variant='h3' color='textPrimary'>Edicion</Typography>
        <section className='seccion-crear-sesion'>
        <Typography variant='h5' color='textSecondary'>Usuario : # <b>{id}</b></Typography>

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
            <br />
            <Button  variant='outlined' color='primary' endIcon={<SendSharp />} fullWidth={true} slot='botton' onClick={sendEditUsuario}>
                enviar            
            </Button>    
        </section>
        <section className='seccion-crear-sesion'>
            <Typography variant='h5' color='textSecondary'>Sesion</Typography>
            <br />
            <InputForm 
                name='password'
                value={password.value}
                type={password.visibleValue ? 'text':'password'}
                event={val=>setPassword({...password,value:val})}
                InputProps={{
                    endAdornment:(<InputAdornment position='end'>
                            <IconButton onClick={()=>setPassword({...password,visibleValue:!password.visibleValue})}>
                                {password.visibleValue ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>)
                }}
            />
            <InputForm 
                name='confirmar'
                value={password.confirm}
                event={val=>setPassword({...password,confirm:val})}
                type={password.visibleConfirm ? 'text':'password'}
                InputProps={{
                    endAdornment:(<InputAdornment position='end'>
                    <IconButton onClick={()=>setPassword({...password,visibleConfirm:!password.visibleConfirm})}>
                                {password.visibleConfirm ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>)
                }}
            />
            <Button variant='outlined' color='secondary' fullWidth={true} slot='botton' endIcon={<LockOpenRounded /> } >Cambiar</Button>
        </section>
    </div>)
}