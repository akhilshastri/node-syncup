const knex = require('knex') ;


export const MSSqlCONN = 'MSSqlCONN';

export const MSSqlCONNProvider = {
    provide: MSSqlCONN,
    useFactory: () => {

        const client = knex({
            client: 'sqlite3',
            connection: {
                filename: "./db.sqlite"
            }
        });

        return client ;
    },
    inject: [],
};
