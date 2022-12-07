import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public listado:string[]=['Spiderman','Daredevil','Ironman','Superman','Batman']
  public heroeBorrado:string;
  public show:boolean=false
    constructor(){
      this.heroeBorrado=""
    }
  addArgument(valor:string):void{
    //Se añade el valor pasado por argumento en la última posición del listado
    this.listado.push(valor)
    console.log(this.listado)
    this.show=false
  }
  deleteArgument():void{
    //Borra el último elemento de la lista
    this.heroeBorrado=this.listado.shift()|| ""
    console.log(this.heroeBorrado)
    if(this.heroeBorrado!==undefined){
      this.show=true
    }else{
      this.show=false
    }
  }
}
