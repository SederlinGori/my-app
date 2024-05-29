import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { DireccionComponent } from '../../modulo/direccion/direccion.component';
import { ClientedetailsComponent } from './clientes/clientedetails/clientedetails.component';
import { ClienteDireccionesComponent } from './clientes/cliente-direcciones/cliente-direcciones.component';
import { ClientesService } from '../../servicios/Clientes/clientes.service';
import { EstadoBotonComponent } from '../../estado-boton/estado-boton.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientedetailsComponent,
    ClienteDireccionesComponent,
    ClienteDireccionesComponent    
  
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule, 
    EstadoBotonComponent 
   
    
  ],
  providers:[
    ClientesService
  ]
})
export class ClientesModule { }
