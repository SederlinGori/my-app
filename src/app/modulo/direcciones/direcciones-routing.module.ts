import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirecciondetailsComponent } from '../direcciondetails/direcciondetails.component';
import { DireccionComponent } from '../direccion/direccion.component';

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
 