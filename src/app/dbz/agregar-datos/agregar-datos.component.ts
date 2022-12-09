import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-datos',
  templateUrl: './agregar-datos.component.html',
  styleUrls: ['./agregar-datos.component.css']
})
export class AgregarDatosComponent {
  //coponente hijo que hereda por props listado y nuevo para agregarDatos
  @Input() listado:Personaje[]=[]
  @Input() nuevo:Personaje={
    nombre:"",
    poder:0
  }
  agregarDatos(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    this.listado.push(this.nuevo);
    this.nuevo={
      nombre:"",
      poder:0
    }
    console.log(this.listado)
  }
}
