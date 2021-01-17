import {Inject, Injectable} from '@nestjs/common';
import {SQLiteCONN} from "../my-db/mssql-conn-factory";
import {MSSqlCONN} from "../my-db/sqlite-conn-factory";

@Injectable()
export class XlImportService {

    constructor(@Inject(SQLiteCONN) private sqliteConn,
                @Inject(MSSqlCONN) private mssqlConn,
    ) {

    }


    async importToDB(dbType, data) {
        const conn = dbType == 1 ? this.sqliteConn : this.mssqlConn;

        await conn.insert(data).into('users');


    }

}
