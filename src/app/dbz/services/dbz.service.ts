import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{
    private _listado:Personaje[]=[];

    get listado ():Personaje[]{
        return [...this._listado];
    }

    agregarNuevoPersonaje(personaje:Personaje){
        this._listado.push(personaje)
    }
    constructor(){
        console.log("Servicio Inicializado")
    }
}