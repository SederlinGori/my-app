import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientedetailsComponent } from './clientedetails/clientedetails.component';
import { ClienteDireccionesComponent } from './cliente-direcciones/cliente-direcciones.component';

const routes: Routes = [
{
  path:'',
  component: ClientesComponent
},

{
  path:'cliente/:id',
  component: ClientedetailsComponent
},
{
  path:'cliente-direcciones/:id',
  component: ClienteDireccionesComponent

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
