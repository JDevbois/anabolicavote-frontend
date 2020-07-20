import { MaterialModule } from './../material.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionOverviewComponent } from './session-overview/session-overview.component';
import { SessionCreateComponent } from './session-create/session-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionDashboardComponent } from './session-dashboard/session-dashboard.component';
import { PollResultsComponent } from './poll-results/poll-results.component';



@NgModule({
  declarations: [DashboardComponent, SessionOverviewComponent, SessionCreateComponent, SessionDashboardComponent, PollResultsComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
