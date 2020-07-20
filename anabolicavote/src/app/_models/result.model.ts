export class Result {
    private _candidateName: string;
    private _numberOfVotes: number;

    constructor(
        candidateName: string, numberOfVotes: number
    ) {
        this._candidateName = candidateName;
        this._numberOfVotes = numberOfVotes;
    }

    static fromJSON(json: any): Result {
        const result = new Result(
            json.candidateName, json.numberOfVotes
        );
        return result;
    }

    toJSON(): any {
        return {
            candidateName: this.candidateName,
            numberOfVotes: this.numberOfVotes
        }
    }

    public get candidateName(): String {
        return this._candidateName;
    }

    public get numberOfVotes(): number {
        return this._numberOfVotes;
    }
}
