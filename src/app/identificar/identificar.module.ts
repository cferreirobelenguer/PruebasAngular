import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { IdentificarComponent } from './identificar.component';

//Componentes importados en module

@NgModule({
  declarations: [
    IdentificarComponent
  ],
  exports:[
    IdentificarComponent
  ],
  imports: [
    CommonModule
  ]
  
})
export class IdentificarModule { }
