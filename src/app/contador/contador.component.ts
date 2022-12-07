import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contadorComponente/contador.component.html',
  styleUrls: ['./contadorComponente/contador.component.css']
})
export class ContadorComponent {
  public contador:number;
  public base:number;
  constructor() {
    this.contador=20;
    this.base=5;
  }

  increment(base:number){
    this.contador+=this.base
  }
  decrement(base:number){
    this.contador-=this.base
  }
  resetValue(){
    this.contador=20
  }
}
