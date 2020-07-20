import { Candidate } from './../_models/candidate.model';
export class VoteRequest {
    constructor(private sessionId: number, private pollId: number, private code: String, private candidate: Candidate){

    }
}