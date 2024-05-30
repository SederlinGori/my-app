import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../../clases/direccion';
import { Observable } from 'rxjs';
import { DireccionService } from '../../servicios/Direccion/direccion.service';

@Component({
  selector: 'app-direcciondetails',
  standalone: false,  
  templateUrl: './direcciondetails.component.html',
  styleUrl: './direcciondetails.component.css'
})
export class DirecciondetailsComponent {
 
  direccion: Observable<Direccion>;  
  constructor(private Routerdireecion: ActivatedRoute, private servicios : DireccionService){ }

  ngOnInit(){
    this.Routerdireecion.params.subscribe((params)=>{
      if(params['id']){
       this.direccion = this.servicios.getdireccionId(+params['id']) 
      };
      
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
