import { Poll } from './../_models/poll.model';
export class CreatePollRequest {
    constructor(private poll: Poll, private sessionId: number) {

    }
}