import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../../../../clases/direccion';
import { Observable } from 'rxjs';
import { DireccionService } from '../../../../servicios/Direccion/direccion.service';
import { DireccionesRoutingModule } from '../../../../modulo/direcciones-routing.module';

@Component({
  selector: 'app-cliente-direcciones',
  standalone: false,  
  templateUrl: './cliente-direcciones.component.html',
  styleUrl: './cliente-direcciones.component.css'
})
export class ClienteDireccionesComponent {

  direcciones: Direccion;

  

  constructor(private Routerdireecion: ActivatedRoute, private servicios : DireccionService){ }

  ngOnInit(){
    this.Routerdireecion.params.subscribe((params)=>{
      if(params['clienteId']){
        this.servicios.getDireccionesByClientId(+params['clienteId']).subscribe({
          next:(value)=>{
            this.direcciones=(value)
          },
          error:(error)=>{
            console.error(error)
          }
        })
      }
      
    })
   }


    
  

}
