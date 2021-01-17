import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy';
import {JwtStrategy} from "./auth/jwt.strategy";
import { MyDbModule } from './my-db/my-db.module';
import { XlImportService } from './xl-import/xl-import.service';

@Module({
  imports: [
      PassportModule,
    JwtModule.register({
    secret: 'SCERATE',
    signOptions: { expiresIn: '300s' },
  }),
    MyDbModule,],



  controllers: [AppController, AuthController],
  providers: [AppService,LocalStrategy,AuthService,JwtStrategy, XlImportService],
})
export class AppModule {}
