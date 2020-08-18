

import { defaultDB } from ".";
import { makeDb } from "./mysql/config";

export default async ()=>({
    db: await defaultDB(),
    async updateUsuario(
        id:number,
        nombre: String,
        apPaterno:String,
        apMaterno: String,
        puesto: number
    ){
        const db = makeDb();
        try{
            await db.query(`UPDATE Usuarios 
                set nombre=?, 
                apPaterno=?, 
                apMaterno=?, 
                puesto=?
            where id=?`, [nombre,apPaterno,apMaterno,puesto,id]);
            db.close();
            return {
                status:true,
                message:`Exito: se actualizo el usuario # ${id} correctamente.`
            };
        }catch(err){
            db.close();
            return {
                status:false,
                message:`Error al actualizar usuario # ${id}.`,
                error:err
            };
        }
        
    },
    async updateSesion(
        idUsuario:number,
        password:string,
    ){
        const db = makeDb();
        try{
            await db.query(`UPDATE loginUser
                set password =? 
            where idUsuario=?`,
                [password,idUsuario]);
                db.close();
            return { status:true,message:'Actualizacion de pasword correcta.'}
        }catch(error){
            return {status:false,message:'Error al actualizar.',error};
        }        
    },
    async serie(id:number,nombre:string,portada:string){
        const db = makeDb();
        try{await db.query(` UPDATE series
            set nombre=?,
            portada=?
        where id =?`,[nombre,portada,id]);
            return {message:`serie id=${id} actualizada`}
        }catch(error){
            return {message:'error al actualizar',error:error}
        }
    },
    async capitulo(idSerie:number,id:number,url:string,desc:string){
        try{
            const db = makeDb();
            await db.query(`UPDATE capitulos 
                set uri=?,
                descripcion=?                
                where idSerie=? and id=? `,[url,desc,idSerie,id]);
            db.close();
            return {message:`capitulo id=${id} actualizada`}
        }catch(error){
            return {message:'error al actualizar',error:error}
        }
    },
    async contraseniaSesion(email:string,password:string,newPass:string){
        const db = makeDb();
        try{
            await db.query(` UPDATE 
            login 
            SET contrasenia=? 
        WHERE email=? and contrasenia=?;`,[newPass,email,password]) || [];
            return true;
        }catch(e){
            return false;
        }
    }
});