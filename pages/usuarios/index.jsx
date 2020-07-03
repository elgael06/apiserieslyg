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

    return(<div>
        <h3>Lista Usuarios:</h3>
        <button onClick={()=>router.push('/usuarios/add')} style={{float:'right'}}>agregar</button>
        <table style={{border:'1px solid #bdbdbd',height:400,width:550}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apeido pat.</th>
                    <th>Apeido mat.</th>
                </tr>
            </thead>
        </table>

    </div>);
}