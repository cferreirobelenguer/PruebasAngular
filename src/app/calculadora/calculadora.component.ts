import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public numero1:number=0
  public numero2:number=0

  enviarDatos(){
    //Este método coge los datos del input
    this.numero1=this.numero1
    this.numero2=this.numero2
    
  }
}
