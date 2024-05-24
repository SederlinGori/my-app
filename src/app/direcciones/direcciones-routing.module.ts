import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from '../modulo/direccion/direccion.component';
import { DirecciondetailsComponent } from './direcciondetails/direcciondetails.component';

const routes: Routes = [
  {
    path:'',
    component: DireccionComponent
  },  
  {
    path:'direccion/:id',
    component: DirecciondetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
 