//módulos del router de angular
import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HomeComponent } from './home/home.component';

//Array de rutas
const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'nosotros',component:NavBarComponent},
    {path:'contacto',component:Navbar2Component},
    {path: '**',component:HomeComponent}
];

export const appRoutingProviers:any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes)