import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
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
