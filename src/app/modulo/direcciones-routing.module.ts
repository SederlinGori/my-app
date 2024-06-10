import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from '../modules/Direcciones/direccion/direccion.component';
import { DirecciondetailsComponent } from '../modules/Direcciones/direcciondetails/direcciondetails.component';
import { DireccionformsComponent } from '../formularios/direccion/direccionforms.component';

const routes: Routes = [
  {
    path:'',
    component: DireccionComponent       
   
  },  
  {
    path:'direccion/:id',
    component: DirecciondetailsComponent
  },
  {
    path:'forms/:id',
    component:DireccionformsComponent
  },
  {
    path:'forms',
    component:DireccionformsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
 