

import { defaultDB } from ".";

export default async ()=>({
    db: await defaultDB(),
    async updateUsuario(
        id:number,
        nombre: String,
        apPaterno:String,
        apMaterno: String,
        puesto: number
    ){
        try{
            await this.db.run(`UPDATE Usuarios 
                set nombre=?, 
                apPaterno=?, 
                apMaterno=?, 
                puesto=?
            where id=?`,
                [nombre,apPaterno,apMaterno,puesto,id]);
            return {
                status:true,
                message:`Exito: se actualizo el usuario # ${id} correctamente.`
            };
        }catch(err){
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
        try{
            await this.db.run(`UPDATE loginUser
                set password =? 
            where idUsuario=?`,
                [password,idUsuario]);
                this.db.close();
            return { status:true,message:'Actualizacion de pasword correcta.'}
        }catch(error){
            return {status:false,message:'Error al actualizar.',error};
        }        
    },
    async serie(id:number,nombre:string,portada:string){
        try{await this.db.run(` UPDATE series
            set nombre=?,
            portada=?
        where id =?`,nombre,portada,id);
            return {message:`serie id=${id} actualizada`}
        }catch(error){
            return {message:'error al actualizar',error:error}
        }
    }
});