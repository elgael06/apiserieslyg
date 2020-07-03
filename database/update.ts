

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
        }
        catch(err){
            return {
                status:false,
                message:`Error al actualizar usuario # ${id}.`,
                error:err
            };
        }
        
    }
});