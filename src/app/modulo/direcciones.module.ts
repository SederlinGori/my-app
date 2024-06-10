import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionesRoutingModule } from './direcciones-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DireccionComponent } from '../modules/Direcciones/direccion/direccion.component';
import { DireccionformsComponent } from '../formularios/direccion/direccionforms.component';
import { DirecciondetailsComponent } from '../modules/Direcciones/direcciondetails/direcciondetails.component';
import { EstadoBotonComponent } from '../estado-boton/estado-boton.component';
import { DireccionService } from '../servicios/Direccion/direccion.service';
import { HttpClientModule } from '@angular/common/http';


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
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers:[
    DireccionService
  ]
})
export class DireccionesModule { }
