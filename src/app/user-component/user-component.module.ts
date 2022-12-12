import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserComponentComponent } from './user-component.component';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


//Componentes importados en module

@NgModule({
  declarations: [
    UserComponentComponent
  ],
  exports:[
    UserComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  //Servicios
  providers: [UserService]
  
})
export class AppUserModule { }
