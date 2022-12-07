import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { DbzComponent } from './dbz.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Componentes importados en module

@NgModule({
  declarations: [
    DbzComponent
  ],
  exports:[
    DbzComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
  
})
export class dbzModule { }
