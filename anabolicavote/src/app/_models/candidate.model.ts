export class Candidate {
    private _name: string;
    private _id: number;

    constructor(
        name: string
    ) {
        this._name = name;
    }

    static fromJSON(json: any): Candidate {
        const candidate = new Candidate(
            json.name,
        );
        candidate._id = json.id;
        return candidate;
    }

    toJSON(): any {
        return {
            name: this.name
        }
    }

    public get name(): String {
        return this._name;
    }

    public get id(): number {
        return this._id;
    }
}
