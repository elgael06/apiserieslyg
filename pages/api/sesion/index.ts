import { NextApiRequest, NextApiResponse } from 'next';
import { select, insert, borrar, update } from '../../../database';


export default async (req:NextApiRequest, res:NextApiResponse) => {
    const { emailRecovery='', email="",passw="",newPassw,usuario=null } = req.body;
    const { idSesion='',nuevoUsuario='' } = req.query;

    console.log('entro');
    
    if(email && passw && newPassw && req.method=='POST'){
        /** canbiar contraseña */
        const datos = await (await select()).getSesion(email.toString(),passw.toString());
        if(datos){
            const cambio = await (await update()).updatePassword(email,newPassw);
            res.json({...cambio});
        }else {
            res.json({message:'error al cambiar contraseña'});
        }
    }else if(email && passw && req.method=='POST'){
        /**
         * inicio de sesion.
         */
        const datos = await (await select()).getSesion(email.toString(),passw.toString());
        res.json(datos);
    }if(req.method == 'POST' && emailRecovery){
        /**recuperar contraseña */
        const data = await(await update()).recoveryPassword(emailRecovery);
        res.json({...data});
    }else if(req.method == 'POST' && usuario && email && passw){
        /**
         * crear nueva sesion.
         */
        const datos = await(await insert()).login(email.toString(),passw.toString(),usuario.toString());
        res.json(datos);
    }else if(req.method == 'GET' && idSesion && nuevoUsuario){
        /**
         * insertar usuario de sesion.
         */
        const datos = await (await insert()).addUsuarioSesion(idSesion.toString(),nuevoUsuario.toString());
        res.json(datos);
    }else if(req.method == 'GET' && idSesion && !nuevoUsuario){
        /**
         * remover usuario de sesion.
         */
        const status = await (await borrar()).deleteUsuarioSesion(idSesion.toString());
        res.json({status});
    }else res.json({mensaje:'no se a encontrado el metodo requerido.'});
  }


