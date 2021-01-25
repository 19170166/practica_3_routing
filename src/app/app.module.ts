import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './Componentes/componente1/componente1.component';
import { Componente2Component } from './Componentes/componente2/componente2.component';
import { Componente3Component } from './Componentes/componente3/componente3.component';
import { Componente4Component } from './Componentes/componente4/componente4.component';
import { Componente5Component } from './Componentes/componente5/componente5.component';
import { Componente6Component } from './Componentes/componente6/componente6.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component,
    Componente6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
