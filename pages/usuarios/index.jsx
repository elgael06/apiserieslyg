import getUsuarios from "../../store/actions/getUsuarios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";


export default ()=>{
    const dispatch = useDispatch();
    const {listaUsuarios} = useSelector(state=>state);
    const router = useRouter()

    useEffect(() => {
        getUsuarios()(dispatch);
    }, [])

    console.log(listaUsuarios);

    return(
    <div style={{height:300,textAlign:'center'}}>
        <button onClick={()=>router.push('/usuarios/add')} style={{float:'right'}}>agregar</button>
        <h3>Lista Usuarios:</h3>
        <div  style={{border:'1px solid #bdbdbd',height:300,width:850,overflow:'auto'}}>
            <table style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apeido pat.</th>
                        <th>Apeido mat.</th>
                        <th>Puesto</th>
                        <th>Opcion</th>
                    </tr>
                </thead>
                <tbody>
                    {listaUsuarios.map(e=><tr key={e.id}>
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
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>);
}