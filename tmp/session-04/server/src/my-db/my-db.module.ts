import { Module } from '@nestjs/common';
import {MSSqlCONN, MSSqlCONNProvider} from "./sqlite-conn-factory";
import {SQLiteCONN, SQLiteCONNProvider} from "./mssql-conn-factory";

@Module({

    providers:[
        MSSqlCONNProvider, SQLiteCONNProvider
    ],
    exports:[
        MSSqlCONN, SQLiteCONN
    ]
})
export class MyDbModule {



}
