import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  public contador:number;
  constructor() {
    this.contador=20;
  }

  increment(valor:number){
    this.contador+=valor
  }
  decrement(valor:number){
    this.contador-=valor
  }
  resetValue(){
    this.contador=20
  }
}
