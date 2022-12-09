import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { GiffAppComponent } from './giff-app.component';
import { ImprimirComponent } from './imprimir/imprimir.component';




//Componentes de la app giff-app importados en un único module, este module se llama en app.module

@NgModule({
  declarations: [
    GiffAppComponent,
    ImprimirComponent
  ],
  exports:[
    GiffAppComponent
  ],
  imports: [
    CommonModule
  ]
  
})
export class GiffAppModule{ }
