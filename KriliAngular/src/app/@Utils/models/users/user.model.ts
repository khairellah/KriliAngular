export class User {
    constructor(
        private _username: string,
        private _password: string ,
        private _email: string,    
    ) {}

    set username(value: string) {
        this._username = value;
    }
    set password(value: string) {
        this._password = value;
    }
    set email(value: string) {
        this._email = value;
    }
    get username(): string {
        return this._username;
    }
}