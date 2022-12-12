import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './home.component';
import { Navbar2Component } from '../navbar2/navbar2.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

//Componentes importados en module

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    Navbar2Component 
  ],
  exports:[
    HomeComponent,
    NavBarComponent,
    Navbar2Component 
  ],
  imports: [
    CommonModule
  ]
  
})
export class homeModule { }
