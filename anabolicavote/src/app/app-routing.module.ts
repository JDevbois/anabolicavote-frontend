import { IndexComponent } from './general/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: IndexComponent},
  
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  