import React from 'react';

import  '../../styles/styles.css'
import { Button, Select, MenuItem } from '@material-ui/core';

export const HeadUsuarios = ()=>(<thead>
    <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apeido pat.</th>
        <th>Apeido mat.</th>
        <th>Puesto</th>
        <th>Opcion</th>
    </tr>
</thead>);

export const ViewUsuario = ({e={},router}) =>(<tr>
    <td>{e.id}</td>
    <td>{e.nombre}</td>
    <td>{e.apPaterno}</td>
    <td>{e.apMaterno}</td>
    <td>        
        <Select value={e.puesto } disabled >
            <MenuItem value='0'>none</MenuItem>
            <MenuItem value='1'>sistemas</MenuItem>
            <MenuItem value='2'>administracion</MenuItem>
        </Select>
    </td>
    <td>
        <Button 
            variant='outlined' 
            color='primary' 
            onClick={()=>router.push(`/usuarios/editar/${e.id}`)} >Editar</Button>
        <Button 
            variant='outlined' 
            color='secondary'
            onClick={()=>router.push(`/usuarios/borrar/${e.id}`)} >Borrar</Button>
    </td>
</tr>);