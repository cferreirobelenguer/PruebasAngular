import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { DbzComponent } from './dbz.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarDatosComponent } from './agregar-datos/agregar-datos.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  //Componentes importados en module
  declarations: [
    DbzComponent,
    PersonajesComponent,
    AgregarDatosComponent
  ],
  exports:[
    DbzComponent
  ],
  imports: [
    //Modulos
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  //Servicios
  providers: [DbzService]
  
})
export class dbzModule {}
