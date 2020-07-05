import getUsuarios from "../../store/actions/getUsuarios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { HeadUsuarios, ViewUsuario } from "../../components/usuarios/tabla";
//estilos
import styles from './styles/index.scss';

export default ()=>{
    const dispatch = useDispatch();
    const {listaUsuarios} = useSelector(state=>state);
    const router = useRouter()

    useEffect(() => {
        getUsuarios()(dispatch);
    }, [])

    console.log(listaUsuarios);

    return(
    <div className={styles.container_users} >
        <button onClick={()=>router.push('/usuarios/add')} className={styles.btn} style={{float:'right'}}>agregar</button>
        <h3>Lista Usuarios:</h3>
        <div  style={{border:'1px solid #bdbdbd',height:300,width:850,overflow:'auto'}}>
            <table style={{width:'100%'}}>
                <HeadUsuarios />
                <tbody>
                    {listaUsuarios.map(e=><ViewUsuario e={e} key={e.id} router={router} />)}
                </tbody>
            </table>
        </div>
    </div>);
}

