import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {

    constructor(private authService:AuthService) {
    }


    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return  this.authService.login(req.user);
    }



    @Post('/secured')
    async secured(){
        return ' this is secured function';
    }
}