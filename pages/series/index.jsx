import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';


export default()=>{
    const router = useRouter();
    const [series,setSeries] = useState([]);    

    useEffect(()=>{
        obtenerSeries();
    },[]);
    const obtenerSeries = async () =>{
        const datos = await fetch('/api/series');
        const lista = await datos.json();
        setSeries(lista);
    }
    return(<div>
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
                <td>ID</td>
                <td>NOMBRE</td>
                <td>CAPITULOS</td>
                <td>ACCIONES</td>
            </thead>
            <tbody>
                {
                    series.map(e=>{
                        return(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.nombre}</td>
                                <td>{e.capitulos}</td>
                                <td>
                                    <Button variant='outlined' color='primary' >Editar</Button>
                                    <Button variant='outlined' color='inherit'>Capitulos</Button>
                                    <Button variant='outlined' color='secondary'>Borrar</Button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        </div>
    </div>)
}

