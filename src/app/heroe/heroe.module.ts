import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';
//Componentes importados en module

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent 
  ],
  exports:[
    HeroeComponent,
    ListadoComponent 
  ],
  imports: [
    CommonModule
  ]
  
})
export class HeroesModule { }
