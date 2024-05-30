import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { DireccionComponent } from '../../modulo/direccion/direccion.component';
import { ClientedetailsComponent } from './clientes/clientedetails/clientedetails.component';
import { ClienteDireccionesComponent } from './clientes/cliente-direcciones/cliente-direcciones.component';
import { ClientesService } from '../../servicios/Clientes/clientes.service';
import { EstadoBotonComponent } from '../../estado-boton/estado-boton.component';
import { ClientesformsComponent } from '../../formularios/clientes/clientesforms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientedetailsComponent,
    ClienteDireccionesComponent,
    ClienteDireccionesComponent,
    ClientesformsComponent 
  
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule, 
    EstadoBotonComponent ,
    ReactiveFormsModule   
    
  ],
  providers:[
    ClientesService
  ]
})
export class ClientesModule { }
