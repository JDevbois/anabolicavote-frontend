import { AppRoutingModule } from './../app-routing.module';
import { AdminModule } from './../admin/admin.module';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AdminModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class GeneralModule { }
