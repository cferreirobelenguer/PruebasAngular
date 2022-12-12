import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//Servicio que realiza petición http a api rest reqres
@Injectable()
export class UserService{
    public url:string
    constructor( public _http:HttpClient){
        this.url='https://reqres.in/'
    }

    getUser(id:string): Observable<any>{
        //Petición ajax por http 
        return this._http.get(this.url+'api/users/'+id)
    }


}