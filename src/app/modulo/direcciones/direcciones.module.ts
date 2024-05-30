import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from '../direccion/direccion.component';
import { DireccionService } from '../../servicios/Direccion/direccion.service';
import { DirecciondetailsComponent } from '../direcciondetails/direcciondetails.component';
import { EstadoBotonComponent } from '../../estado-boton/estado-boton.component';
import { DireccionformsComponent } from '../../formularios/direccionforms/direccionforms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   DireccionComponent,
   DirecciondetailsComponent,
   DireccionformsComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    EstadoBotonComponent,
    ReactiveFormsModule

  ],
  providers:[
    DireccionService
  ]
})
export class DireccionesModule { }
