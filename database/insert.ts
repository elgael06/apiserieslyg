import { defaultDB } from ".";
import { makeDb } from "./mysql/config";

export default async () => ({
    db: await defaultDB(),
    async existTable(){
        //EMPRESAS
        await this.db.run(`CREATE TABLE IF NOT EXISTS  Empresa (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            telefono TEXT,
            direccion TEXT
        )`);
        //USUARIOS
        await this.db.run(`CREATE TABLE IF NOT EXISTS  Usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            apPaterno TEXT,
            apMaterno TEXT,    
            puesto int        
        )`);
        //LOGIN
        await this.db.run(`CREATE TABLE IF NOT EXISTS loginUser (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario int,
            password TEXT
        )`);
        //REGISTRO
        await this.db.run(`CREATE TABLE IF NOT EXISTS registroLogin (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario int,
            fecha date,
            hora datetime
        )`);

        //series
        await this.db.exec(`
        CREATE TABLE IF NOT EXISTS series (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario INTEGER nullif '1',
            nombre TEXT,
            portada TEXT
        );
        CREATE TABLE IF NOT EXISTS capitulos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uri TEXT NOT NULL,
            descripcion TEXT nullif 'none',
            idSerie	INTEGER,
            FOREIGN KEY (idSerie) REFERENCES series(id)	
        );
        CREATE TABLE IF NOT EXISTS categorias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            descripcion TEXT NOT NULL
            
        );
        CREATE TABLE IF NOT EXISTS CategoriaSerie (
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            idCategoria INTEGER,
            idSerie	INTEGER,
            FOREIGN KEY (idSerie) REFERENCES series(id)	,
            FOREIGN KEY (idCategoria) REFERENCES categorias(id)		
        );`);
    },
    async newEmpresa(
        nombre      : String,
        telefono    : String,
        direccion   : String
    ){
        await this.existTable();
        const res = await this.db.run('INSERT INTO Empresa (nombre, telefono, direccion) values(?,?,?)',[nombre, telefono, direccion]);
        this.db.close();
        console.log('listo',res);
        return res;
    },
    async newUsuario(
        nombre:String,
        apPaterno: String,
        apMaterno: String,
        puesto:number
    ){
        await this.existTable();
        await this.db.run('INSERT INTO Usuarios (nombre, apPaterno, apMaterno, puesto) values(?,?,?,?)',
            [nombre,apMaterno,apPaterno,puesto]);
        const id = await this.db.all('select * from Usuarios order by id desc LIMIT 1')
        this.db.close();
        console.log('listo',id);
        return id;
    },
    async loginUser(
        idUsuario:number,
        password:string,

    ){
        this.existTable();
        const res = await this.db.run('INSERT INTO loginUser(idUsuario,password) VALUES(?,?)',[idUsuario,password]);
        this.db.close();
        console.log('ID',res.lastID);
        return res;

    },
    async serie(
        nombre:string,
        portada:string,
        categorias:Array<any>
    ){
        const db = makeDb();
        try{
            const res = await db.query(`INSERT INTO series (
                nombre,
                portada
            ) VALUES('${nombre}','${portada}')`);
            console.log(res.insertId);
            
            console.log(categorias);
            categorias.forEach(async cat=>{
                db.query('insert into categoriaserie  (idCategoria,idSerie) value (?,?)',[cat,res.insertId]);
            });
            await db.close()        
            return res;
        }catch(err){  
            db.close();       
            return {message:'error',err}           
        }
    },
    async capitulo(
        idSerie:number,
        uri:string,
        descripcion:string
    ){
        const db = makeDb();
        try{
            await db.query(`INSERT INTO capitulos (
                uri,
                descripcion,
                idSerie
            ) VALUES('${uri}','${descripcion}',${idSerie})`)
            db.close();
            return {mesage:'se agrego con exito!'};
        }catch(error){ 
            db.close()           
            return {mesage:'error al agregar',error}}
    },

});

