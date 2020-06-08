import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ], exports: [
    ToolbarComponent
  ]
})
export class NavigationModule { }
