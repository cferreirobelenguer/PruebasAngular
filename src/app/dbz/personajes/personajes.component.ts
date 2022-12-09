import { ThisReceiver } from '@angular/compiler';
import { Component ,Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //@Input() listado:Personaje[]=[]
  get listado (){
    return this.dbzService.listado
  }
  constructor(private dbzService:DbzService){

  }
}
