import { Component, Input } from '@angular/core';
import { GifObjeto } from './interfaces/interfaceGif.interface';

@Component({
  selector: 'app-giff-app',
  templateUrl: './giff-app.component.html',
  styleUrls: ['./giff-app.component.css']
})
export class GiffAppComponent {
  public apiKey:string
  public objetoGif:GifObjeto
  

  constructor(){
    this.apiKey="a9Wk7u2Ln6RT3KmuP2L9pY8Yo7ZLuHbv";
    this.objetoGif={
      username:"",
      title:"",
      images:""
    }
  }
  mostrar=async()=>{
    //Se hace la petición asíncrona
    console.log(this.apiKey)
    const res=await fetch("https://api.giphy.com/v1/gifs/random?api_key="+this.apiKey)
    const {data}=await res.json()
    //Se añaden los datos al objetoGif
    this.objetoGif={
      username:"@"+data.username,
      title:data.title,
      images:data.images.original.url
    }
    console.log(this.objetoGif)
    
  }

}
