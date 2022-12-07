import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ContadorComponent } from './contador.component';


//Componentes importados en module

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ],
  imports: [
    CommonModule
  ]
  
})
export class ContadorModule { }
