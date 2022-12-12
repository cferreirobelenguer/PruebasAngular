import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Componentes importados en module
import { AppComponent } from './app.component';
import { HeroesModule } from './heroe/heroe.module';
import { ContadorModule } from './contador/contador.module';
import { dbzModule } from './dbz/dbz.module';
import { GiffAppModule } from './giff-app/giff-app.module';
import { AppUserModule } from './user-component/user-component.module';
import { IdentificarModule } from './identificar/identificar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    dbzModule,
    GiffAppModule,
    AppUserModule,
    IdentificarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
