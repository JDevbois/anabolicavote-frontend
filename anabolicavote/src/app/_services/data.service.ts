import { Candidate } from './../_models/candidate.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user.model';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Session } from '../_models/session.model';
import { Poll } from '../_models/poll.model';
import { CreatePollRequest } from '../_requests/CreatePollRequest';
import { VoteRequest } from '../_requests/VoteRequest';
import { Result } from '../_models/result.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<Object> {
    return this.http.post(`api/login`, user.toJSON());
  }

  registerInit(): Observable<Object> {
    return this.http.post(`api/registerInit`, {});
  }

  getSessions(): Observable<Session[]> {
    return this.http.get('api/sessions').pipe(
      map((list: any[]): Session[] => list.map(Session.fromJSON)),
      share()
    );
  }

  createSession(session: Session) {
    return this.http.post(`api/sessions `, session.toJSON());
  }

  deleteSession(id: number) {
    return this.http.post(`api/sessions/delete`, id);
  }

  startSession(id: number) {
    return this.http.post(`api/sessions/start`, id);
  }

  getMaxVotesForSession(id: number): Observable<Object> {
    return this.http.get(`api/sessions/${id}/maxvotes`);
  }

  getPolls(sessionId: number): Observable<Poll[]> {
    return this.http.get(`api/polls/${sessionId}`).pipe(
      map((list: any[]): Poll[] => list.map(Poll.fromJSON)),
      share()
    );
  }

  createPoll(poll: Poll, sessionId: number) {
    const req = new CreatePollRequest(poll, sessionId);
    return this.http.post(`api/polls`, req);
  }

  verifyCode(code: String): Observable<Object> {
    return this.http.post(`api/code`, code);
  }

  getPollById(id: number): Observable<Object> {
    return this.http.get(`api/polls/id/${id}`);
  }

  vote(sessionId: number, pollId: number, code: String, candidate: Candidate): Observable<Object> {
    const req = new VoteRequest(sessionId, pollId, code, candidate);
    return this.http.post(`api/vote`, req);
  }

  getResults(pollId: number): Observable<Result[]> {
    return this.http.get(`api/results/${pollId}`).pipe(
      map((list: any[]): Result[] => list.map(Result.fromJSON)),
      share()
    )
  }
}
