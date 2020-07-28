import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core';


export default ({
    open=false,
    selected=[],
    getSelected=e=>e,
    onClose=e=>e
}) =>{
    const [categorias,setCategorias] = useState([]);

    useEffect(()=>{
        if(open){
            optenerCategorias();
        }
    },[open]);

    const optenerCategorias =async () =>{
        const res = await(await fetch('/api/series/categorias')).json();
        console.log(res);
        setCategorias(res);
    }
    const onSelectedOrNo = index =>{
        const pos = selected.findIndex(e=>e==index);
        let res = [...selected];

        console.log('selected',selected);
        if(pos>-1){
            console.log('Remover',index);
            res = res.filter(e=>e!=index);
        }else {
            console.log('agregar',index);
            res.push(index);
        }
        getSelected(res);
    }
    const selectedItem = id =>{
        const pos = selected.findIndex(e=>e==id);
        console.log(pos);
        return pos>-1;
    }

    return(<Dialog 
        open={open}
        onClose={onClose}
    >
        <DialogTitle>Categorias</DialogTitle>
        <DialogContent style={{maxHeight:250}} dividers>
            <List   >
            {
                categorias.map(cat=>{

                    return(<ListItem key={cat.id}>
                        <ListItemIcon>
                            <Checkbox checked={selectedItem(cat.id)} onClick={()=>onSelectedOrNo(cat.id)} edge='start' tabIndex={-1} disableRipple />
                        </ListItemIcon>
                        <ListItemText primary={cat.descripcion} />
                    </ListItem>);
                })
            }
            </List>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color='secondary' >Cerrar</Button>
        </DialogActions>
    </Dialog>);
}


