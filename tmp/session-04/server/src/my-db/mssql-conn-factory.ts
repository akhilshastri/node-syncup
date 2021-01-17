
const knex = require('knex') ;


export const SQLiteCONN = 'SQLiteCONN';

export const SQLiteCONNProvider = {
    provide: SQLiteCONN,
    useFactory: () => {

        const client = knex({
            client: 'mssql',
            debug:false,
            connection: {

            }
        }) ;

        return client ;
    },
    inject: [],
};
