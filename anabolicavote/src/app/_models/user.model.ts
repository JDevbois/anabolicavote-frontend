export class User {
    private _username: string;
    private _password: string;

    constructor(
        username: string, password: string
    ) {
        this._username = username;
        this._password = password;
    }

    static fromJSON(json: any): User {
        return new User(
            json.username,
            json.password
        );
    }

    toJSON(): any {
        return {
            username: this.username,
            password: this.password
        }
    }

    public get username(): String {
        return this._username;
    }
    public get password(): string {
        return this._password;
    }
}
