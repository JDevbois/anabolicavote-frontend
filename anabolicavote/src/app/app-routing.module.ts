import { PollVoteComponent } from './voter/poll-vote/poll-vote.component';
import { PollOverviewComponent } from './voter/poll-overview/poll-overview.component';
import { PollResultsComponent } from './admin/poll-results/poll-results.component';
import { SessionDashboardComponent } from './admin/session-dashboard/session-dashboard.component';
import { SessionCreateComponent } from './admin/session-create/session-create.component';
import { SessionOverviewComponent } from './admin/session-overview/session-overview.component';
import { IndexComponent } from './general/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'admin/sessions', component: SessionOverviewComponent},
    { path: 'admin/sessions/create', component: SessionCreateComponent},
    { path: 'admin/sessions/dashboard', component: SessionDashboardComponent},
    { path: 'admin/sessions/results', component: PollResultsComponent},

    { path: 'voter/polls', component: PollOverviewComponent},
    { path: 'voter/polls/vote', component: PollVoteComponent},
  
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  