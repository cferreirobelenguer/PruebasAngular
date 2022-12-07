import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  nombre:string='Ironman'
  edad:number=45

  get capitalizar(){
    return this.nombre.toLocaleUpperCase()
  }
  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`
  }
  cambiarNombre(valor:string):void{
    this.nombre=valor
  }
  cambiarEdad(valor:number):void{
    this.edad=valor
  }
}
