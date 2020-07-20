import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';
import { Poll } from 'src/app/_models/poll.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-overview',
  templateUrl: './poll-overview.component.html',
  styleUrls: ['./poll-overview.component.css']
})
export class PollOverviewComponent implements OnInit {
  polls: Poll[] = []

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.getPolls(+sessionStorage.getItem('sessionId')).subscribe(value => {
      this.polls = value;
    })
  }

  navigateToVote(id: number){
    // [routerLink]="['./vote']"
    sessionStorage.setItem('pollId', id.toString());
    this._router.navigateByUrl("voter/polls/vote");
  }

  refresh() {
    this.ngOnInit();
  }

}
