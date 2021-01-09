#!/usr/bin/env node

const { program } = require('commander');
const excelData = require('./utils/excel') ;
const db = require('./utils/db');


program
  .version('0.0.1');

program
  .command('read <file>')
  .description('read excel file and show on console') // <=
  .action((file) => {
    const data = excelData(file) ;
    console.log(`reading excel file => ${file}`);
    console.log(data) ;
  });

program
  .command('save <file>')
  .option('-sl, --sqlite', 'to SQLite db')
  .option('-ms, --mssql', 'to MSSQLserver ')
  .description('save excel data to database') // <=
  .action(async (file, options) => {
    console.log( `reading excel file => ${file}  and save to  ${options.sqlite ? 'SQLite' :'MSSQLserver'  } `);

    const data = excelData(file) ;
    const client = options.sqlite ? db.getSQLiteClient() : db.getMSSQLServerClient() ;

    await client.insert(data).into('users');

    await client.destroy() ;
    console.log(` Saved ${data.length} rows` ) ;

  });

// program
//   .command('rest')
//   .option('-sl, --sqlite', 'to SQLite db')
//   .option('-ms, --mssql', 'to MSSQLserver ')
//   .description('save excel data to database') // <=
//   .action(async (file, options) => {
//       console.log( `reading excel file => ${file}  and save to  ${options.sqlite ? 'SQLite' :'MSSQLserver'  } `);
//       const data = restData() ;
//       // await db.save(data,options).into('users');
//       console.log(` Saved ${data.length} rows` ) ;
//
//   });


program.parse(process.argv);