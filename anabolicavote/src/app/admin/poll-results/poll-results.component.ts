import { Result } from './../../_models/result.model';
import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css']
})
export class PollResultsComponent implements OnInit {
  pollId: number;
  results: Result[];

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this.pollId = +sessionStorage.getItem('adminPollId');
    this._dataService.getResults(this.pollId).subscribe(value => {
      this.results = value;
    })
  }

  goBack(){
    this._router.navigateByUrl('admin/sessions/dashboard');
  }

}
