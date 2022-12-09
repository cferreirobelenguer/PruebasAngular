import { Component } from '@angular/core';
import { Personaje } from './interfaces/dbz.interface';
import { DbzService } from './services/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-page/dbz.component.html',
  styleUrls: ['./main-page/dbz.component.css']
})
export class DbzComponent  {
  
  nuevo:Personaje={
    nombre:"",
    poder:0
  }
  
  constructor(private dbzService:DbzService){
    
  }


}
