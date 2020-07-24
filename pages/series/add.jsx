import InputForm from "../../components/InputForm";
import { Button } from "@material-ui/core";
import { useState } from "react";



export default ()=>{
    const [capitulos,setCapitulos] = useState([]);
    const [capitulo,setCap] = useState({
        url:'',
        desc:''
    });
    const [serie,setSerie] = useState({
        nombre:'',
        url:''
    })

    const setCapitulo = cap =>{
        setCapitulos([...capitulos,capitulo]);
        setCap({
            url:'',
            desc:''
        })
    }

    const guardarDatos = () =>{
        if(serie.nombre&& serie.url){

        }
        else{alert('faltan datos!!')}
    }

    return(<div>
        <h3>Nueva Serie</h3>
        <InputForm
            label='Nombre'
            value={serie.nombre}
            event={nombre=>setSerie({...serie,nombre})}
        />
        <InputForm
            label='url portada'
            value={serie.url}
            event={url=>setSerie({...capitulo,url})}
        />
        <br/>
        <div style={{}}>
            <InputForm
            label='url capitulo'
            value={capitulo.url}
            event={url=>setCap({...capitulo,url})}
            />
            <InputForm 
                label='Descripcion'
                value={capitulo.desc}
                event={desc=>setCap({...capitulo,desc})}
            />
            <br/>
            <Button onClick={setCapitulo} variant='text' style={{marginTop:20}} color='secondary'>
                Agregar
            </Button>
        </div>
        <div style={{width:300,textAlign:'justify',display:'inline-block'}}>
            <h4>Capitulos</h4>
            <br/>
            <div style={{height:300,overflow:'auto'}}>{
               capitulos.map(cap => <section style={{border:'1px solid #bdbdbd50',padding:20,borderRadius:5,marginTop:10}}>
                    <label>Descripcion: {cap.desc}</label>
                    <p>Url: {cap.url}</p>
                </section>)
            }</div>
        </div>
        <br/>
        <Button onClick={guardarDatos} color='primary' variant='contained'>
            Guardar
        </Button>
    </div>);
}

