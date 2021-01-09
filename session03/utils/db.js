const knex = require('knex') ;

/*
create table users
(
    id varchar,
    name varchar,
    email varchar,
    gender varchar,
    status varchar
)
* */

module.exports = {

  getSQLiteClient(){
    console.log('[ DB ] using SQLite client');
    const client = knex({
      client: 'sqlite3',
      connection: {
        filename: "./db.sqlite"
      }
    });

    return client ;

  },


  getMSSQLServerClient(){

    console.log('[ DB ] using MSSql client');
    const client = knex({
      client: 'mssql',
      debug:false,
      connection: {

      }
    }) ;

    return client ;

  }




}