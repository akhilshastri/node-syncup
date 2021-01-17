import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) {}

     validateUser(username,pwd){
        if (username!==pwd){
            return false;
        }
        return ({username,pwd}); // => user
    }

    async login(user: any) {
        const payload = { username: user.username, sub: 100 };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}