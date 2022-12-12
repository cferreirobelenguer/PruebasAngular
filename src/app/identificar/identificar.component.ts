import { Component } from '@angular/core';

@Component({
  selector: 'app-identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent {
  public useridentificate:boolean=false;


  identificarUsuario(){
    this.useridentificate=true;
  }
  salirLogin(){
    this.useridentificate=false;
  }
}
