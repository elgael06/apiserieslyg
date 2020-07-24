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
    },
    async idSesionUsuario(idUsuario:number){
        try{
            const sesion = await this.db.get('SELECT id,idUsuario,password FROM loginUser where idUsuario=?',[idUsuario]);
            this.db.close();
            if(sesion)
                return {error:false,data:sesion,message:'actualizar datos',sesion:true};
            else return{error:false,data:{id:0,idUsuario,pasword:'1234'},message:'el usuario no tiene sesion.',sesion:false};
            return 
        }catch(error){
            return {error:true,message:'error al obtener usuario.',textError:error}
        }

    },
    async allSeries(){
        try{
            const series = await this.db.all(`SELECT 
                series.id,
                series.idUsuario,
                series.nombre,
                series.portada,
                count(capitulos.id) as capitulos
            from series            
            left join capitulos  on capitulos.idSerie = series.id;`
            ).catch(err=>{
                console.log(err)
            });
            this.db.close();
            return series || [];
        }catch(error){
            return error;
        }
    },
    async idSeries(id:number){
        const serie = await this.db.get(`SELECT * from series WHERE id =?`,[id]).catch(()=>({}));
        this.db.close();
        return serie;
    },
    async capitulos(idSerie:number){
        const capitulos = await this.db.get(`SELECT * from capitulos WHERE idSerie=?`,[idSerie]).catch(()=>[]);
        this.db.close();
        return capitulos || [];
    }
});
