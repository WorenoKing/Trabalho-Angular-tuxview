import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoComponent } from './foto/foto.component';
import { Header } from './head/head.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    Header,
    InicioComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
