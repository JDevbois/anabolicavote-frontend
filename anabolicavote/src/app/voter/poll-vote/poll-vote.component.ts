import { Poll } from './../../_models/poll.model';
import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.css']
})
export class PollVoteComponent implements OnInit {
  poll: any
  selectedCandidate: number;

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.getPollById(+sessionStorage.getItem('pollId')).subscribe(value => {
      this.poll = value;
    })
  }

  onChangeRadio(event){
    this.selectedCandidate = event.value;
  }

  vote(){
    this._dataService.vote(
      +sessionStorage.getItem('sessionId'),
      +sessionStorage.getItem('pollId'),
      sessionStorage.getItem('code'),
      this.poll.candidates.filter(x => x.id == this.selectedCandidate)[0])
      .subscribe(value => {
      this._router.navigateByUrl('voter/polls');
    })
  }

}
