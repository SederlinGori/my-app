import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from '../modules/clientes/clientes/clientes/clientes.component';
import { ClientedetailsComponent } from '../modules/clientes/clientes/clientedetails/clientedetails.component';
import { ClienteDireccionesComponent } from '../modules/clientes/clientes/cliente-direcciones/cliente-direcciones.component';
import { ClientesformsComponent } from '../formularios/clientes/clientesforms.component';
import { EstadoBotonComponent } from '../estado-boton/estado-boton.component';
import { ClientesService } from '../servicios/Clientes/clientes.service';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers:[
    ClientesService
  ]
})
export class ClientesModule { }
