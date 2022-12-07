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

  increment(){
    this.contador+=1
  }
  decrement(){
    this.contador-=1
  }
  resetValue(){
    this.contador=20
  }
}
