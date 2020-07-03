import { defaultDB } from ".";

export default async ()=>({
    db: await defaultDB(),
    //empresa
    async allEmpresar(){
        try{
            const empresas = await this.db.all('SELECT * FROM Empresa')
                .catch(()=>[]) || [];
            this.db.close();
            return {error:false,data:empresas};
        }catch(e){
            return {error:true,message:e.toString()};
        }
    },
    async idEmpresa(id:number){
        const empresa =  await this.db.get('SELECT * FROM Empresa where id=?',[id]);
        this.db.close();
        return empresa || null;
    },
    //usuario
    async allUsuario(){
        try{
            const usuarios = await this.db.all('SELECT * FROM Usuarios')
                .catch(()=>[]) || [];
            this.db.close();
            return {error:false,data:usuarios};

        }catch(e){
            return {error:true,message:e.toString()};
        }
    },
    async idUsuario(id:number){
        try{
            const usuario = await this.db.get('SELECT * FROM Usuarios where id=?',[id])
                .catch(()=>[]) || [];
            this.db.close();
            return {error:false,data:usuario};
        }catch(e){
            return {error:true,message:e.toString()};
        }
    }

});
