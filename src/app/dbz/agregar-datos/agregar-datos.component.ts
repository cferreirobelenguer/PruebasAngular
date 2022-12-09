
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-datos',
  templateUrl: './agregar-datos.component.html',
  styleUrls: ['./agregar-datos.component.css']
})
export class AgregarDatosComponent {
  //coponente hijo que hereda por props nuevo para agregarDatos
  
  @Input() nuevo:Personaje={
    nombre:"",
    poder:0
  }

  constructor(private dbzService:DbzService){

  }
  //@Output() onNuevoPersonaje:EventEmitter<Personaje>=new EventEmitter();
  
  agregarDatos(){
    
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    this.dbzService.agregarNuevoPersonaje(this.nuevo)
    //this.onNuevoPersonaje.emit(this.nuevo)
    this.nuevo={
      nombre:"",
      poder:0
    }
    
  }
}
