import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
    ],
    imports: [
    ], exports: [
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ]
  })
  export class MaterialModule { }