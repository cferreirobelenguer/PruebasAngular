import { Component, Input } from '@angular/core';
import { GifObjeto } from '../interfaces/interfaceGif.interface';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css']
})
export class ImprimirComponent {
  //Se coge el dato heredado del componente padre
  @Input() objetoGif:GifObjeto={
    username:"",
    title:"",
    images:""
  }
  
  
}
