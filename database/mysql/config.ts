
const util = require( 'util' );
const mysql = require( 'mysql' );


export  function makeDb() {
  const connection = mysql.createConnection( {
      host:"us-cdbr-east-02.cleardb.com",
      database:"heroku_b7ed4e3998c4487",
      user:"b2c0d85a802319",
      password:"90ee08cd",
      timeout:500000,
    },
);
  return {
    query( sql:string, args?:Array<any>  ) {
      return util.promisify( connection.query )
        .call( connection, sql, args );
    },
    close() {
      return util.promisify( connection.end ).call( connection );
    }
  };
}

const conection = mysql.createConnection({
    host:"us-cdbr-east-02.cleardb.com",
    database:"heroku_b7ed4e3998c4487",
    user:"b2c0d85a802319",
    password:"90ee08cd",
    timeout:500000,
});

export const query = util.promisify(conection.query).bind(conection);

export default conection;