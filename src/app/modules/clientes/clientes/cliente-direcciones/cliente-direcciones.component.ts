import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../../../../clases/direccion';
import { Observable } from 'rxjs';
import { DireccionService } from '../../../../servicios/Direccion/direccion.service';

@Component({
  selector: 'app-cliente-direcciones',
  standalone: false,  
  templateUrl: './cliente-direcciones.component.html',
  styleUrl: './cliente-direcciones.component.css'
})
export class ClienteDireccionesComponent {

  direcciones: Observable<Direccion>;

  constructor(private Routerdireecion: ActivatedRoute, private servicios : DireccionService){ }

  ngOnInit(){
    this.Routerdireecion.params.subscribe((params)=>{
      if(params['id']){
       this.direcciones = this.servicios.getdireccionId(+params['id']) 
      };
      
    })
   }


    
  

}
