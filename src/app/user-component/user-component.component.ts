import { Component ,OnInit} from '@angular/core';
import { UserService } from './services/user.service';
import { datosUser } from './interfaces/userInterface';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  providers:[UserService]
})


export class UserComponentComponent implements OnInit {
  
  public datosTotales:datosUser;
  public id:string="1";
  public user:boolean=false;
  constructor(private _UserService:UserService){
    this.datosTotales={
      id:"",
      email:"",
      nombre:"",
      apellidos:"",
      avatar:""
    }
  }
  ngOnInit() {
    this.cargarUsuario()
  }
  cargarUsuario(){
    this.user=false;
    this._UserService.getUser(this.id).subscribe(
      result=>{
        
        this.datosTotales={
          id:result.data.id,
          email:result.data.email,
          nombre:result.data.first_name,
          apellidos:result.data.last_name,
          avatar:result.data.avatar
        }
        this.user=true;
        
      },
      error=>{
        console.log(<any>error)
      }
      
    )
    
  }
}
