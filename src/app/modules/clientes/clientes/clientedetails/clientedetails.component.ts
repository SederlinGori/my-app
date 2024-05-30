import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../../../../clases/clientes';
import { ClientesService } from '../../../../servicios/Clientes/clientes.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-clientedetails',
  standalone: false,  
  templateUrl: './clientedetails.component.html',
  styleUrl: './clientedetails.component.css'
})
export class ClientedetailsComponent { 
   
  client: Observable<Clientes>;

  constructor(private detalle :ActivatedRoute, private servicio : ClientesService) { 
   
  }

  ngOnInit(){
    this.detalle.params.subscribe((params) => {
      if(params['id']){
        this.client = this.servicio.getClienteID(+params['id'])
      }
    });

  }
  activar(cliente : Clientes) {
    cliente.active = true;
    this.servicio.editCliente(cliente);
  }
  desactivar(cliente : Clientes) {
    cliente.active = false;
    this.servicio.editCliente(cliente);
  } 
}


