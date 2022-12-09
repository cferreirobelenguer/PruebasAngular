import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { DbzComponent } from './dbz.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarDatosComponent } from './agregar-datos/agregar-datos.component';

//Componentes importados en module

@NgModule({
  declarations: [
    DbzComponent,
    PersonajesComponent,
    AgregarDatosComponent
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
