import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Componentes importados en module
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
