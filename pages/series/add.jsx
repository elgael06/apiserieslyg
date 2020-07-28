import InputForm from "../../components/InputForm";
import { Button, Badge } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";
import ModalCategorias from "../../components/Series/ModalCategorias";



export default ()=>{
    const history = useRouter();
    const [serie,setSerie] = useState({
        nombre:'',
        url:''
    });
    const [categorias,setCategorias] = useState([]);
    const [modal,setModal] = useState(false);


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
            body:JSON.stringify({nombre,portada,categorias})
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
        <Button color='secondary' onClick={()=>setModal(true)}>
            Categorias: {categorias.length}
        </Button>
        
        <br/>
        <br/>
        <Button onClick={guardarDatos} color='primary' variant='contained'>
            Guardar           
        </Button>
        <ModalCategorias
            open={modal}
            onClose={()=>setModal(false)}
            selected={categorias}
            getSelected={setCategorias}
        />
    </div>);
}

