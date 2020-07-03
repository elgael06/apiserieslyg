import { useState } from "react";
import { useDispatch } from "react-redux";



export default ()=>{
    const dispatch = useDispatch();
    const [value,setValue] = useState({
        nombre:'gael',
        apPat:'val',
        apMat:'cast'
    });
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

const InputForm = ({
    value ='',
    event =e=>e,
    name  =''
}) =><div style={{margin:10,width:200,display:'inline-block'}}>
    <label style={{display:'block',textAlign:'start'}}>{name}</label>
    <input
        style={{width:'100%'}}
        onChange={e=>event(e.target.value)}
        value={value}
    />
</div> 