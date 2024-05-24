import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientedetailsComponent } from './clientedetails/clientedetails.component';
import { DirecciondetailsComponent } from '../../modulo/direcciondetails/direcciondetails.component';
import { DireccionesRoutingModule } from '../../modulo/direcciones/direcciones-routing.module';
import { DireccionComponent } from '../../modulo/direccion/direccion.component';
import { ClienteDireccionesComponent } from './cliente-direcciones/cliente-direcciones.component';


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
