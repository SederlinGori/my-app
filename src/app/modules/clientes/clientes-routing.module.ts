import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDireccionesComponent } from './clientes/cliente-direcciones/cliente-direcciones.component';
import { ClientedetailsComponent } from './clientes/clientedetails/clientedetails.component';
import { ClientesformsComponent } from '../../formularios/clientes/clientesforms.component';


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

},
{
  path:'forms/:id',
  component: ClientesformsComponent
},
{
  path:'forms',
  component:ClientesformsComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
