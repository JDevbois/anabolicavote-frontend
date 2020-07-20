import { Candidate } from './candidate.model';
export class Vote {
    private _candidate: Candidate;
    private _id: number;
    private _code: String;

    constructor(
        candidate: Candidate, code: String
    ) {
        this._candidate = candidate;
        this._code = code;
    }

    static fromJSON(json: any): Vote {
        const vote = new Vote(
            json.candidate,
            json.code,
        );
        vote._id = json.id;
        return vote;
    }

    toJSON(): any {
        return {
            candidate: this.candidate,
            code: this.code,
        }
    }

    public get candidate(): Candidate {
        return this._candidate;
    }
    public get code(): String {
        return this._code;
    }

    public get id(): number {
        return this._id;
    }
}
