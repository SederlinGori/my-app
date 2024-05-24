import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { DireccionComponent } from '../../modulo/direccion/direccion.component';
import { ClientedetailsComponent } from './clientes/clientedetails/clientedetails.component';
import { ClienteDireccionesComponent } from './clientes/cliente-direcciones/cliente-direcciones.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientedetailsComponent,
    ClienteDireccionesComponent

    
  
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    
  
   
    
  ]
})
export class ClientesModule { }
