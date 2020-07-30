import { defaultDB } from ".";
import { makeDb } from "./mysql/config";


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
        let datos;
        const db = makeDb();
        try{
            const series = await db.query(`SELECT
            series.id,
            series.idUsuario,
            upper(series.nombre) as nombre,
            series.portada,
            (SELECT count(capitulos.id) from capitulos where capitulos.idSerie = series.id) as capitulos,
            tipo,
            tipo.descripcion,    
            case estatus
                when 1 then 'true'
                else 'false'
            end as estatus
        from series
        left join tipo on tipo.id = tipo
        order by upper(series.nombre),series.id`);
            console.log('series=>',series);   
            datos = series;                        
        }finally{
            db.close();
        }
        return  datos;
    },
    async topSeries(number:number){
        let query:string = `SELECT
                series.id,
                series.idUsuario,
                upper(series.nombre) as nombre,
                series.portada,
                (SELECT count(capitulos.id) from capitulos where capitulos.idSerie = series.id) as capitulos,
                tipo,
                tipo.descripcion,
                case estatus
                    when 1 then 'true'
                    else 'false'
                end as estatus
            from series
            left join tipo on tipo.id = tipo
        where  series.nombre like '%s%'
            order by series.id desc
        limit  ${number}`;

        let datos;
        const db = makeDb();
        try{
            const series = await db.query(query);
            console.log('series=>',series);   
            datos = series;                        
        }finally{
            db.close();
        }
        return  datos;


    },
    async seriesName(name:string){
        let datos;
        const db = makeDb();
        try{
            const series = await db.query(`SELECT
            series.id,
            series.idUsuario,
            upper(series.nombre) as nombre,
            series.portada,
            (SELECT count(capitulos.id) from capitulos where capitulos.idSerie = series.id) as capitulos,
            tipo,
            tipo.descripcion,    
            case estatus
                when 1 then 'true'
                else 'false'
            end as estatus
        from series
        left join tipo on tipo.id = tipo  
        where  series.nombre like '%${name}%'
        order by upper(series.nombre),series.id `);
            console.log('series=>',series);   
            datos = series;                        
        }finally{
            db.close();
        }
        return  datos;
    },
    async idSeries(id:number){
        const db = makeDb();
        const serie = await db.query(`SELECT 
            series.id,
            series.idUsuario,
            upper(series.nombre) as nombre,
            series.portada,
            (SELECT count(capitulos.id) from capitulos where capitulos.idSerie = series.id) as capitulos
         from series WHERE id =${id}
         order by upper(series.nombre),series.id`)
         await db.close();
        return serie[0];
    },
    async capitulos(idSerie:number){
        const db = makeDb();
        try{
            const capitulos = await db.query(`SELECT * from capitulos WHERE idSerie=${idSerie}`)
            db.close();
            return capitulos || [];
        }catch(err){            
            return {message:'error',err}           
        }
    },
    async categorias(){
        const db = makeDb();
        try{
            const lista = await db.query(`select * from categorias`); 
            db.close();
            return lista;
        }catch(error){
            db.close();
            return {message:'error',error}
        }
    }
});
