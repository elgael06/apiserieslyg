import { defaultDB } from ".";

export default async () => ({
    db: await defaultDB(),
    //usuario
    async idUsuario(id:number){
        try{
            await this.db.run('DELETE FROM Usuarios where id=?',[id]);
            this.db.close();
            return {error:false,message:`usuario #${id} eliminado...`}
        }catch(error){
            return {error:true,message:`Error al eliminado usuario #${id} !!!`,messageError:error}
        }

    }
});