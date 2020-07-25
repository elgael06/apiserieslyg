import InputForm from "../../../components/InputForm";
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";



export default ()=>{
    const history = useRouter();
    const [capitulo,setCap] = useState({
        url:'',
        desc:''
    });
    const [serie,setSerie] = useState({
        id:0,
        nombre:'',
        url:''
    });

    useEffect(()=>{
        console.log(history.query['id'])
        obtenerSerieId()
    },[]);

    const obtenerSerieId = async () => {
        const data = await fetch('/api/series?id='+history.query['id']|| 0);
        const series = await data.json();
        setSerie({
            id:series.id,
            nombre:series.nombre,
            url:series.portada
        })

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

        const res = await fetch('/api/series/edit?id='+serie.id,{
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

