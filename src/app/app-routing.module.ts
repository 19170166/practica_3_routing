import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Componente1Component} from './Componentes/componente1/componente1.component';
import {Componente2Component} from './Componentes/componente2/componente2.component';
import {Componente3Component} from './Componentes/componente3/componente3.component';
import {Componente4Component} from './Componentes/componente4/componente4.component';
import {Componente5Component} from './Componentes/componente5/componente5.component';
import {Componente6Component} from './Componentes/componente6/componente6.component';

const routes: Routes = [
  {path: 'Componente1', component: Componente1Component},
  {path: 'Componente2', component: Componente2Component},
  {path: 'Componente3/:nombre', component: Componente3Component},
  {path: 'Componente4', component: Componente4Component},
  {path: 'Componente5/:nombre/:apellido', component: Componente5Component},
  {path: '', redirectTo: '/Componente2', pathMatch: 'full'},
  {path: '**', component: Componente6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]         
})
export class AppRoutingModule { }
