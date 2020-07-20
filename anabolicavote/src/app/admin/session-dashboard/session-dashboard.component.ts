import { Candidate } from './../../_models/candidate.model';
import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/_models/session.model';
import { Poll } from 'src/app/_models/poll.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-session-dashboard',
  templateUrl: './session-dashboard.component.html',
  styleUrls: ['./session-dashboard.component.css']
})
export class SessionDashboardComponent implements OnInit {
  private sessionId: number;
  polls : Poll[];
  candidates: Candidate[] = [];
  pollFormGroup: FormGroup;

  constructor(private _dataService: DataService, private _router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sessionId = +sessionStorage.getItem('adminSessionId');
    this.pollFormGroup = this._formBuilder.group({
      titleCtrl: ['', Validators.required],
      candidateCtrl: ['', Validators.required]
    })
    this._dataService.getPolls(this.sessionId).subscribe(value => {
      this.polls = value;
    });
  }

  createPoll(){
    this._dataService.getMaxVotesForSession(this.sessionId).subscribe(value => {
      this._dataService.createPoll(new Poll(this.pollFormGroup.get('titleCtrl').value, this.candidates, [], +value), this.sessionId).subscribe(value => {
        this.ngOnInit();
      })
    })
  }

  checkResults(pollId: number) {
    // [routerLink]="['../results']"
    sessionStorage.setItem('adminPollId', pollId.toString());
    this._router.navigateByUrl('admin/sessions/results');
  }

  addCandidate() {
    this.candidates.push(new Candidate(this.pollFormGroup.value.candidateCtrl));
  }

  deleteCandidate(candidate: Candidate) {
    this.candidates = this.candidates.filter(e => e.name !== candidate.name);
  }

  refresh() {
    this.ngOnInit();
  }

}
