import getUsuarios from "../../store/actions/getUsuarios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { HeadUsuarios, ViewUsuario } from "../../components/usuarios/tabla";
import { Button, Typography } from "@material-ui/core";

export default function Usuarios(){
    const dispatch = useDispatch();
    const {listaUsuarios} = useSelector(state=>state);
    const router = useRouter()

    useEffect(() => {
        getUsuarios()(dispatch);
    }, [])

    console.log(listaUsuarios);

    return(
    <div  >
        <Button 
            color='primary' 
            style={{float:'right'}}
            onClick={()=>router.push('/usuarios/add')}
            variant='contained'>
            Agregar
        </Button>
        <Typography variant='h5'>Lista Usuarios:</Typography>
        <div  style={{border:'1px solid #bdbdbd',height:300,width:'85%',overflow:'auto'}}>
            <table style={{width:'100%'}}>
                <HeadUsuarios />
                <tbody>
                    {listaUsuarios.map(e=><ViewUsuario e={e} key={e.id} router={router} />)}
                </tbody>
            </table>
        </div>
    </div>);
}



