import { defaultDB } from ".";

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
        const res = await this.db.run('INSERT INTO loginUser(idUsuario,password) VALUES(?,?)',[idUsuario,password]);
        this.db.close();
        console.log('ID',res.lastID);
        return res;

    }
});

