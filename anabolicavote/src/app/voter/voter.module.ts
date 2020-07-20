import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollOverviewComponent } from './poll-overview/poll-overview.component';
import { PollVoteComponent } from './poll-vote/poll-vote.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [PollOverviewComponent, PollVoteComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ], exports: [
    PollOverviewComponent
  ]
})
export class VoterModule { }
