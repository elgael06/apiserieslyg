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
    },
    async serie(id:number){
        try{
            await this.db.run('DELETE FROM capitulos where idSerie=?',[id]);
            await this.db.run('DELETE FROM series where id=?',[id]);
            this.db.close();
            return {error:false,message:`series #${id} eliminado...`}
        }catch(error){
            return {error:true,message:`Error al eliminado series #${id} !!!`,messageError:error}
        }
    },
    async capitulo(id:number){
        try{            
            await this.db.run('DELETE FROM capitulos where id=?',[id]);
            this.db.close();
            return {error:false,message:`capitulos #${id} eliminado...`}
        }catch(error){
            return {error:true,message:`Error al eliminado capitulos #${id} !!!`,messageError:error}
        }
    }

});