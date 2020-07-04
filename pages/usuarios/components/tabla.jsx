import React from 'react';

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
    <td><select value={e.puesto } disabled>
        <option value='0'>none</option>
        <option value='1'>sistemas</option>
        <option value='2'>administracion</option>
        </select>
    </td>
    <td>
        <button onClick={()=>router.push(`/usuarios/editar/${e.id}`)} >Editar</button>
        <button onClick={()=>router.push(`/usuarios/borrar/${e.id}`)} >Borrar</button>
    </td>
</tr>);