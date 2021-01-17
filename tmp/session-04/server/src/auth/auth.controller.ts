import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { AuthService } from './auth.service';
import {JwtAuthGuard, LocalAuthGuard} from "./auth.guard";

@Controller()
export class AuthController {

    constructor(private authService:AuthService) {
    }


    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return  this.authService.login(req.user);
    }



    @UseGuards(JwtAuthGuard)
    @Post('/secured')
    async secured(@Request() req){
        return req.user;
    }
}