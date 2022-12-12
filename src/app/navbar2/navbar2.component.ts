import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  constructor(
    private _router:Router
  ){

  }
  volverHome(){
    this._router.navigate(['./'])
  }
}
