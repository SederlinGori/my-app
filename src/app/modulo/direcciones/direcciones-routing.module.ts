import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirecciondetailsComponent } from '../direcciondetails/direcciondetails.component';
import { DireccionComponent } from '../direccion/direccion.component';
import { DireccionformsComponent } from '../../formularios/direccionforms/direccionforms.component';

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
 