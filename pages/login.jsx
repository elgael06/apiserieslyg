import InputForm from "../components/InputForm"
import { Typography, Button } from "@material-ui/core";
import { useState } from "react";

import '../styles/login.css';

const initialState ={
    nombre:'',
    password:'',
}

export default ()=>{
    const [usuario, setusuario] = useState(initialState);

    const handleChange = e => {
        const {target:{ value='', id=''}} = e;
        const datos = {...usuario};
        datos[id] = value;
        setusuario(datos);
    }

    return(<div>
        <Typography variant='h4' color='textSecondary' className='title-login' >Login</Typography>
        <section className='form-container'>
            <InputForm 
                id='nombre'
                name='Usuario'
                onChange={handleChange}
                value={usuario.nombre}
            /> 
            <br/>
            <InputForm 
                id='password'
                name='Contraseña'
                type='password'
                onChange={handleChange}
                value={usuario.password}
            /> 
        </section>
        <Button variant='outlined' color='primary' >
            Ingresar.
        </Button>
    </div>);
}

