import { Candidate } from './candidate.model';
import { Vote } from './vote.model';

export class Poll {
    private _id: number;
    private _title: string;
    private _candidates: Candidate[];
    private _votes: Vote[];
    private _maxVotes: number;

    constructor(
        title: string, candidates: Candidate[], votes: Vote[], maxVotes: number
    ) {
        this._title = title;
        this._candidates = candidates;
        this._votes = votes;
        this._maxVotes = maxVotes;
    }

    static fromJSON(json: any): Poll {
        const poll = new Poll(
            json.title,
            json.candidates,
            json.votes,
            json.maxVotes
        );
        poll._id = json.id;
        return poll;
    }

    toJSON(): any {
        return {
            title: this.title,
            candidates: this.candidates,
            votes: this.votes
        }
    }

    public get title(): String {
        return this._title;
    }
    public get candidates(): Candidate[] {
        return this._candidates;
    }

    public get votes(): Vote[] {
        return this._votes;
    }

    public get maxVotes(): number {
        return this._maxVotes;
    }

    public get id(): number {
        return this._id;
    }
}
