import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, IconButton, Checkbox, Badge, Switch, ListItemSecondaryAction, ListSubheader } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Delete,Edit, Laptop, ListAlt, Image, Add, AddCircle, Send } from '@material-ui/icons';

const initialModal = {
    open:false,
    serie:{id:0,nombre:'',portada:''},
}

export default()=>{
    const router = useRouter();
    const [series,setSeries] = useState([]);   
    const [modal,setModal]  = useState({initialModal}); 
    const [borrar,setBorrar] = useState(false);

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

        <h3>Listado de series</h3>

            <List subheader={<ListSubheader style={{background:'#FFFFFF98'}}>Series</ListSubheader>} style={{height:550,maxWidth:400,overflow:'auto',display:'inline-block'}} >
                {
                series.map(serie=>{
                   
                    return(<ListItem button fullWidth about={serie.id} >
                        <ListItemAvatar>
                            <Avatar style={{width:50,height:50}} src={serie.portada} alt={`Serie Numero ${serie.id}`} />                        
                        </ListItemAvatar>
                        <ListItemText 
                            primary={serie.nombre} 
                            secondary={serie.descripcion} 
                        />  
                        <ListItemIcon>
                            <IconButton variant='outlined' onClick={()=>router.push(`/series/editar/${serie.id}`)} color='inherit'>
                                <Edit />
                            </IconButton>
                            <IconButton variant='outlined' onClick={()=>selectSerie(serie)} color='primary' >
                                <Badge badgeContent={serie.capitulos} color="primary">                        
                                    <Laptop/>
                                </Badge>
                            </IconButton>
                            <IconButton variant='outlined' disabled={!borrar} onClick={()=>borrarId(serie.id)} color='secondary'>
                                <Delete />
                            </IconButton>                      
                            <Switch edge='end'  checked={serie.estatus} />
                        </ListItemIcon>             
                    </ListItem>);
                })  
                }
            </List>


            <List style={{height:350,maxWidth:400,float:'left'}} subheader={<ListSubheader>Opciones</ListSubheader>} >

                <ListItem button onClick={()=>setBorrar(!borrar)}>
                    <ListItemIcon>
                        <Delete />
                    </ListItemIcon>
                    <ListItemText style={{margin:'0 20px'}} primary='Eliminar Series' />
                    <ListItemSecondaryAction>
                        <Switch edge='end'  checked={borrar} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button onClick={()=>router.push('/series/add')}>
                    <ListItemIcon>
                        <Add />
                    </ListItemIcon>
                    <ListItemText style={{margin:'0 20px'}} primary='Nueva serie' />
                    <ListItemSecondaryAction>

                        <IconButton 
                            color='primary'                             
                            variant='contained'>
                                <Send />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
            
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

