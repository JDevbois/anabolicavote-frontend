import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GeneralModule { }
