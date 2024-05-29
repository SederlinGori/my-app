import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from '../direccion/direccion.component';
import { DireccionService } from '../../servicios/Direccion/direccion.service';
import { DirecciondetailsComponent } from '../direcciondetails/direcciondetails.component';
import { EstadoBotonComponent } from '../../estado-boton/estado-boton.component';


@NgModule({
  declarations: [
   DireccionComponent,
   DirecciondetailsComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    EstadoBotonComponent

  ],
  providers:[
    DireccionService
  ]
})
export class DireccionesModule { }
