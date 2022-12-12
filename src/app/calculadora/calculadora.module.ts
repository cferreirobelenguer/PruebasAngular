import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  //Componentes importados en module
  declarations: [
    CalculadoraComponent,
    CalculadoraPipe
  ],
  exports:[
    CalculadoraComponent
  ],
  imports: [
    //Modulos
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class calculadoraModule {}
