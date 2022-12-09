import { Component } from '@angular/core';
import { Personaje } from './interfaces/dbz.interface';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-page/dbz.component.html',
  styleUrls: ['./main-page/dbz.component.css']
})
export class DbzComponent {
  listado:Personaje[];
  nuevo:Personaje={
    nombre:"",
    poder:0
  }
  
  constructor(){
    this.listado=[]
  }
  agregarNuevoPersonaje(nuevo:Personaje){
    this.listado.push(nuevo)
  }
}
