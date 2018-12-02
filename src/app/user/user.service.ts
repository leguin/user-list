import { Injectable } from "@angular/core";
import { User } from "./user.entity";

@Injectable()
export class UserService { 

    private _users : Array<User>; 

    constructor() {        
        this._users = []; 
        console.log('Created new instance');
    }

    add(user: User) { 
        this._users.push(user);
    }

    getUsers() : Array<User> { 
        return this._users;
    }
}