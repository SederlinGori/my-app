import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DireccionService } from '../../../servicios/Direccion/direccion.service';
import { Direccion } from '../../../clases/direccion';

@Component({
  selector: 'app-direcciondetails',
  standalone: false,  
  templateUrl: './direcciondetails.component.html',
  styleUrl: './direcciondetails.component.css'
})
export class DirecciondetailsComponent {
 
  direccion: Direccion;  
  constructor(private Routerdireecion: ActivatedRoute, private servicios : DireccionService){ }

  ngOnInit(){
    this.Routerdireecion.params.subscribe((params)=>{
      if(params['id']){
        this.servicios.getdireccionId(+params['id']).subscribe({
          next:(value)=>{
            this.direccion=(value)
          },
          error:(error)=>{
            console.error(error)
          }
        })
      }
      
    })
  }
  activar(direccion : Direccion) {
    direccion.active = true;
    this.servicios.editDireccion(direccion);
  }
  
  desactivar(direccion : Direccion) {
    direccion.active = false;
    this.servicios.editDireccion(direccion);
  }
            
  


}
