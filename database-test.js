const sqlite  = require('sqlite');

const setup= async () => {
    try{
        const db = await sqlite.open('./database/database.sqlite');
        await db.migrate({force:'last'});

        const empresas = await db.all('SELECT * FROM Empresa');

        console.log("empresas ",JSON.stringify(empresas,null,2));
    }catch(e){
        console.log('error ',e);
    }
}

setup();