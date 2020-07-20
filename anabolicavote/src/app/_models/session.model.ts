export class Session {
    private _title: string;
    private _description: string;
    private _id: number;
    private _contacts: String[];

    constructor(
        title: string, description: string, contacts: String[]
    ) {
        this._title = title;
        this._description = description;
        this._contacts = contacts;
    }

    static fromJSON(json: any): Session {
        const session = new Session(
            json.title,
            json.description,
            json.contacts
        );
        session._id = json.id;
        return session;
    }

    toJSON(): any {
        return {
            title: this.title,
            description: this.description,
            contacts: this.contacts
        }
    }

    public get title(): String {
        return this._title;
    }
    public get description(): string {
        return this._description;
    }

    public get contacts(): String[] {
        return this._contacts;
    }

    public get id(): number {
        return this._id;
    }
}
