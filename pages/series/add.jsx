import InputForm from "../../components/InputForm";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";



export default ()=>{
    const history = useRouter();
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
        if(capitulo.desc && capitulo.url){
            setCapitulos([...capitulos,capitulo]);
            setCap({
                url:'',
                desc:''
            })
        }else alert('Faltan parametros')
    }

    const guardarDatos = () =>{
        if(serie.nombre&& serie.url){
            httpRequestSerie();
        }
        else{alert('faltan datos!!')}
    }
    const httpRequestSerie = async () =>{
        const nombre = serie.nombre;
        const portada = serie.url;

        const res = await fetch('/api/series/add',{
            method:'post',
            body:JSON.stringify({nombre,portada})
        });
        const data = await res.json()
        console.log(data);
        if(data['error'])
            alert(data.error);
        else history.back();         
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
            event={url=>setSerie({...serie,url})}
        />
        <br/>
        <br/>
        <Button onClick={guardarDatos} color='primary' variant='contained'>
            Guardar
        </Button>
    </div>);
}

