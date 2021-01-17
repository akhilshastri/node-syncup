
const knex = require('knex') ;


export const SQLiteCONN = 'SQLiteCONN';

export const SQLiteCONNProvider = {
    provide: SQLiteCONN,
    useFactory: () => {

        const client = knex({
            client: 'mssql',
            debug:false,
            connection: {
                "host" : "64.62.143.78",
                "user" : "akhiltech_user",
                "password" : "Algo#123",
                "database": "akhiltech_db",
                "options": {
                    "encrypt":false,
                }
            }
        }) ;

        return client ;
    },
    inject: [],
};
