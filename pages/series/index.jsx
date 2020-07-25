import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Card, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, IconButton } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Delete,Edit, Laptop } from '@material-ui/icons';

const initialModal = {
    open:false,
    serie:{id:0,nombre:'',portada:''},
}

export default()=>{
    const router = useRouter();
    const [series,setSeries] = useState([]);   
    const [modal,setModal]  = useState({initialModal}); 

    const selectSerie = ({id=0,nombre='',portada=''}) =>{
        setModal({
            open:true,
            serie:{
                id,
                nombre,
                portada
            }
        })
    }

    useEffect(()=>{
        setTimeout(obtenerSeries,80);
    },[]);
    const obtenerSeries = async () =>{
        const datos = await fetch('/api/series');
        const lista = await datos.json();
        setSeries(lista);
    }
    const borrarId = async (id) => {
        
        const res = await(await fetch('/api/series?eliminar=true&id='+id)).json();
        console.log(res);
        await obtenerSeries();
     }
    return(<><div>
        <Button 
            color='primary' 
            style={{float:'right'}}
            onClick={()=>router.push('/series/add')}
            variant='contained'>
            Agregar
        </Button>
        <h3>Listado de series</h3>
        <div  style={{border:'1px solid #bdbdbd',height:300,width:'85%',overflow:'auto'}}>
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>CAPITULOS</td>
                    <td>ACCIONES</td>
                </tr>
            </thead>
            <tbody>
                {
                    series.map(e=>{
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.nombre}</td>
                                <td>{e.capitulos}</td>
                                <td>
                                    <Button variant='outlined' onClick={()=>router.push(`/series/editar/${e.id}`)} color='primary' >Editar</Button>
                                    <Button variant='outlined' onClick={()=>selectSerie(e)} color='inherit'>Capitulos</Button>
                                    <Button variant='outlined' onClick={()=>borrarId(e.id)} color='secondary'>Borrar</Button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        </div>
    </div>
    
    <ModalCapitulos 
        open={modal.open}
        serie={modal.serie}
        onClose={()=>{
            obtenerSeries();
            setModal(initialModal);
        }}
    />
    </>)
}


const ModalCapitulos = ({
    open=false,
    serie={id:0,nombre:'',portada:''},
    onClose=e=>e
}) =>{
    const [capitulos,setCapitulos] = useState([]);
    const [capitulo,setCap] = useState({
        index:0,
        url:'',
        desc:'',
        nuevo:true
    });
    let reference = null;

    useEffect(()=>{
        serie.id==0 || obtenerCapitulos();
    },[serie]);

    const obtenerCapitulos = async () =>{
        const lista = await (await fetch('/api/series/capitulos?idSerie='+serie.id)).json();
        console.log(lista);
        setCapitulos(lista.map(cap=>{
            return {
                index:cap.id,
                url:cap.uri,
                desc:cap.descripcion
            }
        }));
        console.log('reference=>',reference);
    }

    const handleClose = () =>{
        console.log('listo');

        return onClose();
    }

    const agregarCapitulo = () => {
        const {url,desc,nuevo,index} = capitulo;
        if(url && desc && nuevo){
            setCapitulos([...capitulos,{url,desc,index:capitulos.length}]);
            enviarCapituloNuevo();
            setCap({
                index:0,
                url:'',
                desc:'',
                nuevo:true
            })
        }else if (!nuevo){
            const edicion = capitulos.findIndex(e=>e.index==index);
            console.log('edicion=>',edicion,index);
            if(edicion>=0){
                capitulos[edicion] = {url,desc,index};
                setCapitulos([...capitulos]);
                enviarCapituloEditado();
            } 
        }else {
            return 
        }
        setCap({
            index:0,
            url:'',
            desc:'',
            nuevo:true
        })
    }

    const enviarCapituloNuevo = async () =>{
        const res = await (await fetch('/api/series/capitulos?idSerie='+serie.id+'&nuevo=true',
        {
            method:'post',
            body:JSON.stringify({
                desc:capitulo.desc,
                url:capitulo.url
            })
        }));
        console.log(res);
        await obtenerCapitulos();        
    }
    const enviarCapituloEditado = async () =>{
        const res = await (await fetch('/api/series/capitulos?idSerie='+serie.id+'&id='+capitulo.index,
        {
            method:'post',
            body:JSON.stringify({
                desc:capitulo.desc,
                url:capitulo.url
            })
        }));
        await obtenerCapitulos();
    }
    const editarCap = cap =>{
        console.log(cap);
        setCap({...cap,nuevo:false})
    }
    const eliminarCap = async  cap =>{
        console.log(cap);
        const res = await(await fetch('/api/series/capitulos?eliminar=true&id='+cap.index)).json();
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        await obtenerCapitulos();
    }

    return(<Dialog 
        open={open}  
        onClose={onClose} 
        aria-labelledby="form-dialog-title" 
    >
        <DialogTitle>Capitulos de: {serie.nombre}</DialogTitle>
        <DialogContent dividers>
            <TextField 
                fullWidth
                inputRef={e=>{reference==e}}
                label='descripcion'
                style={{padding:'10px 0'}}
                value={capitulo.desc}
                onChange={e=>setCap({...capitulo,desc:e.target.value})}
            />
            <TextField 
                fullWidth
                label='url'
                style={{padding:'10px 0'}}
                value={capitulo.url}
                onChange={e=>setCap({...capitulo,url:e.target.value})}
            />
            <br/>
            <Button onClick={agregarCapitulo} fullWidth variant='outlined' color='default'>
                Agregar
            </Button>
            <div style={{height:250,overflow:'auto'}}>
                <List>
                    {capitulos.map(cap=>{

                        return(<ListItem button >
                            <ListItemAvatar>
                                <Avatar>
                                    <Laptop />
                                </Avatar> 
                            </ListItemAvatar>
                            <ListItemText primary={cap.desc} secondary={cap.url} />
                            <ListItemIcon>
                            <ListItemIcon>
                                <IconButton onClick={()=>editarCap(cap)}>
                                    <Edit/>
                                </IconButton>
                                </ListItemIcon>
                                <IconButton onClick={()=>eliminarCap(cap)}>
                                    <Delete /> 
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>)
                    })}
                </List>
            </div>         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Listo
          </Button>
        </DialogActions>
    </Dialog>);
}

