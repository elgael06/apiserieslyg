import sqlite  from 'sqlite';

const dirDB = './database.sqlite';

export const select = async ()=>({
    db : await sqlite.open(dirDB),
    async allEmpresar(){
        try{
            const empresas = await this.db.all('SELECT * FROM Empresa')
            .catch(()=>[]) || [];
            console.log("Empresas =>", JSON.stringify(empresas,null,2));
            this.db.close();
            return {error:false,data:empresas};
        }catch(e){
            return {error:true,message:e.toString()};
        }
    },
    async idEmpresa(id:number){
        const empresa =  await this.db.get('SELECT * FROM Empresa where id=?',[id]);
        return empresa;
    }
});

export const insert = async () => ({
    db : await sqlite.open(dirDB),
    async existTable(){
        await this.db.run(`CREATE TABLE IF NOT EXISTS  Empresa (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            telefono TEXT,
            direccion TEXT
        )`);
        this.db.close();
    },
    async newEmpresa(
        nombre      : String,
        telefono    : String,
        direccion   : String
    ){
        this.existTable();
        const res = await this.db.run('INSERT INTO Empresa (nombre, telefono, direccion) values(?,?,?)',[nombre, telefono, direccion]);
        this.db.close();
        console.log('listo',res);
        return res;
    }
});

