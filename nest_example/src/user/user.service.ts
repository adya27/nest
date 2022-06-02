import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getHello():string {
        return "works!";
    }

    postHello():string {
        return "post works!";
    }
}
